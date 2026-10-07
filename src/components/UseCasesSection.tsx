"use client";

import Reveal from "./Reveal";
import UseCaseCard, { type Case } from "./UseCaseCard";
import type { PagesDictionary } from "@/i18n/pages/en";

// Three examples from email, each one something the Mac app does and each
// one waiting for approval (product_features/FEATURES.md, section 3).
// The wording comes from the page dictionary (base.cases, same order).
const frames: Pick<Case, "key" | "inputIcon" | "outputIcon" | "accent">[] = [
  { key: "appointment", inputIcon: "✉️", outputIcon: "📅", accent: "violet" },
  { key: "task", inputIcon: "✉️", outputIcon: "✅", accent: "green" },
  { key: "moved", inputIcon: "✉️", outputIcon: "📝", accent: "green" },
];

export default function UseCasesSection({
  t,
  card,
}: {
  t: PagesDictionary["base"];
  card: PagesDictionary["card"];
}) {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-violet">{t.casesEyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.casesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">{t.casesBody}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {frames.map((frame, i) => (
            <Reveal key={frame.key} delay={i * 90}>
              <UseCaseCard c={{ ...frame, ...t.cases[i] }} t={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
