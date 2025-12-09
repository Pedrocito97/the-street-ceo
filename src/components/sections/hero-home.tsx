"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Target, Mic, Users } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Gritty UK Urban Street Scene */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2068&auto=format&fit=crop"
          alt="Dark urban street at night - UK vibes"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
        />
        {/* Heavy dark overlay for gritty feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black" />
        {/* Subtle gold accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--gold)]/5 to-transparent" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-40" />
      </div>

      {/* Animated grain/noise overlay for gritty texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Cinematic bars (letterbox effect) */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />

      {/* Content */}
      <div className="relative z-10 container-wide py-32 lg:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
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
            className="flex flex-wrap justify-center gap-4 mb-12"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
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
