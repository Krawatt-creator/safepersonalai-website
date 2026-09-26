// Stylized mockup of the real macOS notification a tracked fare firing
// actually looks like — an actual rumps.notification() call, checked once
// a day in the background, distinct from TravelPreviewPanel's list view
// of everything being watched.
export default function DealAlertPanel() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="grain relative overflow-hidden rounded-[28px] border border-border-strong bg-bg-card p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
        <div className="rounded-[22px] bg-bg-raised px-4 py-5">
          <p className="text-center text-[11px] text-text-tertiary">Now</p>

          <div className="mt-3 flex items-start gap-3 rounded-2xl border border-green/30 bg-green-dim px-4 py-3.5">
            <span className="mt-0.5 text-xl leading-none">✈️</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-text">SafePersonalAI</p>
              <p className="mt-1 text-sm leading-snug text-text-secondary">
                Berlin → Lisbon: 128 EUR (under your 140 EUR alert).
              </p>
              <p className="mt-1.5 text-xs text-text-tertiary">
                Nothing booked. Just letting you know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
