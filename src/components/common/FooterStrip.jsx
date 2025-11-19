"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6.94 7.5A1.94 1.94 0 1 1 6.94 3.62a1.94 1.94 0 0 1 0 3.88ZM4.75 9.75h4.38V20H4.75V9.75Zm7 0h4.19v1.41h.06c.58-1.02 1.99-1.98 4.09-1.98 4.37 0 5.18 2.88 5.18 6.62V20h-4.38v-5.01c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.92 1.3-1.92 2.63V20h-4.38V9.75Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.9 3.8 12 3.8 12 3.8s-6.9 0-8.7.6A4 4 0 0 0 .5 7.2 41.4 41.4 0 0 0 0 12a41.4 41.4 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8c1.8.6 8.7.6 8.7.6s6.9 0 8.7-.6a4 4 0 0 0 2.8-2.8A41.4 41.4 0 0 0 24 12a41.4 41.4 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:hello@depthtraining.ca",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="m22 8-10 6L2 8" />
      </svg>
    ),
  },
];

export default function FooterStrip() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.22),_transparent_60%),#050509]">
        <div className="w-full px-6 py-10 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-white/8 bg-[var(--depth-card)]/85 px-6 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-md md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
            <div className="max-w-xl">
              <p className="text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
                Ready to get started?
              </p>
              <h3 className="mt-2 text-[22px] font-semibold leading-snug md:text-[26px]">
                Looking for ongoing support?
              </h3>
              <p className="mt-2 text-sm text-[var(--depth-muted)]">
                Book physiotherapy, rehab, or performance sessions with our
                multidisciplinary team.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <a
                href="tel:+11234567890"
                className="inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[var(--depth-accent)] px-7 text-[14px] font-semibold text-white transition hover:-translate-y-[1px] hover:shadow-[0_0_28px_rgba(244,63,94,0.55)] md:w-auto"
              >
                Call us
              </a>

              <a
                href="/contact"
                className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-white/15 bg-transparent px-7 text-[14px] font-medium text-gray-100 transition hover:-translate-y-[1px] hover:bg-white/5 md:w-auto"
              >
                Book online
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 bg-[#020109]">
          <div className="w-full px-6 py-5 lg:px-16">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
              <p className="text-[13px] text-gray-400">
                © 2025 Depth Training &amp; Physiotherapy. All rights reserved.
              </p>

              <div className="flex items-center justify-center gap-4 md:justify-end">
                {SOCIALS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--depth-accent)] hover:bg-[var(--depth-accent)] md:h-10 md:w-10"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <button
                type="button"
                onClick={handleBackToTop}
                className="hidden items-center gap-1 text-[12px] text-gray-400 transition hover:text-gray-100 md:inline-flex"
              >
                Back to top <span className="inline-block rotate-90">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
