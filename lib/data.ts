import type { Service, PortfolioItem, TeamMember, Testimonial } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Marka Kimliği",
    description:
      "Markanızın ruhunu görsel bir dile dönüştürüyoruz. Logo, renk paleti, tipografi ve brand guidelines ile kalıcı bir kimlik inşa ediyoruz.",
    icon: "Sparkles",
    price: "₺15.000'den başlayan",
    features: ["Logo Tasarımı", "Brand Guidelines", "Renk & Tipografi", "Sosyal Medya Kiti"],
  },
  {
    id: "2",
    title: "Web Tasarım & Geliştirme",
    description:
      "Dönüşüm odaklı, estetik ve hızlı web siteleri tasarlıyor ve geliştiriyoruz. Her piksel bir amaca hizmet eder.",
    icon: "Monitor",
    price: "₺25.000'den başlayan",
    features: ["UI/UX Tasarım", "Next.js Geliştirme", "SEO Optimizasyonu", "CMS Entegrasyonu"],
  },
  {
    id: "3",
    title: "Dijital Pazarlama",
    description:
      "Hedef kitlenize ulaşmak için veri odaklı stratejiler kuruyoruz. Sosyal medya, SEO ve içerik pazarlamasını bir arada yönetiyoruz.",
    icon: "TrendingUp",
    price: "₺8.000/ay'dan başlayan",
    features: ["Sosyal Medya Yönetimi", "SEO & SEM", "İçerik Stratejisi", "Performans Raporlama"],
  },
  {
    id: "4",
    title: "Motion & Video",
    description:
      "Hareketsiz kalan hiçbir şey dikkat çekmez. Animasyon, motion graphic ve video prodüksiyon ile markanızı canlandırıyoruz.",
    icon: "Play",
    price: "₺12.000'den başlayan",
    features: ["Motion Graphics", "Sosyal Medya Videoları", "Ürün Animasyonu", "Brand Filmi"],
  },
  {
    id: "5",
    title: "Stratejik Danışmanlık",
    description:
      "Pazarda doğru konumlanmak için ihtiyaç duyduğunuz stratejiyi birlikte oluşturuyoruz. Rakip analizi, pazar araştırması ve büyüme planı.",
    icon: "Target",
    price: "₺5.000/oturum'dan başlayan",
    features: ["Pazar Analizi", "Rakip Araştırması", "Büyüme Stratejisi", "Quarterly Review"],
  },
  {
    id: "6",
    title: "E-Ticaret Çözümleri",
    description:
      "Satmak için tasarlanmış dijital mağazalar kuruyoruz. Kullanıcı deneyiminden ödeme akışına kadar her detay optimize edilmiş.",
    icon: "ShoppingBag",
    price: "₺30.000'den başlayan",
    features: ["Mağaza Tasarımı", "Ödeme Entegrasyonu", "Stok & Sipariş Yönetimi", "Dönüşüm Optimizasyonu"],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "1",
    title: "Aura Wellness",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
    year: 2024,
    client: "Aura Wellness Spa",
    description: "Premium wellness markası için kapsamlı kimlik tasarımı ve dijital varlık oluşturma.",
  },
  {
    id: "2",
    title: "Nexus Tech Platform",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    year: 2024,
    client: "Nexus Teknoloji A.Ş.",
    description: "B2B SaaS platformu için kullanıcı odaklı web tasarımı ve geliştirme projesi.",
  },
  {
    id: "3",
    title: "Ember Restaurant",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    year: 2024,
    client: "Ember Fine Dining",
    description: "Fine dining restoranı için lüks marka kimliği, menü tasarımı ve dijital varlık.",
  },
  {
    id: "4",
    title: "Pulse Fitness App",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    year: 2023,
    client: "Pulse Digital",
    description: "Fitness uygulaması için web platformu ve kullanıcı deneyimi tasarımı.",
  },
  {
    id: "5",
    title: "Soleil Fashion",
    category: "kampanya",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    year: 2024,
    client: "Soleil Giyim",
    description: "Sezon kampanyası için 360 derece dijital pazarlama ve içerik üretimi.",
  },
  {
    id: "6",
    title: "Kova Brewery",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    year: 2023,
    client: "Kova Craft Beer",
    description: "Butik bira markası için kimlik, ambalaj tasarımı ve dijital pazarlama.",
  },
  {
    id: "7",
    title: "Orion Mimarlık",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    year: 2023,
    client: "Orion Mimarlık Ofisi",
    description: "Mimarlık ofisi için portfolyo sitesi ve dijital kimlik projesi.",
  },
  {
    id: "8",
    title: "Volta EV Kampanyası",
    category: "motion",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    year: 2024,
    client: "Volta Otomotiv",
    description: "Elektrikli araç markası için lansman kampanyası motion grafik ve video prodüksiyon.",
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Elif Yılmaz",
    role: "Kurucu & Yaratıcı Direktör",
    bio: "10+ yıllık marka tasarımı deneyimiyle global markalara hizmet vermiş, Cannes Lions ödüllü kreatif direktör.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    social: {
      linkedin: "#",
      instagram: "#",
      behance: "#",
    },
  },
  {
    id: "2",
    name: "Mert Kaya",
    role: "Baş Geliştirici",
    bio: "Full-stack geliştirici. React, Next.js ve modern web teknolojileri konusunda 8 yıllık uzmanlık.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "3",
    name: "Selin Arslan",
    role: "Stratejik Pazarlama Uzmanı",
    bio: "Veri odaklı pazarlama stratejileriyle markaları büyütüyor. Google ve Meta sertifikalı dijital pazarlama uzmanı.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "4",
    name: "Can Demir",
    role: "Motion Designer",
    bio: "Markaları hareketli hikayelere dönüştürüyor. After Effects ve Cinema 4D konusunda uzman, 6 yıllık deneyim.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: {
      instagram: "#",
      behance: "#",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmet Çelik",
    company: "Nexus Teknoloji CEO",
    quote:
      "Forma Ajans ile çalışmak bir yatırım değil, dönüşüm. Web sitemizin yenilenmesinin ardından dönüşüm oranımız %340 arttı.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    id: "2",
    name: "Zeynep Öztürk",
    company: "Aura Wellness Kurucu",
    quote:
      "Marka kimliğimizi sıfırdan inşa ettiler. Şimdi müşterilerimiz bizi görmeden önce hissediyorlar. Bu sihir gibi bir şey.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: "3",
    name: "Burak Şahin",
    company: "Kova Brewery Ortak",
    quote:
      "Bütçemizi doğru yönetip en iyi sonucu çıkardılar. Ambalaj tasarımımız artık raf da durmuyor, müşteri eline alıyor.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    id: "4",
    name: "Ayşe Kara",
    company: "Soleil Giyim Pazarlama Direktörü",
    quote:
      "Sezon kampanyamızda %200 ROAS elde ettik. Forma'nın strateji ekibi veriye bakmayı biliyor, sadece güzel iş yapmıyor.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    id: "5",
    name: "Emre Yıldız",
    company: "Orion Mimarlık Kurucu Ortak",
    quote:
      "Portföy sitemiz açıldığından bu yana uluslararası müşteri sorgularımız 5 katına çıktı. Görsel dil her şeyi anlatıyor.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "6",
    name: "Naz Güven",
    company: "Volta Otomotiv Marka Müdürü",
    quote:
      "Lansman filmimiz sosyal medyada organik olarak 2 milyon izlenmeye ulaştı. Forma'nın yaratıcı ekibi gerçekten farklı düşünüyor.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  },
];
