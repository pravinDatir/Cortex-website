import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About Our Software Company";
const description = "Learn how Cortex Analytix helps healthcare, diagnostics, manufacturing, and commerce companies simplify operations through scalable software platforms.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
