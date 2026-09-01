"use client";

import { useMemo, useState } from "react";

const points = [
  { day: "Mon", inbox: 4, calendar: 2, todos: 3, voice: 1 },
  { day: "Tue", inbox: 2, calendar: 1, todos: 4, voice: 0 },
  { day: "Wed", inbox: 5, calendar: 3, todos: 2, voice: 2 },
  { day: "Thu", inbox: 3, calendar: 4, todos: 5, voice: 1 },
  { day: "Fri", inbox: 6, calendar: 2, todos: 3, voice: 2 },
  { day: "Sat", inbox: 1, calendar: 3, todos: 1, voice: 1 },
  { day: "Sun", inbox: 2, calendar: 1, todos: 2, voice: 0 },
];

const filters = [
  ["all", "All activity"],
  ["inbox", "Inbox"],
  ["calendar", "Calendar"],
  ["todos", "To-dos"],
  ["voice", "Voice"],
] as const;

export default function ActivityOverview() {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("all");
  const [period, setPeriod] = useState("7 days");
  const values = useMemo(() => points.map((point) => filter === "all" ? point.inbox + point.calendar + point.todos + point.voice : point[filter]), [filter]);
  const total = values.reduce((sum, value) => sum + value, 0);
  const max = Math.max(...values, 1);

  return <section className="border-y border-border bg-bg-raised/40 py-10" aria-labelledby="activity-overview-heading">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-medium text-green">Live overview · illustrative data</p><h2 id="activity-overview-heading" className="mt-2 text-xl font-semibold tracking-tight text-text sm:text-2xl">A week at a glance</h2><p className="mt-2 max-w-lg text-sm text-text-secondary">A compact view of what SafePersonalAI prepared, before you open any one use case.</p></div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card p-1" aria-label="Activity period">{["7 days", "30 days"].map((choice) => <button key={choice} type="button" aria-pressed={period === choice} onClick={() => setPeriod(choice)} className={`rounded-full px-3 py-1.5 text-[11px] transition ${period === choice ? "bg-green text-white" : "text-text-tertiary hover:text-text"}`}>{choice}</button>)}</div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_220px]">
        <div className="rounded-2xl border border-border bg-bg-card p-4"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter activity type">{filters.map(([key, label]) => <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)} className={`rounded-full border px-3 py-1.5 text-[11px] transition ${filter === key ? "border-green/45 bg-green/10 text-green" : "border-border text-text-tertiary hover:border-border-strong hover:text-text"}`}>{label}</button>)}</div><div className="mt-6 flex h-28 items-end gap-2 sm:gap-4">{values.map((value, index) => <div key={points[index].day} className="flex min-w-0 flex-1 flex-col items-center gap-2"><div className="flex h-24 w-full items-end rounded-md bg-bg-raised"><span className="w-full rounded-md bg-green/75 transition-[height] duration-300" style={{ height: `${Math.max(10, (value / max) * 100)}%` }} aria-label={`${points[index].day}: ${value} prepared`} /></div><span className="text-[10px] text-text-tertiary">{points[index].day}</span></div>)}</div></div>
        <div className="rounded-2xl border border-border bg-bg-card p-4"><p className="text-xs text-text-tertiary">{filter === "all" ? "All activity" : filters.find(([key]) => key === filter)?.[1]} · {period}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-text">{total}</p><p className="text-xs text-text-secondary">items prepared</p><div className="mt-4 space-y-2 text-[11px] text-text-secondary"><div className="flex justify-between"><span>Ready for review</span><strong className="text-green">{Math.max(1, Math.round(total * .35))}</strong></div><div className="flex justify-between"><span>Already approved</span><strong className="text-text">{Math.max(0, total - Math.max(1, Math.round(total * .35)))}</strong></div></div><p className="mt-4 border-t border-border pt-3 text-[10px] leading-relaxed text-text-tertiary">Demo values only. A real app view uses your local activity log.</p></div>
      </div>
    </div>
  </section>;
}
