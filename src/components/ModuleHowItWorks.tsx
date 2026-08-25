import Reveal from "./Reveal";

type Step = { title: string; body: string };

export default function ModuleHowItWorks({
  accent,
  steps,
}: {
  accent: "green" | "violet";
  steps: [Step, Step, Step];
}) {
  const accentText = accent === "green" ? "text-green" : "text-violet";

  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-bg p-8">
                <span className={`font-mono text-sm ${accentText}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
