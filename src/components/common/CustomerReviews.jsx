"use client";

import { useEffect, useState, useCallback } from "react";
import { TESTIMONIALS } from "@/data/testimonials";

function TestimonialCard({ testimonial }) {
  const t = testimonial;

  return (
    <article
      className="
        relative overflow-hidden
        max-w-xl mx-auto
        rounded-[32px] border-[6px] border-white/90
        bg-[var(--depth-card)] text-center
        shadow-xl shadow-black/50
        transition-transform transition-shadow duration-300 ease-out
        hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]
        hover:border-white
      "
    >
      <p className="relative z-10 px-10 pt-10 pb-6 text-sm leading-relaxed text-white">
        {t.text}
      </p>

      {/* chrome lines */}
      <div className="pointer-events-none absolute left-10 top-2 h-1.5 w-12 rounded-full bg-white" />
      <div className="pointer-events-none absolute left-2 top-16 h-12 w-1.5 rounded-full bg-white" />
      <div className="pointer-events-none absolute right-10 bottom-2 h-1.5 w-12 rounded-full bg-white" />
      <div className="pointer-events-none absolute right-2 bottom-16 h-12 w-1.5 rounded-full bg-white" />

      <div className="relative z-10 flex items-center justify-center gap-3 pb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-black/30">
          <img src={t.avatar} alt={t.name} className="h-8 w-8 object-contain" />
        </div>
        <div className="text-left">
          <h6 className="text-sm font-semibold text-white">{t.name}</h6>
          <span className="text-[11px] uppercase tracking-wide text-white/80">
            {t.role}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const max = TESTIMONIALS.length;

  // --- 1. Desktop / mobile breakpoint ---
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024); // lg+
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const visibleCount = isDesktop ? Math.min(3, max) : 1;

  // --- 2. Navigation helpers (memoized so effect deps are stable) ---
  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % max);
  }, [max]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + max) % max);
  }, [max]);

  // --- 3. Autoplay with hover pause ---
  useEffect(() => {
    if (max <= 1 || isHovering) return;

    const id = setInterval(goNext, 4000); // 4 seconds
    return () => clearInterval(id);
  }, [max, isHovering, goNext]);

  // --- 4. Which testimonials to show ---
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i += 1) {
    visibleTestimonials.push(TESTIMONIALS[(index + i) % max]);
  }

  return (
    <section className="w-full bg-[var(--depth-accent)] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.15em]">
            Testimonials
          </h2>
          <p className="mt-3 text-sm text-white/90 sm:text-base">
            What our clients say about training and rehab at Depth.
          </p>
        </header>

        {/* Hover pause is attached to the actual cards row */}
        <div
          className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-1/3 flex justify-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-[var(--depth-card)] text-white transition hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <span
                key={t.id}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-[var(--depth-card)] text-white transition hover:bg-white/10"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
