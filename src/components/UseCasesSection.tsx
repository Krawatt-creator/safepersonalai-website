"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Case = {
  key: string;
  inputIcon: string;
  inputLabel: string;
  inputSub: string;
  outputIcon: string;
  outputTitle: string;
  outputSub: string;
  accent: "green" | "violet";
};

const cases: Case[] = [
  {
    key: "voice",
    inputIcon: "🎤",
    inputLabel: "Voice message · 0:14",
    inputSub: "“Reminder to myself — doctor Thursday, three o'clock…”",
    outputIcon: "📅",
    outputTitle: "Add “Dr. Kaya — Thu, 15:00” to your calendar",
    outputSub: "Transcribed locally, understood, staged for your approval",
    accent: "violet",
  },
  {
    key: "invoice",
    inputIcon: "📷",
    inputLabel: "Photo attachment",
    inputSub: "A photographed Stadtwerke bill, sent with no caption",
    outputIcon: "💳",
    outputTitle: "Track “Stadtwerke — 48.20 EUR”, due 12 Sep",
    outputSub: "Amount and deadline read from the photo — reminder included",
    accent: "green",
  },
  {
    key: "email",
    inputIcon: "✉️",
    inputLabel: "New email from Serap",
    inputSub: "“Can we move Saturday to Sunday instead?”",
    outputIcon: "📝",
    outputTitle: "Draft a reply, in German, in your usual tone",
    outputSub: "Ready in your drafts folder — sends only if you hit send",
    accent: "green",
  },
];

export default function UseCasesSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-violet">See it in action</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            The kind of thing it handles every day.
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">
            Real flows the software actually runs — not concept art. Click one
            to see what SafePersonalAI does with it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.key} delay={i * 90}>
              <UseCaseCard c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ c }: { c: Case }) {
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
