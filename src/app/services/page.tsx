import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Bot, SlidersHorizontal, Zap } from "lucide-react";
import Link from "next/link";

const servicePackages = [
  {
    icon: "Bot",
    title: "Starter Automation",
    description: "Ideal for a single, high-impact task. We'll automate one key part of your workflow.",
    timeline: "3–5 Day Delivery",
    features: [
      "1 task (e.g. auto-reply or lead filter)",
      "Basic setup, fully functional",
    ],
  },
  {
    icon: "SlidersHorizontal",
    title: "Full Workflow System",
    description: "A comprehensive solution that manages an entire process, from lead capture to CRM updates.",
    timeline: "7–14 Day Delivery",
    features: [
      "Lead capture to CRM updates",
      "Smart decision trees",
      "Includes setup + documentation",
    ],
  },
  {
    icon: "Zap",
    title: "Custom AI Build",
    description: "A completely bespoke AI system designed for your unique business challenges.",
    timeline: "Flexible Scope & Timeline",
    features: [
      "Tailored to unique needs",
      "Includes testing, integrations, and support",
    ],
  },
];

// A helper component to render the correct icon safely.
const ServiceIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "Bot":
      return <Bot className="w-8 h-8 text-primary" />;
    case "SlidersHorizontal":
      return <SlidersHorizontal className="w-8 h-8 text-primary" />;
    case "Zap":
      return <Zap className="w-8 h-8 text-primary" />;
    default:
      return null;
  }
};

export default function ServicesPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold tracking-tight text-foreground">AI Automation Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From single tasks to full scale intelligent systems, I offer solutions designed to transform your business operations.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">Find Your Perfect Fit</h2>
            <p className="mt-4 text-lg text-muted-foreground">Clear, transparent packages for any business need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <ServiceIcon icon={pkg.icon} />
                  </div>
                  <CardTitle className="text-2xl font-poppins">{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-sm text-primary mb-4">{pkg.timeline}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
