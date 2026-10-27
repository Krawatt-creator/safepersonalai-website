// The one place the offer is written down: download, trial and prices.
// Every page and the structured data read these, so they cannot disagree.
// Prices are in euros. Buying is open through Lemon Squeezy (live store).
import { fill } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";

export const SITE_URL = "https://safepersonalai.com";

export const APP_VERSION = "0.3.0-beta";

export const DOWNLOAD_URL =
  "https://download.safepersonalai.com/SafePersonalAI-0.3.0.dmg";

// Where the download buttons lead: our own page, which starts the download
// above and shows the install steps. It is kept out of translatedPaths (and
// so out of the sitemap) because opening it starts a download.
export const DOWNLOAD_PAGE = "/download";
export const downloadPage = (lang: string = "en") =>
  lang === "en" ? DOWNLOAD_PAGE : `/${lang}${DOWNLOAD_PAGE}`;

export const TRIAL_DAYS = 90;

// 2026-10-25 (Cengiz): Base 29, every other module 19; the three together 39 (instead of 67).
export const PRICES = {
  base: 29,
  travel: 19,
  wealth: 19,
  // All three modules together.
  bundle: 39,
} as const;

// Lemon Squeezy LIVE checkout links (2026-10-25). Each key a buyer receives
// unlocks only that product in the app (assets/lemon_squeezy_variants.json).
export const CHECKOUT_URLS = {
  base: "https://safepersonalai.lemonsqueezy.com/checkout/buy/9bbfb414-768d-421d-9ae8-69e133dc108a",
  travel: "https://safepersonalai.lemonsqueezy.com/checkout/buy/0ccb74ed-d826-4600-b9b7-8274769d4084",
  wealth: "https://safepersonalai.lemonsqueezy.com/checkout/buy/b7dbe88b-b927-4269-ae88-fb7d38342809",
  bundle: "https://safepersonalai.lemonsqueezy.com/checkout/buy/f685b1f4-8608-41a5-b4df-9589f1258634",
} as const;

// The numbers every translated sentence is filled with.
export const OFFER_VARS = { days: TRIAL_DAYS, ...PRICES };

// The same sentences wherever the offer is explained (English pages).
export const TRIAL_LINE = fill(en.offer.trialLine, OFFER_VARS);
export const PRICE_LINE = fill(en.offer.priceLine, OFFER_VARS);

// Under a module's price.
export const PRICE_NOTE = fill(en.offer.priceNote, OFFER_VARS);

// Under a download button.
export const DOWNLOAD_NOTE = fill(en.offer.downloadNote, OFFER_VARS);
