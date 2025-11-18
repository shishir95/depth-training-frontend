// src/app/services/1-on-1-athlete-training/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function OneOnOneAthleteTrainingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same structure as Rehab pages */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left: main copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Athletic Training • 1-on-1
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  1-on-1 Athlete Training
                  <span className="block text-red-400">
                    All eyes on you. Every rep with a purpose.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Private, fully individualized training sessions for athletes of
                  all ages. Your coach builds and coaches a plan 100% tailored to
                  your sport, goals, and schedule so you can move faster toward
                  the level you want to play at.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Talk About 1-on-1
                  </a>
                  <a
                    href="https://www.depthtraining.ca/contact/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Contact & Location Details
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  1-on-1 athlete training can be combined with semi-private
                  athlete training to maximize results and coaching time.
                </p>
              </div>

              {/* Right: quick facts card – mirrors other service pages */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  Why choose 1-on-1 Athlete Training
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      100% of your coach’s attention – every session is built and
                      coached just for you.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Programs tailored to age, gender, injury history, sport,
                      training experience, and goals.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Flexible scheduling to fit busy school, sport, and life
                      commitments.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Great for dialing in technique, rebuilding after injury, or
                      preparing for a key season or camp.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Who it's for / What we work on */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who 1-on-1 Athlete Training is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For athletes who want more detail, more feedback, and more
                  intentional work in every session.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Athletes of any age looking for private coaching.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Players preparing for tryouts, showcases, or important
                      seasons.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Athletes who learn best with 1-on-1 instruction and clear,
                      direct feedback.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Those returning from injury who want extra eyes on their
                      movement and technique.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: key focus areas */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we work on in 1-on-1 sessions
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Every plan is built around what matters for your sport and
                  current stage of development.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength & power output
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Speed & acceleration mechanics
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Agility, cutting & change of direction
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Sport-specific conditioning
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Movement quality & mobility
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Habits, confidence & game preparation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What to expect (3-step cards) */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from 1-on-1 Athlete Training
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Call & talk through your goals
                </h3>
                <p className="text-neutral-300 text-sm">
                  Call the gym to share your sport, level, schedule, and what
                  you want from 1-on-1 sessions. We&apos;ll explain options and
                  how they pair with athlete training.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Assessment & customized plan
                </h3>
                <p className="text-neutral-300 text-sm">
                  Your coach assesses movement, strength, and needs, then builds
                  a plan specific to you — including how often to train 1-on-1
                  and how to combine it with group sessions if needed.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Train with full attention each session
                </h3>
                <p className="text-neutral-300 text-sm">
                  You meet your coach at set times, execute your plan with
                  detailed coaching, and adjust week to week based on how you
                  feel and what&apos;s coming up in your season.
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
                  Want a coach fully focused on your development?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Call us to talk about 1-on-1 Athlete Training and how it can
                  fit with your current program, season, and goals.
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
                  href="https://www.depthtraining.ca/contact/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Contact & Location Details
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
