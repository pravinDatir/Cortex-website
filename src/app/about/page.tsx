"use client";

import type { ComponentType, CSSProperties } from "react";
import { motion } from "motion/react";
import { FaAws } from "react-icons/fa6";
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/effects/TiltCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { Code2, Users, Target, Award } from "lucide-react";
import CortexMark from "@/components/brand/CortexMark";
import PremiumPageHero from "@/components/ui/PremiumPageHero";
import ScrollSection from "@/components/ui/ScrollSection";

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description:
      "Every solution we build starts with understanding your business deeply. We don't just write code — we solve problems.",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description:
      "Clean architecture, modern tooling, and rigorous testing. We build software that's maintainable, scalable, and secure.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team — transparent communication, shared goals, and joint ownership of outcomes.",
  },
  {
    icon: Award,
    title: "Measurable Impact",
    description:
      "Every project delivers quantifiable value — whether it's 40% efficiency gains, reduced costs, or accelerated time-to-market.",
  },
];

type TechIcon = ComponentType<{ className?: string; style?: CSSProperties }>;
type TechStackItem = { name: string; icon: TechIcon; color: string };

const techStack: TechStackItem[] = [
  { name: "React", icon: SiReact, color: "#087EA4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#F57C00" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <ScrollSection className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={8} className="opacity-20" />
          <div className="section-container relative z-10">
            <div className="text-center">
              <PremiumPageHero
                variant="about"
                title="About Cortex Analytix"
                subtitle="We're a technology consulting firm that transforms business challenges into intelligent software solutions."
              />
              <ScrollReveal blur>
                <div className="mb-8 flex justify-center">
                  <CortexMark size={160} className="opacity-90 animate-float-gentle" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
                  Founded with the vision of bridging the gap between cutting-edge
                  technology and real-world business needs, Cortex Analytix
                  specializes in building AI-powered applications, enterprise
                  resource planning systems, cross-platform mobile apps, and
                  modern web platforms. Our tagline —{" "}
                  <span className="text-gradient-shimmer font-semibold">
                    Insight. Innovation. Impact.
                  </span>{" "}
                  — reflects our commitment to delivering solutions that are not
                  just technically excellent, but strategically impactful.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollSection>

        {/* Values */}
        <ScrollSection revealDirection="left" className="section relative bg-surface/20">
          <div className="section-container relative z-10">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide every project we deliver."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <TiltCard maxTilt={3}>
                    <div className="glass-card p-6 h-full flex gap-4 relative overflow-hidden group">
                      {/* Hover glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/0 group-hover:bg-brand-primary/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(137,50,248,0.2)] transition-all duration-300">
                        <value.icon className="w-6 h-6 text-brand-primary-light" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Tech Stack */}
        <ScrollSection revealDirection="right" className="section relative">
          <FloatingParticles count={6} className="opacity-15" />
          <div className="section-container relative z-10">
            <SectionHeading
              title="Our Technology Stack"
              subtitle="We work with modern, battle-tested technologies chosen for performance, scalability, and developer experience."
            />
            <ScrollReveal blur>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 18,
                      delay: i * 0.04,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    className="group flex min-h-24 cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-black/[.07] bg-white/75 px-3 py-4 text-center shadow-[0_12px_30px_rgba(26,20,42,.06)] backdrop-blur-md transition-all duration-300 hover:border-black/10 hover:bg-white hover:shadow-[0_18px_42px_rgba(26,20,42,.12)]"
                  >
                    <span
                      className="grid size-11 place-items-center rounded-xl border border-black/[.06] bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                      style={{ boxShadow: `0 10px 24px ${tech.color}26` }}
                    >
                      <tech.icon className="size-6" style={{ color: tech.color }} />
                    </span>
                    <span className="text-xs font-semibold leading-tight text-text-primary sm:text-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
