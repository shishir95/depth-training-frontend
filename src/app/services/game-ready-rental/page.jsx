// src/app/services/game-ready-rental/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function GameReadyRentalPage() {
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
                  Recovery • Game Ready Rental
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Game Ready® rental
                  <span className="block text-red-400">
                    for cold &amp; compression support after injury or surgery.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Game Ready® combines adjustable cold therapy with intermittent
                  compression to help manage pain and swelling. Renting a unit
                  through DEPTH lets you access this technology at home during
                  the early, critical phases of recovery.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire About Game Ready Rental
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call (226) 748-9494
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Game Ready® units are typically used short-term after surgery
                  or acute injury. Availability, pricing, and duration of rental
                  can be discussed with our rehab team.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Bring clinic-level recovery tools home
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Cold therapy</span> to
                      help reduce pain and manage inflammation in the early
                      stages after injury or surgery.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Intermittent compression</span>{" "}
                      to support circulation and help limit swelling.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">At-home convenience</span>{" "}
                      during the first days and weeks when frequent treatment is
                      most helpful.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Guided use</span> with
                      support from your physiotherapist or rehab provider at
                      DEPTH.
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
                  How Game Ready® rental works
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We start by confirming that Game Ready® is appropriate for
                  your injury or surgery and making sure your surgeon or
                  physician has no concerns with its use.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  You&apos;ll be fitted with the correct wrap (for example knee,
                  ankle, shoulder, or hip) and shown exactly how to set up,
                  clean, and operate the device at home. We&apos;ll also review
                  how often to use it and how it fits with your overall rehab
                  plan.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Rental periods and pricing vary depending on your needs. Our
                  team will help you choose a duration that makes sense for
                  where you are in your recovery timeline.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical rental process includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Discussion with a physiotherapist or rehab provider to
                    confirm suitability.
                  </li>
                  <li>
                    Selection of appropriate wrap(s) for the area being treated.
                  </li>
                  <li>
                    In-person demonstration of set-up, use, and safety
                    guidelines.
                  </li>
                  <li>
                    Written or digital instructions for home use and cleaning.
                  </li>
                  <li>
                    Follow-up check-ins as needed to adjust frequency and answer
                    questions.
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
              Game Ready® rental may be helpful if you&apos;re…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Recovering from surgery
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Knee surgeries (ACL, meniscus, joint replacement)</li>
                  <li>Shoulder surgeries (rotator cuff, stabilization)</li>
                  <li>Hip procedures or post-fracture repair</li>
                  <li>
                    Other joint surgeries where swelling and pain are expected
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Managing a significant acute injury
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Moderate to severe sprains or ligament injuries</li>
                  <li>Acute joint swelling after sport or trauma</li>
                  <li>
                    Situations where regular icing and elevation are recommended
                  </li>
                  <li>
                    Wanting a more consistent option than basic ice packs
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Wanting more support early in recovery
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Looking to manage pain while staying within medical
                    guidelines
                  </li>
                  <li>
                    Wanting to feel more in control of swelling and stiffness
                  </li>
                  <li>
                    Coordinating closely with your surgeon and physio team
                  </li>
                  <li>
                    Prefer clear guidance instead of figuring it out alone
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
                  Add structured cold &amp; compression to your recovery
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  The early days after injury or surgery can feel overwhelming.
                  Having access to tools like Game Ready®, along with clear
                  guidance from your rehab team, can help you feel more
                  supported and prepared.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We&apos;ll always keep the bigger picture in mind—range of
                  motion, strength, function, and your long-term goals—while
                  using Game Ready® as one part of your overall recovery plan.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  If you have an upcoming surgery date or a recent injury, reach
                  out early so we can discuss timing and availability.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ready to ask about rental options?
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Contact us with your surgery or injury details and we&apos;ll
                  help you decide whether Game Ready® rental is appropriate and
                  how long you might need it.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Inquire About Game Ready Rental
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
