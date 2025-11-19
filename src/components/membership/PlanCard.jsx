"use client";

export default function PlanCard({
  price = "0",
  period = "/month",
  title = "Free Trial",
  features = [],
  highlighted = true,
  badge,
  onChoose,
}) {
  const cardClasses = highlighted
    ? "border-[var(--depth-accent)]/60 bg-gradient-to-br from-[var(--depth-accent)]/15 via-[#0d0611] to-black shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
    : "border-white/10 bg-[var(--depth-card)]/80 hover:border-[var(--depth-accent-soft)]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]";

  return (
    <div
      className={`relative w-full max-w-sm overflow-hidden rounded-3xl border p-6 transition ${cardClasses}`}
    >
      {highlighted && (
        <span className="absolute right-4 top-4 inline-flex rounded-full bg-[var(--depth-accent)]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_12px_rgba(241,96,85,0.5)]">
          {badge ?? "Most Popular"}
        </span>
      )}
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm text-[var(--depth-muted)]">{period}</span>
      </div>
      <h4 className="mt-2 text-xl font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)] shadow-[0_0_12px_rgba(241,96,85,0.6)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onChoose?.(title)}
        className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
          highlighted
            ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:bg-zinc-200"
            : "border border-white/20 text-white hover:border-[var(--depth-accent)] hover:text-[var(--depth-accent)]"
        }`}
      >
        Choose plan
      </button>
    </div>
  );
}
