import Header from "@/components/common/Header";
import CustomerReviews from "@/components/common/CustomerReviews";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import AboutUs from "@/components/about/AboutUs";
import ContactSection from "@/components/about/ContactSection";

const HERO_POINTS = [
  "Clinic + gym under one roof since 2010",
  "Integrated coaches, therapists, and recovery tech",
  "Programs for everyday movers to pro athletes",
];

const HERO_STATS = [
  { label: "Clients served", value: "10k+" },
  { label: "Specialists", value: "35" },
  { label: "Sports covered", value: "18" },
];

const VALUES = [
  {
    title: "Smarter Training",
    description:
      "Individualized strength, conditioning, and skill work anchored to real data and lived coaching experience.",
  },
  {
    title: "Integrated Rehab",
    description:
      "Therapists and coaches collaborate daily so you recover faster and return with confidence.",
  },
  {
    title: "Community & Culture",
    description:
      "From youth athletes to high performers, everyone trains together in a premium, inclusive space.",
  },
  {
    title: "Sustainable Results",
    description:
      "We build habits, recovery rituals, and accountability systems that last long after a single program.",
  },
];

export const metadata = { title: "About | Depth Training" };

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
      <Header />

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#06030f] to-black px-6 py-12 sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.2),_transparent_60%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_55%)] opacity-90 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
              About Depth Training
            </p>
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">
                Train smarter. Recover faster. Live stronger.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-zinc-300">
                We are a collective of performance coaches, therapists, and
                recovery specialists helping movers feel premium every session.
              </p>
            </div>

            <ul className="space-y-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-sm text-zinc-200">
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)] shadow-[0_0_12px_rgba(241,96,85,0.7)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-5 text-center"
                >
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--depth-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--depth-accent)]/20 via-zinc-950 to-black p-6 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
              Quick Pulse
            </p>
            <div className="mt-6 space-y-6">
              {[
                { label: "Studios", value: "2 locations" },
                { label: "Treatment rooms", value: "6 private" },
                { label: "On-ice partners", value: "4 rinks" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--depth-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-300">
              We blend charcoal interiors, coral highlights, and smooth Lenis
              motion cues across every studio to keep your nervous system calm.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] sm:p-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
            Values
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">How we show up</h2>
          <p className="text-sm text-zinc-300">
            Premium spaces mean premium standards. Here is what we stand on.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--depth-card)]/80 p-5 text-left"
            >
              <div className="absolute inset-px rounded-[1.6rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--depth-accent)]/20 text-sm font-semibold text-[var(--depth-accent)]">
                  ✷
                </span>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-zinc-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FindSpecialtiesSection />
      <AboutUs />
      <CustomerReviews />
      <ContactSection />
      <FooterStrip />
    </div>
  );
}
