"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColors: Record<string, string> = {
  erp: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  mobile: "bg-green-500/10 text-green-400 border-green-500/20",
  ecommerce: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const categoryLabels: Record<string, string> = {
  erp: "ERP",
  web: "Web App",
  mobile: "Mobile",
  ecommerce: "E-Commerce",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}/`} className="group block">
        <div className="glass-card overflow-hidden h-full">
          {/* Thumbnail placeholder with gradient */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/10">
                {project.title.charAt(0)}
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-all duration-500 flex items-center justify-center">
              <div className="p-3 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category badge */}
            <span
              className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${
                categoryColors[project.category] || categoryColors.web
              }`}
            >
              {categoryLabels[project.category] || project.category}
            </span>

            <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-brand-primary-light transition-colors line-clamp-1">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-tertiary border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-tertiary border border-white/5">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
