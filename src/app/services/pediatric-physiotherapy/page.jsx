// src/app/services/pediatric-physiotherapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function PediatricPhysiotherapyPage() {
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
                  Rehab • Pediatric Physiotherapy
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Pediatric physiotherapy
                  <span className="block text-red-400">
                    to help kids move, grow, and play with confidence.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Pediatric physiotherapy at DEPTH supports children and teens
                  who are dealing with pain, injuries, or movement challenges.
                  We focus on age-appropriate exercise, play-based rehab, and
                  education for both kids and families.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Pediatric Physio
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Pediatric physiotherapy services provided at DEPTH Training
                  &amp; Physiotherapy in Waterloo. Parents and guardians are
                  welcome to be involved throughout the assessment and treatment
                  process.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Physio care built for kids and teens
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Sport and activity injuries</span>{" "}
                      from practices, games, or play.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Growth-related pain</span>{" "}
                      like knee, heel, or hip pain during growth spurts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Movement or coordination concerns</span>{" "}
                      that make sports or gym class harder.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Family-centred care</span>{" "}
                      with clear home plans and check-ins for parents.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  What to expect at a pediatric physio appointment
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by talking with both the child and parent/guardian
                  about what&apos;s been going on — when symptoms started, what
                  activities are hard, and what your goals are as a family.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  The assessment may include watching how your child moves,
                  checking strength, flexibility, balance, and how they handle
                  age-appropriate tasks like running, jumping, stairs, or sport
                  skills.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Treatment is active and engaging, with exercises and games
                  designed to feel approachable rather than intimidating. You
                  will leave with a simple home plan and a clear idea of what
                  progress should look like over time.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical visit may include
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Conversation with child and parent about concerns.</li>
                  <li>
                    Assessment of posture, walking/running, balance, and sport
                    or play movements.
                  </li>
                  <li>
                    Age-appropriate exercises, drills, or hands-on treatment as
                    needed.
                  </li>
                  <li>
                    Education for the family on what to expect and how to help
                    at home.
                  </li>
                  <li>
                    A plan for follow-up and how to know when things are
                    improving.
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
              Pediatric physiotherapy is a good fit if your child…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Has pain or injuries</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Knee, ankle, or heel pain with sport or running</li>
                  <li>Shoulder or elbow pain from throwing or swimming</li>
                  <li>Back or neck pain from school, screens, or activity</li>
                  <li>Sprains, strains, or overuse injuries</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Struggles with movement or confidence
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Seems clumsy or uncoordinated in gym or sport</li>
                  <li>Gets tired quickly compared to peers</li>
                  <li>
                    Avoids certain activities because they feel too hard or
                    uncomfortable
                  </li>
                  <li>
                    Wants to participate more fully but doesn&apos;t know how
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Is returning to sport or activity
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Recovering from a recent injury</li>
                  <li>Needing a gradual return-to-play plan</li>
                  <li>Balancing practice, games, and rest</li>
                  <li>
                    Family wants guidance instead of guessing what&apos;s safe
                  </li>
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
                  Support for your child&apos;s movement, sport, and daily life
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Seeing your child in pain or struggling with activity can be
                  stressful. Having a clear plan and a team to lean on can make
                  decisions around sport, gym class, and play much easier.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our pediatric physio care is designed to fit your child&apos;s
                  age, interests, and goals, while also supporting you as a
                  parent or guardian with simple, realistic home strategies.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re unsure whether physiotherapy is appropriate,
                  we can help you decide what the best next step is.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or ask a question?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Reach out and we&apos;ll help you figure out the best option
                  for your child.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Pediatric Physio
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call the Clinic
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
