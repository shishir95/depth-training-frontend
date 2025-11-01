'use client';

import { useState } from 'react';
import PlanCard from './PlanCard';
import ContactModal from './ContactModal';

const PRICE_3M = process.env.NEXT_PUBLIC_PRICE_3M || '';
const DEFAULT_PRICE_ID = process.env.NEXT_PUBLIC_PRICE_3M || '';

const PLAN_CONFIG = {
  Adults: {
    Essentials: {
      priceId: PRICE_3M,
      planLabel: '3-month',
      intervalMonths: 3,
    },
    // Add more mappings when ready, e.g.:
    // Pro: { priceId: process.env.NEXT_PUBLIC_PRICE_6M || '', planLabel: '6-month', intervalMonths: 6 },
  },
};
const TABS = ['Student', 'Adults', 'Group', 'Flexible Options'];

const PLAN_DATA = {
  Student: [
    {
      price: '0',
      period: '/month',
      title: 'Free Trial',
      features: [
        'No Joining Fee',
        'Access to 200+ Weekly Class',
        'Onsite Instruction From',
        'High-Qualified Trainers',
        'Training and Class Variety',
      ],
      highlighted: true,
    },
  ],
  Adults: [
    {
      price: '49',
      period: '/month',
      title: 'Essentials', // ← we wire this one to backend as example (3‑month plan)
      features: ['Gym access + classes', 'Beginner programs', 'Email support'],
    },
    {
      price: '79',
      period: '/month',
      title: 'Pro',
      features: ['All Essentials features', 'Unlimited classes', '1:1 coach'],
      highlighted: true,
    },
  ],
  Group: [
    {
      price: '129',
      period: '/team',
      title: 'Team Pack',
      features: ['Up to 6 members', 'Private group sessions', 'Priority booking'],
      highlighted: true,
    },
  ],
  'Flexible Options': [
    { price: '15', period: '/class', title: 'Drop-in', features: ['Any class', 'No commitment'] },
    { price: '120', period: '/10 classes', title: 'Class Pass', features: ['Valid 90 days', 'Shareable'], highlighted: true },
  ],
};

export default function PlansSection() {
  const [active, setActive] = useState('Student');

  // Modal + selected plan metadata
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // { tab, title, priceId?, planLabel?, intervalMonths? }

  const handleChoose = (planTitle) => {
    // Look up metadata for this plan (if we’ve wired it)
    const cfg =
      (PLAN_CONFIG[active] && PLAN_CONFIG[active][planTitle])
        ? PLAN_CONFIG[active][planTitle]
        : null;

    setSelectedPlan({
      tab: active,
      title: planTitle,
      ...(cfg || {}),
    });
    setIsModalOpen(true);
  };

  return (
    <section id="plans" className="w-full px-6 py-12">
      <h3 className="text-center text-2xl md:text-3xl font-semibold">
        How Can I Join The Depth Fitness?
      </h3>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-4" role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
            className={`pb-2 text-sm md:text-base border-b-2 transition 
              ${active === t ? 'border-red-500 text-red-500 font-semibold' : 'border-transparent text-gray-300 hover:text-white'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {PLAN_DATA[active].map((p, i) => (
          <PlanCard
            key={`${active}-${p.title}-${i}`}
            {...p}
            onChoose={() => handleChoose(p.title)}
          />
        ))}
      </div>

      {/* Contact Modal */}
      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan ? `${selectedPlan.tab} — ${selectedPlan.title}` : ''}
        plan={selectedPlan}
      />
    </section>
  );
}
