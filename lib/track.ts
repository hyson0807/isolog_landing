declare global {
  interface Window {
    rdt?: (...args: unknown[]) => void;
  }
}

// Fires a Reddit Ads conversion event when a store badge is clicked.
// No-op when the pixel is not installed (REDDIT_PIXEL_ID empty).
export function trackDownloadClick(platform: "ios" | "android") {
  if (typeof window !== "undefined" && typeof window.rdt === "function") {
    window.rdt("track", "Custom", {
      customEventName: "Download",
      platform,
    });
  }
}
