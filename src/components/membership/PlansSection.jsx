"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";
import ContactModal from "./ContactModal";

const TABS = ["Student", "Adults", "Group", "Flexible Options"];

const PLAN_DATA = {
  Student: [
    {
      price: "0",
      period: "/trial",
      title: "Free Trial",
      features: [
        "Movement screen",
        "Coach pairing",
        "Class + gym access",
        "10-day text support",
      ],
      highlighted: true,
      badge: "Starter",
    },
  ],
  Adults: [
    {
      price: "49",
      period: "/month",
      title: "Essentials",
      features: [
        "Gym + group access",
        "Weekly email support",
        "Recovery lounge passes",
      ],
      highlighted: false,
    },
    {
      price: "89",
      period: "/month",
      title: "Elevate",
      features: [
        "Everything in Essentials",
        "2 semi-private sessions",
        "Infrared + plunge",
        "Monthly coach consult",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
  ],
  Group: [
    {
      price: "129",
      period: "/team",
      title: "Team Pack",
      features: [
        "Up to 6 members",
        "Private group sessions",
        "Force/velocity testing",
        "Coach analytics report",
      ],
      highlighted: true,
      badge: "Teams",
    },
  ],
  "Flexible Options": [
    {
      price: "20",
      period: "/class",
      title: "Drop-In",
      features: ["Any class", "Coach notes", "No commitment"],
      highlighted: false,
    },
    {
      price: "150",
      period: "/10 classes",
      title: "Class Pass",
      features: ["Shareable credits", "Valid 90 days", "Priority booking"],
      highlighted: true,
      badge: "Value",
    },
  ],
};

export default function PlansSection() {
  const [active, setActive] = useState("Student");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChoose = (planTitle) => {
    setSelectedPlan(`${active} — ${planTitle}`);
    setIsModalOpen(true);
  };

  return (
    <section
      id="plans"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#05030f] to-black px-6 sm:px-10"
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
          Memberships
        </p>
        <h3 className="text-3xl font-semibold sm:text-4xl">
          Pick the experience that fits your season
        </h3>
        <p className="mt-3 text-sm text-zinc-300">
          Switch plans anytime. Every membership starts with an onboarding call.
        </p>
      </div>

      <div
        className="mt-6 flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Membership categories"
      >
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={[
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition",
                isActive
                  ? "border-[var(--depth-accent)] bg-[var(--depth-accent)] text-white"
                  : "border-white/15 bg-white/5 text-[var(--depth-muted)] hover:text-white",
              ].join(" ")}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="flex-wrap justify-center mt-8 flex gap-6">
        {PLAN_DATA[active].map((plan, index) => (
          <PlanCard
            key={`${active}-${plan.title}-${index}`}
            {...plan}
            onChoose={() => handleChoose(plan.title)}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-[var(--depth-muted)]">
        Need something custom? Email{" "}
        <a
          href="mailto:hello@depthtraining.ca"
          className="text-white underline"
        >
          hello@depthtraining.ca
        </a>
      </p>

      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </section>
  );
}
