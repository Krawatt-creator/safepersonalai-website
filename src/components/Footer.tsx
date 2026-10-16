import Link from "next/link";
import { localeNames, localePath, locales, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";
import { getAbout } from "@/i18n/about";
import SocialLinks from "./SocialLinks";

export default function Footer({
  lang = "en",
  t = en.footer,
  path = "/",
}: {
  lang?: Locale;
  t?: Dictionary["footer"];
  path?: string;
}) {
  const about = getAbout(lang);
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-xs text-text-tertiary">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          <span className="text-text-secondary">SafePersonalAI</span>
          <span aria-hidden="true">·</span>
          <span>{t.tagline}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link
            href={localePath(lang, "/what-is-safepersonalai")}
            className="transition hover:text-text-secondary"
          >
            {about.footerLabel}
          </Link>
          <Link href="/answers" className="transition hover:text-text-secondary">
            {about.answersLabel}
          </Link>
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
          <Link href="/impressum" className="transition hover:text-text-secondary">
            Impressum
          </Link>
          <a href="mailto:support@safepersonalai.com" className="transition hover:text-text-secondary">
            support@safepersonalai.com
          </a>
        </div>
      </div>
      {/* The SafePersonalAI accounts on social media. */}
      <div className="mx-auto mt-6 max-w-6xl px-6">
        <SocialLinks />
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
      {/* The names of other companies' products, said plainly on every page (the imprint has the full notice). */}
      <p lang="en" className="mx-auto mt-6 max-w-3xl px-6 text-center text-[11px] leading-relaxed text-text-tertiary">
        Apple, Mac, iPhone and iMessage are trademarks of Apple Inc. Google, Gmail and Google Calendar are trademarks of
        Google LLC. SafePersonalAI is not affiliated with or endorsed by Apple or Google.
      </p>
    </footer>
  );
}
