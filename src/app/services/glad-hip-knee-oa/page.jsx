// src/app/services/glad-hip-knee-oa/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function GladHipKneeOAPage() {
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
                  Rehab • GLA:D for Hip/Knee OA
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  GLA:D™ program for hip &amp; knee osteoarthritis
                  <span className="block text-red-400">
                    to reduce pain and improve strength, confidence, and
                    function.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  GLA:D™ is an education and exercise program for people with
                  hip or knee osteoarthritis. At DEPTH, it&apos;s delivered by
                  trained rehab professionals who help you build strength,
                  improve movement, and manage pain with a structured, proven
                  approach.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire about GLA:D™ Program
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  GLA:D™ is an evidence-based program originally developed in
                  Denmark and now used worldwide to help people with hip and
                  knee osteoarthritis move better and feel more confident.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  More than &quot;just exercises&quot;
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Structured education</span>{" "}
                      so you understand what osteoarthritis is—and what you can
                      do about it.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Progressive strength work</span>{" "}
                      to support your joints and make daily tasks easier.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Function-focused training</span>{" "}
                      based on the activities you want to keep doing—walking,
                      stairs, hobbies, travel, and more.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Supportive environment</span>{" "}
                      where you&apos;re progressing alongside others with
                      similar goals.
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
                  What to expect from the GLA:D™ program
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Before starting, you&apos;ll complete an individual assessment
                  to review your history, goals, and current ability. This helps
                  us tailor the program to your needs and ensure it&apos;s a
                  good fit.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  The program typically includes education sessions plus a
                  series of supervised exercise classes. You&apos;ll learn how
                  to perform each exercise with good technique and how to
                  safely challenge yourself over time.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  You&apos;ll also be given simple home strategies and progress
                  checks, so you can see improvements in pain, function, and
                  confidence as you move through the program.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  The GLA:D™ pathway often includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial assessment with a physiotherapist to confirm
                    suitability and set goals.
                  </li>
                  <li>
                    Education sessions on osteoarthritis, pain, and exercise.
                  </li>
                  <li>
                    Supervised exercise classes focused on strength, balance,
                    and functional movement.
                  </li>
                  <li>
                    Guidance for modifying day-to-day activities and staying
                    active long term.
                  </li>
                  <li>
                    Follow-up testing to measure changes in pain and function.
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
              GLA:D™ is a good fit if you…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Have hip or knee osteoarthritis
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Have been told you have hip or knee OA</li>
                  <li>Notice stiffness when getting up or moving</li>
                  <li>Pain limits walking, stairs, or daily tasks</li>
                  <li>Want options beyond &quot;just rest&quot; or medication</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Want to stay active safely
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Want to keep walking, hiking, or exercising</li>
                  <li>Worry that movement might be making things worse</li>
                  <li>
                    Need guidance on how hard you can safely push yourself
                  </li>
                  <li>Prefer structure instead of guessing on your own</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Are considering long-term options
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Looking to delay or prepare for possible surgery</li>
                  <li>Want to understand evidence-based care for OA</li>
                  <li>Hope to improve strength, mobility, and confidence</li>
                  <li>
                    Value ongoing support rather than one quick appointment
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
                  Build strength and confidence with a structured OA program
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Osteoarthritis doesn&apos;t have to mean giving up the
                  activities you enjoy. With the right education, strength work,
                  and support, many people see meaningful improvements in pain,
                  function, and quality of life.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our team can help you understand whether GLA:D™ is the best
                  option for you right now, or whether another rehab approach
                  makes more sense based on your goals.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re curious about the program or wondering how it
                  fits with your current care, we&apos;re happy to answer
                  questions.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to learn more or get started?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Reach out and we can walk you through program details,
                  scheduling, and whether it&apos;s a good fit for you.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire about GLA:D™ Program
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
