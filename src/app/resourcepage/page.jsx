import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xva04acb", // same as your CMS
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

async function fetchResourcePosts() {
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

export const metadata = { title: "Resources | Depth Training" };

export default async function ResourcePages() {
  const posts = await fetchResourcePosts();

  return (
    <main className="min-h-screen w-full bg-[#020109] text-white">
      <Header />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
        {/* CMS-driven resources list */}
        <ResourcePage posts={posts} />

        {/* Keep teammate sections from development */}
        <FeaturedTraining />
        <NewsletterSection />
      </div>

      <FooterStrip />
    </main>
  );
}

