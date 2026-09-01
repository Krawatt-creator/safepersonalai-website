import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import UseCasesSection from "@/components/UseCasesSection";
import OperationalPreviewPanel from "@/components/OperationalPreviewPanel";
import SettingsPreviewPanel from "@/components/SettingsPreviewPanel";
import Reveal from "@/components/Reveal";
import MessageFlowPreview from "@/components/MessageFlowPreview";

export const metadata: Metadata = {
  title: "Base — Operational",
  description:
    "Inbox, calendar, iMessage, and to-dos — handled and drafted for you, included with every SafePersonalAI install.",
};

export default function OperationalPage() {
  return (
    <ModulePageShell
      accent="green"
      name="Base"
      tagline="Your inbox, calendar, and to-dos — handled, never surprised."
      intro="The part of SafePersonalAI every install starts with. It reads what actually arrives — email, iMessage, a photographed invoice, a voice memo — works out what needs doing, and drafts it. You decide what happens next."
      priceLabel="€49"
      priceNote="one-time purchase"
      ctaLabel="Get SafePersonalAI"
      ctaHref="/#pricing"
      steps={[
        {
          title: "It reads",
          body: "Email, iMessage, a photographed invoice, a voice memo — understood in whatever language and format it arrived in.",
        },
        {
          title: "You approve",
          body: "Every draft lands in one Pending Actions queue. Approve, snooze, reject, or correct it in your own words.",
        },
        {
          title: "It acts",
          body: "Only then does anything happen — a reply gets sent, an event lands on your calendar, a document gets filed.",
        },
      ]}
      features={[
        {
          title: "Inbox triage, drafted for you",
          body: "Reads new mail, works out what needs a reply, and drafts it in your language and your usual tone — you send it, or you don't.",
        },
        {
          title: "Calendar events without the awkwardness",
          body: "Creates events from an email or a text you sent yourself. It can't invite anyone else to it — that capability simply isn't in the software.",
        },
        {
          title: "To-dos that actually remind you",
          body: "Deadlines get color-coded and nudged before they're overdue — synced to Apple Reminders too, if you want them there.",
        },
        {
          title: "One queue for every decision",
          body: "Every proposed action — a reply, an event, a filed document, a tracked payment — lands in the same Pending Actions queue. Approve, snooze, reject, or correct it in your own words.",
        },
        {
          title: "Understands however it arrives",
          body: "A typed message, a voice memo, a photo of a bill — all handled the same way: understood, then staged, never acted on without you.",
        },
        {
          title: "Runs on your own AI key — or none at all",
          body: "A local Ollama model costs nothing, ever. Prefer Anthropic, OpenAI, or Gemini? Connect your own key and pay them directly — we're never in the middle.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium text-green">What you actually see</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-balance text-text sm:text-3xl">
              One calm queue for every decision.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              SafePersonalAI reads what arrives, prepares a clear suggestion, and keeps the final decision in your hands.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <div className="space-y-4">
              <OperationalPreviewPanel />
              <SettingsPreviewPanel />
              <MessageFlowPreview />
            </div>
          </Reveal>
        </div>
      </section>
      <UseCasesSection />
    </ModulePageShell>
  );
}
