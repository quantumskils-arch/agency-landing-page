import { Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND_NAME, LOCATION, WHATSAPP_URL, navigationLinks } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-slate-950 pb-28 pt-16 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand">
            <span className="text-lg">◌</span>
          </div>
          <p className="mt-5 max-w-md text-lg font-semibold text-white">
            {BRAND_NAME} builds polished, fast, and high-converting digital experiences for growing businesses.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            We are based in {LOCATION}. That location maps to Kasangati and keeps our work grounded in the real
            needs of the businesses and communities we serve.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Quick Navigation</h2>
          <ul className="mt-5 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</h2>
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 h-5 w-5 flex-none text-whatsapp" />
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp is the primary contact avenue</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-medium text-whatsapp transition hover:text-emerald-400"
                >
                  +256 778 030 847
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand" />
              <span>{LOCATION}</span>
            </div>
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-400">
              <Mail className="mt-0.5 h-5 w-5 flex-none text-brand" />
              <span>Fast replies, project planning, and launch coordination all happen through WhatsApp.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-4 pt-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>© {year} {BRAND_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
