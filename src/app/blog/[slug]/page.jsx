import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

const client = createClient({
  projectId: "xva04acb", // same as cms/sanity.config.js
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

async function fetchPostBySlug(slug) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      category,
      tag,
      readTime,
      publishedAt,
      excerpt,
      body
    }`,
    { slug }
  );

  if (!post) return null;

  const date = post.publishedAt ? new Date(post.publishedAt) : null;
  const formattedDate = date
    ? date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return {
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || "General",
    tag: post.tag || "Depth",
    readTime: post.readTime || "5 min read",
    updated: formattedDate,
    body: post.body || [],
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-[#020109] text-white">
      <Header />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 space-y-12">
        {/* Back link */}
        <div>
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--depth-accent)]"
          >
            ← Back to blog
          </Link>
        </div>

        {/* Article header */}
        <article className="space-y-10">
          <header className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#05030f] via-black to-[#090413] px-6 py-8 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
              Depth Journal • {post.category}
            </p>
            <div className="mt-4 space-y-3">
              <h1 className="text-3xl font-semibold sm:text-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.24em] text-[var(--depth-muted)]">
                <span>{post.readTime}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--depth-muted)]" />
                <span>Updated {post.updated}</span>
              </div>
              {post.excerpt && (
                <p className="mt-3 text-sm text-zinc-300">{post.excerpt}</p>
              )}
            </div>
          </header>

          {/* Article body */}
          <section className="prose prose-invert prose-sm max-w-none text-zinc-200">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4 text-sm leading-relaxed text-zinc-200">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-8 mb-3 text-2xl font-semibold text-white">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-6 mb-2 text-xl font-semibold text-white">
                      {children}
                    </h3>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="mb-4 ml-5 list-disc space-y-2 text-sm text-zinc-200">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="mb-4 ml-5 list-decimal space-y-2 text-sm text-zinc-200">
                      {children}
                    </ol>
                  ),
                },
              }}
            />
          </section>
        </article>
      </div>

      <FooterStrip />
    </main>
  );
}
