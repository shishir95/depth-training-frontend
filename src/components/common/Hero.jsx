// components/Hero.js
import "../../app/globals.css";

const Hero = (props) => {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        // 1) avoid spaces in file name (rename the file!)
        // public/MC-banner-OS25-1.png
        backgroundImage: 'url("/MC-banner-OS25-1.png")',
        backgroundSize: "cover", // 2) make sure it covers
        backgroundPosition: "center", // 3) center the image
      }}
    >
      {/* Black shade with opacity */}
      {/* if you're not sure your Tailwind version supports /90, use bg-opacity */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-60" />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
          <p className="mt-5 text-lg py-5 md:text-xl font-light">
            {props.subTitle}
          </p>
        </div>

        {props.button ? (
          <button className="bg-[var(--bg-primary)] px-6 py-2 rounded-full text-white hover:bg-red-500 transition duration-300">
            {props.buttonLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
