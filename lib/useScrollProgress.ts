"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll progress (0 → 1) of an element.
 *
 * - "pin":  for a tall section with a sticky child. 0 when the section's top
 *           hits the viewport top, 1 when its bottom reaches the viewport bottom.
 * - "pass": 0 when the element's top enters the bottom of the viewport,
 *           1 when its bottom leaves the top.
 */
export function useScrollProgress<T extends HTMLElement>(
  mode: "pin" | "pass" = "pin",
) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw =
        mode === "pin"
          ? -rect.top / Math.max(1, rect.height - vh)
          : (vh - rect.top) / (vh + rect.height);
      const next = Math.min(1, Math.max(0, raw));
      setProgress((prev) => (Math.abs(prev - next) < 0.0005 ? prev : next));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode]);

  return [ref, progress] as const;
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Maps `v` from [start, end] to [0, 1], clamped. */
export const range = (v: number, start: number, end: number) =>
  clamp01((v - start) / (end - start));
