import Image from "next/image";
import WindowFrame from "./WindowFrame";
import { showcase } from "@/i18n/showcase";
import { downloadPage, OFFER_VARS } from "@/lib/offer";
import { fill, localePath, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

export default function Hero({
  lang = "en",
  dict = en,
}: {
  lang?: Locale;
  dict?: Dictionary;
}) {
  const t = dict.hero;
  return (
    <section className="bg-radial-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28 lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-raised px-3 py-1 text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {t.badge}
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-text sm:text-5xl">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary text-pretty">
            {t.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={downloadPage(lang)} className="site-cta-primary">
              {t.ctaDownload}
            </a>
            <a href="/demo/" className="site-cta-secondary" title={t.ctaDemoHint}>
              {t.ctaDemo}
            </a>
            <a
              href={`${localePath(lang, "/")}#use-cases`}
              className="site-cta-secondary"
            >
              {t.ctaUseCases}
            </a>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-text-tertiary">
            {fill(dict.offer.trialLine, OFFER_VARS)}{" "}
            {fill(dict.offer.priceLine, OFFER_VARS)} {t.finePrint}
          </p>
        </div>

        {/* The real app (demo household), not a drawing: the list of prepared actions,
            the first one opened with Approve / Change / Reject. Top part only. */}
        <div className="relative lg:-mr-24 xl:-mr-40">
          <WindowFrame title={showcase[lang].windowTitle}>
            {/* crop: x 400–1650, y 0–800 of the 1800×1169 shot (the list, without the sidebar) */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "1250 / 800" }}>
              <Image
                src="/app/approvals.webp"
                alt={showcase[lang].steps[0].alt}
                width={1800}
                height={1169}
                priority
                className="absolute top-0 h-auto max-w-none"
                style={{ width: "144%", left: "-32%" }}
              />
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
