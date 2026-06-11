import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="IsoLog logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            IsoLog
          </span>
        </Link>
        <Link
          href="/#download"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-brand-dark active:scale-95 motion-reduce:transform-none"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
