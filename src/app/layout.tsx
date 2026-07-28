import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BRAND_NAME, LOCATION } from "@/lib/contact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = `${BRAND_NAME} — Premium Web Design for Ugandan Businesses`;
const siteDescription = `${BRAND_NAME} is a Kasangati-based web design agency building affordable, mobile-optimised websites with WhatsApp automation for Ugandan businesses. Get online from UGX 250,000.`;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${BRAND_NAME}`,
  },
  description: siteDescription,
  keywords: ["web design Uganda", "website developer Kampala", "affordable website Uganda", "WhatsApp automation", "NileSites", "Kasangati web design", "Uganda business website"],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://nilesites.vercel.app",
    siteName: BRAND_NAME,
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">{children}</body>
    </html>
  );
}
