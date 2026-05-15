"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { ContactFormData } from "@/types";

const FORMSPREE_CONTACT_ID = "YOUR_FORMSPREE_CONTACT_ID";

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-widest uppercase text-cream-dim font-body">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-400 font-body">{error}</span>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-white/20 hover:border-gold/50 focus:border-gold outline-none py-3 text-cream font-body text-sm placeholder-muted transition-colors duration-300";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="iletisim" className="py-28 section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <AnimatedSection>
          <SectionLabel>İletişim</SectionLabel>
          <h2 className="section-title mb-6">
            Projenizi{" "}
            <span className="gold-text italic">konuşalım</span>
          </h2>
          <p className="font-body text-cream-dim leading-relaxed mb-10 max-w-sm">
            Yeni bir proje mi planlıyorsunuz? Hemen yazın, 24 saat içinde dönüş yapalım.
          </p>

          <div className="space-y-6 font-body text-sm text-cream-dim">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">E-posta</p>
              <p>merhaba@formaajans.com</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">Telefon</p>
              <p>+90 212 000 00 00</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">Adres</p>
              <p>Karaköy, İstanbul</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right — Form */}
        <AnimatedSection delay={150}>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center">
              <CheckCircle size={48} className="text-gold" />
              <h3 className="font-display text-2xl text-cream">Mesajınız İletildi</h3>
              <p className="font-body text-cream-dim text-sm">
                En kısa sürede size dönüş yapacağız.
              </p>
              <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
                Yeni Mesaj Gönder
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField label="Adınız *" error={errors.name?.message}>
                  <input
                    {...register("name", { required: "Ad zorunludur" })}
                    placeholder="Ali Yılmaz"
                    className={inputClass}
                  />
                </InputField>
                <InputField label="E-posta *" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email", {
                      required: "E-posta zorunludur",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Geçerli bir e-posta girin" },
                    })}
                    placeholder="ali@sirket.com"
                    className={inputClass}
                  />
                </InputField>
              </div>

              <InputField label="Şirket">
                <input
                  {...register("company")}
                  placeholder="Şirket adı (opsiyonel)"
                  className={inputClass}
                />
              </InputField>

              <InputField label="Mesajınız *" error={errors.message?.message}>
                <textarea
                  {...register("message", { required: "Mesaj zorunludur" })}
                  rows={4}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className={`${inputClass} resize-none`}
                />
              </InputField>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                  <AlertCircle size={16} />
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="gap-2"
              >
                {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
                <Send size={16} />
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
