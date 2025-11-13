"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroTitleAnimation() {
  const leadControls = useAnimation(); // controls the movement of the whole text
  const restControls = useAnimation(); // controls the reveal of the trailing part

  useEffect(() => {
    const runAnimation = async () => {
      // Step 1: Animate "Depth" from center to left
      await leadControls.start({
        left: 0,
        x: 0,
        transition: { duration: 1.9, ease: [0.22, 3.5, 0.36, 1] },
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
            <span>Depth</span>

            {/* Rest of the title revealed after slide */}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: 8 }}
              animate={restControls}
            >
              {" "}
              Training | Physio, Rehab & Fitness
            </motion.span>
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
