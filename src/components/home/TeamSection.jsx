// components/TeamSection.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// ---- demo data: replace with your CMS/DB data ----
const TEAM = [
  {
    id: 1,
    name: "John Smith",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:john@example.com",
    site: "#",
    view: "#",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "#",
  },
  {
    id: 3,
    name: "Alex Lee",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:alex@example.com",
    site: "#",
    view: "#",
  },
  {
    id: 4,
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:sam@example.com",
    site: "#",
    view: "#",
  },
  {
    id: 5,
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:chris@example.com",
    site: "#",
    view: "#",
  },
  {
    id: 6,
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:morgan@example.com",
    site: "#",
    view: "#",
  },
];

const TABS = ["Physio", "Training", "Rehab"];

// simple inline icons (no extra deps)
const Icon = {
  li: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm3.5 6.25A1.75 1.75 0 1 1 9.25 7.5 1.75 1.75 0 0 1 7.5 9.25zM6 18v-7h3v7H6zm6 0v-4c0-1.105.895-2 2-2s2 .895 2 2v4h3v-4.5c0-2.485-2.015-4.5-4.5-4.5S10 11.015 10 13.5V18h2z" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.217l-10 6.25L2 6.217V6zm0 3.383V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.383l-9.445 5.9a2 2 0 0 1-2.11 0L2 9.383z" />
    </svg>
  ),
  site: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 17.93V18h-2v1.93A8.012 8.012 0 0 1 4.07 13H6v-2H4.07A8.012 8.012 0 0 1 11 4.07V6h2V4.07A8.012 8.012 0 0 1 19.93 11H18v2h1.93A8.012 8.012 0 0 1 13 19.93ZM8 12a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
    </svg>
  ),
  eye: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
    </svg>
  ),
  chevronLeft: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  ),
  chevronRight: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m8.59 16.59 1.41 1.41L16 12 10 6 8.59 7.41 13.17 12z" />
    </svg>
  ),
};

function TeamCard({ person }) {
  return (
    <div className="group relative overflow-visible min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] xl:min-w-[340px] snap-start">
      {/* avatar (floats above card, not clipped) */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2
                  z-20 h-40 w-40 rounded-full bg-zinc-400/80 ring-4 ring-zinc-900
                  flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-20 w-20 text-zinc-700"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
        </svg>
      </div>

      {/* card (pushed down so it doesn’t overlap the avatar) */}
      <div className="mt-40 rounded border border-rose-300/60 bg-zinc-900 p-5 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-white">{person.name}</h3>
        <p className="mt-1 text-lg text-zinc-300">{person.title}</p>

        <div className="mt-5 flex items-center justify-between">
          <a
            href="#book"
            className="rounded-md bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            Book Now
          </a>

          <div className="flex items-center gap-3 text-zinc-200">
            <a
              href={person.li}
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Icon.li className="h-5 w-5" />
            </a>
            <a
              href={person.mail}
              aria-label="Email"
              className="hover:text-white"
            >
              <Icon.mail className="h-5 w-5" />
            </a>
            <a
              href={person.site}
              aria-label="Website"
              className="hover:text-white"
            >
              <Icon.site className="h-5 w-5" />
            </a>
            <a
              href={person.view}
              aria-label="View profile"
              className="hover:text-white"
            >
              <Icon.eye className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [active, setActive] = useState("Physio");
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef(null);

  const items = useMemo(
    () => TEAM.filter((p) => p.tags.includes(active)),
    [active]
  );

  // autoplay: scroll to next snap every 3.5s
  useEffect(() => {
    if (!scrollerRef.current || isPaused) return;
    const el = scrollerRef.current;
    let timer = setInterval(() => {
      const next = el.scrollLeft + el.clientWidth * 0.9; // advance ~1 card
      const max = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: next >= max ? 0 : next, behavior: "smooth" });
    }, 3500);
    return () => clearInterval(timer);
  }, [items.length, isPaused]);

  const go = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9 * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-zinc-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our Team</h2>

          {/* Tabs */}
          <div className="mt-4 flex items-center justify-center gap-6 text-lg">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`pb-1 transition ${
                  active === t
                    ? "font-semibold text-white underline decoration-rose-400 underline-offset-4"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollerRef}
            className="flex flex-wrap justify-center snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {/* hide scrollbar in webkit */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {items.map((p) => (
              <TeamCard key={p.id} person={p} />
            ))}
          </div>

          {/* Controls */}
          <div className="pointer-events-none absolute -bottom-10 right-2 flex gap-3">
            <button
              aria-label="Previous"
              onClick={() => go("prev")}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-300/60 bg-zinc-900 text-white hover:bg-zinc-800"
            >
              <Icon.chevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go("next")}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-300/60 bg-zinc-900 text-white hover:bg-zinc-800"
            >
              <Icon.chevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
