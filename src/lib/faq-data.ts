// The home page FAQ now lives in the language dictionaries
// (src/i18n/dictionaries/*.ts, key `faq`). This is the English list, with
// the offer numbers filled in, for anything that wants it as plain data.
import { fill } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { OFFER_VARS } from "@/lib/offer";

export const faqs: { q: string; a: string }[] = en.faq.items.map((f) => ({
  q: f.q,
  a: fill(f.a, OFFER_VARS),
}));
