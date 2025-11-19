// components/TeamSection.jsx
"use client";

import { motion } from "framer-motion";
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
    view: "/trainerdescription",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 3,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 4,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 5,
    name: "Alex Lee",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:alex@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 6,
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:sam@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 7,
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:chris@example.com",
    site: "#",
    view: "/trainerdescription",
  },
  {
    id: 8,
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:morgan@example.com",
    site: "#",
    view: "/trainerdescription",
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
    <motion.article
      className="group relative min-w-[320px] snap-start overflow-visible sm:min-w-[300px] lg:min-w-[320px] xl:min-w-[340px]"
      whileHover={{
        y: -6,
        scale: 1.01,
        boxShadow: "0 22px 65px rgba(0,0,0,0.75)",
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* 🔥 Animated hover glow + gradient shift */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-[26px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(244,63,94,0.45), transparent 55%)," +
            "radial-gradient(circle at 100% 100%, rgba(59,130,246,0.35), transparent 55%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Avatar bubble with parallax-ish lift on hover */}
      <div
        className="pointer-events-none absolute top-20 left-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-[#050509] shadow-2xl bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.22),_rgba(5,5,9,0.98)_70%)] backdrop-blur-[2px] transition-transform duration-500"
      >
        <img
          src="/assets/image.png"
          alt={person.name}
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>

      {/* Card body with soft gradient panel */}
      <div className="relative mt-40 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#f43f5e]/12 via-[#050509] to-black p-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur-md">
        {/* subtle internal glow that reacts with the animated outer glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),_transparent_55%)] opacity-70" />

        <p className="relative text-[11px] uppercase tracking-[0.3em] text-[var(--depth-muted)]">
          {person.tags.join(" • ")}
        </p>
        <h3 className="relative mt-3 text-xl font-semibold text-white">
          {person.name}
        </h3>
        <p className="relative mt-1 text-base text-[var(--depth-muted)]">
          {person.title}
        </p>

        <div className="relative mt-6 flex items-center justify-between">
          <a
            href={person.view}
            className="inline-flex items-center justify-center rounded-full bg-[var(--depth-accent)] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_22px_rgba(244,63,94,0.45)] transition hover:-translate-y-[1px] hover:bg-[#ff8475]"
          >
            Book Now
          </a>

          <div className="flex items-center gap-3 text-zinc-200">
            <a
              href={person.li}
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 text-[var(--depth-muted)] transition hover:border-white/40 hover:text-white"
            >
              <Icon.li className="h-4 w-4" />
            </a>
            <a
              href={person.mail}
              aria-label="Email"
              className="rounded-full border border-white/10 p-2 text-[var(--depth-muted)] transition hover:border-white/40 hover:text-white"
            >
              <Icon.mail className="h-4 w-4" />
            </a>
            <a
              href={person.site}
              aria-label="Website"
              className="rounded-full border border-white/10 p-2 text-[var(--depth-muted)] transition hover:border-white/40 hover:text-white"
            >
              <Icon.site className="h-4 w-4" />
            </a>
            <a
              href={person.view}
              aria-label="View profile"
              className="rounded-full border border-white/10 p-2 text-[var(--depth-muted)] transition hover:border-white/40 hover:text-white"
            >
              <Icon.eye className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
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
    <section className="w-full bg-transparent py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
            Specialists
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Our Team</h2>

          {/* Tabs with auto-darkening halo under the active one */}
          <div className="mt-6 flex items-center justify-center gap-6 text-base">
            {TABS.map((t) => {
              const isActive = active === t;
              return (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={
                    "relative rounded-full border px-4 py-1.5 transition " +
                    (isActive
                      ? "border-[var(--depth-accent)] bg-[var(--depth-accent)] text-black shadow-[0_0_40px_rgba(0,0,0,0.95)] ring-2 ring-white/40"
                      : "border-white/10 text-zinc-300 hover:border-white/30 hover:text-white bg-black/20")
                  }
                >
                  {/* dark halo behind the active tab */}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-[-6px] -z-10 rounded-full bg-black/70 blur-xl" />
                  )}
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 py-2 [scrollbar-width:none] [-ms-overflow-style:none]"
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
          <div className="mt-10 flex justify-end">
            <div className="flex gap-4">
              <button
                aria-label="Previous"
                onClick={() => go("prev")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--depth-accent)] hover:bg-[var(--depth-accent)]/20"
              >
                <Icon.chevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => go("next")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--depth-accent)] hover:bg-[var(--depth-accent)]/20"
              >
                <Icon.chevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
