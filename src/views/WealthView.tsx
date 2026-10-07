import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import AppVideo from "@/components/AppVideo";
import Reveal from "@/components/Reveal";
import { DOWNLOAD_URL, OFFER_VARS, PRICES } from "@/lib/offer";
import { fill, languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { showcase } from "@/i18n/showcase";

const PATH = "/modules/wealth";

export function wealthMetadata(lang: Locale, dict: Dictionary): Metadata {
  return {
    title: dict.meta.wealthTitle,
    description: dict.meta.wealthDescription,
    alternates: {
      canonical: localePath(lang, PATH),
      languages: languageAlternates(PATH),
    },
  };
}

// Every claim here follows product_features/FEATURES.md, section 4 (Wealth).
// Features the catalog marks as not yet proven on a real mailbox (statements
// and bank alerts from email, Apple Pay) are named once, as such, further down.
// The two films show the app's own screens on the demo household (marketing/app_demo).
export default function WealthView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.wealth;
  return (
    <ModulePageShell
      lang={lang}
      dict={dict}
      path={PATH}
      accent="green"
      name={t.name}
      tagline={t.tagline}
      intro={t.intro}
      priceLabel={`€${PRICES.wealth}`}
      priceNote={fill(dict.offer.priceNote, OFFER_VARS)}
      ctaLabel={dict.shell.download}
      ctaHref={DOWNLOAD_URL}
      steps={t.steps}
      features={t.features}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">{t.readsEyebrow}</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.readsTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {t.readsBody}
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-center">
            <AppVideo name="wealth" lang={lang} label={t.readsTitle} note={showcase[lang].note} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">{t.investEyebrow}</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.investTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {t.investBody}
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-center">
            <AppVideo name="investments" lang={lang} label={t.investTitle} note={showcase[lang].note} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold text-text">{t.provenTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {t.provenBody}
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text">{t.limitsTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {t.limitsBody}
            </p>
          </div>
        </div>
      </section>
    </ModulePageShell>
  );
}
