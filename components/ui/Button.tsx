"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-gold text-background hover:bg-gold-light active:scale-95",
      outline:
        "border border-gold text-gold hover:bg-gold hover:text-background active:scale-95",
      ghost:
        "text-cream-dim hover:text-gold hover:bg-white/5 active:scale-95",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-sm",
      md: "h-11 px-6 text-sm rounded-sm",
      lg: "h-13 px-8 text-base rounded-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
