// src/app/services/on-ice-hockey-training/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function OnIceHockeyTrainingPage() {
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
                  Athletic Training • On-Ice Hockey
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  On-Ice Hockey Training
                  <span className="block text-red-400">
                    Sharpen your game where it matters most.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Expert-led on-ice training in Kitchener–Waterloo that blends
                  skating speed, edge work, and puck skills with the strength
                  and conditioning DEPTH is known for, so you see real results
                  in games — not just in drills.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://www.depthtraining.ca/athletics/on-ice-hockey/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    View On-Ice Details
                  </a>
                  <a
                    href="mailto:dave@depthtraining.ca"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Email About On-Ice Packages
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  On-ice training options are available for all Off-Season
                  Hockey Programs in partnership with Prolific Hockey and Laura
                  McIntosh Hockey.
                </p>
              </div>

              {/* Right: quick facts card – mirrors Rehab cards */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  Why choose On-Ice training with DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Hockey-specific sessions focused on skating speed, edges,
                      agility, and puck control.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Integrated with DEPTH Off-Season programs for
                      game-ready conditioning.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      On-ice development options for youth, junior, varsity, and
                      pro players.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Partnerships with Prolific Hockey and Laura McIntosh
                      Hockey for elite skill coaching.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Who it's for / What we focus on */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who On-Ice Hockey Training is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For hockey players who want their on-ice skills to match the
                  work they put in off the ice.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Youth and minor hockey players looking to level up.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      U13–junior players preparing for tryouts, camps, or
                      upcoming seasons.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Elite girls and women&apos;s players who want high-level,
                      competitive skates.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Junior, university, and pro athletes who need sharp,
                      efficient summer sessions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: what the program works on */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we focus on during On-Ice sessions
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Sessions are built to transfer directly into game situations,
                  not just practice drills.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Skating speed & edge work
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Agility & change of direction
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Puck control & handling under pressure
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Shooting & game-like finishing
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Small-area games & decision making
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Conditioning that matches game demands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What to expect (three steps) */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from On-Ice Hockey Training
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Review programs & age groups
                </h3>
                <p className="text-neutral-300 text-sm">
                  Visit the On-Ice Hockey Training page to see current summer
                  options and find the age group or level that fits you.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Email to ask about packages
                </h3>
                <p className="text-neutral-300 text-sm">
                  Email the contact listed for your group (e.g. dave@depthtraining.ca
                  or chris@prolifichockey.ca) to ask about spots and pricing.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Train on-ice through the summer
                </h3>
                <p className="text-neutral-300 text-sm">
                  Commit to the full on-ice block alongside your Off-Season gym
                  program so skating, skills, and conditioning all peak together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Final CTA strip */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Want your on-ice game to match your off-ice work?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Check the On-Ice Hockey Training page for details, then email
                  or call to ask about packages and availability for your level.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.depthtraining.ca/athletics/on-ice-hockey/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  View On-Ice Programs
                </a>
                <a
                  href="tel:12267489494"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Call DEPTH Training
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
