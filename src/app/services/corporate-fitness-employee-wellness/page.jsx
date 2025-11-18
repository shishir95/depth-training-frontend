"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function CorporateFitnessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              {/* Left */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                  Fitness • Corporate Fitness & Employee Wellness
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Corporate Fitness & Employee Wellness
                  <span className="block text-red-400">
                    Healthier teams. Stronger workplaces.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  DEPTH partners with local businesses to bring fitness and
                  wellness programs to your workplace or to our facility. From
                  private classes and training packages to wellness seminars, we
                  help your team feel better, move more, and perform at a higher
                  level.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="mailto:info@depthtraining.ca"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Email About Corporate Programs
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

                <p className="text-xs text-neutral-400">
                  Corporate programs can be hosted at DEPTH or on-site at your
                  workplace, depending on space and goals.
                </p>
              </div>

              {/* Right card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  What we offer for organizations
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Private fitness classes for staff groups.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Customized training programs for employee teams.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Wellness workshops and lunch-and-learn sessions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Support with ongoing employee wellness initiatives.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – who / focus */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Who it's for */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Who our corporate programs are for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For organizations that see health and performance as part of
                  their culture.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Small and mid-sized businesses in Waterloo Region.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Companies wanting to invest in employee health.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Teams looking for a wellness partner, not a one-off event.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Organizations needing a custom solution around space and schedules.</span>
                  </li>
                </ul>
              </div>

              {/* What we focus on */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we focus on with your team
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Programs are built around what your employees need most.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Movement & activity habits
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength, mobility & posture
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Energy, stress management & resilience
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Workplace wellness education
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Team building through shared training
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Long-term sustainability of programs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – steps */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              How to start a Corporate Fitness partnership
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Connect with our team
                </h3>
                <p className="text-neutral-300 text-sm">
                  Email or call to share your company size, goals, and what
                  you&apos;re looking for in a wellness partner.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Design a program that fits
                </h3>
                <p className="text-neutral-300 text-sm">
                  We help you choose the right mix of classes, training,
                  workshops, and schedule — at DEPTH, on-site, or both.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Launch & support your team
                </h3>
                <p className="text-neutral-300 text-sm">
                  We deliver the sessions, support your staff, and adjust the
                  program as needed so it stays engaging and effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – CTA */}
        <section className="w-full bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                  Ready to invest in your team&apos;s wellness?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Reach out and we&apos;ll help you design a Corporate Fitness &
                  Employee Wellness program that fits your people, your space,
                  and your budget.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@depthtraining.ca"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Email About Corporate Programs
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
