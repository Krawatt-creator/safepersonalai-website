"use client";

import { useEffect, useRef } from "react";

// Two soft lights behind the whole page that drift slowly as you scroll.
// Decoration only: no text, no layout, and still when the visitor has asked
// for reduced motion.
export default function ScrollBackdrop() {
  const blue = useRef<HTMLDivElement>(null);
  const violet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = y / max; // 0 at the top of the page, 1 at the bottom
      if (blue.current) {
        blue.current.style.transform = `translate3d(${Math.sin(p * Math.PI * 2) * 14}vw, ${p * 46}vh, 0)`;
      }
      if (violet.current) {
        violet.current.style.transform = `translate3d(${Math.cos(p * Math.PI * 2) * -12}vw, ${p * -38}vh, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={blue}
        className="absolute -top-[20vh] left-[10vw] h-[70vh] w-[70vw] will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgba(8,114,237,0.13) 0%, rgba(8,114,237,0) 100%)",
        }}
      />
      <div
        ref={violet}
        className="absolute top-[55vh] right-[5vw] h-[60vh] w-[60vw] will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgba(142,85,234,0.10) 0%, rgba(142,85,234,0) 100%)",
        }}
      />
    </div>
  );
}
