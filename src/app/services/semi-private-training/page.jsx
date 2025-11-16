"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function SemiPrivateTrainingPage() {
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
                  Fitness • Semi Private Training
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Semi Private Training
                  <span className="block text-red-400">
                    small-group coaching with personalized programming.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Train in a small group with a coach who knows your body, goals,
                  and history. Semi Private Training blends the energy of a group
                  environment with the structure and accountability of 1:1
                  coaching.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Semi Private Session
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Talk to Our Team
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Ideal for people who want coaching, structure, and progress
                  without needing full-time 1:1 training.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What makes Semi Private different?
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Small group size</span>{" "}
                      (typically 2–5 people) so your coach can still give
                      individual attention.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Individual programs</span>{" "}
                      built around your goals, injury history, and training
                      experience.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Shared session flow</span>{" "}
                      that keeps the energy high while everyone works their own
                      plan.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Ongoing progress checks</span>{" "}
                      so loads, exercises, and volume evolve as you get stronger.
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
                  How Semi Private Training works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by understanding your goals, training background, and
                  any injuries, then build a plan that fits into a small-group
                  schedule. You share the space and coaching time, but not a
                  cookie-cutter workout.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your coach manages exercise selection, loading, tempo, and
                  progressions while you focus on showing up and executing.
                  You’ll train alongside others, but at your own pace and level.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Sessions are designed to be sustainable long term—supporting
                  performance, strength, and overall health rather than just
                  short-term intensity.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical Semi Private setup includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial consult and assessment with a coach to set direction.
                  </li>
                  <li>
                    Custom program built around strength, conditioning, and
                    mobility needs.
                  </li>
                  <li>
                    Reserved training times with a consistent small group.
                  </li>
                  <li>
                    Real-time coaching on form, load choices, and progressions.
                  </li>
                  <li>
                    Periodic check-ins and program updates as you improve.
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
              Semi Private Training is a great fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Looking for guidance</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Newer to strength training and want coaching.</li>
                  <li>Coming back after time away from the gym.</li>
                  <li>Unsure how to structure training for your goals.</li>
                  <li>Wanting help with technique and confidence.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Wanting accountability &amp; community
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Prefer training with others, not alone.</li>
                  <li>Value a consistent group and coach.</li>
                  <li>Need structure to stay consistent week-to-week.</li>
                  <li>Like having others around pushing for similar goals.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Balancing time, budget &amp; results
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Want coaching but don’t need 1:1 every session.</li>
                  <li>Looking for a long-term, sustainable approach.</li>
                  <li>Trying to fit training around work, sport, or family.</li>
                  <li>Care about performance, health, and longevity.</li>
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
                  Want small-group training that still feels personal?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Semi Private Training gives you structure, coaching, and
                  support—without losing flexibility. We’ll match you with a
                  coach, time slot, and program that make sense for your
                  schedule and goals.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share a bit about your training background and what you&apos;re
                  working toward, and we&apos;ll help you decide if Semi Private is
                  the right starting point.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to explore Semi Private options?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Reach out with your preferred times and goals, and our team
                  will follow up with availability and next steps.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Semi Private Consult
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
