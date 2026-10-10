import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DownloadStarter from "@/components/DownloadStarter";
import { APP_VERSION, DOWNLOAD_PAGE, DOWNLOAD_URL, TRIAL_DAYS, downloadPage } from "@/lib/offer";
import { fill, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { downloadText } from "@/i18n/download";

const SUPPORT = "support@safepersonalai.com";

// Not for search results: opening this page starts a download.
export function downloadMetadata(lang: Locale): Metadata {
  const t = downloadText[lang];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: downloadPage(lang) },
    robots: { index: false, follow: true },
  };
}

// Every download button leads here. The page starts the download and shows
// the install steps, so a download is also a visit that can be counted.
export default function DownloadView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = downloadText[lang];
  const vars = { version: APP_VERSION.replace("-beta", ""), days: TRIAL_DAYS };
  return (
    <>
      <DownloadStarter url={DOWNLOAD_URL} />
      <Nav lang={lang} t={dict.nav} path={DOWNLOAD_PAGE} />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{fill(t.lead, vars)}</p>
          <p className="mt-3 text-sm text-text-secondary">
            {t.fallbackLead}{" "}
            <a href={DOWNLOAD_URL} download className="font-medium text-green underline underline-offset-4">
              {t.fallbackLink}
            </a>
          </p>

          <h2 className="mt-14 text-xl font-semibold tracking-tight text-text">{t.stepsTitle}</h2>
          <ol className="mt-6 space-y-4">
            {t.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-bg-raised p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-sm font-semibold text-green">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-text">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm leading-relaxed text-text-secondary">{fill(t.note, vars)}</p>
          <p className="mt-3 text-sm text-text-secondary">
            {t.helpLead}{" "}
            <a href={`mailto:${SUPPORT}`} className="text-text underline underline-offset-4">
              {SUPPORT}
            </a>
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            {t.demoLead}{" "}
            <a href="/demo/" className="text-text underline underline-offset-4">
              {t.demoLink}
            </a>
          </p>
        </div>
      </main>
      <Footer lang={lang} t={dict.footer} path={DOWNLOAD_PAGE} />
    </>
  );
}
