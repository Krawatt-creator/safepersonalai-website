// Stylized mockup of the real Trust Center dashboard page (Apple System
// Settings-style connection matrix, not a shield/cybersecurity aesthetic)
// — same "mockup built from the actual product's own tokens" approach as
// ProductPanel, not a screenshot of live personal data.
import type { Dictionary } from "@/i18n/dictionaries/en";

type Status = "connected" | "local";

// Wording comes from the dictionary (t.rows, same order).
const frames: { icon: string; status: Status }[] = [
  { icon: "✉️", status: "connected" },
  { icon: "📅", status: "connected" },
  { icon: "🗂️", status: "connected" },
  { icon: "💬", status: "local" },
  { icon: "🧠", status: "connected" },
];

const statusStyle: Record<Status, { dot: string; text: string }> = {
  connected: { dot: "bg-green", text: "text-green" },
  local: { dot: "bg-violet", text: "text-violet" },
};

export default function TrustCenterPanel({
  t,
}: {
  t: Dictionary["trust"]["panel"];
}) {
  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          {t.title}
        </span>
      </div>

      <div className="space-y-2.5 p-5">
        {frames.map((frame, i) => {
          const row = t.rows[i];
          const style = statusStyle[frame.status];
          return (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-raised px-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="text-base leading-none">{frame.icon}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text">{row.label}</p>
                  <p className="truncate text-xs text-text-tertiary">{row.detail}</p>
                </div>
              </div>
              <span className={`flex shrink-0 items-center gap-1.5 text-xs font-medium ${style.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                {frame.status === "connected" ? t.connected : t.local}
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between gap-3 text-xs text-text-tertiary">
          <span>{t.footer}</span>
          <span className="shrink-0 font-mono text-text-secondary">{t.items}</span>
        </div>
      </div>
    </div>
  );
}
