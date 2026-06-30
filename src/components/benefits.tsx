import { benefits } from "@/lib/site-content";

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Why Ugandan Businesses Need a Permanent Website in 2026</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Social media is useful, but a permanent website plus a custom WhatsApp bot creates lasting trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Many local companies rely solely on social media pages or plain WhatsApp messages, which can disappear
            into noisy feeds and inconsistent communication. A professional permanent web presence, combined with a
            custom automated WhatsApp bot, builds real credibility, works 24/7, and helps your business get found on
            Google&rsquo;s first page for high-intent searches.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Whether you serve Kampala, Kasangati, or customers across Uganda, the combination of a strong website
            and fast WhatsApp response makes your brand easier to trust, easier to contact, and easier to choose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{benefit.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
