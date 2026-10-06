import Reveal from "./Reveal";
import TrustCenterPanel from "./TrustCenterPanel";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

export default function TrustSection({
  t = en.trust,
}: {
  t?: Dictionary["trust"];
}) {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-violet">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
              {t.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal delay={80}>
            <div className="grid gap-10 sm:grid-cols-2">
              {t.points.map((p) => (
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
            <TrustCenterPanel t={t.panel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
