'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
      <Button asChild size="lg" className="shadow-lg">
        <Link href="/contact">
          <Phone className="mr-2 h-5 w-5" />
          Book Free Strategy Call
        </Link>
      </Button>
    </div>
  );
}
