'use client';

export default function PlanCard({
  price = '0',
  period = '/month',
  title = 'Free Trial',
  features = [],
  highlighted = false,
  onChoose, // ✅ added so the modal can open on button click
}) {
  return (
    <div
      className={`w-full max-w-[300px] rounded-xl border p-5 md:p-6 transition-all duration-300
        ${
          highlighted
            ? 'border-red-500/60 shadow-[0_0_0_2px_rgba(239,68,68,.25)] bg-neutral-900/90'
            : 'border-neutral-800 bg-neutral-900 hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(239,68,68,.15)]'
        }`}
    >
      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold">${price}</span>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      {/* Title */}
      <h4 className="mt-2 font-semibold text-lg">{title}</h4>

      {/* Feature list */}
      <ul className="mt-3 space-y-2 text-sm text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-green-400">✔</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => onChoose?.(title)} // ✅ opens modal in PlansSection
        className={`mt-6 w-full rounded-md px-4 py-2.5 font-semibold transition 
          ${
            highlighted
              ? 'bg-[#E43F3F] text-white hover:bg-[#c93535]'
              : 'border border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700'
          }`}
      >
        Choose plan
      </button>
    </div>
  );
}
