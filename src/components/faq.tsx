"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/site-content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently asked questions from businesses planning a new website.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const expanded = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.035]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white"
                    onClick={() => setOpenIndex(expanded ? null : index)}
                  >
                    <span className="text-sm font-semibold sm:text-base">{item.question}</span>
                    <ChevronDown className={`${expanded ? "rotate-180" : "rotate-0"} h-5 w-5 shrink-0 transition-transform duration-300`} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-300`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm leading-7 text-slate-400">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
