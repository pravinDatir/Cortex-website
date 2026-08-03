"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
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

  return (
    <div className="pt-28 md:pt-32">
      <section className="section">
        <div className="section-container">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project in mind? Let's discuss how we can help."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
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
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
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
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
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
              <ScrollReveal delay={0.1}>
                <div className="glass-card p-6 md:p-8">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-text-secondary">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 btn-secondary text-sm"
                      >
                        Send Another Message
                      </button>
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
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-tertiary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
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
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-tertiary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
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
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-tertiary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
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
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
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
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm placeholder-text-tertiary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          Something went wrong. Please try again.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
