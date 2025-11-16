"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function OnIceHockeyTrainingPage() {
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
                  Athlete Training • On-Ice Hockey
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  On-Ice Hockey Training
                  <span className="block text-red-400">
                    position-specific skating, skills, and game situations.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Our on-ice programs are built to compliment off-ice training
                  and team practices. Sessions focus on skating efficiency,
                  puck skills, decision-making, and compete habits that
                  translate directly to games.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/the-zone-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    View On-Ice Schedule
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Ask About Hockey Programs
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  On-ice sessions typically run out of{" "}
                  <span className="font-semibold">The Zone Training</span> in
                  Waterloo, alongside our Youth &amp; Team Training Facility.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What On-Ice Hockey Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Skating mechanics &amp; edge control
                      </span>{" "}
                      to improve acceleration, transitions, and lateral movement.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Puck skills under pressure
                      </span>{" "}
                      including handling, passing, and shooting in realistic
                      situations.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Positional habits</span>{" "}
                      for forwards, defense, and goalies based on game demands.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Compete level &amp; decision-making
                      </span>{" "}
                      in small-area games and scenario-based drills.
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
                  How On-Ice Hockey Training works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Players are grouped by age and level so the pace, intensity,
                  and drills match where they play. Sessions are deliberately
                  planned to complement off-ice strength and conditioning—not
                  just repeat team practice.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  A typical session blends technical skating work, puck
                  handling, passing, shooting, and game-like situations. Coaches
                  provide direct feedback while keeping flow and tempo high.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Off-season, in-season, and pre-season options are available,
                  each with slightly different emphasis based on time of year.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical on-ice session includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Dynamic warm-up and edge control / skating technique.</li>
                  <li>
                    Puck skills at varying speeds (handling, passing, shooting).
                  </li>
                  <li>
                    Position-specific drills for forwards, defense, or goalies
                    when relevant.
                  </li>
                  <li>
                    Small-area games or situational drills to connect skills to
                    game play.
                  </li>
                  <li>
                    Short debrief, reminders, and expectations for next session.
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
              On-Ice Hockey Training is ideal if you’re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  A developing hockey player
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Playing rep, AAA, junior, or competitive minor hockey.</li>
                  <li>Looking to improve mechanics and confidence with the puck.</li>
                  <li>
                    Wanting more detailed coaching than team practices alone.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Preparing for camps or tryouts
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Heading into spring or fall evaluations.</li>
                  <li>
                    Wanting targeted work on weaknesses before key opportunities.
                  </li>
                  <li>
                    Needing conditioning and pace that mimics game demands.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Wanting skills that transfer to games
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Tired of drills that don’t mirror real game situations.</li>
                  <li>
                    Prefer small-area, decision-making focused training over
                    endless patterns.
                  </li>
                  <li>
                    Value coaches who understand both on-ice and off-ice
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location & expectations */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Where sessions run &amp; what to bring
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  On-ice hockey training is typically held at{" "}
                  <span className="font-semibold">The Zone Training</span>,{" "}
                  located at{" "}
                  <span className="font-semibold">
                    483 Conestogo Road, Waterloo
                  </span>
                  . Many athletes also train in our connected Youth &amp; Team
                  Training Facility for off-ice work.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Players should arrive with full equipment, a properly sharpened
                  stick and skates, water bottle, and a mindset ready to work at
                  game speed.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Parents and players receive communication around group level,
                  expectations, and any off-ice work associated with the program.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Steps to join On-Ice Hockey Training
                </h3>
                <ol className="space-y-2 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Review current on-ice program options and dates for your age
                    group.
                  </li>
                  <li>
                    Contact our team if you&apos;re unsure which group is the
                    best fit.
                  </li>
                  <li>
                    Register through Jane and complete any required waivers or
                    forms.
                  </li>
                  <li>
                    Arrive 15–20 minutes early for your first session to get
                    oriented.
                  </li>
                  <li>
                    Keep communication open with coaches about goals and
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
                  Want your on-ice play to match your potential?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our On-Ice Hockey Training programs are designed to bridge the
                  gap between skills training and real game impact—so you see the
                  difference in shifts, not just in drills.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your age, level, and upcoming goals, and we&apos;ll help
                  you choose the right on-ice program.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Hockey development staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We can help you understand which on-ice and off-ice training
                  combo is best for your season.
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
                    Email About On-Ice Training
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
