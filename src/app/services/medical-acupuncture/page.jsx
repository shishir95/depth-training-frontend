// src/app/services/medical-acupuncture/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function MedicalAcupuncturePage() {
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
                  Rehab • Medical Acupuncture
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Medical acupuncture
                  <span className="block text-red-400">
                    to reduce pain, tension, and nervous system sensitivity.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  At DEPTH, medical acupuncture is used as part of a
                  physiotherapy or chiropractic treatment plan. Thin, sterile
                  needles are placed in specific points to help calm irritated
                  nerves, reduce muscle tension, and support your overall rehab
                  and recovery.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book an Appointment
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Medical acupuncture and dry needling are performed by trained
                  rehab professionals at DEPTH Training &amp; Physiotherapy in
                  Waterloo, as part of a broader treatment plan.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  A targeted tool within your rehab plan
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Muscle tension</span> in
                      areas like the neck, shoulders, hips, and low back.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Persistent pain</span> that
                      hasn&apos;t settled with exercise and manual therapy alone.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Irritated nerves</span>{" "}
                      contributing to radiating or referred symptoms.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Athletes &amp; active people</span>{" "}
                      looking for another option to settle stubborn areas so they
                      can keep training.
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
                  What to expect with medical acupuncture
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your therapist will first complete a standard assessment to
                  understand your pain, movement, and goals. If acupuncture is
                  appropriate, they&apos;ll explain why it&apos;s being
                  recommended and how it fits into your overall plan.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Very fine needles are inserted into specific points or muscle
                  bands. You may feel a brief ache, heaviness, or twitch in the
                  area, but most people find the treatment quite tolerable and
                  often relaxing.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Needling is usually combined with movement, exercise, and
                  education so that any short-term changes from treatment turn
                  into longer-term improvements in how you move and feel.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical session may include
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Review of symptoms, progress, and current training.</li>
                  <li>
                    Hands-on assessment of the area being treated (muscle,
                    joint, or nerve-related).
                  </li>
                  <li>
                    Needle placement in targeted points or trigger areas, with
                    monitoring of your comfort.
                  </li>
                  <li>
                    Follow-up movement or exercise to reinforce the changes.
                  </li>
                  <li>
                    Guidance on what to expect over the next 24–48 hours and how
                    to continue your rehab plan.
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
              Medical acupuncture may help if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Dealing with stubborn muscle tension
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Neck and shoulder tightness that keeps returning</li>
                  <li>Deep hip or glute tension affecting lifting or running</li>
                  <li>Mid-back or low-back tightness with training or work</li>
                  <li>Areas that feel &quot;locked up&quot; despite stretching</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Managing ongoing or persistent pain
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Tendon or overuse pain that flares with activity</li>
                  <li>Localized pain that limits certain movements</li>
                  <li>
                    Pain that eases temporarily but keeps coming back in the
                    same spots
                  </li>
                  <li>
                    Looking for another option to layer into your current rehab
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Training and want to keep moving
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Strength training or sport multiple times per week</li>
                  <li>Want to modify, not stop, your training when things flare</li>
                  <li>
                    Interested in strategies to calm things down between
                    sessions
                  </li>
                  <li>
                    Value a plan that combines treatment, exercise, and
                    long-term load management
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
                  See if medical acupuncture fits your rehab plan
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Acupuncture is rarely a stand-alone &quot;fix&quot;, but it can
                  be a powerful tool when combined with the right exercise and
                  education. Our goal is to help you understand why it&apos;s
                  being used and what changes to look for after treatment.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your therapist will always talk through options, get your
                  consent, and adjust the approach based on your comfort and
                  preferences.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re curious but unsure, book an assessment or reach
                  out with questions — we can help you decide if it makes sense
                  for your situation.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or learn more?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We can help you understand how acupuncture might fit alongside
                  physiotherapy, chiropractic, massage, and training.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book an Appointment
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
