import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Meet the Founders | omniai',
  description: 'Meet Tobiloba Olujimi and Dan Adelusi, the co-founders of omniai, and learn about our mission to bring intelligent automation to businesses of all sizes.',
  keywords: 'Dan Adelusi AI automation engineer, GPT workflows Nigeria, full-stack AI developer, omniai co-founder, Nexus Dashboard architect, Tobiloba Olujimi AI systems builder, AI agents Nigeria, WhatsApp automation developer, backend AI engineer',
};

export default function FoundersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold tracking-tight">
            Meet the Founders
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            The minds behind omniai's mission to revolutionize business automation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-sm rounded-2xl p-8 md:p-12 border bg-card">
            <h2 className="text-3xl font-poppins font-semibold mb-6">About omniai</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>At omniai, we build intelligent systems that simplify work and amplify results.</p>
              <p>We are a next-generation AI automation agency focused on creating custom GPT-powered agents, automated workflows, and smart voice/chat interfaces. Our tools help startups, institutions, and agencies eliminate repetitive tasks, streamline operations, and scale with confidence.</p>
              <p>Founded by two visionary developers — Tobiloba Olujimi and Dan Adelusi — omniai blends deep technical expertise in full-stack engineering, AI integration, and low-code platforms like n8n, Supabase, and OpenRouter.</p>
              <p>Together, we develop AI systems that power education (omniai for FUOYE), business automation (Nexus, AssistX), and live data solutions (Nova News Agent).</p>
              <p>We believe the future of work is intelligent — and we’re building it, one workflow at a time.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 md:py-32 bg-secondary border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              Meet the Founders
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

            {/* Dan Adelusi */}
            <Card className="flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl hover:-translate-y-1 p-6 md:p-8 h-full">
              <Image
                src="/adelusi.jpg"
                alt="Photo of Dan Adelusi"
                width={256}
                height={256}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full mb-6 object-cover ring-4 ring-primary/20"
              />
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-2xl font-poppins">Dan Adelusi</CardTitle>
                <CardDescription className="text-primary font-semibold pt-1">Co-Founder & AI Systems Engineer</CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-6 text-muted-foreground text-center">
                <p>Dan is a systems thinker with a strong grip on full-stack engineering, AI workflow architecture, and scalable automation pipelines. At omniai, he co-leads everything from architecture to execution.</p>
                <p className="mt-4">Dan specializes in n8n-based automations, GPT integrations, and end-to-end solutions that reduce friction and boost output.</p>
                <p className="mt-4">Dan builds with a clear philosophy: automation should make work easier, not more complicated.</p>
              </CardContent>
            </Card>

            {/* Tobiloba Olujimi */}
            <Card className="flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl hover:-translate-y-1 p-6 md:p-8 h-full">
              <Image
                src="/tobiloba.jpg"
                alt="Photo of Tobiloba Olujimi"
                width={256}
                height={256}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full mb-6 object-cover ring-4 ring-primary/20"
              />
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-2xl font-poppins">Tobiloba Olujimi</CardTitle>
                <CardDescription className="text-primary font-semibold pt-1">Co-Founder & AI Systems Engineer</CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-6 text-muted-foreground text-center">
                <p>Tobiloba co-founded omniai with a mission to bring high-performance automation to businesses that need speed, scale, and simplicity. He co-leads the development and deployment of every AI system.</p>
                <p className="mt-4">Tobi’s strengths lie in building resilient infrastructure, connecting APIs, and ensuring every AI agent works seamlessly across platforms like WhatsApp, websites, and CRMs.</p>
                <p className="mt-4">Tobi believes every great automation should work so smoothly that users forget it's even AI.</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </main>
  );
}
