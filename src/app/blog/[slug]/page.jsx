import Link from "next/link";
import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import PageShell from "@/components/layout/PageShell";
import { BLOG_POSTS, BLOG_POST_MAP } from "@/data/blogPosts";

export default function BlogDetailPage({ params }) {
  const post = BLOG_POST_MAP[params.slug];

  if (!post) {
    return (
      <PageShell padY="py-16" maxWidth="max-w-4xl" className="space-y-10">
        <Header />
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h1 className="text-3xl font-semibold">Article not found</h1>
          <p className="mt-3 text-sm text-zinc-300">
            This article doesn&apos;t exist yet.{" "}
            <Link href="/blog" className="text-[var(--depth-accent)] underline">
              Go back to the blog
            </Link>
            .
          </p>
        </section>
        <FooterStrip />
      </PageShell>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell padY="py-16" maxWidth="max-w-5xl" className="space-y-16">
      <Header />

      <article className="space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#040208] via-[#0a0312] to-black px-6 py-10 sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.3),_transparent_55%)] blur-3xl opacity-80"
          />
          <div className="relative space-y-4">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--depth-muted)]">
              {post.category}
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.24em] text-[var(--depth-muted)]">
              <span>{post.readTime}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--depth-muted)]" />
              <span>Updated {post.updated}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-4 text-zinc-200">
          {post.body
            .split("\n")
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={`${post.slug}-paragraph-${index}`}>{paragraph}</p>
            ))}
        </div>
      </article>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#05030f] via-black to-[#0c0714] px-6 py-10 sm:px-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
            You may also like
          </p>
          <h2 className="text-3xl font-semibold">More from Depth</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-[var(--depth-accent)]/70"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--depth-muted)]">
                {article.category}
              </span>
              <h3 className="mt-3 text-base font-semibold leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-300">{article.excerpt}</p>
              <p className="mt-4 text-[11px] text-[var(--depth-muted)]">
                {article.readTime} • {article.updated}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <FooterStrip />
    </PageShell>
  );
}
