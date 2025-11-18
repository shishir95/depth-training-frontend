import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold sm:text-4xl">All Articles</h1>
          <p className="mt-3 max-w-xl text-sm text-zinc-300">
            Browse all articles from Depth Training &amp; Physiotherapy.
          </p>
        </header>

        <p className="text-sm text-zinc-400">
          Full blog listing coming soon. For now, visit{" "}
          <Link href="/resources" className="text-emerald-300 underline">
            Resources
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
