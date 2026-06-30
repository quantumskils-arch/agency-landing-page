import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Blog />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
