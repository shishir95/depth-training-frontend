import React from "react";
import Link from "next/link"; // remove if not using Next.js

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
    <section className="w-full bg-[#121214] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-white mb-10">
          Stay Strong &amp; Stay Informed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <Link
            href="#"
            className="bg-[var(--bg-primary)] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-rose-400 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
