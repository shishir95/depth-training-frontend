"use client";

import { motion } from "framer-motion";

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
    <section className="w-full bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.2),_transparent_60%),#050509] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
          Programs
        </p>
        <h2 className="text-center text-3xl font-semibold text-white mt-2 mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="rounded-2xl border border-white/8 bg-[var(--depth-card)]/90 p-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm"
              whileHover={{
                y: -4,
                scale: 1.01,
                boxShadow: "0 0 32px rgba(244,63,94,0.35)",
              }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-16 w-16"
                  src={post.icon}
                  alt="Self Confidence Icon"
                />
              </div>

              <h3 className="mt-5 text-center text-lg font-semibold leading-snug text-white sm:text-xl">
                {post.title}
              </h3>

              <p className="mt-3 text-center text-sm leading-relaxed text-[var(--depth-muted)]">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
