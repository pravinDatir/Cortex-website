"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  compact?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = true,
  centered = true,
  compact = false,
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  if (prefersReduced) {
    return (
      <div className={`${compact ? "mb-9 md:mb-12" : "mb-12 md:mb-16"} ${centered ? "text-center" : ""}`}>
        <h2
          className={`${compact ? "text-2xl sm:text-3xl md:text-4xl" : "text-3xl sm:text-4xl md:text-5xl"} font-bold tracking-tight ${
            gradient ? "text-gradient-shimmer" : "text-text-primary"
          }`}
        >
          {title}
        </h2>
        {/* Decorative separator */}
        <div
          className={`${compact ? "mb-4 mt-3" : "mb-5 mt-4"} flex items-center gap-2 ${
            centered ? "justify-center" : ""
          }`}
        >
          <div className={`${compact ? "w-6" : "w-8"} h-[2px] rounded-full bg-gradient-to-r from-transparent to-brand-primary`} />
          <div className="w-2 h-2 rounded-full bg-brand-primary/60" />
          <div className={`${compact ? "w-6" : "w-8"} h-[2px] rounded-full bg-gradient-to-l from-transparent to-brand-secondary`} />
        </div>
        {subtitle && (
          <p className={`${compact ? "text-base" : "text-lg"} mx-auto max-w-2xl leading-relaxed text-text-secondary`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${compact ? "mb-9 md:mb-12" : "mb-12 md:mb-16"} ${centered ? "text-center" : ""}`}
    >
      <motion.h2
        variants={childVariants}
        className={`${compact ? "text-2xl sm:text-3xl md:text-4xl" : "text-3xl sm:text-4xl md:text-5xl"} font-bold tracking-tight ${
          gradient ? "text-gradient-shimmer" : "text-text-primary"
        }`}
      >
        {title}
      </motion.h2>

      {/* Decorative separator */}
      <motion.div
        variants={childVariants}
        className={`${compact ? "mb-4 mt-3" : "mb-5 mt-4"} flex items-center gap-2 ${
          centered ? "justify-center" : ""
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: compact ? 24 : 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-transparent to-brand-primary rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
          className="w-2 h-2 rounded-full bg-brand-primary/60"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: compact ? 24 : 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[2px] bg-gradient-to-l from-transparent to-brand-secondary rounded-full"
        />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={childVariants}
          className={`${compact ? "text-base" : "text-lg"} mx-auto max-w-2xl leading-relaxed text-text-secondary`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
