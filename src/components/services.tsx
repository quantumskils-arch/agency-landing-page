import { Bot, Church, GraduationCap, HeartPulse, Store } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Small & Medium Businesses (SMEs)",
    description: "Conversion-driven sites built to secure local leads and turn visitors into paying customers.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Institutions",
    description: "Clean, structured portals for students and parents with clear information and easy navigation.",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Clinics",
    description: "Secure, clean, high-trust platforms that help patients find services and book with confidence.",
  },
  {
    icon: Church,
    title: "Churches & Communities",
    description: "Engaging, media-friendly layouts designed to share sermons, events, and community updates beautifully.",
  },
  {
    icon: Bot,
    title: "WhatsApp Automation",
    description: "Intelligent chat bots to handle customer inquiries automatically and keep your team responsive.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Purpose-built digital services for the institutions that keep communities moving.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Every service is designed for clarity, trust, and measurable action—whether the goal is getting a call,
            a booking, a form submission, or a WhatsApp conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand/15">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
