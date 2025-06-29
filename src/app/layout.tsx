import type { Metadata } from 'next';
import { Inter, Poppins, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins', display: 'swap' });
const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-fira-code', display: 'swap' });

export const metadata: Metadata = {
  title: 'Omniai | Custom AI Automation For Your Business',
  description: 'Custom built AI agents that work 24/7 — so you don’t have to. We turn your manual tasks into intelligent, automated workflows.',
  keywords: ['AI automation', 'intelligent agents', 'workflows', 'business automation', 'Omniai'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </head>
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
