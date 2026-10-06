"use client";

import { useEffect, useState } from "react";
import { fill } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const MONTHLY_COST = 24;
const MAX_MONTHS = 36;

export default function SubscriptionCounter({
  t,
}: {
  t: Dictionary["ownership"]["counter"];
}) {
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
        <p className="text-xs font-medium text-text-tertiary">{t.typical}</p>
        <p className="mt-3 font-mono text-3xl font-semibold tabular-nums text-text">
          ${total.toLocaleString("en-US")}
        </p>
        <p className="mt-1 text-xs text-text-tertiary">
          {fill(months === 1 ? t.runningOne : t.running, {
            cost: MONTHLY_COST,
            n: months,
          })}
        </p>
      </div>
      <div className="rounded-2xl border border-green/30 bg-green-dim p-6">
        <p className="text-xs font-medium text-green">SafePersonalAI</p>
        <p className="mt-3 font-mono text-3xl font-semibold text-text">
          $0<span className="text-base font-normal text-text-tertiary">{t.perMonth}</span>
        </p>
        <p className="mt-1 text-xs text-text-tertiary">{t.ours}</p>
      </div>
    </div>
  );
}
