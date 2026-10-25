import { APP_VERSION, CHECKOUT_URLS, DOWNLOAD_URL, OFFER_VARS, PRICES, SITE_URL } from "@/lib/offer";
import { fill, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SafePersonalAI",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
};

// The home page: who we are, the product, its prices, and the FAQ, in the
// page's own language. The free beta plus the four one-time purchases that
// can be bought (buying opened 2026-10-25). No ratings: there are none.
export function homeStructuredData(lang: Locale, dict: Dictionary) {
  const url = `${SITE_URL}${localePath(lang, "/")}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SafePersonalAI",
        inLanguage: lang,
        publisher: { "@id": organization["@id"] },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "SafePersonalAI",
        url,
        inLanguage: lang,
        description: dict.meta.appDescription,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "macOS 26 or later (Apple silicon, M1 or later)",
        softwareVersion: APP_VERSION,
        downloadUrl: DOWNLOAD_URL,
        publisher: { "@id": organization["@id"] },
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${url}#pricing`,
            description: fill(dict.meta.offerDescription, OFFER_VARS),
          },
          ...(["base", "travel", "wealth", "bundle"] as const).map((key) => ({
            "@type": "Offer",
            name:
              key === "bundle"
                ? "Base + Travel + Wealth"
                : dict.pricing.modules[key === "base" ? "operational" : key].name,
            price: String(PRICES[key]),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: CHECKOUT_URLS[key],
          })),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: lang,
        mainEntity: dict.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: fill(f.a, OFFER_VARS) },
        })),
      },
    ],
  };
}
