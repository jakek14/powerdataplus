"use client";

import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ValuePropSectionProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValuePropSection({ className }: ValuePropSectionProps) {
  return (
    <Section className={cn("pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20", className)}>
      <div className="max-w-container mx-auto px-4 md:px-0">
        {/* Top cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* Card 1 */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(29,168,79,0.35)] hover:border-[#1da84f]/40"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Precisely Targeted Audiences</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Reach the right people with your message and reduce wasted marketing spend by focusing only on the most relevant prospects.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(29,168,79,0.35)] hover:border-[#1da84f]/40"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Competitive Rates</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              We’ll match competitor pricing and offer volume-based discounts, giving you the best value for your investment.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(29,168,79,0.35)] hover:border-[#1da84f]/40"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Clean, Reliable Data</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Our postal, phone, and email records are continuously refined through strict verification processes to ensure accuracy and freshness.
            </p>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(29,168,79,0.35)] hover:border-[#1da84f]/40"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Fast & Secure File Access</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Easily retrieve your files anytime, anywhere through our safe and convenient client portal.
            </p>
          </motion.div>
        </motion.div>

        {/* Large bottom box */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 sm:p-8 md:p-10 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_16px_56px_-14px_rgba(29,168,79,0.3)] hover:border-[#1da84f]/40"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="h-[260px] sm:h-[320px] md:h-[380px] w-full flex items-center justify-center text-muted-foreground text-sm sm:text-base">
            Placeholder content area
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
