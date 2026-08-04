"use client";

import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  /** Border radius in px (default: 16) */
  borderRadius?: number;
}

/**
 * Animated gradient border that rotates around a card.
 * Uses a conic-gradient with CSS animation for a "scanning" border effect.
 */
export default function GlowingBorder({
  children,
  className = "",
  borderRadius = 16,
}: GlowingBorderProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`relative group ${className}`}
      style={{ borderRadius }}
    >
      {/* Rotating gradient border */}
      <div
        className="absolute -inset-[1px] rounded-[inherit] glowing-border-gradient opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{ borderRadius: borderRadius + 1 }}
      />

      {/* Glow halo */}
      <div
        className="absolute -inset-[1px] rounded-[inherit] glowing-border-gradient opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
        style={{ borderRadius: borderRadius + 1 }}
      />

      {/* Content */}
      <div className="relative rounded-[inherit] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
