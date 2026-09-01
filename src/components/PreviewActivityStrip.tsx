const bars = [32, 48, 40, 72, 58, 86, 64, 76];

export default function PreviewActivityStrip({ label }: { label: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-border bg-bg-card px-5 py-4" aria-label={`${label} activity preview`}>
      <div className="flex items-center justify-between gap-3">
        <div><p className="text-xs font-semibold text-text">Activity at a glance</p><p className="mt-1 text-[11px] text-text-tertiary">Illustrative · last 7 days</p></div>
        <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-text-tertiary">Week</span>
      </div>
      <div className="mt-4 flex h-16 items-end gap-1.5" role="img" aria-label="Illustrative activity bars">
        {bars.map((height, index) => <span key={index} className="flex-1 rounded-t-md bg-green/75" style={{ height: `${height}%` }} />)}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-text-tertiary"><span><b className="text-text">12</b> prepared</span><span><b className="text-text">3</b> awaiting review</span><span><b className="text-text">1</b> needs attention</span></div>
    </div>
  );
}
