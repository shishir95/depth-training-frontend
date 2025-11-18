// src/app/services/athlete-training-14-plus/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function AthleteTraining14PlusPage() {
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
                  Athletic Training • Ages 14+
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Athlete Training (14+)
                  <span className="block text-red-400">
                    Train with purpose. Play with confidence.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  High-performance strength and speed training for driven
                  athletes in high school and beyond. Every athlete follows a
                  coached, individualized program – never random workouts.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Talk About Training
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
                  408 Albert Street, Waterloo • Programs run year-round with
                  flexible scheduling.
                </p>
              </div>

              {/* Right: quick facts card – mirrors Rehab card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  Why train at DEPTH as a 14+ athlete
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Individualized programs for your sport and season.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Coaches on the floor every session – no unsupervised lifting.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Strength, speed, and conditioning built together.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Supportive, high-energy training environment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Who it's for / What we focus on (same 2-col layout) */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who this training is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For competitive athletes who want a clear plan, not random
                  workouts.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Athletes 14+ from any sport or position.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Players aiming to make or move up a team.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Athletes who want more strength, speed, and power.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Athletes cleared to return to strength training after injury.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: key focus areas */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we focus on in the gym
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Sessions are built to carry over directly to your sport.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength & power
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Speed & acceleration
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Agility & change of direction
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Conditioning for your sport
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Mobility & movement quality
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Habits that reduce injury risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What to expect (3 cards, same as Rehab) */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from Athlete Training (14+)
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">Call & choose your start</h3>
                <p className="text-neutral-300 text-sm">
                  Call the gym, share your sport and season, and we&apos;ll help
                  you pick start dates and weekly training times.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Assessment & personalized plan
                </h3>
                <p className="text-neutral-300 text-sm">
                  Your coach checks key movements and builds a plan that matches
                  your age, sport, and training history.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Train with coaching every session
                </h3>
                <p className="text-neutral-300 text-sm">
                  You train in small groups with hands-on coaching, progress
                  your program weekly, and track results over your season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Final CTA (same as Rehab layout) */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Ready to train like an athlete, not a random workout?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Call us to talk about Athlete Training (14+). We&apos;ll walk
                  you through options and help you get started.
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
