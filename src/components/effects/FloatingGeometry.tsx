"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Shape {
  id: number;
  type: "sphere" | "cube" | "ring" | "diamond";
  x: string;
  y: string;
  size: number;
  color: string;
  delay: number;
  floatDuration: number;
  parallaxSpeed: number;
}

/**
 * 3D-inspired floating geometric shapes.
 * Rendered as CSS gradient elements with parallax scroll response.
 */
export default function FloatingGeometry() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const shapes: Shape[] = useMemo(
    () => [
      {
        id: 1,
        type: "sphere",
        x: "8%",
        y: "15%",
        size: 80,
        color: "rgba(137, 50, 248, 0.12)",
        delay: 0,
        floatDuration: 8,
        parallaxSpeed: 0.3,
      },
      {
        id: 2,
        type: "cube",
        x: "85%",
        y: "20%",
        size: 50,
        color: "rgba(49, 21, 87, 0.1)",
        delay: 1.5,
        floatDuration: 10,
        parallaxSpeed: 0.5,
      },
      {
        id: 3,
        type: "ring",
        x: "75%",
        y: "65%",
        size: 60,
        color: "rgba(255, 145, 52, 0.1)",
        delay: 3,
        floatDuration: 12,
        parallaxSpeed: 0.2,
      },
      {
        id: 4,
        type: "sphere",
        x: "15%",
        y: "70%",
        size: 40,
        color: "rgba(170, 85, 247, 0.1)",
        delay: 2,
        floatDuration: 9,
        parallaxSpeed: 0.4,
      },
      {
        id: 5,
        type: "diamond",
        x: "50%",
        y: "10%",
        size: 35,
        color: "rgba(137, 50, 248, 0.08)",
        delay: 4,
        floatDuration: 11,
        parallaxSpeed: 0.6,
      },
      {
        id: 6,
        type: "cube",
        x: "25%",
        y: "45%",
        size: 28,
        color: "rgba(255, 145, 52, 0.08)",
        delay: 5,
        floatDuration: 14,
        parallaxSpeed: 0.35,
      },
    ],
    []
  );

  if (prefersReduced) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          shape={shape}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function FloatingShape({
  shape,
  scrollYProgress,
}: {
  shape: Shape;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150 * shape.parallaxSpeed]
  );

  const getShapeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: shape.size,
      height: shape.size,
      left: shape.x,
      top: shape.y,
      animationDelay: `${shape.delay}s`,
      animationDuration: `${shape.floatDuration}s`,
    };

    switch (shape.type) {
      case "sphere":
        return {
          ...base,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${shape.color.replace(
            /[\d.]+\)$/,
            "0.25)"
          )}, ${shape.color}, transparent)`,
          boxShadow: `0 0 ${shape.size / 2}px ${shape.color}, inset 0 0 ${
            shape.size / 3
          }px ${shape.color.replace(/[\d.]+\)$/, "0.1)")}`,
        };
      case "cube":
        return {
          ...base,
          borderRadius: "20%",
          background: `linear-gradient(135deg, ${shape.color.replace(
            /[\d.]+\)$/,
            "0.2)"
          )}, ${shape.color})`,
          border: `1px solid ${shape.color.replace(/[\d.]+\)$/, "0.2)")}`,
          transform: "rotate(45deg)",
          boxShadow: `0 0 ${shape.size / 3}px ${shape.color}`,
        };
      case "ring":
        return {
          ...base,
          borderRadius: "50%",
          background: "transparent",
          border: `2px solid ${shape.color}`,
          boxShadow: `0 0 ${shape.size / 4}px ${shape.color}, inset 0 0 ${
            shape.size / 4
          }px ${shape.color}`,
        };
      case "diamond":
        return {
          ...base,
          borderRadius: "4px",
          background: `linear-gradient(135deg, ${shape.color}, transparent)`,
          border: `1px solid ${shape.color.replace(/[\d.]+\)$/, "0.15)")}`,
          transform: "rotate(45deg)",
        };
      default:
        return base;
    }
  };

  return (
    <motion.div
      className="absolute geometry-float"
      style={{
        ...getShapeStyles(),
        y,
      }}
    />
  );
}
