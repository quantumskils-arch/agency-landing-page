import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/contact";

const heroDashboardImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
            <Sparkles className="h-4 w-4" />
            Kasangati-based digital agency for ambitious growth
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Build High-Converting Websites &amp; WhatsApp Bots for Growing Businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Professional, industry-grade digital solutions tailored for SMEs, schools, hospitals, and churches.
            Based proudly in Kasangati, Uganda.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10"
            >
              Explore Services
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["High-end UX", "Research-led layouts that feel premium and convert."],
              ["Fast Delivery", "Lean production workflow with clean handoffs."],
              ["Automation", "Smart WhatsApp experiences that reduce response time."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_50px_rgba(2,6,23,0.2)]"
              >
                <dt className="text-sm font-semibold text-white">{title}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-400">{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[34rem]">
            <div className="absolute -left-5 top-12 h-24 w-24 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-whatsapp/20 blur-3xl" />

            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-3">
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2">Performance dashboard preview</span>
                </div>
                <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-slate-900">
                  <Image
                    src={heroDashboardImage}
                    alt="Modern analytics dashboard with charts and interface panels"
                    width={1400}
                    height={1200}
                    className="h-[320px] w-full object-cover opacity-90"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-lg shadow-brand/10">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                    <span>Mobile experience</span>
                    <Zap className="h-4 w-4 text-brand" />
                  </div>
                  <div className="mx-auto w-[11rem] rounded-[2rem] border border-white/10 bg-slate-950 p-2 shadow-2xl shadow-black/40">
                    <div className="rounded-[1.35rem] bg-slate-900 p-3">
                      <div className="mb-3 h-2 w-16 rounded-full bg-white/15" />
                      <div className="space-y-2 rounded-2xl bg-brand/10 p-3">
                        <div className="ml-auto h-3 w-20 rounded-full bg-brand/30" />
                        <div className="h-3 w-28 rounded-full bg-white/10" />
                      </div>
                      <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="h-3 w-24 rounded-full bg-white/15" />
                        <div className="h-3 w-20 rounded-full bg-white/10" />
                        <div className="h-9 rounded-xl bg-whatsapp/15" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-whatsapp/20 bg-slate-950/80 p-4 shadow-lg shadow-emerald-500/10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-whatsapp/15 text-whatsapp">
                      <span className="text-sm font-bold">LD</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">WhatsApp bot preview</p>
                      <p className="text-xs text-slate-400">Available 24/7 for inquiries</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-slate-200">
                      Hi! I need a website for my clinic and a way to respond faster on WhatsApp.
                    </div>
                    <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-whatsapp px-4 py-3 text-white shadow-lg shadow-emerald-500/20">
                      Absolutely. We can design the site, add service pages, and automate common questions.
                    </div>
                    <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-slate-200">
                      Can we start this week?
                    </div>
                    <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md border border-brand/20 bg-brand/10 px-4 py-3 text-brand">
                      Yes — send your details and we will map the fastest path to launch.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 left-6 hidden max-w-xs rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 md:block">
              <p className="text-sm font-semibold text-white">Conversion-focused by design</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                We combine strong visuals, clear messaging, and frictionless WhatsApp contact flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
