"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  const scrollToServices = () => {
    document.querySelector("#hizmetler")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden grain-overlay">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface pointer-events-none" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-gold to-transparent ml-6 md:ml-12 lg:ml-24" />

      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            Kreatif Ajans — İstanbul
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] tracking-tight mb-8"
        >
          Markanız için{" "}
          <span className="gold-text italic">doğru</span>
          <br />
          strateji ve tasarım.
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-cream-dim max-w-xl leading-relaxed mb-12"
        >
          Marka kimliğinden web'e, dijital pazarlamadan motion'a —
          işinizi büyüten yaratıcı çözümler üretiyoruz.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={() => document.querySelector("#rezervasyon")?.scrollIntoView({ behavior: "smooth" })}
          >
            Randevu Al
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            Çalışmalarımızı Gör →
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-gold transition-colors duration-300"
        aria-label="Aşağı kaydır"
      >
        <span className="text-xs tracking-widest uppercase font-body">Keşfet</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      {/* Decorative large text */}
      <div className="absolute right-0 bottom-0 font-display text-[12rem] md:text-[18rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none translate-y-8">
        F
      </div>
    </section>
  );
}
