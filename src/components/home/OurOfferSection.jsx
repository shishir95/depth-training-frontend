"use client";

export default function OurOfferSection() {
  const posts = [
    {
      id: 1,
      title: "Personal Training",
      icon: "/assets/self-confidence.png",
      excerpt:
        "Personal Training provides fully customized one-on-one coaching designed around your goals, fitness level, and lifestyle. Your trainer guides you through purposeful workouts that improve strength, mobility, and overall well-being while keeping you consistent and motivated.",
    },
    {
      id: 2,
      title: "Athletic Training",
      icon: "/assets/game.png",
      excerpt:
        "Personal Training provides fully customized one-on-one coaching designed around your goals, fitness level, and lifestyle. Your trainer guides you through purposeful workouts that improve strength, mobility, and overall well-being while keeping you consistent and motivated",
    },
    {
      id: 3,
      title: "Rehab",
      icon: "/assets/rehab.png",
      excerpt:
        "Personal Training provides fully customized one-on-one coaching designed around your goals, fitness level, and lifestyle. Your trainer guides you through purposeful workouts that improve strength, mobility, and overall well-being while keeping you consistent and motivated.",
    },
  ];
  return (
    <section className="w-full bg-[#121214] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-white mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-[var(--bg-primary)] rounded-xl bg-neutral-900 p-6 shadow-sm hover:border-rose-400 transition"
            >
              <div className=" flex flex-col items-center justify-center">
                <img
                  className="h-15 w-15"
                  src={post.icon}
                  alt="Self Confidence Icon"
                />
              </div>

              <h3 className="flex flex-col items-center justify-center text-lg sm:text-xl font-semibold text-white leading-snug mb-3 mt-3">
                {post.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
