import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Trusted by businesses across Uganda</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Genuine-sounding feedback from a few of the businesses we aim to serve.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            These are clearly generic placeholder testimonials used to show how real client praise can be
            presented on a polished landing page.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center gap-1 text-amber-400" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.city}, Uganda</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
