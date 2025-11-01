"use client";

export default function FooterStrip() {
  return (
    <footer className="text-white">
      {/* Full-bleed wrapper */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        {/* --- Top CTA Band (≈110px Figma height) --- */}
        <div className="bg-[#3A3A3A]">
          <div className="w-full px-10 lg:px-16 py-8 md:py-0 min-h-[110px] flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h3 className="text-[24px] font-medium leading-snug">
              Looking for ongoing support?
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="tel:+11234567890"
                className="inline-flex h-[44px] items-center justify-center rounded-md bg-[var(--bg-primary)] px-6 text-[14px] font-semibold hover:opacity-90 transition"
              >
                Call us
              </a>
              <a
                href="/membership#plans"
                className="inline-flex h-[44px] items-center justify-center rounded-md bg-[var(--bg-primary)] px-6 text-[14px] font-semibold hover:opacity-90 transition"
              >
                See our plan
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright Band (≈80px Figma height) --- */}
        <div className="bg-[#151515]">
          <div className="w-full px-10 lg:px-16 py-6 md:py-0 min-h-[80px] flex items-center justify-between">
            <p className="text-[14px] text-gray-300">
              Copyright@2025 | Depth Training &amp; Physiotherapy | All rights
              reserved
            </p>

            <div className="flex items-center gap-5">
              {/* Social icons (40x40px like Figma) */}
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-md bg-[var(--bg-primary)] hover:opacity-90 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                >
                  <path d="M6.94 7.5A1.94 1.94 0 1 1 6.94 3.62a1.94 1.94 0 0 1 0 3.88ZM4.75 9.75h4.38V20H4.75V9.75Zm7 0h4.19v1.41h.06c.58-1.02 1.99-1.98 4.09-1.98 4.37 0 5.18 2.88 5.18 6.62V20h-4.38v-5.01c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.92 1.3-1.92 2.63V20h-4.38V9.75Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-md bg-[var(--bg-primary)] hover:opacity-90 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.9 3.8 12 3.8 12 3.8s-6.9 0-8.7.6A4 4 0 0 0 .5 7.2 41.4 41.4 0 0 0 0 12a41.4 41.4 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8c1.8.6 8.7.6 8.7.6s6.9 0 8.7-.6a4 4 0 0 0 2.8-2.8A41.4 41.4 0 0 0 24 12a41.4 41.4 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-md bg-[var(--bg-primary)] hover:opacity-90 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>

              <a
                href="mailto:hello@depthtraining.ca"
                aria-label="Email"
                className="grid place-items-center w-10 h-10 rounded-md bg-[var(--bg-primary)] hover:opacity-90 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                >
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                  <path d="m22 8-10 6L2 8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
