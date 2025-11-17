"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroTitleAnimation(props) {
  const leadControls = useAnimation(); // controls the movement of the whole text
  const restControls = useAnimation(); // controls the reveal of the trailing part

  useEffect(() => {
    const runAnimation = async () => {
      // Step 1: Animate "Depth" from center to left
      await leadControls.start({
        left: 0,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1.5, 0.36, 1] },
      });

      // Step 2: Fade in the rest of the text
      restControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    };

    runAnimation();
  }, [leadControls, restControls]);

  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/MC-banner-OS25 1.png')", // <-- image in public folder
      }}
    >
      <div className="relative w-full max-w-6xl mx-auto">
        <h1 className="text-white font-bold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
          {/* Animated container for the whole text */}
          <motion.span
            className="block whitespace-nowrap"
            style={{ position: "absolute justify-center" }}
            initial={{ left: "50%", x: "-50%" }}
            animate={leadControls}
          >
            {/* First word: "Depth" */}
            <span>Realize </span>

            {/* Rest of the title revealed after slide */}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: 8 }}
              animate={restControls}
            >
              {" "}
              Your Potential
            </motion.span>
          </motion.span>
        </h1>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <div className="relative z-10 px-4 max-w-3xl">
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
      </div>
    </section>
  );
}
