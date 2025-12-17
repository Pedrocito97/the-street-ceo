"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            {/* Name - Large and prominent */}
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight"
            >
              <span className="block">CAMERON</span>
              <span className="block text-gold-gradient">MURRELL</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="text-lg lg:text-xl text-white/60 font-medium uppercase tracking-widest mb-8"
            >
              Coach · Speaker · Entrepreneur
            </motion.p>

            {/* Main Value Proposition */}
            <motion.h2
              variants={staggerItem}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Step Into Your Power.{" "}
              <span className="text-[var(--gold)]">
                Build a Life of Discipline and a Business of Impact.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg lg:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              From building 7-figure operations to coaching high-performers across
              3 countries — I help ambitious people transform their mindset and
              their results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link href="/coaching">
                <MagneticButton size="xl">
                  Get Coached
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </Link>
              <Link href="/speaking">
                <MagneticButton variant="outline" size="xl">
                  Book a Keynote
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--gold)]">500+</p>
                <p className="text-sm text-white/50 uppercase tracking-wide">Lives Transformed</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--gold)]">50+</p>
                <p className="text-sm text-white/50 uppercase tracking-wide">Events Delivered</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--gold)]">3</p>
                <p className="text-sm text-white/50 uppercase tracking-wide">Countries</p>
              </div>
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
                  alt="Cameron Murrell - Coach, Speaker & Entrepreneur"
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
