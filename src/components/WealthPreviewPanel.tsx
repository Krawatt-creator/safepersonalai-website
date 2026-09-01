// Stylized mockup of the real Wealth dashboard's forecast/guardrail view —
// built from the product's own tokens, not a screenshot of real balances.
const months = [
  { label: "Sep", value: 62 },
  { label: "Oct", value: 58 },
  { label: "Nov", value: 45 },
  { label: "Dec", value: 51 },
  { label: "Jan", value: 39 },
  { label: "Feb", value: 33 },
];

export default function WealthPreviewPanel() {
  const max = Math.max(...months.map((m) => m.value));

  return (
    <div className="grain relative min-h-[360px] overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <PreviewChrome title="Cash-flow forecast" />

      <div className="p-5">
        <div className="rounded-xl border border-border bg-bg-raised p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-xs text-text-tertiary">Projected balance, next 6 months</p>
            <p className="font-mono text-xs text-text-tertiary">EUR</p>
          </div>
          <div className="mt-4 flex h-24 items-end gap-2.5">
            {months.map((m) => (
              <div key={m.label} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-md ${
                    m.value < 40 ? "bg-amber/70" : "bg-green/70"
                  }`}
                  style={{ height: `${(m.value / max) * 100}%` }}
                />
                <span className="text-[10px] text-text-tertiary">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-amber/30 bg-amber/10 px-4 py-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
          <p className="text-xs text-text-secondary">
            Guardrail warning — projected close to your threshold in February.
          </p>
        </div>
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Forecast, not just a running total.</span>
          <span className="font-mono text-text-secondary">6 mo. window</span>
        </div>
      </div>
    </div>
  );
}
import PreviewChrome from "./PreviewChrome";
