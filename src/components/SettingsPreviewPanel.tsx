// Marketing preview of the commercial Settings surface. Values are
// illustrative; the real controls remain local to the packaged app.
export default function SettingsPreviewPanel() {
  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="text-xs font-medium text-text-tertiary">Settings</span>
        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-text-tertiary">Illustrative preview</span>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between rounded-xl border border-border bg-bg-raised px-3.5 py-3">
          <div><p className="text-xs font-semibold text-text">Auto-Approve</p><p className="mt-0.5 text-[11px] text-text-tertiary">You stay in control by default.</p></div>
          <span className="rounded-full bg-bg-card px-2 py-1 text-[10px] text-text-tertiary">Off</span>
        </div>
        <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3">
          <p className="text-xs font-semibold text-text">AI Provider</p>
          <div className="mt-2 flex flex-wrap gap-1.5"><span className="rounded-full border border-green/50 bg-green/10 px-2 py-1 text-[10px] font-medium text-green">Ollama (local)</span><span className="rounded-full border border-border px-2 py-1 text-[10px] text-text-tertiary">Your key</span></div>
        </div>
      </div>
    </div>
  );
}
