import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";

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
      priceLabel="Add-on"
      priceNote="one-time unlock, price TBD"
      ctaLabel="Notify me"
      ctaHref="/#pricing"
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
    />
  );
}
