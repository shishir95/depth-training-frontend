export default function TrainerDescriptionSection({
  name,
  role,
  paragraphs = [],
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-1000 via-[#000000] to-black py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,129,111,0.28),_transparent_60%)] opacity-80 blur-3xl"
      />
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28 gap-10">
        <div className="relative w-full max-w-[500px] h-[520px] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
          <Image
            src={photo}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-white">{name}</h1>
          <p className="mt-2 text-lg font-medium text-[var(--depth-accent,#f97373)]">
            {role}
          </p>

          {paragraphs.length > 0 && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-100">
              {paragraphs[0]}
            </p>
          )}

          <button className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--depth-accent,#f97373)] px-6 py-2 text-sm font-semibold text-black shadow-[0_12px_35px_rgba(244,63,94,0.35)] transition hover:-translate-y-[1px] hover:bg-[#ff8475]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
