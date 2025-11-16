// src/app/services/massage-therapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function MassageTherapyPage() {
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
                  Rehab • Massage Therapy
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Registered Massage Therapy
                  <span className="block text-red-400">
                    to reduce tension, pain, and stress.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Massage therapy at DEPTH is more than just relaxation. Our
                  RMTs use assessment-based, hands-on treatment to reduce muscle
                  tension, manage pain, and support recovery from training,
                  work, or everyday life.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Massage Therapy
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Registered Massage Therapy services provided at DEPTH Training
                  &amp; Physiotherapy in Waterloo. Many extended health plans
                  cover RMT.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Massage that matches your goals
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Recovery focused</span>{" "}
                      sessions for people training hard in the gym or in sport.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Pain relief</span> for
                      headaches, neck/shoulder tension, low back pain, and
                      general stiffness.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Stress management</span>{" "}
                      and relaxation for busy work and family schedules.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Complementary care</span>{" "}
                      alongside physiotherapy, chiropractic, or training.
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
                  What to expect during your massage
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your RMT will start by asking about your main concerns, medical
                  history, and what you&apos;re hoping to get out of the
                  session – whether that&apos;s deep tissue work, relaxation, or
                  help with a specific area.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  They&apos;ll explain the plan for your treatment, make sure
                  you feel comfortable with the level of pressure and areas
                  being treated, and check in with you during the session so
                  everything stays within your comfort zone.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  After the session, they may provide simple stretches, mobility
                  drills, or self-care tips to help you keep feeling better
                  between appointments.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Your visit typically includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Brief intake and discussion of your goals.</li>
                  <li>
                    Assessment of tension, posture, and areas that need focus.
                  </li>
                  <li>
                    Hands-on treatment using techniques matched to your
                    preferences.
                  </li>
                  <li>
                    Time to relax and reset during the session – not just rush
                    in and out.
                  </li>
                  <li>
                    Recommendations for follow-up care or future appointments if
                    needed.
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
              Massage therapy is a good fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Dealing with tension</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Neck &amp; shoulder tightness from desk work</li>
                  <li>Headaches or jaw tension</li>
                  <li>Mid-back &amp; low-back stiffness</li>
                  <li>General muscle fatigue and soreness</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Training or competing</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Heavy strength training or team sport schedule</li>
                  <li>Needing help with recovery between sessions</li>
                  <li>Localized tightness limiting your performance</li>
                  <li>Pre- or post-event body care</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Managing stress</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>High stress from work, school, or family life</li>
                  <li>Trouble relaxing or winding down</li>
                  <li>Sleep affected by pain or tension</li>
                  <li>Wanting regular time set aside for self-care</li>
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
                  Give your body a reset
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Whether you&apos;re sore from training, stiff from sitting, or
                  just feeling run down, taking an hour to reset can make a big
                  difference in how you move and feel.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our RMTs work closely with the rest of the DEPTH team, so if
                  you&apos;re also seeing a physiotherapist, chiropractor, or
                  coach here, your care can stay coordinated and aligned with
                  your bigger goals.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Not sure how often to book? Start with one session and your
                  therapist can help you decide on a schedule that fits your
                  body and your budget.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book a massage?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that&apos;s easiest for you and we&apos;ll
                  handle the details.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Massage Therapy Appointment
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
