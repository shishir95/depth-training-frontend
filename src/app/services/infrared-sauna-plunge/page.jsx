// src/app/services/infrared-sauna-plunge/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function InfraredSaunaPlungePage() {
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
                  Recovery • Infrared Sauna &amp; Plunge
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Infrared sauna &amp; cold plunge
                  <span className="block text-red-400">
                    to support recovery, relaxation, and performance.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Combine the benefits of infrared heat and cold exposure in a
                  controlled, coached environment. At DEPTH, sauna and plunge
                  sessions are designed to complement your training, rehab, and
                  day-to-day stress, not replace the basics.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Sauna &amp; Plunge
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Infrared sauna and cold plunge sessions are available at DEPTH
                  Training &amp; Physiotherapy in Waterloo. Options for
                  stand-alone recovery sessions or add-ons around training and
                  rehab.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Heat + cold with purpose
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Infrared sauna</span>{" "}
                      sessions to promote relaxation, circulation, and a
                      downshift in stress.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Cold plunge exposure</span>{" "}
                      to build tolerance to discomfort, support recovery, and
                      help you feel alert and energized.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Guided protocols</span>{" "}
                      tailored to your training, rehab, and comfort level.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Integrated recovery</span>{" "}
                      alongside physiotherapy, strength training, and massage.
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
                  What to expect from a sauna &amp; plunge session
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  When you arrive, we&apos;ll review your goals, any medical
                  considerations, and your current training or rehab plan. From
                  there, we&apos;ll outline a simple protocol for your session
                  so you know exactly what to expect.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Sessions typically alternate between time in the infrared
                  sauna and time in the cold plunge, with built-in rest periods.
                  You&apos;ll be coached on breathing, pacing, and how to listen
                  to your body as you move between heat and cold.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  You&apos;ll leave with clarity on how often to use these tools
                  and how they fit alongside the fundamentals of strength,
                  sleep, stress, and nutrition.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical session may include
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Brief intake and review of goals and safety factors.</li>
                  <li>
                    Explanation of your planned heat and cold exposure intervals.
                  </li>
                  <li>
                    Guided time in the infrared sauna focusing on breathing and
                    relaxation.
                  </li>
                  <li>
                    Controlled cold plunge exposures with coaching on technique
                    and mindset.
                  </li>
                  <li>
                    Post-session guidance on recovery, frequency, and how to
                    integrate sessions with your training week.
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
              Sauna &amp; plunge can be a good fit if you…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Train or compete regularly
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Heavy strength training or sport schedule</li>
                  <li>Looking for structured recovery tools</li>
                  <li>Want to feel more &quot;reset&quot; between sessions</li>
                  <li>
                    Interested in layering heat/cold onto a solid training base
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Feel worn down or stressed
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Juggling work, school, family, and training</li>
                  <li>Having trouble switching &quot;off&quot; and relaxing</li>
                  <li>Feeling mentally or physically drained</li>
                  <li>
                    Wanting a set time in your week dedicated to recovery
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Enjoy pushing your comfort zone
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Curious about heat and cold exposure</li>
                  <li>
                    Want to build resilience in a safe, supervised environment
                  </li>
                  <li>Like challenges that test focus and breathing</li>
                  <li>
                    Want tools that support—not replace—your core habits
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
                  Add intentional recovery to your week
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Tools like infrared sauna and cold plunge work best when they
                  sit on top of strong foundations: smart training, sleep,
                  nutrition, and stress management. We&apos;ll always keep those
                  priorities in mind.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Whether you&apos;re deep into a training block, managing a
                  busy season of life, or just curious about heat and cold, we
                  can help you use these tools in a way that actually makes
                  sense for you.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re unsure where to start, reach out—we&apos;re
                  happy to walk you through options and frequency.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or ask a question?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;ll help you choose a session type and schedule that
                  fits your goals and your week.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Sauna &amp; Plunge
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
