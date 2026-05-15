import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forma Ajans — Tasarım & Dijital Pazarlama",
  description:
    "Markanızı geleceğe taşıyan kreatif ajans. Marka kimliği, web tasarımı, dijital pazarlama ve motion design hizmetleri.",
  keywords: "kreatif ajans, tasarım ajansı, dijital pazarlama, marka kimliği, web tasarımı İstanbul",
  openGraph: {
    title: "Forma Ajans — Tasarım & Dijital Pazarlama",
    description: "Markanızı geleceğe taşıyan kreatif ajans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}
