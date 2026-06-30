"use client";

import { CalendarDays, Clock3, MapPin, MessageCircle, PhoneCall, SendHorizontal } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { BRAND_NAME, LOCATION, WHATSAPP_URL } from "@/lib/contact";
import { budgetOptions, serviceOptions } from "@/lib/site-content";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  service: serviceOptions[0] ?? "Website Design & Development",
  budget: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  const supportHours = useMemo(
    () => [
      "Mon–Fri: 9:00 AM – 5:00 PM",
      "Saturday: By appointment",
      "Sunday: Closed",
    ],
    [],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim() || !form.service.trim() || !form.message.trim()) {
      setError("Please complete all required fields before starting the WhatsApp conversation.");
      return;
    }

    const lines = [
      `Hello ${BRAND_NAME}, I would like to start a project.`,
      `Name: ${form.fullName.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `Service Interested In: ${form.service.trim()}`,
      form.budget ? `Budget Range: ${form.budget.trim()}` : null,
      `Message: ${form.message.trim()}`,
    ].filter(Boolean) as string[];

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setError(null);
    setForm(initialState);
  };

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tell us what you want to build and we will map the best path forward.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Send a few details using the form below. We will open a prefilled WhatsApp message so your inquiry can
            move straight into a real conversation.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name*" id="fullName">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Phone Number*" id="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                  placeholder="e.g. +256 700 000 000"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email Address*" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Service Interested In*" id="service">
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(event) => updateField("service", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Budget Range" id="budget">
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                >
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message*" id="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                  placeholder="Tell us about your project goals, timeline, and any useful details."
                />
              </Field>
            </div>

            {error ? (
              <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <SendHorizontal className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">Contact information</h3>
          <div className="mt-6 space-y-5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 flex-none text-whatsapp" />
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex text-whatsapp transition hover:text-emerald-400"
                >
                  +256 778 030 847
                </a>
                <p className="mt-1 text-slate-400">Primary contact method for project discussions and updates.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="mt-1 text-slate-400">{LOCATION}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 flex-none text-brand" />
              <div>
                <p className="font-semibold text-white">Support hours</p>
                <ul className="mt-1 space-y-1 text-slate-400">
                  {supportHours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-5 w-5 flex-none text-brand" />
              <div>
                <p className="font-semibold text-white">Fast-response culture</p>
                <p className="mt-1 text-slate-400">
                  We keep communication simple and practical so you always know what happens next.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-brand" />
              <p className="text-sm font-semibold text-white">Quick booking tip</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Share your preferred launch window, the service you need, and your budget range so we can respond with
              the fastest practical recommendation.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: Readonly<{
  label: string;
  id: string;
  children: React.ReactNode;
}>) {
  return (
    <label htmlFor={id} className="space-y-2">
      <span className="block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}
