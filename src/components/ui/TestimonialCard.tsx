"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { Review } from "@/content/reviews";

interface TestimonialCardProps {
  review: Review;
  index?: number;
}

export default function TestimonialCard({ review, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="glass-card p-6 h-full flex flex-col">
        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-4">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">
              {review.name.charAt(0)}
            </span>
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
    </motion.div>
  );
}
