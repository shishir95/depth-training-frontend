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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • Pelvic Physiotherapy
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Pelvic health physiotherapy
                  <span className="block text-red-400">
                    for bladder, bowel & pelvic pain issues.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Pelvic floor issues are common, but they don&apos;t have to be
                  your “new normal”. Our pelvic health physiotherapists provide
                  a private, supportive space to help with leaking, pelvic pain,
                  prolapse, and pre/post-natal concerns, so you can feel more
                  confident and in control.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Pelvic Physiotherapy
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Private treatment rooms at DEPTH Training & Physiotherapy in
                  Waterloo. Covered by many extended health plans.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Who is pelvic physiotherapy for?
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People who leak urine when they cough, sneeze, laugh,
                      exercise, or can&apos;t always make it to the bathroom in
                      time.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Individuals with pelvic, vaginal, rectal, or tailbone pain
                      during daily activities or intimacy.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Pregnant & postpartum clients who want support during
                      pregnancy, delivery recovery, or return to exercise.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People with prolapse symptoms, constipation, or bowel
                      control issues.
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
                  What to expect at your pelvic physio appointment
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Pelvic health is personal – so appointments move at your pace.
                  Your physiotherapist will start with a detailed conversation
                  about your symptoms, medical history, birth history (if
                  relevant), and goals.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  With your consent, they may complete an external and/or
                  internal pelvic floor assessment to understand how your pelvic
                  muscles are functioning – whether they are weak, tight,
                  overactive, or not coordinating properly.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Together, you&apos;ll build a step-by-step plan that fits your
                  lifestyle and comfort level, with clear guidance on what to do
                  between visits.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Your visit typically includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Private conversation about your concerns & goals.</li>
                  <li>
                    Education on pelvic floor anatomy and how it relates to your
                    symptoms.
                  </li>
                  <li>
                    Gentle movement and/or pelvic floor assessment (with your
                    consent).
                  </li>
                  <li>
                    Individualized treatment plan – may include relaxation or
                    strengthening exercises, breathwork, manual therapy, and
                    lifestyle strategies.
                  </li>
                  <li>
                    A clear home program so you know exactly what to practice
                    between sessions.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions / concerns we help with */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Common pelvic health concerns we treat
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Bladder concerns</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Leaking with coughing, sneezing, or exercise</li>
                  <li>Urgency & frequent urination</li>
                  <li>Difficulty fully emptying the bladder</li>
                  <li>Overactive bladder symptoms</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Pelvic pain & prolapse</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Pelvic, vaginal, rectal, or tailbone pain</li>
                  <li>Pain with intercourse or tampon use</li>
                  <li>Heaviness/dragging sensations</li>
                  <li>Pelvic organ prolapse symptoms</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Pregnancy & postpartum</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Pelvic girdle, hip, or low back pain</li>
                  <li>Ab separation (diastasis recti)</li>
                  <li>Support for delivery preparation & recovery</li>
                  <li>Safe return to lifting & sport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="w-full bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  You don&apos;t have to just “live with it”
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Many people are told that leaking, pelvic pain, or discomfort
                  after childbirth is normal – but common doesn&apos;t mean you
                  have to put up with it forever.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Pelvic physiotherapy gives you a safe, non-judgemental space to
                  talk about symptoms that can feel awkward to bring up anywhere
                  else – and a clear plan to start feeling more like yourself
                  again.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you&apos;re unsure whether pelvic physio is the right fit,
                  you can always call the clinic and our team will help you
                  decide on the best first step.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to talk to someone?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that works best for you and we&apos;ll take
                  care of the rest.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Pelvic Physio Appointment
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
                    Contact & Location Details
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
