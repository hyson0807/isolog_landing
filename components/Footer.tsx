import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-orange-200/70 bg-[linear-gradient(180deg,#fff0e8_0%,#fff7f2_100%)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="IsoLog logo"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-sm text-gray-600">
            © {new Date().getFullYear()} IsoLog. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
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
    </footer>
  );
}
