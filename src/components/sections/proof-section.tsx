"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Globe,
  GraduationCap,
  Home,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { staggerContainer, staggerItem } from "@/lib/animations";

const proofPoints = [
  {
    icon: Trophy,
    stat: { value: 7, suffix: " Figures" },
    title: "Built by 25",
    description: "7-figure operation before most people start their careers.",
  },
  {
    icon: Users,
    stat: { value: 100, suffix: "+" },
    title: "Reps Scaled",
    description: "Built and led teams of 100+ across multiple countries.",
  },
  {
    icon: Globe,
    stat: { value: 3, suffix: "" },
    title: "Countries",
    description: "UK, Ireland, USA. Proven systems that work anywhere.",
  },
  {
    icon: GraduationCap,
    stat: { value: 0, suffix: "" },
    title: "Degrees Required",
    description: "Zero formal education. 100% street-level execution.",
  },
  {
    icon: Home,
    stat: { value: 1, suffix: "" },
    title: "Family Counting",
    description: "Real pressure. Real stakes. No room for theory.",
  },
  {
    icon: RefreshCw,
    stat: { value: 32, suffix: "" },
    title: "Rebuilding At",
    description: "Lost it all. Coming back. Documenting everything.",
  },
];

const receipts = [
  "Built 7-figure operation from scratch",
  "Scaled teams across 3 countries",
  "Led 100+ reps with zero formal training",
  "Operated under real family pressure",
  "Lost everything and rebuilt publicly",
  "Proof that transformation is a choice",
];

export function ProofSection() {
  return (
    <section className="section-padding bg-[var(--charcoal)] relative overflow-hidden">
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="container-wide relative">
        <SectionHeading
          label="Real Receipts"
          title="Proof Over Theory"
          description="People want proof, not promises. Here's mine."
        />

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group p-6 rounded-2xl border border-white/5 bg-black/30 hover:border-[var(--gold)]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                  <point.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div className="font-display text-3xl font-bold text-[var(--gold)]">
                  <AnimatedCounter
                    value={point.stat.value}
                    suffix={point.stat.suffix}
                  />
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                {point.title}
              </h3>
              <p className="text-white/60 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Receipts Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-bold text-white text-center mb-6">
              The Street CEO Receipts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {receipts.map((receipt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--gold)] shrink-0" />
                  <span className="text-white/80">{receipt}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
