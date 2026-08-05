import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Software Projects & Case Studies";
const description = "Explore company case studies from Cortex Analytix across diagnostics commerce, pharmaceutical ERP, healthcare monitoring, and digital retail.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
