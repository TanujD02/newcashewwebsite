import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: [
    { path: "./fonts/jakarta-400.woff", weight: "400", style: "normal" },
    { path: "./fonts/jakarta-500.woff", weight: "500", style: "normal" },
    { path: "./fonts/jakarta-600.woff", weight: "600", style: "normal" },
    { path: "./fonts/jakarta-700.woff", weight: "700", style: "normal" },
    { path: "./fonts/jakarta-800.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const kalam = localFont({
  src: "./fonts/kalam-700.woff",
  variable: "--font-kalam",
  weight: "700",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Kaju | Cashews From Kokan’s",
  description: "Organic. Authentic. Premium. Cashews From Kokan’s. Whole Cashews with Skin, direct from farm. Order on WhatsApp: +91 72086 54862.",
  icons: { icon: "/images/kaju-logo.png", apple: "/images/kaju-logo.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFDE5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${kalam.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
