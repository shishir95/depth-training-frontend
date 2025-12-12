export const BLOG_POSTS = [
  {
    id: 1,
    slug: "10-tips-to-make-nutrition-changes-sustainable",
    title: "10 Tips to Make Nutrition Changes Sustainable",
    excerpt:
      "Easy habit stacks, batch-cooking wins, and simple tweaks that stick when you're balancing work, family, and training.",
    category: "Nutrition",
    tag: "Fueling",
    readTime: "6 min read",
    updated: "Jan 12, 2025",
    body: `
      This is where your full article content will go.
      For now, you can keep it as placeholder text and focus on layout.
    `,
  },
  {
    id: 2,
    slug: "how-to-recover-faster-after-every-workout",
    title: "How to Recover Faster After Every Workout",
    excerpt:
      "Simple strategies to improve recovery so you can train harder, stay healthy, and perform at your best.",
    category: "Strength & Conditioning",
    tag: "Recovery",
    readTime: "5 min read",
    updated: "Jan 15, 2025",
    body: `
      Simple strategies to improve recovery: hydration, sleep, active cooldown,
      and periodized training based on your sport.
    `,
  },
  {
    id: 3,
    slug: "bulletproof-your-knees-for-the-season",
    title: "Bulletproof Your Knees for the Season",
    excerpt:
      "Isometric strength, tempo work, and smart plyometrics help athletes stay durable when the game schedule heats up.",
    category: "Athlete Training",
    tag: "In-Season",
    readTime: "7 min read",
    updated: "Jan 20, 2025",
    body: `
      Strengthen the tissues around the knee with tempo squats, isometrics,
      and progressive plyometrics so you feel stable when the season begins.
    `,
  },
  {
    id: 4,
    slug: "injury-red-flags-you-should-never-ignore",
    title: "Injury Red Flags You Should Never Ignore",
    excerpt:
      "Learn when soreness is normal training fatigue and when it's time to call your physio before a small issue sidelines you.",
    category: "Injury Rehab",
    tag: "Clinic Tips",
    readTime: "4 min read",
    updated: "Jan 7, 2025",
    body: `
      If swelling, sharp pain, or night aches stick around, it is time to chat
      with your therapist so a minor tweak does not become a major layoff.
    `,
  },
  {
    id: 5,
    slug: "pre-game-fueling-that-actually-works",
    title: "Pre-Game Fueling That Actually Works",
    excerpt:
      "From early tournament mornings to late playoff games, here's how to keep energy high without upsetting your stomach.",
    category: "Nutrition",
    tag: "Game Day",
    readTime: "5 min read",
    updated: "Jan 9, 2025",
    body: `
      Dial in timing, carb sources, and hydration so you can show up with steady
      energy instead of crashing mid-game.
    `,
  },
  {
    id: 6,
    slug: "mobility-drills-for-desk-athletes",
    title: "Mobility Drills for Desk Athletes",
    excerpt:
      "If you spend eight hours at a laptop and expect to sprint that night, try this 10-minute flow to keep hips and back moving.",
    category: "Injury Rehab",
    tag: "Mobility",
    readTime: "8 min read",
    updated: "Jan 17, 2025",
    body: `
      Ten minutes of spine, hip, and shoulder prep can offset sitting all day
      before you sprint or lift that evening.
    `,
  },
  {
    id: 7,
    slug: "strength-training-for-busy-parents",
    title: "Strength Training for Busy Parents",
    excerpt:
      "You don't need two hours in the gym. Pair these compound lifts with micro conditioning to stay powerful all week.",
    category: "Strength & Conditioning",
    tag: "At-Home",
    readTime: "6 min read",
    updated: "Jan 18, 2025",
    body: `
      Keep training efficient with supersets, compound lifts, and planned off
      days so you can stay strong without living in the gym.
    `,
  },
  {
    id: 8,
    slug: "return-to-sport-after-acl-rehab",
    title: "Return to Sport After ACL Rehab",
    excerpt:
      "Passing the strength tests is step one. Build confidence with progressive plyos and change-of-direction work.",
    category: "Injury Rehab",
    tag: "ACL",
    readTime: "9 min read",
    updated: "Jan 13, 2025",
    body: `
      Clear strength metrics are the start. Build confidence with change of
      direction drills and power work before game day.
    `,
  },
  {
    id: 9,
    slug: "how-to-program-in-season-lifts",
    title: "How to Program In-Season Lifts",
    excerpt:
      "Use micro-doses of strength and power so your athletes maintain their edge without dragging during competition.",
    category: "Athlete Training",
    tag: "Programming",
    readTime: "5 min read",
    updated: "Jan 22, 2025",
    body: `
      Micro doses of power and strength let you maintain the edge without
      dragging through competition.
    `,
  },
];

export const BLOG_POST_MAP = BLOG_POSTS.reduce((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {});
