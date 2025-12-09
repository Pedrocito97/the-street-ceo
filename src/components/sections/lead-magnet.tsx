"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, Zap, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/shared/glass-card";
import { staggerContainer, staggerItem } from "@/lib/animations";

const playbookBenefits = [
  {
    icon: Target,
    text: "The exact mindset shifts that took me from nothing to 7 figures",
  },
  {
    icon: Zap,
    text: "How to lead a team when you have zero formal credentials",
  },
  {
    icon: Shield,
    text: "The 3 mistakes that cost me everything (and how to avoid them)",
  },
  {
    icon: BookOpen,
    text: "My daily discipline routine that works when motivation doesn't",
  },
];

export function LeadMagnet() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-black via-[var(--charcoal)] to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-[0.03]" />

      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Content */}
          <div>
            <motion.span
              variants={staggerItem}
              className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-sm font-medium uppercase tracking-widest mb-6"
            >
              Free Download
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              The Street CEO{" "}
              <span className="text-gold-gradient">Playbook</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-white/70 mb-8"
            >
              10 raw lessons from building a 7-figure operation from nothing,
              losing it all, and coming back stronger. No theory - just what
              actually works when you&apos;re hungry and have no safety net.
            </motion.p>

            <motion.div variants={staggerItem} className="space-y-4 mb-8">
              {playbookBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <benefit.icon className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <p className="text-white/80">{benefit.text}</p>
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 text-sm text-white/50"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[var(--charcoal)] border-2 border-black flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                ))}
              </div>
              <span>2,500+ downloads this month</span>
            </motion.div>
          </div>

          {/* Right side - Form Card */}
          <motion.div variants={staggerItem}>
            <GlassCard className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Get Your Free Copy
                </h3>
                <p className="text-white/60">
                  Instant access. No credit card required.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your first name"
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40 h-14 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your best email"
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40 h-14 text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-14 text-lg hover-gold-glow"
                >
                  Send Me The Playbook
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="mt-4 text-xs text-white/40 text-center">
                By downloading, you&apos;ll also join the Street CEO Inner Circle newsletter.
                Unsubscribe anytime.
              </p>

              {/* Trust elements */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Instant Access</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
