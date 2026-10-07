import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BaseView, { baseMetadata } from "@/views/BaseView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPages } from "@/i18n/pages";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return baseMetadata(lang, getPages(lang));
}

export default async function LocalizedBase({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <BaseView lang={lang} dict={getDictionary(lang)} pages={getPages(lang)} />;
}
