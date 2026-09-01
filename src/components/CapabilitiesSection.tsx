import Link from "next/link";
import Reveal from "./Reveal";
import { topics } from "@/lib/usecases-data";

// The card content (icon/title/friction) lives in usecases-data.ts now, one
// source of truth shared with the /usecases library pages each card links
// to — added 2026-08-27, so a topic never drifts out of sync between the
// teaser shown here and its own detail page.
const capabilities = topics.slice(0, 6);

export default function CapabilitiesSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-green">Everything, one place</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Stop switching between ten apps just to keep your life running.
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">
            Email in one app, banking in another, your calendar in a third,
            a to-do list somewhere else entirely — the constant switching is
            its own kind of exhausting, and things fall through the cracks
            in the gaps between apps. This is the one queue that already
            checked all of them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 5) * 70}>
              <Link
                href={`/usecases/${c.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised p-5 transition duration-300 hover:-translate-y-1 hover:border-border-strong"
              >
                <span className="text-xl leading-none">{c.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-text">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-tertiary">
                  {c.friction}
                </p>
                <span className="mt-3 text-xs font-medium text-green">
                  See examples →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <Link
            href="/usecases"
            className="site-cta-quiet mt-8"
          >
            Explore all 15 use cases →
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-xs text-text-tertiary">
            No invented &ldquo;hours saved per week&rdquo; claim here — there&apos;s no real
            usage data yet to back one up, and a made-up number isn&apos;t worth
            the trust it costs. Judge it against your own inbox instead.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
