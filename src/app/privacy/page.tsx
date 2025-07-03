import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: <>
        <p className="mb-4">We may collect the following:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Info</strong> you provide (name, email, company) when contacting us, filling a form, or booking a call</li>
            <li><strong>Usage Data</strong> like pages visited, time spent, device type, browser, and location (non personal, used for analytics)</li>
            <li><strong>Third Party Integrations</strong> (like Calendly, Airtable, n8n) may collect additional info per their policies</li>
        </ul>
      </>
    },
    {
      title: "2. How We Use Your Data",
      content: <>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Respond to your inquiries or support requests</li>
          <li>Deliver the AI automation services you’ve asked for</li>
          <li>Improve our website and user experience</li>
          <li>Send updates or useful content if you subscribe (you can opt out anytime)</li>
        </ul>
        <p className="mt-4">We do <strong>not</strong> sell or rent your personal information.</p>
      </>
    },
    {
      title: "3. Data Storage & Security",
      content: <>
        <p className="mb-4">We take your data seriously. All information is:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Stored securely</li>
          <li>Accessible only to authorized team members</li>
          <li>Protected using industry-standard security practices</li>
        </ul>
        <p className="mt-4">No system is 100% secure, but we strive to keep your data safe.</p>
      </>
    },
    {
      title: "4. Sharing Your Information",
      content: <>
        <p className="mb-4">We may share your data only with trusted tools/services required to deliver our services — such as:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Google Sheets / Workspace</li>
          <li>Calendly (for bookings)</li>
          <li>OpenRouter / n8n (for AI workflows)</li>
          <li>Hosting platforms (Firebase, Vercel)</li>
        </ul>
        <p className="mt-4">We never share your info with advertisers or third parties for marketing.</p>
      </>
    },
    {
      title: "5. Your Rights",
      content: <>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access your data</li>
          <li>Request corrections</li>
          <li>Ask us to delete your data (unless required to keep it for legal or operational reasons)</li>
        </ul>
        <p className="mt-4">To make a request, email: <a href="mailto:omniaiteams@gmail.com" className="font-semibold text-primary break-all hover:underline">omniaiteams@gmail.com</a></p>
      </>
    },
    {
      title: "6. Cookies",
      content: <p>We may use cookies or local storage to improve performance and remember preferences (like theme mode). You can disable cookies in your browser, but some features may stop working correctly.</p>
    },
    {
      title: "7. External Links",
      content: <p>Some pages may link to third-party websites. We’re not responsible for their content or data policies. Always check their privacy policy if you're concerned.</p>
    },
    {
      title: "8. Changes to This Policy",
      content: <>
        <p>We may update this Privacy Policy occasionally. Changes will be posted here with the updated date.</p>
        <p className="mt-2">If it's a big change, we’ll notify you.</p>
      </>
    },
    {
      title: "9. Contact Us",
      content: <p>If you have any questions or concerns about this Privacy Policy, reach out: <a href="mailto:omniaiteams@gmail.com" className="font-semibold text-primary break-all hover:underline">omniaiteams@gmail.com</a></p>
    }
  ];

  return (
    <div className="fade-in bg-background">
      <div className="container mx-auto px-4 max-w-3xl py-16 md:py-24">
        <article className="space-y-8 text-foreground">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-poppins font-bold tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective Date: June 30, 2025</p>
          </header>

          <div className="text-muted-foreground bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
            <p>At Omniai, we respect your privacy. This policy explains how we collect, use, and protect your data when you visit our site or use our services.</p>
            <p className="mt-2">By using this website, you agree to the practices described here.</p>
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
              <p>Thank you for trusting Omniai. We’re committed to protecting your data while building your automation systems.</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
