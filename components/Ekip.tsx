import Image from "next/image";

const ekip = [
  {
    id: 1,
    isim: "Kemal Arslan",
    pozisyon: "Kurucu & Genel Müdür",
    aciklama: "20 yıllık otomotiv sektörü deneyimiyle Prestige Auto Gallery'yi kurdu. Binlerce mutlu müşterinin güvenilir ismi.",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 2,
    isim: "Serkan Yıldız",
    pozisyon: "Kıdemli Satış Danışmanı",
    aciklama: "8 yıllık deneyimiyle premium segment uzmanı. BMW, Mercedes ve Audi konusunda derin bilgi sahibi.",
    foto: "/images/team-satis.jpg",
  },
  {
    id: 3,
    isim: "Ayşe Kılıç",
    pozisyon: "Kredi & Finansman Uzmanı",
    aciklama: "20'den fazla banka ile anlaşmalı. Müşterilerine en uygun finansman çözümünü buluyor.",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 4,
    isim: "Murat Demir",
    pozisyon: "Ekspertiz Uzmanı",
    aciklama: "Oto ekspertiz sertifikalı teknisyen. 15 yıllık deneyimiyle her araçtaki gizli sorunu tespit eder.",
    foto: "/images/team-ekspertiz.jpg",
  },
];

export default function Ekip() {
  return (
    <section id="ekip" style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Ekibimiz</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8", marginBottom: "3rem" }}>
          Uzman <span style={{ fontStyle: "italic", color: "#c9a84c" }}>kadromuz</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2rem" }}>
          {ekip.map((kisi) => (
            <div key={kisi.id} style={{ textAlign: "center" }}>
              <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 1rem", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(201,168,76,0.3)" }}>
                <Image
                  src={kisi.foto}
                  alt={kisi.isim}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", color: "#f5f0e8", marginBottom: "0.25rem" }}>{kisi.isim}</h3>
              <p style={{ color: "#c9a84c", fontSize: "0.75rem", marginBottom: "0.75rem" }}>{kisi.pozisyon}</p>
              <p style={{ color: "#6b6b6b", fontSize: "0.8rem", lineHeight: 1.6 }}>{kisi.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
