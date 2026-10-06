import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import WealthPreviewPanel from "@/components/WealthPreviewPanel";
import PortfolioPreviewPanel from "@/components/PortfolioPreviewPanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wealth",
  alternates: { canonical: "/modules/wealth" },
  description:
    "Loans solved automatically, investments priced for you, and every account combined into one balance — no bank login required.",
};

export default function WealthPage() {
  return (
    <ModulePageShell
      accent="green"
      name="Wealth"
      tagline="Your accounts, loans, and holdings — actually worked out, not just listed."
      intro="Enter what you have and it does real work with it: solve for whatever loan number you're missing, get a best-effort live price on your gold or shares, and see one true balance across every account you've added — no bank connection, no broker integration, just what you tell it."
      priceLabel="€29"
      priceNote="one-time add-on"
      ctaLabel="Notify me"
      ctaHref="/#pricing"
      waitlistModule="wealth"
      steps={[
        {
          title: "Add what you have",
          body: "Bank accounts, loans, and investment holdings — entered once, tracked from then on.",
        },
        {
          title: "It does the math",
          body: "Give a loan any three of principal, rate, term, or payment — it solves the fourth. Gold and shares get a best-effort live price.",
        },
        {
          title: "Import a statement when you want",
          body: "Drop in a CSV, map the columns once, and link it to an account — nothing pulled from your bank without you choosing to.",
        },
      ]}
      features={[
        {
          title: "A real loan solver",
          body: "Missing the interest rate, the term, or the payment? Give it any three and it works out the fourth — not a number you type in once and forget.",
        },
        {
          title: "Investments, priced for you",
          body: "Add what you actually hold — gold, shares, anything — and get a best-effort live price alongside what you paid, refreshed whenever you ask.",
        },
        {
          title: "Statements, on your terms",
          body: "Import a CSV from any bank, map the columns once, and link it to the right account. No credentials shared, no automatic bank connection.",
        },
        {
          title: "One balance for everything",
          body: "Every account you've added, combined into a single wealth balance — no separate app, no manual adding-up.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">What it does</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              A loan calculator that actually solves, not just displays.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Give it any three of principal, rate, term, or monthly payment
              and it works out the fourth — real annuity math, not a number
              you had to already know.
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
              What you actually hold, priced automatically.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Enter your gold, shares, or anything else you hold — or
              import a CSV from any bank or broker — and get a best-effort
              live price alongside what you paid.
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
