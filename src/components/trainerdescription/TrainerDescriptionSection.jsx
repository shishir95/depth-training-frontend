"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrainerHeroSection({
  name = "John Smith",
  role = "Trainer",
  photo = "/assets/image.png", // path inside /public
  paragraphs = [
    "John Smith is a dedicated fitness professional passionate about helping clients unlock their full potential through customized training programs rooted in science and performance.",
    "At Depth Training, John integrates functional training, corrective exercise, and evidence-based methods to ensure every session delivers measurable progress. He believes in a holistic approach—balancing strength, mobility, and recovery—to help clients perform at their best both inside and outside the gym.",
  ],
  ctaHref = "/book",
  ctaText = "Book Now",
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#05030f] to-black py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.28),_transparent_60%)] opacity-80 blur-3xl"
      />
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28 gap-10">
        {/* Image block */}
        <div className="relative w-full max-w-[500px] h-[520px] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Text content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {name}
          </h2>
          <p className="text-xl text-[var(--bg-primary)] font-medium mb-6">
            {role}
          </p>

          <div className="space-y-4 text-neutral-300 leading-relaxed mb-8">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Link
            href={ctaHref}
            className="inline-flex items-center rounded-md bg-[var(--bg-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 transition"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Optional background accent (blur glow) */}
    </section>
  );
}
