"use client";

import { motion } from "motion/react";
import {
  Brain,
  Database,
  Smartphone,
  Globe,
  Cloud,
  Plug,
  Zap,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/content/services";
import TiltCard from "@/components/effects/TiltCard";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Database,
  Smartphone,
  Globe,
  Cloud,
  Plug,
  Zap,
  BarChart3,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe;

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.08,
      }}
      className="group"
    >
      <TiltCard maxTilt={4}>
        <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden">
          {/* Subtle spotlight effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Icon with animated gradient background */}
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]">
              <Icon className="w-6 h-6 text-brand-primary-light" />
            </div>
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary-light transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-sm text-text-secondary leading-relaxed mb-5 flex-1">
            {service.description}
          </p>

          {/* Features with staggered entrance */}
          <motion.ul
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 space-y-2"
          >
            {service.features.map((feature) => (
              <motion.li
                key={feature}
                variants={featureItemVariants}
                className="flex items-center gap-2 text-xs text-text-tertiary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </TiltCard>
    </motion.div>
  );
}
