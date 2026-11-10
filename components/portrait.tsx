"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portrait() {
  const frame = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function moveGlow(event: PointerEvent<HTMLDivElement>) {
    const box = frame.current;
    const light = glow.current;
    if (!box || !light) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    light.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
    light.style.opacity = "1";
  }

  function hideGlow() {
    const light = glow.current;
    if (!light) return;
    light.style.opacity = "0";
  }

  return (
    <motion.div
      ref={frame}
      className="absolute inset-0"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.35, ease, delay: 0.15 }}
      onPointerMove={moveGlow}
      onPointerLeave={hideGlow}
    >
      <Image
        src={site.portrait}
        alt={site.portraitAlt}
        fill
        priority
        sizes="(min-width: 1024px) 760px, 100vw"
        className="portrait-grade object-cover object-[64%_14%] portrait-drift"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_82%,rgba(226,91,36,0.42),transparent_46%)] mix-blend-soft-light"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-cream/50 lg:bg-[linear-gradient(to_bottom,rgba(7,8,11,0.45)_0%,transparent_16%,transparent_58%,#07080b_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-[linear-gradient(to_right,#07080b_0%,rgba(7,8,11,0.72)_10%,rgba(7,8,11,0.15)_28%,transparent_42%)] lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-cream to-transparent lg:w-16"
      />
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-[300px] rounded-full opacity-0 mix-blend-soft-light transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(255,176,122,0.95) 0%, rgba(226,91,36,0.45) 38%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
