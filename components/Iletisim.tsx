"use client";

import { useState } from "react";

export default function Iletisim() {
  const [gonderildi, setGonderildi] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setYukleniyor(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_CONTACT_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setGonderildi(true);
        form.reset();
      }
    } catch {
      // hata durumunda sessiz kal
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
    <section id="iletisim" style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="contact-grid">
        {/* sol taraf */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
            <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>İletişim</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3vw, 3rem)", color: "#f5f0e8", marginBottom: "1.5rem" }}>
            Bize <span style={{ fontStyle: "italic", color: "#c9a84c" }}>ulaşın</span>
          </h2>
          <p style={{ color: "#6b6b6b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Araç almak, satmak ya da takas yapmak için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Adres</div>
              <div style={{ color: "#d4c9b5", fontSize: "0.85rem" }}>Güneşli Mah. Bağcılar, İstanbul</div>
            </div>
            <div>
              <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Telefon</div>
              <div style={{ color: "#d4c9b5", fontSize: "0.85rem" }}>+90 (212) 555 00 00</div>
            </div>
            <div>
              <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>E-posta</div>
              <div style={{ color: "#d4c9b5", fontSize: "0.85rem" }}>info@prestigeauto.com.tr</div>
            </div>
            <div>
              <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Çalışma Saatleri</div>
              <div style={{ color: "#d4c9b5", fontSize: "0.85rem" }}>Pzt - Cmt: 09:00 - 19:00</div>
            </div>
          </div>
        </div>

        {/* form */}
        <div>
          {gonderildi ? (
            <div style={{ backgroundColor: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", padding: "2rem", textAlign: "center" }}>
              <p style={{ color: "#c9a84c", fontSize: "1rem" }}>Mesajınız alındı, teşekkürler!</p>
              <p style={{ color: "#6b6b6b", fontSize: "0.8rem", marginTop: "0.5rem" }}>En kısa sürede size dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input name="isim" placeholder="Adınız Soyadınız" required style={inputStyle} />
              <input name="telefon" placeholder="Telefon" style={inputStyle} />
              <input name="email" type="email" placeholder="E-posta" required style={inputStyle} />
              <textarea name="mesaj" placeholder="Mesajınız..." rows={5} required style={{ ...inputStyle, resize: "vertical" }}></textarea>
              <button
                type="submit"
                disabled={yukleniyor}
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0a0a0a",
                  border: "none",
                  padding: "14px 32px",
                  cursor: yukleniyor ? "not-allowed" : "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  opacity: yukleniyor ? 0.7 : 1,
                }}>
                {yukleniyor ? "Gönderiliyor..." : "Mesaj Gönder"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
