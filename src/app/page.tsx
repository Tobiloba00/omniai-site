
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Bot, SlidersHorizontal, Zap, ChevronRight, BrainCircuit, Target, Beaker, Code, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog-data";


export default function Home() {
  const benefits = [
    "Save 10+ hours per week by eliminating repetitive tasks",
    "Never miss a lead with instant, 24/7 AI-powered responses",
    "Scale your operations without hiring a full time team",
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Starter Automations",
      description: "Deploy single-task AI agents to handle auto-replies, basic lead qualification, and more.",
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8 text-primary" />,
      title: "Full Workflow Systems",
      description: "Implement end to end automation, from lead capture to CRM updates and follow-ups.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Custom AI Solutions",
      description: "Get a fully tailored automation solution built from the ground up for your unique business needs.",
    },
  ];
  
  const processSteps = [
    {
      step: "1/5",
      title: "Requirement Analysis",
      description: "We deeply analyze your business needs, pain points, and opportunities to understand where AI can create the most value.",
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    },
    {
      step: "2/5",
      title: "Strategy Development",
      description: "We create a tailored AI strategy and roadmap that aligns with your business goals and maximizes ROI.",
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      step: "3/5",
      title: "Theory Testing",
      description: "We validate concepts with small-scale prototypes to ensure our approach works in your specific context before full implementation.",
      icon: <Beaker className="w-8 h-8 text-primary" />,
    },
    {
      step: "4/5",
      title: "Building the Solution",
      description: "Our engineers develop your custom AI solution, integrating it with your existing systems and workflows.",
      icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
      step: "5/5",
      title: "Deployment & Training",
      description: "We deploy your solution and train your team to ensure smooth adoption and maximum impact.",
      icon: <Rocket className="w-8 h-8 text-primary" />,
    },
  ];

  const visionPoints = [
    "AI-powered business operations",
    "Seamless task and workflow automation",
    "24/7 intelligent response systems",
    "Scalable efficiency for small and growing teams",
  ];

  const approachPoints = [
    "Custom AI agent development tailored to your goals",
    "End to end task and process automation",
    "Instant response systems for lead gen and support",
    "Scalable automation built to grow with your business",
  ];

  const faqs = [
      { q: "What kinds of tasks can your AI agents automate?", a: "Lead responses, appointment bookings, follow-ups, customer support, onboarding flows, and more." },
      { q: "How long does it take to build an automation?", a: "Starter automations take 3–5 days. Complex workflows take 1–2 weeks depending on scope." },
      { q: "Can I update the AI agent later myself?", a: "Yes. I offer training so you or your team can make simple edits without breaking anything." },
      { q: "Will it work with my existing tools?", a: "Most likely — I support 50+ apps like Google, Notion, CRMs, and more." },
      { q: "How much does it cost?", a: "Pricing depends on the complexity, but it's far cheaper than hiring a full time assistant." },
  ];

  const recentPosts = getAllPosts().slice(0, 2);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-poppins font-semibold tracking-tighter text-foreground">
                Automate Smarter With <span className="text-primary">Omniai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Custom built AI agents that work 24/7 — so you don’t have to.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                  <Link href="/contact">Let's Build Yours</Link>
                </Button>
                <Button asChild size="lg" variant="link">
                  <Link href="#services">See how it works</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex relative mt-12 md:mt-0">
                <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="bg-slate-900/95 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl ring-1 ring-white/10 font-mono text-sm text-slate-200 w-full max-w-md">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <p><span className="text-green-400/80">$</span> Initializing omni_agent...</p>
                        <p><span className="text-muted-foreground">&gt;</span> Agent activated. Analyzing workflow: [Lead Follow-Up]</p>
                        <p><span className="text-muted-foreground">&gt;</span> Identifying bottlenecks...</p>
                        <p><span className="text-muted-foreground">&gt;</span> Found 3 critical delays.</p>
                        <p><span className="text-muted-foreground">&gt;</span> Deploying automation sequence...</p>
                        <p className="text-yellow-400"><span className="text-muted-foreground">&gt;</span> Efficiency improved by 85%.</p>
                        <p><span className="text-muted-foreground">&gt;</span> Monitoring performance... Status: <span className="text-green-400">OK</span></p>
                        <p><span className="text-green-400/80">$</span> <span className="animate-pulse">_</span></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Approach Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                <div className="border rounded-xl shadow-sm p-8 bg-card h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h2 className="text-3xl font-poppins font-semibold mb-6">Our Vision</h2>
                  <p className="text-muted-foreground mb-4">
                    We imagine a future where everyday businesses operate like elite teams — powered by intelligent systems that handle routine tasks, connect with customers instantly, and keep things moving even when you’re offline.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    At Omniai, we believe automation shouldn’t be complex, expensive, or limited to big tech. Our goal is to bring:
                  </p>
                  <ul className="space-y-4">
                    {visionPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl shadow-sm p-8 bg-card h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h2 className="text-3xl font-poppins font-semibold mb-6">Our Approach</h2>
                  <p className="text-muted-foreground mb-4">
                    We design lean, smart AI agents that integrate quietly into your workflow — no clutter, just real results.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Every solution is crafted around your business — not someone else's template. Our process focuses on:
                  </p>
                  <ul className="space-y-4">
                    {approachPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">
                Our 5 Step Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">A seamless journey from concept to reality.</p>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-sm text-center flex flex-col items-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                        {step.icon}
                      </div>
                    <Badge variant="outline" className="mb-4">STEP {step.step}</Badge>
                    <h3 className="text-lg font-poppins font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
                  </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">
                Solutions for Every Business Stage
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">From simple fixes to full scale AI systems.</p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Card key={index} className="bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl h-full flex flex-col">
                  <CardHeader>
                      <div className="bg-primary/10 p-3 rounded-lg w-fit">
                        {service.icon}
                      </div>
                    <CardTitle className="text-xl font-poppins font-semibold mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
            <div className="text-center mt-16">
              <Button asChild variant="link" size="lg">
                <Link href="/services">Explore All Services <ChevronRight className="w-5 h-5 ml-1" /></Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Benefits Section */}
       <section className="py-24 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-white">The Efficiency You've Been Missing</h2>
              <p className="mt-4 text-lg text-gray-300">Gain a true competitive advantage with AI automation.</p>
            </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-card border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                      <CheckCircle className="w-10 h-10 text-primary mb-4" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">
                Latest From the Blog
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Explore insights on AI, automation, and business growth.</p>
            </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recentPosts.map((post, index) => (
                <Card key={index} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl h-full group">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    <Image src={post.image} data-ai-hint={post.hint} alt={post.title} width={600} height={400} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </Link>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                    <h2 className="text-xl font-poppins font-semibold pt-2">{post.title}</h2>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0 font-semibold">
                      <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold">Frequently Asked Questions</h2>
            </div>
              <Accordion type="single" collapsible className="w-full bg-card p-4 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold">Ready to Build Your AI Teammate?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Let's discuss how automation can transform your business. It starts with a free, no obligation strategy call.</p>
              <div className="mt-8">
                <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                  <Link href="/contact">Book Your Free Call</Link>
                </Button>
              </div>
        </div>
      </section>
    </div>
  );
}
