import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-orange-200/70 bg-[linear-gradient(180deg,#fff0e8_0%,#fff7f2_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex flex-col gap-8 border-b border-orange-200/70 pb-10 md:flex-row md:items-end md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="IsoLog logo"
              width={48}
              height={48}
              className="size-11 rounded-xl sm:size-12"
            />
            <span className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              IsoLog
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
            <Link href="/accutane-tracker" className="transition hover:text-brand-dark">
              Accutane Tracker Guide
            </Link>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="transition hover:text-brand-dark">
              Support
            </a>
            <Link href="/privacy" className="transition hover:text-brand-dark">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-brand-dark">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 space-y-3 text-sm leading-relaxed text-gray-500">
          <p>
            IsoLog is a personal tracking tool. It does not provide medical
            advice, diagnosis, or treatment. Always follow your
            dermatologist&apos;s guidance about your isotretinoin course.
          </p>
          <p>© {new Date().getFullYear()} IsoLog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
