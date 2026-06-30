"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BRAND_NAME, WHATSAPP_URL, navigationLinks } from "@/lib/contact";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => navigationLinks, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          aria-label={`${BRAND_NAME} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_10px_30px_rgba(37,99,235,0.15)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="text-lg">◌</span>
          </span>
          <span className="leading-tight">
            <span className="block text-white">{BRAND_NAME}</span>
            <span className="block text-xs font-medium text-slate-400">
              Premium web design & automation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
