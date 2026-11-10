"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { education, skillGroups, skills, type SkillGroup } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";

export function Study() {
  const [group, setGroup] = useState<SkillGroup | "all">("all");
  const reduce = useReducedMotion();
  const line = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: line,
    offset: ["start 65%", "end 70%"],
  });
  const beadTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const shown = skills.filter((skill) => group === "all" || skill.group === group);

  return (
    <section id="study" className="border-t border-line px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04">Study</SectionLabel>
        <h2 className="max-w-[14ch] font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
          Education, then the skills it builds.
        </h2>

        <div ref={line} className="relative mt-14 ml-1 border-l border-line pl-8 sm:ml-3 sm:pl-12">
          {reduce ? (
            <span
              aria-hidden
              className="absolute top-0 -left-px size-2.5 -translate-x-1/2 rounded-full bg-orange shadow-[0_0_16px_rgba(226,91,36,0.85)]"
            />
          ) : (
            <motion.span
              aria-hidden
              className="absolute -left-px size-2.5 -translate-x-1/2 rounded-full bg-orange shadow-[0_0_18px_rgba(226,91,36,0.9)]"
              style={{ top: beadTop }}
            />
          )}

          <ol className="space-y-14">
            {education.map((item) => (
              <li key={item.id}>
                <p className="text-[0.72rem] font-medium tracking-[0.18em] text-sand uppercase">
                  {item.level}
                  <span className="px-2 text-line">/</span>
                  {item.place}
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
                  {item.program}
                </h3>
                <p className="mt-2 text-base text-ink/85">{item.school}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 border-t border-line pt-12" id="skills">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-serif text-3xl tracking-tight text-ink">Capabilities</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand sm:text-base">
                Data and AI from the MBA, exposure from economic security, and what the bank,
                the hotel and the kitchen taught on top.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter skills">
              {skillGroups.map((item) => {
                const selected = group === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={selected ? "default" : "outline"}
                    size="sm"
                    aria-pressed={selected}
                    className="rounded-full px-3"
                    onClick={() => setGroup(item.id)}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((skill) => (
                <motion.li
                  layout
                  key={skill.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-8"
                >
                  <h4 className="font-serif text-xl tracking-tight text-ink sm:col-span-5 sm:text-2xl">
                    {skill.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-sand sm:col-span-7 sm:text-base">
                    {skill.detail}
                  </p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
