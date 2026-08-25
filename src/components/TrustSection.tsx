import Reveal from "./Reveal";
import TrustCenterPanel from "./TrustCenterPanel";

const points = [
  {
    title: "Your data stays on your Mac",
    body: "Emails, calendar, finances — read and stored locally. Nothing is uploaded to us, because there's no server of ours to upload it to.",
  },
  {
    title: "Bring your own AI key — or none at all",
    body: "Run a free local Ollama model, or connect Anthropic, OpenAI, or Gemini. Whichever you choose, that conversation goes straight to them — we never see it or bill for it.",
  },
  {
    title: "Nothing sent without you",
    body: "Every reply, invite, or payment is a proposal until you click Approve. No exceptions, no “trusted sender” bypass, no silent auto-send mode.",
  },
  {
    title: "Check the Trust Center, any time",
    body: "One page shows exactly what's connected, what it can and can't do, and where your data actually lives — not a promise you have to take on faith.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-violet">Trust</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
              Built for people who don&apos;t trust AI with their inbox.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal delay={80}>
            <div className="grid gap-10 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title}>
                  <h3 className="text-base font-semibold text-text">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="lg:justify-self-end">
            <TrustCenterPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
