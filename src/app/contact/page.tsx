
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail, Send, CheckCircle, Lightbulb, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from './actions';
import type { Suggestion } from './actions';
import { contactFormSchema, type ContactFormData } from './schema';

export default function ContactPage() {
  const [formState, setFormState] = useState<{ status: 'idle' | 'loading' | 'success' | 'error', suggestions: Suggestion[] | null }>({ status: 'idle', suggestions: null });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      automationNeeds: '',
      challenges: '',
    },
  });

  async function onSubmit(values: ContactFormData) {
    setFormState({ status: 'loading', suggestions: null });
    const result = await submitContactForm(values);
    if (result.success) {
      setFormState({ status: 'success', suggestions: result.suggestions });
      form.reset();
    } else {
      setFormState({ status: 'error', suggestions: null });
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="fade-in">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold tracking-tight">Let's Connect</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Ready to transform your business? Choose your preferred way to get in touch.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-1">
             <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-poppins"><Send className="text-primary w-6 h-6" /> Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-10">
                {formState.status === 'success' ? (
                  <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-poppins font-semibold">Message Sent!</h3>
                    <p className="text-muted-foreground mt-2">Thank you for reaching out. I'll be in touch shortly.</p>
                    {formState.suggestions && (
                      <div className="mt-8 text-left bg-secondary p-6 rounded-lg">
                        <h4 className="text-xl font-poppins font-semibold flex items-center gap-2 mb-4"><Lightbulb className="text-amber-500" /> AI Powered Suggestions</h4>
                        <p className="text-muted-foreground mb-4">Based on your submission, here are a few ideas:</p>
                        <ul className="space-y-3">
                          {formState.suggestions.map((s, i) => (
                            <li key={i} className="bg-background p-4 rounded-md">
                              <p className="font-semibold text-foreground font-poppins">{s.title}</p>
                              <p className="text-sm text-muted-foreground">{s.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button onClick={() => setFormState({ status: 'idle', suggestions: null })} className="mt-8">Send another message</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="automationNeeds" render={({ field }) => (
                        <FormItem><FormLabel>What do you want to automate?</FormLabel><FormControl><Textarea placeholder="e.g., 'I want to automate my lead follow-up process...'" rows={4} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="challenges" render={({ field }) => (
                        <FormItem><FormLabel>What are your biggest challenges? (Optional)</FormLabel><FormControl><Textarea placeholder="e.g., 'We're missing leads because we respond too slowly...'" rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" disabled={formState.status === 'loading'} className="w-full" size="lg">
                        {formState.status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Send Message
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Options */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-poppins"><Calendar className="text-primary w-6 h-6" /> Book a Strategy Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">The fastest way to get personalized advice. Schedule a free 30 minute call.</p>
                <div className="w-full bg-muted rounded-lg overflow-hidden min-h-[640px]">
                   <iframe src="https://calendly.com/olujimitobilobaa" className="w-full h-full border-0 min-h-[640px]" title="Calendly Booking"></iframe>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-poppins"><Mail className="text-primary w-6 h-6" /> Direct Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For quick questions, feel free to send an email.</p>
                <a href="mailto:Olujimitobilobaa@gmail.com" className="font-semibold text-primary break-all hover:underline">Olujimitobilobaa@gmail.com</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
