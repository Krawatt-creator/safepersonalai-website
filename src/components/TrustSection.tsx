const points = [
  {
    title: "Your data stays on your Mac",
    body: "Emails, calendar, finances — read and stored locally. Nothing is uploaded to us, because there's no server of ours to upload it to.",
  },
  {
    title: "Bring your own AI key",
    body: "Connect Anthropic, OpenAI, Gemini, or a local Ollama model. You pay your provider directly, at their price — we never see or bill your usage.",
  },
  {
    title: "Nothing sent without you",
    body: "Every reply, invite, or payment is a proposal until you click Approve. No exceptions, no “trusted sender” bypass, no silent auto-send mode.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet">Trust</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Built for people who don&apos;t trust AI with their inbox.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-semibold text-text">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
