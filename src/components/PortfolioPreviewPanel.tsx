// Stylized mockup of the real Wealth dashboard's portfolio/holdings view —
// distinct from WealthPreviewPanel's forward-looking cash-flow forecast.
const holdings = [
  { label: "Equities ETF", pct: 48, color: "bg-green" },
  { label: "Bonds", pct: 27, color: "bg-violet" },
  { label: "Cash reserve", pct: 16, color: "bg-text-tertiary" },
  { label: "Individual stocks", pct: 9, color: "bg-amber" },
];

export default function PortfolioPreviewPanel() {
  let cumulative = 0;

  return (
    <div className="grain relative mx-auto w-[24rem] max-w-full overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          Portfolio
        </span>
      </div>

      <div className="p-5">
        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-bg-raised">
          {holdings.map((h) => {
            const el = (
              <div
                key={h.label}
                className={h.color}
                style={{ width: `${h.pct}%` }}
              />
            );
            cumulative += h.pct;
            return el;
          })}
        </div>

        <div className="mt-4 space-y-2.5">
          {holdings.map((h) => (
            <div key={h.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${h.color}`} />
                <span className="text-text-secondary">{h.label}</span>
              </div>
              <span className="font-mono text-xs text-text-tertiary">{h.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>From your broker's export.</span>
          <span className="font-mono text-text-secondary">4 holdings</span>
        </div>
      </div>
    </div>
  );
}
