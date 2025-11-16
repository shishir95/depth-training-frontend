"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function CorporateFitnessEmployeeWellnessPage() {
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
                  Fitness • Corporate Fitness &amp; Employee Wellness
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Corporate fitness &amp; employee wellness
                  <span className="block text-red-400">
                    tailored movement and wellness support for your team.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  We partner with organizations to design fitness and wellness
                  initiatives that people actually use—from group training and
                  workshops to ongoing programs focused on performance, health,
                  and resilience.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Start a Corporate Inquiry
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call to Discuss Options
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Programs are tailored to your organization’s size, schedule,
                  and goals. We&apos;ll collaborate with you to build the right
                  starting point.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Ways we support organizations
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">On-site or in-facility
                        training</span>{" "}
                      for employees—strength, mobility, or conditioning-focused.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Workshops &amp; education
                      </span>{" "}
                      on movement at the desk, injury prevention, and stress
                      management.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Wellness challenges &amp; initiatives
                      </span>{" "}
                      that create engagement beyond a single event.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Leadership support</span>{" "}
                      around building performance-oriented, healthy cultures.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  How we build a corporate wellness partnership
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We begin with a discovery conversation to understand your
                  workplace, existing wellness efforts, and what success would
                  look like for your team—reduced injuries, improved energy, or
                  a stronger culture around health.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  From there, we design options that match your budget, space,
                  and schedule. That might mean a one-time workshop series, a
                  recurring on-site class, or a multi-month initiative with
                  ongoing support.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Throughout the process, we gather feedback, refine the
                  approach, and help you communicate the value of the program to
                  your team.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical engagement might include
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Initial discovery call with key stakeholders or HR/leadership.
                  </li>
                  <li>
                    Review of team size, schedule, and wellness priorities.
                  </li>
                  <li>
                    Proposed program options with clear timelines and pricing.
                  </li>
                  <li>
                    Delivery of training sessions, workshops, or challenges.
                  </li>
                  <li>
                    Follow-up, feedback, and discussion of ongoing opportunities.
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
              Corporate fitness &amp; wellness can support your team if…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  You&apos;re focused on employee wellbeing
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Looking to reduce stress and burnout.</li>
                  <li>Wanting to support physical and mental health.</li>
                  <li>
                    Seeking tangible ways to show you invest in your people.
                  </li>
                  <li>Interested in long-term employee resilience.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  You want movement built into the workweek
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Many roles involve long hours sitting or standing.</li>
                  <li>
                    You see recurring issues like back, neck, or shoulder pain.
                  </li>
                  <li>
                    You want proactive movement, not just reactive treatment.
                  </li>
                  <li>Staff are interested in fitness but lack direction.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  You value culture &amp; performance
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Want teams that feel energized and engaged.</li>
                  <li>See wellness as part of performance and retention.</li>
                  <li>Want shared experiences outside typical meetings.</li>
                  <li>
                    Are open to a tailored approach, not a one-size-fits-all
                    package.
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
                  Interested in bringing DEPTH to your workplace?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  We&apos;ll work with you to design a plan that fits your team,
                  space, and goals—whether that&apos;s a single workshop series
                  or an ongoing partnership.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share a few details about your organization and we&apos;ll
                  follow up with options and next steps.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Start a conversation with our team
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Tell us about your company, team size, and what you&apos;re
                  hoping to achieve. We&apos;ll respond with ideas and
                  timelines.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Submit Corporate Inquiry
                  </a>
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Call the Gym
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-dashed border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Learn More About DEPTH
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
