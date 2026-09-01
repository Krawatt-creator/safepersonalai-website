import Reveal from "./Reveal";
import TrustCenterPanel from "./TrustCenterPanel";

const points = [
  {
    title: "Your data stays on your Mac",
    body: "The local action store, tasks, settings, and module data remain on your Mac. Content sent to a cloud AI provider goes directly under the provider account you chose; SafePersonalAI does not receive it.",
  },
  {
    title: "Choose local or bring your own key",
    body: "Ollama can run entirely on your Mac with no account or API key. Cloud options use your own provider account and key; SafePersonalAI stores that credential locally and sends requests directly to the provider you chose, never through a SafePersonalAI server.",
  },
  {
    title: "Dangerous capabilities are absent",
    body: "The commercial runtime cannot send email, invite attendees, click links, cancel services, or move money. Approval does not unlock a hidden path to those actions.",
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
