import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpeakingPageContent } from "./speaking-content";

export const metadata: Metadata = {
  title: "Book Cameron Murrell | Keynote Speaker",
  description:
    "Book Cameron Murrell for your next event. Powerful keynotes on discipline, sales leadership, and transformation. 50+ events delivered, 98% satisfaction rate.",
  openGraph: {
    title: "Book Cameron Murrell | Keynote Speaker",
    description:
      "Transform your event with raw, authentic keynotes that move audiences from inspiration to action.",
  },
};

export default function SpeakingPage() {
  return (
    <>
      <Header />
      <main>
        <SpeakingPageContent />
      </main>
      <Footer />
    </>
  );
}
