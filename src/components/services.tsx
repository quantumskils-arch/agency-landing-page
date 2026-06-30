import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { capabilityPills, servicePillars } from "@/lib/site-content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our five core pillars for building high-converting digital experiences.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            These are the strategic pillars we use to help brands earn trust, improve discoverability, and turn
            attention into real customer action.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {capabilityPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-brand/35 hover:bg-brand/10 hover:text-white"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicePillars.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/80 text-white ring-1 ring-white/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
