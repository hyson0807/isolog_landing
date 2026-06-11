import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-brand-tint">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="IsoLog logo"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} IsoLog. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
            Support
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="transition hover:text-brand">
            Contact
          </a>
          <Link href="/privacy" className="transition hover:text-brand">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-brand">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
