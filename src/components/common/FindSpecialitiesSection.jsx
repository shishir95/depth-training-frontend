// components/FindSpecialtiesSection.jsx
"use client";

import Link from "next/link";

export default function FindSpecialtiesSection({
  title = "Find My Specialities",
  subtitle = "Not sure where to start? Let our AI guide you.",
  ctaLabel = "Click Here",
  href = "#", // pass a URL to navigate
  onClick = undefined, // or pass a function to open your AI/modal
  className = "",
}) {
  return (
    <section
      className={`relative w-full bg-zinc-800 text-white ${className}`}
      aria-label="Find Specialties"
    >
      {/* container */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <p className="mt-3 text-base text-zinc-300 sm:text-lg">{subtitle}</p>

        <div className="mt-8 flex justify-center">
          {onClick ? (
            <button
              type="button"
              onClick={onClick}
              className="rounded-md bg-[var(--bg-primary)] px-6 py-2.5 text-sm font-medium text-white shadow transition hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 active:scale-[0.99]"
            >
              {ctaLabel}
            </button>
          ) : (
            <Link
              href={href}
              className="rounded-md bg-[var(--bg-primary)] px-6 py-2.5 text-sm font-medium text-white shadow transition hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 active:scale-[0.99]"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
