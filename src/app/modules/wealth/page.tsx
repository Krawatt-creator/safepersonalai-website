import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import WealthPreviewPanel from "@/components/WealthPreviewPanel";
import PortfolioPreviewPanel from "@/components/PortfolioPreviewPanel";
import Reveal from "@/components/Reveal";
import { DOWNLOAD_URL, PRICE_NOTE, PRICES } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Wealth — any bank's statement on your Mac, no bank login",
  alternates: { canonical: "/modules/wealth" },
  description:
    "Read any bank's statement on your Mac — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — without logging in to your bank. Spending by category, a forecast of the coming months, budgets and your investments.",
};

// Every claim here follows product_features/FEATURES.md, section 4 (Wealth).
// Features the catalog marks as not yet proven on a real mailbox (statements
// and bank alerts from email, Apple Pay) are named once, as such, further down.
export default function WealthPage() {
  return (
    <ModulePageShell
      accent="green"
      name="Wealth"
      tagline="Your money, read from any bank's statement. No bank login."
      intro="Wealth reads the statement your bank already gives you — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — works out the columns itself, and shows you what it read before anything is added. From there you get spending by category, a forecast of the coming months, budgets and your investments, all kept on your Mac."
      priceLabel={`€${PRICES.wealth}`}
      priceNote={PRICE_NOTE}
      ctaLabel="Download beta"
      ctaHref={DOWNLOAD_URL}
      steps={[
        {
          title: "Give it a statement",
          body: "Choose a file on the Wealth page, or text it to yourself by iMessage. Any bank, any period — a whole year of history works. A screenshot of your banking app works too.",
        },
        {
          title: "Check what it read",
          body: "You see the transactions, the account they belong to and every assumption it made, before you click Import. Nothing is added without you.",
        },
        {
          title: "See where it goes and what is coming",
          body: "Spending by category for any period, the regular payments it learned from your history, and the expected balance for the next one to three months.",
        },
      ]}
      features={[
        {
          title: "Any bank, any format",
          body: "CSV, Excel, PDF, MT940, CAMT.053, OFX and QIF. No templates and no column mapping: it works out columns, dates, signs and currency itself. Tested on real İş Bankası PDF statements. A PDF must contain text; a scanned image is refused with a clear message.",
        },
        {
          title: "Screenshots, read on your Mac",
          body: "A screenshot of your banking or card app is read on your Mac with Apple's own text recognition and never uploaded. Transactions go to the review list; a balance waits for you to apply it to an account.",
        },
        {
          title: "Spending you can read",
          body: "Automatic categories, a chart by category, and money in and out month by month — for one month, the last 3, 6 or 12, or a whole year. Change a merchant's category once and it sticks.",
        },
        {
          title: "A forecast from your own history",
          body: "It learns what comes back every month — rent, loans, insurance, subscriptions, salary — and lists the next one, two or three months with the account balance after each payment. It warns when an account is expected to go below zero, and you can add payments you are planning.",
        },
        {
          title: "Budgets",
          body: "A monthly limit per category, with one message at 80% and one at 100% — not a reminder every day.",
        },
        {
          title: "Subscriptions and unusual charges",
          body: "The same merchant and amount every month is listed as a subscription. The same charge twice on one day, or one far above that merchant's usual amount, is marked as worth a look.",
        },
        {
          title: "Investments on their own page",
          body: "Shares, ETFs, gold and crypto: what they are worth today, what you put in, and the gain or loss. Trade Republic's transaction export is read directly; prices are updated where possible.",
        },
        {
          title: "Loans, worked out",
          body: "Enter any three of amount, rate, term and monthly payment and the fourth is calculated. You see the remaining balance, the payoff month and the total cost.",
        },
        {
          title: "Every account in one balance",
          body: "Checking, savings, card and investment accounts together, shown in any of 15 currencies. Each amount keeps its own currency; the conversion uses the daily ECB rates.",
        },
        {
          title: "Tax hints for Germany",
          body: "Once you choose your country, transactions that may matter for your tax return get a short hint, and one click exports the year for your tax advisor. Hints only — never tax advice.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">What it reads</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              The statement your bank already gives you.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Wealth never connects to your bank and never asks for your
              banking password. You give it a statement file or a screenshot;
              it reads it on your Mac, puts it on the right account, and waits
              for you to click Import.
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
            <p className="text-sm font-medium text-green">Investments</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              What you hold, and what it is worth today.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Enter your shares, ETFs, gold or crypto yourself, or import
              Trade Republic&apos;s transaction export and let it work out the
              shares and average cost. A holding with no current price counts
              at what you paid — never at a made-up value.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <PortfolioPreviewPanel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold text-text">
              In the beta, still being proven
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Three things are built and can be switched on, but have not yet
              run long enough on real mailboxes for us to promise them:
              statements picked up from your bank&apos;s emails, bank alert
              emails that update an account, and Apple Pay spending through a
              one-time iPhone Shortcut. Treat them as extras. Importing a
              statement yourself does not depend on any of them.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text">
              What Wealth does not do
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              It does not log in to your bank, pay anything or move money. It
              does not read scanned, image-only PDFs — a screenshot works
              instead. It does not give tax advice; your advisor decides. And
              it runs on your Mac, so your figures are not stored on a server
              of ours.
            </p>
          </div>
        </div>
      </section>
    </ModulePageShell>
  );
}
