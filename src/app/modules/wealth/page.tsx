import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";

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
    />
  );
}
