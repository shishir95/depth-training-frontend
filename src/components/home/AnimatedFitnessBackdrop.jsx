"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedFitnessBackdrop() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax mapping so each object drifts differently as you scroll
  const plateNearY = useTransform(scrollY, [0, 800], [0, 140]);
  const plateFarY = useTransform(scrollY, [0, 800], [0, -120]);
  const barbellY = useTransform(scrollY, [0, 800], [0, 180]);
  const kettlebellY = useTransform(scrollY, [0, 800], [0, -160]);
  const tinyPlateY = useTransform(scrollY, [0, 800], [0, 90]);
  const extraPlate1Y = useTransform(scrollY, [0, 800], [0, -80]);
  const extraPlate2Y = useTransform(scrollY, [0, 800], [0, 130]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020109]"
    >
      {/* Stronger overall gradient wash for dark gym vibe */}
      <motion.div
        className="absolute -inset-[25%] opacity-75"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(255,80,80,0.32), transparent 65%), radial-gradient(circle at 80% 80%, rgba(255,140,120,0.28), transparent 65%), radial-gradient(circle at 50% 30%, rgba(15,118,178,0.18), transparent 60%)",
        }}
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== DUMBBELL ===== */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, 120]) }}
        animate={{ rotateZ: [0, 8, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[30%] h-6 w-40 flex items-center justify-between"
      >
        <div className="h-10 w-4 rounded bg-white/20 shadow-[0_0_20px_rgba(0,0,0,0.7)]" />
        <div className="h-4 w-24 rounded bg-white/10 shadow-[0_0_20px_rgba(0,0,0,0.7)]" />
        <div className="h-10 w-4 rounded bg-white/20 shadow-[0_0_20px_rgba(0,0,0,0.7)]" />
      </motion.div>

      {/* ===== SALAD BOWL ===== */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, -150]) }}
        animate={{ rotateZ: [0, -6, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[50%] h-20 w-28"
      >
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 h-14 w-full rounded-b-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.32),rgba(0,0,0,0.9))] border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.7)]" />
          <div className="absolute top-0 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-white/10 blur-sm" />
        </div>
      </motion.div>

      {/* ===== T-SHIRT (GYM) ===== */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, 180]) }}
        animate={{ rotateZ: [0, 5, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[55%] top-[70%] h-24 w-24"
      >
        <div className="relative h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),rgba(0,0,0,1))] border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.85)] rounded-lg">
          <div className="absolute top-0 left-1/2 h-5 w-10 -translate-x-1/2 rounded-b-lg bg-white/10" />
          <div className="absolute left-0 top-6 h-4 w-6 rounded-lg bg-white/10" />
          <div className="absolute right-0 top-6 h-4 w-6 rounded-lg bg-white/10" />
        </div>
      </motion.div>

      {/* ===== EXTRA FLOATING DUMBBELL ===== */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, -100]) }}
        animate={{ rotateZ: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] bottom-[12%] h-6 w-32 flex items-center justify-between opacity-80"
      >
        <div className="h-8 w-3 rounded bg-white/15" />
        <div className="h-3 w-20 rounded bg-white/8" />
        <div className="h-8 w-3 rounded bg-white/15" />
      </motion.div>
    </div>
  );
}