"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Tips to Make Nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon...",
    slug: "10-tips-to-make-nutrition-changes-sustainable",
  },
  {
    id: 2,
    title: "How to Recover Faster After Every Workout",
    excerpt:
      "Dial in sleep, fueling, and tissue work so you can hit every training session feeling fresh instead of rundown from the last one.",
    slug: "how-to-recover-faster-after-every-workout",
  },
  {
    id: 3,
    title: "Bulletproof Your Knees for the Season",
    excerpt:
      "Isometric strength, tempo work, and smart plyometrics help athletes stay durable when the game schedule heats up.",
    slug: "bulletproof-your-knees-for-the-season",
  },
  {
    id: 4,
    title: "Injury Red Flags You Should Never Ignore",
    excerpt:
      "Learn when soreness is normal training fatigue and when it's time to call your physio before a small issue sidelines you.",
    slug: "injury-red-flags-you-should-never-ignore",
  },
  {
    id: 5,
    title: "Pre-Game Fueling That Actually Works",
    excerpt:
      "From early tournament mornings to late playoff games, here's how to keep energy high without upsetting your stomach.",
    slug: "pre-game-fueling-that-actually-works",
  },
  {
    id: 6,
    title: "Mobility Drills for Desk Athletes",
    excerpt:
      "If you spend eight hours at a laptop and expect to sprint that night, this 10-minute flow will keep your hips and back moving.",
    slug: "mobility-drills-for-desk-athletes",
  },
  {
    id: 7,
    title: "Strength Training for Busy Parents",
    excerpt:
      "You don't need two hours in the gym. Pair these compound lifts with micro conditioning to stay powerful all week.",
    slug: "strength-training-for-busy-parents",
  },
  {
    id: 8,
    title: "Return to Sport After ACL Rehab",
    excerpt:
      "Passing the strength tests is only step one. Build confidence with progressive plyos and change-of-direction work.",
    slug: "return-to-sport-after-acl-rehab",
  },
  {
    id: 9,
    title: "How to Program In-Season Lifts",
    excerpt:
      "Use micro-doses of strength and power so your athletes maintain their edge without dragging during competition.",
    slug: "how-to-program-in-season-lifts",
  },
];

const POSTS_PER_PAGE = 6;

function BlogCard({ post }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="w-full h-full">
      <div
        className="
          group h-full flex flex-col
          rounded-2xl border border-zinc-800/80
          bg-gradient-to-b from-zinc-900 to-zinc-950
          p-5 shadow-md shadow-black/40
          transition-transform transition-shadow
          hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 transition-colors group-hover:bg-emerald-500/20">
            Training & Recovery
          </span>
          <span className="text-xs text-zinc-500">5 min read</span>
        </div>

        <div className="mb-4 h-36 w-full overflow-hidden rounded-xl bg-gradient-to-tr from-emerald-500/40 via-sky-500/40 to-emerald-300/50">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0,#22c55e_0,transparent_55%),radial-gradient(circle_at_80%_100%,#38bdf8_0,transparent_55%)] opacity-70 transition-transform duration-500 group-hover:scale-105" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-zinc-300/90 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            Read article
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ResourcePage() {
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(start, start + POSTS_PER_PAGE);

  const goTo = (n) => {
    const next = Math.min(Math.max(1, n), totalPages);
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={topRef}
      className="w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-black py-12 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.23em] text-emerald-400">
              Resources
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Depth Training Blog
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Practical articles on injury rehab, strength training, nutrition,
              and performance written by our therapists and coaches.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-emerald-500/70 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20"
            >
              View all articles
            </Link>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-sm text-zinc-400">
          <p>
            Page <span className="text-emerald-300">{page}</span> of {" "}
            <span className="text-emerald-300">{totalPages}</span>
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = page === n;
              return (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  className={`h-9 w-9 rounded-full text-xs font-semibold ${
                    active
                      ? "bg-emerald-500 text-black"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  {n}
                </button>
              );
            })}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
