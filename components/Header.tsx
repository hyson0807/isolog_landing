import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="IsoLog logo"
            width={36}
            height={36}
            className="h-8 w-8 rounded-lg sm:h-9 sm:w-9"
          />
          <span className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            IsoLog
          </span>
        </Link>
        <Link
          href="/#download"
          className="rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-brand-dark active:scale-95 motion-reduce:transform-none sm:px-5"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
