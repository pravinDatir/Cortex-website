import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Code2, Users, Target, Award } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cortex Analytix — a technology consulting firm building AI, ERP, mobile, and web solutions. Insight. Innovation. Impact.",
};

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

const techStack = [
  "React", "Next.js", "Flutter", "Laravel", "Node.js",
  "Python", "PHP", "TypeScript", "Tailwind CSS",
  "MySQL", "PostgreSQL", "Firebase",
  "AWS", "Docker", "GitHub Actions",
];

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="About Cortex Analytix"
              subtitle="We're a technology consulting firm that transforms business challenges into intelligent software solutions."
            />
            <ScrollReveal>
              <div className="flex justify-center mb-8">
                <Image
                  src={getAssetPath("/logo.png")}
                  alt="Cortex Analytix Logo"
                  width={160}
                  height={160}
                  className="opacity-80"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed text-lg">
                Founded with the vision of bridging the gap between cutting-edge
                technology and real-world business needs, Cortex Analytix
                specializes in building AI-powered applications, enterprise
                resource planning systems, cross-platform mobile apps, and
                modern web platforms. Our tagline —{" "}
                <span className="text-gradient font-semibold">
                  Insight. Innovation. Impact.
                </span>{" "}
                — reflects our commitment to delivering solutions that are not
                just technically excellent, but strategically impactful.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface/20">
        <div className="section-container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide every project we deliver."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card p-6 h-full flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center flex-shrink-0">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="section-container">
          <SectionHeading
            title="Our Technology Stack"
            subtitle="We work with modern, battle-tested technologies chosen for performance, scalability, and developer experience."
          />
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-text-secondary hover:text-text-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
