// src/lib/sanityClient.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "xva04acb",      // from your Sanity dashboard
  dataset: "production",      // default dataset
  apiVersion: "2025-11-24",   // any recent date
  useCdn: true,               // faster, fine for public read
  perspective: "published",
});
