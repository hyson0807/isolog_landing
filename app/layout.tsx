import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import RedditPixel from "@/components/RedditPixel";
import { SITE_URL } from "@/lib/constants";
import { OG_BASE } from "@/lib/seo";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IsoLog — Isotretinoin & Accutane Tracker for Acne Treatment",
    template: "%s | IsoLog",
  },
  description:
    "Isotretinoin (Accutane) tracker for acne treatment. Log daily doses, get reminders, track your cumulative dose, and keep a skin diary — on iOS & Android.",
  applicationName: "IsoLog",
  // No `alternates.canonical` here on purpose: it would be inherited by every
  // page, so any page that forgot to override it would self-canonicalize to the
  // homepage and drop out of the index. Each page declares its own.
  itunes: {
    appId: "6756465278",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    ...OG_BASE,
    type: "website",
    url: SITE_URL,
    title: "IsoLog — Isotretinoin & Accutane Tracker for Acne Treatment",
    description:
      "Dose tracking, smart reminders, cumulative dose, skin diary, and alcohol warnings. Built for people taking isotretinoin for acne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoLog — Isotretinoin & Accutane Tracker for Acne Treatment",
    description:
      "Dose tracking, smart reminders, cumulative dose, skin diary, and alcohol warnings. Built for people taking isotretinoin for acne.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <RedditPixel />
      </body>
    </html>
  );
}
