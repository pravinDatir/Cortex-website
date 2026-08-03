"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getFeaturedProjects } from "@/content/projects";
import { services } from "@/content/services";
import { reviews } from "@/content/reviews";
import { stats } from "@/content/stats";
import { getAssetPath } from "@/lib/utils";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen pt-32 sm:pt-36 md:pt-44 pb-20 flex flex-col justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-radial-glow-purple" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="section-container relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-text-secondary">
              Building the future of enterprise software
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto"
          >
            Transforming Businesses with{" "}
            <span className="text-gradient">AI, ERP Solutions</span>
            <br />
            <span className="text-text-secondary">&</span>{" "}
            <span className="text-gradient">Modern Software</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            We craft intelligent solutions — from AI-powered applications and
            enterprise platforms to cross-platform mobile apps that drive
            measurable impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/projects/" className="btn-primary text-base">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact/" className="btn-secondary text-base">
              Book a Consultation
            </Link>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16"
          >
            <Image
              src={getAssetPath("/logo.png")}
              alt="Cortex Analytix"
              width={120}
              height={120}
              className="mx-auto opacity-40 hover:opacity-70 transition-opacity duration-500"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-brand-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="section border-y border-white/5 bg-surface/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section">
        <div className="section-container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Real-world solutions we've built for businesses across healthcare, manufacturing, fashion, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link
              href="/projects/"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="section bg-surface/20">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="section-container relative z-10">
          <SectionHeading
            title="What We Build"
            subtitle="End-to-end software services — from concept to deployment and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link
              href="/services/"
              className="btn-secondary inline-flex items-center gap-2"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <section className="section">
        <div className="section-container">
          <SectionHeading
            title="Client Stories"
            subtitle="What our partners say about working with Cortex Analytix."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <TestimonialCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section">
        <div className="section-container">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl p-8 md:p-16 text-center glass-card animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
                  Let&apos;s discuss how we can build the perfect solution for
                  your unique challenges.
                </p>
                <Link href="/contact/" className="btn-primary text-base">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
