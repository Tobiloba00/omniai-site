
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ lightText = false }: { lightText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/omniai_icon_only.svg"
        alt="Omniai Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className={cn(
        "font-poppins font-bold text-2xl tracking-tight",
        lightText ? "text-primary-foreground" : "text-foreground"
      )}>Omniai</span>
    </div>
  );
}
