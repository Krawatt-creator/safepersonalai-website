"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need my own Claude, OpenAI, or Gemini account?",
    a: "Yes — SafePersonalAI understands your messages by sending them to an AI provider you connect yourself, and you pay that provider directly at their normal price. If you'd rather not use a paid API, it also works with a local Ollama model at no cost per message, entirely on your own Mac.",
  },
  {
    q: "What if it misreads something or drafts the wrong thing?",
    a: "That's exactly what the approval step is for. Nothing is sent, filed, scheduled, or paid until you click Approve on that specific action — you can also reject it, snooze it, or correct it in your own words before anything happens.",
  },
  {
    q: "Does my data train anyone's AI model?",
    a: "We don't train anything — there's no SafePersonalAI model. Whether a message you send to your chosen AI provider is used for their own training depends on that provider's own policy (most API-tier usage, unlike consumer chat apps, is excluded by default) — check the provider you connect for specifics.",
  },
  {
    q: "Does it run in the cloud, or on my machine?",
    a: "On your machine. SafePersonalAI is Mac software today, not a hosted web app — it needs your Mac to be on to check for new messages and act on your approvals. There's no SafePersonalAI server holding your data in the meantime.",
  },
  {
    q: "Can it send a message, invite someone, or move money without me?",
    a: "No. It can't email or notify anyone but you, can't add attendees to a calendar event, and can't execute a financial transaction — those aren't policies we ask you to trust, they're capabilities the software's tools simply don't have.",
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
