"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import PremiumPageHero from "@/components/ui/PremiumPageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/effects/MagneticButton";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import ScrollSection from "@/components/ui/ScrollSection";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission (replace with EmailJS integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-black/[.035] border border-black/10 text-text-primary text-sm placeholder-text-tertiary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 focus:shadow-[0_0_20px_rgba(137,50,248,0.08)] transition-all duration-300";

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        <ScrollSection className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={8} className="opacity-15" />
          <div className="section-container relative z-10">
            <PremiumPageHero
              variant="contact"
              title="Get in Touch"
              subtitle="Have a project in mind? Let's discuss how we can help."
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <ScrollReveal blur>
                  <div className="glass-card p-6 relative overflow-hidden">
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary/50 via-brand-secondary/50 to-transparent" />

                    <h3 className="text-lg font-semibold text-text-primary mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(137,50,248,0.15)] transition-all duration-300">
                          <Mail className="w-5 h-5 text-brand-primary-light" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Email
                          </p>
                          <a
                            href="mailto:hello@cortexanalytix.com"
                            className="text-sm text-text-secondary hover:text-brand-primary-light transition-colors"
                          >
                            hello@cortexanalytix.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(137,50,248,0.15)] transition-all duration-300">
                          <Phone className="w-5 h-5 text-brand-primary-light" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Phone
                          </p>
                          <p className="text-sm text-text-secondary">
                            +91 XXXXX XXXXX
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(137,50,248,0.15)] transition-all duration-300">
                          <MapPin className="w-5 h-5 text-brand-primary-light" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            Location
                          </p>
                          <p className="text-sm text-text-secondary">
                            Pune, Maharashtra, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={0.1} blur>
                  <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/50 to-brand-primary/50" />

                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.1,
                          }}
                        >
                          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" style={{ filter: "drop-shadow(0 0 12px rgba(74, 222, 128, 0.3))" }} />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Message Sent!
                          </h3>
                          <p className="text-text-secondary">
                            We&apos;ll get back to you within 24 hours.
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <button
                            onClick={() => setStatus("idle")}
                            className="mt-6 btn-secondary text-sm"
                          >
                            Send Another Message
                          </button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-text-primary mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className={inputClasses}
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-text-primary mb-2"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className={inputClasses}
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-text-primary mb-2"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className={inputClasses}
                            placeholder="Your company (optional)"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-text-primary mb-2"
                          >
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            className={inputClasses}
                          >
                            <option value="" className="bg-surface">
                              Select a service
                            </option>
                            <option value="ai" className="bg-surface">
                              AI Development
                            </option>
                            <option value="erp" className="bg-surface">
                              ERP Development
                            </option>
                            <option value="flutter" className="bg-surface">
                              Flutter Apps
                            </option>
                            <option value="web" className="bg-surface">
                              Web Applications
                            </option>
                            <option value="cloud" className="bg-surface">
                              Cloud Solutions
                            </option>
                            <option value="other" className="bg-surface">
                              Other
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-text-primary mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className={`${inputClasses} resize-none`}
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        {status === "error" && (
                          <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            Something went wrong. Please try again.
                          </div>
                        )}

                        <MagneticButton className="w-full">
                          <button
                            type="submit"
                            disabled={status === "sending"}
                            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {status === "sending" ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <Sparkles className="w-4 h-4" />
                                </motion.div>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </MagneticButton>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
