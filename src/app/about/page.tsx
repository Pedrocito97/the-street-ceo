import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutPageContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Cameron Murrell",
  description:
    "Built 7 figures by 25. Lost it all. Now rebuilding publicly. The unfiltered story of The Street CEO - and why lived experience beats theory.",
  openGraph: {
    title: "About Cameron Murrell | The Street CEO",
    description:
      "The real story: rise, fall, rebuild. Most coaches show the highlight reel. Here's the truth.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
