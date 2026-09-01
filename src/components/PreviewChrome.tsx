export default function PreviewChrome({ title }: { title: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-3.5">
      <span className="grid h-6 w-6 place-items-center rounded-md bg-green text-xs font-bold text-white">✓</span>
      <span className="text-xs font-medium text-text-tertiary">SafePersonalAI</span>
      <span className="text-text-tertiary">·</span>
      <span className="text-xs font-medium text-text">{title}</span>
      <span className="ml-auto rounded-full border border-border px-2 py-0.5 text-[10px] text-text-tertiary">Illustrative preview</span>
    </div>
  );
}
