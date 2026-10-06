import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeView, { homeMetadata } from "@/views/HomeView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return homeMetadata(lang, getDictionary(lang));
}

export default async function LocalizedHome({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomeView lang={lang} dict={getDictionary(lang)} />;
}
