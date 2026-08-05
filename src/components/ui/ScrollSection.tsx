"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollSectionProps extends Omit<HTMLMotionProps<"section">, "initial" | "animate" | "whileInView" | "viewport" | "transition"> {
  revealDelay?: number;
  revealDirection?: "up" | "left" | "right";
  revealBlur?: boolean;
}

const ScrollSection = forwardRef<HTMLElement, ScrollSectionProps>(function ScrollSection(
  {
    children,
    className = "",
    revealDelay = 0,
    revealDirection = "up",
    revealBlur = true,
    ...sectionProps
  },
  ref,
) {
  const reducedMotion = useReducedMotion();
  const offset = {
    up: { x: 0, y: 52 },
    left: { x: -44, y: 0 },
    right: { x: 44, y: 0 },
  }[revealDirection];

  return (
    <motion.section
      ref={ref}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: .988,
              rotateX: revealDirection === "up" ? 2.5 : 0,
              filter: revealBlur ? "blur(8px)" : "blur(0px)",
              ...offset,
            }
      }
      whileInView={
        reducedMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: .08, margin: "0px 0px -7% 0px" }}
      transition={{
        type: "spring",
        stiffness: 72,
        damping: 20,
        mass: .82,
        delay: revealDelay,
        opacity: { duration: .48, delay: revealDelay },
        filter: { duration: .52, delay: revealDelay },
      }}
      className={`${className} [transform-origin:50%_18%] [transform-style:preserve-3d]`}
      {...sectionProps}
    >
      {children}
    </motion.section>
  );
});

export default ScrollSection;
