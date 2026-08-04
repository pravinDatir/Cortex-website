"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when the user has requested reduced motion
 * via their OS accessibility settings.
 *
 * All animation/effect components should check this hook
 * and either disable or drastically simplify their output.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
