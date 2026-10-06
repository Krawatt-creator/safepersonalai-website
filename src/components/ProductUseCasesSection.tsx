"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { moduleMeta, topics } from "@/lib/usecases-data";
import { fill } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";

type ModuleKey = keyof typeof moduleMeta;

const moduleOrder: ModuleKey[] = ["operational", "travel", "wealth"];

export default function ProductUseCasesSection({
  t = en.useCases,
}: {
  t?: Dictionary["useCases"];
}) {
  const [selected, setSelected] = useState<ModuleKey>("operational");

  return (
    <section id="use-cases" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-green">{t.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-text-secondary text-pretty">{t.intro}</p>
            </div>
            <Link
              href="/usecases"
              className="shrink-0 text-sm font-medium text-text-secondary underline-offset-4 transition hover:text-text hover:underline"
            >
              {t.exploreAll}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-border bg-bg-raised lg:grid-cols-[260px_1fr]">
            <div
              className="flex gap-2 overflow-x-auto border-b border-border p-3 lg:flex-col lg:border-r lg:border-b-0 lg:p-4"
              role="tablist"
              aria-label={t.tabsLabel}
            >
              {moduleOrder.map((key) => {
                const item = t.modules[key];
                const active = selected === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    id={`module-tab-${key}`}
                    aria-selected={active}
                    aria-controls={`module-use-cases-${key}`}
                    onClick={() => setSelected(key)}
                    className={`min-w-44 rounded-2xl border px-4 py-4 text-left transition lg:min-w-0 ${
                      active
                        ? "border-border-strong bg-bg-card text-text shadow-[0_18px_45px_-30px_rgba(0,0,0,0.8)]"
                        : "border-transparent text-text-secondary hover:bg-bg-card/60 hover:text-text"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold">{item.name}</span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          key === "travel" ? "bg-violet" : "bg-green"
                        }`}
                      />
                    </span>
                    <span className="mt-1 block text-[11px] text-text-tertiary">
                      {item.label}
                    </span>
                  </button>
                );
              })}

              <div className="mt-auto hidden rounded-2xl border border-border bg-bg p-4 lg:block">
                <p className="text-xs font-medium text-text">{t.queueTitle}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-tertiary">
                  {t.queueBody}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-8">
              {/* All three groups are written into the page. The two that are
                  not selected are only hidden, so every use case and its link
                  is there for a reader that does not click. */}
              {moduleOrder.map((key) => {
                const meta = t.modules[key];
                const moduleTopics = topics.filter((topic) => topic.module === key);
                return (
                  <div
                    key={key}
                    id={`module-use-cases-${key}`}
                    role="tabpanel"
                    aria-labelledby={`module-tab-${key}`}
                    className={selected === key ? "" : "hidden"}
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              key === "travel" ? "bg-violet" : "bg-green"
                            }`}
                          />
                          <p className="text-xs font-medium text-text-tertiary">{meta.label}</p>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text">
                          {meta.name}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                          {meta.description}
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-border px-3 py-1.5 text-xs text-text-tertiary">
                        {fill(t.practicalUses, { n: moduleTopics.length })}
                      </span>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {moduleTopics.map((topic) => {
                        // The use-case pages themselves are English for now;
                        // their title and one-line summary are translated here.
                        const text = t.topics[topic.slug] ?? topic;
                        return (
                          <Link
                            key={topic.slug}
                            href={`/usecases/${topic.slug}`}
                            className="group flex min-h-32 flex-col rounded-2xl border border-border bg-bg p-5 transition hover:-translate-y-0.5 hover:border-border-strong"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <span className="text-lg leading-none" aria-hidden="true">
                                {topic.icon}
                              </span>
                              <span className="text-xs text-text-tertiary transition group-hover:translate-x-0.5 group-hover:text-text">
                                →
                              </span>
                            </div>
                            <h4 className="mt-4 text-sm font-semibold text-text">{text.title}</h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
                              {text.friction}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              <p className="mt-6 text-xs leading-relaxed text-text-tertiary">{t.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
