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
    default: "IsoLog — Isotretinoin & Accutane Tracker",
    template: "%s | IsoLog",
  },
  description:
    "Track your isotretinoin doses, get reminders so you never miss a day, and log your skin journey. IsoLog helps you stay consistent through your Accutane course.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "IsoLog",
    title: "IsoLog — Isotretinoin & Accutane Tracker",
    description:
      "Dose tracking, smart reminders, skin diary, and alcohol warnings — built for people on isotretinoin.",
    images: [{ url: "/hero.png", width: 1672, height: 941, alt: "IsoLog app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoLog — Isotretinoin & Accutane Tracker",
    description:
      "Dose tracking, smart reminders, skin diary, and alcohol warnings — built for people on isotretinoin.",
    images: ["/hero.png"],
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
