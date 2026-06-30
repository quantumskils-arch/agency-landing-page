import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Benefits } from "@/components/benefits";
import { BuildProcess } from "@/components/build-process";
import { ContactSection } from "@/components/contact-section";
import { FAQ } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/industries";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <BuildProcess />
        <Portfolio />
        <Industries />
        <About />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
