import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";

const CORE_FEATURES = [
  {
    title: "Daily dose logging",
    description:
      "Check in each dose with one tap and build a complete history of your entire course.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z" />
        <path d="m7 6.5 7 7" />
      </svg>
    ),
  },
  {
    title: "Smart reminders",
    description:
      "Get notified at your dose time so a busy day never turns into a missed day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    title: "Cumulative dose tracking",
    description:
      "See your total intake add up and track progress toward your treatment goal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m7 14 4-4 4 3 5-6" />
      </svg>
    ),
  },
];

const MORE_FEATURES = [
  {
    title: "Skin condition diary",
    description:
      "Log dryness, breakouts, and hydration each day to see how your skin responds over time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9.5h.01M15 9.5h.01" />
        <path d="M9 15a3.5 3.5 0 0 0 6 0" />
      </svg>
    ),
  },
  {
    title: "Tips & articles",
    description:
      "Browse practical tips and posts about isotretinoin, all in one place inside the app.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
      </svg>
    ),
  },
  {
    title: "Alcohol log & warnings",
    description:
      "Record drinking days and get a warning when you try to dose too close to them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2 4 5v6c0 5.5 3.8 9.7 8 11 4.2-1.3 8-5.5 8-11V5l-8-3Z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
];

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex size-13 items-center justify-center rounded-xl bg-brand-tint text-brand">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white via-brand-tint to-orange-100/70">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-20">
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-block rounded-full bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-brand/20">
                For isotretinoin & Accutane users
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Stay on track with your{" "}
                <span className="text-brand">isotretinoin</span> journey
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
                Log every dose, get reminded before you forget, and watch your
                progress add up. IsoLog keeps your whole course in one place —
                so consistency takes care of itself.
              </p>
              <StoreBadges className="mt-8 justify-center lg:justify-start" />
              <p className="mt-4 text-sm text-gray-500">
                Free to download · iOS & Android
              </p>
            </div>
            <div className="relative">
              <Image
                src="/hero.png"
                alt="IsoLog app screens showing dose check-in, reminders, and cumulative dose tracking"
                width={1672}
                height={941}
                priority
                className="w-full rounded-2xl shadow-xl ring-1 ring-orange-200/60"
              />
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Made for people on isotretinoin
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            An isotretinoin (Accutane) course only works if you take it
            consistently — for months. IsoLog was built for exactly that: a
            simple daily check-in, reminders that have your back, and a clear
            picture of how far you&apos;ve come.
          </p>
        </section>

        {/* Core features */}
        <section className="bg-brand-tint/60">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Never miss a dose
            </h2>
            <p className="mt-3 text-center text-lg text-gray-600">
              The essentials, done right.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* More features */}
        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            More than a pill tracker
          </h2>
          <p className="mt-3 text-center text-lg text-gray-600">
            Everything around your course, covered too.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="bg-brand">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start your streak today
            </h2>
            <p className="max-w-xl text-lg text-orange-50">
              IsoLog helps you stay on track with consistent medication for
              healthier skin.
            </p>
            <StoreBadges className="justify-center" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
