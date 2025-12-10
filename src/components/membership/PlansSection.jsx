"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";

const TABS = ["Student", "Adults", "Group", "Flexible Options"];

// TEMP: shared values so everything passes the Nest DTO
const SHARED_PLAN_LABEL = "3-month";
const SHARED_INTERVAL = 3;

const SHARED_PRICE_ID =
  process.env.NEXT_PUBLIC_PRICE_3M || "price_1SL4zC1KOO8rwpjpnTu9lKnA";

const PLAN_DATA = {
  Student: [
    {
      price: "0",
      period: "/trial",
      title: "Free Trial",
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
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
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
      features: [
        "Unlimited classes",
        "No joining fee",
        "Coach check-ins",
        "Great starting point",
      ],
      highlighted: false,
    },
    {
      price: "189",
      period: "/month",
      title: "Adult Membership",
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
      features: [
        "Unlimited access",
        "No long-term contract",
        "Performance-focused classes",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
  ],
  Group: [
    {
      price: "159",
      period: "/person /month",
      title: "Family Membership",
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
      features: [
        "Discounted per person",
        "Shared schedule",
        "Perfect for active families",
      ],
      highlighted: true,
      badge: "Teams",
    },
  ],
  "Flexible Options": [
    {
      price: "30",
      period: "/class",
      title: "Drop-In",
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
      features: ["Any class", "No commitment", "Perfect for visitors"],
      highlighted: false,
    },
    {
      price: "225",
      period: "/10 classes",
      title: "10-Class Pass",
      priceId: SHARED_PRICE_ID,
      planLabel: SHARED_PLAN_LABEL,
      intervalMonths: SHARED_INTERVAL,
      features: [
        "Bundle pricing",
        "Use over time",
        "Great for flexible schedules",
      ],
      highlighted: true,
      badge: "Value",
    },
  ],
};

export default function PlansSection() {
  const [active, setActive] = useState("Student");

  const handleChoose = async (plan) => {
    try {
      // TEMP: simple email capture; later you can plug in auth or a real form
      const email = window.prompt(
        "Enter your email address to proceed to checkout:"
      );
      if (!email) return;

      const apiBase =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

      const res = await fetch(`${apiBase}/billing/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          priceId: plan.priceId,
          planLabel: plan.planLabel,          // "3-month"
          intervalMonths: plan.intervalMonths // 3
        }),
      });

      if (!res.ok) {
        console.error("Checkout failed:", await res.text());
        alert("Something went wrong starting checkout. Please try again.");
        return;
      }

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout session created, but no redirect URL was returned.");
      }
    } catch (err) {
      console.error("Error calling checkout:", err);
      alert("Unexpected error starting checkout. Please try again.");
    }
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

      <div className="flex-wrap justify-center mt-8 flex gap-6 pb-5">
        {PLAN_DATA[active].map((plan, index) => (
          <PlanCard
            key={`${active}-${plan.title}-${index}`}
            {...plan}
            onChoose={() => handleChoose(plan)}
          />
        ))}
      </div>
    </section>
  );
}