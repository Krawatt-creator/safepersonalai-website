import type { Locale } from "@/i18n/config";
import { enPages, type PagesDictionary } from "./en";
import { dePages } from "./de";
import { trPages } from "./tr";
import { esPages } from "./es";
import { zhPages } from "./zh";
import { frPages } from "./fr";

const pages: Record<Locale, PagesDictionary> = {
  en: enPages,
  de: dePages,
  tr: trPages,
  es: esPages,
  zh: zhPages,
  fr: frPages,
};

export function getPages(lang: Locale): PagesDictionary {
  return pages[lang];
}
