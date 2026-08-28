import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import WealthPreviewPanel from "@/components/WealthPreviewPanel";
import PortfolioPreviewPanel from "@/components/PortfolioPreviewPanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wealth",
  description:
    "A finance dashboard that forecasts your cash flow instead of just tallying it, with statements filed and reconciled automatically.",
};

export default function WealthPage() {
  return (
    <ModulePageShell
      accent="green"
      name="Wealth"
      tagline="A finance dashboard that forecasts, not just tallies."
      intro="Most finance apps tell you what already happened. This one also tells you what's about to — a cash-flow forecast, guardrail warnings before a threshold breaks, and every euro reconciled, not just categorized."
      priceLabel="Add-on"
      priceNote="one-time unlock, price TBD"
      ctaLabel="Notify me"
      ctaHref="/#pricing"
      waitlistModule="wealth"
      steps={[
        {
          title: "It reads your statements",
          body: "Bank and invoice PDFs, read and filed into the right Drive folder automatically — no attachment-hunting required.",
        },
        {
          title: "It forecasts forward",
          body: "Your cash flow, projected months ahead — not just a running total of what already happened.",
        },
        {
          title: "You get warned early",
          body: "A guardrail alert before a threshold actually breaks, giving you time to act instead of just reacting.",
        },
      ]}
      features={[
        {
          title: "Statements filed themselves",
          body: "Bank and invoice PDFs are read, categorized, and filed into the right Drive folder automatically — no more scanning your inbox for attachments.",
        },
        {
          title: "A forecast, not just a balance",
          body: "Projects your cash flow forward and flags a guardrail breach before it happens, not after you've already noticed the account running low.",
        },
        {
          title: "Your actual portfolio, imported",
          body: "Pulls in your broker's export so your real holdings and transaction history show up alongside everything else — one place, not three tabs.",
        },
        {
          title: "Every euro reconciled",
          body: "A full reconciliation view — nothing mystery, nothing double-counted, nothing quietly missing.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">What it watches</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              A forecast that warns you before the month goes wrong.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              It projects your balance forward, not just backward — so a
              guardrail breach shows up as a warning in February, not a
              surprise when February actually arrives.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <WealthPreviewPanel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">What it imports</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              Your real holdings, in the same place as everything else.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Pulled straight from your broker&apos;s own export — no separate
              app to check, no manually re-typing what you already own.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <PortfolioPreviewPanel />
          </Reveal>
        </div>
      </section>
    </ModulePageShell>
  );
}
