"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DOWNLOAD_URL } from "@/lib/offer";
import { localeNames, localePath, locales, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

// `path` is the page's own address without a language prefix ("/",
// "/modules/wealth"). The language links lead to the same page in the other
// language; on a page that is English only they lead to the translated home.
export default function Nav({
  lang = "en",
  t = en.nav,
  path = "/",
}: {
  lang?: Locale;
  t?: Dictionary["nav"];
  path?: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const home = localePath(lang, "/");
  const links = [
    { href: `${home}#use-cases`, label: t.useCases },
    { href: `${home}#modules`, label: t.modules },
    { href: localePath(lang, "/iphone"), label: "iPhone" },
    // The clickable demo: the app's real pages with invented data (plain files under /demo/).
    { href: "/demo/", label: "Demo" },
    { href: `${home}#boundary`, label: t.howItWorks },
    { href: `${home}#pricing`, label: t.pricing },
    { href: `${home}#faq`, label: t.faq },
  ];
  const languageLinks = locales.map((l) => ({
    code: l,
    name: localeNames[l],
    // A different language has its own document, so these are plain links.
    href: localePath(l, path),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={home} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="rounded-[8px]"
          />
          <span className="font-semibold tracking-tight text-text">SafePersonalAI</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-text">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <details className="group relative hidden sm:block">
            <summary
              aria-label={t.language}
              className="flex cursor-pointer list-none items-center gap-1 rounded-full border border-border px-2.5 py-1.5 text-xs text-text-secondary transition hover:border-border-strong hover:text-text [&::-webkit-details-marker]:hidden"
            >
              <span className="uppercase">{lang}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="h-3 w-3 transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-border-strong bg-bg-card py-1 text-sm shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
              {languageLinks.map((l) => (
                <li key={l.code}>
                  <a
                    href={l.href}
                    hrefLang={l.code}
                    lang={l.code}
                    aria-current={l.code === lang ? "true" : undefined}
                    className={`block px-3 py-2 transition hover:bg-bg-raised hover:text-text ${
                      l.code === lang ? "text-text" : "text-text-secondary"
                    }`}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <Link
            href="/account"
            className="hidden text-sm text-text-secondary transition hover:text-text lg:inline-block"
          >
            {t.account}
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={DOWNLOAD_URL}
              download
              className="site-cta-secondary min-h-10 px-4 text-sm"
            >
              {t.download}
            </a>
            <span className="hidden text-[10px] text-text-tertiary xl:inline">{t.appleSilicon}</span>
          </div>
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              {open ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm text-text-secondary">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 transition hover:bg-bg-raised hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 transition hover:bg-bg-raised hover:text-text"
              >
                {t.account}
              </Link>
            </li>
            <li className="flex flex-wrap gap-x-4 gap-y-1 px-2 py-2.5 text-xs" aria-label={t.language}>
              {languageLinks.map((l) => (
                <a
                  key={l.code}
                  href={l.href}
                  hrefLang={l.code}
                  lang={l.code}
                  className={l.code === lang ? "text-text" : "transition hover:text-text"}
                >
                  {l.name}
                </a>
              ))}
            </li>
            <li className="pt-2 sm:hidden">
              <a
                href={DOWNLOAD_URL}
                download
                onClick={() => setOpen(false)}
                className="site-cta-secondary block min-h-10 px-4 text-center text-sm"
              >
                {t.download}
              </a>
              <p className="mt-2 text-center text-[10px] text-text-tertiary">{t.appleSiliconRequired}</p>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
