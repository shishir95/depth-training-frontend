"use client";

import React from "react";

const steps = [
  {
    title: "Specific",
    desc: "Establish individual training needs and get matched with the right trainer for you.",
  },
  {
    title: "Measurable",
    desc: "Define clear metrics so you and your coach can track progress week over week.",
  },
  {
    title: "Actionable",
    desc: "Receive a plan that fits your schedule, equipment, and recovery needs.",
  },
];

export default function QuestionSection() {
  const [i, setI] = React.useState(0);
  const prev = () => setI((p) => (p - 1 + steps.length) % steps.length);
  const next = () => setI((p) => (p + 1) % steps.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const step = steps[i];

  return (
    <section className="w-full bg-zinc-800 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-white">
          What Does Personal Training Look Like at Depth?
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-300">
          Let us guide and coach you on your health and fitness journey to
          achieve your ultimate goal.
        </p>

        <div className="relative mt-8 sm:mt-10">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 sm:-left-10 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-500 text-rose-500 hover:bg-rose-500/10 transition"
          >
            <ArrowLeft />
          </button>

          {/* Card */}
          <div className="mx-12 sm:mx-0 rounded-xl border border-rose-500/70 bg-[#121212] px-6 py-6 sm:py-8 shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="flex items-start gap-3">
              {/* Lock icon size hard to defeat global svg rules */}
              <span className="inline-grid h-6 w-6 place-items-center shrink-0 text-rose-500">
                <Check width={24} height={24} />
              </span>

              <div className="min-w-0">
                <h3 className="text-2xl font-semibold text-rose-400">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-zinc-200">{step.desc}</p>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 sm:-right-10 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-500 text-rose-500 hover:bg-rose-500/10 transition"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to step ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                idx === i ? "bg-rose-500" : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- icons with hard width/height (prevents global svg width:100%) --- */
function ArrowLeft({ width = 20, height = 20, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function ArrowRight({ width = 20, height = 20, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
function Check({ width = 24, height = 24, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
