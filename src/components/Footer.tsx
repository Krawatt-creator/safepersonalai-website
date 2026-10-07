import Link from "next/link";
import { localeNames, localePath, locales, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

export default function Footer({
  lang = "en",
  t = en.footer,
  path = "/",
}: {
  lang?: Locale;
  t?: Dictionary["footer"];
  path?: string;
}) {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-text-tertiary sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          <span>SafePersonalAI</span>
        </div>
        <p className="order-last text-center sm:order-none">{t.tagline}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={localePath(lang, "/iphone")} className="transition hover:text-text-secondary">
            iPhone
          </Link>
          <Link href="/account" className="transition hover:text-text-secondary">
            {t.account}
          </Link>
          <Link href="/privacy" className="transition hover:text-text-secondary">
            {t.privacy}
          </Link>
          <Link href="/terms" className="transition hover:text-text-secondary">
            {t.terms}
          </Link>
          <a href="mailto:support@safepersonalai.com" className="transition hover:text-text-secondary">
            support@safepersonalai.com
          </a>
        </div>
      </div>
      {/* Every language, as plain links, on every page. */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 text-xs text-text-tertiary">
        {locales.map((l) => (
          <a
            key={l}
            href={localePath(l, path)}
            hrefLang={l}
            lang={l}
            className={l === lang ? "text-text-secondary" : "transition hover:text-text-secondary"}
          >
            {localeNames[l]}
          </a>
        ))}
      </div>
    </footer>
  );
}
