import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import BlogIndexGrid from "@/components/blog/BlogIndexGrid";
import { BLOG_POSTS } from "@/data/blogPosts";

export const metadata = { title: "Blog | Depth Training" };

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-12">
      <Header />

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#040208] via-[#080414] to-black px-6 py-12 sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.28),_transparent_65%)] opacity-80 blur-3xl"
        />
        <div className="relative space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
            Depth Journal
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">All articles</h1>
          <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
            Rehab, strength, and athlete development resources from the Depth
            team—styled with the same premium glow as our Resource hub.
          </p>
        </div>
      </section>

      <BlogIndexGrid posts={BLOG_POSTS} />

      <FooterStrip />
    </div>
  );
}
