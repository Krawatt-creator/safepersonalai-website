import type { MetadataRoute } from "next";
import { topics } from "@/lib/usecases-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://safepersonalai.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/modules/operational`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/modules/travel`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/modules/wealth`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/usecases`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...topics.map((t) => ({
      url: `${base}/usecases/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
