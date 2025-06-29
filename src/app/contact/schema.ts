import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  automationNeeds: z.string().min(10, { message: 'Please describe your needs in at least 10 characters.' }),
  challenges: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
