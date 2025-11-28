"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";
import CustomerReviews from "@/components/common/CustomerReviews";

export default function NutritionTrainingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Fitness • Nutrition Coaching
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Nutrition Training
                  <span className="block text-red-400">
                    Simple nutrition coaching for real life.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  One-on-one nutrition coaching to help you eat in a way that
                  matches your goals. No extreme diets — just practical changes
                  you can stick to so you feel better, recover better, and see
                  better results from your training.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Ask About Nutrition Coaching
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

                <p className="text-xs text-neutral-400">
                  Coaching is led by certified nutrition professionals and can
                  be done virtually or in person.
                </p>
              </div>

              {/* Right card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  How Nutrition Coaching helps
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Build a simple eating plan that fits your life.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Improve energy, sleep, and recovery from training.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Support fat loss, muscle gain, or body-composition goals.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Stay accountable with check-ins and adjustments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – who / topics */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who Nutrition Coaching is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For anyone who wants their nutrition to finally match their
                  health and fitness goals.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People starting a fitness journey and unsure what to eat.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Members who train hard but don&apos;t see the results they
                      want.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Anyone confused by conflicting nutrition advice online.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People who prefer simple, sustainable habits over strict
                      diets.
                    </span>
                  </li>
                </ul>
              </div>

              {/* What you'll work on */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What you&apos;ll work on
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Sessions stay practical and focused on small changes that add
                  up over time.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Daily eating structure & meal timing
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Building better breakfasts, lunches, dinners
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Smart snacks & cravings management
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Pre-/post-workout fueling
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Hydration habits
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Habit tracking & accountability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – steps */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from Nutrition Coaching
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Reach out & share your goals
                </h3>
                <p className="text-neutral-300 text-sm">
                  Talk with our team about your goals, current eating habits,
                  and any challenges you&apos;re facing.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Initial nutrition assessment
                </h3>
                <p className="text-neutral-300 text-sm">
                  Meet with a coach for an assessment and to build a simple plan
                  that fits your lifestyle and training.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Ongoing coaching & check-ins
                </h3>
                <p className="text-neutral-300 text-sm">
                  Follow-up sessions keep you accountable, adjust your plan, and
                  celebrate progress as you go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – CTA */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Nutrition might be the missing piece.
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  If you&apos;re training consistently but not feeling or seeing
                  the changes you want, Nutrition Coaching can help align your
                  food with your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:12267489494"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Call to Get Started
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
