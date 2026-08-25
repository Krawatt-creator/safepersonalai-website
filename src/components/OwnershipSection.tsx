import Reveal from "./Reveal";
import SubscriptionCounter from "./SubscriptionCounter";

const points = [
  {
    title: "Built for the Apple ecosystem you already own",
    body: "No new hardware, no rented server, no third-party company hosting your life. It runs quietly on your own Mac, using the machine you already have.",
  },
  {
    title: "€0/month is a genuinely real option",
    body: "Run a local Ollama model and there's no account, no key, and no per-message cost — ever. Prefer Gemini instead? Its free tier covers everyday use too. Want Anthropic or OpenAI's models specifically? Connect your own key and pay them directly, at their normal per-use rate — the one combination with no free option, so we don't pretend there is one.",
  },
  {
    title: "Yours the moment you install it",
    body: "Every module is a one-time unlock, not a recurring charge. Buy it once, and it keeps working for as long as you keep your Mac running — no renewal, no lapsed-payment lockout.",
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
            Most AI tools today are a monthly bill that never stops. SafePersonalAI
            turns the Mac already sitting on your desk into a private automation
            layer for your inbox, calendar, and finances — paid for once, not
            leased forever.
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
