import type { Metadata } from "next";

// Shared by the two root layouts (English, and the translated languages).
// The share image is named here rather than left to the file convention:
// app/opengraph-image.tsx sits above both layouts, where no site address is
// known, so on its own it would be linked as "localhost".
export const siteMetadata: Metadata = {
  metadataBase: new URL("https://safepersonalai.com"),
  openGraph: {
    siteName: "SafePersonalAI",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};
