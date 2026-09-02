import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer account",
  description: "SafePersonalAI customer account and license access.",
  robots: { index: false, follow: false },
};

const futureAccountAreas = [
  {
    title: "Your download",
    body: "Download the latest notarized Mac app and see the version included with your license.",
    icon: "↓",
  },
  {
    title: "License & devices",
    body: "See active Macs, recover your license, and deactivate a device you no longer use.",
    icon: "◇",
  },
  {
    title: "Profile",
    body: "Manage only account essentials: name, email, language, and purchase communication.",
    icon: "○",
  },
  {
    title: "Modules",
    body: "See which modules you own and add another without moving any personal data off your Mac.",
    icon: "+",
  },
];

export default function AccountPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-radial-glow border-b border-border py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-green">Customer account</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
                Your license lives here. Your life does not.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary text-pretty">
                Lemon Squeezy&apos;s hosted order area manages your downloads,
                receipts, and license access. Your emails, calendar, tasks, documents,
                and financial records remain on your Mac and never appear here.
              </p>
            </div>

            <div className="rounded-3xl border border-border-strong bg-bg-card p-7 shadow-[0_36px_90px_-45px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-text">Sign in</p>
                  <p className="mt-1 text-xs text-text-tertiary">Password-free account access</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] text-text-tertiary">
                  Early access
                </span>
              </div>

              <label htmlFor="account-email" className="mt-7 block text-xs font-medium text-text-secondary">
                Purchase email
              </label>
              <input
                id="account-email"
                type="email"
                disabled
                aria-disabled="true"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-border bg-bg-raised px-4 py-3 text-sm text-text placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-60"
              />
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="mt-3 w-full rounded-2xl bg-text px-4 py-3 text-sm font-semibold text-bg disabled:cursor-not-allowed disabled:opacity-45"
              >
                Email me a secure sign-in link
              </button>
              <p className="mt-2 text-center text-[11px] text-text-tertiary">Account sign-in opens when paid downloads are available.</p>

              <div className="mt-5 rounded-2xl border border-border bg-bg-raised p-4">
                <p className="text-xs font-medium text-text">Already purchased?</p>
                <p className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
                  Use the same email address you used at checkout. Lemon
                  Squeezy sends a secure magic link—no SafePersonalAI password
                  database is needed.
                </p>
              </div>

              <a
                href="https://app.lemonsqueezy.com/my-orders"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-2xl bg-text px-4 py-3 text-center text-sm font-semibold text-bg transition hover:opacity-90"
              >
                Open orders &amp; license access ↗
              </a>

              <Link
                href="/downloads/SafePersonalAI-beta.zip"
                download
                className="mt-5 block text-center text-xs font-medium text-green transition hover:brightness-125"
              >
                Download the free beta instead →
              </Link>
              <p className="mt-4 text-center text-[10px] text-text-tertiary"><Link href="/privacy" className="underline-offset-2 hover:underline">Privacy</Link> · <Link href="/terms" className="underline-offset-2 hover:underline">Terms</Link></p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet">Designed around minimum data</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                A small account, on purpose.
              </h2>
              <p className="mt-4 text-text-secondary">
                The portal needs enough information to prove what you bought
                and help you install it—nothing from the assistant itself.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {futureAccountAreas.map((area) => (
                <div key={area.title} className="rounded-2xl border border-border bg-bg-raised p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-border text-sm text-text-secondary">
                    {area.icon}
                  </span>
                  <h3 className="mt-5 text-sm font-semibold text-text">{area.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-tertiary">{area.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              <div className="bg-bg p-7">
                <p className="text-xs font-medium text-green">Stored in your account</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Purchase email, license entitlement, activated-device labels,
                  preferred language, and essential billing references.
                </p>
              </div>
              <div className="bg-bg p-7">
                <p className="text-xs font-medium text-violet">Never stored in your account</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Email content, calendar events, tasks, documents, bank data,
                  portfolio data, AI keys, or your local assistant history.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
