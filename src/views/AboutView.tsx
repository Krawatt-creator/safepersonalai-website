import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { APP_VERSION, downloadPage, OFFER_VARS, SITE_URL } from "@/lib/offer";
import { fill, languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { AboutDictionary } from "@/i18n/about/en";

export const ABOUT_PATH = "/what-is-safepersonalai";

const vars = { ...OFFER_VARS, version: APP_VERSION };

export function aboutMetadata(lang: Locale, about: AboutDictionary): Metadata {
  return {
    title: { absolute: about.metaTitle },
    description: about.metaDescription,
    alternates: {
      canonical: localePath(lang, ABOUT_PATH),
      languages: languageAlternates(ABOUT_PATH),
    },
  };
}

// The plain description of the product: one definition, a list of facts, and
// short sections that each stand on their own. No animation and nothing
// hidden, so the whole text is in the HTML as written.
export default function AboutView({
  lang,
  dict,
  about,
}: {
  lang: Locale;
  dict: Dictionary;
  about: AboutDictionary;
}) {
  const url = `${SITE_URL}${localePath(lang, ABOUT_PATH)}`;
  const modules = [
    { href: localePath(lang, "/modules/operational"), name: dict.pricing.modules.operational },
    { href: localePath(lang, "/modules/travel"), name: dict.pricing.modules.travel },
    { href: localePath(lang, "/modules/wealth"), name: dict.pricing.modules.wealth },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": url,
          url,
          inLanguage: lang,
          name: about.title,
          description: about.metaDescription,
          about: { "@id": `${SITE_URL}/#app` },
          isPartOf: { "@id": `${SITE_URL}/#website` },
        }}
      />
      <Nav lang={lang} t={dict.nav} path={ABOUT_PATH} />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-green">{about.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
            {about.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary text-pretty">{about.lead}</p>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-text">{about.factsTitle}</h2>
            <dl className="mt-6 divide-y divide-border rounded-2xl border border-border bg-bg-card">
              {about.facts.map((f) => (
                <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm font-medium text-text">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-text-secondary">{fill(f.value, vars)}</dd>
                </div>
              ))}
            </dl>
          </section>

          {about.sections.map((s) => (
            <section key={s.title} className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight text-text">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-text-secondary">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{fill(p, vars)}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-text">{about.forTitle}</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-text-secondary">
                {about.forItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-text">{about.notForTitle}</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-text-secondary">
                {about.notForItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-xl font-semibold tracking-tight text-text">{about.linksTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {modules.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="font-medium text-text underline-offset-4 hover:underline">
                    {m.name.name}
                  </Link>
                  <span className="text-text-secondary"> — {m.name.tagline}</span>
                </li>
              ))}
              <li>
                <Link
                  href={localePath(lang, "/iphone")}
                  className="font-medium text-text underline-offset-4 hover:underline"
                >
                  iPhone
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={downloadPage(lang)} className="site-cta-primary">
                {about.download}
              </a>
              <Link href={`${localePath(lang, "/")}#pricing`} className="site-cta-secondary">
                {about.pricing}
              </Link>
            </div>
            <p className="mt-3 text-xs text-text-tertiary">{fill(dict.offer.downloadNote, vars)}</p>
          </section>
        </article>
      </main>
      <Footer lang={lang} t={dict.footer} path={ABOUT_PATH} />
    </>
  );
}
