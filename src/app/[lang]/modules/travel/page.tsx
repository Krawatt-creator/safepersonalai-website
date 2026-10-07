import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TravelView, { travelMetadata } from "@/views/TravelView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPages } from "@/i18n/pages";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return travelMetadata(lang, getPages(lang));
}

export default async function LocalizedTravel({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <TravelView lang={lang} dict={getDictionary(lang)} pages={getPages(lang)} />;
}
