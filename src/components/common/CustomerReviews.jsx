"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";

function TestimonialCard({ testimonial }) {
  const t = testimonial;

  return (
    <article
      className="
        relative overflow-hidden
        rounded-[32px] border-[6px] border-white/90
        bg-[var(--depth-card)] text-center
        shadow-xl shadow-black/40
      "
    >
      <p className="relative z-10 px-8 pt-10 pb-6 text-sm leading-relaxed text-white">
        {t.text}
      </p>

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

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = TESTIMONIALS.length;
  const visibleCount =
    max <= 2 ? max : isDesktop ? 2 : 1;

  const visibleTestimonials = [];

  for (let i = 0; i < visibleCount; i += 1) {
    visibleTestimonials.push(TESTIMONIALS[(index + i) % max]);
  }

  const goPrev = () => setIndex((prev) => (prev - 1 + max) % max);
  const goNext = () => setIndex((prev) => (prev + 1) % max);

  return (
    <section className="w-full bg-[var(--depth-accent)] py-16 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.15em]">
            Testimonials
          </h2>
          <p className="mt-3 text-sm text-white/90 sm:text-base">
            What our clients say about training and rehab at Depth.
          </p>
        </header>

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full max-w-md md:w-1/2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

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
