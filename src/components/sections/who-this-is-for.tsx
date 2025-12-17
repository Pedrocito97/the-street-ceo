"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Briefcase,
  Rocket,
  Award,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const audiences = [
  {
    icon: TrendingUp,
    title: "Ambitious Professionals",
    description: "Ready to break through plateaus and reach the next level in your career.",
  },
  {
    icon: Users,
    title: "Team Leaders",
    description: "Looking to build and inspire high-performing teams that deliver results.",
  },
  {
    icon: Briefcase,
    title: "Sales Teams",
    description: "Want proven strategies to close more deals and exceed targets consistently.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "Building something from the ground up and need the right mindset to scale.",
  },
  {
    icon: Target,
    title: "Goal-Driven Individuals",
    description: "Committed to personal growth and ready to take action on your ambitions.",
  },
  {
    icon: Award,
    title: "Organizations",
    description: "Seeking transformational keynotes and training that create lasting impact.",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.02]" />

      <div className="container-wide relative">
        <SectionHeading
          label="Who I Work With"
          title="For Ambitious Leaders Ready to Transform"
          description="Whether you're an individual seeking growth or an organization looking to elevate your team — I'm here to help you execute."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative p-6 rounded-2xl border border-white/5 bg-[var(--charcoal)]/50 hover:border-[var(--gold)]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                  <audience.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-white/60 text-sm">{audience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20">
            <Target className="w-5 h-5 text-[var(--gold)]" />
            <p className="text-white font-medium">
              Ready to transform?{" "}
              <span className="text-[var(--gold)]">Let&apos;s make it happen.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
