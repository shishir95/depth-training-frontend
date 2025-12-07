// src/app/sitemap.js
import { createClient } from "@sanity/client";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// (Optional) Reuse existing Sanity project settings
const client = createClient({
  projectId: "xva04acb",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

// Fetch slugs safely; return [] if anything fails
async function fetchSlugs(groq, field = "slug") {
  try {
    const rows = await client.fetch(groq);
    return rows.map((r) => r?.[field]).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap() {
  // 1) Static routes you want indexed
  const staticRoutes = [
    "", // home
    "/services",
    "/membership",
    "/trainer",
    "/trainerdescription",
    "/resourcepage",
    "/blog",
    "/about",
    // add any other static pages here
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 2) Dynamic routes from Sanity (services & posts)
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

  // Next.js expects an array of URL objects
  return [...staticRoutes, ...serviceUrls, ...postUrls];
}
