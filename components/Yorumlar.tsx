const yorumlar = [
  {
    id: 1,
    isim: "Hasan Çelik",
    satin: "BMW 5 Serisi Aldı",
    yorum: "Prestige'de araç almak çok rahat bir deneyimdi. Serkan Bey hiçbir konuda bizi yanıltmadı, ekspertiz raporu eksiksizdi. Kesinlikle tavsiye ederim.",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 2,
    isim: "Fatma Yılmaz",
    satin: "Toyota Corolla Cross Aldı",
    yorum: "Aracımı takas edip yenisini aldım. Fiyat konusunda çok adillerdi, beklediğimden daha iyi teklif verdiler. Tüm evrak işlerini kendileri halletti.",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: 3,
    isim: "Emre Şahin",
    satin: "Range Rover Sport Aldı",
    yorum: "İstanbul'da çok galeri gezdim ama Prestige'in dürüstlüğü ve profesyonelliği farkı çok büyüktü. Aracım eksiksiz teslim edildi, teşekkürler.",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    id: 4,
    isim: "Zeynep Kara",
    satin: "Mercedes C200 Aldı",
    yorum: "Ayşe Hanım kredi konusunda inanılmaz yardımcı oldu. Başka bankalardan alamadığım oranı burada aldım. Araç da mükemmel durumda geldi.",
    foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    id: 5,
    isim: "Burak Öztürk",
    satin: "Tesla Model 3 Aldı",
    yorum: "Elektrikli araç konusunda çok bilgilendirilmeden sattılar. Şarj altyapısından vergi avantajlarına kadar her şeyi anlattılar. Harika hizmet.",
    foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    id: 6,
    isim: "Mehmet Aydın",
    satin: "Porsche Cayenne Aldı",
    yorum: "Murat Bey'in yaptığı ekspertiz raporu sayesinde aracın tüm geçmişini öğrendim. Güvenle aldım. Fiyat/performans açısından çok memnunum.",
    foto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
  },
];

export default function Yorumlar() {
  return (
    <section id="yorumlar" style={{ padding: "6rem 2rem", backgroundColor: "#111" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Müşteri Yorumları</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8", marginBottom: "3rem" }}>
          Mutlu <span style={{ fontStyle: "italic", color: "#c9a84c" }}>müşterilerimiz</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {yorumlar.map((y) => (
            <div key={y.id} style={{ backgroundColor: "#0a0a0a", padding: "1.75rem", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}>
                {[1,2,3,4,5].map((s) => (
                  <span key={s} style={{ color: "#c9a84c", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>
              <p style={{ color: "#d4c9b5", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>
                &ldquo;{y.yorum}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                <img
                  src={y.foto}
                  alt={y.isim}
                  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <div style={{ color: "#f5f0e8", fontSize: "0.85rem", fontWeight: 600 }}>{y.isim}</div>
                  <div style={{ color: "#c9a84c", fontSize: "0.7rem" }}>{y.satin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
