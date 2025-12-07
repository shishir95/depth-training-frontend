// src/components/home/HeroTitleAnimation.jsx
"use client";

import { motion } from "framer-motion";

export default function HeroTitleAnimation({
  title,
  subTitle,
  button,
  buttonLabel,
}) {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/DSC.jpg')", // or your hero image
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay + left gradient for better readability */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
      </div>

      <div className="relative top-1/2 -translate-y-1/2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {/* Text block with subtle panel on top of image */}
        <div className="inline-block max-w-3xl bg-black/35 sm:bg-black/30 rounded-xl px-4 py-5 sm:px-6 sm:py-6 backdrop-blur-[1px]">
          <motion.h1
            className="text-white font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl font-light text-neutral-100 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {subTitle}
          </motion.p>

          {button && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <button className="bg-[var(--bg-primary)] px-6 py-3 rounded-full text-white text-sm sm:text-base font-semibold hover:bg-red-500 transition duration-300">
                {buttonLabel}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
