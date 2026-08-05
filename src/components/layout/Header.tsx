"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CortexMark from "@/components/brand/CortexMark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed inset-x-3 top-3 z-50 mx-auto w-auto max-w-[1320px] rounded-[999px] border bg-white/90 shadow-[0_18px_55px_rgba(59,35,91,.1)] backdrop-blur-xl transition-all duration-500 max-md:rounded-3xl ${
        scrolled
          ? "border-black/10 shadow-lg shadow-black/50"
          : "border-black/5"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <CortexMark className="transition-transform duration-300 group-hover:scale-105" />
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-brand-primary/0 group-hover:bg-brand-primary/10 blur-xl transition-all duration-500" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-text-primary tracking-tight">
                Cortex
              </span>
              <span className="text-lg font-bold text-gradient ml-1">
                Analytix
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary hover:bg-black/[.035]"
                }`}
              >
                {link.label}
                {/* Animated active indicator */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-black/[.035] rounded-lg -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="ml-4 whitespace-nowrap btn-primary text-sm !py-2 !px-5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-secondary transition-colors hover:bg-black/[.035] hover:text-text-primary lg:hidden rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 pt-2 pb-6 border-t border-black/5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors block ${
                        isActive(link.href)
                          ? "text-text-primary bg-black/[.035]"
                          : "text-text-secondary hover:text-text-primary hover:bg-black/[.035]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/contact/"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 btn-primary text-sm text-center justify-center"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
