"use client";
import React from "react";
import Link from "next/link"; // remove if not using Next.js
import { useEffect, useMemo, useRef, useState } from "react";

const BLOG_POSTS = [
  // Sample blog posts (replace with actual content)
  {
    id: 1,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 2,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 3,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 4,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 5,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 6,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 7,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 8,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  {
    id: 9,
    title: "10 Tips to Make nutrition Changes Sustainable",
    excerpt:
      "We are all absolutely pumped that sports are back up and running and we have prospects of a somewhat normal season on the horizon. After a year and a half of sporadic training, lots of",
    href: "#",
  },
  // Add more posts as needed
];

const POSTS_PER_PAGE = 6; // For 3 columns, 2 rows

function BlogCard({ post }) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <div
            key={post.id}
            className="border border-[var(--bg-primary)] rounded-xl bg-neutral-900 p-6 shadow-sm hover:border-rose-400 transition"
          >
            <div className="h-48 w-full bg-zinc-400/60 rounded-lg mb-5" />

            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
              {post.title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <Link
              href={post.href}
              className="inline-block bg-[var(--bg-primary)] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-rose-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
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
    <section ref={topRef} className="w-screen bg-zinc-900 py-12 text-white">
      <div className="mx-auto w-full px-6 md:px-10 xl:px-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our Blog</h2>
        </div>

        {/* Blog Grid */}
        <div className="mt-10 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
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
