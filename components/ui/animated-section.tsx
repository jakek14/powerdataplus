"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
}

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  slideInUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  }
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "",
  animation = "fadeInUp" 
}: AnimatedSectionProps) {
  const selectedAnimation = animations[animation]
  
  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 