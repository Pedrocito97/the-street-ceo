import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CoachingPageContent } from "./coaching-content";

export const metadata: Metadata = {
  title: "Executive Coaching & Training",
  description:
    "Transform your results with The Street CEO coaching. 1-on-1 executive coaching, group training, and online workshops for leaders ready to execute.",
  openGraph: {
    title: "Executive Coaching & Training | The Street CEO",
    description:
      "Stop figuring it out alone. Get the strategies, accountability, and support you need to transform.",
  },
};

export default function CoachingPage() {
  return (
    <>
      <Header />
      <main>
        <CoachingPageContent />
      </main>
      <Footer />
    </>
  );
}
