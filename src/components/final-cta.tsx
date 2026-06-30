import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function FinalCta() {
  return (
    <section className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand/20 bg-gradient-to-r from-brand/20 via-white/[0.04] to-whatsapp/15 p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Ready to Start Your Project?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&rsquo;s build a website that looks premium and drives real business growth.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Send us a WhatsApp message and we will help you choose the right package, the right timeline, and
                the right next step.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
