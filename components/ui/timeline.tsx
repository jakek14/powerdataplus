"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TimelineStep {
  number: number
  title: string
  description: string
}

const steps: TimelineStep[] = [
  {
    number: 1,
    title: "Add the Pixel",
    description: "Copy your KnownVisitors pixel into your site's <head> or use your tag manager."
  },
  {
    number: 2,
    title: "Capture Visitors",
    description: "Identify anonymous and known users in real time."
  },
  {
    number: 3,
    title: "Use Your Tools",
    description: "Sync with Klaviyo, Google, Meta, and more."
  },
  {
    number: 4,
    title: "Boost Conversions",
    description: "Retarget high-intent visitors with emails, ads, and automation."
  }
]

export function Timeline() {
  const [currentStep, setCurrentStep] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  // Auto-center on scroll end
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        // Find the card closest to the center
        const containerRect = container.getBoundingClientRect()
        let minDist = Infinity
        let closestIdx = 0
        cardRefs.current.forEach((card, idx) => {
          if (!card) return
          const cardRect = card.getBoundingClientRect()
          const cardCenter = cardRect.left + cardRect.width / 2
          const containerCenter = containerRect.left + containerRect.width / 2
          const dist = Math.abs(cardCenter - containerCenter)
          if (dist < minDist) {
            minDist = dist
            closestIdx = idx
          }
        })
        // Center the closest card
        cardRefs.current[closestIdx]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        setCurrentStep(closestIdx)
      }, 100)
    }
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToStep = (stepIndex: number) => {
    if (cardRefs.current[stepIndex]) {
      cardRefs.current[stepIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      setCurrentStep(stepIndex)
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      scrollToStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      scrollToStep(currentStep - 1)
    }
  }

  return (
    <div className="relative w-full py-2 px-2">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 lg:gap-x-8">
          {/* Global Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[#1da84f]/30 via-[#1da84f]/50 to-[#1da84f]/30">
            {/* Pulsing Wave Animation */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-transparent via-[#1da84f] to-transparent animate-wave-pulse" />
          </div>
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Timeline Step */}
              <div className="relative flex flex-col items-center w-full h-full">
                {/* Clean Rectangular Step Label */}
                <div className="relative mb-8 z-20">
                  <div className="px-4 py-2 bg-[#1da84f]/10 border border-[#1da84f]/30 rounded-lg backdrop-blur-sm">
                    <span className="text-[#1da84f] font-medium text-sm tracking-wide">
                      Step {step.number}
                    </span>
                  </div>
                </div>
                {/* Step Content Container */}
                <div className="w-full h-full flex flex-col flex-1">
                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white text-center mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  {/* Consistent Height Card */}
                  <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group min-h-[120px] flex items-center justify-center">
                    <p className="text-neutral-300 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide min-w-0" ref={scrollContainerRef}>
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={el => { cardRefs.current[index] = el; }}
                className="flex flex-col items-center w-[90vw] max-w-xs flex-shrink-0"
              >
                {/* Timeline Step */}
                <div className="relative flex flex-col items-center w-full h-full">
                  {/* Clean Rectangular Step Label */}
                  <div className="relative mb-3 z-20">
                    <div className="px-3 py-1.5 bg-[#1da84f]/10 border border-[#1da84f]/30 rounded-lg backdrop-blur-sm">
                      <span className="text-[#1da84f] font-medium text-xs tracking-wide">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                  {/* Step Content Container */}
                  <div className="w-full h-full flex flex-col flex-1">
                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white text-center mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    {/* Consistent Height Card */}
                    <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group min-h-[120px] flex items-center justify-center">
                      <p className="text-neutral-300 text-base leading-relaxed text-center px-2 whitespace-normal break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-2">
            <button
              onClick={prevStep}
              className="p-2 rounded-full bg-[#1da84f]/20 border border-[#1da84f]/40 text-[#1da84f] hover:bg-[#1da84f]/30 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextStep}
              className="p-2 rounded-full bg-[#1da84f]/20 border border-[#1da84f]/40 text-[#1da84f] hover:bg-[#1da84f]/30 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 