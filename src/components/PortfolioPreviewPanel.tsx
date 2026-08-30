// Stylized mockup of the real Wealth dashboard's portfolio/holdings view —
// distinct from WealthPreviewPanel's forward-looking cash-flow forecast.
const holdings = [
  { label: "Equities ETF", pct: 48, color: "bg-green" },
  { label: "Bonds", pct: 27, color: "bg-violet" },
  { label: "Cash reserve", pct: 16, color: "bg-text-tertiary" },
  { label: "Individual stocks", pct: 9, color: "bg-amber" },
];

export default function PortfolioPreviewPanel() {
  return (
    <div className="grain relative mx-auto w-[24rem] max-w-full overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          Portfolio
        </span>
        <span className="ml-auto rounded-full border border-border px-2 py-0.5 text-[10px] text-text-tertiary">
          Illustrative preview
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-5">
          <div
            className="relative h-28 w-28 shrink-0 rounded-full p-[10px] transition-transform duration-300 hover:scale-[1.04]"
            style={{ background: "conic-gradient(#00e599 0 48%, #8e55ea 48% 75%, #6b7280 75% 91%, #ff9f0a 91% 100%)" }}
            role="img"
            aria-label="Portfolio allocation: 48 percent equities ETF, 27 percent bonds, 16 percent cash reserve, 9 percent individual stocks"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-bg-card">
              <span className="font-mono text-lg text-text-primary">100%</span>
              <span className="text-[10px] text-text-tertiary">allocated</span>
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            {holdings.map((h) => (
              <div key={h.label} className="group flex items-center justify-between gap-3 text-sm">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className={`h-2 w-2 shrink-0 rounded-full ring-2 ring-bg-card ${h.color}`} />
                  <span className="truncate text-text-secondary transition-colors group-hover:text-text-primary">{h.label}</span>
                </div>
                <span className="font-mono text-xs text-text-tertiary">{h.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>From your broker&apos;s export.</span>
          <span className="font-mono text-text-secondary">4 holdings</span>
        </div>
      </div>
    </div>
  );
}
