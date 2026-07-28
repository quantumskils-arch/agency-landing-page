import { BRAND_NAME } from "@/lib/contact";
import { CheckCircle2, Globe2, Layers3 } from "lucide-react";
import Image from "next/image";

const aboutImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80";

const highlights = [
  {
    icon: Globe2,
    value: "Global research, local execution",
    text: "We study the world’s best-performing sites in each industry, then adapt the strongest patterns for real Ugandan businesses.",
  },
  {
    icon: Layers3,
    value: "Systems thinking",
    text: "Our builds are shaped by content structure, conversion flow, speed, and long-term maintainability.",
  },
  {
    icon: CheckCircle2,
    value: "Rooted in Kasangati",
    text: "We understand the rhythm of the community here and design with practical local needs in mind.",
  },
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <Image
            src={aboutImage}
            alt="Clean programming workspace with a laptop and modern desk setup"
            width={1400}
            height={1200}
            className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
            unoptimized
          />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">About &amp; Vision</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            We research elite websites first—then engineer a stronger, more relevant version for your brand.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Our workflow is internet-driven and deeply practical. We study the world’s absolute best-performing
            sites in each industry to borrow elite UX patterns, sharpen the information architecture, and engineer
            an even better version for our clients. That means every project starts with proven ideas, then gets
            tailored for the real user journey, the right local context, and the business goals that matter.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            {BRAND_NAME} is built from Kasangati, Uganda, and that local foundation matters. We know how to make
            premium digital experiences that feel international in quality while remaining grounded, useful, and easy
            for local audiences to trust and act on.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.value} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Icon className="h-5 w-5 text-brand" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{item.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
