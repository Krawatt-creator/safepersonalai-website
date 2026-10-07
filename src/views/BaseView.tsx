import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import UseCasesSection from "@/components/UseCasesSection";
import OperationalPreviewPanel from "@/components/OperationalPreviewPanel";
import SettingsPreviewPanel from "@/components/SettingsPreviewPanel";
import MessageFlowPreview from "@/components/MessageFlowPreview";
import Reveal from "@/components/Reveal";
import { DOWNLOAD_URL, OFFER_VARS, PRICES } from "@/lib/offer";
import { fill, languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { PagesDictionary } from "@/i18n/pages/en";

const PATH = "/modules/operational";

export function baseMetadata(lang: Locale, pages: PagesDictionary): Metadata {
  return {
    title: pages.base.metaTitle,
    description: pages.base.metaDescription,
    alternates: {
      canonical: localePath(lang, PATH),
      languages: languageAlternates(PATH),
    },
  };
}

// Claims follow product_features/FEATURES.md, sections 2, 3 and 6. The three
// previews are illustrations of the app's own screens and stay English.
export default function BaseView({
  lang,
  dict,
  pages,
}: {
  lang: Locale;
  dict: Dictionary;
  pages: PagesDictionary;
}) {
  const t = pages.base;
  return (
    <ModulePageShell
      lang={lang}
      dict={dict}
      path={PATH}
      accent="green"
      name={t.name}
      tagline={t.tagline}
      intro={t.intro}
      priceLabel={`€${PRICES.base}`}
      priceNote={fill(dict.offer.priceNote, OFFER_VARS)}
      ctaLabel={dict.shell.download}
      ctaHref={DOWNLOAD_URL}
      steps={t.steps}
      features={t.features}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">{t.seeEyebrow}</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.seeTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {t.seeBody}
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <div className="space-y-4">
              <OperationalPreviewPanel />
              <SettingsPreviewPanel />
              <MessageFlowPreview />
            </div>
          </Reveal>
        </div>
      </section>
      <UseCasesSection t={t} card={pages.card} />
    </ModulePageShell>
  );
}
