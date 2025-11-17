import "../../app/globals.css";

const HeroMembership = ({
  title = "Depth Training Membership",
  subTitle = "Train smarter, recover faster, and get guided by our AI-powered tools.",
  button = false,
  buttonLabel = "View Plans",
  bgImage = "/image.png",
}) => {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.35),_transparent_55%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-3xl py-16 gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em]">
          Depth • Membership
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        <p className="text-base md:text-lg text-gray-200/90 leading-relaxed">
          {subTitle}
        </p>
        {button ? (
          <button className="mt-2 bg-red-600 hover:bg-red-500 transition-colors duration-200 px-8 py-3 rounded-full text-sm font-medium shadow-[0_10px_50px_rgba(229,9,20,0.35)]">
            {buttonLabel}
          </button>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
};

export default HeroMembership;
