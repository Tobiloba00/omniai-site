
"use client";

import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import Logo from "../logo";

export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tobiloba-olujimi', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Twitter', href: 'https://x.com/JimiToby', icon: <Twitter className="h-5 w-5" /> },
  ];

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
      { name: "Terms of Use", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="mb-4 inline-block">
              <Logo lightText />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Custom-built AI agents that work 24/7 — so you don’t have to.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}><Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(link => (
                <li key={link.name}><Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tobiloba Olujimi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
