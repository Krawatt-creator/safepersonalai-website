import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WealthView, { wealthMetadata } from "@/views/WealthView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return wealthMetadata(lang, getDictionary(lang));
}

export default async function LocalizedWealth({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <WealthView lang={lang} dict={getDictionary(lang)} />;
}
