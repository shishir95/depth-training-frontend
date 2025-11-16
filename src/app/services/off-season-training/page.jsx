"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function OffSeasonTrainingPage() {
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
                  Athlete Training • Off-Season
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Off-Season Training
                  <span className="block text-red-400">
                    build strength, speed, and durability for next season.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Off-season training at DEPTH is built to help athletes make
                  their biggest yearly progress. With structured phases and expert
                  coaching, you’ll develop the strength, power, and conditioning
                  needed to dominate when your season returns.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Join Off-Season Program
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Contact Our Staff
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Typical for hockey, soccer, basketball, football, and field
                  sport athletes preparing for next-season demands.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Off-Season Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Strength foundations</span>{" "}
                      to build the base for power and speed development.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Explosive power</span>{" "}
                      through plyometrics, med-ball work, and smart progressions.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Speed &amp; change-of-direction</span>{" "}
                      to improve first-step quickness and agility.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Conditioning for game demands</span>{" "}
                      so you’re prepared for the pace of pre-season and tryouts.
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
                  How Off-Season Training works at DEPTH
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Off-season training runs in structured phases designed to
                  maximize athletic development. We map out your timeline based
                  on when your season ends and when training camp or tryouts
                  begin.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Each phase builds on the one before it—starting with strength
                  foundations, progressing to power and speed, and finishing with
                  conditioning that mirrors the intensity of your sport.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  All sessions are fully coached, with modifications based on
                  your sport, position, and training age.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical off-season phase includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Strength phase to build overall force production.</li>
                  <li>Power &amp; plyometric progressions.</li>
                  <li>Speed, agility, and acceleration drills.</li>
                  <li>Conditioning matched to your position and sport demands.</li>
                  <li>Ongoing progression toward pre-season readiness.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Off-Season Training is ideal if you’re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Preparing for next season</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Wanting to make a team or level up next year.</li>
                  <li>Focused on long-term athletic development.</li>
                  <li>Needing a structured plan from May–August.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">Wanting to get stronger & faster</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Looking to improve speed and acceleration.</li>
                  <li>Wanting serious strength and power development.</li>
                  <li>Needing better on-ice / on-field conditioning.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">A competitive athlete</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Training at rep, elite, varsity, or junior levels.</li>
                  <li>Coming off a long season and needing rebuilding.</li>
                  <li>Ready to commit to a multi-phase program.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  What to expect during Off-Season Training
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Off-season sessions typically run 3–5 days per week depending
                  on your sport and age. Athletes can choose semi-private or
                  specialized training options.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Recovery strategies like mobility work, load management, and
                  optional physiotherapy support help ensure progress without
                  burnout or overtraining.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Expect a high-energy environment, intentional coaching, and a
                  clear plan from start to finish.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Steps to begin Off-Season Training
                </h3>
                <ol className="space-y-2 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Contact our team to discuss your sport and timeline.</li>
                  <li>Choose training frequency (3–5 days/week).</li>
                  <li>Set up your Jane account for booking & billing.</li>
                  <li>Begin the first training block and progress weekly.</li>
                  <li>Transition into pre-season phase with confidence.</li>
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
                  Ready to take advantage of the off-season?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  The biggest improvements happen when competition stops. Our
                  off-season program builds the strength and speed athletes need
                  to rise to the next level.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your sport and goals and we’ll guide you to the right
                  training plan.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Athlete Training staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Ask about schedules, pricing, or what phase you should start
                  with today.
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
                    Email About Off-Season Training
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
