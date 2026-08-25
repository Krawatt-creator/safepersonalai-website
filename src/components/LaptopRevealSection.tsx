"use client";

import { useEffect, useRef, useState } from "react";

const CLOSED_ANGLE = 168;
const OPEN_ANGLE = 6;

export default function LaptopRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section's top is at the bottom of the viewport,
      // 1 once it has scrolled two-thirds of the way up.
      const start = vh;
      const end = vh * 0.25;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const effectiveProgress = reducedMotion ? 1 : progress;
  const lidAngle = CLOSED_ANGLE + (OPEN_ANGLE - CLOSED_ANGLE) * effectiveProgress;
  const screenOpacity = Math.max(0, (effectiveProgress - 0.55) / 0.45);
  const glowOpacity = Math.max(0, (effectiveProgress - 0.75) / 0.25);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border py-28"
    >
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-medium text-green">Quietly, in the background</p>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
          It only wakes up when there&apos;s something for you to see.
        </h2>

        <div
          className="mx-auto mt-16 w-full max-w-xs"
          style={{ perspective: "1400px" }}
        >
          <div className="relative mx-auto" style={{ width: 280 }}>
            <div
              className="relative mx-auto rounded-t-2xl border border-border-strong bg-bg-card"
              style={{
                width: 280,
                height: 176,
                transformOrigin: "bottom center",
                transform: `rotateX(${lidAngle}deg)`,
                willChange: "transform",
              }}
            >
              <div className="absolute top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bg-raised" />
              <div className="absolute inset-2.5 top-4 overflow-hidden rounded-lg bg-black">
                <div
                  className="pointer-events-none absolute inset-0 bg-radial-glow"
                  style={{ opacity: glowOpacity }}
                />
                <div
                  className="flex h-full flex-col items-center justify-center gap-2"
                  style={{ opacity: screenOpacity }}
                >
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute h-2 w-2 animate-ping rounded-full bg-green/70 motion-reduce:hidden" />
                    <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  </span>
                  <span className="text-[10px] font-medium tracking-wide text-text-tertiary">
                    SafePersonalAI
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mx-auto rounded-b-xl border border-t-0 border-border-strong bg-bg-raised"
              style={{ width: 296, height: 12, marginLeft: -8 }}
            />
            <div
              className="mx-auto mt-2 h-2 rounded-full bg-black/50 blur-md"
              style={{ width: 220 }}
            />
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-md text-sm text-text-secondary">
          No spinner, no dashboard you have to babysit — just a quiet light
          when something actually needs your say-so.
        </p>
      </div>
    </section>
  );
}
