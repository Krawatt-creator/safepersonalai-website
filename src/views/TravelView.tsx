import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import TravelPreviewPanel from "@/components/TravelPreviewPanel";
import DealAlertPanel from "@/components/DealAlertPanel";
import Reveal from "@/components/Reveal";
import { DOWNLOAD_URL, OFFER_VARS, PRICES } from "@/lib/offer";
import { fill, languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { PagesDictionary } from "@/i18n/pages/en";

const PATH = "/modules/travel";

export function travelMetadata(lang: Locale, pages: PagesDictionary): Metadata {
  return {
    title: pages.travel.metaTitle,
    description: pages.travel.metaDescription,
    alternates: {
      canonical: localePath(lang, PATH),
      languages: languageAlternates(PATH),
    },
  };
}

// Claims follow product_features/FEATURES.md, section 5. The two previews
// are illustrations of the app's own screens and stay English.
export default function TravelView({
  lang,
  dict,
  pages,
}: {
  lang: Locale;
  dict: Dictionary;
  pages: PagesDictionary;
}) {
  const t = pages.travel;
  return (
    <ModulePageShell
      lang={lang}
      dict={dict}
      path={PATH}
      accent="violet"
      name={t.name}
      tagline={t.tagline}
      intro={t.intro}
      priceLabel={`€${PRICES.travel}`}
      priceNote={fill(dict.offer.priceNote, OFFER_VARS)}
      ctaLabel={dict.shell.download}
      ctaHref={DOWNLOAD_URL}
      steps={t.steps}
      features={t.features}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-violet">{t.watchEyebrow}</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.watchTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {t.watchBody}
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <TravelPreviewPanel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-violet">{t.seeEyebrow}</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.seeTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {t.seeBody}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <DealAlertPanel />
          </Reveal>
        </div>
      </section>
    </ModulePageShell>
  );
}
