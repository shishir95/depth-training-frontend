// src/app/services/concussion-management/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function ConcussionManagementPage() {
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
                  Rehab • Concussion Management
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Concussion &amp; post-concussion care
                  <span className="block text-red-400">
                    to help you recover safely and confidently.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Concussions can affect how you think, feel, move, and perform.
                  Our concussion management team focuses on a structured return
                  to school, work, and sport using individualized rehab, clear
                  education, and ongoing support.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Concussion Assessment
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Concussion management services provided at DEPTH Training
                  &amp; Physiotherapy in Waterloo. If you&apos;re unsure whether
                  you&apos;ve had a concussion, we can help you decide on the
                  right next steps.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Support beyond &quot;just rest&quot;
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Symptom-guided rehab</span>{" "}
                      for headaches, dizziness, fogginess, and fatigue.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Return-to-school and work</span>{" "}
                      planning so you don&apos;t feel lost or rushed back too soon.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Sport-specific progression</span>{" "}
                      for athletes needing a clear step-by-step path back to play.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Team-based care</span>{" "}
                      alongside physiotherapy, vestibular rehab, and strength
                      training when needed.
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
                  What to expect from a concussion assessment
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your appointment starts with a detailed conversation about how
                  the injury happened, what symptoms you&apos;re experiencing,
                  and how they&apos;re affecting school, work, sport, and daily
                  life.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your therapist will then complete a structured assessment,
                  which may include balance testing, eye and vestibular
                  function, neck assessment, and graded exertion depending on
                  where you are in your recovery.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  You&apos;ll leave with clear guidance: what to avoid, what
                  light activity is safe, how to manage symptoms, and what the
                  next stages of progress should look like.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Your visit typically includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Discussion of injury, symptoms, and day-to-day demands.</li>
                  <li>
                    Assessment of balance, coordination, neck, and visual/vestibular
                    systems as appropriate.
                  </li>
                  <li>
                    Education on what a concussion is and how recovery usually
                    progresses.
                  </li>
                  <li>
                    A staged plan for returning to school, work, and physical
                    activity.
                  </li>
                  <li>
                    Recommendations for follow-up visits and when to involve your
                    family doctor or other providers.
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
              Concussion management is a good fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Recently injured</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Hit to the head or body in sport or daily life</li>
                  <li>Feeling &quot;off&quot;, foggy, or slowed down</li>
                  <li>Sensitivity to light, noise, or screens</li>
                  <li>Headaches or pressure you didn&apos;t have before</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Still not feeling like yourself
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Symptoms lasting longer than you expected</li>
                  <li>Struggling with school, work, or exercise</li>
                  <li>Feeling worse when you try to do more</li>
                  <li>Unsure what is safe or how hard to push</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Returning to sport or activity
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Needing a graded return-to-play plan</li>
                  <li>Wanting objective checks before full contact</li>
                  <li>
                    Coordinating with coaches, parents, or medical staff
                  </li>
                  <li>Looking for clarity instead of guessing</li>
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
                  Get a clear plan for your concussion recovery
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Navigating a concussion on your own can feel confusing and
                  overwhelming. Having guidance on what to do, what to avoid,
                  and how to gradually increase activity can make recovery feel
                  more predictable and less stressful.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our team can coordinate care across physiotherapy,
                  vestibular rehab, strength training, and school or sport
                  demands so your plan actually matches your real life.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re not sure where to start, reach out—sometimes a
                  single assessment can make the next steps much clearer.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or ask a question?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that works best for you or your child, and
                  we&apos;ll help you with the rest.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Concussion Assessment
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
