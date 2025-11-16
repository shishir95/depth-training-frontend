// src/app/services/physiotherapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function PhysiotherapyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Rehab • Physiotherapy
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Evidence-based Physiotherapy
                  <span className="block text-red-400">
                    to get you moving pain-free.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Whether you&apos;re dealing with a new injury, lingering pain, or
                  stiffness that&apos;s holding you back, our physiotherapists use
                  a detailed assessment and one-on-one treatment approach to help
                  you move better, feel stronger, and return to what you love.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Physiotherapy Online
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Located at 408 Albert Street, Waterloo. Most treatments are
                  covered by extended health & auto insurance plans. 
                </p>
              </div>

              {/* Right side quick highlights */}
              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Why choose DEPTH Physiotherapy?
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Detailed assessment</span>{" "}
                      to understand the root cause of your pain or movement
                      limitations.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Personalized treatment plan</span>{" "}
                      using evidence-based techniques to improve mobility, reduce
                      pain, and build strength. 
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">1-on-1 appointments</span>{" "}
                      with longer session times so you actually get time with your
                      physiotherapist.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Active rehab focus</span>{" "}
                      – hands-on treatment plus exercise programming to keep you
                      progressing between sessions.
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
                  What to expect from Physiotherapy
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Every treatment starts with listening. Your physiotherapist
                  will walk through what&apos;s been going on, how it&apos;s
                  affecting your day-to-day life, and what you want to get back
                  to – whether that&apos;s sport, work, or just moving
                  comfortably.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  From there, they&apos;ll complete a detailed movement
                  assessment, explain what&apos;s driving your pain or
                  limitations, and build a step-by-step plan so you know exactly
                  how you&apos;re going to get better.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">Your visit typically includes</h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Conversation about your injury, history, and goals.</li>
                  <li>Hands-on movement & strength assessment.</li>
                  <li>
                    Clear explanation of what&apos;s going on – in normal
                    language, not medical jargon.
                  </li>
                  <li>
                    Treatment during the first session (manual therapy, exercise,
                    or a combination).
                  </li>
                  <li>
                    A personalized home program so you know what to do between
                    visits.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions we treat */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Common reasons people see our physiotherapists
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Everyday & workplace pain</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Neck & shoulder pain</li>
                  <li>Low back & hip pain</li>
                  <li>Repetitive strain injuries</li>
                  <li>Postural tension from desk work</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Sports & activity-related injuries</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Sprains & strains</li>
                  <li>Tendon pain (Achilles, patellar, etc.)</li>
                  <li>Shoulder & knee injuries</li>
                  <li>Return-to-sport rehab</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">Post-surgical & long-term issues</h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Post-operative rehab</li>
                  <li>Arthritis & joint stiffness</li>
                  <li>Chronic pain & recurring flare-ups</li>
                  <li>Balance & mobility limitations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance + call to action */}
        <section className="w-full bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Covered by most insurance plans
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Physiotherapy at DEPTH is covered by most extended health
                  benefits, workplace injury claims, and auto insurance plans, so
                  you often pay very little out of pocket for high-quality care. 
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  If you&apos;re not sure what your coverage looks like, our
                  admin team can help you figure out the details before you
                  commit.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Not sure if physiotherapy is right for you? Start with a quick
                  call or book online and add your questions in the intake form –
                  our team will make sure you&apos;re in the right place.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">Ready to get started?</h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that&apos;s easiest for you and we&apos;ll
                  handle the rest.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Physiotherapy Appointment
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

      {/* Footer */}
      <FooterStrip />
    </div>
  );
}
