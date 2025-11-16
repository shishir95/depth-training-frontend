"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export default function AthleteTrainingU8To14Page() {
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
                  Athlete Training • U8–14
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Athlete Training (U8–14)
                  <span className="block text-red-400">
                    build fundamentals, confidence, and a love for training.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                  Our youth athlete programs focus on age-appropriate strength,
                  movement, and athletic skills in a fun, supportive environment.
                  The goal is to build better movers and more confident young
                  athletes—not mini pros.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://depthtraining.janeapp.com/locations/depth-training-youth-team-training-facility/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    View Youth Schedule &amp; Booking
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Ask About Youth Athlete Training
                  </a>
                </div>

                <p className="text-xs text-neutral-400">
                  Sessions for U8–14 athletes run out of our Youth &amp; Team
                  Training Facility at 483 Conestogo Road, Waterloo.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">
                  What Youth Athlete Training focuses on
                </h2>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Fundamental movement skills</span>{" "}
                      like running, jumping, landing, pushing, pulling, and
                      changing direction with control.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Age-appropriate strength &amp; power</span>{" "}
                      using bodyweight, med balls, sleds, and basic resistance
                      work—not max lifting.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">Speed, agility, and coordination</span>{" "}
                      through games, drills, and structured progressions that
                      keep kids engaged.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>
                      <span className="font-semibold">
                        Confidence, work ethic, and enjoyment
                      </span>{" "}
                      so young athletes learn to love training and being active.
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
                  How Youth Athlete Training works at DEPTH
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Athletes are grouped by age and, when possible, by sport or
                  level. This lets us keep sessions energetic and fun while still
                  coaching proper technique and progressions.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Each session follows a clear structure: dynamic warm-up,
                  movement skills, speed and agility work, strength and power
                  development, and age-appropriate conditioning or games.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Coaches maintain a close coach-to-athlete ratio so kids get
                  feedback, encouragement, and support—not just a workout to
                  “get through.”
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  A typical youth session includes
                </h3>
                <ol className="space-y-3 text-sm text-neutral-200 list-decimal list-inside">
                  <li>Dynamic warm-up and basic movement prep.</li>
                  <li>
                    Footwork, speed, and change-of-direction drills using cones,
                    ladders, and markers.
                  </li>
                  <li>
                    Strength and power training with age-appropriate tools (e.g.
                    bodyweight, med balls, sleds, bands).
                  </li>
                  <li>
                    Conditioning and compete-style games to reinforce skills
                    under fatigue.
                  </li>
                  <li>
                    Cool-down, reminders, and quick check-ins with athletes and,
                    when needed, parents.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="w-full border-b border-neutral-900 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Youth Athlete Training is ideal if your athlete is…
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-200">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Between U8 and U14, any sport
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Playing hockey, soccer, basketball, football, or more.</li>
                  <li>
                    New to strength training and needs a safe, structured place
                    to start.
                  </li>
                  <li>
                    Already active but ready for more intentional development.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Needing better fundamentals
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>Wants to be faster, stronger, and more coordinated.</li>
                  <li>Struggles with balance, mechanics, or confidence.</li>
                  <li>
                    Preparing for higher levels of sport in the next few years.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-base">
                  Supported by parents &amp; coaches
                </h3>
                <ul className="space-y-1 text-neutral-300">
                  <li>
                    Parents want expert guidance instead of guessing at home
                    workouts.
                  </li>
                  <li>
                    Coaches want their players developing safely outside of
                    practice.
                  </li>
                  <li>
                    Family is ready to commit to a consistent training schedule.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect / Location & steps */}
        <section className="w-full border-b border-neutral-900 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  What to expect at the Youth &amp; Team Training Facility
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  U8–14 sessions are held at{" "}
                  <span className="font-semibold">
                    483 Conestogo Road, Unit 2, Waterloo
                  </span>
                  , upstairs at The Zone Training. Parking is free and available
                  behind the building. Follow the signs upstairs when you
                  arrive.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Sessions are typically 60 minutes. Athletes should bring clean
                  indoor shoes, a water bottle, and comfortable athletic
                  clothing—shorts or joggers and a t-shirt or long sleeve.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  The first session often includes some assessment and goal
                  setting so our coaches can tailor training to your child&apos;s
                  needs and sport demands.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Simple steps to get started
                </h3>
                <ol className="space-y-2 text-sm text-neutral-200 list-decimal list-inside">
                  <li>
                    Contact our team or complete the Youth Athlete registration
                    form for the appropriate age group.
                  </li>
                  <li>
                    Choose training days and times that fit your family&apos;s
                    schedule.
                  </li>
                  <li>
                    Set up your Jane account to manage billing and session
                    bookings online.
                  </li>
                  <li>
                    Complete the online intake form before your first session.
                  </li>
                  <li>
                    Arrive a few minutes early, check in, and let your athlete
                    enjoy their first DEPTH session.
                  </li>
                </ol>
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
                  Want to give your young athlete a strong foundation?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  Our U8–14 Athlete Training programs help kids move better,
                  build strength safely, and gain the confidence to perform in
                  sport and daily life.
                </p>
                <p className="text-sm sm:text-base text-neutral-300">
                  Share your athlete&apos;s age, sport, and goals and we&apos;ll
                  recommend the most appropriate program and schedule.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-2xl bg-neutral-950/70 p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Talk to our Youth Athlete staff
                </h3>
                <p className="text-sm text-neutral-300 mb-4">
                  We&apos;re happy to answer questions about readiness, schedule
                  options, and how training fits with school and sport.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:12267489494"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    Call the Gym
                  </a>
                  <a
                    href="mailto:info@depthtraining.ca"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Email About Youth Athlete Training
                  </a>
                  <a
                    href="/services/athlete-training"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-dashed border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    View All Athlete Programs
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
