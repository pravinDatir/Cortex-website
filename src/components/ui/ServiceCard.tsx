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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="glass-card p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-brand-primary-light" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-text-tertiary"
            >
              <span className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
