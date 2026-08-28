import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-text-tertiary sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          <span>SafePersonalAI</span>
        </div>
        <p className="order-last text-center sm:order-none">
          Understands, proposes, waits for you. Every time.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/account" className="transition hover:text-text-secondary">
            Account
          </Link>
          <Link href="/privacy" className="transition hover:text-text-secondary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-text-secondary">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
