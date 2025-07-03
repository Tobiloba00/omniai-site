import { Mail, Send, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <div className="fade-in">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold tracking-tight">Let's Connect</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Ready to transform your business? Send a message or schedule a call.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-1">
             <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-poppins"><Send className="text-primary w-6 h-6" /> Get In Touch</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-10">
                <form action="https://formsubmit.co/omniaiteamsl@gmail.com" method="POST" className="space-y-8">
                   <input type="hidden" name="_captcha" value="false" />
                   <input type="hidden" name="_next" value="https://omniai.vercel.app/thank-you" />
                   
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" name="message" placeholder="Please describe what you're looking for..." rows={4} required />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
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
                   <iframe src="https://calendly.com/omniaiteams" className="w-full h-full border-0 min-h-[640px]" title="Calendly Booking"></iframe>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-poppins"><Mail className="text-primary w-6 h-6" /> Direct Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For quick questions, feel free to send an email.</p>
                <a href="mailto:omniaiteams@gmail.com" className="font-semibold text-primary break-all hover:underline">omniaiteams@gmail.com</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
