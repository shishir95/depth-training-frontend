"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
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
];

const ArticlesSection = () => {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.22),_transparent_60%),#050509] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
          Resources
        </p>
        <h2 className="mb-10 mt-2 text-center text-3xl font-semibold text-white">
          Stay Strong &amp; Stay Informed
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="flex h-full flex-col rounded-2xl border border-white/8 bg-[var(--depth-card)]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm"
              whileHover={{
                y: -4,
                scale: 1.01,
                boxShadow: "0 0 32px rgba(244,63,94,0.35)",
              }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="mb-5 h-48 w-full rounded-lg bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.32),_transparent_70%)]" />

              <h3 className="mb-3 text-lg font-semibold leading-snug text-white sm:text-xl">
                {post.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-[var(--depth-muted)]">
                {post.excerpt}
              </p>

              <Link
                href={post.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--depth-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-[#ff8475]"
              >
                Read More
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--depth-accent)] hover:text-[var(--depth-accent)]"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
