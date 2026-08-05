"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AuroraBackground from "@/components/effects/AuroraBackground";
import FloatingGeometry from "@/components/effects/FloatingGeometry";
import FloatingParticles from "@/components/effects/FloatingParticles";
import MagneticButton from "@/components/effects/MagneticButton";
import GlowingBorder from "@/components/effects/GlowingBorder";
import PageTransition from "@/components/effects/PageTransition";
// import Scroll3DScene from "@/components/effects/Scroll3DScene";
import { getFeaturedProjects } from "@/content/projects";
import { services } from "@/content/services";
import { reviews } from "@/content/reviews";
import { stats } from "@/content/stats";
import CortexMark from "@/components/brand/CortexMark";
import CapabilityOrbit from "@/components/effects/CapabilityOrbit";
import TechnologyUniverse from "@/components/effects/TechnologyUniverse";
import TiltCard from "@/components/effects/TiltCard";
import ScrollSection from "@/components/ui/ScrollSection";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <PageTransition>
      {/* ─── HERO SECTION ─── */}
      <section className="relative isolate flex min-h-[78svh] flex-col justify-center overflow-hidden bg-white pb-12 pt-28 sm:pt-30 md:pb-14 md:pt-32">
        {/* Animated background layers */}
        <div className="absolute inset-0 bg-grid" />
        <AuroraBackground />
        <FloatingGeometry />
        <FloatingParticles count={15} />

        <div className="section-container relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8932f8]/20 bg-[#f6efff] px-3 py-1.5 shadow-sm backdrop-blur-sm animate-badge-float"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-text-secondary">
              A software company for complex business operations
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.2,
            }}
            className="mx-auto max-w-[1000px] text-[clamp(2.125rem,4.6vw,3.75rem)] font-medium leading-[1.08] tracking-[-.045em]"
          >
            Building Intelligent Platforms for{" "}
            <span className="text-gradient-shimmer">Healthcare, Diagnostics,</span>
            <br />
            <span className="text-gradient-shimmer">Manufacturing &amp; Commerce</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.4,
            }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Cortex Analytix builds scalable software that replaces fragmented
            workflows with connected operations that are easier to manage,
            measure, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.6,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Link href="/projects/" className="btn-primary text-base">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact/" className="btn-secondary text-base">
                Book a Consultation
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.8,
            }}
            className="mt-12"
          >
            <CortexMark size={90} className="mx-auto opacity-80 transition-opacity duration-500 hover:opacity-100 animate-float-gentle" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-black/15 pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-brand-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* <Scroll3DScene /> */}

      {/* ─── STATS SECTION ─── */}
      <ScrollSection className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-[#f6f1fb] !py-[5.4rem] max-md:m-2.5 max-md:rounded-[2rem] max-md:!py-[2.7rem]">
        {/* Gradient dividers */}
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
        <div className="absolute inset-0 bg-surface/30" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 gap-[1.8rem] md:grid-cols-4 md:gap-[2.7rem]">
            {stats.map((stat, i) => (
              <TiltCard key={stat.label} maxTilt={5} spotlightSize={135} className="h-full">
                <div className="h-full rounded-[.9rem] border border-white/65 bg-white/45 p-[1.125rem] shadow-[0_14px_34px_rgba(74,34,120,.08),inset_0_1px_rgba(255,255,255,.9)] backdrop-blur-sm [transform:translateZ(13px)]">
                  <StatCounter stat={stat} index={i} />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ─── FEATURED PROJECTS ─── */}
      <ScrollSection className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-white max-md:m-2.5 max-md:rounded-[2rem]">
        <FloatingParticles count={8} className="opacity-30" />
        <div className="section-container relative z-10">
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
            <MagneticButton>
              <Link
                href="/projects/"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* ─── SERVICES SECTION ─── */}
      <ScrollSection className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-[radial-gradient(circle_at_85%_0%,rgba(137,50,248,.13),transparent_35%)] bg-[#faf8fc] !py-[4.5rem] max-md:m-2.5 max-md:rounded-[2rem] max-md:!py-12">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <FloatingParticles count={10} className="opacity-20" />
        <div className="section-container relative z-10">
          <SectionHeading
            title="What We Build"
            subtitle="End-to-end software services — from concept to deployment and beyond."
            compact
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} compact />
            ))}
          </div>
          <ScrollReveal className="mt-8 text-center">
            <MagneticButton>
              <Link
                href="/services/"
                className="btn-secondary inline-flex items-center gap-2"
              >
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </ScrollSection>

      <TechnologyUniverse />

      <CapabilityOrbit />

      {/* ─── TESTIMONIALS SECTION ─── */}
      <ScrollSection revealDirection="right" className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-white max-md:m-2.5 max-md:rounded-[2rem]">
        <div className="section-container relative z-10">
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
      </ScrollSection>

      {/* ─── CTA SECTION ─── */}
      <ScrollSection revealBlur className="section">
        <div className="section-container">
          <ScrollReveal blur>
            <GlowingBorder borderRadius={20}>
              <div className="relative overflow-hidden rounded-[20px] p-8 md:p-16 text-center glass-card-elevated">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10" />
                <FloatingParticles count={6} className="opacity-20" />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
                    Let&apos;s discuss how we can build the perfect solution for
                    your unique challenges.
                  </p>
                  <MagneticButton>
                    <Link href="/contact/" className="btn-primary text-base">
                      Start a Conversation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </GlowingBorder>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </PageTransition>
  );
}
