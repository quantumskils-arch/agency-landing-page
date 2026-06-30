import { stats } from "@/lib/site-content";

export function StatsBand() {
  return (
    <section className="border-t border-white/5 py-6 sm:py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article
              key={stat.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                  <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                    {stat.label}
                  </h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{stat.subtext}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
