"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  /** Use blur-to-sharp entrance (default: false) */
  blur?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  blur = false,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const directionMap = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
  };

  const offset = directionMap[direction];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: blur ? "blur(8px)" : "blur(0px)",
        ...offset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
        ...(blur && {
          filter: { duration: 0.4, delay },
        }),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
