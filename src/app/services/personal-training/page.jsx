// src/app/services/personal-training/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import CustomerReviews from "@/components/common/CustomerReviews";
import ClassScheduleSection from "@/components/services/classSchedule/classScheduleSection";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";

export default function PersonalTrainingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same structure as Rehab/Athlete pages */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left: main copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Fitness • Personal Training
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Personal Training
                  <span className="block text-red-400">
                    Personal training that fits you — not the other way around.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  The ultimate, individualized training experience with a plan
                  built around your goals, schedule, and fitness level. Every
                  session is coached and customized so you stop guessing and
                  start training with purpose.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Book Personal Training
                  </a>
                  <a
                    href="https://www.depthtraining.ca/contact/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Book a Free Fitness Consult
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  408 Albert Street, Waterloo • State-of-the-art training
                  facility with turf, weight rooms, and private studio space.
                </p>
              </div>

              {/* Right: quick facts card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  Why Personal Training at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      One-on-one coaching with a plan customized to your goals,
                      history, and experience.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Highly qualified trainers focused on long-term results,
                      not quick fixes.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Flexible session options so your training fits your life,
                      not the other way around.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Clear progress over time with planned phases and goal
                      check-ins.
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
                  Who Personal Training is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For anyone who wants a clear plan, real accountability, and
                  expert coaching in every session.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Beginners who want to start safely and confidently.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People who feel stuck and need a structured plan to see
                      real results.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Busy professionals who need efficient, purposeful
                      workouts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Anyone who prefers 1-on-1 coaching over large group
                      classes.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: training focus areas */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we focus on in your sessions
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Your coach builds a plan around what matters most to you.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength & muscle
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Fat loss & body composition
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Mobility & movement quality
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Conditioning & energy levels
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Technique & confidence in the gym
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Long-term healthy habits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – What to expect (3-step cards) */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from Personal Training
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Free consult & goal setting
                </h3>
                <p className="text-neutral-300 text-sm">
                  Talk through your goals, training history, injuries, and
                  schedule so we know exactly where you&apos;re starting from.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Assessment & personalized plan
                </h3>
                <p className="text-neutral-300 text-sm">
                  Your coach assesses how you move and designs a plan with clear
                  phases that fits your lifestyle and targets your goals.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">Train, track, and adjust</h3>
                <p className="text-neutral-300 text-sm">
                  You train 1-on-1 with your coach, track progress, and adjust
                  your plan as you get stronger, fitter, and more confident.
                </p>
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
