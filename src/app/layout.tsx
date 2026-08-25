import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safepersonalai.com"),
  title: {
    default: "SafePersonalAI — Your life, automated, never without your say-so",
    template: "%s — SafePersonalAI",
  },
  description:
    "SafePersonalAI reads your inbox, calendar, and finances, drafts the actions — and waits for you to approve every one. Runs on your Mac, with your own AI key. Free to start.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
