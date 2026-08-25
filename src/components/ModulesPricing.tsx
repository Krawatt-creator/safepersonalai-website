import Link from "next/link";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

type Module = {
  key: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  accent: "green" | "violet";
  cta: string;
  featured?: boolean;
  waitlist?: boolean;
};

// PRICE PLACEHOLDER: figures below are not real — Cengiz hasn't set price
// points yet, and the Lemon Squeezy store/products don't exist. Swap
// `price`/`priceNote` once both are decided, and swap the Operational
// `href="#"` for the real Lemon Squeezy checkout/overlay link once that
// exists. Travel/Wealth (`waitlist: true`) use WaitlistForm → POST
// /api/waitlist instead of a link — see functions/api/waitlist.ts.
const modules: Module[] = [
  {
    key: "operational",
    name: "Operational",
    tagline: "Inbox, calendar, iMessage, to-dos — included with every install.",
    price: "Included",
    priceNote: "no card required",
    features: [
      "Inbox triage & drafted replies, in your language",
      "Calendar events from email or text, never auto-invited",
      "To-dos with deadline reminders",
      "One Pending Actions queue — approve, snooze, or correct anything",
      "Runs locally, with your own AI provider key",
    ],
    accent: "green",
    cta: "Get SafePersonalAI",
  },
  {
    key: "travel",
    name: "Travel",
    tagline: "Flight price tracking that never overspends its own budget.",
    price: "Add-on",
    priceNote: "one-time unlock, price TBD",
    features: [
      "Daily quota-guarded fare tracking, per route",
      "Deal alerts only when a price actually clears your threshold",
      "Flexible-date and open-jaw search",
      "Calendar-aware — cross-checked against your free weekends",
    ],
    accent: "violet",
    cta: "Notify me",
    waitlist: true,
  },
  {
    key: "wealth",
    name: "Wealth",
    tagline: "A finance dashboard that forecasts, not just tallies.",
    price: "Add-on",
    priceNote: "one-time unlock, price TBD",
    features: [
      "Automatic statement filing & categorization",
      "Cash-flow forecast with guardrail breach warnings",
      "Portfolio import from your broker's export",
      "Full reconciliation — every euro accounted for",
    ],
    accent: "green",
    cta: "Notify me",
    featured: true,
    waitlist: true,
  },
];

export default function ModulesPricing() {
  return (
    <section id="modules" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div id="pricing" className="max-w-2xl scroll-mt-24">
            <p className="text-sm font-medium text-green">SafePersonalAI v1</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
              One install. Modules you actually need.
            </h2>
            <p className="mt-4 text-text-secondary text-pretty">
              Operational comes included with every install — the same
              inbox, calendar, and to-do automation described on this page,
              working from day one. Travel and Wealth are one-time module
              unlocks on top of the same install whenever you want more:
              your data, settings, and history never move or reset when you
              add one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.key} delay={i * 90}>
              <ModuleCard module={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module: m }: { module: Module }) {
  const dot = m.accent === "green" ? "bg-green" : "bg-violet";
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
        m.featured
          ? "border-border-strong bg-bg-card shadow-[0_30px_80px_-40px_rgba(142,85,234,0.35)] hover:shadow-[0_36px_90px_-36px_rgba(142,85,234,0.45)]"
          : "border-border bg-bg-raised hover:border-border-strong hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <h3 className="text-lg font-semibold text-text">{m.name}</h3>
      </div>
      <p className="mt-2 text-sm text-text-secondary">{m.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-text">{m.price}</span>
        <span className="text-xs text-text-tertiary">{m.priceNote}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {m.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={`/modules/${m.key}`}
        className="mt-6 self-start text-sm font-medium text-text-secondary underline-offset-4 transition hover:text-text hover:underline"
      >
        Learn more →
      </Link>

      {m.waitlist ? (
        <div className="mt-8">
          <WaitlistForm module={m.key} accent={m.accent} />
        </div>
      ) : (
        <a
          href="/#pricing"
          className={`mt-8 rounded-full px-5 py-2.5 text-center text-sm font-medium transition hover:scale-[1.02] active:scale-[0.98] ${
            m.accent === "green"
              ? "bg-green text-[#06110c] hover:brightness-110"
              : "border border-border-strong text-text hover:border-text-tertiary"
          }`}
        >
          {m.cta}
        </a>
      )}
    </div>
  );
}
