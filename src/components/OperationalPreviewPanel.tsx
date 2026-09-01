// Stylized preview of the Base/Operational action center. All values are
// illustrative and intentionally labelled; this is a product explanation,
// never a representation of a customer's data.
const actions = [
  { icon: "✉️", title: "Draft reply", detail: "School office · German", tone: "bg-green/15 text-green" },
  { icon: "📅", title: "Calendar change", detail: "Dentist · review before saving", tone: "bg-amber/15 text-amber" },
  { icon: "✓", title: "Task prepared", detail: "Call the landlord · tomorrow", tone: "bg-violet/15 text-violet" },
];

export default function OperationalPreviewPanel() {
  return (
    <div className="grain relative min-h-[360px] overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">SafePersonalAI · Action center</span>
        <span className="ml-auto rounded-full border border-border px-2 py-0.5 text-[10px] text-text-tertiary">Illustrative preview</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div><p className="text-xs text-text-tertiary">Today</p><p className="mt-1 text-lg font-semibold text-text">Your review queue</p></div>
          <span className="rounded-full bg-green/10 px-2.5 py-1 text-[11px] font-medium text-green">3 ready</span>
        </div>
        <div className="mt-4 space-y-2">
          {actions.map((action) => (
            <div key={action.title} className="flex items-center gap-3 rounded-xl border border-border bg-bg-raised px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-border-strong">
              <span className={`grid h-8 w-8 place-items-center rounded-lg text-sm ${action.tone}`} aria-hidden="true">{action.icon}</span>
              <div className="min-w-0 flex-1"><p className="text-xs font-semibold text-text">{action.title}</p><p className="mt-0.5 truncate text-[11px] text-text-tertiary">{action.detail}</p></div>
              <span className="text-xs text-text-tertiary">›</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-green/25 bg-green/10 px-3.5 py-3"><span className="h-1.5 w-1.5 rounded-full bg-green" /><p className="text-xs text-text-secondary">Nothing happens until you approve it.</p></div>
      </div>
      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Prepared locally for your review.</span>
          <span className="font-mono text-text-secondary">3 items</span>
        </div>
      </div>
    </div>
  );
}
