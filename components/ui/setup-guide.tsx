"use client"

import React from 'react'

interface SetupStep {
  number: number
  title: string
  description: string
}

const steps: SetupStep[] = [
  {
    number: 1,
    title: "Add the Pixel",
    description: "Copy and paste our tracking pixel into your website's header section."
  },
  {
    number: 2,
    title: "Verify Installation",
    description: "Check your dashboard to confirm the pixel is working correctly."
  },
  {
    number: 3,
    title: "Configure Settings",
    description: "Set up your preferences and customize tracking parameters."
  },
  {
    number: 4,
    title: "Start Tracking",
    description: "Begin identifying visitors and collecting valuable insights."
  }
]

export function SetupGuide() {
  return (
    <div className="relative w-full py-16 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-green-50/30" />
      
      {/* Animated Connection Line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1da84f]/30 to-transparent animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 flex flex-col items-center">
              {/* Step Indicator */}
              <div className="relative mb-6">
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-14 w-16 h-0.5 bg-gradient-to-r from-[#1da84f] to-[#1da84f]/50" />
                )}
                
                {/* Circular Badge */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#1da84f] to-[#2dbb5f] rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1da84f]/20 to-transparent rounded-full blur-sm" />
                </div>
              </div>
              
              {/* Step Content */}
              <div className="w-full max-w-sm">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                  {step.title}
                </h3>
                
                {/* Frosted Glass Card */}
                <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 