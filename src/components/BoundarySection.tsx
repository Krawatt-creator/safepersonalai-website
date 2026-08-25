const steps = [
  {
    n: "01",
    title: "AI understands",
    body: "It reads what actually arrived — an email, an iMessage, a photographed invoice, a bank notification — and works out what it means, in whatever language it came in.",
    accent: "green" as const,
  },
  {
    n: "02",
    title: "You approve",
    body: "Every proposed action lands in one place before anything happens. Reply, or don't. File it, snooze it, correct it in your own words. Nothing is assumed.",
    accent: "violet" as const,
  },
  {
    n: "03",
    title: "Software acts",
    body: "Only after your say-so does anything actually happen — a draft becomes a sent reply, an event lands on your calendar, a document lands in the right folder.",
    accent: "green" as const,
  },
];

export default function BoundarySection() {
  return (
    <section id="boundary" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">The boundary</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            A hard line between thinking and doing.
          </h2>
          <p className="mt-4 text-text-secondary text-pretty">
            Most AI tools blur understanding and action into one step. We
            don&apos;t. Everything SafePersonalAI works out is a proposal —
            never an action — until you cross the line yourself.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-bg p-8">
              <span
                className={`font-mono text-sm ${
                  s.accent === "green" ? "text-green" : "text-violet"
                }`}
              >
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-text">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
