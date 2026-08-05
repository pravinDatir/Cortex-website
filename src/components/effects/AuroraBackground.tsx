"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Animated aurora / mesh gradient background.
 * Renders 3â€“4 slowly-morphing gradient blobs behind content.
 */
export default function AuroraBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Aurora blob 1 â€” blue */}
      <div
        className={`absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px] ${
          prefersReduced ? "" : "aurora-blob-1"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(137, 50, 248, 1), transparent 70%)",
        }}
      />

      {/* Aurora blob 2 â€” purple */}
      <div
        className={`absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[100px] ${
          prefersReduced ? "" : "aurora-blob-2"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(49, 21, 87, 1), transparent 70%)",
        }}
      />

      {/* Aurora blob 3 â€” cyan */}
      <div
        className={`absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[80px] ${
          prefersReduced ? "" : "aurora-blob-3"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 145, 52, 1), transparent 70%)",
        }}
      />

      {/* Aurora blob 4 â€” warm accent */}
      <div
        className={`absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[90px] ${
          prefersReduced ? "" : "aurora-blob-4"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(170, 85, 247, 1), transparent 70%)",
        }}
      />
    </div>
  );
}
