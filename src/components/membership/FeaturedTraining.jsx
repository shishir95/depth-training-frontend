"use client";

export default function FeaturedTraining() {
  return (
    <section className="border-t border-neutral-800 bg-black">
      <div className="grid w-full grid-cols-1 gap-6 px-6 py-12 md:grid-cols-[1.1fr_1.4fr]">
        {/* Left copy */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">
            Featured Training
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Based on our hiring process, we only bring on highly qualified
            trainers who fit our DEPTH team and focus on continuing educational
            development ensuring professional growth amongst our personal
            trainers.
          </p>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Book a session and experience our programming first-hand.
          </p>
          <button className="mt-4 rounded-md bg-[var(--bg-primary)] px-5 py-2 font-medium text-white hover:bg-red-600 transition">
            Book Training
          </button>
        </div>

        {/* Right video */}
        <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-black pt-[56.25%]">
          <iframe
            className="absolute inset-0 h-full w-full"
            title="Featured training"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
