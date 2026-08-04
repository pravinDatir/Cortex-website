"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { getAssetPath } from "@/lib/utils";
import MagneticButton from "@/components/effects/MagneticButton";

/* Inline SVG icons for brand logos (removed from lucide-react) */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const footerLinks = {
  company: [
    { href: "/about/", label: "About Us" },
    { href: "/projects/", label: "Projects" },
    { href: "/reviews/", label: "Reviews" },
    { href: "/contact/", label: "Contact" },
  ],
  services: [
    { href: "/services/", label: "AI Development" },
    { href: "/services/", label: "ERP Solutions" },
    { href: "/services/", label: "Flutter Apps" },
    { href: "/services/", label: "Web Applications" },
  ],
};

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/cortexanalytix", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/cortexanalytix", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com/cortexanalytix", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@cortexanalytix.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background-secondary">
      {/* Aurora gradient divider at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] blur-sm bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src={getAssetPath("/logo.png")}
                alt="Cortex Analytix"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-lg font-bold text-text-primary">Cortex </span>
                <span className="text-lg font-bold text-gradient">Analytix</span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-6">
              Transforming businesses through intelligent software solutions.
              We build AI-powered applications, ERP systems, mobile apps, and
              modern web platforms that drive real impact.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <MagneticButton key={social.label} strength={6}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 text-text-tertiary hover:text-brand-primary-light hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 block"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar with gradient line */}
        <div className="mt-12 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 section-divider" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} Cortex Analytix. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary">
              Insight. Innovation. Impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
