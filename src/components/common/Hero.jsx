// components/Hero.jsx
import "../../app/globals.css";

const Hero = ({
  title,
  subTitle,
  button = false,
  buttonLabel = "",
  backgroundImage = "/trainers-hero.png",
  backgroundPosition = "center", // default position
}) => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mt-5 text-lg py-5 md:text-xl font-light">{subTitle}</p>
        </div>

        {button && (
          <button className="bg-[var(--bg-primary)] px-6 py-2 rounded-full text-white hover:bg-red-500 transition duration-300">
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
