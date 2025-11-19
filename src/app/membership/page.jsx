import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import PlansSection from "@/components/membership/PlansSection";

const HERO_STATS = [
  { label: "Average Check-Ins", value: "2x / week" },
  { label: "Concierge Response", value: "< 24 hrs" },
  { label: "Recovery Sessions", value: "Unlimited" },
];

const MEMBER_REVIEWS = [
  {
    quote:
      "The Elevate plan keeps me accountable with semi-private sessions and sauna access on stressful weeks.",
    name: "Kristen M.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Being able to flow from physio to training without leaving the space changed my entire rehab timeline.",
    name: "Aiden L.",
    role: "University Hockey",
  },
  {
    quote:
      "Our team pack keeps the squad together in the off-season and the reporting makes coaching easy.",
    name: "Coach Reed",
    role: "U18 Head Coach",
  },
];

export const metadata = { title: "Membership | Depth Training" };

export default function MembershipPage() {
  return (
    // 🔥 full-width page wrapper (same pattern as Trainer page)
    <main className="min-h-screen w-full bg-[#020109] text-white">
      {/* full-width header */}
      <Header />

      {/* centered content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#05030f] to-black py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.28),_transparent_60%)] opacity-80 blur-3xl"
          />
          <div className="relative grid gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
                Memberships
              </p>
              <div>
                <h1 className="text-3xl font-semibold sm:text-4xl">
                  Start today, feel better tomorrow.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-zinc-300">
                  Choose plans that bundle coaching, rehab, and recovery lounge
                  access. Every option is built with charcoal backdrops, coral
                  glows, and premium accountability.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--depth-accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(241,96,85,0.4)] transition hover:bg-[#ff9686]"
                >
                  Compare plans
                </a>
                <a
                  href="mailto:hello@depthtraining.ca"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Contact concierge
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
                  >
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--depth-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--depth-accent)]/15 via-black to-black p-6 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
                Highlight Plan
              </p>
              <div className="mt-5 rounded-3xl border border-white/10 bg-black/30 p-6">
                <p className="text-sm text-[var(--depth-muted)]">Elevate</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">$89</span>
                  <span className="text-sm text-[var(--depth-muted)]">
                    / month
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {[
                    "Weekly semi-private session",
                    "Unlimited recovery lounge",
                    "Monthly consult + dashboard",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)] shadow-[0_0_12px_rgba(241,96,85,0.6)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
                  Lock in Elevate
                </button>
                <p className="mt-3 text-xs text-[var(--depth-muted)]">
                  Includes onboarding call + personalized app access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FindSpecialtiesSection />
        <PlansSection />
        <FeaturedTraining />

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#05030f] via-black to-[#0b0612] py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,142,122,0.2),_transparent_55%)] opacity-80 blur-3xl"
          />
          <div className="relative px-6 sm:px-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
                Member Reviews
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Coral-glow praise
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                Stories from members who moved from curious to confident.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {MEMBER_REVIEWS.map((review) => (
                <article
                  key={review.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
                >
                  <p className="text-sm text-zinc-200">{`“${review.quote}”`}</p>
                  <div className="mt-6">
                    <p className="text-base font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--depth-muted)]">
                      {review.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* full-width footer */}
      <FooterStrip />
    </main>
  );
}