// The one place the offer is written down: download, trial and prices.
// Every page and the structured data read these, so they cannot disagree.
// Prices are in euros. Buying is not open yet (the store is not live).
import { fill } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";

export const SITE_URL = "https://safepersonalai.com";

export const APP_VERSION = "0.2.0-beta";

export const DOWNLOAD_URL =
  "https://github.com/Krawatt-creator/safepersonalai-website/releases/download/download-v0.2.0-beta/SafePersonalAI-beta.zip";

export const TRIAL_DAYS = 90;

export const PRICES = {
  base: 49,
  travel: 29,
  wealth: 29,
  // All three modules together.
  bundleBeta: 59, // while the beta runs
  bundle: 100, // afterwards
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
