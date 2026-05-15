# Forma Ajans — Kreatif Ajans Websitesi

Modern, production-ready kreatif ajans websitesi. Next.js 14, TypeScript, Tailwind CSS.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Formspree Kurulumu (İletişim Formları)

1. [formspree.io](https://formspree.io) adresinde ücretsiz hesap oluşturun
2. İki adet form oluşturun: **Contact** ve **Reservation**
3. Her formun ID'sini kopyalayın
4. Aşağıdaki dosyalarda `YOUR_FORMSPREE_*_ID` kısımlarını güncelleyin:
   - `components/sections/Contact.tsx` → `FORMSPREE_CONTACT_ID`
   - `components/sections/Reservation.tsx` → `FORMSPREE_RESERVATION_ID`

## GitHub Pages Deploy

### 1. Repo Oluştur ve Yükle

```bash
git init
git add .
git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

### 2. GitHub Pages Ayarı

- Repo → **Settings** → **Pages**
- Source: **GitHub Actions** seçin
- Push'tan sonra otomatik deploy başlar

### 3. `next.config.ts` Ayarı (Alt dizin için)

Eğer siteniz `https://kullaniciadi.github.io/repo-adi/` formatında yayınlanacaksa:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/repo-adi",        // repo adını girin
  assetPrefix: "/repo-adi/",    // repo adını girin
  trailingSlash: true,
  images: { unoptimized: true },
};
```

Ana domain (`kullaniciadi.github.io`) üzerinde yayınlanacaksa bu satırlar **gerekmez**.

## Yapı

```
app/
  layout.tsx          — Root layout, fontlar, metadata
  page.tsx            — Ana sayfa
  globals.css         — Global stiller
components/
  sections/           — Hero, Services, Portfolio, Team, vb.
  ui/                 — Button, SectionLabel, AnimatedSection
lib/
  data.ts             — Tüm mock veriler
  utils.ts            — cn() yardımcı fonksiyon
types/
  index.ts            — TypeScript interface'ler
.github/
  workflows/
    deploy.yml        — GitHub Actions deploy
```

## Teknolojiler

- **Next.js 14** — App Router, static export
- **TypeScript** — Tam tip güvenliği
- **Tailwind CSS** — Utility-first CSS
- **React Hook Form** — Form validasyonu
- **Lucide React** — İkonlar
- **Formspree** — Form backend
