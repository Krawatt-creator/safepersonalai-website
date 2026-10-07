"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";

// The films exist in these languages (marketing/studio); the others get English.
const FILMED = ["en", "de", "tr"];

// A short silent film of the app's own screens (demo household), 9:16.
// It loads and plays only while it is in view, and waits for a press on
// play when the visitor has asked for reduced motion.
export default function AppVideo({
  name,
  lang,
  label,
  note,
}: {
  name: "wealth" | "investments";
  lang: Locale;
  label: string;
  note: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const film = FILMED.includes(lang) ? lang : "en";

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="overflow-hidden rounded-[28px] border border-border-strong bg-bg-card shadow-[0_40px_120px_-40px_rgba(8,114,237,0.35)]">
        <video
          ref={ref}
          className="block aspect-[9/16] w-full"
          src={`/video/${name}-${film}.mp4`}
          poster={`/video/${name}-${film}.jpg`}
          width={720}
          height={1280}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
        />
      </div>
      <figcaption className="mt-4 text-center text-xs text-text-tertiary">{note}</figcaption>
    </figure>
  );
}
