"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FloatingParticlesProps {
  /** Number of particles (default: 18) */
  count?: number;
  /** CSS class for the container */
  className?: string;
}

/**
 * Subtle, low-density floating particle background.
 * Pure CSS animations — no canvas or JS animation loop.
 */
export default function FloatingParticles({
  count = 18,
  className = "",
}: FloatingParticlesProps) {
  const prefersReduced = useReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 8;
      const opacity = Math.random() * 0.3 + 0.1;
      const drift = Math.random() * 40 - 20; // horizontal drift range

      return { id: i, size, x, y, duration, delay, opacity, drift };
    });
  }, [count]);

  if (prefersReduced) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full particle-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(124, 58, 237, 0.4))`,
            boxShadow: `0 0 ${p.size * 3}px rgba(59, 130, 246, 0.3)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
