"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function NutritionTrainingPage() {
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
                  Fitness • Nutrition Training
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Nutrition Training
                  <span className="block text-red-400">
                    practical coaching for sustainable habits.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  We focus on realistic nutrition strategies that support your
                  training, health, and lifestyle. No extreme rules or quick
                  fixes—just clear guidance, accountability, and education.
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
                  Ideal if you want support with fuelling training, changing body
                  composition, or simplifying day-to-day food decisions.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Nutrition Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Foundational habits</span>{" "}
                      like consistent meals, protein intake, and hydration.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Fueling training &amp; recovery
                      </span>{" "}
                      so your nutrition supports how you want to feel and
                      perform.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Real-life strategies</span>{" "}
                      for work, family, travel, and social events.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Education &amp; accountability
                      </span>{" "}
                      so you understand the &quot;why&quot; behind decisions and
                      stay supported.
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
                  How Nutrition Training at DEPTH works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by learning about your current habits, preferences,
                  training, and schedule. The goal is to understand your real
                  life—not design the &quot;perfect&quot; week that never
                  happens.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  From there, your coach builds simple, clear structures around
                  meals, portions, and weekly patterns. You&apos;ll focus on a
                  few key behaviours at a time while we review progress and
                  adjust.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  We&apos;ll always keep performance, health, and sustainability
                  in mind—no all-or-nothing rules, and no expectation that you
                  have to be &quot;perfect&quot; to see results.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical coaching process includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Initial consult and intake questionnaire.</li>
                  <li>
                    Review of current eating patterns, training, and constraints.
                  </li>
                  <li>
                    Clear, written guidelines and habits tailored to your goals.
                  </li>
                  <li>
                    Regular check-ins to review progress and troubleshoot road
                    blocks.
                  </li>
                  <li>
                    Adjustments to habits, structure, or targets as life and
                    goals evolve.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Who it helps */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Nutrition Training is especially helpful if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Trying to change body composition
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Wanting fat loss without extreme dieting.</li>
                  <li>Looking to build or maintain lean muscle.</li>
                  <li>Feeling stuck despite training consistently.</li>
                  <li>Tired of bouncing between on/off approaches.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Supporting training &amp; performance
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Training multiple times per week at DEPTH.</li>
                  <li>Preparing for sport, competition, or events.</li>
                  <li>Wanting better energy and recovery.</li>
                  <li>Managing busy work or family schedules.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Wanting more clarity, less stress
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Overwhelmed by conflicting nutrition advice.</li>
                  <li>Unsure what &quot;healthy&quot; looks like for you.</li>
                  <li>Wanting flexible guidelines, not rigid plans.</li>
                  <li>Prefer support and accountability over guessing.</li>
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
                  Want your nutrition to actually match your goals?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Nutrition Training helps you move away from short-term diets
                  and toward sustainable habits that support how you want to
                  look, feel, and perform.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your goals and challenges and we&apos;ll recommend the
                  right level of coaching and follow-up.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Start with a Nutrition consult
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;ll review your situation, answer your questions, and
                  outline what working together would look like.
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
