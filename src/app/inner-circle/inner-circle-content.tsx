"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  Book,
  Users,
  Sparkles,
  Lock,
  Zap,
  Gift,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { EmailCaptureForm } from "@/components/shared/email-capture-form";
import { staggerContainer, staggerItem } from "@/lib/animations";

const playbookBenefits = [
  "Mindset shifts that took me from nothing to 7 figures",
  "How to lead without credentials or degrees",
  "The 3 mistakes that cost me everything (and how to avoid them)",
  "My daily discipline routine that drives results",
  "Street-smart strategies for any industry",
];

const innerCircleBenefits = [
  {
    icon: Mail,
    title: "Weekly Raw Fire",
    description: "Street wisdom delivered to your inbox every week. Actionable, no fluff.",
  },
  {
    icon: Zap,
    title: "First Access",
    description: "Be the first to know about new content, programs, and opportunities.",
  },
  {
    icon: Lock,
    title: "Exclusive Strategies",
    description: "Insights and tactics I only share with the Inner Circle.",
  },
  {
    icon: Users,
    title: "Community Invites",
    description: "Get invited to exclusive events, workshops, and community calls.",
  },
  {
    icon: Gift,
    title: "Member-Only Offers",
    description: "Special pricing and early access to new programs and coaching spots.",
  },
  {
    icon: Sparkles,
    title: "Behind The Scenes",
    description: "Follow the journey as I rebuild publicly. The wins, the losses, the lessons.",
  },
];

const testimonials = [
  {
    quote: "Cam's emails are the only ones I actually open. No BS, just straight value that I can apply immediately.",
    author: "Marcus T.",
    role: "Sales Manager, Manchester",
  },
  {
    quote: "The Playbook alone changed how I approach my business. The weekly emails keep me accountable.",
    author: "Sophie R.",
    role: "Entrepreneur, London",
  },
  {
    quote: "Finally someone who tells it how it is. The Inner Circle is where the real ones hang out.",
    author: "David K.",
    role: "Team Leader, Dublin",
  },
];

export function InnerCircleContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -right-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/4 -left-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Free Access
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Join The Street CEO{" "}
              <span className="text-gold-gradient">Inner Circle</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 mb-8"
            >
              Get exclusive strategies, behind-the-scenes access, and the free
              Playbook that's helped thousands transform their results.
            </motion.p>
            <motion.div variants={staggerItem}>
              <GlassCard className="max-w-md mx-auto">
                <EmailCaptureForm
                  ctaText="Send Me The Playbook"
                  showName={true}
                  variant="default"
                />
                <div className="flex items-center justify-center gap-4 mt-4 text-white/40 text-xs">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> 100% Free
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Instant Access
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-[var(--charcoal)] border-y border-white/5">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            <div>
              <span className="font-display text-3xl font-bold text-[var(--gold)]">
                5,000+
              </span>
              <span className="text-white/60 text-sm ml-2">Members</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div>
              <span className="font-display text-3xl font-bold text-[var(--gold)]">
                2,500+
              </span>
              <span className="text-white/60 text-sm ml-2">Playbook Downloads</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                />
              ))}
              <span className="text-white/60 text-sm ml-2">Rated 4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Your Free Gift
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                The Street CEO{" "}
                <span className="text-gold-gradient">Playbook</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                10 lessons packed with the exact strategies, mindsets, and
                frameworks I've used to build, lose, and rebuild. No theory -
                just what works.
              </p>

              <ul className="space-y-4 mb-8">
                {playbookBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[var(--gold)]" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <a href="#get-playbook">
                <MagneticButton size="lg">
                  Get The Free Playbook
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>

            {/* Playbook Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Main book */}
                <div className="relative z-10 bg-gradient-to-br from-[var(--charcoal)] to-black rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="aspect-[3/4] flex flex-col justify-between">
                    <div>
                      <span className="text-[var(--gold)] text-xs uppercase tracking-widest">
                        Free Download
                      </span>
                      <h3 className="font-display text-3xl font-bold text-white mt-2 mb-4">
                        THE STREET CEO
                        <br />
                        <span className="text-gold-gradient">PLAYBOOK</span>
                      </h3>
                      <p className="text-white/60 text-sm">
                        10 Lessons for Building,
                        <br />
                        Losing & Rebuilding Everything
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 flex items-center justify-center">
                        <Book className="w-6 h-6 text-[var(--gold)]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Cameron Murrell
                        </p>
                        <p className="text-white/40 text-xs">The Street CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shadow layers */}
                <div className="absolute top-4 left-4 right-4 bottom-0 bg-[var(--gold)]/5 rounded-2xl -z-10" />
                <div className="absolute top-8 left-8 right-8 bottom-0 bg-[var(--gold)]/3 rounded-2xl -z-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Inside The Circle"
            title="What You Get"
            description="More than just emails. A community of action-takers getting real results."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innerCircleBenefits.map((benefit, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="What Members Say"
            title="From The Inner Circle"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-playbook" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Join 5,000+ Members
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Get The Playbook &<br />
                Enter The Circle
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Your transformation starts with a single step. Drop your email and
                get instant access to the Street CEO Playbook plus weekly insights.
              </p>
            </motion.div>

            <GlassCard className="max-w-md mx-auto">
              <EmailCaptureForm
                ctaText="Join The Inner Circle"
                showName={true}
                variant="default"
              />
              <p className="text-white/40 text-xs mt-4 text-center">
                No spam. Unsubscribe anytime. Your data stays private.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
