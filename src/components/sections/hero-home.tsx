"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Mic, Users } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--charcoal)] to-black" />

      {/* Subtle gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--gold)]/5 to-transparent" />

      {/* Animated grain/noise overlay for gritty texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
          {/* Value Proposition Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium uppercase tracking-widest">
              <Target className="w-4 h-4" />
              Keynotes · Coaching · Transformation
            </span>
          </motion.div>

          {/* Main Headline - Buyer Focused */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-hero text-white mb-4"
          >
            <span className="block">BUILD LEADERS</span>
            <span className="block">
              WHO <span className="text-gold-gradient">EXECUTE.</span>
            </span>
          </motion.h1>

          {/* Subheadline - The problem & solution */}
          <motion.p
            variants={staggerItem}
            className="font-display text-2xl lg:text-3xl font-bold text-white tracking-wide mb-6"
          >
            Transform your team&apos;s mindset.{" "}
            <span className="text-[var(--gold)]">Transform your results.</span>
          </motion.p>

          {/* Description - Value proposition */}
          <motion.p
            variants={staggerItem}
            className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            High-impact keynotes and coaching for sales teams, leaders, and
            organizations ready to stop making excuses and start executing.
            <span className="block mt-2 text-white/60">
              Built from real experience: 7 figures by 25, 100+ reps scaled, 3
              countries.
            </span>
          </motion.p>

          {/* Service Pills */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
          >
            {[
              { icon: Mic, label: "Keynote Speaker", href: "/speaking" },
              { icon: Users, label: "Team Coaching", href: "/coaching" },
              { icon: Target, label: "1-on-1 Coaching", href: "/coaching" },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 transition-all duration-300"
              >
                <service.icon className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white">
                  {service.label}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link href="/speaking">
              <MagneticButton size="xl">
                Book a Keynote
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
            <Link href="/coaching">
              <MagneticButton variant="outline" size="xl">
                Explore Coaching
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now booking 2025
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span>50+ Events Delivered</span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span>98% Satisfaction Rate</span>
          </motion.div>
        </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-[var(--gold)]/20 blur-3xl rounded-full transform scale-75" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/speaking/cameron-speaking-full.jpg"
                  alt="Cameron Murrell - Keynote Speaker"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-[var(--charcoal)] border border-[var(--gold)]/30 rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-[var(--gold)] text-xs uppercase tracking-wider font-semibold">International Speaker</p>
                <p className="text-white text-sm font-bold">50+ Events · 5 Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-[var(--gold)] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
