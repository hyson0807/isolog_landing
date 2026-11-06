"use client";

import Image from "next/image";
import StoreBadges from "@/components/StoreBadges";
import { range, useScrollProgress } from "@/lib/useScrollProgress";
import {
  AlcoholChip,
  CheckInChip,
  GoalChip,
  ReminderChip,
  SkinChip,
  StreakChip,
} from "./Chips";

// Start offsets (px, from the app icon) for the chips that converge on it.
const ORBIT = [
  { x: -460, y: -120, r: -8, chip: <GoalChip /> },
  { x: -380, y: 150, r: 5, chip: <ReminderChip /> },
  { x: -190, y: -190, r: -3, chip: <CheckInChip /> },
  { x: 440, y: -150, r: 7, chip: <StreakChip /> },
  { x: 390, y: 140, r: -5, chip: <AlcoholChip /> },
  { x: 200, y: -200, r: 4, chip: <SkinChip /> },
];

const FAN = [
  { src: "/features/reminder-sheet.jpg", alt: "IsoLog reminder sheet", r: -10, x: -62, aspect: "aspect-[1178/1250]" },
  { src: "/features/daily-dose-logging.jpg", alt: "IsoLog dose calendar", r: 0, x: 0, aspect: "aspect-[1179/927]" },
  { src: "/features/dose-tracking.jpg", alt: "IsoLog cumulative dose chart", r: 10, x: 62, aspect: "aspect-[1179/1299]" },
];

export default function FinalCta() {
  const [orbitRef, orbitP] = useScrollProgress<HTMLDivElement>("pass");
  const [fanRef, fanP] = useScrollProgress<HTMLDivElement>("pass");
  // 0 = chips spread out, 1 = gathered into the icon
  const gather = range(orbitP, 0.15, 0.55);
  const rise = range(fanP, 0.05, 0.5);

  return (
    <section id="download" className="relative scroll-mt-16 overflow-hidden bg-cream">
      <div ref={orbitRef} className="relative px-5 pb-16 pt-24 text-center md:pt-56">
        {/* Converging chips (desktop) */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[17.5rem] hidden md:block">
          {ORBIT.map((o, i) => {
            const k = 1 - gather;
            return (
              <div
                key={i}
                className="absolute left-0 top-0 will-change-transform"
                style={{
                  transform: `translate(-50%, -50%) translate(${(o.x * (0.15 + 0.85 * k)).toFixed(1)}px, ${(o.y * (0.15 + 0.85 * k)).toFixed(1)}px) rotate(${(o.r * k).toFixed(1)}deg) scale(${(0.55 + 0.45 * k).toFixed(3)})`,
                  opacity: 1 - range(gather, 0.65, 1),
                }}
              >
                {o.chip}
              </div>
            );
          })}
        </div>

        <div
          className="relative mx-auto size-24 will-change-transform sm:size-28"
          style={{ transform: `scale(${(0.85 + gather * 0.2).toFixed(3)})` }}
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-[28%] bg-brand/40 blur-2xl"
            style={{ opacity: 0.3 + gather * 0.7 }}
          />
          <Image
            src="/logo.png"
            alt="IsoLog app icon"
            width={224}
            height={224}
            className="relative size-full rounded-[28%] shadow-[0_24px_50px_-18px_rgba(229,90,43,0.6)] ring-1 ring-orange-100"
          />
        </div>

        <h2 className="mx-auto mt-10 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
          Start your streak today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-gray-600">
          IsoLog helps you stay on track with consistent medication for
          healthier skin.
        </p>
        <StoreBadges className="mx-auto mt-8 max-w-sm justify-center sm:max-w-none" />
        <p className="mt-4 text-sm text-gray-500">
          Free to download · iOS &amp; Android
        </p>
      </div>

      {/* Rising screens */}
      <div ref={fanRef} className="relative h-[380px] sm:h-[480px]">
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-bottom"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-[#ffd2bb]/70" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          {FAN.map((s, i) => (
            <div
              key={s.src}
              className={`absolute bottom-0 w-[58vw] max-w-[300px] will-change-transform ${i === 1 ? "z-10" : "max-sm:hidden"}`}
              style={{
                transform: `translate(${(s.x * rise).toFixed(1)}%, ${(30 - rise * 30 + (i === 1 ? 0 : 6)).toFixed(1)}%) rotate(${(s.r * rise).toFixed(1)}deg)`,
              }}
            >
              <div className="overflow-hidden rounded-[2rem] border-[7px] border-white bg-white shadow-[0_40px_80px_-30px_rgba(229,90,43,0.6)]">
                <div className={`relative ${s.aspect}`}>
                  <Image src={s.src} alt={s.alt} fill sizes="300px" quality={90} className="object-cover object-top" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
