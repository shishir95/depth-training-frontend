import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import BlogIndexGrid from "@/components/blog/BlogIndexGrid";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xva04acb", // same as your CMS
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

// Fetch all posts
async function fetchPostsFromSanity() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      category,
      tag,
      readTime,
      publishedAt,
      excerpt
    }`
  );

  return posts.map((post) => {
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
    };
  });
}

export const metadata = { title: "Blog | Depth Training" };

export default async function BlogIndexPage() {
  const posts = await fetchPostsFromSanity();

  return (
    <main className="min-h-screen w-full bg-[#020109] text-white">
      <Header />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-12">
        {/* Header section */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#040208] via-[#080414] to-black px-6 py-12 sm:px-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.35),_transparent_60%)] opacity-80 blur-3xl"
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
                Depth Journal
              </p>
              <h1 className="text-3xl font-semibold sm:text-4xl">
                Articles, tips &amp; insights
              </h1>
              <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
                Rehab, strength, athlete development, and nutrition content
                curated by the Depth Training team.
              </p>
            </div>
          </div>
        </section>

        {/* CMS posts go here */}
        <BlogIndexGrid posts={posts} />

        <FooterStrip />
      </div>
    </main>
  );
}
