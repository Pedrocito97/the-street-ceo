"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailCaptureFormProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  showName?: boolean;
  variant?: "default" | "compact" | "full";
  className?: string;
  onSubmit?: (data: { email: string; name?: string }) => void;
}

export function EmailCaptureForm({
  headline,
  description,
  ctaText = "Subscribe",
  showName = true,
  variant = "default",
  className = "",
  onSubmit,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onSubmit) {
      onSubmit({ email, name: showName ? name : undefined });
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setName("");
    }, 3000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center py-8 ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <p className="text-white font-semibold text-lg">You&apos;re In!</p>
        <p className="text-white/60 text-sm mt-1">Check your inbox for next steps.</p>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-black/50 border-white/10 text-white placeholder:text-white/40 flex-1"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide hover-gold-glow whitespace-nowrap"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className={className}>
      {headline && (
        <h3 className="font-display text-xl font-bold text-white mb-2">{headline}</h3>
      )}
      {description && <p className="text-white/60 mb-4">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showName && (
          <Input
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
          />
        )}
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12 hover-gold-glow"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
