// components/FindSpecialtiesSection.jsx
"use client";

import Link from "next/link";

export default function FindSpecialtiesSection({
  title = "Find My Specialities",
  subtitle = "Not sure where to start? Let our AI guide you.",
  ctaLabel = "Click Here",
  href = "#",
  onClick = undefined,
  className = "",
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-transparent text-white ${className}`}
      aria-label="Find Specialties"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="rounded-[32px] border border-white/8 bg-[var(--depth-card)]/85 px-6 py-12 text-center shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[var(--depth-muted)]">
            Not sure where to start?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-base text-[var(--depth-muted)] sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-10 flex justify-center">
            {onClick ? (
              <button
                type="button"
                onClick={onClick}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[var(--depth-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(244,63,94,0.35)] transition hover:-translate-y-[1px] hover:bg-[#ff8475] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--depth-accent-soft)]"
              >
                {ctaLabel}
              </button>
            ) : (
              <Link
                href={href}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[var(--depth-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(244,63,94,0.35)] transition hover:-translate-y-[1px] hover:bg-[#ff8475] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--depth-accent-soft)]"
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
