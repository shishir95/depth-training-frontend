"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function TeamTrainingPage() {
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
                  Athlete Training • Team Training
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Team Training
                  <span className="block text-red-400">
                    one program, one standard, one team culture.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  The DEPTH Team Training Program is built for minor and
                  competitive sports teams who want a consistent off-ice
                  standard. We help your athletes get stronger, faster, and more
                  resilient—while building chemistry and shared expectations.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call About Team Training
                  </a>
                  <a
                    href="mailto:info@depthtraining.ca"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Email Our Athletics Staff
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Ideal for hockey, soccer, basketball, football, and other team
                  sports looking for a clear, professional training framework.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Team Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Educating athletes</span>{" "}
                      on proper movement, strength, and training habits so they
                      understand the &quot;why&quot; behind the work.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Exposing athletes</span>{" "}
                      to appropriately challenging, progressive training—not just
                      random &quot;hard&quot; workouts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Encouraging team culture</span>{" "}
                      where athletes push, support, and hold each other to a high
                      standard.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Sport-specific development</span>{" "}
                      of strength, mobility, agility, and speed that actually
                      translates to your sport.
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
                  How Team Training works at DEPTH
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by learning about your team: age group, level,
                  season, schedule, and coaching priorities. From there, we build
                  a training plan that fits your competition calendar and budget.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Sessions are coached by DEPTH staff and follow a clear
                  structure: warm-up, movement and mechanics, strength and power
                  work, speed / agility, and conditioning that reflects your
                  sport demands.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Options include pre-season blocks, in-season maintenance, and
                  longer off-season programs. We can run sessions at DEPTH
                  facilities and, in some cases, virtually.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical team training phase includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial call with coaches or managers to clarify goals and
                    logistics.
                  </li>
                  <li>
                    Planning of frequency (e.g. 1–3x per week) and length of
                    training block.
                  </li>
                  <li>
                    Progressive strength, power, and movement development across
                    the phase.
                  </li>
                  <li>
                    Integrated conditioning and injury-risk reduction work.
                  </li>
                  <li>
                    Clear communication with staff on progress, expectations, and
                    next steps.
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
              Team Training is ideal if your team…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Wants a real edge</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Competes at rep, AAA, school, or club levels.</li>
                  <li>Feels behind physically compared to top teams.</li>
                  <li>
                    Wants players to show up to camp or playoffs ready, not
                    catching up.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Needs professional structure
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Coaches are busy and need an expert partner.</li>
                  <li>
                    You&apos;re tired of guessing at team workouts or doing the
                    same thing every year.
                  </li>
                  <li>
                    You want long-term athlete development, not short-term
                    punishment.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Values culture & accountability
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    You want shared standards around effort, preparation, and
                    behaviour.
                  </li>
                  <li>Captains and leaders need support setting the tone.</li>
                  <li>
                    You want training to bring the group closer, not divide it.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What else is included */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  More than just workouts
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Beyond physical training, our staff can support your team with
                  simple warm-up systems, recovery and nutrition education, and
                  basic mental preparation strategies.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We want your players to understand how to prepare, how to
                  train, and how to take care of their bodies in-season and
                  off-season—not just &quot;do a program&quot; with no context.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Packages can be tailored to your level of competition and
                  budget, with flexibility in length, frequency, and add-ons.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  What we can provide your team
                </h3>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li>Team strength, speed, and conditioning sessions.</li>
                  <li>Dynamic warm-up to use before practices and games.</li>
                  <li>
                    Basic nutrition guidance for game days and tournaments.
                  </li>
                  <li>
                    Simple mental prep and routine ideas for players and leaders.
                  </li>
                  <li>Options for in-person and limited virtual support.</li>
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
                  Want a clear training plan for your whole team?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  DEPTH Team Training gives your athletes a professional
                  environment, your staff a trusted partner, and your program a
                  shared standard for physical preparation.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your sport, age group, and goals and we&apos;ll outline
                  a team training option that fits your season and budget.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Team Training staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We can answer questions about packages, scheduling, and how to
                  integrate DEPTH into your annual plan.
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
                    Email About Team Training
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
