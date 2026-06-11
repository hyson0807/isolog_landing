"use client";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { trackDownloadClick } from "@/lib/track";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.34-1.96-3.43-2.23-4.18-2.26-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.49-2.81 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.6zM14.17 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.37 1.74-.74.85-1.39 2.22-1.22 3.53 1.29.1 2.6-.65 3.4-1.61z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <path d="M3.61 1.81c-.36.38-.57.97-.57 1.73v16.92c0 .76.21 1.35.57 1.73l.09.08 9.48-9.48v-.22L3.7 1.72l-.09.09z" />
      <path d="M16.34 15.95l-3.16-3.16v-.22l3.16-3.16.07.04 3.74 2.13c1.07.6 1.07 1.6 0 2.21l-3.74 2.12-.07.04z" opacity=".9" />
      <path d="M16.41 15.91l-3.23-3.23-9.57 9.57c.35.37 .93.42 1.59.05l11.21-6.39z" opacity=".7" />
      <path d="M16.41 8.45L5.2 2.07c-.66-.38-1.24-.33-1.59.04l9.57 9.57 3.23-3.23z" opacity=".8" />
    </svg>
  );
}

type BadgeProps = {
  href: string;
  platform: "ios" | "android";
  topLine: string;
  bottomLine: string;
  icon: React.ReactNode;
};

function Badge({ href, platform, topLine, bottomLine, icon }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDownloadClick(platform)}
      className="flex h-14 w-44 items-center justify-center gap-2.5 rounded-xl bg-gray-900 text-white shadow-sm transition hover:bg-black hover:shadow-md"
    >
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wide text-gray-300">
          {topLine}
        </span>
        <span className="block text-base font-semibold">{bottomLine}</span>
      </span>
    </a>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge
        href={APP_STORE_URL}
        platform="ios"
        topLine="Download on the"
        bottomLine="App Store"
        icon={<AppleIcon />}
      />
      <Badge
        href={PLAY_STORE_URL}
        platform="android"
        topLine="Get it on"
        bottomLine="Google Play"
        icon={<PlayIcon />}
      />
    </div>
  );
}
