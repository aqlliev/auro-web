"use client";

import { useEffect, useRef } from "react";

export function PointerLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let x = window.innerWidth * 0.3;
    let y = window.innerHeight * 0.4;
    let cx = x;
    let cy = y;
    let frame = 0;

    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      node.style.transform = `translate3d(${cx - 220}px, ${cy - 220}px, 0)`;
      frame = window.requestAnimationFrame(loop);
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    node.style.opacity = "1";
    window.addEventListener("pointermove", move, { passive: true });
    frame = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] size-[440px] rounded-full opacity-0 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(226,91,36,0.22) 0%, rgba(226,91,36,0.06) 42%, transparent 70%)",
      }}
    />
  );
}
