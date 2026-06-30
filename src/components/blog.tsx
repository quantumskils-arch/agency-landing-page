import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    tag: "Web Design",
    title: "Why modern service websites convert better when the message is painfully clear",
    excerpt:
      "Great websites do not try to impress with clutter. They guide visitors toward one confident next step with structure, proof, and speed.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Automation",
    title: "How WhatsApp automation removes friction for busy businesses and front-desk teams",
    excerpt:
      "A well-designed bot can answer common questions, collect details, and keep conversations moving long after office hours end.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Local SEO",
    title: "A practical local search strategy for businesses that need visibility in their own town",
    excerpt:
      "Local search success depends on clarity, location signals, and page content that speaks directly to nearby customers.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Blog</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Recent thinking on websites, automation, and local growth.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              A preview of the kind of strategy we use when shaping digital experiences for businesses that want
              to look modern and perform even better.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
