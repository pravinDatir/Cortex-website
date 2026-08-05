"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "@/components/effects/MagneticButton";
import CortexMark from "@/components/brand/CortexMark";

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
    <footer className="relative mt-4 overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-[#0b0610] text-white [&_.text-text-primary]:text-white [&_.text-text-secondary]:text-white/65 [&_.text-text-tertiary]:text-white/45">
      {/* Aurora gradient divider at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] blur-sm bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="section-container pt-6">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: .97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[radial-gradient(circle_at_75%_20%,rgba(177,90,255,.46),transparent_32%),linear-gradient(120deg,#27103f,#111)] p-5 shadow-2xl md:p-9"
        >
          <div className="absolute -right-12 -top-16 size-48 rounded-[42%] border-[14px] border-[#8932f8]/35 shadow-[0_0_52px_rgba(137,50,248,.5)] [transform:rotateX(62deg)_rotateY(-18deg)]" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-medium tracking-[-.04em] text-white md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mt-3 text-sm text-white/65">Let&apos;s discuss how we can build the perfect solution for your unique challenges.</p>
            <Link href="/contact/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#0b0610] transition-transform hover:-translate-y-1">
              Start a Conversation <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="rounded-lg bg-white p-1"><CortexMark size={32} /></span>
              <div>
                <span className="text-base font-bold text-text-primary">Cortex </span>
                <span className="text-base font-bold text-gradient">Analytix</span>
              </div>
            </Link>
            <p className="mb-4 max-w-md text-xs leading-relaxed text-text-secondary">
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
                    className="block rounded-lg bg-black/[.035] p-2 text-text-tertiary transition-all duration-300 hover:bg-black/5 hover:text-brand-primary-light hover:shadow-[0_0_20px_rgba(137,50,248,0.15)]"
                    aria-label={social.label}
                  >
                    <social.icon size={15} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-primary">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-xs text-text-secondary transition-all duration-200 hover:translate-x-1 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-primary">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-xs text-text-secondary transition-all duration-200 hover:translate-x-1 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar with gradient line */}
        <div className="relative mt-8 pb-5 pt-5">
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
        <div className="overflow-hidden border-t border-white/10 py-3 text-center text-[clamp(1.9rem,6.4vw,5.75rem)] font-semibold leading-none tracking-[-.075em] text-white/[.045]">CORTEX ANALYTIX</div>
      </div>
    </footer>
  );
}
