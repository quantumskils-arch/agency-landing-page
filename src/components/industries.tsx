"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { industries } from "@/lib/site-content";

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndustry = industries[activeIndex];

  const tabList = useMemo(() => industries, []);

  const focusTab = (index: number) => {
    const nextIndex = (index + industries.length) % industries.length;
    setActiveIndex(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <section id="industries" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Industries We Serve</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Click a category to explore how we tailor the experience for that sector.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Our industry strategy stays practical, responsive, and grounded in the needs of real customers across
            Uganda.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Industries we serve"
          className="mt-10 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabList.map((industry, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={industry.title}
                ref={(node) => {
                  tabsRef.current[index] = node;
                }}
                role="tab"
                id={`industry-tab-${index}`}
                aria-selected={active}
                aria-controls={`industry-panel-${index}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    focusTab(index + 1);
                  }
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    focusTab(index - 1);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    focusTab(0);
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    focusTab(industries.length - 1);
                  }
                }}
                className={`${active ? "border-brand bg-brand/15 text-white shadow-[0_0_0_1px_rgba(37,99,235,0.35)]" : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-brand/30 hover:bg-white/[0.06] hover:text-white"} inline-flex min-w-max items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300`}
              >
                {industry.title}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Sector focus</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{activeIndustry.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{activeIndustry.blurb}</p>

            <ul className="mt-6 space-y-3">
              {activeIndustry.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
            <Image
              src={activeIndustry.image}
              alt={activeIndustry.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
            <div className="absolute left-4 bottom-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Tailored presentation</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Each sector gets messaging, layout, and visual emphasis tuned to how customers in that category
                decide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
