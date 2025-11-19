"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const CATEGORIES = [
  "All",
  "Injury Rehab",
  "Strength & Conditioning",
  "Athlete Training",
  "Nutrition",
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Tips to Make Nutrition Changes Sustainable",
    excerpt:
      "Easy habit stacks, batch-cooking wins, and simple tweaks that actually stick when you're balancing work, family, and training.",
    slug: "10-tips-to-make-nutrition-changes-sustainable",
    category: "Nutrition",
    tag: "Fueling",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "How to Recover Faster After Every Workout",
    excerpt:
      "Simple strategies to improve recovery so you can train harder, stay healthy, and perform at your best.",
    slug: "how-to-recover-faster-after-every-workout",
    category: "Strength & Conditioning",
    tag: "Recovery",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Bulletproof Your Knees for the Season",
    excerpt:
      "Isometric strength, tempo work, and smart plyometrics help athletes stay durable when the game schedule heats up.",
    slug: "bulletproof-your-knees-for-the-season",
    category: "Athlete Training",
    tag: "In-Season",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Injury Red Flags You Should Never Ignore",
    excerpt:
      "Learn when soreness is normal training fatigue and when it's time to call your physio before a small issue sidelines you.",
    slug: "injury-red-flags-you-should-never-ignore",
    category: "Injury Rehab",
    tag: "Clinic Tips",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Pre-Game Fueling That Actually Works",
    excerpt:
      "From early tournament mornings to late playoff games, here's how to keep energy high without upsetting your stomach.",
    slug: "pre-game-fueling-that-actually-works",
    category: "Nutrition",
    tag: "Game Day",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Mobility Drills for Desk Athletes",
    excerpt:
      "If you spend eight hours at a laptop and expect to sprint that night, try this 10-minute flow to keep hips and back moving.",
    slug: "mobility-drills-for-desk-athletes",
    category: "Injury Rehab",
    tag: "Mobility",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Strength Training for Busy Parents",
    excerpt:
      "You don't need two hours in the gym. Pair these compound lifts with micro conditioning to stay powerful all week.",
    slug: "strength-training-for-busy-parents",
    category: "Strength & Conditioning",
    tag: "At-Home",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Return to Sport After ACL Rehab",
    excerpt:
      "Passing the strength tests is step one. Build confidence with progressive plyos and change-of-direction work.",
    slug: "return-to-sport-after-acl-rehab",
    category: "Injury Rehab",
    tag: "ACL",
    readTime: "9 min read",
  },
  {
    id: 9,
    title: "How to Program In-Season Lifts",
    excerpt:
      "Use micro-doses of strength and power so your athletes maintain their edge without dragging during competition.",
    slug: "how-to-program-in-season-lifts",
    category: "Athlete Training",
    tag: "Programming",
    readTime: "5 min read",
  },
];

const POSTS_PER_PAGE = 6;
const GRID_ANCHOR_ID = "resources-grid-top";

const gridVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

function HeaderBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-4 border-b border-white/5 pb-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Articles, tips &amp; guides
        </h1>
        <p className="mt-2 max-w-xl text-sm text-[var(--depth-muted)]">
          Rehab, strength training, athlete development, and nutrition content
          from the Depth Training team.
        </p>
      </div>

      <div className="w-full max-w-sm">
        <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 shadow-sm">
          <span className="sr-only">Search articles</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[var(--depth-muted)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 3.5 3.5" />
          </svg>
          <input
            type="text"
            placeholder="Search articles (coming soon)"
            className="w-full bg-transparent text-xs outline-none placeholder:text-[var(--depth-muted)]"
          />
        </label>
      </div>
    </motion.header>
  );
}

function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={[
              "rounded-full border px-4 py-1.5 text-xs font-medium transition",
              isActive
                ? "border-[var(--depth-accent)] bg-[var(--depth-accent)] text-black shadow-[0_0_0_1px_rgba(0,0,0,0.5)]"
                : "border-white/10 bg-white/5 text-[var(--depth-muted)] hover:border-[var(--depth-accent-soft)] hover:text-white",
            ].join(" ")}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

