"use client";

import { useState } from "react";

export default function Randevu() {
  const [gonderildi, setGonderildi] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setYukleniyor(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_RESERVATION_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setGonderildi(true);
        form.reset();
      }
    } catch {
      // sessiz hata
    }
    setYukleniyor(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#f5f0e8",
    padding: "12px 16px",
    fontSize: "0.85rem",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <section id="randevu" style={{ padding: "6rem 2rem", backgroundColor: "#111" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Randevu</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f5f0e8", marginBottom: "1rem" }}>
          Test sürüşü <span style={{ fontStyle: "italic", color: "#c9a84c" }}>randevusu</span> alın
        </h2>
        <p style={{ color: "#6b6b6b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          İlgilendiğiniz araç için randevu talep edin. Uzman ekibimiz sizi arayarak uygun bir zaman belirleyecek.
        </p>

        {gonderildi ? (
          <div style={{ backgroundColor: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", padding: "2.5rem", textAlign: "center" }}>
            <p style={{ color: "#c9a84c", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Randevu talebiniz alındı!</p>
            <p style={{ color: "#6b6b6b", fontSize: "0.85rem" }}>Ekibimiz en kısa sürede sizi arayacak.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <input name="isim" placeholder="Adınız Soyadınız" required style={inputStyle} />
            <input name="telefon" placeholder="Telefon" required style={inputStyle} />
            <input name="email" type="email" placeholder="E-posta" style={inputStyle} />
            <input name="arac" placeholder="İlgilendiğiniz Araç" style={inputStyle} />
            <div style={{ gridColumn: "1 / -1" }}>
              <select name="hizmet" required style={{ ...inputStyle, appearance: "none" }}>
                <option value="" style={{ backgroundColor: "#111" }}>Hizmet Seçin</option>
                <option value="test-surüsü" style={{ backgroundColor: "#111" }}>Test Sürüşü</option>
                <option value="arac-alim" style={{ backgroundColor: "#111" }}>Araç Alım</option>
                <option value="takas" style={{ backgroundColor: "#111" }}>Takas</option>
                <option value="ekspertiz" style={{ backgroundColor: "#111" }}>Ekspertiz</option>
                <option value="kredi" style={{ backgroundColor: "#111" }}>Kredi Danışmanlığı</option>
              </select>
            </div>
            <textarea name="notlar" placeholder="Eklemek istediğiniz notlar..." rows={4} style={{ ...inputStyle, gridColumn: "1 / -1", resize: "vertical" }}></textarea>
            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                disabled={yukleniyor}
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0a0a0a",
                  border: "none",
                  padding: "14px 40px",
                  cursor: yukleniyor ? "not-allowed" : "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  opacity: yukleniyor ? 0.7 : 1,
                }}>
                {yukleniyor ? "Gönderiliyor..." : "Randevu Talep Et"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
