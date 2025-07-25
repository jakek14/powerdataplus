"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface CyclingHyperTextProps {
  words: string[];
  duration?: number;
  cycleDuration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function CyclingHyperText({
  words,
  duration = 800,
  cycleDuration = 3000,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: CyclingHyperTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0].split("").map(() => alphabets[getRandomInt(26)]));
  const [trigger, setTrigger] = useState(true);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  const currentWord = words[currentWordIndex];

  // Initialize with first word animation
  useEffect(() => {
    if (animateOnLoad && isFirstRender.current) {
      triggerAnimation();
      isFirstRender.current = false;
    }
  }, [animateOnLoad]);

  useEffect(() => {
    const totalSteps = 20; // Fixed number of steps for all words
    const stepInterval = duration / totalSteps;
    
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        
        const progress = interations.current / totalSteps;
        const currentIndex = Math.floor(progress * currentWord.length);
        
        if (interations.current < totalSteps) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i < currentIndex
                  ? currentWord[i]
                  : alphabets[getRandomInt(26)],
            ),
          );
          interations.current = interations.current + 1;
        } else {
          // Ensure the final word is completely revealed
          setDisplayText(currentWord.split(""));
          setTrigger(false);
          clearInterval(interval);
        }
      },
      stepInterval,
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [currentWord, duration, trigger, animateOnLoad]);

  // Cycle through words
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
      // Don't immediately change displayText, let the animation handle it
    }, cycleDuration);

    return () => clearInterval(cycleInterval);
  }, [currentWordIndex, words, cycleDuration]);

  // Trigger animation when word changes
  useEffect(() => {
    if (currentWord) {
      setDisplayText(currentWord.split(""));
      triggerAnimation();
    }
  }, [currentWord]);

  return (
    <div
      className="inline-flex scale-100 cursor-default overflow-hidden"
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={`${currentWordIndex}-${i}`}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
} 