export function StatTile({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="rounded-lg border border-subtle bg-white p-5 shadow-xs">
      <div className="font-mono text-[11px] uppercase tracking-[.1em] text-muted">{label}</div>
      <div className="mt-3 font-mono text-[28px] font-medium tracking-[-0.01em] text-strong tabular-nums">{value}</div>
      {delta && <div className="mt-1.5 text-[13px] font-semibold text-positive-600">▲ {delta}</div>}
    </div>
  );
}
