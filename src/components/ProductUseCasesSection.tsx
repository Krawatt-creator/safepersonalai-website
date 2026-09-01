"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { moduleMeta, topics } from "@/lib/usecases-data";

type ModuleKey = keyof typeof moduleMeta;

const moduleOrder: ModuleKey[] = ["operational", "travel", "wealth"];

export default function ProductUseCasesSection() {
  const [selected, setSelected] = useState<ModuleKey>("operational");
  const meta = moduleMeta[selected];
  const visibleTopics = topics.filter((topic) => topic.module === selected);

  return (
    <section id="use-cases" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-green">What it does</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
                Start with everyday work. Add only what you need.
              </h2>
              <p className="mt-4 text-text-secondary text-pretty">
                Base is the Operational foundation. Travel and Wealth extend the
                same private assistant without moving your history or creating
                another account.
              </p>
            </div>
            <Link
              href="/usecases"
              className="shrink-0 text-sm font-medium text-text-secondary underline-offset-4 transition hover:text-text hover:underline"
            >
              Explore all 15 use cases →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-border bg-bg-raised lg:grid-cols-[260px_1fr]">
            <div
              className="flex gap-2 overflow-x-auto border-b border-border p-3 lg:flex-col lg:border-r lg:border-b-0 lg:p-4"
              role="tablist"
              aria-label="Product modules"
            >
              {moduleOrder.map((key) => {
                const item = moduleMeta[key];
                const active = selected === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="module-use-cases"
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
                <p className="text-xs font-medium text-text">One review queue</p>
                <p className="mt-2 text-xs leading-relaxed text-text-tertiary">
                  Every installed module uses the same visible approval
                  boundary. No hidden automation layer.
                </p>
              </div>
            </div>

            <div id="module-use-cases" role="tabpanel" className="p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        selected === "travel" ? "bg-violet" : "bg-green"
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
                  {visibleTopics.length} practical uses
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {visibleTopics.map((topic) => (
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
                    <h4 className="mt-4 text-sm font-semibold text-text">{topic.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
                      {topic.friction}
                    </p>
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-text-tertiary">
                These scenarios are grounded in working personal-system
                pipelines. The release page confirms exactly which capabilities
                are included in each commercial version.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
