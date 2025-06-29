"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "fade-in-up" | "fade-in" | "fade-in-left" | "fade-in-right" | "zoom-in";
  staggerDelay?: number;
}

export function AnimatedWrapper({
  children,
  className,
  animation = "fade-in-up",
  staggerDelay,
  ...props
}: AnimatedWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const animationClasses = {
    "fade-in-up": "fade-in-0 slide-in-from-bottom-10",
    "fade-in": "fade-in-0",
    "fade-in-left": "fade-in-0 slide-in-from-left-10",
    "fade-in-right": "fade-in-0 slide-in-from-right-10",
    "zoom-in": "fade-in-0 zoom-in-90",
  };

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0", // Start hidden
        isVisible && `animate-in duration-700 ease-out fill-mode-backwards`,
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: staggerDelay ? `${staggerDelay}ms` : undefined,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
