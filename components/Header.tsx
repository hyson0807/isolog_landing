"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#progress", label: "Progress" },
  { href: "/#faq", label: "FAQs" },
  { href: "/accutane-tracker", label: "Guide" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-orange-100/80 bg-cream/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:h-16 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <Image
            src="/logo.png"
            alt="IsoLog logo"
            width={36}
            height={36}
            className="h-8 w-8 rounded-lg sm:h-9 sm:w-9"
          />
          <span className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            IsoLog
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#download"
          className="justify-self-end rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-brand active:scale-95 motion-reduce:transform-none sm:px-5"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
