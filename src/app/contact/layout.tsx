import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Contact Our Software Team";
const description = "Contact Cortex Analytix to discuss a healthcare, diagnostics, manufacturing, commerce, ERP, web, mobile, cloud, or AI software project.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
