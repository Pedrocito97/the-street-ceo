"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Users,
  Globe,
  Clock,
  ArrowRight,
  Check,
  Star,
  Building2,
  Trophy,
  Rocket,
  Target,
  TrendingUp,
  Brain,
  Download,
  Calendar,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { CalendlyEmbed } from "@/components/shared/calendly-embed";
import { staggerContainer, staggerItem } from "@/lib/animations";

const keynotes = [
  {
    title: "Discipline Over Everything",
    description:
      "Why motivation fails and discipline delivers. A tactical breakdown of the systems and habits that separate top performers from everyone else.",
    duration: "45-60 minutes",
    idealFor: "Sales teams, corporate training, leadership events",
    topics: [
      "Daily routines of winners",
      "Building unbreakable habits",
      "Mental toughness",
      "Eliminating excuses",
    ],
  },
  {
    title: "High-Performance Sales Leadership",
    description:
      "The exact strategies I used to build and scale 100+ rep teams across three countries. For sales teams and leadership conferences.",
    duration: "60-90 minutes",
    idealFor: "Sales conferences, management summits, B2B events",
    topics: [
      "Recruiting top talent",
      "Team culture creation",
      "Performance management",
      "Scaling operations",
    ],
  },
  {
    title: "The Street CEO Mindset",
    description:
      "Street-smart business strategy for entrepreneurs and leaders. How to think different, move different, and win different.",
    duration: "45-60 minutes",
    idealFor: "Entrepreneurship events, startup conferences, motivational gatherings",
    topics: [
      "Strategic thinking",
      "Opportunity recognition",
      "Risk assessment",
      "Execution excellence",
    ],
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Events" },
  { value: 10, suffix: "K+", label: "Audience Reached" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

const audiences = [
  {
    icon: Building2,
    title: "Corporate Events & Conferences",
    description: "Transform company culture with raw, authentic keynotes that drive action.",
    size: "100-5,000+ attendees",
  },
  {
    icon: Target,
    title: "Sales Kickoffs & Team Events",
    description: "Fire up your sales force with tactical strategies that close deals.",
    size: "50-500 attendees",
  },
  {
    icon: Trophy,
    title: "Leadership Summits",
    description: "Equip your leaders with street-smart wisdom for real-world challenges.",
    size: "50-300 attendees",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship Events",
    description: "Inspire founders with the mindset needed to build from nothing.",
    size: "100-2,000 attendees",
  },
];

const problemsSolved = [
  {
    icon: Brain,
    problem: "Team lacks discipline and accountability",
    solution: "Install systems that create consistency without micromanagement",
  },
  {
    icon: TrendingUp,
    problem: "Sales performance has plateaued",
    solution: "Inject proven tactics that reignite competitive fire",
  },
  {
    icon: Users,
    problem: "Leaders struggle to motivate diverse teams",
    solution: "Develop authentic leadership that resonates across backgrounds",
  },
  {
    icon: Target,
    problem: "Organization needs mindset transformation",
    solution: "Shift thinking from excuses to execution at every level",
  },
];

const testimonials = [
  {
    quote:
      "Cameron brought an energy to our annual conference that we've never experienced before. Our team is still talking about it months later.",
    author: "Sarah Mitchell",
    role: "VP of Sales, TechCorp UK",
  },
  {
    quote:
      "Raw, authentic, and incredibly impactful. Cameron doesn't just speak - he transforms the room.",
    author: "James Rodriguez",
    role: "Event Director, Leadership Summit",
  },
];

const meetingPlannerIncludes = [
  { icon: Phone, text: "Pre-event discovery call to customize content" },
  { icon: FileText, text: "Tailored presentation for your audience" },
  { icon: Users, text: "Optional Q&A or breakout session" },
  { icon: Download, text: "Post-event resources for attendees" },
];

const bookingProcess = [
  {
    step: "1",
    title: "Book a Call",
    description: "Schedule a discovery call to discuss your event",
  },
  {
    step: "2",
    title: "Custom Proposal",
    description: "Receive a tailored speaking package",
  },
  {
    step: "3",
    title: "Confirm & Prepare",
    description: "Lock in dates and collaborate on content",
  },
  {
    step: "4",
    title: "Deliver Impact",
    description: "Transform your audience",
  },
];

export function SpeakingPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -right-32" size="xl" delay={0} />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
              >
                Book Cameron
              </motion.span>
              <motion.h1
                variants={staggerItem}
                className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Keynotes That <span className="text-gold-gradient">Transform</span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-xl text-white/70 mb-8"
              >
                Raw energy. Real stories. Results that last beyond the event.
                Give your audience the wake-up call they need to execute.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                <a href="#book-call">
                  <MagneticButton size="lg">
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </MagneticButton>
                </a>
                <a href="#keynotes">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-display uppercase tracking-wide"
                  >
                    View Keynotes
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden glass-card"
            >
              <img
                src="/images/speaking/cameron-speaking-full.jpg"
                alt="Cameron Murrell speaking on stage"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Perfect For"
            title="Who Books Cameron"
            description="Event organizers who want more than inspiration - they want transformation."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {audiences.map((audience, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full text-center" delay={index * 0.1}>
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <audience.icon className="w-7 h-7 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{audience.description}</p>
                  <span className="text-[var(--gold)] text-xs uppercase tracking-wide">
                    {audience.size}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problems I Solve */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="The Impact"
            title="Problems I Solve"
            description="Every keynote is designed to address real challenges your organization faces."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {problemsSolved.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Problem:</p>
                      <p className="text-white font-semibold mb-3">{item.problem}</p>
                      <p className="text-white/50 text-sm mb-1">Solution:</p>
                      <p className="text-[var(--gold)]">{item.solution}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Keynote Topics */}
      <section id="keynotes" className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Signature Keynotes"
            title="Three Powerful Presentations"
            description="Each keynote is customized to your audience and objectives."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {keynotes.map((keynote, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full flex flex-col" delay={index * 0.1}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[var(--gold)]" />
                    <span className="text-white/50 text-sm">{keynote.duration}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {keynote.title}
                  </h3>
                  <p className="text-white/60 mb-4 flex-grow">{keynote.description}</p>

                  <div className="mb-4">
                    <span className="text-[var(--gold)] text-xs uppercase tracking-wide">
                      Ideal for: {keynote.idealFor}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {keynote.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-full text-[var(--gold)] text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="What Event Organizers Say"
            title="Client Testimonials"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={index * 0.1}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="In Action"
            title="Cameron On Stage"
            description="Delivering transformational keynotes across the globe."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { src: "/images/speaking/cameron-podium.jpg", alt: "Cameron speaking at podium" },
              { src: "/images/speaking/cameron-speaking-medium.jpg", alt: "Cameron on stage with microphone" },
              { src: "/images/speaking/cameron-stage-duo.jpg", alt: "Cameron on stage at entrepreneur summit" },
              { src: "/images/speaking/cameron-stage-group.jpg", alt: "Cameron presenting with co-speakers" },
              { src: "/images/speaking/cameron-audience.jpg", alt: "Cameron with engaged audience" },
              { src: "/images/speaking/cameron-speaking-full.jpg", alt: "Cameron delivering keynote" },
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative overflow-hidden rounded-xl glass-card group ${
                  index === 0 ? "col-span-2 lg:col-span-1 row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Meeting Planners */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="For Event Organizers"
                title="Meeting Planner Info"
                description="Everything you need to make your event a success."
                align="left"
              />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {meetingPlannerIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <span className="text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)]/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Speaker Kit
                </Button>
              </div>
            </div>

            <GlassCard>
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Booking Process
              </h3>
              <div className="space-y-6">
                {bookingProcess.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
                      <span className="font-display font-bold text-[var(--gold)]">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-white/60 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Book a Call - Calendly Section */}
      <section id="book-call" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Let's Talk"
            title="Book a Discovery Call"
            description="Tell us about your event and let's explore how we can make it unforgettable."
          />

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-0 overflow-hidden">
              <CalendlyEmbed
                url="https://calendly.com/thestreetceo/discovery"
                height={700}
              />
            </GlassCard>
            <p className="text-center text-white/40 text-sm mt-4">
              Prefer email? Reach out at{" "}
              <a
                href="mailto:speaking@thestreetceo.com"
                className="text-[var(--gold)] hover:underline"
              >
                speaking@thestreetceo.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
