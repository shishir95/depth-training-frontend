"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function PersonalTrainingPage() {
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
                  Fitness • Personal Training
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Personal Training
                  <span className="block text-red-400">
                    one-on-one coaching tailored to you.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Work directly with a Depth coach in a fully individualized
                  setting. Every phase, session, and exercise is built around
                  your goals, movement, and lifestyle—not a generic program.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Personal Training
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Request a Consult
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  A great option if you want focused attention, specific
                  outcomes, or are new to structured strength training.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What you get with 1:1 training
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Individual assessment</span>{" "}
                      to understand strength, mobility, and movement patterns.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Custom programming</span>{" "}
                      aligned to your goals—fat loss, performance, rehab, or
                      general health.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Real-time coaching</span>{" "}
                      on technique, tempo, and load selection every session.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Progress tracking</span>{" "}
                      so you can see improvements in strength, capacity, and
                      confidence.
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
                  How Personal Training at DEPTH works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start with a conversation about your goals, medical history,
                  and training background. From there, your coach runs you
                  through assessments to understand how you move today.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your program is then built around your schedule and priorities.
                  Each session is coached 1:1, with adjustments made in real
                  time as your strength, capacity, and confidence grow.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Expect a balance of strength, conditioning, and movement work
                  to support long-term progress—not just short bursts of
                  intensity.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical 1:1 training journey includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Initial consult and movement/strength assessment.</li>
                  <li>Custom program built around your goals and schedule.</li>
                  <li>Regular 1:1 coached sessions at DEPTH.</li>
                  <li>
                    Periodic progress reviews and program updates every few
                    weeks.
                  </li>
                  <li>
                    Lifestyle and training recommendations outside of sessions as
                    needed.
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
              Personal Training is a strong fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">New to training</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Looking for guidance on where to start safely.</li>
                  <li>Unsure how to use equipment or structure workouts.</li>
                  <li>Wanting coaching on form and confidence in the gym.</li>
                  <li>Prefer learning 1:1 before joining groups.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Working toward specific goals
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Chasing strength or performance targets.</li>
                  <li>Wanting to change body composition strategically.</li>
                  <li>
                    Returning from injury with guidance from your rehab team.
                  </li>
                  <li>Preparing for sport, events, or life milestones.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Needing structure &amp; accountability
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Struggle to stay consistent on your own.</li>
                  <li>Prefer scheduled sessions on the calendar.</li>
                  <li>Want someone tracking the big picture for you.</li>
                  <li>Value honest feedback and coaching along the way.</li>
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
                  Ready for coaching that’s built around you?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Whether you&apos;re brand new or experienced, 1:1 training
                  gives you clarity, structure, and support. We’ll help you find
                  the right coach, schedule, and plan for where you&apos;re at
                  right now.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your goals and availability and we&apos;ll follow up with
                  next steps for a Personal Training consult.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Start with a Personal Training consult
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;ll talk through what you&apos;re aiming for, answer
                  questions, and recommend how often to train.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Consult
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
