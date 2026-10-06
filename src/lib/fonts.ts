import { Geist, Geist_Mono } from "next/font/google";

// latin-ext carries the Turkish letters (ğ, ş, ı, İ). Chinese falls back to
// the system font, as Geist has no Chinese characters.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const fontClasses = `${geistSans.variable} ${geistMono.variable}`;
