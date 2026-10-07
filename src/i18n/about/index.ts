import type { Locale } from "@/i18n/config";
import { enAbout, type AboutDictionary } from "./en";
import { deAbout } from "./de";
import { trAbout } from "./tr";
import { esAbout } from "./es";
import { zhAbout } from "./zh";
import { frAbout } from "./fr";

const about: Record<Locale, AboutDictionary> = {
  en: enAbout,
  de: deAbout,
  tr: trAbout,
  es: esAbout,
  zh: zhAbout,
  fr: frAbout,
};

export function getAbout(lang: Locale): AboutDictionary {
  return about[lang];
}
