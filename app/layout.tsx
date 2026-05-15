import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige Auto Gallery",
  description: "İstanbul Bağcılar ikinci el araç galerisi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
