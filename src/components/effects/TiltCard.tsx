"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees (default: 6) */
  maxTilt?: number;
  /** Spotlight radius in px (default: 250) */
  spotlightSize?: number;
}

/**
 * 3D tilt wrapper with dynamic spotlight.
 * Applies perspective + rotateX/Y on mouse hover
 * with a spotlight highlight that follows the cursor.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  spotlightSize = 250,
}: TiltCardProps) {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  const springSpotlightX = useSpring(spotlightX, {
    stiffness: 150,
    damping: 20,
  });
  const springSpotlightY = useSpring(spotlightY, {
    stiffness: 150,
    damping: 20,
  });
  const springSpotlightOpacity = useSpring(spotlightOpacity, {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize to -1..1 range
    const normalX = mouseX / (rect.width / 2);
    const normalY = mouseY / (rect.height / 2);

    rotateX.set(-normalY * maxTilt);
    rotateY.set(normalX * maxTilt);

    // Spotlight position (relative to card)
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    spotlightOpacity.set(0);
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {children}
        {/* Spotlight overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            opacity: springSpotlightOpacity,
            background: `radial-gradient(${spotlightSize}px circle at ${0}px ${0}px, rgba(59, 130, 246, 0.08), transparent 60%)`,
            // Use CSS variables for dynamic positioning
            ["--spotlight-x" as string]: springSpotlightX,
            ["--spotlight-y" as string]: springSpotlightY,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
