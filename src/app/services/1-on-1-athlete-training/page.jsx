"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function OneOnOneAthleteTrainingPage() {
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
                  Athlete Training • 1-on-1
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  1-on-1 Athlete Training
                  <span className="block text-red-400">
                    fully customized coaching for specific goals.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  1-on-1 Athlete Training is for situations where group or
                  semi-private sessions aren&apos;t quite enough—whether you&apos;re
                  returning from injury, preparing for a key opportunity, or just
                  want focused attention on your development.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire About 1-on-1 Training
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Ask a Question
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Common for high-performance athletes, off-season
                  accelerators, or athletes returning from rehab who need a
                  tighter bridge back to full sport.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What 1-on-1 Athlete Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Completely individualized programming</span>{" "}
                      based on your sport, position, timeline, and priorities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Full coach attention</span>{" "}
                      every rep, every set—ideal for refining technique or
                      managing complex needs.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Performance and return-to-play goals
                      </span>{" "}
                      when you&apos;re building back from injury or preparing
                      for a key camp, tryout, or season.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Scheduling flexibility</span>{" "}
                      to align with busy training, school, or travel calendars.
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
                  How 1-on-1 Athlete Training works at DEPTH
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start with a detailed conversation about your situation:
                  sport demands, upcoming timelines, past injuries, and where
                  you feel limited right now. From there, we map out a plan for
                  how many sessions, what we&apos;ll target, and how your
                  training will integrate with on-ice / on-field work.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Each 1-on-1 session is fully coached. Your coach will guide
                  warm-up, activation, strength and power work, speed or
                  conditioning pieces, and any targeted extras (e.g. mobility,
                  deceleration, landing mechanics).
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  As you progress, your program evolves with you—adjusting
                  based on how you feel, what your schedule looks like, and how
                  close you are to key competition dates.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical 1-on-1 block includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial consult (in-person or virtual) to review goals,
                    medical history, and sport timelines.
                  </li>
                  <li>
                    Movement and performance assessment, plus any relevant
                    strength or power testing.
                  </li>
                  <li>
                    Custom program design integrated with your current training
                    and team commitments.
                  </li>
                  <li>
                    Regular 1-on-1 sessions with real-time adjustments and
                    coaching feedback.
                  </li>
                  <li>
                    Check-ins on progress, readiness, and next-phase planning
                    as your season evolves.
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
              1-on-1 Athlete Training is a strong fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Returning from injury or rehab
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Recently completed physiotherapy and need a bridge back to
                    full training.
                  </li>
                  <li>
                    Nervous about certain movements (cutting, landing,
                    contact).
                  </li>
                  <li>
                    Want close guidance so you&apos;re not guessing what&apos;s
                    safe.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Preparing for a key opportunity
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Heading into a high-stakes camp or selection process.</li>
                  <li>Transitioning to a new level (e.g. OHL, college).</li>
                  <li>
                    Wanting every part of your preparation to be dialed in.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Needing extra support or detail
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Prefer a quieter environment or have unique training needs.
                  </li>
                  <li>
                    Want deep technical feedback on specific lifts or
                    movements.
                  </li>
                  <li>
                    Have a schedule that doesn&apos;t match our group options.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expectations / logistics */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  What to expect from 1-on-1 sessions
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Sessions are typically 60 minutes and run out of our main{" "}
                  <span className="font-semibold">
                    DEPTH Training &amp; Physiotherapy facility
                  </span>{" "}
                  at 408 Albert Street in Waterloo. Booking and billing are
                  handled through our Jane system.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your coach will track key performance indicators (e.g.
                  strength markers, jump testing, sprint times when relevant)
                  so you can see tangible progress—not just feel like you&apos;re
                  working hard.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  We can also coordinate with your physiotherapist, sport coach,
                  or medical team when needed so everyone is on the same page
                  about your plan.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  How to get started with 1-on-1
                </h3>
                <ol className="space-y-2 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Reach out with your sport, age, and what you&apos;re hoping
                    to accomplish.
                  </li>
                  <li>
                    We&apos;ll recommend an appropriate coach and outline
                    suggested session frequency.
                  </li>
                  <li>
                    Confirm schedule options that work with both you and the
                    coach.
                  </li>
                  <li>
                    Complete any required intake or consent forms in Jane.
                  </li>
                  <li>
                    Start training and adjust the plan as your goals and season
                    progress.
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
                  Want truly personalized athlete development?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  1-on-1 Athlete Training gives you focused coaching time and a
                  program built entirely around your needs, not the average
                  athlete.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Tell us what you&apos;re working toward and we&apos;ll help
                  you decide if 1-on-1 is the right level of support—or if a
                  semi-private option is a better fit.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Athlete Training staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;ll walk you through options, pricing, and availability
                  for 1-on-1 sessions.
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
                    Email About 1-on-1 Training
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
