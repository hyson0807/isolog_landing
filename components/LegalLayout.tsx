import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-tint/50">
        <div className="mx-auto max-w-3xl px-5 py-12 lg:py-16">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
          <article className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm sm:p-10 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-600 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-gray-600 [&_strong]:text-gray-800 [&_a]:text-brand [&_a]:underline-offset-2 hover:[&_a]:underline">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
