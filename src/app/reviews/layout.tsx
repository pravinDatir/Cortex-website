import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Client Reviews & Success Stories";
const description = "Read how organizations describe working with Cortex Analytix on ERP, healthcare, diagnostics commerce, mobile, and e-commerce platforms.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function ReviewsLayout({ children }: { children: ReactNode }) {
  return children;
}
