"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function AthleteTraining14Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Athlete Training • Ages 14+
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Athlete Training (14+)
                  <span className="block text-red-400">
                    individualized coaching to elevate your game.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  This program is built for driven athletes who want more than a
                  generic workout. Every session is coached, every athlete has a
                  plan, and the focus is always on performance, development, and
                  long-term durability.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    View Schedule &amp; Booking
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Ask About Athlete Training
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Popular with high school, OHL/Junior, university, and
                  performance-focused athletes across field, court, and ice
                  sports.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Athlete Training (14+) focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Individualized programs</span>{" "}
                      based on sport, position, age, training history, and
                      injury profile.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Coached sessions</span> with
                      high coach-to-athlete ratios so no one trains unsupervised
                      or without a plan.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Performance development</span>{" "}
                      in strength, power, speed, change of direction, and
                      conditioning.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Injury-risk reduction &amp; durability
                      </span>{" "}
                      through smart progressions, movement quality, and proper
                      preparation.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  How Athlete Training (14+) works at DEPTH
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Every athlete starts with a conversation about sport, season,
                  schedule, and goals. From there, our coaches design a
                  performance program specific to you—so you&apos;re not doing
                  the same workout as the athlete beside you.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Sessions are run in a semi-private environment with dedicated
                  coaching. You&apos;ll be guided through your program,
                  coached on technique, and pushed appropriately based on your
                  needs and training age.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  As the season, demands, and goals change, your program
                  progresses with you—so you&apos;re always training with a
                  purpose, not just &quot;working out.&quot;
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical training phase includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial intake and review of sport, schedule, and injury
                    history.
                  </li>
                  <li>
                    Movement and performance assessment to identify priorities.
                  </li>
                  <li>
                    Custom strength, power, and speed work tailored to your
                    sport.
                  </li>
                  <li>
                    Conditioning and energy-system work matched to your game
                    demands.
                  </li>
                  <li>
                    Ongoing coaching, adjustments, and progress tracking across
                    the training block.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Athlete Training (14+) is ideal if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Competing at a higher level
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Playing rep, OHL/Junior, varsity, or high-level club.</li>
                  <li>Wanting to stand out in tryouts and selection camps.</li>
                  <li>Needing structured off-season and in-season support.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Serious about long-term development
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Focused on getting stronger, faster, and more explosive each
                    year.
                  </li>
                  <li>
                    Looking to build habits that support college / pro
                    aspirations.
                  </li>
                  <li>
                    Ready to train consistently—not just before big games.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Wanting coaching, not guesswork
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Tired of piecing together random workouts online.</li>
                  <li>Prefer expert coaches who know your sport demands.</li>
                  <li>
                    Want clear structure, feedback, and accountability each
                    session.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect / steps */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  What to expect when you start
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our goal is to make the process simple while still giving you
                  a professional, high-performance experience. Parents, coaches,
                  and athletes are all kept in the loop on expectations and
                  progress.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Training for athletes 14+ is based out of our main DEPTH
                  Training &amp; Physiotherapy facility at 408 Albert Street in
                  Waterloo, with free parking and full access to our high
                  performance space.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Simple steps to get started
                </h3>
                <ol className="space-y-2 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Reach out to our team with your sport, age, and goals so we
                    can recommend the best training option.
                  </li>
                  <li>
                    Confirm training frequency and times that fit your game and
                    school schedule.
                  </li>
                  <li>
                    Complete online intake and set up your Jane account for
                    billing and scheduling.
                  </li>
                  <li>
                    Attend your first session—assessment, goal setting, and
                    program build.
                  </li>
                  <li>
                    Train consistently with your individualized program and
                    coaching support.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Ready to train with purpose, not just effort?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Athlete Training (14+) gives you a structured, coached
                  environment to develop the strength, speed, and resilience
                  needed to compete at your best.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your sport, level, and goals—our team will walk you
                  through the best next step for you or your athlete.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Athlete Training staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We can help you understand training options, scheduling, and
                  how Athlete Training fits with your season.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call the Gym
                  </a>
                  <a
                    href="mailto:info@depthtraining.ca"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Email About Athlete Training
                  </a>
                  <a
                    href="/services/athlete-training"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-dashed border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    View All Athlete Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterStrip />
    </div>
  );
}
