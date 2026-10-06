import Link from "next/link";
import Reveal from "./Reveal";
import {
  DOWNLOAD_NOTE,
  DOWNLOAD_URL,
  PRICE_NOTE,
  PRICES,
  TRIAL_DAYS,
} from "@/lib/offer";

type Module = {
  key: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  accent: "green" | "violet";
  featured?: boolean;
};

// One offer for every module: the download is free in the beta and opens all
// three for the trial; the price shown is the one-time price afterwards.
// The numbers come from src/lib/offer.ts. Buying is not open yet.
const modules: Module[] = [
  {
    key: "operational",
    name: "Base",
    tagline: "Operational foundation: inbox, calendar, iMessage, and to-dos.",
    price: `€${PRICES.base}`,
    features: [
      "Inbox understanding with approval-ready tasks",
      "Calendar events from email, with no attendee invitations",
      "To-dos with deadline reminders",
      "One Pending Actions queue — approve, snooze, or correct anything",
      "Runs on your Mac with local Ollama or your own cloud-provider key",
    ],
    accent: "green",
  },
  {
    key: "travel",
    name: "Travel",
    tagline: "Flight price tracking that never overspends its own budget.",
    price: `€${PRICES.travel}`,
    features: [
      "Daily quota-guarded fare tracking, per route",
      "Deal alerts only when a price actually clears your threshold",
      "Flexible-date and open-jaw search",
      "Calendar-aware — cross-checked against your free weekends",
    ],
    accent: "violet",
  },
  {
    key: "wealth",
    name: "Wealth",
    tagline: "Your money, read from any bank's statement. No bank login.",
    price: `€${PRICES.wealth}`,
    features: [
      "Any bank's statement: CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
      "Spending by category, for any period",
      "Forecast of the next 1–3 months, with a below-zero warning",
      "Budgets, subscriptions found, unusual charges marked",
      "Investments and loans, with a Trade Republic import",
    ],
    accent: "green",
    featured: true,
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
              One install. Free for {TRIAL_DAYS} days. Then pay once.
            </h2>
            <p className="mt-4 text-text-secondary text-pretty">
              Download the beta and every module is open for {TRIAL_DAYS} days,
              free. After that each module is a one-time purchase — the Mac
              app has no subscription. A module you do not buy closes; its
              data stays on your Mac and comes back when you add it. Buying
              opens soon, and nothing is charged today.
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
        <p className="mt-8 max-w-3xl text-sm text-text-secondary">
          All three together:{" "}
          <span className="font-semibold text-text">
            €{PRICES.bundleBeta} one time while the beta runs
          </span>
          , instead of €{PRICES.bundle} afterwards. Buying opens soon — until
          then there is nothing to pay.
        </p>
        <p className="mt-3 max-w-3xl text-xs text-text-tertiary">{DOWNLOAD_NOTE}</p>
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
        <span className="text-xs text-text-tertiary">{PRICE_NOTE}</span>
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

      <div className="mt-8">
        <a
          href={DOWNLOAD_URL}
          download
          className={`w-full ${m.key === "operational" ? "site-cta-primary" : "site-cta-secondary"}`}
        >
          Download beta
        </a>
        <p className="mt-2 text-center text-[11px] text-text-tertiary">
          Included in the {TRIAL_DAYS}-day trial
        </p>
      </div>
    </div>
  );
}
