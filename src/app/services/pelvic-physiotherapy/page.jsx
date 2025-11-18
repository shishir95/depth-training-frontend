// src/app/services/pelvic-physiotherapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function PelvicPhysiotherapyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Hero copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • Pelvic Physiotherapy
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Pelvic Health Physiotherapy
                  <span className="block text-red-400">
                    Pelvic health concerns are common and treatable.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Pelvic floor physiotherapy focuses on the muscles, joints,
                  connective tissues, and nerves of the pelvis, low back, and
                  hips to help with a wide variety of pelvic-related concerns.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Pelvic Physio Online
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

              {/* Quick facts card – SAME STRUCTURE AS PHYSIO */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What you get with pelvic physio at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Private, 1-on-1 pelvic health assessments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Supportive, judgment-free space to talk openly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Evidence-based care for bladder, bowel, and pelvic pain
                      concerns.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Pre- and post-pregnancy guidance tailored to your goals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for / Common areas – SAME GRID AS PHYSIO */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who pelvic physiotherapy is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  We help people dealing with pelvic symptoms that affect daily
                  life, exercise, comfort, or confidence.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Urinary incontinence, urgency, or leaking.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Pain during sex or ongoing pelvic pain.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Pregnancy-related or post-pregnancy pain.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Constipation or pelvic organ prolapse.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Common areas we treat
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Treatment is specific to you, but often focuses on:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Low back & hip pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Pelvic & groin pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Sacroiliac & tailbone pain
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Core & abdominal issues (e.g. diastasis)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect – ALWAYS 3 CARDS */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              What to expect from your pelvic physio visits
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">Book & prepare online</h3>
                <p className="text-neutral-300 text-sm">
                  Book by phone or online. You&apos;ll receive a welcome email
                  and brief intake form before your first session.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">Detailed assessment</h3>
                <p className="text-neutral-300 text-sm">
                  Your first visit (about 60 minutes) includes a thorough
                  conversation and pelvic-focused assessment based on your
                  comfort.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">Clear plan & follow-up</h3>
                <p className="text-neutral-300 text-sm">
                  You leave with an individualized plan and follow-up visits
                  (usually 30 minutes) to help you feel more comfortable and
                  confident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – SAME LAYOUT */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Unsure if pelvic physiotherapy is right for you?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Book online or reach out with your questions. You can even
                  schedule a short pelvic physio conversation to see if it&apos;s
                  a good fit.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Book Pelvic Physio Online
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
