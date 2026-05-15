"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";
import type { ReservationFormData } from "@/types";

const FORMSPREE_RESERVATION_ID = "YOUR_FORMSPREE_RESERVATION_ID";

const budgetOptions = [
  "₺10.000 – ₺25.000",
  "₺25.000 – ₺50.000",
  "₺50.000 – ₺100.000",
  "₺100.000+",
];

const inputClass =
  "w-full bg-surface-2 border border-white/10 hover:border-gold/40 focus:border-gold outline-none px-4 py-3 text-cream font-body text-sm placeholder-muted transition-colors duration-300";

const selectClass =
  "w-full bg-surface-2 border border-white/10 hover:border-gold/40 focus:border-gold outline-none px-4 py-3 text-cream font-body text-sm transition-colors duration-300 appearance-none cursor-pointer";

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
      {error && <span className="text-xs text-red-400 font-body">{error}</span>}
    </div>
  );
}

export function Reservation() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>();

  const onSubmit = async (data: ReservationFormData) => {
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_RESERVATION_ID}`, {
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
    <section id="rezervasyon" className="py-28 section-padding bg-surface">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="justify-center">Randevu</SectionLabel>
            <h2 className="section-title mb-4">
              Bir sonraki adımı{" "}
              <span className="gold-text italic">birlikte atalım</span>
            </h2>
            <p className="font-body text-cream-dim text-sm max-w-md mx-auto">
              30 dakikalık ücretsiz keşif görüşmesi için randevu alın. Projenizi dinleyelim.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <CheckCircle size={52} className="text-gold" />
              <h3 className="font-display text-2xl text-cream">Randevu Talebiniz Alındı</h3>
              <p className="font-body text-cream-dim text-sm max-w-xs">
                Seçtiğiniz tarihe göre en kısa sürede size dönüş yapacağız.
              </p>
              <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
                Yeni Randevu Al
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Geçerli e-posta girin" },
                    })}
                    placeholder="ali@sirket.com"
                    className={inputClass}
                  />
                </InputField>
                <InputField label="Şirket *" error={errors.company?.message}>
                  <input
                    {...register("company", { required: "Şirket zorunludur" })}
                    placeholder="Şirket adı"
                    className={inputClass}
                  />
                </InputField>
                <InputField label="Telefon">
                  <input
                    {...register("phone")}
                    placeholder="+90 5xx xxx xx xx"
                    className={inputClass}
                  />
                </InputField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="İlgilendiğiniz Hizmet *" error={errors.service?.message}>
                  <select
                    {...register("service", { required: "Hizmet seçimi zorunludur" })}
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" disabled>Hizmet seçin</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </InputField>
                <InputField label="Bütçe Aralığı *" error={errors.budget?.message}>
                  <select
                    {...register("budget", { required: "Bütçe seçimi zorunludur" })}
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" disabled>Bütçe aralığı</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </InputField>
              </div>

              <InputField label="Tercih Ettiğiniz Tarih *" error={errors.date?.message}>
                <div className="relative">
                  <input
                    type="date"
                    {...register("date", { required: "Tarih zorunludur" })}
                    className={`${inputClass} pr-10`}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </InputField>

              <InputField label="Notlar">
                <textarea
                  {...register("notes")}
                  rows={3}
                  placeholder="Projeniz hakkında eklemek istediğiniz bilgiler..."
                  className={`${inputClass} resize-none`}
                />
              </InputField>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                  <AlertCircle size={16} />
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="min-w-48"
                >
                  {status === "loading" ? "Gönderiliyor..." : "Randevu Talep Et"}
                </Button>
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
