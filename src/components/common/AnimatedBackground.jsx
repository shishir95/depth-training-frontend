"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020109]">
      {/* Base static radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.16),transparent_60%),radial-gradient(circle_at_20%_80%,_rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.16),transparent_55%),#020109]" />

      {/* Blob 1 */}
      <motion.div
        className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/14 blur-3xl"
        animate={{
          x: ["0%", "18%", "-10%", "0%"],
          y: ["0%", "10%", "5%", "0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-[-6rem] left-1/4 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl"
        animate={{
          x: ["0%", "-8%", "12%", "0%"],
          y: ["0%", "-6%", "4%", "0%"],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-rose-500/16 blur-3xl"
        animate={{
          x: ["0%", "-12%", "6%", "0%"],
          y: ["0%", "8%", "-4%", "0%"],
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />
    </div>
  );
}
