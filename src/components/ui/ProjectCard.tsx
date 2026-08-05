"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

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
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
    >
      <TiltCard maxTilt={5}>
        <Link href={`/projects/${project.slug}/`} className="group block">
          <div className="glass-card overflow-hidden h-full flex flex-col">
            {/* Thumbnail Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-surface">
              {project.thumbnail ? (
                <Image
                  src={getAssetPath(project.thumbnail)}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  style={{ willChange: "transform" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10">
                  <span className="text-4xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              {/* Hover overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Floating action button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={false}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-black/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </motion.div>
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

              <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-brand-primary-light transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech badges with stagger animation */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-black/[.035] text-text-tertiary border border-black/5 hover:border-brand-primary/20 hover:text-text-secondary transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-black/[.035] text-text-tertiary border border-black/5">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
