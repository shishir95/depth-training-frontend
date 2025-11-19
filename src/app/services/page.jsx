import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import PageShell from "@/components/layout/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";

const HERO_STATS = [
  { label: "Custom Programs Built", value: "400+" },
  { label: "Specialists & Coaches", value: "35+" },
  { label: "Recovery Tools On-Site", value: "12" },
  { label: "Average Response Time", value: "< 24h" },
];

const HERO_CHECKLIST = [
  "Integrated rehab + performance plans",
  "Charcoal backdrop premium studios",
  "Dedicated concierge for every member",
  "Data-rich dashboards & benchmarks",
];

export const metadata = { title: "Services | Depth Training" };

export default function ServicesPage() {
  return (
    <PageShell padY="py-16" maxWidth="max-w-7xl" className="space-y-16">
      <Header />

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#06030f] to-black px-6 py-12 sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.26),_transparent_55%)] opacity-80 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
              Depth Services
            </p>
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">
                Personal training, rehab, and recovery under one premium roof.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-zinc-300">
                Select flexible intensives or monthly memberships with
                integrated rehab access, concierge scheduling, and Lenis-smooth
                scroll experiences across every touch point.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services-catalog"
                className="inline-flex items-center justify-center rounded-full bg-[var(--depth-accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(241,96,85,0.4)] transition hover:bg-[#ff8e7e]"
              >
                View the catalog
              </a>
              <a
                href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Book a consult
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)] shadow-[0_0_12px_rgba(241,96,85,0.6)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-center"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--depth-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--depth-accent)]/20 via-zinc-950 to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
              Concierge Briefing
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              Every new member gets a plan built around life, not just workouts.
            </h3>
            <p className="mt-4 text-sm text-zinc-300">
              Share your injuries, goals, available days, and stress load—we
              build the rhythm, you follow the glow.
            </p>
            <div className="mt-6 space-y-4">
              {["Assessment + labs", "Custom program drop", "Coach intro call"].map(
                (step, idx) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step}</p>
                      <p className="text-xs text-[var(--depth-muted)]">
                        Week {idx + 1}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-xs text-[var(--depth-muted)]">
              Need to talk first? Email{" "}
              <a
                href="mailto:hello@depthtraining.ca"
                className="text-white underline"
              >
                hello@depthtraining.ca
              </a>
            </p>
          </div>
        </div>
      </section>

      <div id="services-catalog">
        <ServicesShowcase />
      </div>

      <FeaturedTraining />
      <FooterStrip />
    </PageShell>
  );
}
