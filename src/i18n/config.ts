// Languages of the website. English lives at the plain addresses
// (/, /modules/wealth); every other language under its own prefix (/de, /tr…).

export const defaultLocale = "en";
export const translatedLocales = ["de", "tr", "es", "zh", "fr"] as const;
export const locales = [defaultLocale, ...translatedLocales] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  tr: "Türkçe",
  es: "Español",
  zh: "中文",
  fr: "Français",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Pages that exist in every language. Anything else is English only for now,
// and links to it from a translated page go to the English page.
export const translatedPaths = ["/", "/modules/wealth"] as const;

const isTranslated = (path: string) =>
  (translatedPaths as readonly string[]).includes(path);

/** The address of `path` in `lang`; the English address when it is not translated. */
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale || !isTranslated(path)) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** hreflang links for a translated page: every language plus x-default. */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[l] = localePath(l, path);
  out["x-default"] = path;
  return out;
}

/** Fill {placeholders} in a dictionary string. */
export function fill(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  );
}
