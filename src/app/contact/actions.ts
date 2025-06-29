"use server";

import type { ContactFormData } from './schema';
import { contactFormSchema } from './schema';
import { Resend } from 'resend';

export interface Suggestion {
  title: string;
  description: string;
}

export async function submitContactForm(
  values: ContactFormData
): Promise<{ success: true; suggestions: Suggestion[] } | { success: false; error: string }> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, automationNeeds, challenges } = parsed.data;

  try {
    // Send email if API key is available
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Omniai Contact Form <onboarding@resend.dev>',
        to: 'Olujimitobilobaa@gmail.com',
        subject: `New Message from ${name} via Omniai Website`,
        reply_to: email,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>New Contact Form Submission</h2>
            <p>You've received a new message from your website contact form.</p>
            <hr>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3>What do you want to automate?</h3>
            <p>${automationNeeds}</p>
            <h3>What are your biggest challenges?</h3>
            <p>${challenges || 'Not provided'}</p>
          </div>
        `,
      });
    } else {
      console.warn('RESEND_API_KEY is not set. Email not sent. For local testing, this is expected.');
      // Log form data for debugging when email isn't sent
      console.log('New contact form submission:');
      console.log(parsed.data);
    }
    
    // Using hardcoded mock suggestions for demonstration
    const mockSuggestions: Suggestion[] = [
      {
        title: "Automated Lead Qualification Agent",
        description: "An AI agent could instantly engage new leads via email, ask qualifying questions, and categorize them in your CRM, ensuring you only focus on the hottest prospects."
      },
      {
        title: "24/7 AI Customer Support Bot",
        description: "Implement a chatbot on your website to answer common questions, handle initial support queries, and escalate complex issues to your team, improving customer satisfaction."
      },
      {
        title: "Smart Appointment Scheduling System",
        description: "Create a workflow that not only books appointments but also sends automated reminders, follow ups, and updates your calendar, virtually eliminating no shows."
      }
    ];

    return { success: true, suggestions: mockSuggestions };

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'An unexpected error occurred while sending the message.' };
  }
}
