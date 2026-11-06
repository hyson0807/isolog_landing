"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { range, useScrollProgress } from "@/lib/useScrollProgress";

const COPY =
  "Isotretinoin (Accutane) is a powerful acne treatment — if you take it consistently, for months. But real life gets in the way: late nights, travel, alternate-day schedules, and a cumulative goal you can't keep in your head. IsoLog carries that load for you, so you can focus on clearer skin. With IsoLog there's";

const WORDS = COPY.split(" ");

const NO_LIST = [
  "missed doses",
  "mental math",
  "messy spreadsheets",
  "sticky-note reminders",
  "guesswork",
];

function Rotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % NO_LIST.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden rounded-2xl border border-orange-200 bg-white px-4 py-1.5 shadow-[0_10px_30px_-12px_rgba(229,90,43,0.45)]">
      <span key={index} className="animate-word-in whitespace-nowrap text-brand">
        {NO_LIST[index]}
      </span>
    </span>
  );
}

export default function Promise() {
  const [ref, progress] = useScrollProgress<HTMLElement>("pin");
  // Reveal words over the first ~75% of the pinned scroll.
  const revealed = range(progress, 0.02, 0.75) * WORDS.length;

  return (
    <section ref={ref} className="relative h-[220svh] bg-cream">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-dark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
              <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6Z" />
            </svg>
            Made for people on isotretinoin
          </h2>
          <p className="mt-7 text-2xl font-medium leading-snug tracking-tight sm:text-[2rem] sm:leading-[1.3]">
            {WORDS.map((word, i) => (
              <span
                key={i}
                className="transition-colors duration-300"
                style={{
                  color:
                    i < revealed
                      ? "rgb(17 24 39)"
                      : "rgba(17, 24, 39, 0.16)",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
          <div
            className="mt-8 flex items-center justify-center gap-3 text-2xl font-semibold tracking-tight text-gray-900 transition-all duration-700 sm:text-3xl"
            style={{
              opacity: progress > 0.6 ? 1 : 0,
              transform: `translateY(${progress > 0.6 ? 0 : 16}px)`,
            }}
          >
            No <Rotator />
          </div>
          <Link
            href="/accutane-tracker"
            className="mt-10 inline-flex items-center gap-1.5 font-semibold text-brand transition hover:gap-2.5 hover:text-brand-dark"
          >
            Learn how to track your Accutane course
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
