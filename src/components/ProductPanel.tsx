"use client";

// Stylized, INTERACTIVE mockup of the real Operational dashboard's Pending
// Actions card, built from the actual product's own design tokens
// (card/border/green/violet) rather than generic UI-kit chrome or a live
// screenshot (deliberate — see website memory notes on why this stays a
// mockup, not a screenshot of real personal data).
import { useState } from "react";
import { fill } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Status = "pending" | "approved" | "rejected";

type Row = {
  id: string;
  icon: string;
  title: string;
  detail: string;
  accent: "green" | "violet";
};

// The three rows' wording comes from the dictionary (t.rows, same order).
const rowFrames: Pick<Row, "id" | "icon" | "accent">[] = [
  { id: "todo", icon: "✉️", accent: "green" },
  { id: "cal", icon: "📅", accent: "violet" },
  { id: "bill", icon: "🧾", accent: "green" },
];

type PanelText = Dictionary["panel"];

export default function ProductPanel({ t }: { t: PanelText }) {
  const initialRows: Row[] = rowFrames.map((frame, i) => ({ ...frame, ...t.rows[i] }));
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const resolve = (id: string, status: Status) => {
    setStatuses((s) => ({ ...s, [id]: status }));
    window.setTimeout(() => {
      setCollapsed((c) => ({ ...c, [id]: true }));
    }, 850);
  };

  const reset = () => {
    setStatuses({});
    setCollapsed({});
  };

  const waiting = initialRows.filter((r) => !statuses[r.id]).length;
  const allDone = waiting === 0;

  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-green/70">
          <span className="absolute inset-0 animate-ping rounded-full bg-green/60 motion-reduce:hidden" />
        </span>
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          {t.title}
        </span>
        <span className="ml-auto rounded-full border border-border px-2 py-0.5 text-[10px] text-text-tertiary">
          {t.preview}
        </span>
      </div>

      <div className="space-y-3 p-5">
        {initialRows.map((row) => (
          <PendingRow
            key={row.id}
            row={row}
            t={t}
            status={statuses[row.id] ?? "pending"}
            collapsed={!!collapsed[row.id]}
            onApprove={() => resolve(row.id, "approved")}
            onReject={() => resolve(row.id, "rejected")}
          />
        ))}

        {allDone && (
          <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center">
            <p className="text-sm text-text-secondary">
              {t.allDone}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-3 text-xs font-medium text-green transition hover:brightness-125"
            >
              {t.replay}
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-border px-5 py-4" aria-live="polite">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>{t.footer}</span>
          <span className="shrink-0 pl-3 font-mono text-text-secondary">
            {fill(t.waiting, { n: waiting })}
          </span>
        </div>
      </div>
    </div>
  );
}

function PendingRow({
  row,
  t,
  status,
  collapsed,
  onApprove,
  onReject,
}: {
  row: Row;
  t: PanelText;
  status: Status;
  collapsed: boolean;
  onApprove: () => void;
  onReject: () => void;
}) {
  const dot = row.accent === "green" ? "bg-green" : "bg-violet";

  return (
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        collapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 transition-colors duration-300 ${
            status === "approved"
              ? "border-green/40 bg-green-dim"
              : status === "rejected"
                ? "border-red/30 bg-red/[0.06]"
                : "border-border bg-bg-raised"
          }`}
        >
          <div className="flex min-w-0 items-start gap-3">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <span className="text-base leading-none">{row.icon}</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-text">{row.title}</p>
              <p className="truncate text-xs text-text-tertiary">{row.detail}</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {status === "pending" && (
              <>
                <button
                  type="button"
                  onClick={onReject}
                  aria-label={`${t.reject}: ${row.title}`}
                  className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-text-secondary transition hover:scale-105 hover:border-red/50 hover:text-red active:scale-95 focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2"
                >
                  {t.reject}
                </button>
                <button
                  type="button"
                  onClick={onApprove}
                  aria-label={`${t.approve}: ${row.title}`}
                  className="rounded-full bg-green px-3 py-1.5 text-xs font-medium text-white transition hover:scale-105 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-green focus-visible:outline-offset-2"
                >
                  {t.approve}
                </button>
              </>
            )}
            {status === "approved" && (
              <span className="text-xs font-medium text-green">{t.approved}</span>
            )}
            {status === "rejected" && (
              <span className="text-xs font-medium text-red">{t.rejected}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
