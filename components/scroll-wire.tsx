"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollWire() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #9a3412 0%, #e25b24 46%, #ffc7a8 78%, #e25b24 100%)",
      }}
    />
  );
}
