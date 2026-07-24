import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import Reveal from "@/components/Reveal";
import { SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accutane Tracker: How to Track Your Isotretinoin Course",
  description:
    "A practical guide to tracking Accutane (isotretinoin) — cumulative dose, daily doses, reminders, side effects, and alcohol. Plus how IsoLog makes it one tap.",
  alternates: { canonical: "/accutane-tracker" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/accutane-tracker`,
    title: "Accutane Tracker: How to Track Your Isotretinoin Course",
    description:
      "How to track an Accutane (isotretinoin) course: cumulative dose, daily doses, reminders, side effects, and alcohol — and how IsoLog makes it one tap.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IsoLog — Accutane tracker" }],
  },
};

const PAGE_URL = `${SITE_URL}/accutane-tracker`;

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
      "@type": "Article",
      headline: "Accutane Tracker: How to Track Your Isotretinoin Course",
      description:
        "A practical guide to tracking Accutane (isotretinoin): cumulative dose, daily doses, reminders, side effects, and alcohol.",
      image: `${SITE_URL}/og.png`,
      mainEntityOfPage: PAGE_URL,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accutane Tracker",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// Shared text styles (no typography plugin — mirror LegalLayout's prose look).
const H2 = "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl";
const P = "mt-4 leading-relaxed text-gray-600";
const UL = "mt-4 space-y-2 pl-5 list-disc marker:text-brand text-gray-600";

export default function AccutaneTrackerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white via-brand-tint to-orange-100/60">
          <div className="mx-auto max-w-3xl px-5 pt-12 pb-14 lg:pt-16 lg:pb-20">
            <nav
              aria-label="Breadcrumb"
              className="text-sm font-medium text-gray-500"
            >
              <Link href="/" className="transition hover:text-brand-dark">
                Home
              </Link>
              <span className="px-1.5" aria-hidden>
                /
              </span>
              <span className="text-gray-700">Accutane Tracker</span>
            </nav>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              The Accutane tracker guide: stay on course from day one
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              An Accutane (isotretinoin) course runs for months, and the
              results depend on taking it consistently. This guide covers what
              an accutane tracker does, why your cumulative dose matters, and
              how to keep doses, reminders, side effects, and alcohol all in one
              place.
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
          <Reveal>
            <h2 className={H2}>What is an Accutane tracker?</h2>
            <p className={P}>
              An accutane tracker is a simple way to record every dose of
              isotretinoin you take over a course that usually lasts several
              months. Because the treatment works gradually and dermatologists
              often aim for a target total dose, a clear day-by-day record helps
              you stay consistent and see how far along you are. &quot;Accutane&quot;
              is the best-known brand name — Roaccutane, Isotinon, Claravis, and
              Absorica are the same active ingredient, isotretinoin — so the
              same tracking approach works no matter which one you take.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className={H2}>Cumulative dose, explained</h2>
            <p className={P}>
              Your cumulative dose is the total amount of isotretinoin you take
              across your whole course, usually measured in milligrams.
              Dermatologists often set a target based on your body weight, so
              the running total is one of the most important numbers to watch. A
              tracker that adds up every logged dose automatically means you
              always know where you stand without doing the math yourself. Your
              own target is a conversation for you and your dermatologist.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className={H2}>Tracking daily doses &amp; reminders</h2>
            <p className={P}>
              The hardest part of a long course is simply not forgetting. A good
              routine looks like this:
            </p>
            <ul className={UL}>
              <li>Set your dose per pill once, then log each dose with one tap.</li>
              <li>
                Turn on a reminder at a time that fits your day, so a busy
                evening doesn&apos;t turn into a missed day.
              </li>
              <li>
                Keep alternate-day or every-few-days schedules easy to follow at
                a glance.
              </li>
              <li>Build a clean history you can review over the whole course.</li>
            </ul>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className={H2}>Logging side effects, skin, and alcohol</h2>
            <p className={P}>
              Isotretinoin shrinks the skin&apos;s sebaceous glands and reduces
              oil production, which is why it&apos;s prescribed for stubborn
              acne. Along the way it&apos;s worth logging how your skin responds
              — dryness, breakouts, and hydration — so you can see the trend
              rather than guessing.
            </p>
            <p className={P}>
              Alcohol is worth tracking too. Isotretinoin is processed by the
              liver, and so is alcohol, which is why many dermatologists
              recommend limiting drinking during treatment and monitor it with
              blood tests. Recording drinking days next to your doses keeps the
              full picture in one place. Always follow your doctor&apos;s
              guidance.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className={H2}>What if I miss a dose?</h2>
            <p className={P}>
              In general, don&apos;t take a double dose to catch up. Take your
              next scheduled dose as usual, and ask your healthcare provider if
              you&apos;re unsure. The best fix is prevention — reminders and
              one-tap check-ins make missed doses much less likely in the first
              place.
            </p>
          </Reveal>
        </article>

        {/* Personal note (E-E-A-T) */}
        <section className="bg-brand-tint/60">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
            <Reveal>
              <h2 className={H2}>
                A personal note: 6+ years on low-dose isotretinoin
              </h2>
              <p className={P}>
                I built IsoLog because I&apos;ve lived this. I&apos;ve been on
                isotretinoin since 2020. Early on, a dermatologist had me taking
                10&nbsp;mg once or twice a day, and my skin improved a lot — but
                every time I stopped, the acne eventually came back. I went
                through that cycle several times.
              </p>
              <p className={P}>
                I tried to stay clear without oral medication, mostly with
                topical adapalene, but it didn&apos;t work for me and I ended up
                with more scarring. So for the last few years I switched to a
                long-term, low-dose approach — my dermatologist now prescribes
                5&nbsp;mg capsules instead of 10&nbsp;mg.
              </p>
              <p className={P}>
                The biggest thing I&apos;ve learned is that you have to find the
                &quot;sweet spot&quot; for your own skin. Roughly how I think
                about it:
              </p>
              <ul className={UL}>
                <li>
                  One capsule every 2 days and skin stays clear? Try stretching
                  to every 3 days.
                </li>
                <li>Still clear? Try every 4 days.</li>
                <li>
                  Acne comes back at every 4 days? Then every 3 days is probably
                  your maintenance rhythm.
                </li>
              </ul>
              <p className={P}>
                After 6+ years, the two side effects I personally notice most
                are slower skin healing — marks and small scratches take longer
                to fade — and more facial redness, since my skin has grown more
                sensitive over time.
              </p>
              <p className="mt-4 rounded-xl border border-orange-200 bg-white/70 px-4 py-3 text-sm leading-relaxed text-gray-600">
                This is my personal experience, not medical advice. Everyone
                responds differently — only adjust your dose together with your
                dermatologist.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Product tie-in + CTA */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center lg:py-20">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className={H2}>How IsoLog helps</h2>
            <p className="max-w-xl leading-relaxed text-gray-600">
              IsoLog turns all of this into a few taps: log each dose, get
              reminded before you forget, watch your cumulative dose add up, and
              keep a skin and alcohol diary — built specifically for people on
              isotretinoin.
            </p>
            <StoreBadges className="justify-center" />
            <p className="text-sm text-gray-500">Free to download · iOS &amp; Android</p>
          </Reveal>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-orange-100 bg-brand-tint/40">
          <p className="mx-auto max-w-3xl px-5 py-8 text-center text-sm leading-relaxed text-gray-500">
            This page is general information only, not medical advice. Always
            consult your dermatologist about your treatment and dose.
          </p>
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
