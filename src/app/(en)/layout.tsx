import type { Metadata } from "next";
import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { siteMetadata } from "@/lib/site-metadata";
import { en } from "@/i18n/dictionaries/en";

// The English pages. The other languages have their own root layout in
// app/[lang]/layout.tsx, so each document carries the right <html lang>.
export const metadata: Metadata = {
  ...siteMetadata,
  title: {
    default: en.meta.homeTitle,
    template: "%s — SafePersonalAI",
  },
  description: en.meta.homeDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