function BlogGrid({ posts }) {
  if (!posts.length) {
    return (
      <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-sm text-[var(--depth-muted)]">
        More articles in this category are on the way.
      </div>
    );
  }

  return (
    <motion.div
      key={posts.map((p) => p.slug).join("|")}
      variants={gridVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-2"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </motion.div>
  );
}

function BlogCard({ post }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 22px 60px rgba(0,0,0,0.75)",
      }}
      transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.9 }}
      style={{ willChange: "transform, box-shadow" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[var(--depth-card)]/95 shadow-sm transition hover:border-[var(--depth-accent)]/80"
    >
      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-tr from-[var(--depth-accent-soft)]/20 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 opacity-25 group-hover:opacity-40" />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--depth-muted)]">
            {post.category ?? "Article"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug sm:text-lg">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-xs text-[var(--depth-muted)] sm:text-sm">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between text-[11px] text-[var(--depth-muted)]">
          <span>{post.readTime ?? "5 min read"}</span>
          {post.tag && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
              {post.tag}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--depth-accent)] px-4 py-2 text-xs font-semibold text.black shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition group-hover:bg-[#ff8475]"
          >
            Read article
            <span className="translate-x-0 text-xs transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function SidebarCTA() {
  return (
    <div className="rounded-2xl border border-[var(--depth-accent-soft)] bg-gradient-to-b from-[var(--depth-card)]/90 to-zinc-950/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--depth-muted)]">
        Need a plan?
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-snug">
        Not sure where to start with your rehab or training?
      </h3>
      <ul className="mt-4 space-y-2 text-xs text-[var(--depth-muted)]">
        <li>• Get matched with the right therapist or coach.</li>
        <li>• Book a 1:1 assessment at Depth in Waterloo Region.</li>
        <li>• Build a plan around your injury, season, or goals.</li>
      </ul>
      <a
        href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--depth-accent)] px-4 py-2.5 text-xs font-semibold text-black shadow-[0_0_0_1px_rgba(0,0,0,0.7)] transition hover:bg-[#ff8475]"
      >
        Book a consult on Jane
      </a>
    </div>
  );
}

function Pagination({ page, totalPages, onChange }) {
  const goTo = (n) => {
    const next = Math.min(Math.max(1, n), totalPages);
    onChange(next);
    if (typeof document !== "undefined") {
      document.getElementById(GRID_ANCHOR_ID)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="mt-2 flex items-center justify-end gap-3 border-t border-white/5 pt-5">
      <button
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[var(--depth-muted)] disabled:opacity-40"
      >
        Prev
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const n = i + 1;
          const isActive = n === page;
          return (
            <button
              key={n}
              onClick={() => goTo(n)}
              className={[
                "h-9 w-9 rounded-full text-xs font-semibold",
                isActive
                  ? "bg-[var(--depth-accent)] text-black"
                  : "bg-white/5 text-[var(--depth-muted)] hover:bg-white/10",
              ].join(" ")}
            >
              {n}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[var(--depth-muted)] disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}

export default function ResourcePage() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (category === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === category);
  }, [category]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );

  useEffect(() => {
    setPage((prev) => {
      const max = Math.max(
        1,
        Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
      );
      return prev > max ? max : prev;
    });
  }, [filteredPosts.length]);

  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950 to-black py-12">
      {/* soft coral glow like membership hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.26),_transparent_60%)] opacity-80 blur-3xl"
      />

      <div className="relative mx-auto flex w-full flex-col gap-10 px-6 sm:px-10">
        <HeaderBar />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3.2fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-8">
            <div id={GRID_ANCHOR_ID} className="flex flex-col gap-8">
              <FilterBar active={category} onChange={setCategory} />
              <BlogGrid posts={currentPosts} />
            </div>
            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={setPage}
            />
          </div>

          <aside className="lg:sticky lg:top-24">
            <SidebarCTA />
          </aside>
        </div>
      </div>
    </section>
  );
}