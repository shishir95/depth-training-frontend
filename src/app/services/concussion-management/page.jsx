// src/app/services/concussion-management/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";
import CustomerReviews from "@/components/common/CustomerReviews";
import FeaturedTraining from "@/components/membership/FeaturedTraining";

export default function ConcussionManagementPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same layout as Physiotherapy */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • Concussion Management
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Concussion Management & Rehab
                  <span className="block text-red-400">
                    Concussions are treatable. Get back to being you.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Our team takes a comprehensive, research-backed approach to
                  concussion assessment and treatment so you can safely return
                  to school, work, sport, and life.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Concussion Assessment
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  408 Albert Street, Waterloo • Covered by extended health care
                  insurance.
                </p>
              </div>

              {/* Right card – quick facts */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What you get with concussion care at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      90-minute assessments that look at neck, vision, balance,
                      and thinking.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Tailored treatment plans — no two concussions are the
                      same.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Backed by the latest research and technology for safe
                      recovery.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Guidance to return to school, work, and sport confidently.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / What we assess – same 2-col grid */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who concussion management is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Whether you&apos;re an athlete or not, a concussion can impact
                  how you feel, think, and move. We&apos;re here to support you
                  through recovery.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Recent concussion from sport, a fall, or motor vehicle
                      accident.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Ongoing symptoms weeks or months after injury.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Challenges returning to school, work, or physical
                      activity.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Dizziness, headaches, or feeling “off” since your injury.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we assess during your visit
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Our 90-minute assessments take a comprehensive look at how
                  your brain and body are responding after concussion.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Neck & whiplash injuries
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Balance & coordination
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Visual & vestibular system
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Symptoms & impact on life
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Exercise & cognitive tolerance
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Secondary injuries or limitations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect – same 3-card layout */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from your concussion visits
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Book & complete your intake
                </h3>
                <p className="text-neutral-300 text-sm">
                  Book online or by phone. You&apos;ll receive a welcome email
                  with a short intake form to complete before your first visit.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">90-minute assessment</h3>
                <p className="text-neutral-300 text-sm">
                  We review your injury history, symptoms, and complete a
                  thorough concussion assessment including neck, vision,
                  balance, and cognition.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Personalized rehab & step-wise return
                </h3>
                <p className="text-neutral-300 text-sm">
                  You leave with a tailored rehab plan and clear guidance for
                  returning to school, work, exercise, and sport safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – same pattern as other pages */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Not sure what to do after a concussion?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Book an assessment or reach out with your questions.
                  We&apos;ll help you understand what&apos;s going on and how to
                  move forward safely.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Book Concussion Assessment
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
        <FeaturedTraining></FeaturedTraining>
        <CustomerReviews></CustomerReviews>
      </main>

      <FooterStrip />
    </div>
  );
}
