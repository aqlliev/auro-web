"use client";

import { useState } from "react";
import { projects, workIntro } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { cn } from "cn";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="work" className="border-t border-line px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05">Work</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:col-span-5">
            Studies in progress.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-sand lg:col-span-6 lg:col-start-7 lg:pt-3">
            {workIntro}
          </p>
        </div>

        <ol className="mt-14 border-t border-line">
          {projects.map((project) => {
            const open = openId === project.id;
            return (
              <li key={project.id} className="border-b border-line py-8 sm:py-10">
                <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                  <p className="font-serif text-lg text-sand sm:col-span-2">{project.number}</p>
                  <div className="sm:col-span-10">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
                        {project.title}
                      </h3>
                      {project.draft ? (
                        <span className="rounded-full border border-line px-2.5 py-0.5 text-[0.68rem] tracking-[0.16em] text-sand uppercase">
                          In progress
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/90">
                      {project.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.72rem] tracking-[0.16em] text-sand uppercase">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pt-5 text-base leading-relaxed text-sand">
                          {project.notes}
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 rounded-full px-3"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : project.id)}
                    >
                      {open ? "Close note" : "Open note"}
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
