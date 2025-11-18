// src/app/services/medical-acupuncture/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function MedicalAcupuncturePage() {
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
                  Rehab • Medical Acupuncture
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Medical Acupuncture
                  <span className="block text-red-400">
                    A powerful add-on to your treatment plan.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Medical acupuncture uses thin, sterile needles to stimulate
                  specific points in the body, helping to reduce pain, improve
                  function, and support your overall rehab plan.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Acupuncture Online
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

              {/* Right: quick facts card – same structure as other rehab pages */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What you get with acupuncture at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Acupuncture integrated into your physio, chiro, or massage
                      treatment plan.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Practitioners trained in medical acupuncture techniques.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Evidence-informed approach focused on pain relief and
                      improving function.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Calm, professional environment with clear communication
                      every step of the way.
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
              {/* Left column: who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who medical acupuncture is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Acupuncture can be an effective part of treatment for a wide
                  range of muscle, joint, and nerve-related pain conditions.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People looking to reduce pain and muscle tension alongside
                      other rehab treatments.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Those managing osteoarthritis or long-standing joint pain.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Clients dealing with headaches or neck tension.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Anyone whose physiotherapist, chiropractor, or massage
                      therapist recommends acupuncture as part of care.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right column: conditions treated */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Conditions acupuncture can help treat
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  At DEPTH, acupuncture is commonly used alongside hands-on
                  treatment and exercise to help manage:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Osteoarthritis
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Headaches & migraines
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Low & mid-back pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Neck & SI joint pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Shoulder & hip pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Jaw (TMJ) pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Knee, foot & ankle pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Tennis & golfer&apos;s elbow
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
              What to expect from acupuncture at DEPTH
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Book & talk with your therapist
                </h3>
                <p className="text-neutral-300 text-sm">
                  Book online or by phone. Your therapist will review your
                  history and discuss whether acupuncture is a good fit for your
                  goals and comfort level.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Integrated treatment session
                </h3>
                <p className="text-neutral-300 text-sm">
                  Acupuncture is typically part of a full session that may also
                  include manual therapy, exercise, and education tailored to
                  you.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Plan & follow-up for best results
                </h3>
                <p className="text-neutral-300 text-sm">
                  You&apos;ll leave with a clear plan for how often to come in,
                  what to expect, and how acupuncture supports the rest of your
                  rehab.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – same layout pattern */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Wondering if acupuncture could help your pain?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  If you&apos;re curious about how acupuncture fits into your
                  treatment plan, book online or contact us with your questions.
                  We&apos;ll help you decide on the right next step.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Book Acupuncture Online
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
