import Image from "next/image";

// Small app-UI "cards" that float around the hero and final CTA. Built in CSS
// so they stay crisp and match the in-app look without extra image assets.

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-orange-100/80 bg-white/95 p-3.5 shadow-[0_18px_40px_-16px_rgba(229,90,43,0.35)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export function CheckInChip() {
  return (
    <Card className="w-52">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500">Dose</span>
        <span className="flex size-5 items-center justify-center rounded-md bg-brand text-white">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.6" className="size-3.5" aria-hidden>
            <path d="m4.5 10.5 3.3 3.3 7.7-8.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-brand">Checked in</p>
      <p className="text-xs text-gray-500">10 mg · 9:58 PM</p>
    </Card>
  );
}

export function StreakChip() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <Card className="w-56">
      <p className="text-xs font-medium text-gray-500">This week</p>
      <div className="mt-2 flex justify-between">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[10px] text-gray-400">{d}</span>
            <span
              className={`size-5 rounded-full ${
                i < 5 ? "bg-brand" : "border border-dashed border-orange-200"
              }`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ReminderChip() {
  return (
    <Card className="w-64">
      <div className="flex items-start gap-3">
        <Image src="/logo.png" alt="" width={36} height={36} className="size-9 rounded-lg" />
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-gray-900">IsoLog</p>
            <p className="text-[10px] text-gray-400">now</p>
          </div>
          <p className="text-sm leading-snug text-gray-700">
            Time for tonight&apos;s dose 💊
          </p>
        </div>
      </div>
    </Card>
  );
}

export function ScheduleChip() {
  return (
    <Card className="w-48">
      <p className="text-xs font-medium text-gray-500">Schedule</p>
      <p className="mt-1 font-semibold text-gray-900">Every other day</p>
      <p className="mt-0.5 text-xs text-gray-500">Reminder · 10:00 PM</p>
    </Card>
  );
}

export function GoalChip() {
  return (
    <Card className="w-60">
      <p className="text-xs font-medium text-gray-500">Cumulative dosage</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
        22,970 <span className="text-sm font-medium text-gray-400">mg</span>
      </p>
      <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
        <span>Goal 25,000 mg</span>
        <span className="font-semibold text-brand">92%</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-orange-100">
        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand-light to-brand" />
      </div>
    </Card>
  );
}

export function SkinChip() {
  return (
    <Card className="w-52">
      <p className="text-xs font-medium text-gray-500">How&apos;s your skin today?</p>
      <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[11px] text-gray-600">
        <span className="rounded-lg bg-brand-tint py-1.5">✨<br />Clear</span>
        <span className="rounded-lg bg-brand py-1.5 text-white">😌<br />Hydrated</span>
        <span className="rounded-lg bg-brand-tint py-1.5">🌵<br />Dry</span>
      </div>
    </Card>
  );
}

export function AlcoholChip() {
  return (
    <Card className="w-60">
      <div className="flex items-start gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-brand-dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
          </svg>
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-900">Heads up</p>
          <p className="text-xs leading-snug text-gray-500">
            You logged a drink yesterday.
          </p>
        </div>
      </div>
    </Card>
  );
}
