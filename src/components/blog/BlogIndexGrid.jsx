"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

export default function BlogIndexGrid({ posts }) {
  const categories = useMemo(() => {
    const unique = new Set(posts.map((post) => post.category));
    return ["All", ...unique];
  }, [posts]);

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 via-[#05030f] to-black p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.3),_transparent_55%)] blur-3xl opacity-70"
      />

      <div className="relative flex flex-wrap gap-3" role="tablist" aria-label="Article categories">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={[
                "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition",
                isActive
                  ? "border-[var(--depth-accent)] bg-[var(--depth-accent)] text-black shadow-[0_0_25px_rgba(241,96,85,0.4)]"
                  : "border-white/10 bg-white/5 text-[var(--depth-muted)] hover:text-white",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="relative mt-10 grid gap-6 md:grid-cols-2"
      >
        {filtered.map((post, index) => (
          <motion.article
            key={post.slug}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            custom={index}
            whileHover={{
              y: -6,
              boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--depth-card)]/80 p-6 transition hover:border-[var(--depth-accent)]/70"
          >
            <div className="absolute inset-px rounded-[1.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[var(--depth-muted)]">
                  {post.category}
                </span>
                <span className="text-[var(--depth-accent-soft)]">{post.tag}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--depth-muted)]">
                <span>{post.readTime}</span>
                <span>{post.updated}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--depth-accent)] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_12px_rgba(241,96,85,0.4)] transition hover:bg-[#ff9686]"
              >
                Read article <span className="text-sm">→</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
