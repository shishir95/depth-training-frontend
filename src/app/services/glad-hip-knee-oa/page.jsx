// src/app/services/glad-hip-knee-oa/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";
import CustomerReviews from "@/components/common/CustomerReviews";

export default function GladHipKneeOAPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same structure as Physiotherapy master */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left: main copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • GLA:D™ Hip &amp; Knee OA
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  GLA:D™ Program for Hip &amp; Knee Osteoarthritis
                  <span className="block text-red-400">
                    Reduce pain. Build strength. Feel more confident.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  GLA:D™ is an education and exercise program for people with
                  hip or knee osteoarthritis. At DEPTH, it&apos;s delivered by
                  GLA:D™ trained physiotherapists to help you move better,
                  manage pain, and stay active.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire About GLA:D™ Program
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  408 Albert Street, Waterloo • Program delivered by GLA:D™
                  trained physiotherapists.
                </p>
              </div>

              {/* Right: quick facts card – same card layout as other rehab pages */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What&apos;s included in the GLA:D™ program
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      60-minute individual assessment with a physiotherapist.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Two education sessions about osteoarthritis and
                      self-management.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      12 group exercise classes over 8 weeks (twice per week).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Small groups (up to ~6 people) for coaching and support.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / Program focus – SAME 2-COL GRID AS MASTER */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left column: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who the GLA:D™ program is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  GLA:D™ is designed for people with symptoms of hip or knee
                  osteoarthritis, from mild to severe.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Pain or stiffness in your hip or knee with daily
                      activities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Osteoarthritis that makes walking, stairs, or standing
                      harder.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      You want to stay active and avoid or delay surgery if
                      possible.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      You&apos;re waiting for, or recovering from, a hip or knee
                      replacement.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right column: what the program works on */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What the program helps you improve
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  GLA:D™ focuses on education and specific exercises to support:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Pain management strategies
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength around hip & knee
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Balance & stability
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Walking & functional movement
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Confidence in daily activities
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Long-term self-management of OA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect – SAME 3-CARD LAYOUT AS OTHER REHAB PAGES */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from the GLA:D™ program
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Initial assessment & enrolment
                </h3>
                <p className="text-neutral-300 text-sm">
                  You start with a 60-minute individual assessment to confirm
                  that GLA:D™ is appropriate for you and set baseline measures.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Education & group exercise
                </h3>
                <p className="text-neutral-300 text-sm">
                  You&apos;ll attend two education sessions plus 12 small-group
                  exercise classes over 8 weeks to build strength, control, and
                  confidence.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Progress tracking & next steps
                </h3>
                <p className="text-neutral-300 text-sm">
                  Your progress is monitored and you&apos;ll leave with a plan
                  to keep moving, manage your symptoms, and maintain your
                  results long term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – same layout pattern as other rehab pages */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Have hip or knee osteoarthritis and want support?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Reach out to learn if the GLA:D™ program is right for you.
                  We’ll help you understand your options and next steps.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Inquire About GLA:D™ Program
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
        <TrainingPictureSection></TrainingPictureSection>
        <CustomerReviews></CustomerReviews>
      </main>

      <FooterStrip />
    </div>
  );
}
