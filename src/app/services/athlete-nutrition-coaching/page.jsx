"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function AthleteNutritionCoachingPage() {
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
                  Athlete Training • Nutrition Coaching
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Athlete Nutrition Coaching
                  <span className="block text-red-400">
                    fuel, recover, and perform with purpose.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  This coaching is built specifically for athletes who want
                  their nutrition to actually support performance. We focus on
                  fuelling training, recovering between sessions, and making
                  game-day and tournament decisions simple—not restrictive.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Nutrition Consult
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Ask a Question
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Ideal for athletes balancing practices, gym work, school, and
                  competition who want clear fuelling strategies instead of
                  guessing.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Athlete Nutrition Coaching focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Daily fuelling structure</span>{" "}
                      so breakfast, lunch, dinner, and snacks actually match
                      training and school demands.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Pre- and post-training / game strategies
                      </span>{" "}
                      to support energy, performance, and recovery.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Body composition goals</span>{" "}
                      like lean mass gain or fat loss without extreme dieting.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Tournament &amp; travel plans</span>{" "}
                      that work in real life—even with arenas, hotels, and busy
                      schedules.
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
                  How Athlete Nutrition Coaching works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by understanding your sport, position, current
                  training load, school or work schedule, and any previous
                  nutrition attempts. The goal is to see the full picture—not
                  just what you eat on a &quot;perfect day.&quot;
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  From there, your coach builds simple, clear guidelines:
                  structure for meals, portion ideas, game-day routines, and
                  recovery strategies between practices, lifts, and competition.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Check-ins are used to review how things feel on the ice, field,
                  or court—so adjustments are made based on performance, not just
                  numbers on paper.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical coaching process includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial consult and intake covering training load, goals, and
                    current eating patterns.
                  </li>
                  <li>
                    Education on athlete-specific nutrition fundamentals (energy
                    needs, protein, carbs, hydration).
                  </li>
                  <li>
                    Clear game-day, practice-day, and off-day fuelling
                    guidelines.
                  </li>
                  <li>
                    Regular check-ins (virtual or in-person) to review energy,
                    performance, and recovery.
                  </li>
                  <li>
                    Ongoing adjustments around tournaments, travel, and
                    off-season / in-season shifts.
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
              Athlete Nutrition Coaching is especially helpful if you’re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Training &amp; competing regularly
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>On the ice, field, or court multiple times per week.</li>
                  <li>
                    Balancing team practices, games, and gym sessions at DEPTH.
                  </li>
                  <li>
                    Feeling like you run out of energy or fade late in games.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Chasing specific performance or physique goals
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Wanting to gain lean mass in a realistic way.</li>
                  <li>
                    Trying to lean out without losing strength or power.
                  </li>
                  <li>
                    Wanting to avoid random weight cuts or crash-diet approaches.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Overwhelmed by mixed nutrition advice
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Hearing different recommendations from social media, coaches,
                    and friends.
                  </li>
                  <li>
                    Unsure how much to eat around practices, lifts, and games.
                  </li>
                  <li>
                    Wanting a simple, athlete-specific plan instead of guessing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas / examples */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Practical coaching for real athlete schedules
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We know most athletes aren&apos;t cooking gourmet meals between
                  classes, work, lifts, and games. Coaching focuses on simple,
                  repeatable patterns using the foods you actually have access
                  to.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  That might mean quick breakfasts before early ice times,
                  packing snacks for tournament days, or building post-practice
                  meals that speed up recovery instead of slowing it down.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Parents, coaches, and athletes can all be involved as needed
                  so everyone understands the plan and expectations.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Common focus areas with athletes
                </h3>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li>Building better breakfasts before school and training.</li>
                  <li>
                    Planning snacks and hydration for long practice nights or
                    tournament weekends.
                  </li>
                  <li>
                    Adjusting fuelling around heavy lift days versus lighter or
                    rest days.
                  </li>
                  <li>
                    Structuring intake for lean mass gain without excessive body
                    fat.
                  </li>
                  <li>
                    Simplifying choices when eating at school cafeterias,
                    arenas, or on the road.
                  </li>
                </ul>
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
                  Want your nutrition to match how seriously you train?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Athlete Nutrition Coaching helps you move away from random
                  eating and towards a fuelling plan that supports performance,
                  recovery, and long-term development.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your sport, level, and upcoming schedule, and we&apos;ll
                  recommend the right level of support for you.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Start with a Nutrition consult
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;ll review your current approach, answer questions, and
                  outline what working together would look like for you (and
                  parents, if applicable).
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Nutrition Consult
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call the Gym
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-dashed border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Contact &amp; Location Details
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
