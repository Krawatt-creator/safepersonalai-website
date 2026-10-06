import { faqs } from "@/lib/faq-data";
import { APP_VERSION, DOWNLOAD_URL, SITE_URL, TRIAL_DAYS } from "@/lib/offer";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SafePersonalAI",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
};

// The home page: who we are, the product, its price today, and the FAQ.
// Only the free beta is stated as a price. The one-time prices are on the
// page itself; they are added here on the day buying opens, so no search
// result shows a price that nobody can pay yet. No ratings: there are none.
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "SafePersonalAI",
      inLanguage: "en",
      publisher: { "@id": organization["@id"] },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "SafePersonalAI",
      url: SITE_URL,
      description:
        "A Mac app that reads your email and turns it into calendar entries, to-dos, travel plans and a clear view of your money. Everything it proposes waits for your OK. It never sends email, never pays and never clicks links. It runs on your Mac with a local Ollama model or your own AI provider key.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS (Apple silicon, M1 or later)",
      softwareVersion: APP_VERSION,
      downloadUrl: DOWNLOAD_URL,
      publisher: { "@id": organization["@id"] },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
        description: `Free beta download. Every module (Base, Travel, Wealth) is open for ${TRIAL_DAYS} days.`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};
