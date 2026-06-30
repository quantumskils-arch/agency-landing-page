import { processSteps } from "@/lib/site-content";

export function BuildProcess() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A structured six-step process that keeps the project moving and the outcome focused.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            We move from strategy to launch with clarity, then continue improving after deployment so your website
            keeps performing long after it goes live.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="absolute right-4 top-4 text-5xl font-semibold tracking-tight text-white/5 transition group-hover:text-brand/10">
                  {step.number}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand">Step {step.number}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
