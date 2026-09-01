// Marketing preview of the commercial Settings surface. Values are
// illustrative; the real controls remain local to the packaged app.
import PreviewChrome from "./PreviewChrome";

export default function SettingsPreviewPanel() {
  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <PreviewChrome title="Settings" />
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-raised px-3.5 py-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-green text-xs font-bold text-[#06110c]">SP</span><div className="min-w-0 flex-1"><p className="text-xs font-semibold text-text">Your profile</p><p className="text-[11px] text-text-tertiary">Cosmetic, stored on this browser</p></div><span className="text-[10px] text-text-tertiary">Edit</span></div>
        <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-text">Auto-Approve</p><span className="rounded-full bg-bg-card px-2 py-1 text-[10px] text-text-tertiary">Off by default</span></div><div className="mt-2 flex flex-wrap gap-1.5"><span className="rounded-full border border-border px-2 py-1 text-[10px] text-text-tertiary">To-Dos</span><span className="rounded-full border border-border px-2 py-1 text-[10px] text-text-tertiary">Calendar</span><span className="rounded-full border border-border px-2 py-1 text-[10px] text-text-tertiary">Finance</span></div></div>
        <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-text">Connected Accounts</p><span className="text-[10px] text-text-tertiary">Gmail · Outlook</span></div><div className="mt-2 flex items-center justify-between text-[11px]"><span className="text-text-secondary">Output language</span><span className="font-medium text-green">English</span></div><div className="mt-1 flex items-center justify-between text-[11px]"><span className="text-text-secondary">Calendars</span><span className="font-medium text-green">Google · Apple</span></div></div>
      </div>
      <div className="border-t border-border px-5 py-4"><p className="text-[11px] text-text-tertiary">Every change confirms inline — no full-page reload.</p></div>
    </div>
  );
}
