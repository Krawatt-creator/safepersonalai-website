"use client";

import Reveal from "./Reveal";
import UseCaseCard, { type Case } from "./UseCaseCard";

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
    inputLabel: "New email from Georg",
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
