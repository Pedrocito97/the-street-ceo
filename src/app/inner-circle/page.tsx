import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InnerCircleContent } from "./inner-circle-content";

export const metadata: Metadata = {
  title: "Join The Inner Circle | The Street CEO",
  description:
    "Get the free Street CEO Playbook + weekly strategies for transformation. Join thousands building their empire with raw, actionable insights.",
  openGraph: {
    title: "Join The Street CEO Inner Circle",
    description:
      "Get the free Street CEO Playbook + weekly strategies for transformation.",
  },
};

export default function InnerCirclePage() {
  return (
    <>
      <Header />
      <main>
        <InnerCircleContent />
      </main>
      <Footer />
    </>
  );
}
