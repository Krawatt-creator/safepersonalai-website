import { en, type Dictionary } from "@/i18n/dictionaries/en";

const accents = ["green", "violet", "green"] as const;

export default function BoundarySection({
  t = en.boundary,
}: {
  t?: Dictionary["boundary"];
}) {
  return (
    <section id="boundary" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-text-secondary text-pretty">{t.intro}</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {t.steps.map((s, i) => (
            <div key={s.title} className="bg-bg p-8">
              <span
                className={`font-mono text-sm ${
                  accents[i] === "green" ? "text-green" : "text-violet"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
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
