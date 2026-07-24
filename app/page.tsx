import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import Reveal from "@/components/Reveal";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from "@/lib/constants";

const FEATURE_STORIES = [
  {
    title: "Daily dose logging",
    description:
      "Check in each dose from the home screen and keep a clear record of what you actually took.",
    points: [
      "Set your dose once, then log it with one tap.",
      "See dose, schedule, reminder, and skin status together.",
      "Build a clean history for a months-long course.",
    ],
    imageSrc: "/features/daily-dose-logging.jpg",
    imageAlt:
      "IsoLog calendar screen showing the June 2026 every-other-day dose schedule",
    imagePosition: "center top",
  },
  {
    title: "Smart reminders",
    description:
      "IsoLog keeps your dose time visible and sends a nudge before a busy day turns into a missed day.",
    points: [
      "Choose a reminder time that matches your routine.",
      "Keep alternate-day schedules easy to follow.",
      "Use notifications as a quiet backup, not mental clutter.",
    ],
    imageSrc: "/features/reminder-sheet.jpg",
    imageAlt:
      "IsoLog reminder sheet set to send medication reminders at 10:00 PM",
    imagePosition: "center top",
  },
  {
    title: "Cumulative dose tracking",
    description:
      "Watch your total intake add up over time, with progress toward your treatment goal in one place.",
    points: [
      "Track total dosage, pills, and goal progress.",
      "Review trends across longer treatment windows.",
      "Understand where you are without digging through notes.",
    ],
    imageSrc: "/features/dose-tracking.jpg",
    imageAlt:
      "IsoLog cumulative dose tracking screen with total dosage and treatment summary",
    imagePosition: "center 2%",
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

const FAQ_ITEMS = [
  {
    question:
      "Does IsoLog work with Accutane, Roaccutane, Isotinon, and other brands?",
    answer:
      "Yes. Accutane, Roaccutane, Isotinon, Claravis, and Absorica are all brand names for the same active ingredient: isotretinoin. IsoLog tracks any isotretinoin course regardless of the brand or generic you take — just set your dose per pill and start logging.",
  },
  {
    question: "Why is isotretinoin prescribed for acne and oily skin?",
    answer:
      "Isotretinoin shrinks the skin's sebaceous glands and reduces sebum (oil) production, which is why dermatologists prescribe it for severe or stubborn acne that hasn't responded to other acne medication. Less oil means fewer clogged pores and breakouts. IsoLog's skin diary helps you see how dryness and oiliness change over your course.",
  },
  {
    question: "What is a cumulative dose in isotretinoin treatment?",
    answer:
      "Your cumulative dose is the total amount of isotretinoin you take over your whole course, usually measured in milligrams. Dermatologists often set a target based on body weight, so keeping track of the running total matters. IsoLog adds up every dose you log automatically, so you always know where you stand. Ask your dermatologist what target is right for you.",
  },
  {
    question: "Can I drink alcohol while taking isotretinoin?",
    answer:
      "Isotretinoin is processed by the liver, and so is alcohol. That's why many dermatologists recommend limiting or avoiding drinking during treatment and monitor it with blood tests. Always follow your doctor's guidance. If you do drink, IsoLog lets you log drinking days and warns you when they fall close to a dose.",
  },
  {
    question: "What should I do if I miss a dose of isotretinoin?",
    answer:
      "In general, don't take a double dose to catch up. Take your next scheduled dose as usual, and ask your healthcare provider if you're unsure. The best fix is prevention: IsoLog's reminders and one-tap daily check-ins make missed doses much less likely.",
  },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "IsoLog",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
    },
    {
      "@type": "MobileApplication",
      name: "IsoLog",
      operatingSystem: "iOS, Android",
      applicationCategory: "HealthApplication",
      description:
        "Isotretinoin (Accutane) tracker for acne treatment. Log daily doses, get reminders, track your cumulative dose, and keep a skin diary.",
      url: SITE_URL,
      installUrl: APP_STORE_URL,
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "WebSite",
      name: "IsoLog",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

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
    <div className="h-full rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
      <div className="mb-4 flex size-13 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-brand/10">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="m4.5 10.5 3.3 3.3 7.7-8.1" />
    </svg>
  );
}

function FeatureStory({
  story,
  index,
}: {
  story: (typeof FEATURE_STORIES)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <div
        className={`grid items-center gap-8 border-orange-100 lg:grid-cols-2 lg:gap-14 ${
          index === 0 ? "" : "border-t pt-16 lg:pt-24"
        }`}
      >
        <div className={`max-lg:order-2 ${reversed ? "lg:order-2" : ""}`}>
          <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md shadow-brand/5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={story.imageSrc}
                alt={story.imageAlt}
                fill
                sizes="(min-width: 1024px) 528px, calc(100vw - 40px)"
                quality={90}
                className="object-cover"
                style={{ objectPosition: story.imagePosition }}
              />
            </div>
          </div>
        </div>
        <div className={`contents lg:block ${reversed ? "lg:order-1" : ""}`}>
          <div className="max-lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {story.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {story.description}
            </p>
          </div>
          <ul className="mt-7 space-y-3 max-lg:order-3 max-lg:mt-0">
            {story.points.map((point) => (
              <li key={point} className="flex gap-3 text-gray-700">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon />
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
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
            sizes="(min-width: 1280px) 100vw, 1px"
            quality={90}
            className="hidden object-contain object-right-bottom xl:block xl:[mask-composite:intersect] xl:[mask-image:linear-gradient(to_right,transparent,black_200px),linear-gradient(to_bottom,transparent,black_140px)]"
          />
          <div className="relative mx-auto max-w-6xl px-5 pt-14 xl:py-24">
            <div className="text-center xl:max-w-xl xl:text-left">
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                Stay on track with your isotretinoin journey
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600 xl:mx-0">
                Log every dose, get reminded before you forget, and watch
                your progress add up.
              </p>
              <StoreBadges className="mt-8 justify-center xl:justify-start" />
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Made for people on isotretinoin
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-sm:text-balance">
              Isotretinoin (Accutane) is a powerful acne treatment — if you
              take it consistently, for months.{" "}
              <br className="sm:hidden" />
              IsoLog makes that easy: one-tap check-ins, reminders, and a
              clear view of your progress.
            </p>
          </Reveal>
        </section>

        {/* Core features */}
        <section className="bg-brand-tint/60">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <div className="space-y-16 lg:space-y-24">
              {FEATURE_STORIES.map((story, index) => (
                <FeatureStory key={story.title} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* More features */}
        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              More than a pill tracker
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {MORE_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-tint/60">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
            <Reveal>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
            </Reveal>
            <div className="mt-12 space-y-4 lg:mt-16">
              {FAQ_ITEMS.map((item, i) => (
                <Reveal key={item.question} delay={i * 120}>
                  <details className="group rounded-2xl border border-orange-100 bg-white px-6 py-5 shadow-sm open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180"
                        aria-hidden
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="mt-3 leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              General information only, not medical advice. Always consult
              your dermatologist.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="download"
          className="relative overflow-hidden bg-[#fff0e8] px-5 py-16 text-center lg:py-24"
        >
          <Image
            src="/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover opacity-35 mix-blend-multiply"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,245,240,0.96)_0%,rgba(255,214,199,0.92)_48%,rgba(255,133,92,0.82)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-orange-200/70"
          />
          <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Start your streak today
            </h2>
            <p className="max-w-xl text-xl font-medium text-gray-700">
              IsoLog helps you stay on track with consistent medication for
              healthier skin.
            </p>
            <StoreBadges className="justify-center" />
            <p className="text-sm text-gray-600">
              Free to download · iOS & Android
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
    </>
  );
}
