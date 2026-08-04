"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { projects, type Project } from "@/content/projects";

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
      <div className="pt-28 md:pt-32">
        <section className="section relative">
          <FloatingParticles count={8} className="opacity-15" />
          <div className="section-container relative z-10">
            <SectionHeading
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
                      : "bg-white/5 text-text-secondary hover:text-text-primary hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {/* Animated active background */}
                  {activeCategory === cat.value && (
                    <motion.div
                      layoutId="project-filter-indicator"
                      className="absolute inset-0 bg-brand-primary rounded-full -z-10"
                      style={{
                        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
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
        </section>
      </div>
    </PageTransition>
  );
}
