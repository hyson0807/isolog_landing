import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import Reveal from "@/components/Reveal";

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
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
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
        <path d="M8 22h8" />
        <path d="M7 10h10" />
        <path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </svg>
    ),
  },
];

const AUDIENCE_CHIPS = [
  "Months-long courses",
  "Cumulative dose goals",
  "One-tap daily check-ins",
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
    <div className="h-full rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
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
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-tint to-orange-100/70">
          <Image
            src="/hero-ultrawide.png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hidden object-contain object-right-bottom xl:block xl:[mask-composite:intersect] xl:[mask-image:linear-gradient(to_right,transparent,black_200px),linear-gradient(to_bottom,transparent,black_140px)]"
          />
          <div className="relative mx-auto max-w-6xl px-5 pt-14 xl:py-24">
            <div className="text-center xl:max-w-xl xl:text-left">
              <p className="mb-4 inline-block rounded-full bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-brand/20">
                For isotretinoin & Accutane users
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Stay on track with your{" "}
                <span className="text-brand">isotretinoin</span> journey
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600 xl:mx-0">
                Log every dose, get reminded before you forget, and watch your
                progress add up. IsoLog keeps your whole course in one place —
                so consistency takes care of itself.
              </p>
              <StoreBadges className="mt-8 justify-center xl:justify-start" />
              <p className="mt-4 text-sm text-gray-500">
                Free to download · iOS & Android
              </p>
            </div>
            <Image
              src="/hero.png"
              alt="IsoLog app screens showing dose check-in, reminders, and cumulative dose tracking"
              width={1672}
              height={941}
              priority
              quality={90}
              className="-mx-5 mt-10 w-[calc(100%+2.5rem)] max-w-none xl:hidden"
            />
          </div>
        </section>

        {/* Who it's for */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center lg:py-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Made for people on isotretinoin
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              An isotretinoin (Accutane) course only works if you take it
              consistently — for months. IsoLog was built for exactly that: a
              simple daily check-in, reminders that have your back, and a clear
              picture of how far you&apos;ve come.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {AUDIENCE_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-dark ring-1 ring-brand/20"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Core features */}
        <section className="bg-brand-tint/60">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <Reveal>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Never miss a dose
              </h2>
              <p className="mt-3 text-center text-lg text-gray-600">
                The essentials, done right.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 120}>
                  <FeatureCard {...f} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* More features */}
        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              More than a pill tracker
            </h2>
            <p className="mt-3 text-center text-lg text-gray-600">
              Everything around your course, covered too.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="bg-brand-dark">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center lg:py-20">
            <Reveal className="flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start your streak today
              </h2>
              <p className="max-w-xl text-xl font-medium text-white">
                IsoLog helps you stay on track with consistent medication for
                healthier skin.
              </p>
              <StoreBadges className="justify-center" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
