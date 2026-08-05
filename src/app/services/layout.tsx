import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Software Development Services";
const description = "Explore Cortex Analytix services for AI, ERP, web, mobile, cloud, API, automation, and data platforms built around complex business operations.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
