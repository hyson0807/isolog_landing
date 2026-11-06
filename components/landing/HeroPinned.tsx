"use client";

import Image from "next/image";
import StoreBadges from "@/components/StoreBadges";
import { clamp01, useScrollProgress } from "@/lib/useScrollProgress";
import {
  CheckInChip,
  GoalChip,
  ReminderChip,
  ScheduleChip,
  SkinChip,
  StreakChip,
} from "./Chips";

const PERSONAS = [
  {
    accent: "first-time Accutane users",
    body: "Starting isotretinoin is a lot to keep track of. Set your dose once, check in with one tap, and build a clean record from day one.",
    image: "/features/daily-dose-logging.jpg",
    alt: "IsoLog calendar screen showing an every-other-day dose schedule",
    left: <CheckInChip />,
    right: <StreakChip />,
  },
  {
    accent: "busy schedules",
    body: "Late nights, travel, alternate-day plans. Reminders arrive at the time that fits your routine, so a hectic day never turns into a missed one.",
    image: "/features/reminder-sheet.jpg",
    alt: "IsoLog reminder sheet set to send medication reminders at 10:00 PM",
    left: <ReminderChip />,
    right: <ScheduleChip />,
  },
  {
    accent: "goal chasers",
    body: "Every dose adds up. See your cumulative total and how close you are to your target — no spreadsheets, no mental math.",
    image: "/features/dose-tracking.jpg",
    alt: "IsoLog cumulative dose tracking screen with total dosage",
    left: <GoalChip />,
    right: <SkinChip />,
  },
];

const STAGES = PERSONAS.length + 1; // intro + personas

// How visible a stage is, given its signed distance from the scroll position.
// Fully visible within ±0.22, fully hidden past ±0.5.
const visibility = (d: number) => clamp01(1 - (Math.abs(d) - 0.22) / 0.28);

export default function HeroPinned() {
  const [ref, progress] = useScrollProgress<HTMLElement>("pin");
  const x = progress * (STAGES - 1);
  const active = Math.round(x);

  const stageStyle = (i: number, travel: number) => {
    const d = x - i;
    const o = visibility(d);
    return {
      opacity: o,
      transform: `translate3d(0, ${(-d * travel).toFixed(1)}px, 0)`,
      filter: o < 1 ? `blur(${((1 - o) * 8).toFixed(1)}px)` : undefined,
      pointerEvents: o > 0.6 ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <section
      ref={ref}
      aria-label="IsoLog introduction"
      className="relative -mt-14 h-[400svh] sm:-mt-16"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-gradient-to-b from-cream via-brand-tint to-[#ffe4d6]">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[62%] size-[min(110vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.30)_0%,rgba(255,143,102,0.12)_40%,transparent_70%)] blur-2xl"
          style={{ transform: `translateX(-50%) scale(${0.85 + progress * 0.35})` }}
        />

        {/* Copy */}
        <div className="relative mx-auto grid max-w-5xl px-5 pt-24 text-center sm:pt-28 [&>*]:col-start-1 [&>*]:row-start-1">
          <div style={stageStyle(0, 60)} className="will-change-transform">
            <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.25rem]">
              IsoLog — your Accutane tracker.{" "}
              <span className="block text-brand">Never miss a dose.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-gray-600">
              Log every dose, get reminded before you forget, and watch your
              progress add up.
            </p>
            <StoreBadges className="mx-auto mt-7 max-w-sm justify-center sm:max-w-none" />
          </div>

          {PERSONAS.map((p, i) => (
            <div
              key={p.accent}
              style={stageStyle(i + 1, 60)}
              className="will-change-transform"
              aria-hidden={active !== i + 1}
            >
              <p className="text-balance text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
                IsoLog is built for
                <span className="block bg-gradient-to-r from-brand-dark via-brand to-brand-light bg-clip-text text-transparent">
                  {p.accent}
                </span>
              </p>
              <p className="mx-auto mt-5 max-w-xl text-balance leading-relaxed text-gray-600 sm:text-lg">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Visuals */}
        <div className="absolute inset-x-0 bottom-0 flex h-[50%] justify-center">
          {/* Intro: product shot */}
          <div
            style={stageStyle(0, 120)}
            className="absolute bottom-[-2%] w-[min(1100px,160vw,100svh)] will-change-transform"
          >
            <div className="-translate-x-[13%]">
            <Image
              src="/hero.png"
              alt="IsoLog app screens showing dose check-in, reminders, and cumulative dose tracking"
              width={1672}
              height={941}
              priority
              quality={90}
              sizes="(min-width: 768px) 1000px, 160vw"
              className="w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_42%_70%_at_63%_55%,black_60%,transparent_100%)]"
            />
            </div>
          </div>

          {PERSONAS.map((p, i) => {
            const d = x - (i + 1);
            const o = visibility(d);
            return (
              <div key={p.image} aria-hidden={active !== i + 1}>
                <div
                  className="absolute bottom-0 left-1/2 will-change-transform"
                  style={{
                    width: "min(340px, 68vw, 40svh)",
                    opacity: o,
                    transform: `translate3d(-50%, ${(14 - d * 30).toFixed(1)}%, 0) scale(${(0.9 + o * 0.1).toFixed(3)})`,
                  }}
                >
                  <div className="overflow-hidden rounded-[2.25rem] border-[7px] border-white bg-white shadow-[0_50px_90px_-35px_rgba(229,90,43,0.55)] ring-1 ring-orange-100">
                    <div className="relative aspect-[10/11]">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes="340px"
                        quality={90}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating chips (desktop) */}
                <div
                  className="absolute left-[6%] top-[-8%] hidden will-change-transform md:block lg:left-[12%]"
                  style={{
                    opacity: o,
                    transform: `translate3d(${(-(1 - o) * 40).toFixed(1)}px, ${(-d * 220).toFixed(1)}px, 0) rotate(-6deg)`,
                  }}
                >
                  <div className="animate-float">{p.left}</div>
                </div>
                <div
                  className="absolute right-[6%] top-[22%] hidden will-change-transform md:block lg:right-[12%]"
                  style={{
                    opacity: o,
                    transform: `translate3d(${((1 - o) * 40).toFixed(1)}px, ${(-d * 300).toFixed(1)}px, 0) rotate(5deg)`,
                  }}
                >
                  <div className="animate-float-slow">{p.right}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stage indicator */}
        <div
          aria-hidden
          className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
        >
          {Array.from({ length: STAGES }).map((_, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-full transition-all duration-500 ${
                active === i ? "h-6 bg-brand" : "h-1.5 bg-orange-200"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 transition-opacity duration-500 xl:flex"
          style={{ opacity: progress < 0.03 ? 1 : 0 }}
        >
          Scroll
          <span className="h-8 w-px overflow-hidden bg-orange-200">
            <span className="block h-1/2 w-full animate-[float_1.6s_ease-in-out_infinite] bg-brand" />
          </span>
        </div>
      </div>
    </section>
  );
}
