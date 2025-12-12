"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackdrop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.3]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.3),_transparent_60%),#020109]"
    />
  );
}
