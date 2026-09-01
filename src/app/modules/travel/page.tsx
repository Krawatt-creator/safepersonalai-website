import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import TravelPreviewPanel from "@/components/TravelPreviewPanel";
import DealAlertPanel from "@/components/DealAlertPanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Travel",
  description:
    "Flight price tracking that never overspends its own budget, and only tells you about a deal that's actually a deal.",
};

export default function TravelPage() {
  return (
    <ModulePageShell
      accent="violet"
      name="Travel"
      tagline="Flight deals watched for you, never watching your wallet drain."
      intro="Tell it which routes matter and what a good price actually looks like. It checks quietly in the background and only interrupts you when there's a real deal — never as a way to justify its own existence."
      priceLabel="€29"
      priceNote="one-time add-on"
      ctaLabel="Notify me"
      ctaHref="/#pricing"
      waitlistModule="travel"
      steps={[
        {
          title: "Tell it what matters",
          body: "A route, a price threshold, maybe a flexible date range or an open-jaw itinerary.",
        },
        {
          title: "It checks quietly",
          body: "Daily, inside a fixed quota — no runaway costs, no constant refreshing on your end.",
        },
        {
          title: "You hear about a real deal",
          body: "Only when a tracked route actually clears your own threshold — nothing else interrupts you.",
        },
      ]}
      features={[
        {
          title: "Fare tracking that respects a budget",
          body: "Every tracked route checks prices inside a daily quota you set — no runaway API costs, no surprise bill for a feature that's supposed to save you money.",
        },
        {
          title: "Alerts only when it's actually a deal",
          body: "You set the threshold. It only nudges you when a real price genuinely clears it — not every ordinary fluctuation dressed up as urgent.",
        },
        {
          title: "Flexible dates, open-jaw routes",
          body: "Searches across a date range and asymmetric itineraries — fly into one city, home from another — instead of forcing one fixed round-trip.",
        },
        {
          title: "Aware of your actual calendar",
          body: "Cross-checks fare windows against your free weekends, so a great price on days you're not actually free never gets your hopes up for nothing.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-violet">What it watches</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              Every route, checked daily, against your own threshold.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              You decide what counts as a deal. It only interrupts you when a
              tracked route actually clears that number — everything else
              stays quiet in the background.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <TravelPreviewPanel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-violet">What you actually see</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              One notification, only when it&apos;s worth your attention.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Not a dashboard you have to check — a single message when a
              price actually clears your threshold, cross-checked against
              whether you&apos;re even free that weekend.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <DealAlertPanel />
          </Reveal>
        </div>
      </section>
    </ModulePageShell>
  );
}
