"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Trainers", href: "/trainers" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy-policy" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-colors duration-300 ${
        solid ? "bg-black/70 backdrop-blur-md" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="relative w-full">
        <div className="relative h-[72px] flex items-center justify-between px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/depth-white-60 1.png"
              alt="Depth Training"
              width={165}
              height={45}
              priority
              className="h-auto w-[165px]"
            />
          </Link>

          <ul className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-12">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[16px] font-medium text-white/90 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <Link
              href="/booking"
              className="rounded-md bg-[#E43F3F] px-5 py-2.5 text-[14px] font-semibold text-white hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              className="w-7 h-7"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-white/10 pb-4">
            <ul className="flex flex-col gap-3 px-6 pt-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-md px-3 py-2 text-[15px] text-white/90 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-md bg-[#E43F3F] px-4 py-2 text-[13px] font-semibold text-white hover:opacity-90 transition"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
