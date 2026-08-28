"use client";

import { useState } from "react";

export type Case = {
  key: string;
  inputIcon: string;
  inputLabel: string;
  inputSub: string;
  outputIcon: string;
  outputTitle: string;
  outputSub: string;
  accent: "green" | "violet";
};

// Extracted from UseCasesSection.tsx (2026-08-25) so the /usecases library
// pages can reuse the exact same click-to-reveal card, not a re-implemented
// copy — the homepage's three teaser cards and every topic's full set on
// its own page are now the same component with different data.
export default function UseCaseCard({ c }: { c: Case }) {
  const [revealed, setRevealed] = useState(false);
  const dot = c.accent === "green" ? "bg-green" : "bg-violet";

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised p-6">
      <div className="relative min-h-[132px] flex-1">
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            revealed
              ? "pointer-events-none -translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl leading-none">{c.inputIcon}</span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-text">{c.inputLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-tertiary">
                {c.inputSub}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            revealed
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-border bg-bg px-4 py-3">
            <div className="flex items-start gap-2.5">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
              <span className="text-base leading-none">{c.outputIcon}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-text">{c.outputTitle}</p>
                <p className="mt-1 text-xs text-text-tertiary">{c.outputSub}</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-text-tertiary">
            Nothing happens until you approve it.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        className="mt-6 self-start rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-text-secondary transition hover:border-text-tertiary hover:text-text"
      >
        {revealed ? "↺ Show the original message" : "▶ See what SafePersonalAI does"}
      </button>
    </div>
  );
}
