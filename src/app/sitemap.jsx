import { createClient } from "@sanity/client";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const client = createClient({
  projectId: "xva04acb",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

async function fetchSlugs(groq, field = "slug") {
  try {
    const rows = await client.fetch(groq);
    return rows.map((r) => r?.[field]).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/services",
    "/membership",
    "/trainer",
    "/trainerdescription",
    "/resourcepage",
    "/blog",
    "/about",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  const [serviceSlugs, postSlugs] = await Promise.all([
    fetchSlugs(
      `*[_type == "service" && defined(slug.current)]{ "slug": slug.current }`
    ),
    fetchSlugs(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
    ),
  ]);

  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const postUrls = postSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
  return [...staticRoutes, ...serviceUrls, ...postUrls];
}
