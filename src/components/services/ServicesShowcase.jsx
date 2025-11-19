"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const SERVICE_CATEGORIES = [
  "All",
  "Strength & Performance",
  "Rehab & Recovery",
  "Athlete Development",
  "Wellness",
];

const SERVICES = [
  {
    title: "Personal Training Intensives",
    description:
      "High-touch 1:1 coaching with biometrics, session recaps, and programming that flexes with your calendar.",
    category: "Strength & Performance",
    highlights: [
      "75-minute assessments",
      "Flexible session packs",
      "Coach-led recovery",
    ],
    tag: "Popular",
  },
  {
    title: "Semi-Private Performance Pods",
    description:
      "Train with three other athletes inside curated pods so you get energy, accountability, and personal coaching.",
    category: "Strength & Performance",
    highlights: ["Skill-matched pods", "Speed & power focus", "Shared data vault"],
    tag: "Team Energy",
  },
  {
    title: "Integrated Rehab Plans",
    description:
      "Pair your therapist with strength coaches so your rehab includes manual care and progressive loading.",
    category: "Rehab & Recovery",
    highlights: [
      "Return-to-play testing",
      "Manual + loaded care",
      "Sport coach collaboration",
    ],
    tag: "Clinic + Gym",
  },
  {
    title: "Return-to-Performance Bridge",
    description:
      "When physio ends we build the bridge back to the rink, court, or field with sprint, jump, and contact work.",
    category: "Rehab & Recovery",
    highlights: ["Power diagnostics", "Sprint mechanics", "Confidence mapping"],
    tag: "Bridge",
  },
  {
    title: "Off-Season Intensives",
    description:
      "12-week phases built around your competition calendar with force plate testing and on/off-ice integration.",
    category: "Athlete Development",
    highlights: ["Force-plate reads", "Energy system work", "On-ice integration"],
    tag: "Season Ready",
  },
  {
    title: "Youth Development (U12-U17)",
    description:
      "Multi-sport friendly training that builds coordination, strength, and leadership from day one.",
    category: "Athlete Development",
    highlights: [
      "Movement literacy",
      "Growth-plate aware loads",
      "Leadership focus",
    ],
    tag: "Foundations",
  },
  {
    title: "Wellness Membership",
    description:
      "Infrared sauna, cold plunge, guided mobility, and Lenis-powered recovery flows for consistent recharge.",
    category: "Wellness",
    highlights: ["Recovery lounge access", "Guest passes", "Unlimited mobility"],
    tag: "Recharge",
  },
  {
    title: "Corporate Vitality Labs",
    description:
      "On-site or in-studio training pods with reporting so your team builds strength and culture together.",
    category: "Wellness",
    highlights: ["Monthly reporting", "Hybrid delivery", "Custom workshops"],
    tag: "For Teams",
  },
];

const CTA_BULLETS = [
  "Talk through goals + training history",
  "Get matched with the right coach",
  "Walk away with a 90-day roadmap",
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  show: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

export default function ServicesShowcase() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return SERVICES;
    return SERVICES.filter((service) => service.category === category);
  }, [category]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 via-[#05030f] to-black p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.32),_transparent_65%)] blur-3xl opacity-80"
      />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
            Service Catalog
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Choose your pathway
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Curated experiences that move you from assessment to peak
            performance with the same premium glow you see on the Resources page.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {SERVICE_CATEGORIES.map((option) => {
            const isActive = option === category;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                className={[
                  "rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition",
                  isActive
                    ? "border-[var(--depth-accent)] bg-[var(--depth-accent)] text-black shadow-[0_0_25px_rgba(241,96,85,0.45)]"
                    : "border-white/10 bg-white/5 text-[var(--depth-muted)] hover:border-[var(--depth-accent-soft)] hover:text-white",
                ].join(" ")}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-10 grid gap-8 xl:grid-cols-[minmax(0,3fr)_minmax(0,1.1fr)]">
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        <CtaPanel />
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="show"
      custom={index}
      whileHover={{
        y: -8,
        boxShadow: "0 28px 65px rgba(0,0,0,0.55)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--depth-card)]/80 p-5"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--depth-muted)]">
            {service.category}
          </span>
          <span className="text-xs font-semibold text-[var(--depth-accent-soft)]">
            {service.tag}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-zinc-300">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)] shadow-[0_0_12px_rgba(241,96,85,0.7)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-2 text-xs text-[var(--depth-muted)]">
          <span>Includes onboarding consult</span>
          <span className="inline-flex items-center gap-1 text-[var(--depth-accent-soft)]">
            Book call →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CtaPanel() {
  return (
    <div className="rounded-3xl border border-[var(--depth-accent-soft)]/60 bg-gradient-to-b from-[var(--depth-card)]/90 via-zinc-950/90 to-black/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:sticky lg:top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
        Concierge
      </p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight">
        Not sure where to plug in?
      </h3>
      <p className="mt-3 text-sm text-zinc-300">
        Talk to our coaching concierge and we&apos;ll build a personal roadmap
        that blends training, rehab, and recovery inside one membership.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-zinc-300">
        {CTA_BULLETS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-3">
        <Link
          href="/membership"
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--depth-accent)] px-4 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(241,96,85,0.4)] transition hover:bg-[#ff9686]"
        >
          Explore memberships
        </Link>
        <a
          href="https://depthtraining.janeapp.com/locations/depth-training-physiotherapy/book"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
        >
          Book a planning call
        </a>
      </div>
      <p className="mt-4 text-xs text-[var(--depth-muted)]">
        Response within 1 business day.
      </p>
    </div>
  );
}
