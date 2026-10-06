import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./en";
import { de } from "./de";
import { tr } from "./tr";
import { es } from "./es";
import { zh } from "./zh";
import { fr } from "./fr";

const dictionaries: Record<Locale, Dictionary> = { en, de, tr, es, zh, fr };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
