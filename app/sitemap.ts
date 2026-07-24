import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Fixed content-change dates so crawlers see a stable <lastmod>.
// Bump these when the corresponding page's content actually changes.
const HOME_UPDATED = new Date("2026-07-24");
const LEGAL_UPDATED = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/delete-account`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
