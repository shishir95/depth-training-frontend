"use client";

export default function ContactSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#05030f] via-zinc-950 to-black px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
          Visit &amp; Connect
        </p>
        <h3 className="text-3xl font-semibold sm:text-4xl">We&apos;d love to meet you</h3>
        <p className="text-sm text-zinc-300">
          Stop by the studio, book a consult, or drop us a note. Expect a reply within
          one business day.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/map-placeholder.png"
            alt="Map to Depth Training, Waterloo ON"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30" />
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-sm text-white backdrop-blur">
            546 Parkside Dr, Waterloo ON
          </div>
        </div>

        <form
          className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <input
              className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--depth-muted)] focus:border-[var(--depth-accent)] focus:outline-none"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--depth-muted)] focus:border-[var(--depth-accent)] focus:outline-none"
              placeholder="Email address"
              required
            />
            <textarea
              className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--depth-muted)] focus:border-[var(--depth-accent)] focus:outline-none"
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--depth-accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(241,96,85,0.4)] transition hover:bg-[#ff8d7d]"
            >
              Send message
            </button>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-zinc-300 sm:grid-cols-3">
            <div>
              <span className="text-white">Call</span>
              <br />
              +1 (234) 654-1111
            </div>
            <div>
              <span className="text-white">Email</span>
              <br />
              info@depthtraining.ca
            </div>
            <div>
              <span className="text-white">Location</span>
              <br />
              Waterloo, Ontario
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
