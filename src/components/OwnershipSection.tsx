import Reveal from "./Reveal";
import SubscriptionCounter from "./SubscriptionCounter";

const points = [
  {
    title: "Built for the Apple ecosystem you already own",
    body: "No new hardware, no rented server, no third-party company hosting your life. It runs quietly on your own Mac, using the machine you already have.",
  },
  {
    title: "Your AI provider, your account",
    body: "Connect a supported AI provider with your own key and pay that provider directly for any usage. SafePersonalAI never hides inference cost inside a second subscription or silently falls back to a company-paid model.",
  },
  {
    title: "Designed as software you own",
    body: "The planned offer is a one-time, version-bound license rather than a permanent monthly rental. Final early-access pricing and included modules will be shown before anyone is asked to pay.",
  },
];

export default function OwnershipSection() {
  return (
    <section id="ownership" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-green">Own it, don&apos;t rent it</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Your own private agent. Not another subscription.
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">
            SafePersonalAI turns the Mac already sitting on your desk into a
            private automation layer. Your working data stays local, your AI
            provider relationship stays yours, and the commercial terms stay
            visible before purchase.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal delay={80} className="space-y-8">
            {points.map((p) => (
              <div key={p.title}>
                <h3 className="text-base font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {p.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <SubscriptionCounter />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
