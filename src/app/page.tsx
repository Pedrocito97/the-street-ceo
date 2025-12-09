import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroHome } from "@/components/sections/hero-home";
import { CredibilityBar } from "@/components/sections/credibility-bar";
import { WhoThisIsFor } from "@/components/sections/who-this-is-for";
import { AboutPreview } from "@/components/sections/about-preview";
import { ProofSection } from "@/components/sections/proof-section";
import { ProgramsShowcase } from "@/components/sections/programs-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { SpeakingPreview } from "@/components/sections/speaking-preview";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <CredibilityBar />
        <WhoThisIsFor />
        <AboutPreview />
        <ProofSection />
        <ProgramsShowcase />
        <TestimonialsSection />
        <LeadMagnet />
        <SpeakingPreview />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
