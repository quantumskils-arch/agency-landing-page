import { MessageCircle } from "lucide-react";
import { BRAND_NAME, WHATSAPP_URL } from "@/lib/contact";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${BRAND_NAME} on WhatsApp`}
      className="group fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 motion-safe:animate-pulse sm:bottom-6 sm:right-6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
