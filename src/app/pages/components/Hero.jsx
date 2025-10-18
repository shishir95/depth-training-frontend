// components/Hero.js
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh]"
      style={{ backgroundImage: "url(/hero-background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Depth Training | Physio, Rehab & Fitness
        </h1>
        <button className="bg-red-600 px-6 py-2 rounded-full text-white hover:bg-red-500 transition duration-300">
          Find My Specialities
        </button>
      </div>
    </section>
  );
};

export default Hero;
