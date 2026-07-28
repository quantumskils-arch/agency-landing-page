import { Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND_NAME, EMAIL, LOCATION, WHATSAPP_URL } from "@/lib/contact";
import { servicePillars } from "@/lib/site-content";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work / Portfolio", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 pb-28 pt-16 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand">
            <span className="text-lg font-bold text-brand">NS</span>
          </div>
          <p className="mt-5 max-w-md text-lg font-semibold text-white">
            {BRAND_NAME} builds affordable websites with WhatsApp automation that help Ugandan businesses
            get more customers and look professional online.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Based in {LOCATION}. We understand the local market and design solutions that work for real
            Ugandan businesses — from salons in Kampala to lodges in Jinja.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Services</h2>
          <ul className="mt-5 space-y-3">
            {servicePillars.map((service) => (
              <li key={service.title}>
                <a href="#services" className="text-sm text-slate-400 transition hover:text-white">
                  {service.title}
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
                <p className="text-sm font-semibold text-white">WhatsApp (fastest response)</p>
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
              <a href={`mailto:${EMAIL}`} className="transition hover:text-white">{EMAIL}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-4 pt-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>
          © {year} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
