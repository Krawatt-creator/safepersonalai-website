// Stylized mockup of the real Travel dashboard's tracked-routes view —
// built from the product's own tokens, not a screenshot of real fares.
const routes = [
  {
    label: "Berlin → Lisbon",
    detail: "Threshold €140 · checked daily",
    price: "€128",
    state: "deal" as const,
  },
  {
    label: "Hamburg → Barcelona",
    detail: "Threshold €160 · checked daily",
    price: "€179",
    state: "waiting" as const,
  },
  {
    label: "Munich → Athens",
    detail: "Flexible ±3 days · open-jaw",
    price: "€151",
    state: "deal" as const,
  },
];

export default function TravelPreviewPanel() {
  return (
    <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 text-xs font-medium text-text-tertiary">
          Tracked Routes
        </span>
      </div>

      <div className="space-y-2.5 p-5">
        {routes.map((r) => (
          <div
            key={r.label}
            className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 ${
              r.state === "deal"
                ? "border-green/40 bg-green-dim"
                : "border-border bg-bg-raised"
            }`}
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-text">{r.label}</p>
              <p className="truncate text-xs text-text-tertiary">{r.detail}</p>
            </div>
            <div className="shrink-0 text-right">
              <p
                className={`font-mono text-sm font-semibold ${
                  r.state === "deal" ? "text-green" : "text-text"
                }`}
              >
                {r.price}
              </p>
              <p className="text-[11px] text-text-tertiary">
                {r.state === "deal" ? "clears threshold" : "watching"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Alerts fire only on a genuine deal.</span>
          <span className="font-mono text-text-secondary">3 routes</span>
        </div>
      </div>
    </div>
  );
}
