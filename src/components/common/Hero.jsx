import "../../app/globals.css";
const Hero = (props) => {
  return (
    <section
      className="relative w-full h-[120vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "('/MC-banner-OS25 1.purlng')", 
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
          <p className="mt-5 text-lg py-5 md:text-xl font-light">
            {props.subTitle}
          </p>
        </div>
        {props.button === true ? (
          <button className=" bg-[var(--bg-primary)] px-6 py-2 rounded-full text-white hover:bg-red-500 transition duration-300">
            {props.buttonLabel}
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Hero;
