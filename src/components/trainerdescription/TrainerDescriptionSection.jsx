// src/components/trainerdescription/TrainerDescriptionSection.jsx

export default function TrainerDescriptionSection({
  name,
  role,
  paragraphs = [],
}) {
  return (
    <section className="bg-[#3c3c3c] py-10">
      {/* ⬆️ smaller py-10 (was probably much larger) so the hero is shorter */}

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-10 pb-8 lg:flex-row lg:items-start">
        {/* Left: image card */}
        <div className="mx-auto w-full max-w-md rounded-[32px] bg-[#2b2b2b] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden">
          <img
            src="/assets/image.png"
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right: text content */}
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
