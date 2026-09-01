"use client";

// Stylized, INTERACTIVE mockup of the real Operational dashboard's Pending
// Actions card, built from the actual product's own design tokens
// (card/border/green/violet) rather than generic UI-kit chrome or a live
// screenshot (deliberate — see website memory notes on why this stays a
// mockup, not a screenshot of real personal data).
import { useState } from "react";

type Status = "pending" | "approved" | "rejected";

type Row = {
  id: string;
  icon: string;
  title: string;
  detail: string;
  accent: "green" | "violet";
};

const initialRows: Row[] = [
  {
    id: "draft",
    icon: "✉️",
    title: "Draft reply to Taylor — rescheduling Saturday",
    detail: "Understood from your inbox, in German, matching your usual tone",
    accent: "green",
  },
  {
    id: "cal",
    icon: "📅",
    title: "Add “Dentist — 3 Sep, 15:00” to your calendar",
    detail: "Parsed from an iMessage you sent yourself",
    accent: "violet",
  },
  {
    id: "file",
    icon: "🧾",
    title: "File Stadtwerke invoice → House Yearly Invoices / 2026",
    detail: "High-confidence match against your Drive folder rules",
    accent: "green",
  },
];

export default function ProductPanel() {
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
          Pending Actions
        </span>
      </div>

      <div className="space-y-3 p-5">
        {initialRows.map((row) => (
          <PendingRow
            key={row.id}
            row={row}
            status={statuses[row.id] ?? "pending"}
            collapsed={!!collapsed[row.id]}
            onApprove={() => resolve(row.id, "approved")}
            onReject={() => resolve(row.id, "rejected")}
          />
        ))}

        {allDone && (
          <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center">
            <p className="text-sm text-text-secondary">
              All caught up — nothing waiting on you.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-3 text-xs font-medium text-green transition hover:brightness-125"
            >
              ↺ Replay the demo
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Nothing sent, filed, or scheduled until you say go.</span>
          <span className="font-mono text-text-secondary">
            {waiting} waiting
          </span>
        </div>
      </div>
    </div>
  );
}

function PendingRow({
  row,
  status,
  collapsed,
  onApprove,
  onReject,
}: {
  row: Row;
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
                  onClick={onReject}
                  className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-text-secondary transition hover:scale-105 hover:border-red/50 hover:text-red active:scale-95"
                >
                  Reject
                </button>
                <button
                  onClick={onApprove}
                  className="rounded-full bg-green px-3 py-1.5 text-xs font-medium text-[#06110c] transition hover:scale-105 hover:brightness-110 active:scale-95"
                >
                  Approve
                </button>
              </>
            )}
            {status === "approved" && (
              <span className="text-xs font-medium text-green">✓ Approved</span>
            )}
            {status === "rejected" && (
              <span className="text-xs font-medium text-red">✕ Rejected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
