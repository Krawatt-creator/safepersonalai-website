import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { moduleMeta, topics } from "@/lib/usecases-data";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Concrete, real examples of what SafePersonalAI actually does — not concept art, the flows it really runs.",
};

export default function UseCasesIndexPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-radial-glow border-b border-border py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/"
              className="text-sm text-text-secondary transition hover:text-text"
            >
              ← Home
            </Link>
            <p className="mt-6 text-sm font-medium text-violet">Use cases</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
              What it actually does, in your own words.
            </h1>
            <p className="mt-5 max-w-xl text-text-secondary text-pretty">
              Fifteen practical scenarios, grouped by the base product and
              optional modules. Each one is grounded in a pipeline already
              proven in the personal system; commercial availability is
              confirmed separately at launch.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl space-y-16 px-6">
            {(Object.keys(moduleMeta) as Array<keyof typeof moduleMeta>).map(
              (moduleKey) => {
                const meta = moduleMeta[moduleKey];
                const moduleTopics = topics.filter((t) => t.module === moduleKey);
                return (
                  <section key={moduleKey} aria-labelledby={`${moduleKey}-heading`}>
                    <Reveal>
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className={`text-xs font-medium ${meta.accent === "violet" ? "text-violet" : "text-green"}`}>
                            {meta.label}
                          </p>
                          <h2 id={`${moduleKey}-heading`} className="mt-2 text-2xl font-semibold text-text">
                            {meta.name}
                          </h2>
                          <p className="mt-2 max-w-xl text-sm text-text-secondary">
                            {meta.description}
                          </p>
                        </div>
                        <p className="text-xs text-text-tertiary">
                          {moduleTopics.length} use cases
                        </p>
                      </div>
                    </Reveal>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {moduleTopics.map((t, i) => (
                        <Reveal key={t.slug} delay={(i % 3) * 70}>
                          <Link
                            href={`/usecases/${t.slug}`}
                            className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised p-5 transition duration-300 hover:-translate-y-1 hover:border-border-strong"
                          >
                            <span className="text-xl leading-none">{t.icon}</span>
                            <h3 className="mt-3 text-sm font-semibold text-text">{t.title}</h3>
                            <p className="mt-2 flex-1 text-xs leading-relaxed text-text-tertiary">{t.friction}</p>
                            <span className="mt-4 text-xs font-medium text-green">See examples →</span>
                          </Link>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                );
              },
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
