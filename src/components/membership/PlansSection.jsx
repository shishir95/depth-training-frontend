"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";
import ContactModal from "./ContactModal";

const TABS = ["Student", "Adults", "Group", "Flexible Options"];

// Fallback data (used only if CMS is empty)
const FALLBACK_PLAN_DATA = {
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
      price: "129",
      period: "/first month",
      title: "Intro Month",
      features: [
        "Unlimited classes",
        "No joining fee",
        "Coach check-ins",
        "Great starting point",
      ],
      highlighted: true,
      badge: "Best start",
    },
    {
      price: "189",
      period: "/month",
      title: "Adult Membership",
      features: [
        "Unlimited access",
        "No long-term contract",
        "Performance-focused classes",
      ],
      highlighted: false,
    },
  ],
  Group: [
    {
      price: "159",
      period: "/person /month",
      title: "Family Membership",
      features: [
        "Discounted per person",
        "Shared schedule",
        "Perfect for active families",
      ],
      highlighted: true,
      badge: "Families",
    },
  ],
  "Flexible Options": [
    {
      price: "30",
      period: "/class",
      title: "Drop-In",
      features: ["Any class", "No commitment", "Perfect for visitors"],
      highlighted: false,
    },
    {
      price: "225",
      period: "/10 classes",
      title: "10-Class Pass",
      features: [
        "Bundle pricing",
        "Use over time",
        "Great for flexible schedules",
      ],
      highlighted: true,
      badge: "Value",
    },
    {
      price: "139",
      period: "/month",
      title: "Part-Time",
      features: [
        "Up to 8 classes / month",
        "Ideal for busy schedules",
        "Keeps you consistent",
      ],
      highlighted: false,
    },
  ],
};

// Map CMS slugs to tabs in the UI
const SLUG_TO_TAB = {
  "free-trial-class": "Student",
  "intro-month": "Adults",
  "student-monthly-membership": "Student",
  "adult-monthly-membership": "Adults",
  "family-membership": "Group",
  "single-class-drop-in": "Flexible Options",
  "10-class-punch-card": "Flexible Options",
  "part-time-membership": "Flexible Options",
};

function buildPlanDataFromCms(plans = []) {
  const base = {
    Student: [],
    Adults: [],
    Group: [],
    "Flexible Options": [],
  };

  if (!Array.isArray(plans)) return base;

  plans.forEach((plan) => {
    const slug = plan?.slug;
    const tab = SLUG_TO_TAB[slug] || "Flexible Options";

    if (!base[tab]) return;

    base[tab].push({
      price:
        typeof plan.price === "number" ? String(plan.price) : plan.price || "0",
      period: plan.billingPeriod || "",
      title: plan.name || "",
      features: Array.isArray(plan.features) ? plan.features : [],
      highlighted: Boolean(plan.isPopular),
      badge: plan.highlight || undefined,
    });
  });

  return base;
}

export default function PlansSection({ plans = [] }) {
  const [active, setActive] = useState("Student");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const cmsPlanData = buildPlanDataFromCms(plans);
  const hasCmsData = Object.values(cmsPlanData).some(
    (group) => Array.isArray(group) && group.length > 0
  );
  const planDataSource = hasCmsData ? cmsPlanData : FALLBACK_PLAN_DATA;

  const handleChoose = (planTitle) => {
    setSelectedPlan(`${active} — ${planTitle}`);
    setIsModalOpen(true);
  };

  const plansForActiveTab = planDataSource[active] || [];

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
        {plansForActiveTab.map((plan, index) => (
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
