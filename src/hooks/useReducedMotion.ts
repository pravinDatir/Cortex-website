"use client";

import { useSyncExternalStore } from "react";

/**
 * Returns true when the user has requested reduced motion
 * via their OS accessibility settings.
 *
 * All animation/effect components should check this hook
 * and either disable or drastically simplify their output.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}
