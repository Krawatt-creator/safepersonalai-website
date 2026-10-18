// A plain window around a real screenshot of the app. Our own drawing of a
// window, not Apple artwork: Apple's device images (MacBook bezels) are licensed
// only for App Store apps, and the Mac app is sold outside the App Store.
export default function WindowFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-40px_rgba(8,114,237,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 truncate text-xs text-text-tertiary">{title}</span>
      </div>
      {children}
    </div>
  );
}
