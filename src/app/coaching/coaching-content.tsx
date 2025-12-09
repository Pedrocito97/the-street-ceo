"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Zap,
  Users,
  Play,
  ArrowRight,
  X,
  Calendar,
  MessageSquare,
  Target,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { CalendlyEmbed } from "@/components/shared/calendly-embed";
import { EmailCaptureForm } from "@/components/shared/email-capture-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const coachingOptions = [
  {
    name: "1-on-1 Coaching",
    icon: Zap,
    tagline: "Premium Transformation",
    description:
      "Weekly private sessions with Cam. Custom strategy development, unlimited support, and direct access to someone who's been where you want to go.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Unlimited direct access via voice/text",
      "Custom strategy development",
      "Performance tracking & accountability",
      "VIP event access",
      "Crisis support when you need it",
    ],
    ctaText: "Apply Now",
    ctaAction: "apply",
    highlighted: true,
  },
  {
    name: "Group Training",
    icon: Users,
    tagline: "Team Transformation",
    description:
      "Live group sessions with accountability partners who push you forward. Build alongside a community of action-takers.",
    features: [
      "Live group coaching calls",
      "Private community access",
      "Accountability partners",
      "Monthly Q&A with Cam",
      "Full replay library",
      "Networking opportunities",
    ],
    ctaText: "Book a Call",
    ctaAction: "book-call",
    highlighted: false,
  },
  {
    name: "Online Workshop",
    icon: Play,
    tagline: "Self-Paced Learning",
    description:
      "The core Street CEO frameworks and strategies at your own pace. Perfect for self-starters ready to implement immediately.",
    features: [
      "Full course library access",
      "Core transformation frameworks",
      "Implementation guides",
      "Community access",
      "Lifetime updates",
      "Mobile-friendly learning",
    ],
    ctaText: "Join Waitlist",
    ctaAction: "waitlist",
    highlighted: false,
  },
];

const whoIsThisFor = [
  "People who've struggled and are hungry for real change",
  "Hustlers who want proven systems, not more theory",
  "Leaders ready to build high-performance teams",
  "Anyone rebuilding and serious about transformation",
  "Those who are done with excuses and ready for action",
];

const notForYou = [
  "Looking for get-rich-quick schemes",
  "Not willing to put in the work",
  "Making excuses instead of progress",
  "Wanting someone to do it for you",
  "Not serious about real transformation",
];

const transformationProcess = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your goals, challenges, and where you want to be",
  },
  {
    icon: Target,
    title: "Assessment",
    description: "Identify your gaps, strengths, and the fastest path forward",
  },
  {
    icon: Calendar,
    title: "Custom Plan",
    description: "Build a strategy designed specifically for your situation",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "Execute with support, accountability, and real results",
  },
];

const faqs = [
  {
    question: "How is this different from other coaching programs?",
    answer:
      "This isn't theory from someone who read it in a book. Everything I teach comes from real experience - building teams, closing deals, losing everything, and rebuilding. I've been where you are and built my way out.",
  },
  {
    question: "What if I'm just starting out?",
    answer:
      "The Online Workshop or Group Training are perfect for those earlier in their journey. You'll get foundational strategies and community support. Book a call and we'll figure out the right fit together.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Group Training requires 2-3 hours per week. The Workshop is self-paced. 1:1 coaching is customized to your schedule but expect intensive work during our sessions together.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Results vary based on your starting point and commitment. Members typically see significant mindset shifts within weeks, with tangible business and personal results following within 3-6 months of consistent application.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "No long-term contracts. I want you here because you're getting results, not because you're locked in. We can discuss options during our initial call.",
  },
  {
    question: "How do I know which option is right for me?",
    answer:
      "Book a free discovery call. We'll discuss your goals, situation, and find the best path forward. No pressure, no sales tactics - just honest advice.",
  },
];

export function CoachingPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/4 -right-32" size="lg" delay={1} />

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
              Transform Your Results
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Stop Figuring It Out <span className="text-gold-gradient">Alone</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 mb-8"
            >
              Get the strategies, accountability, and support you need to
              transform your business, your team, and yourself.
            </motion.p>
            <motion.div variants={staggerItem}>
              <a href="#options">
                <MagneticButton size="lg">
                  Find Your Path
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Read This First"
            title="Not For Everyone"
            description="I'm selective about who I work with. This isn't for everyone - and that's intentional."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* This IS for you */}
            <motion.div variants={staggerItem}>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  This IS For You If...
                </h3>
                <ul className="space-y-4">
                  {whoIsThisFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* This is NOT for you */}
            <motion.div variants={staggerItem}>
              <GlassCard className="h-full border-red-500/20">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  This is NOT For You If...
                </h3>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 text-lg">
              Still reading?{" "}
              <span className="text-[var(--gold)] font-semibold">Good.</span> You
              might be exactly who I&apos;m looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaching Options */}
      <section id="options" className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Choose Your Path"
            title="How We Work Together"
            description="Every option is designed for a different stage of transformation. Start where you are."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {coachingOptions.map((option, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard
                  className={`h-full flex flex-col ${
                    option.highlighted ? "ring-2 ring-[var(--gold)] relative" : ""
                  }`}
                  delay={index * 0.1}
                >
                  {option.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--gold)] text-black text-sm font-bold uppercase tracking-wide rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                      <option.icon className="w-8 h-8 text-[var(--gold)]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {option.name}
                    </h3>
                    <p className="text-[var(--gold)] text-sm uppercase tracking-wide">
                      {option.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-center mb-6">
                    {option.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {option.ctaAction === "apply" && (
                    <a href="#book-call">
                      <Button
                        className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide hover-gold-glow"
                      >
                        {option.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                  {option.ctaAction === "book-call" && (
                    <a href="#book-call">
                      <Button className="w-full bg-white/10 text-white hover:bg-white/20 font-display font-semibold uppercase tracking-wide">
                        {option.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                  {option.ctaAction === "waitlist" && (
                    <a href="#waitlist">
                      <Button className="w-full bg-white/10 text-white hover:bg-white/20 font-display font-semibold uppercase tracking-wide">
                        {option.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="How It Works"
            title="The Transformation Process"
            description="From first call to lasting results."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {transformationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < transformationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent" />
                )}
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--gold)]/10 border-2 border-[var(--gold)]/30 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading label="Questions?" title="Frequently Asked Questions" />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-white hover:text-[var(--gold)] text-left font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Book a Call - Calendly Section */}
      <section id="book-call" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Ready to Start?"
            title="Book Your Discovery Call"
            description="Let's discuss your goals and find the right path for your transformation. No pressure, no sales tactics - just honest conversation."
          />

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-0 overflow-hidden">
              <CalendlyEmbed
                url="https://calendly.com/thestreetceo/coaching-discovery"
                height={700}
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section-padding bg-black">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Online Workshop
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Join the Workshop Waitlist
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Be the first to know when the self-paced Street CEO Workshop
                opens for enrollment. Get early access and exclusive bonuses.
              </p>
            </motion.div>

            <GlassCard className="max-w-md mx-auto">
              <EmailCaptureForm
                ctaText="Join Waitlist"
                showName={true}
                variant="default"
              />
              <p className="text-white/40 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
