"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuAcik, setMenuAcik] = useState(false);

  function sayfayaGit(id: string) {
    setMenuAcik(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "rgba(10,10,10,0.95)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px"
    }}>
      <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "#f5f0e8" }}>
        PRESTIGE<span style={{ color: "#c9a84c" }}>.</span>
      </span>

      {/* Masaüstü menü */}
      <div className="hidden md:flex" style={{ gap: "2rem" }}>
        {["#hizmetler", "#araclar", "#ekip", "#yorumlar", "#iletisim"].map((href, i) => {
          const isimler = ["Hizmetler", "Araç Stoku", "Ekip", "Yorumlar", "İletişim"];
          return (
            <button key={href} onClick={() => sayfayaGit(href)}
              style={{ background: "none", border: "none", color: "#d4c9b5", cursor: "pointer", fontSize: "0.85rem" }}>
              {isimler[i]}
            </button>
          );
        })}
      </div>

      <button onClick={() => sayfayaGit("#randevu")}
        className="hidden md:block"
        style={{
          border: "1px solid #c9a84c", color: "#c9a84c", background: "none",
          padding: "8px 20px", cursor: "pointer", fontSize: "0.85rem"
        }}>
        Randevu Al
      </button>

      {/* Mobil buton */}
      <button className="md:hidden" onClick={() => setMenuAcik(!menuAcik)}
        style={{ background: "none", border: "none", color: "#f5f0e8", fontSize: "1.5rem", cursor: "pointer" }}>
        {menuAcik ? "✕" : "☰"}
      </button>

      {/* Mobil menü */}
      {menuAcik && (
        <div style={{
          position: "absolute", top: "70px", left: 0, right: 0,
          backgroundColor: "#111", padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem"
        }}>
          {["#hizmetler", "#araclar", "#ekip", "#yorumlar", "#iletisim", "#randevu"].map((href, i) => {
            const isimler = ["Hizmetler", "Araç Stoku", "Ekip", "Yorumlar", "İletişim", "Randevu Al"];
            return (
              <button key={href} onClick={() => sayfayaGit(href)}
                style={{ background: "none", border: "none", color: "#d4c9b5", cursor: "pointer", textAlign: "left", fontSize: "1rem" }}>
                {isimler[i]}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
