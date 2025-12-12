"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { TRAINERS } from "@/data/trainers";

const TEAM = TRAINERS;

const TABS = ["Physio", "Training", "Rehab"];
const PER_PAGE = 8;
const Icon = {
  li: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3.5 4A1.5 1.5 0 1 1 6 8.5 1.5 1.5 0 0 1 7.5 7zM7 10h3v7H7zm5 0h3v1.5a3.25 3.25 0 0 1 3-1.5c3 0 3.5 2 3.5 4.6V17h-3v-2.2c0-1.3-.5-2.1-1.5-2.1S15 13.5 15 15V17h-3z" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v1.2l-10 6.25L2 7.2V6a2 2 0 0 1 2-2zm0 6.617V18h16v-7.383l-7.445 4.66a2 2 0 0 1-2.11 0z" />
    </svg>
  ),
  site: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.93 6H15a15.19 15.19 0 0 0-1.19-4.38A8.027 8.027 0 0 1 16.93 8ZM9.19 3.62A15.19 15.19 0 0 0 8 8H5.07A8.027 8.027 0 0 1 9.19 3.62ZM4.06 10H7v4H4.06a7.987 7.987 0 0 1 0-4Zm1.01 6H7a15.19 15.19 0 0 0 1.19 4.38A8.027 8.027 0 0 1 5.07 16Zm3.23 0h3.4A13.276 13.276 0 0 1 12 20a13.276 13.276 0 0 1-2.7-4Zm5.5 4A15.19 15.19 0 0 0 17 16h1.93a8.027 8.027 0 0 1-3.13 4Z" />
    </svg>
  ),
  eye: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 10a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z" />
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
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-[26px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(244,63,94,0.45), transparent 55%)," +
            "radial-gradient(circle at 100% 100%, rgba(59,130,246,0.35), transparent 55%),",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="pointer-events-none absolute top-20 left-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-[#050509] shadow-2xl bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.22),_rgba(5,5,9,0.98)_70%)] backdrop-blur-[2px] transition-transform duration-500">
        <img
          src={"/assets/image.png"}
          alt={person.name}
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>

      <div className="relative mt-40 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#f43f5e]/12 via-[#050509] to-black p-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur-md">
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

export default function TrainerList() {
  const [active, setActive] = useState("Physio");
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const filtered = useMemo(
    () => TEAM.filter((p) => p.tags?.includes(active)),
    [active]
  );

  // reset to page 1 when tab changes
  useEffect(() => {
    setPage(1);
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const startIndex = (page - 1) * PER_PAGE;
  const current = filtered.slice(startIndex, startIndex + PER_PAGE);

  const goTo = (n) => {
    const next = Math.min(Math.max(1, n), totalPages);
    setPage(next);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={topRef}
      className="w-full bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(37,99,235,0.15),_transparent_60%),#050509] py-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted,#9ca3af)]">
            Specialists
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Our Team</h2>

          <div className="mt-4 flex items-center justify-center gap-6 text-lg">
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
                  {isActive && (
                    <span className="pointer-events-none absolute inset-[-6px] -z-10 rounded-full bg-black/70 blur-xl" />
                  )}
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25">
          {current.map((p) => (
            <TeamCard key={`${active}-${p.id}`} person={p} />
          ))}

          {current.length % 4 !== 0 &&
            Array.from({ length: (4 - (current.length % 4)) % 4 }).map(
              (_, i) => <div key={`spacer-${i}`} className="hidden lg:block" />
            )}
        </div>

        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="rounded-md border border-[var(--bg-primary)] px-3 py-2 text-sm disabled:opacity-40"
            aria-label="Previous page"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={
                    "relative rounded-full border px-4 py-1.5 transition " +
                    (isActive
                      ? "border-[var(--depth-accent,#f97373)] bg-[var(--depth-accent,#f97373)] text-black shadow-[0_0_40px_rgba(0,0,0,0.95)] ring-2 ring-white/40"
                      : "border-white/10 text-zinc-300 hover:border-white/30 hover:text-white bg-black/20")
                  }
                >
                  {isActive && (
                    <span className="pointer-events-none absolute inset-[-6px] -z-10 rounded-full bg-black/70 blur-xl" />
                  )}
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {current.map((p) => (
            <TeamCard key={`${active}-${p.id}`} person={p} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="rounded-md border border-[var(--bg-primary,#f97373)] px-3 py-2 text-sm disabled:opacity-40"
            aria-label="Previous page"
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                className={`h-8 w-8 rounded-full text-sm ${
                  n === page
                    ? "bg-[var(--bg-primary,#f97373)] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="rounded-md border border-[var(--bg-primary,#f97373)] px-3 py-2 text-sm disabled:opacity-40"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
