import Link from 'next/link';

export default function TermsOfUsePage() {
  const sections = [
    {
      title: "1. Who We Are",
      content: <p>Omniai provides AI automation solutions, including digital agents, custom workflows, and system integrations to improve business efficiency.</p>
    },
    {
      title: "2. Use of This Website",
      content: <>
        <p className="mb-4">You may browse, read, and interact with our content freely. You agree not to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Copy, reproduce, or misuse any part of this website or its content without permission</li>
          <li>Attempt to hack, interfere with, or bypass any part of our system</li>
          <li>Use our name, tools, or copy for misleading, unlawful, or competitive purposes</li>
        </ul>
      </>
    },
    {
      title: "3. Intellectual Property",
      content: <p>All content on this site — including designs, code, blog articles, visuals, and trademarks — belongs to Omniai. You may not use it for commercial purposes without written consent.</p>
    },
    {
      title: "4. Client Deliverables",
      content: <>
        <p className="mb-4">Any AI agent, automation system, or custom workflow you purchase or request will be:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Tailored to your business</li>
          <li>Delivered as a digital service (not a physical product)</li>
          <li>Covered by fair usage terms and reasonable support</li>
        </ul>
        <p className="mt-4">You agree not to resell, redistribute, or reverse engineer our builds without permission.</p>
      </>
    },
    {
      title: "5. No Guarantees of Results",
      content: <p>While we aim to improve your business performance, Omniai does not guarantee specific outcomes (e.g. revenue, traffic, or conversions). Performance depends on your implementation, tools, and user behavior.</p>
    },
    {
      title: "6. Payments and Refunds",
      content: <p>All services are billed based on the scope agreed with you. Once delivery has begun, refunds are not typically available unless stated otherwise. If there is an issue, please contact us — we want to make it right.</p>
    },
    {
      title: "7. Limitation of Liability",
      content: <>
        <p className="mb-4">We are not responsible for:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Downtime or errors caused by third-party tools (like Airtable, Calendly, OpenAI, etc.)</li>
          <li>Loss of data caused by client side actions</li>
          <li>Misuse or mishandling of automation tools after delivery</li>
        </ul>
        <p className="mt-4">Use of any AI or automation comes with inherent risks, and you assume full responsibility.</p>
      </>
    },
    {
      title: "8. Privacy",
      content: <p>We do not sell or share your personal or business data. Any details you submit through contact forms or automation builds are handled securely and respectfully. For more, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
    },
    {
      title: "9. Changes to These Terms",
      content: <p>We may update these Terms from time to time. Changes will be posted on this page. Continued use of the site means you agree to the updated terms.</p>
    },
    {
      title: "10. Contact",
      content: <p>If you have questions about these Terms, email us at: <a href="mailto:omniaiteams@gmail.com" className="font-semibold text-primary break-all hover:underline">omniaiteams@gmail.com</a></p>
    },
  ];

  return (
    <div className="fade-in bg-background">
      <div className="container mx-auto px-4 max-w-3xl py-16 md:py-24">
        <article className="space-y-8 text-foreground">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-poppins font-bold tracking-tight mb-2">Terms of Use</h1>
            <p className="text-muted-foreground">Effective Date: June 30, 2025</p>
          </header>

          <div className="text-muted-foreground bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
            <p>Welcome to Omniai. By using this website and our services, you agree to the following terms. Please read them carefully. If you do not agree with any part, please do not use the site or our services.</p>
          </div>
          
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-poppins font-semibold mb-4 text-foreground">{section.title}</h2>
                <div className="text-muted-foreground space-y-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <footer className="text-center text-muted-foreground pt-8 border-t">
              <p>Thanks for trusting Omniai. Let’s build something powerful — and professional — together.</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
