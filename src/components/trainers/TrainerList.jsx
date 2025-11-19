// components/TeamSection.jsx
"use client";

import Link from "next/link";
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
    image: "/assets/image.png",
    desc: "/trainerdescription",
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
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 3,
    name: "Ava Martin",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:ava@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 4,
    name: "Noah White",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:noah@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 5,
    name: "Alex Lee",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:alex@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 6,
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:sam@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 7,
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:chris@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 8,
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:morgan@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 9,
    name: "John Smith",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:john@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 10,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 11,
    name: "Ava Martin",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:ava@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 12,
    name: "Noah White",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:noah@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 13,
    name: "Alex Lee",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:alex@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 14,
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:sam@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 15,
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:chris@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 16,
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:morgan@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 17,
    name: "John Smith",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:john@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 18,
    name: "Jane Doe",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:jane@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 19,
    name: "Ava Martin",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:ava@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 20,
    name: "Noah White",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:noah@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 21,
    name: "Alex Lee",
    title: "Trainer,  Fitness",
    tags: ["Training"],
    li: "#",
    mail: "mailto:alex@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 22,
    name: "Sam Patel",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:sam@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 23,
    name: "Chris Kim",
    title: "Physiotherapist",
    tags: ["Physio"],
    li: "#",
    mail: "mailto:chris@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 24,
    name: "Morgan Yu",
    title: "Rehab Specialist",
    tags: ["Rehab"],
    li: "#",
    mail: "mailto:morgan@example.com",
    site: "#",
    view: "#",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  // add as many as you like…
];

const TABS = ["Physio", "Training", "Rehab"];
const PER_PAGE = 8; // 4 columns x 2 rows like the screenshot

// tiny inline icons
const Icon = {
  li: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm3.5 6.25A1.75 1.75 0 1 1 9.25 7.5 1.75 1.75 0 0 1 7.5 9.25zM6 18v-7h3v7H6zm6 0v-4c0-1.105.895-2 2-2s2 .895 2 2v4h3v-4.5c0-2.485-2.015-4.5-4.5-4.5S10 11.015 10 13.5V18h2z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.217l-10 6.25L2 6.217V6zm0 3.383V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.383l-9.445 5.9a2 2 0 0 1-2.11 0L2 9.383z" />
    </svg>
  ),
  site: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 17.93V18h-2v1.93A8.012 8.012 0 0 1 4.07 13H6v-2H4.07A8.012 8.012 0 0 1 11 4.07V6h2V4.07A8.012 8.012 0 0 1 19.93 11H18v2h1.93A8.012 8.012 0 0 1 13 19.93ZM8 12a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
    </svg>
  ),
  eye: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
    </svg>
  ),
};

function TeamCard({ person }) {
  return (
    <article
      key={person.id}
      className="bg-black border border-[var(--bg-primary)] rounded-xl overflow-hidden w-[300px] flex-shrink-0"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold">{person.name}</h3>
        <p className="text-sm text-gray-400">{person.role}</p>

        <div className="mt-3 flex items-center gap-3 text-gray-300">
          <Icon.li className="h-5 w-5" />
          <Icon.mail className="h-5 w-5" />
          <Icon.site className="h-5 w-5" />
          <Link href={person.desc}>
            <Icon.eye className="h-5 w-5" />
          </Link>
        </div>

        <button className="mt-4 rounded-full bg-[var(--bg-primary)] px-4 py-1.5 text-xs font-medium hover:bg-rose-600 transition-colors">
          Book Now
        </button>
      </div>
    </article>
  );
}

export default function TrainerList() {
  const [active, setActive] = useState("Physio");
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const filtered = useMemo(
    () => TEAM.filter((p) => p.tags.includes(active)),
    [active]
  );

  // reset to first page when switching tabs
  useEffect(() => setPage(1), [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const current = filtered.slice(start, start + PER_PAGE);

  const goTo = (n) => {
    const next = Math.min(Math.max(1, n), totalPages);
    setPage(next);
    // optional: scroll back to top of section on page change
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={topRef} className="w-screen bg-zinc-900 py-12 text-white">
      <div className="mx-auto w-full px-6 md:px-10 xl:px-16">
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

        {/* Grid */}
        <div className="mt-10 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {current.map((p) => (
            <TeamCard key={`${active}-${p.id}`} person={p} />
          ))}

          {/* empty slots to keep rows balanced if needed */}
          {current.length % 4 !== 0 &&
            Array.from({ length: (4 - (current.length % 4)) % 4 }).map(
              (_, i) => <div key={`spacer-${i}`} className="hidden lg:block" />
            )}
        </div>

        {/* Pagination */}
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
                  key={n}
                  onClick={() => goTo(n)}
                  aria-current={page === n ? "page" : undefined}
                  className={`h-10 w-10 rounded-md text-sm font-semibold ${
                    page === n
                      ? "bg-[var(--bg-primary)] text-white"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="rounded-md border border-[var(--bg-primary)] px-3 py-2 text-sm disabled:opacity-40"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
