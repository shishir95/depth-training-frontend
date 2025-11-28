"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";
import CustomerReviews from "@/components/common/CustomerReviews";

export default function SemiPrivateTrainingPage() {
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
                  Fitness • Semi-Private Training
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Semi-Private Training
                  <span className="block text-red-400">
                    Personal coaching. Small group energy.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Train in a small group with your own individualized program.
                  Semi-private gives you high-level coaching and accountability,
                  with a fun, motivating atmosphere and flexible training times.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call to Ask About Semi-Private
                  </a>
                  <a
                    href="https://depthtraining.janeapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    View Semi-Private Options
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Sessions are typically 60 minutes. Athlete and personal
                  semi-private options are available.
                </p>
              </div>

              {/* Right card */}
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-4">
                  Why Semi-Private Training at DEPTH
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Individualized programs based on your goals and
                      experience.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Coached every session with small coach-to-client ratios.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Train alongside like-minded people instead of alone.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>More cost-effective than 1-on-1 sessions.</span>
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
                  Who Semi-Private Training is for
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  For people who want a personalized program and coaching, but
                  like training with others.
                </p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Beginners who want guidance and support.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      Regular gym-goers who want more structure and results.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Friends or partners who like to train together.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      People who want coaching but not a big class vibe.
                    </span>
                  </li>
                </ul>
              </div>

              {/* What we focus on */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  What we focus on in Semi-Private
                </h2>
                <p className="text-sm text-neutral-300 mb-5 max-w-md">
                  Every person has their own plan, even in the same session.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Strength & muscle
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Fat loss & conditioning
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Movement quality & mobility
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Technique & confidence with lifting
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Long-term healthy habits
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Accountability & consistency
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
              What to expect from Semi-Private Training
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 1
                </p>
                <h3 className="font-semibold mb-2">
                  Free consult & choose your option
                </h3>
                <p className="text-neutral-300 text-sm">
                  Talk through your goals and schedule. We&apos;ll explain
                  Semi-Private options and help you pick the best fit.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 2
                </p>
                <h3 className="font-semibold mb-2">
                  Assessment & personalized plan
                </h3>
                <p className="text-neutral-300 text-sm">
                  Your coach checks how you move and builds a plan for you, even
                  though you&apos;re training alongside others.
                </p>
              </div>
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Step 3
                </p>
                <h3 className="font-semibold mb-2">
                  Train together, progress individually
                </h3>
                <p className="text-neutral-300 text-sm">
                  You train at scheduled times with your group while your coach
                  guides, corrects, and progresses your program.
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
                  Want coaching plus community?
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl">
                  Reach out and we&apos;ll help you decide if Semi-Private
                  Training is the best fit for your goals and budget.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:12267489494"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Call to Get Started
                </a>
                <a
                  href="https://www.depthtraining.ca/contact/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Book a Free Fitness Consult
                </a>
              </div>
            </div>
          </div>
        </section>
        <TrainingPictureSection></TrainingPictureSection>
        <CustomerReviews></CustomerReviews>
      </main>

      <FooterStrip />
    </div>
  );
}
