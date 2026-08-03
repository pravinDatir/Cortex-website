"use client";

import { motion } from "motion/react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          gradient ? "text-gradient" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
