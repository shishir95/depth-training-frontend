// src/app/services/vestibular-physiotherapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function VestibularPhysiotherapyPage() {
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
                  Rehab • Vestibular Physiotherapy
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Vestibular physiotherapy
                  <span className="block text-red-400">
                    for dizziness, vertigo, and balance problems.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Vestibular physiotherapy at DEPTH helps people dealing with
                  dizziness, vertigo, imbalance, and motion sensitivity. We use
                  targeted exercises and evidence-based treatment to retrain
                  your balance system and help you feel steadier and more in
                  control.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Vestibular Physio
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Vestibular rehabilitation services provided at DEPTH Training
                  &amp; Physiotherapy in Waterloo. If you&apos;re unsure whether
                  your symptoms are vestibular-related, we can help you sort out
                  the next steps.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Rehab for your inner ear &amp; balance system
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Dizziness &amp; vertigo</span>{" "}
                      that comes on with movement, rolling in bed, or position
                      changes.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Imbalance or unsteadiness</span>{" "}
                      when walking, turning, or being in busy environments.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Motion sensitivity</span>{" "}
                      with driving, scrolling on screens, or quick head turns.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Post-concussion dizziness</span>{" "}
                      or vestibular issues linked to head injury.
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
                  What to expect at a vestibular physio appointment
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by talking through your symptoms in detail—when they
                  began, what makes them better or worse, and how they&apos;re
                  affecting your daily life, work, and activity level.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your therapist will then complete a focused vestibular and
                  balance assessment. This may include eye and head movement
                  testing, positional tests for vertigo (like BPPV), balance
                  and walking tasks, and screening for other possible causes.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  You&apos;ll receive a tailored exercise program designed to
                  gently challenge and retrain your vestibular system over time,
                  along with clear guidance about pacing and what to expect as
                  you progress.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical visit may include
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Discussion of symptoms, history, and triggers.</li>
                  <li>
                    Visual, vestibular, and balance testing tailored to your
                    tolerance.
                  </li>
                  <li>
                    Specific maneuvers for vertigo (such as BPPV) if appropriate.
                  </li>
                  <li>
                    Customized home exercises for gaze stability, balance, and
                    motion sensitivity.
                  </li>
                  <li>
                    Education on how to pace activity and monitor your progress
                    safely.
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
              Vestibular physiotherapy is a good fit if you…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Feel dizzy or off-balance
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Vertigo when rolling in bed or looking up/down</li>
                  <li>Feeling unsteady or veering when walking</li>
                  <li>Needing to hold on to things for balance</li>
                  <li>
                    Feeling like your surroundings are moving when they&apos;re
                    not
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  React strongly to motion or busy environments
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Dizziness or nausea when in a car or on transit</li>
                  <li>Symptoms triggered by scrolling or fast visuals</li>
                  <li>Feeling overwhelmed in crowded or bright spaces</li>
                  <li>
                    Avoiding certain movements because they make you feel worse
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Are recovering from concussion or inner ear issues
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Dizziness that started after a concussion</li>
                  <li>Balance issues after illness or ear infection</li>
                  <li>
                    Wanting a structured rehab plan instead of waiting it out
                  </li>
                  <li>
                    Looking for guidance on safely returning to work or sport
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
                  Start feeling steadier and more confident
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Living with dizziness or imbalance can be exhausting and
                  isolating. Having a clear plan and small, manageable steps can
                  help you gradually rebuild confidence in movement and daily
                  activities.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our team can also coordinate with your doctor or other rehab
                  providers so everyone is on the same page about your recovery.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re unsure whether vestibular physiotherapy is the
                  right fit, reach out and we can help you decide what makes
                  the most sense for you.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or ask a question?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that feels easiest and we&apos;ll guide you
                  from there.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Vestibular Physio
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
