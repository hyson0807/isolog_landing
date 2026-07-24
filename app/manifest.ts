import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IsoLog — Isotretinoin & Accutane Tracker",
    short_name: "IsoLog",
    description:
      "Isotretinoin (Accutane) tracker for acne treatment. Log daily doses, get reminders, track your cumulative dose, and keep a skin diary.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF6B35",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
