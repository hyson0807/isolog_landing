import Image from "next/image";
import Reveal from "@/components/Reveal";

// Mini in-app illustrations. Each animates in when its card is revealed

function DoseLoggingArt() {
  return (
    <div className="relative h-full">
      <Image
        src="/features/daily-dose-logging.jpg"
        alt="IsoLog calendar screen showing an every-other-day dose schedule"
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        quality={90}
        className="object-cover object-top transition duration-700 group-hover/card:scale-[1.04]"
      />
    </div>
  );
}

function RemindersArt() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 px-6">
      {[
        { t: "Time for tonight's dose 💊", s: "now", d: "delay-150" },
        { t: "Reminder set for 10:00 PM", s: "1h ago", d: "delay-300" },
      ].map((n, i) => (
        <div
          key={n.t}
          className={`flex w-full max-w-72 translate-y-4 items-center gap-3 rounded-2xl bg-white/90 p-3 opacity-0 shadow-sm ring-1 ring-orange-100 transition duration-700 ${n.d} group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100 ${
            i === 1 ? "scale-95" : ""
          }`}
        >
          <Image src="/logo.png" alt="" width={32} height={32} className="size-8 rounded-lg" />
          <div className="min-w-0 flex-1">
            <div className="flex justify-between text-[11px]">
              <span className="font-semibold text-gray-900">IsoLog</span>
              <span className="text-gray-400">{n.s}</span>
            </div>
            <p className="truncate text-sm text-gray-700">{n.t}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CumulativeArt() {
  const bars = [38, 52, 46, 64, 58, 76, 92];
  return (
    <div className="flex h-full flex-col justify-center px-6">
      <p className="text-xs font-medium text-gray-500">Total dosage</p>
      <p className="text-3xl font-semibold tracking-tight text-gray-900">
        22,970 <span className="text-base font-medium text-gray-400">mg</span>
      </p>
      <div className="mt-3 flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%`, transitionDelay: `${150 + i * 70}ms` }}
            className={`flex-1 origin-bottom scale-y-0 rounded-t-md transition-transform duration-700 ease-out group-data-[shown=true]/reveal:scale-y-100 ${
              i === bars.length - 1 ? "bg-brand" : "bg-orange-200"
            }`}
          />
        ))}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-orange-100">
        <div
          className={`h-full w-0 rounded-full bg-gradient-to-r from-brand-light to-brand transition-[width] delay-500 duration-1000 ease-out group-data-[shown=true]/reveal:w-[92%]`}
        />
      </div>
      <p className="mt-1.5 text-right text-[11px] font-semibold text-brand">
        92% of goal
      </p>
    </div>
  );
}

function SkinDiaryArt() {
  const days = [
    { d: "M", n: 6, e: "😣" },
    { d: "T", n: 7, e: "🙂" },
    { d: "W", n: 8, e: "😌", active: true },
    { d: "T", n: 9, e: "✨" },
    { d: "F", n: 10, e: "😊" },
  ];
  return (
    <div className="flex h-full items-center justify-center gap-2 px-5">
      {days.map((day, i) => (
        <div
          key={i}
          style={{ transitionDelay: `${120 + i * 90}ms` }}
          className={`flex h-36 w-12 translate-y-6 flex-col items-center justify-between rounded-full py-3 opacity-0 transition duration-700 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100 ${
            day.active
              ? "bg-brand text-white shadow-lg shadow-brand/30"
              : "bg-white text-gray-700 ring-1 ring-orange-100"
          }`}
        >
          <span className={`text-[11px] ${day.active ? "text-white/80" : "text-gray-400"}`}>
            {day.d}
          </span>
          <span className="text-lg font-semibold">{day.n}</span>
          <span className="text-xl">{day.e}</span>
        </div>
      ))}
    </div>
  );
}

function AlcoholArt() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      <div className="flex items-center justify-between rounded-2xl bg-white p-3 ring-1 ring-orange-100">
        <span className="flex items-center gap-2.5 text-sm text-gray-700">
          <span className="text-lg">🍷</span> Drinking day logged
        </span>
        <span className="text-xs text-gray-400">Sat</span>
      </div>
      <div
        className={`flex translate-x-6 items-start gap-2.5 rounded-2xl bg-brand p-3 text-white opacity-0 shadow-lg shadow-brand/30 transition delay-300 duration-700 group-data-[shown=true]/reveal:translate-x-0 group-data-[shown=true]/reveal:opacity-100`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0" aria-hidden>
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        </svg>
        <p className="text-sm leading-snug">
          Heads up — this dose is close to a drinking day.
        </p>
      </div>
    </div>
  );
}

function TipsArt() {
  const tips = [
    { i: "💧", t: "What is sebum?" },
    { i: "📉", t: "Low-dose long-term method" },
    { i: "⚠️", t: "What to avoid on isotretinoin" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-6">
      {tips.map((tip, i) => (
        <div
          key={tip.t}
          style={{ transitionDelay: `${150 + i * 110}ms` }}
          className={`flex translate-y-3 items-center justify-between rounded-xl bg-white px-3 py-2.5 opacity-0 ring-1 ring-orange-100 transition duration-700 group-data-[shown=true]/reveal:translate-y-0 group-data-[shown=true]/reveal:opacity-100`}
        >
          <span className="flex items-center gap-2.5 text-sm text-gray-700">
            <span>{tip.i}</span>
            {tip.t}
          </span>
          <span className="text-gray-300">›</span>
        </div>
      ))}
    </div>
  );
}

const FEATURES = [
  {
    title: "Daily dose logging",
    description:
      "Set your dose once, then check in with one tap. Build a clean history for a months-long course.",
    art: <DoseLoggingArt />,
  },
  {
    title: "Smart reminders",
    description:
      "A nudge at the time that fits your routine — alternate-day schedules included.",
    art: <RemindersArt />,
  },
  {
    title: "Cumulative dose tracking",
    description:
      "Watch your total intake add up, with progress toward your treatment goal in one place.",
    art: <CumulativeArt />,
  },
  {
    title: "Skin condition diary",
    description:
      "Log dryness, breakouts, and hydration each day to see how your skin responds over time.",
    art: <SkinDiaryArt />,
  },
  {
    title: "Alcohol log & warnings",
    description:
      "Record drinking days and get a warning when you try to dose too close to them.",
    art: <AlcoholArt />,
  },
  {
    title: "Tips & articles",
    description:
      "Practical tips and posts about isotretinoin, all in one place inside the app.",
    art: <TipsArt />,
  },
];

export default function Bento() {
  return (
    <section id="features" className="scroll-mt-20 bg-cream pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-center text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            Everything your isotretinoin course needs
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110}>
              <article className="group/card h-full rounded-[1.75rem] border border-orange-100 bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(229,90,43,0.35)]">
                <div className="relative h-56 overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-brand-tint to-[#ffe9dd]">
                  {f.art}
                </div>
                <div className="px-3.5 pb-4 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {f.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
