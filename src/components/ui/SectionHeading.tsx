"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = true,
  centered = true,
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
      <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
            gradient ? "text-gradient-shimmer" : "text-text-primary"
          }`}
        >
          {title}
        </h2>
        {/* Decorative separator */}
        <div
          className={`mt-4 mb-5 flex items-center gap-2 ${
            centered ? "justify-center" : ""
          }`}
        >
          <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-brand-primary rounded-full" />
          <div className="w-2 h-2 rounded-full bg-brand-primary/60" />
          <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-brand-secondary rounded-full" />
        </div>
        {subtitle && (
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
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
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <motion.h2
        variants={childVariants}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          gradient ? "text-gradient-shimmer" : "text-text-primary"
        }`}
      >
        {title}
      </motion.h2>

      {/* Decorative separator */}
      <motion.div
        variants={childVariants}
        className={`mt-4 mb-5 flex items-center gap-2 ${
          centered ? "justify-center" : ""
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
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
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[2px] bg-gradient-to-l from-transparent to-brand-secondary rounded-full"
        />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={childVariants}
          className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
