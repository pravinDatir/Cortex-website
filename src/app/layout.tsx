import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/effects/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cortex Analytix — Insight. Innovation. Impact.",
    template: "%s | Cortex Analytix",
  },
  description:
    "We build intelligent software solutions — from AI-powered applications and ERP systems to mobile apps and modern web platforms. Transforming businesses through technology.",
  keywords: [
    "AI Development",
    "ERP Solutions",
    "Flutter Apps",
    "Web Development",
    "Software Consulting",
    "Cortex Analytix",
  ],
  authors: [{ name: "Cortex Analytix" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cortex Analytix",
    title: "Cortex Analytix — Insight. Innovation. Impact.",
    description:
      "We build intelligent software solutions — from AI-powered applications and ERP systems to mobile apps and modern web platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Analytix — Insight. Innovation. Impact.",
    description:
      "We build intelligent software solutions — from AI-powered applications and ERP systems to mobile apps and modern web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        <MouseGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
