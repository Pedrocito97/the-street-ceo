"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Shield,
  Flame,
  Crown,
  TrendingDown,
  RefreshCw,
  Zap,
  Check,
  Mic,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const timeline = [
  {
    year: "Where I Came From",
    title: "No Degree. No Privilege. Just Hunger.",
    description:
      "Growing up with nothing handed to me. No fancy education, no connections. Just a family depending on me and unshakeable drive.",
    icon: Target,
  },
  {
    year: "The Rise",
    title: "7 Figures by 25",
    description:
      "Started knocking doors. Built my first team in the UK, expanded to Ireland and USA. Scaled to 100+ reps across three countries.",
    icon: Flame,
  },
  {
    year: "The Fall",
    title: "I Lost Everything",
    description:
      "Bad decisions, wrong partnerships, overconfidence. I lost the money, the team, myself. Most people never talk about this part.",
    icon: TrendingDown,
  },
  {
    year: "The Rebuild",
    title: "Coming Back at 32",
    description:
      "Now rebuilding publicly. Every lesson documented. This isn't a comeback story - it's proof that transformation is a daily choice.",
    icon: RefreshCw,
  },
];

const whatMakesDifferent = [
  {
    title: "Lived Experience, Not Theory",
    description:
      "Everything I teach comes from doing it - building, failing, rebuilding. Not from reading books or getting certifications.",
  },
  {
    title: "Built From Nothing",
    description:
      "No privilege, no connections, no safety net. If you're starting from zero, I've been exactly where you are.",
  },
  {
    title: "Transparent About Failure",
    description:
      "Most coaches hide their losses. I share everything - the wins, the crashes, the lessons learned the hard way.",
  },
  {
    title: "Still In The Arena",
    description:
      "I'm not retired advice-giver. I'm actively building, competing, and proving the principles work in real-time.",
  },
];

const philosophy = [
  {
    icon: Target,
    title: "Discipline Over Motivation",
    description:
      "Motivation fades. Discipline delivers. I teach systems that work when feelings don't.",
  },
  {
    icon: Shield,
    title: "Street-Smart Strategy",
    description:
      "Theory means nothing without execution. Everything I teach has been battle-tested.",
  },
  {
    icon: Flame,
    title: "Relentless Execution",
    description:
      "Ideas are worthless without action. I build high-performers who execute.",
  },
  {
    icon: Crown,
    title: "Identity Transformation",
    description:
      "You can't outperform your identity. I help people become who they need to be.",
  },
];

const stats = [
  { value: 7, prefix: "", suffix: " Figures", label: "Built by 25" },
  { value: 100, prefix: "", suffix: "+", label: "Reps Scaled" },
  { value: 3, prefix: "", suffix: "", label: "Countries" },
  { value: 32, prefix: "", suffix: "", label: "Rebuilding at" },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/4 -right-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Meet Cameron
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              I Built Millions.{" "}
              <span className="text-gold-gradient">Lost It All.</span>
              <br />
              Now I&apos;m Coming Back.
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl"
            >
              Most coaches show you the highlight reel. Here&apos;s the truth -
              the rise, the crash, and the rebuild. No filters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Visual Grid */}
      <section className="py-12 bg-black">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-3 lg:gap-4"
          >
            <motion.div variants={staggerItem} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <img
                src="/images/speaking/cameron-speaking-full.jpg"
                alt="Cameron speaking on stage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div variants={staggerItem} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <img
                src="/images/speaking/cameron-podium.jpg"
                alt="Cameron at podium"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div variants={staggerItem} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <img
                src="/images/speaking/cameron-speaking-medium.jpg"
                alt="Cameron delivering keynote"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--charcoal)] border-y border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-[var(--gold)]">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Cameron Different */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="The Difference"
            title="Why Work With Me"
            description="What separates real transformation from motivational fluff."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {whatMakesDifferent.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="The Full Story"
            title="Rise. Fall. Rebuild."
            description="Most coaches only show you the highlight reel."
            align="left"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 mb-16 ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Content */}
                <div
                  className={`pl-12 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:order-2 lg:pl-16"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <span className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-[var(--charcoal)]" />
                </div>

                {/* Empty space for alternating layout */}
                <div
                  className={
                    index % 2 === 0 ? "hidden lg:block" : "hidden lg:block lg:order-1"
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="My Philosophy"
            title="The Street CEO Way"
            description="The foundation of every transformation I create."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {philosophy.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-[var(--charcoal)] relative overflow-hidden">
        <FloatingOrb className="top-0 left-1/4" size="xl" delay={0} />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-6">
              My Mission
            </span>
            <blockquote className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
              &ldquo;To show every hungry soul that your past doesn&apos;t define
              your future.
              <span className="text-gold-gradient"> Transformation is possible.</span>
              &rdquo;
            </blockquote>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Through coaching, speaking, and community, I&apos;m building an army
              of transformed high-performers who execute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-[var(--charcoal)] to-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 text-center"
          >
            <h2 className="font-display text-section text-white mb-4">
              Ready to Transform?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Whether through coaching or a powerful keynote - I&apos;m ready to
              help you and your team execute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coaching">
                <MagneticButton size="lg">
                  Work With Me
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </Link>
              <Link href="/speaking">
                <MagneticButton variant="outline" size="lg">
                  <Mic className="w-4 h-4 mr-2 inline-block" />
                  Book a Keynote
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
