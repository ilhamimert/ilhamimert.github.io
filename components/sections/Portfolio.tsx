"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { PortfolioItem } from "@/types";

const categories = [
  { key: "all", label: "Tümü" },
  { key: "branding", label: "Marka" },
  { key: "web", label: "Web" },
  { key: "kampanya", label: "Kampanya" },
  { key: "motion", label: "Motion" },
] as const;

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <AnimatedSection delay={index * 60}>
      <div className="group relative overflow-hidden bg-surface-2 aspect-[4/3] cursor-pointer">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-xs text-gold font-semibold tracking-widest uppercase mb-2">
            {item.client} — {item.year}
          </span>
          <h3 className="font-display text-2xl text-cream mb-2">{item.title}</h3>
          <p className="font-body text-sm text-cream-dim line-clamp-2">{item.description}</p>
        </div>
        {/* Category tag */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/70 backdrop-blur-sm text-xs text-cream-dim font-body tracking-wide">
          {item.category}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-28 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Çalışmalar</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <h2 className="section-title max-w-md">
              Seçili{" "}
              <span className="gold-text italic">projeler</span>
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`px-4 py-2 text-xs font-body font-semibold tracking-wide transition-all duration-200 border ${
                    active === cat.key
                      ? "border-gold bg-gold text-background"
                      : "border-white/10 text-cream-dim hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
