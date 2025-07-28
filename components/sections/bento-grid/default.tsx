"use client"

import { motion } from "framer-motion";
import BentoGridDemo from "../../bento-grid-demo";
import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";

interface BentoGridSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function BentoGridSection({
  title = "Powerful Features",
  description = "Discover what makes KnownVisitors the ultimate visitor identification platform",
  className,
}: BentoGridSectionProps) {
  return (
    <Section className={cn("px-0 py-6 sm:py-12 md:py-16", className)}>
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <motion.div 
          className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p 
              className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
        <motion.div variants={itemVariants}>
          <BentoGridDemo />
        </motion.div>
      </motion.div>
      </div>
    </Section>
  );
} 