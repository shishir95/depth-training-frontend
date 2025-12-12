export default function AboutUs() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 to-[#06030f] px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--depth-muted)]">
            Inside Depth
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            More than a gym—it&apos;s an integrated performance lab.
          </h2>
          <p className="text-zinc-300">
            Founded in Waterloo, Depth Training began as a small team with one
            mission: blend athletic strength work with evidence-based rehab.
            Today we support pros, youth athletes, and busy parents with the
            same premium experience.
          </p>
          <ul className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
            {[
              "Sports-science backed programming",
              "Athlete-first coaching",
              "Integrated rehab + performance",
              "Recovery, sauna, and plunge access",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--depth-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/coach-squat.jpg"
            alt="Coach supporting athlete"
            className="h-full w-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
