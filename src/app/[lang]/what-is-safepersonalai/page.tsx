import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutView, { aboutMetadata } from "@/views/AboutView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAbout } from "@/i18n/about";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return aboutMetadata(lang, getAbout(lang));
}

export default async function LocalizedAbout({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <AboutView lang={lang} dict={getDictionary(lang)} about={getAbout(lang)} />;
}
