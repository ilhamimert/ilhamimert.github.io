"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 2rem",
      paddingTop: "90px",
      backgroundColor: "#0a0a0a",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ maxWidth: "900px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans)" }}>
            Bağcılar, İstanbul
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          color: "#f5f0e8",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
          fontWeight: 700
        }}>
          Premium araçlar,{" "}
          <span style={{
            background: "linear-gradient(135deg, #c9a84c, #e8c97a, #a07830)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic"
          }}>
            güvenilir
          </span>
          <br />alışveriş deneyimi.
        </h1>

        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "1.1rem",
          color: "#d4c9b5",
          maxWidth: "500px",
          lineHeight: 1.7,
          marginBottom: "2.5rem"
        }}>
          20 yıllık deneyimle İstanbul&apos;un en güvenilir ikinci el araç galerisi.
          BMW, Mercedes, Audi, Porsche ve daha fazlası.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => document.querySelector("#araclar")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#c9a84c", color: "#0a0a0a", border: "none",
              padding: "14px 32px", cursor: "pointer", fontSize: "0.9rem", fontWeight: 600
            }}>
            Stoku İncele
          </button>
          <button
            onClick={() => document.querySelector("#randevu")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "transparent", color: "#d4c9b5", border: "none",
              padding: "14px 0", cursor: "pointer", fontSize: "0.9rem"
            }}>
            Test Sürüşü Talep Et →
          </button>
        </div>

        {/* istatistikler */}
        <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap" }}>
          {[["500+", "Mutlu Müşteri"], ["20", "Yıllık Deneyim"], ["50+", "Araç Stoku"]].map(([sayi, etiket]) => (
            <div key={etiket}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", fontWeight: 700, color: "#c9a84c" }}>{sayi}</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", color: "#6b6b6b", marginTop: "4px" }}>{etiket}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
