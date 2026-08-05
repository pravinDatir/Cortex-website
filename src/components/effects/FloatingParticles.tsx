"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 9283.31 + salt * 77.13) * 43758.5453;
  return value - Math.floor(value);
}

interface FloatingParticlesProps {
  /** Number of particles (default: 18) */
  count?: number;
  /** CSS class for the container */
  className?: string;
}

/**
 * Subtle, low-density floating particle background.
 * Pure CSS animations â€” no canvas or JS animation loop.
 */
export default function FloatingParticles({
  count = 18,
  className = "",
}: FloatingParticlesProps) {
  const prefersReduced = useReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = seededValue(i, 1) * 3 + 1;
      const x = seededValue(i, 2) * 100;
      const y = seededValue(i, 3) * 100;
      const duration = seededValue(i, 4) * 15 + 10;
      const delay = seededValue(i, 5) * 8;
      const opacity = seededValue(i, 6) * 0.3 + 0.1;
      const drift = seededValue(i, 7) * 40 - 20;

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
            background: `radial-gradient(circle, rgba(137, 50, 248, 0.8), rgba(49, 21, 87, 0.4))`,
            boxShadow: `0 0 ${p.size * 3}px rgba(137, 50, 248, 0.3)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
