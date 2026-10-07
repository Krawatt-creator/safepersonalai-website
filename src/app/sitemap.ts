import type { MetadataRoute } from "next";
import { topics } from "@/lib/usecases-data";
import { localePath, locales, translatedPaths } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://safepersonalai.com";
  const now = new Date();

  // A translated page is listed once per language, each naming the others.
  const translated = translatedPaths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((l) => [l, `${base}${localePath(l, path)}`]),
    );
    return locales.map((l) => ({
      url: `${base}${localePath(l, path)}`,
      lastModified: now,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority:
        path === "/" ? (l === "en" ? 1 : 0.9) : path === "/modules/operational" ? 0.8 : 0.6,
      alternates: { languages },
    }));
  });

  return [
    ...translated,
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
