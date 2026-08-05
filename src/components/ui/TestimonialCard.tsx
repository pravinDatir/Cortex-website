"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/content/reviews";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import TiltCard from "@/components/effects/TiltCard";

interface TestimonialCardProps {
  review: Review;
  index?: number;
}

export default function TestimonialCard({ review, index = 0 }: TestimonialCardProps) {
  const prefersReduced = useReducedMotion();

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
      className={!prefersReduced ? "animate-float-gentle" : ""}
      style={!prefersReduced ? { animationDelay: `${index * 1.5}s` } : {}}
    >
      <TiltCard maxTilt={4} spotlightSize={210} className="h-full">
      <div className="glass-card group relative flex h-full flex-col overflow-hidden p-6 shadow-[0_18px_45px_rgba(49,21,87,.08)] [transform:translateZ(0)]">
        {/* Decorative quote mark */}
        <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
          <Quote className="w-16 h-16 text-brand-primary" />
        </div>

        {/* Subtle hover glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-primary/0 group-hover:bg-brand-primary/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

        {/* Stars with staggered entrance */}
        <div className="flex items-center gap-0.5 mb-4">
          {Array.from({ length: review.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1 + i * 0.06,
              }}
            >
              <Star
                className="w-4 h-4 fill-amber-400 text-amber-400"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative z-10 text-sm text-text-secondary leading-relaxed flex-1 mb-6">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        {/* Author with animated avatar ring */}
        <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-black/5">
          {/* Avatar with rotating gradient ring */}
          <div className="relative">
            <div
              className={`absolute -inset-[2px] rounded-full ${
                !prefersReduced ? "avatar-ring" : ""
              }`}
              style={{
                background: prefersReduced
                  ? "linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))"
                  : undefined,
              }}
            />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {review.name.charAt(0)}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">
              {review.name}
            </p>
            <p className="text-xs text-text-tertiary">
              {review.role}, {review.company}
            </p>
          </div>
        </div>
      </div>
      </TiltCard>
    </motion.div>
  );
}
