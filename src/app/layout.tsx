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
    default: "Cortex Analytix — Software for Complex Operations",
    template: "%s | Cortex Analytix",
  },
  description:
    "Cortex Analytix builds scalable software platforms for healthcare, diagnostics, manufacturing, and commerce, turning fragmented workflows into connected operations.",
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
    title: "Cortex Analytix — Software for Complex Operations",
    description:
      "Scalable software platforms for healthcare, diagnostics, manufacturing, and commerce, built to simplify complex operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Analytix — Software for Complex Operations",
    description:
      "Scalable software platforms for healthcare, diagnostics, manufacturing, and commerce, built to simplify complex operations.",
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
