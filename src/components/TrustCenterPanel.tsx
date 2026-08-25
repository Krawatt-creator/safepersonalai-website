"use client";

// Stylized mockup of the real Trust Center dashboard page (Apple System
// Settings-style connection matrix, not a shield/cybersecurity aesthetic)
// — same "mockup built from the actual product's own tokens" approach as
// ProductPanel, not a screenshot of live personal data.
import { useState } from "react";

type Status = "connected" | "local" | "not-connected";

const connections: { icon: string; label: string; detail: string; status: Status }[] = [
  { icon: "✉️", label: "Gmail", detail: "Read + draft replies", status: "connected" },
  { icon: "📅", label: "Google Calendar", detail: "Read + create events", status: "connected" },
  { icon: "🗂️", label: "Google Drive", detail: "File statements & documents", status: "connected" },
  { icon: "💬", label: "iMessage", detail: "Read locally on your Mac only", status: "local" },
  { icon: "🧠", label: "AI provider", detail: "Your own key — never shared with us", status: "connected" },
];

const statusMeta: Record<Status, { label: string; dot: string; text: string }> = {
  connected: { label: "Connected", dot: "bg-green", text: "text-green" },
  local: { label: "Local only", dot: "bg-violet", text: "text-violet" },
  "not-connected": { label: "Not connected", dot: "bg-text-tertiary", text: "text-text-tertiary" },
};

export default function TrustCenterPanel() {
  const [checkedAt] = useState("just now");

  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          Trust Center
        </span>
      </div>

      <div className="space-y-2.5 p-5">
        {connections.map((c) => {
          const meta = statusMeta[c.status];
          return (
            <div
              key={c.label}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-raised px-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="text-base leading-none">{c.icon}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text">{c.label}</p>
                  <p className="truncate text-xs text-text-tertiary">{c.detail}</p>
                </div>
              </div>
              <span className={`flex shrink-0 items-center gap-1.5 text-xs font-medium ${meta.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                {meta.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Checked {checkedAt} — you can look any time.</span>
          <span className="font-mono text-text-secondary">5 items</span>
        </div>
      </div>
    </div>
  );
}
