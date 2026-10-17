// Google Analytics 4 for this website only (2026-10-17): visits and downloads per country and city.
// Empty = no cookie notice and nothing loaded. Put the "G-..." measurement ID from analytics.google.com here.
export const GA_MEASUREMENT_ID = "G-K031XVVN57";

export const CONSENT_KEY = "spa-analytics-consent"; // "yes" | "no", kept in this browser only

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Loads Google Analytics. Called only after the visitor clicked "Allow".
export function loadAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

// One event, only when Analytics was allowed and loaded.
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", name, params);
}
