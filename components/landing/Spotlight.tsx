"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { range, useScrollProgress } from "@/lib/useScrollProgress";

export default function Spotlight() {
  const [ref, progress] = useScrollProgress<HTMLDivElement>("pass");
  // Card grows into place as it enters; screens drift at different speeds.
  const grow = range(progress, 0.05, 0.45);
  const drift = (progress - 0.5) * 2; // -1 → 1

  return (
    <section
      id="progress"
      className="relative scroll-mt-20 overflow-hidden bg-cream py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-dark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
              <path d="M3 3v18h18" />
              <path d="m7 15 4-4 3 3 6-6" />
            </svg>
            Progress at a glance
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
            Watch every dose add up
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-gray-600">
            Your dose, schedule, reminder, and skin status live on one screen —
            and your cumulative total updates the moment you check in.
          </p>
        </Reveal>

        <div
          ref={ref}
          className="relative mx-auto mt-14 h-[440px] max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ffe6d9] via-[#ffb48f] to-brand will-change-transform sm:h-[560px]"
          style={{
            transform: `scale(${(0.9 + grow * 0.1).toFixed(3)})`,
            borderRadius: `${(64 - grow * 24).toFixed(0)}px`,
          }}
        >
          {/* soft light */}
          <div
            aria-hidden
            className="absolute -left-20 -top-24 size-96 rounded-full bg-white/50 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 right-0 size-[28rem] rounded-full bg-brand-dark/40 blur-3xl"
          />

          {/* left screen */}
          <div
            className="absolute bottom-[-8%] left-[6%] hidden w-[30%] -rotate-6 sm:block"
            style={{ transform: `translateY(${(drift * 40).toFixed(1)}px) rotate(-6deg)` }}
          >
            <Screen src="/features/reminder-sheet.jpg" alt="IsoLog reminder settings sheet" aspect="aspect-[1178/1250]" />
          </div>

          {/* center screen */}
          <div
            className="absolute bottom-[-12%] left-1/2 w-[72%] sm:w-[36%]"
            style={{ transform: `translate(-50%, ${(drift * -30).toFixed(1)}px)` }}
          >
            <Screen src="/features/dose-tracking.jpg" alt="IsoLog cumulative dose tracking chart" aspect="aspect-[1179/1299]" />
          </div>

          {/* right screen */}
          <div
            className="absolute bottom-[-8%] right-[6%] hidden w-[30%] sm:block"
            style={{ transform: `translateY(${(drift * 55).toFixed(1)}px) rotate(6deg)` }}
          >
            <Screen src="/features/daily-dose-logging.jpg" alt="IsoLog dose calendar" aspect="aspect-[1179/927]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Screen({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-white/90 bg-white shadow-[0_40px_80px_-30px_rgba(120,40,10,0.55)]">
      <div className={`relative ${aspect}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 640px) 360px, 72vw" quality={90} className="object-cover object-top" />
      </div>
    </div>
  );
}
