"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PremiumPageHero from "@/components/ui/PremiumPageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { projects, type Project } from "@/content/projects";
import ScrollSection from "@/components/ui/ScrollSection";

type Category = "all" | Project["category"];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "erp", label: "ERP" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "ecommerce", label: "E-Commerce" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        <ScrollSection className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={8} className="opacity-15" />
          <div className="section-container relative z-10">
            <PremiumPageHero
              variant="projects"
              title="Our Projects"
              subtitle="Explore our portfolio of real-world solutions across industries."
            />

            {/* Category Filter Tabs with animated indicator */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "text-white"
                      : "bg-black/[.035] text-text-secondary hover:text-text-primary hover:bg-black/5 border border-black/5"
                  }`}
                >
                  {/* Animated active background */}
                  {activeCategory === cat.value && (
                    <motion.div
                      layoutId="project-filter-indicator"
                      className="absolute inset-0 bg-brand-primary rounded-full -z-10"
                      style={{
                        boxShadow: "0 4px 20px rgba(137, 50, 248, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    />
                  )}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                  >
                    <ProjectCard project={project} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="text-center text-text-tertiary mt-12">
                No projects found in this category.
              </p>
            )}
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
