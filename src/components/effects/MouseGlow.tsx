"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page-level interactive mouse-following glow.
 * Renders a soft radial gradient that tracks the cursor.
 */
export default function MouseGlow() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced, mouseX, mouseY]);

  if (prefersReduced) return null;

  return (
    <motion.div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(137, 50, 248, 0.06) 0%, rgba(49, 21, 87, 0.03) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
