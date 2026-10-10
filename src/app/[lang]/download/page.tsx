import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DownloadView, { downloadMetadata } from "@/views/DownloadView";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return downloadMetadata(lang);
}

export default async function LocalizedDownload({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <DownloadView lang={lang} dict={getDictionary(lang)} />;
}
