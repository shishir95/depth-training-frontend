"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ---- Menu data you can edit easily ----
const MENU = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    type: "mega",
    groups: [
      {
        label: "Fitness",
        items: [
          { label: "Class Schedule", href: "/services/class-schedule" },
          {
            label: "Personal Training",
            href: "/services/personal-training",
          },
          {
            label: "Semi Private Training",
            href: "/services/semi-private-training",
          },
          { label: "Nutrition Training", href: "/services/nutrition-training" },
          {
            label: "Corporate Fitness & Employee Wellness",
            href: "/services/corporate-fitness-employee-wellness",
          },
        ],
      },
      {
        label: "Rehab",
        items: [
          { label: "Physiotherapy", href: "/services/physiotherapy" },
          {
            label: "Pelvic Physiotherapy",
            href: "/services/pelvic-physiotherapy",
          },
          { label: "Massage Therapy", href: "/services/massage-therapy" },
          { label: "Chiropractic", href: "/services/chiropractic-therapy" },
          {
            label: "Concussion Management",
            href: "/services/concussion-management",
          },
          {
            label: "Pediatric Physiotherapy",
            href: "/services/pediatric-physiotherapy",
          },
          {
            label: "Vestibular Physiotherapy",
            href: "/services/vestibular-physiotherapy",
          },
          {
            label: "Medical Acupuncture",
            href: "/services/medical-acupuncture",
          },
          { label: "Game Ready Rental", href: "/services/game-ready-rental" },
          {
            label: "GLA:D for Hip/Knee OA",
            href: "/services/glad-hip-knee-oa",
          },
          {
            label: "Infrared Sauna & Plunge",
            href: "/services/infrared-sauna-plunge",
          },
        ],
      },
      {
        label: "Athletic Training",
        items: [
          { label: "Off Season", href: "/services/off-season-training" },
          {
            label: "On-Ice Hockey Training",
            href: "/services/on-ice-hockey-training",
          },
          {
            label: "Athlete Training (14+)",
            href: "/services/athlete-training-14-plus",
          },
          {
            label: "Athletic Training (U8–14)",
            href: "/services/athlete-training-u8-14",
          },
          {
            label: "1-on-1 Athlete Training",
            href: "/services/1-on-1-athlete-training",
          },
          { label: "Team Training", href: "/services/team-training" },
          {
            label: "Athlete Nutrition Coaching",
            href: "/services/athlete-nutrition-coaching",
          },
        ],
      },
    ],
  },
  { label: "Our Team", href: "/trainer" },
  { label: "Resources", href: "/resourcepage" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [openRoot, setOpenRoot] = useState(null); // which top-level menu is open
  const [openGroup, setOpenGroup] = useState(0); // which Services column is active
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef(null);

  // Sticky glass polish: add shadow + compress padding after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    const onClick = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpenRoot(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpenRoot(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Keyboard nav helpers
  const onRootKey = (idx) => (e) => {
    if (["Enter", " ", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      setOpenRoot((p) => (p === idx ? null : idx));
    }
    if (e.key === "ArrowRight") setOpenRoot(idx);
    if (e.key === "Escape") setOpenRoot(null);
  };

  return (
    <header
      ref={wrapRef}
      className={[
        " fixed top-0 z-50 w-full",
        "backdrop-blur-md", // glass blur
        "bg-neutral-900/40 border-b border-white/10", // translucent bg + hairline
        "transition-all duration-300",
        scrolled
          ? "bg-neutral-900/60 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.6)]"
          : "shadow-none",
      ].join(" ")}
      role="banner"
    >
      {/* bar */}
      <nav
        className={`mx-auto max-w-7xl px-4 md:px-8 ${
          scrolled ? "py-2" : "py-3 md:py-4"
        } text-white`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-wide"
          >
            <img
              src="/assets/logo-white.png"
              alt="Depth Training"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {MENU.map((m, idx) => (
              <li key={m.label} className="relative">
                {m.type === "mega" ? (
                  <>
                    <button
                      onMouseEnter={() => {
                        setOpenRoot(idx);
                        setOpenGroup(0);
                      }}
                      onFocus={() => {
                        setOpenRoot(idx);
                        setOpenGroup(0);
                      }}
                      onKeyDown={onRootKey(idx)}
                      aria-haspopup="menu"
                      aria-expanded={openRoot === idx}
                      className="flex items-center gap-1 text-lg outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-primary)] hover:text-[var(--bg-primary)]"
                    >
                      {m.label}
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                      </svg>
                    </button>

                    {/* MEGA DROPDOWN with its own glass */}
                    {openRoot === idx && (
                      <div
                        onMouseLeave={() => setOpenRoot(null)}
                        className="absolute left-0 top-full mt-3 w-[760px] rounded-lg border border-white/10 bg-neutral-900/70 shadow-2xl backdrop-blur-md p-4"
                        role="menu"
                      >
                        <div className="grid grid-cols-4 gap-3">
                          {/* Column 1: category list */}
                          <div className="col-span-1 border-r border-white/10 pr-2">
                            {m.groups.map((g, gIdx) => (
                              <button
                                key={g.label}
                                onMouseEnter={() => setOpenGroup(gIdx)}
                                onFocus={() => setOpenGroup(gIdx)}
                                className={`w-full text-left px-3 py-2 rounded-md text-base transition
                                  ${
                                    openGroup === gIdx
                                      ? "bg-neutral-800/80 text-white"
                                      : "text-neutral-300 hover:bg-neutral-800/50"
                                  }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{g.label}</span>
                                  <span className="opacity-70">›</span>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Columns 2-4: items of active group */}
                          <div className="col-span-3 pl-2">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                              {m.groups[openGroup]?.items.map((it) => (
                                <Link
                                  key={it.label}
                                  href={it.href}
                                  className="px-3 py-2 rounded-md text-neutral-100 hover:bg-neutral-800/60 border border-transparent hover:border-[var(--bg-primary)]"
                                  onClick={() => setOpenRoot(null)}
                                >
                                  {it.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={m.href}
                    className="text-lg hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    {m.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/book"
            className="hidden md:inline-flex items-center rounded-full bg-[var(--bg-primary)] hover:bg-red-500 px-4 py-2 text-sm font-medium shadow-lg shadow-red-900/20"
          >
            Book Now
          </Link>

          {/* Mobile burger placeholder (wire in your drawer if needed) */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10"
            aria-label="Open menu"
            onClick={() => setOpenRoot(openRoot === "mobile" ? null : "mobile")}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile accordion (simple & accessible) */}
      <div
        className={`md:hidden text-white border-t border-white/10 overflow-hidden transition-[max-height] duration-300
                       ${openRoot === "mobile" ? "max-h-[80vh]" : "max-h-0"}`}
      >
        <div className="bg-neutral-900/70 backdrop-blur-md">
          <ul className="px-4 py-2 space-y-1">
            {MENU.map((m, idx) => (
              <li key={m.label} className="border-b border-white/10">
                {m.type !== "mega" ? (
                  <Link
                    href={m.href}
                    className="block py-3"
                    onClick={() => setOpenRoot(null)}
                  >
                    {m.label}
                  </Link>
                ) : (
                  <details className="group">
                    <summary className="cursor-pointer py-3 list-none flex items-center justify-between">
                      <span>{m.label}</span>
                      <span className="opacity-70 group-open:rotate-180 transition">
                        ⌄
                      </span>
                    </summary>
                    <div className="pb-3 pl-2 space-y-2">
                      {m.groups.map((g) => (
                        <details key={g.label} className="group">
                          <summary className="cursor-pointer py-2 list-none flex items-center justify-between">
                            <span className="text-neutral-200">{g.label}</span>
                            <span className="opacity-70 group-open:rotate-90 transition">
                              ›
                            </span>
                          </summary>
                          <div className="pl-3 space-y-2">
                            {g.items.map((it) => (
                              <Link
                                key={it.label}
                                href={it.href}
                                className="block py-1 text-neutral-300"
                                onClick={() => setOpenRoot(null)}
                              >
                                {it.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </details>
                )}
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/book"
                className="inline-flex rounded-full bg-[var(--bg-primary)]  hover:bg-red-500 px-4 py-2 text-sm font-medium"
                onClick={() => setOpenRoot(null)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
