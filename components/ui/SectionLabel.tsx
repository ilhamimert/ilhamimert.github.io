import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <span className="w-8 h-px bg-gold" />
      <span className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}
