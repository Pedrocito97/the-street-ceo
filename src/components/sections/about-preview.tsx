"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function AboutPreview() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[800px] bg-gradient-to-l from-[var(--gold)]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/speaking/cameron-speaking-medium.jpg"
                alt="Cameron Murrell - Coach, Speaker & Entrepreneur"
                fill
                className="object-cover"
                quality={85}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Gold border accent */}
              <div className="absolute inset-0 border-2 border-[var(--gold)]/20 rounded-2xl" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-black border border-[var(--gold)]/30 rounded-xl p-5 backdrop-blur-sm"
            >
              <div className="font-display text-4xl font-bold text-[var(--gold)]">10+</div>
              <div className="text-white/70 text-sm font-medium">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Meet Cameron
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Built From Real
              <br />
              <span className="text-gold-gradient">Experience</span>
            </h2>

            {/* Story - Authentic but professional */}
            <div className="space-y-4 text-white/70 text-lg mb-8">
              <p className="text-white/90 font-medium">
                I didn&apos;t start with connections, capital, or a safety net.
              </p>
              <p>
                What I had was drive. The kind that gets you up early and keeps you going when others quit. Through building 7-figure operations, leading teams across 3 countries, and yes — losing it all and rebuilding — I&apos;ve learned what actually works.
              </p>
              <p>
                Now I help ambitious leaders and organizations transform their mindset and achieve results they never thought possible.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Proven Strategies",
                "Real-World Experience",
                "Actionable Insights",
                "Results-Focused",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <span className="text-white/80 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <MagneticButton size="lg">
                Read My Story
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
