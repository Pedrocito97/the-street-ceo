"use client";

import { motion } from "framer-motion";
import {
  Flame,
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  RefreshCw,
  Target,
  Compass,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const audiences = [
  {
    icon: RefreshCw,
    title: "People Who've Struggled",
    description: "You've been knocked down. You've failed. You're rebuilding.",
  },
  {
    icon: GraduationCap,
    title: "No Fancy Degrees",
    description: "You learned on the streets, not in a classroom.",
  },
  {
    icon: Building2,
    title: "From The Cities",
    description: "Urban environment. Real pressure. No silver spoons.",
  },
  {
    icon: Users,
    title: "Family Depending On You",
    description: "Failure isn't an option when people count on you.",
  },
  {
    icon: TrendingUp,
    title: "Salespeople & Hustlers",
    description: "You know how to grind. You just need the right system.",
  },
  {
    icon: Compass,
    title: "Men Without Direction",
    description: "Young or rebuilding at 30+ - you need a path forward.",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.02]" />

      <div className="container-wide relative">
        <SectionHeading
          label="Who I Speak To"
          title="This Is For The Hungry"
          description="Not for middle-class comfort seekers. For people who NEED to win."
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
            <Flame className="w-5 h-5 text-[var(--gold)]" />
            <p className="text-white font-medium">
              His audience is broad.{" "}
              <span className="text-[var(--gold)]">Yours is hungry.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
