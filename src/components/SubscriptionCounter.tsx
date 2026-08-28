"use client";

import { useEffect, useState } from "react";

const MONTHLY_COST = 24;
const MAX_MONTHS = 36;

export default function SubscriptionCounter() {
  const [months, setMonths] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 24
      : 1
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setMonths((m) => (m >= MAX_MONTHS ? 1 : m + 1));
    }, 450);
    return () => window.clearInterval(id);
  }, []);

  const total = months * MONTHLY_COST;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-bg-raised p-6">
        <p className="text-xs font-medium text-text-tertiary">
          A typical AI subscription
        </p>
        <p className="mt-3 font-mono text-3xl font-semibold tabular-nums text-text">
          ${total.toLocaleString()}
        </p>
        <p className="mt-1 text-xs text-text-tertiary">
          ${MONTHLY_COST}/mo × {months} {months === 1 ? "month" : "months"} — and counting, forever.
        </p>
      </div>
      <div className="rounded-2xl border border-green/30 bg-green-dim p-6">
        <p className="text-xs font-medium text-green">SafePersonalAI</p>
        <p className="mt-3 font-mono text-3xl font-semibold text-text">
          $0<span className="text-base font-normal text-text-tertiary">/mo</span>
        </p>
        <p className="mt-1 text-xs text-text-tertiary">
          One-time per module. Your Mac, your AI key — no platform fee, ever.
        </p>
      </div>
    </div>
  );
}
