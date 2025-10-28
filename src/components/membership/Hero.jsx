"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/MC-banner-OS25 1.png')", // <-- image in public folder
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Start Today <br /> Feel Better Tomorrow
        </h1>
        <p className="mt-5 text-lg md:text-xl font-light">
          First class is free — take the first step now.
        </p>
      </div>
    </section>
  );
}
