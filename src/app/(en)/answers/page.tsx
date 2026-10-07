import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { answers } from "@/lib/answers-data";

export const metadata: Metadata = {
  title: { absolute: "Answers about private AI assistants on the Mac — SafePersonalAI" },
  description:
    "Short, direct answers: a private AI assistant without a subscription, a local model that reads your email, budgeting without a bank login, and whether it is safe to let an AI read your mail.",
  alternates: { canonical: "/answers" },
};

export default function AnswersPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-green">Answers</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
            Questions people ask before they let an AI near their inbox.
          </h1>
          <p className="mt-6 leading-relaxed text-text-secondary">
            Each page answers one question in its first paragraph and then explains it, including
            where SafePersonalAI is the wrong choice.
          </p>
          <ul className="mt-12 divide-y divide-border rounded-2xl border border-border bg-bg-card">
            {answers.map((a) => (
              <li key={a.slug}>
                <Link href={`/answers/${a.slug}`} className="block px-5 py-5 transition hover:bg-bg-raised">
                  <span className="block font-medium text-text">{a.question}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
                    {a.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-text-secondary">
            New here? Start with{" "}
            <Link href="/what-is-safepersonalai" className="text-text underline underline-offset-4">
              What is SafePersonalAI?
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
