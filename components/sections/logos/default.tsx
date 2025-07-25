"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Logos({
  title = "Why Guess Who's on Your Site?",
  badge = false,
  logos = false,
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <motion.div 
        className="max-w-container mx-auto flex flex-col items-center gap-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex flex-col items-center gap-6"
          variants={itemVariants}
        >
          {badge !== false && badge}
          <motion.h2 
            className="text-xl font-semibold sm:text-3xl md:text-4xl max-w-6xl text-center leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transform your website visitors into actionable leads with our seamless setup process.
          </motion.p>
        </motion.div>
        {logos !== false && logos.length > 0 && (
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8"
            variants={containerVariants}
          >
            {logos.map((logo: ReactNode, i: number) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}
