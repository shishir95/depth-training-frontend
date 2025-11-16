// src/app/services/chiropractic-therapy/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function ChiropracticTherapyPage() {
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
                  Rehab • Chiropractic
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Chiropractic care
                  <span className="block text-red-400">
                    to improve joint function and reduce pain.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Chiropractic at DEPTH focuses on assessing how your spine and
                  joints move, then using hands-on care and movement-based
                  rehab to reduce pain, improve function, and keep you doing
                  the things you care about — in the gym, at work, and in
                  everyday life.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book Chiropractic Appointment
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Chiropractic services provided at DEPTH Training &amp;
                  Physiotherapy in Waterloo. Many extended health plans include
                  chiropractic coverage.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Care that matches how you move
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Spine-focused care</span>{" "}
                      for neck, mid-back, and low back pain that keeps coming
                      back.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Joint and movement issues
                      </span>{" "}
                      impacting squats, deadlifts, overhead work, or sport.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Posture-related pain</span>{" "}
                      from long days of desk work, studying, or driving.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Integrated rehab</span>{" "}
                      that fits with your training program and other rehab
                      services at DEPTH.
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
                  What to expect during your chiropractic visit
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your chiropractor will start by asking about your main
                  concerns, injury or pain history, daily activities, and what
                  you&apos;re hoping to get out of treatment — whether that&apos;s
                  getting out of pain, moving better in the gym, or staying
                  ahead of recurring issues.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  They&apos;ll complete a movement and joint assessment, explain
                  what they think is contributing to your symptoms, and walk you
                  through a treatment plan that may include joint mobilization
                  or adjustments, soft tissue work, and specific exercises.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Before you leave, you&apos;ll have clear next steps: how often
                  to follow up, what to do at home or in the gym, and how to
                  tell if you&apos;re on the right track.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Your visit typically includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Conversation about your pain, goals, and training.</li>
                  <li>
                    Assessment of posture, movement, and spinal/joint function.
                  </li>
                  <li>
                    Hands-on treatment – including mobilizations or adjustments
                    if appropriate and within your comfort level.
                  </li>
                  <li>
                    Exercise or movement suggestions tailored to your sport,
                    job, or daily life.
                  </li>
                  <li>
                    A plan for follow-up visits and how to manage things between
                    sessions.
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
              Chiropractic care is a good fit if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Dealing with back or neck pain
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Recurring low back pain or stiffness</li>
                  <li>Neck pain from work, studying, or driving</li>
                  <li>Mid-back tightness or rib discomfort</li>
                  <li>Headaches linked to posture or tension</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Training and want to keep moving
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Barbell, CrossFit, or strength training regularly</li>
                  <li>
                    Feeling limited by certain positions or ranges of motion
                  </li>
                  <li>Managing old injuries while still staying active</li>
                  <li>
                    Wanting guidance on what&apos;s safe vs. what to modify
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Sitting a lot &amp; feeling it
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Working or studying at a desk most of the day</li>
                  <li>Noticing rounding shoulders and tight upper back</li>
                  <li>Feeling &quot;locked up&quot; after long days</li>
                  <li>
                    Looking for strategies to balance screen time and movement
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
                  Get your spine and joints moving better
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Whether you&apos;re dealing with a new issue or something
                  that&apos;s been bothering you for years, having a clear plan
                  and a team in your corner can make a big difference in how you
                  feel and perform.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Your chiropractor can coordinate with physiotherapists,
                  massage therapists, and strength coaches at DEPTH so your
                  treatment, training, and recovery are all working in the same
                  direction.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Not sure if chiropractic is the right starting point? Reach
                  out and we can help you choose the best option based on your
                  symptoms and goals.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to book or ask a question?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Choose the option that feels easiest and we&apos;ll help you
                  from there.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Book a Chiropractic Appointment
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
