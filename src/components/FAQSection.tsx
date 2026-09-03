"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need my own Claude, OpenAI, or Gemini account?",
    a: "No. You can use Ollama locally on your Mac with no cloud account or API key. If you choose Anthropic, OpenAI, or Gemini, you bring your own account and key and pay that provider directly. SafePersonalAI stores provider credentials locally, sends requests directly to the provider you selected, and never receives or brokers your key. Local and cloud paths are held to the same approval boundary; the local option is clearly labeled if its model needs a second look at an ambiguous result.",
  },
  {
    q: "Isn't this just ChatGPT or Claude with extra steps?",
    a: "No — and it isn't trying to be. SafePersonalAI uses a supported model for understanding, then adds a local action store, deterministic validation, explicit approval, and tightly restricted tools. The initial commercial wedge is email to task or calendar action; broader modules are packaged and released separately.",
  },
  {
    q: "What if it misreads something or drafts the wrong thing?",
    a: "That's exactly what the approval step is for. You see the proposed structured result and its source before dispatch. Ambiguous dates fail closed, calendar changes require an exact reference match, and the commercial tools cannot send email, invite attendees, click links, or move money.",
  },
  {
    q: "Does my data train anyone's AI model?",
    a: "SafePersonalAI does not train a model or receive your inbox content. When you choose a cloud AI provider, the relevant content goes directly from your Mac to that provider under its API terms. Review the provider's current data-use and retention policy before connecting it.",
  },
  {
    q: "Does it run in the cloud, or on my machine?",
    a: "On your machine. SafePersonalAI is Mac software today, not a hosted web app — it needs your Mac to be on to check for new messages and act on your approvals. There's no SafePersonalAI server holding your data in the meantime.",
  },
  {
    q: "What Mac do I need to run SafePersonalAI?",
    a: "The current beta requires a Mac with Apple silicon (M1 or later — including M1/M2/M3/M4 MacBook Air, MacBook Pro, Mac mini, iMac, and Mac Studio). Intel-based Macs are not supported by this build. macOS permission prompts are handled by macOS during setup; no separate SafePersonalAI account is required.",
  },
  {
    q: "Can it send a message, invite someone, or move money without me?",
    a: "No. The commercial runtime has no email-send, attendee, payment, cancellation, or link-clicking capability. Calendar writes explicitly use no attendee notifications, and financial features only record approved information or calculate projections.",
  },
  {
    q: "What happens to my data if I stop using it?",
    a: "It stays exactly where it always was — on your Mac and in your own Google account. Revoke SafePersonalAI's access from your Google Account's security settings at any time, and there's nothing further for it to reach.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Questions people actually ask.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-text">{f.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    className={`h-4 w-4 shrink-0 text-text-tertiary transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-text-secondary">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
