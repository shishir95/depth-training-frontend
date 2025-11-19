"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const TEAM = [
  {
    id: 1,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
  {
    id: 5,
    name: "John Smith",
    role: "Trainer, Fitness",
    image: "/assets/image.png",
    desc: "/trainerdescription",
  },
];

// inline icons
const Icon = {
  li: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm3.5 6.25A1.75 1.75 0 1 1 9.25 7.5 1.75 1.75 0 0 1 7.5 9.25zM6 18v-7h3v7H6zm6 0v-4c0-1.105.895-2 2-2s2 .895 2 2v4h3v-4.5c0-2.485-2.015-4.5-4.5-4.5S10 11.015 10 13.5V18h2z" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.217l-10 6.25L2 6.217V6zm0 3.383V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.383l-9.445 5.9a2 2 0 0 1-2.11 0L2 9.383z" />
    </svg>
  ),
  site: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 17.93V18h-2v1.93A8.012 8.012 0 0 1 4.07 13H6v-2H4.07A8.012 8.012 0 0 1 11 4.07V6h2V4.07A8.012 8.012 0 0 1 19.93 11H18v2h1.93A8.012 8.012 0 0 1 13 19.93ZM8 12a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
    </svg>
  ),
  eye: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
    </svg>
  ),
};

export default function TeamSection() {
  const sliderRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const CARD_WIDTH = 320; // width + gap
  const SPEED = 2500; // 2.5 seconds

  // Loop data to make infinite carousel
  const looped = [...TEAM, ...TEAM];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + CARD_WIDTH;

        // reset for infinite loop
        if (newOffset >= CARD_WIDTH * TEAM.length) return 0;

        return newOffset;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#101010] text-white py-20 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Our Team</h2>
        </div>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${offset}px)`,
              width: `${looped.length * CARD_WIDTH}px`,
            }}
          >
            {looped.map((member, index) => (
              <article
                key={index}
                className="bg-black border border-[var(--bg-primary)] rounded-xl overflow-hidden w-[300px] flex-shrink-0"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>

                  <div className="mt-3 flex items-center gap-3 text-gray-300">
                    <Icon.li className="h-5 w-5" />
                    <Icon.mail className="h-5 w-5" />
                    <Icon.site className="h-5 w-5" />
                    <Link href={member.desc}>
                      <Icon.eye className="h-5 w-5" />
                    </Link>
                  </div>

                  <button className="mt-4 rounded-full bg-[var(--bg-primary)] px-4 py-1.5 text-xs font-medium hover:bg-rose-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
