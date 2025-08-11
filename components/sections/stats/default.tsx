"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";

interface StatsSectionProps {
  className?: string;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ end, durationMs = 1200, suffix = "", className = "" }: { end: number; durationMs?: number; suffix?: string; className?: string; }) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const start = performance.now();

            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(1, elapsed / durationMs);
              const eased = easeOutCubic(progress);
              setValue(Math.round(end * eased));
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className} aria-label={`${end}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection({ className }: StatsSectionProps) {
  return (
    <Section className={cn("pt-20 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24", className)}>
      <div className="max-w-container mx-auto px-4 md:px-0">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">Numbers Matter...</h2>
        <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10">
          PowerData+ connects 825m US records across 2,000 publishers and grows by 8–12m new records every month.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 text-center flex flex-col items-center">
            <CountUp end={825} suffix="m" className="text-5xl sm:text-6xl font-semibold tracking-tight text-white" />
            <div className="mt-3 text-xl sm:text-2xl text-muted-foreground">US Records</div>
          </div>
          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 text-center flex flex-col items-center">
            <CountUp end={2000} className="text-5xl sm:text-6xl font-semibold tracking-tight text-white" />
            <div className="mt-3 text-xl sm:text-2xl text-muted-foreground">Publishers</div>
          </div>
          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
              <CountUp end={8} suffix="m" />
              <span className="mx-1">-</span>
              <CountUp end={12} suffix="m" />
            </div>
            <div className="mt-3 text-xl sm:text-2xl text-muted-foreground">New Records Monthly</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
