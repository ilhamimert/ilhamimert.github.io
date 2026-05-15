"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "3rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
          {/* logo ve açıklama */}
          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: "#f5f0e8", marginBottom: "1rem" }}>
              PRESTIGE<span style={{ color: "#c9a84c" }}>.</span>
            </div>
            <p style={{ color: "#6b6b6b", fontSize: "0.8rem", lineHeight: 1.7, maxWidth: "280px" }}>
              İstanbul Bağcılar'da 20 yıldır hizmet veren güvenilir ikinci el araç galeriniz.
            </p>
          </div>

          {/* hızlı linkler */}
          <div>
            <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Hızlı Erişim</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[["#hizmetler", "Hizmetler"], ["#araclar", "Araç Stoku"], ["#ekip", "Ekibimiz"], ["#yorumlar", "Yorumlar"]].map(([href, label]) => (
                <button key={href}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                  style={{ background: "none", border: "none", color: "#6b6b6b", cursor: "pointer", textAlign: "left", fontSize: "0.8rem", padding: 0 }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* iletişim */}
          <div>
            <div style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>İletişim</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <span style={{ color: "#6b6b6b", fontSize: "0.8rem" }}>Güneşli Mah. Bağcılar, İstanbul</span>
              <span style={{ color: "#6b6b6b", fontSize: "0.8rem" }}>+90 (212) 555 00 00</span>
              <span style={{ color: "#6b6b6b", fontSize: "0.8rem" }}>info@prestigeauto.com.tr</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ color: "#3a3a3a", fontSize: "0.75rem" }}>© 2024 Prestige Auto Gallery. Tüm hakları saklıdır.</span>
          <span style={{ color: "#3a3a3a", fontSize: "0.75rem" }}>Bağcılar, İstanbul</span>
        </div>
      </div>
    </footer>
  );
}
