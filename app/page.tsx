import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroPinned from "@/components/landing/HeroPinned";
import Promise from "@/components/landing/Promise";
import Bento from "@/components/landing/Bento";
import Spotlight from "@/components/landing/Spotlight";
import FinalCta from "@/components/landing/FinalCta";
import FloatingDownload from "@/components/landing/FloatingDownload";
import {
  APP_STORE_URL,
  DEVELOPER_URL,
  PLAY_STORE_URL,
  SITE_URL,
} from "@/lib/constants";

// Title, description, and openGraph intentionally fall through to the root
// layout's defaults — only the canonical is page-specific.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
      alternateName: "Iso Log",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [APP_STORE_URL, PLAY_STORE_URL, DEVELOPER_URL],
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "IsoLog",
      // Matches the App Store / Play Store listing name.
      alternateName: "Accutane Tracking - IsoLog",
      operatingSystem: "iOS, Android",
      applicationCategory: "HealthApplication",
      description:
        "Isotretinoin (Accutane) tracker for acne treatment. Log daily doses, get reminders, track your cumulative dose, and keep a skin diary.",
      url: SITE_URL,
      installUrl: APP_STORE_URL,
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "IsoLog",
      alternateName: "Iso Log",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@id": `${SITE_URL}/#app` },
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

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-2xl px-5">
        <Reveal>
          <h2 className="text-balance text-center text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3 md:mt-16">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 80}>
              <details className="group rounded-2xl border border-orange-100 bg-white px-5 py-4 transition-shadow duration-300 open:shadow-[0_18px_40px_-24px_rgba(229,90,43,0.4)] hover:border-orange-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-4" aria-hidden>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 animate-fade-in leading-relaxed text-gray-600">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          General information only, not medical advice. Always consult your
          dermatologist.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroPinned />
        <Promise />
        <Bento />
        <Spotlight />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingDownload />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
    </>
  );
}
