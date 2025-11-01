"use client";

// components/about/ContactSection.jsx
export default function ContactSection() {
  return (
    <section className="border-t border-neutral-900 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        {/* Map (left) — use a placeholder image for now */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl ring-1 ring-neutral-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/map-placeholder.png" // put a file with this name in public/assets/
            alt="Map to Depth Training, Waterloo ON"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Contact form (right) */}
        <form
          className="rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-semibold">Contact Us</h3>

          <div className="mt-5 space-y-4">
            <input
              className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-sm outline-none ring-rose-500/30 focus:ring-2"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-sm outline-none ring-rose-500/30 focus:ring-2"
              placeholder="Email address"
              required
            />
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-sm outline-none ring-rose-500/30 focus:ring-2"
              placeholder="Message"
              required
            />

            <button
              type="submit"
              className="w-full rounded-md bg-[var(--bg-primary)] h-[44px] px-6 text-[14px] font-semibold text-white transition hover:opacity-90"
            >
              Send now
            </button>
          </div>

          {/* Contact minis */}
          <div className="mt-6 grid gap-4 text-sm text-neutral-300 sm:grid-cols-3">
            <div>📞 <span className="text-white">Call</span><br />+1 (234) 654-1111</div>
            <div>✉️ <span className="text-white">Email</span><br />info@depthtraining.ca</div>
            <div>📍 <span className="text-white">Location</span><br />Waterloo, Ontario</div>
          </div>
        </form>
      </div>
    </section>
  );
}
