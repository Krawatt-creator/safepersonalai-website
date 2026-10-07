"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ShowcaseText } from "@/i18n/showcase";

// The app's own screens, filmed on a demo household (marketing/app_demo).
// Same order as the captions in src/i18n/showcase.ts.
const shots = ["/app/approvals.webp", "/app/balance.webp", "/app/spending.webp", "/app/forecast.webp", "/app/investments.webp"];
const WIDTH = 1800;
const HEIGHT = 1169;

function WindowFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-40px_rgba(8,114,237,0.35)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 truncate text-xs text-text-tertiary">{title}</span>
      </div>
      {children}
    </div>
  );
}

// On a wide screen the window stays in place while the captions scroll past,
// and the screen inside changes with the caption in the middle of the view.
// On a phone each caption simply has its screen below it. All text and all
// four images are in the HTML either way.
export default function AppShowcase({ t }: { t: ShowcaseText }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.step));
          }
        }
      },
      // A thin band across the middle of the viewport.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="app" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-text-secondary text-pretty">{t.body}</p>
        </div>

        <div className="mt-12 gap-12 md:grid md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
          <div>
            {t.steps.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step={i}
                className="py-8 md:flex md:min-h-[62vh] md:items-center md:py-0"
              >
                <div
                  className={`transition-opacity duration-500 motion-reduce:transition-none ${
                    active === i ? "md:opacity-100" : "md:opacity-35"
                  }`}
                >
                  <p className="font-mono text-xs text-text-tertiary">
                    {i + 1} / {t.steps.length}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-text sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{s.body}</p>
                  <div className="mt-6 md:hidden">
                    <WindowFrame title={t.windowTitle}>
                      <Image src={shots[i]} alt={s.alt} width={WIDTH} height={HEIGHT} className="w-full" />
                    </WindowFrame>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-[18vh]">
              <WindowFrame title={t.windowTitle}>
                <div className="relative" style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
                  {t.steps.map((s, i) => (
                    <Image
                      key={s.title}
                      src={shots[i]}
                      alt={s.alt}
                      width={WIDTH}
                      height={HEIGHT}
                      aria-hidden={active !== i}
                      className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out motion-reduce:transition-none ${
                        active === i ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </WindowFrame>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xs text-text-tertiary">{t.note}</p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {t.steps.map((s, i) => (
                    <span
                      key={s.title}
                      className={`h-1 rounded-full transition-all duration-500 motion-reduce:transition-none ${
                        active === i ? "w-6 bg-green" : "w-2 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-text-tertiary md:hidden">{t.note}</p>
      </div>
    </section>
  );
}
