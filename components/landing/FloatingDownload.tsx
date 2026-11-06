"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { trackDownloadClick } from "@/lib/track";

// Desktop-only download card pinned to the bottom-right corner. Hidden at the
// very top (the hero already shows the badges) and once the final CTA is on
// screen; collapsible into a small tab.
export default function FloatingDownload() {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("download");
    let ctaInView = false;
    const io = cta
      ? new IntersectionObserver(([e]) => {
          ctaInView = e.isIntersecting;
          update();
        })
      : null;
    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.6 && !ctaInView);
    }
    if (cta && io) io.observe(cta);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <aside
      aria-label="Download IsoLog"
      className={`fixed bottom-6 right-0 z-40 hidden transition-all duration-500 ease-out lg:block ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center gap-4 rounded-l-3xl border border-r-0 border-orange-100 bg-white/90 py-4 pl-4 pr-5 shadow-[0_24px_60px_-20px_rgba(229,90,43,0.45)] backdrop-blur-xl transition-transform duration-500 ${
          collapsed ? "translate-x-[calc(100%-2.75rem)]" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand download card" : "Collapse download card"}
          className="flex size-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-brand-tint hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-4 transition-transform ${collapsed ? "rotate-180" : ""}`} aria-hidden>
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
        <Image src="/logo.png" alt="" width={52} height={52} className="size-13 rounded-2xl" />
        <div>
          <p className="font-semibold text-gray-900">Get IsoLog</p>
          <p className="text-xs text-gray-500">Free on iOS &amp; Android</p>
          <div className="mt-2 flex gap-1.5">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDownloadClick("ios")}
              className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white transition hover:bg-brand"
            >
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDownloadClick("android")}
              className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white transition hover:bg-brand"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
