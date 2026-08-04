"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Stat } from "@/content/stats";

interface StatCounterProps {
  stat: Stat;
  index?: number;
}

export default function StatCounter({ stat, index = 0 }: StatCounterProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.round(latest);
      setDisplayValue(rounded);
      if (rounded >= stat.value && !hasCompleted) {
        setHasCompleted(true);
      }
    });
    return unsubscribe;
  }, [springValue, stat.value, hasCompleted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
      className="text-center group"
    >
      {/* Counter value with scale pulse on completion */}
      <motion.div
        animate={
          hasCompleted && !prefersReduced
            ? { scale: [1, 1.05, 1] }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-gradient mb-2"
      >
        {displayValue}
        <span className="text-brand-primary-light">{stat.suffix}</span>
      </motion.div>

      {/* Glowing gradient underline */}
      <div className="relative inline-block">
        <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            hasCompleted
              ? { width: "100%", opacity: 1 }
              : { width: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full"
          style={{
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
          }}
        />
      </div>
    </motion.div>
  );
}
