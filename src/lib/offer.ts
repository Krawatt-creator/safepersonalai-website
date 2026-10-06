// The one place the offer is written down: download, trial and prices.
// Every page and the structured data read these, so they cannot disagree.
// Prices are in euros. Buying is not open yet (the store is not live).

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
