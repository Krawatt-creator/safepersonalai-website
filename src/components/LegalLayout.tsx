import Link from "next/link";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm text-text-secondary transition hover:text-text">
        ← Back home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-text-tertiary">Last updated {updated}</p>
      <div className="mt-12 space-y-8 text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </div>
  );
}
