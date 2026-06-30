import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/site-content";
import { WHATSAPP_URL } from "@/lib/contact";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple pricing that matches the scale of your ambition.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Choose the package that best fits your current stage, then we will shape the build to match your
            audience, budget, and growth plans.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`${plan.featured ? "border-brand/40 bg-brand/10 shadow-[0_20px_70px_rgba(37,99,235,0.15)]" : "border-white/10 bg-white/[0.035]"} rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{plan.name}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{plan.price}</h3>
                  <p className="mt-2 text-sm text-slate-400">{plan.audience}</p>
                </div>
                {plan.featured ? (
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">{plan.badge}</span>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-whatsapp" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${plan.featured ? "bg-whatsapp text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400" : "border border-white/15 bg-white/5 text-white hover:border-brand/40 hover:bg-brand/10"}`}
              >
                Start Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
