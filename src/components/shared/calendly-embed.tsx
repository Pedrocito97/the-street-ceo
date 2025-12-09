"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

export function CalendlyEmbed({ url, height = 700, className = "" }: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--charcoal)] rounded-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-[var(--gold)]" />
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading scheduler...</span>
          </div>
        </motion.div>
      )}
      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden"
        data-url={`${url}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=d4af37`}
        style={{
          minWidth: "320px",
          height: `${height}px`,
        }}
      />
    </div>
  );
}
