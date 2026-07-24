import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RedditPixel from "@/components/RedditPixel";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
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
  alternates: {
    canonical: "/",
  },
  itunes: {
    appId: "6756465278",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "IsoLog",
    locale: "en_US",
    title: "IsoLog — Isotretinoin & Accutane Tracker for Acne Treatment",
    description:
      "Dose tracking, smart reminders, cumulative dose, skin diary, and alcohol warnings. Built for people taking isotretinoin for acne.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IsoLog — Never miss a dose of your isotretinoin course" }],
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <RedditPixel />
      </body>
    </html>
  );
}
