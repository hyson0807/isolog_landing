import type { Metadata } from "next";

// Next merges `metadata` shallowly: a page that sets `openGraph` REPLACES the
// layout's whole object rather than merging into it. So any page with its own
// openGraph must re-supply these shared fields or it silently loses them.
export const OG_BASE = {
  siteName: "IsoLog",
  locale: "en_US",
  images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "IsoLog — Never miss a dose of your isotretinoin course",
    },
  ],
} satisfies Metadata["openGraph"];
