// One real screen of the Mac app (demo household, marketing/app_demo) in a plain window frame.
export default function AppShot({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-40px_rgba(8,114,237,0.35)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 truncate text-xs text-text-tertiary">{title}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are not optimized (see next.config.ts) */}
      <img src={src} alt={alt} width={1800} height={1169} className="block w-full" />
    </div>
  );
}
