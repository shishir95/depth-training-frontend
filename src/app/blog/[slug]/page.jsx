import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "10-tips-to-make-nutrition-changes-sustainable",
    title: "10 Tips to Make Nutrition Changes Sustainable",
    body: `
      This is where your full article content will go.
      For now, you can keep it as placeholder text and focus on layout.
    `,
  },
  {
    slug: "how-to-recover-faster-after-every-workout",
    title: "How to Recover Faster After Every Workout",
    body: `
      Simple strategies to improve recovery: hydration, sleep, active cooldown,
      and periodized training based on your sport.
    `,
  },
  {
    slug: "bulletproof-your-knees-for-the-season",
    title: "Bulletproof Your Knees for the Season",
    body: `
      Strengthen the tissues around the knee with tempo squats, isometrics,
      and progressive plyometrics so you feel stable when the season begins.
    `,
  },
  {
    slug: "injury-red-flags-you-should-never-ignore",
    title: "Injury Red Flags You Should Never Ignore",
    body: `
      If swelling, sharp pain, or night aches stick around, it is time to chat
      with your therapist so a minor tweak does not become a major layoff.
    `,
  },
  {
    slug: "pre-game-fueling-that-actually-works",
    title: "Pre-Game Fueling That Actually Works",
    body: `
      Dial in timing, carb sources, and hydration so you can show up with steady
      energy instead of crashing mid-game.
    `,
  },
  {
    slug: "mobility-drills-for-desk-athletes",
    title: "Mobility Drills for Desk Athletes",
    body: `
      Ten minutes of spine, hip, and shoulder prep can offset sitting all day
      before you sprint or lift that evening.
    `,
  },
  {
    slug: "strength-training-for-busy-parents",
    title: "Strength Training for Busy Parents",
    body: `
      Keep training efficient with supersets, compound lifts, and planned off
      days so you can stay strong without living in the gym.
    `,
  },
  {
    slug: "return-to-sport-after-acl-rehab",
    title: "Return to Sport After ACL Rehab",
    body: `
      Clear strength metrics are the start. Build confidence with change of
      direction drills and power work before game day.
    `,
  },
  {
    slug: "how-to-program-in-season-lifts",
    title: "How to Program In-Season Lifts",
    body: `
      Micro doses of power and strength let you maintain the edge without
      dragging through competition.
    `,
  },
];

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="mb-4 text-2xl font-semibold">Article not found</h1>
          <p className="text-sm text-zinc-400">
            This article doesn&apos;t exist yet.{" "}
            <Link href="/resources" className="text-emerald-300 underline">
              Go back to Resources
            </Link>
            .
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
          Blog
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{post.title}</h1>

        <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
          <span>Depth Training &amp; Physiotherapy</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <div className="mt-8 h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-sky-500/30 to-emerald-300/40" />

        <article className="prose prose-invert prose-sm mt-8 max-w-none">
          {post.body.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </article>

        <div className="mt-10">
          <Link
            href="/resources"
            className="text-sm text-emerald-300 underline hover:text-emerald-200"
          >
            ← Back to Resources
          </Link>
        </div>
      </section>
    </main>
  );
}
