import type { Metadata } from "next";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowLeft, ExternalLink, GitFork, Clock, Layers } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 md:pt-32">
      <section className="section">
        <div className="section-container max-w-4xl">
          {/* Back Link */}
          <ScrollReveal>
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal delay={0.1} blur>
            <div className="mb-8">
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 ${
                  categoryColors[project.category] || categoryColors.web
                }`}
              >
                {categoryLabels[project.category] || project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Meta Info */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-colors">
                <Clock className="w-4 h-4 text-brand-primary-light" />
                <span className="text-sm text-text-secondary">
                  {project.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-colors">
                <Layers className="w-4 h-4 text-brand-primary-light" />
                <span className="text-sm text-text-secondary">
                  {project.technologies.length} Technologies
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Project Screenshot in Device Mockup */}
          {project.thumbnail && (
            <ScrollReveal delay={0.25} blur>
              <div className="device-mockup mb-12">
                {/* Browser chrome bar */}
                <div className="device-mockup-bar">
                  <div className="device-mockup-dot" />
                  <div className="device-mockup-dot" />
                  <div className="device-mockup-dot" />
                  <div className="flex-1 ml-4 h-6 rounded-md bg-white/5 max-w-xs" />
                </div>
                {/* Screenshot */}
                <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-surface">
                  <Image
                    src={getAssetPath(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-primary/50 to-transparent" />
                <h3 className="text-sm font-semibold text-brand-primary-light uppercase tracking-wider mb-3">
                  The Challenge
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent/50 to-transparent" />
                <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
                  Our Solution
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Technologies */}
          <ScrollReveal delay={0.3}>
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-text-secondary hover:text-text-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)] transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Action Links */}
          {(project.liveUrl || project.githubUrl) && (
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <GitFork className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
