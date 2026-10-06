import Reveal from "./Reveal";
import SubscriptionCounter from "./SubscriptionCounter";
import { OFFER_VARS } from "@/lib/offer";
import { fill } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

export default function OwnershipSection({ dict = en }: { dict?: Dictionary }) {
  const t = dict.ownership;
  // The last point ends with the offer, in the same words as everywhere else.
  const offer = `${fill(dict.offer.trialLine, OFFER_VARS)} ${fill(dict.offer.priceLine, OFFER_VARS)}`;
  return (
    <section id="ownership" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-green">{t.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal delay={80} className="space-y-8">
            {t.points.map((p, i) => (
              <div key={p.title}>
                <h3 className="text-base font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {i === t.points.length - 1 ? `${p.body} ${offer}` : p.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <SubscriptionCounter t={t.counter} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
