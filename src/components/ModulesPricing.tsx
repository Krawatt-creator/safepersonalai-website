import Link from "next/link";
import Reveal from "./Reveal";
import { downloadPage, OFFER_VARS, PRICES } from "@/lib/offer";
import { fill, localePath, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

type ModuleKey = "operational" | "travel" | "wealth";

// One offer for every module: the download is free in the beta and opens all
// three for the trial; the price shown is the one-time price afterwards.
// The numbers come from src/lib/offer.ts. Buying is not open yet.
const modules: { key: ModuleKey; price: number; accent: "green" | "violet"; featured?: boolean }[] = [
  { key: "operational", price: PRICES.base, accent: "green" },
  { key: "travel", price: PRICES.travel, accent: "violet" },
  { key: "wealth", price: PRICES.wealth, accent: "green", featured: true },
];

export default function ModulesPricing({
  lang = "en",
  dict = en,
}: {
  lang?: Locale;
  dict?: Dictionary;
}) {
  const t = dict.pricing;
  return (
    <section id="modules" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div id="pricing" className="max-w-2xl scroll-mt-24">
            <p className="text-sm font-medium text-green">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
              {fill(t.title, OFFER_VARS)}
            </h2>
            <p className="mt-4 text-text-secondary text-pretty">
              {fill(t.intro, OFFER_VARS)}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {modules.map((m, i) => {
            const text = t.modules[m.key];
            const dot = m.accent === "green" ? "bg-green" : "bg-violet";
            return (
              <Reveal key={m.key} delay={i * 90}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                    m.featured
                      ? "border-border-strong bg-bg-card shadow-[0_30px_80px_-40px_rgba(142,85,234,0.35)] hover:shadow-[0_36px_90px_-36px_rgba(142,85,234,0.45)]"
                      : "border-border bg-bg-raised hover:border-border-strong hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    <h3 className="text-lg font-semibold text-text">{text.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">{text.tagline}</p>

                  <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-3xl font-semibold text-text">€{m.price}</span>
                    <span className="text-xs text-text-tertiary">
                      {fill(dict.offer.priceNote, OFFER_VARS)}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {text.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={localePath(lang, `/modules/${m.key}`)}
                    className="mt-6 self-start text-sm font-medium text-text-secondary underline-offset-4 transition hover:text-text hover:underline"
                  >
                    {t.learnMore}
                  </Link>

                  <div className="mt-8">
                    <a
                      href={downloadPage(lang)}
                      className={`w-full ${m.key === "operational" ? "site-cta-primary" : "site-cta-secondary"}`}
                    >
                      {t.download}
                    </a>
                    <p className="mt-2 text-center text-[11px] text-text-tertiary">
                      {fill(t.included, OFFER_VARS)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-text-secondary">
          {t.bundleLead}{" "}
          <span className="font-semibold text-text">
            {fill(t.bundleStrong, OFFER_VARS)}
          </span>
          {fill(t.bundleRest, OFFER_VARS)}
        </p>
        <p className="mt-3 max-w-3xl text-xs text-text-tertiary">
          {fill(dict.offer.downloadNote, OFFER_VARS)}
        </p>
      </div>
    </section>
  );
}
