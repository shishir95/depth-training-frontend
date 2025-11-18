// src/app/services/athlete-nutrition-coaching/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function AthleteNutritionCoachingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same structure as Rehab/Athlete pages */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left: main copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Athletic Training • Nutrition
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Athlete Nutrition Coaching
                  <span className="block text-red-400">
                    Match your training with a high-performance nutrition plan.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Health and performance both start with what you eat. Athlete
                  Nutrition Coaching helps you build a simple, realistic plan
                  for practices, games, and training days so you recover better,
                  have more energy, and get the most out of your work in the
                  gym and on the ice or field. 
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Get Your Nutrition on Track
                  </a>
                  <a
                    href="https://forms.gle/"
                    // replace with the exact forms.gle link your client uses
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Sign Up for Nutrition Coaching
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Coaching is led by Precision Certified Nutrition Coaches and
                  can be done virtually or in person. 
                </p>
              </div>

              {/* Right: quick facts card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What you&apos;ll get as an athlete
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      A simple nutrition plan designed around your sport, age,
                      schedule, and goals. 
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Guidance on better breakfasts, lunches, and dinners for
                      performance and recovery.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Pre- and post-workout / game fueling strategies so you
                      have energy when it counts. 
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Support, accountability, and adjustments over time as your
                      season or goals change.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Who it's for / What you learn */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who Athlete Nutrition Coaching is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For athletes who know training alone isn&apos;t enough — and
                  want their nutrition to finally match their effort. 
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Youth, high school, varsity, and pro athletes.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Athletes who feel low energy at practices or games and
                      want to fix their fueling.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Players trying to build muscle, lean out, or recover
                      better between sessions.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Athletes and parents who want clear, simple nutrition
                      habits they can actually stick to.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: what you learn */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What you&apos;ll learn & work on
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Sessions focus on practical changes you can make right away,
                  not complicated diets. 
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Fundamentals of athlete nutrition
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Building a better breakfast
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Structuring lunch & dinner around training
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Smarter snacks for energy
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Pre- and post-workout/game fueling
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Hydration basics & daily habits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What to expect (3 simple steps) */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from Athlete Nutrition Coaching
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Reach out & ask questions
                </h3>
                <p className="text-neutral-300 text-sm">
                  Call the clinic or email the team if you have questions or
                  want to get started. Our Client Experience Team can walk you
                  through pricing and options. 
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Book your first nutrition assessment
                </h3>
                <p className="text-neutral-300 text-sm">
                  You&apos;ll meet with a Precision Certified Nutrition Coach
                  for an initial assessment and goal-setting session, then get a
                  plan tailored to you. 
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Follow up, adjust & stay accountable
                </h3>
                <p className="text-neutral-300 text-sm">
                  Sessions are typically done virtually, with follow-ups to keep
                  you accountable and tweak your plan as training and seasons
                  change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Final CTA */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Nutrition might be your missing link.
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  If you&apos;re already putting in the work in the gym and on
                  the ice or field, Athlete Nutrition Coaching can help you
                  finally align your food with your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:12267489494"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Call to Get Started
                </a>
                <a
                  href="https://forms.gle/"
                  // again, plug in the exact sign-up form link here
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Sign Up for Nutrition Coaching
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterStrip />
    </div>
  );
}
