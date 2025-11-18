// src/app/services/vestibular-physiotherapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function VestibularPhysiotherapyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero – same layout as Physiotherapy master */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left: copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • Vestibular Physiotherapy
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Vestibular Physiotherapy
                  <span className="block text-red-400">
                    Dizziness, vertigo, or imbalance? You&apos;re not alone.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Vestibular physiotherapy helps people dealing with dizziness,
                  vertigo, and balance problems using targeted assessment and
                  rehab of the inner ear and balance systems.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Vestibular Assessment
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

              {/* Right: quick facts card – same card layout */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What you get with vestibular physio at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      90-minute assessments that look at dizziness, balance, and
                      inner ear function.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Infrared video goggle assessment for detailed vestibular
                      testing.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Tailored exercise programs to retrain balance and
                      co-ordination.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Treatment of the neck as needed when it&apos;s part of the
                      problem.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / Conditions – SAME 2-COL GRID AS MASTER */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who vestibular physiotherapy is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Vestibular rehab can help if you&apos;re experiencing
                  dizziness, vertigo, or feeling “off” with movement or in busy
                  environments.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Vertigo or spinning sensations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Dizziness, light headedness, or imbalance.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Difficulty navigating busy spaces or dark environments.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Nausea, ear fullness, or ringing in the ears.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Common vestibular conditions we see
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  We assess and treat a range of inner ear and balance-related
                  conditions.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Benign Paroxysmal Positional Vertigo (BPPV)
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Vestibular neuritis
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Labyrinthitis
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Meniere&apos;s disease
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Post-concussion dizziness
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Other vestibular-related balance issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect – EXACT SAME 3-CARD LAYOUT */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from your vestibular visits
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
                  Book online or call the clinic. You&apos;ll receive a welcome
                  email and short intake form to complete before your first
                  appointment.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">90-minute assessment</h3>
                <p className="text-neutral-300 text-sm">
                  Your vestibular assessment includes history, visual screening,
                  neurological testing, gait analysis, and tailored exercises to
                  understand what&apos;s driving your symptoms.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Individualized rehab & follow-up
                </h3>
                <p className="text-neutral-300 text-sm">
                  You leave with a customized vestibular rehab plan, including
                  home exercises and follow-up visits to help you feel more
                  steady and confident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – same pattern as other rehab pages */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Unsure if vestibular physiotherapy is right for you?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  If you&apos;re dealing with dizziness, vertigo, or feeling
                  unsteady, book an assessment or contact us with your
                  questions. We&apos;ll help you understand your options.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Book Vestibular Assessment
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
      </main>

      <FooterStrip />
    </div>
  );
}
