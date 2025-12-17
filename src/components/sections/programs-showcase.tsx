"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Crown, Rocket } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const programs = [
  {
    icon: Target,
    title: "Mindset Mastery",
    description: "Transform the way you think and operate. This program rewires your mindset for success — building the mental frameworks that separate high-performers from everyone else.",
    features: ["Overcome Limiting Beliefs", "Build Unshakeable Discipline", "Develop a Winning Identity"],
    href: "/programs/mindset",
    featured: true,
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1470&auto=format&fit=crop",
  },
  {
    icon: Rocket,
    title: "Sales Accelerator",
    description: "The proven playbook I used to build 100+ rep teams and generate millions in revenue. Master the art of selling and leading sales teams.",
    features: ["Handle Any Objection", "Build High-Performing Teams", "Scale Revenue Consistently"],
    href: "/programs/sales",
    featured: false,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop",
  },
  {
    icon: Crown,
    title: "Leadership System",
    description: "Learn to build, inspire, and scale teams that deliver exceptional results. Transform from manager to leader people genuinely want to follow.",
    features: ["Build Loyal Teams", "Create Winning Culture", "Scale Without Burnout"],
    href: "/programs/leadership",
    featured: false,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop",
  },
];

export function ProgramsShowcase() {
  return (
    <section className="relative section-padding bg-[var(--charcoal)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          label="Programs"
          title="Proven Programs for Transformation"
          description="Battle-tested strategies and frameworks designed to create lasting change. Choose the path that fits your goals."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard
                className={`h-full flex flex-col overflow-hidden ${program.featured ? "ring-2 ring-[var(--gold)]/30" : ""}`}
                delay={index * 0.1}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-wide rounded-full z-10">
                    Most Popular
                  </div>
                )}

                {/* Image Header */}
                <div className="relative h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--street-grey)] to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-sm border border-[var(--gold)]/30 flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-white/60 mb-6 flex-grow">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={program.href}
                  className="group flex items-center gap-2 text-[var(--gold)] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/programs">
            <MagneticButton variant="outline" size="lg">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
