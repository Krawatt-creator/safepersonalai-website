import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import { languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { PagesDictionary } from "@/i18n/pages/en";

const PATH = "/iphone";

// The app's own screens with its built-in sample data (the App Store
// screenshots). Wording comes from the page dictionary (iphone.screens).
const screenFiles = ["/iphone/today.webp", "/iphone/wealth.webp", "/iphone/forecast.webp"];

export function iphoneMetadata(lang: Locale, pages: PagesDictionary): Metadata {
  return {
    title: pages.iphone.metaTitle,
    description: pages.iphone.metaDescription,
    alternates: {
      canonical: localePath(lang, PATH),
      languages: languageAlternates(PATH),
    },
  };
}

// Every claim here matches product_features/FEATURES.md ("iPhone app"). The app is
// built and runs on a test phone but is NOT in the App Store yet: this page says
// "coming" and collects interest. Change the call to action when it is released.
export default function IPhoneView({
  lang,
  dict,
  pages,
}: {
  lang: Locale;
  dict: Dictionary;
  pages: PagesDictionary;
}) {
  const t = pages.iphone;
  return (
    <ModulePageShell
      lang={lang}
      dict={dict}
      path={PATH}
      accent="green"
      name={t.name}
      tagline={t.tagline}
      intro={t.intro}
      priceLabel="€1.99"
      priceNote={t.priceNote}
      ctaLabel={pages.waitlist.button}
      ctaHref={`${localePath(lang, "/")}#pricing`}
      waitlistModule="iphone"
      waitlistText={pages.waitlist}
      steps={t.steps}
      features={t.features}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-green">{t.screensEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              {t.screensTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{t.screensBody}</p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {t.screens.map((s, i) => (
              <figure key={s.title} className="text-center">
                <PhoneFrame src={screenFiles[i]} alt={s.alt} />
                <figcaption className="mx-auto mt-6 max-w-[260px]">
                  <p className="text-base font-semibold text-text">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-text">{t.knowTitle}</h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              {t.know.map((k) => (
                <li key={k.lead}>
                  <span className="font-medium text-text">{k.lead}</span> {k.text}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs text-text-tertiary">{t.trademark}</p>
          </Reveal>
        </div>
      </section>
    </ModulePageShell>
  );
}
