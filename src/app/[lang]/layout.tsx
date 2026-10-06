import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { siteMetadata } from "@/lib/site-metadata";
import { isLocale, translatedLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Root layout of the translated pages: /de, /tr, /es, /zh, /fr.
// English is not served here; it keeps the plain addresses in app/(en).
export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    ...siteMetadata,
    title: {
      default: dict.meta.homeTitle,
      template: "%s — SafePersonalAI",
    },
    description: dict.meta.homeDescription,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === "en") notFound();
  return (
    <html lang={lang} className={`${fontClasses} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
