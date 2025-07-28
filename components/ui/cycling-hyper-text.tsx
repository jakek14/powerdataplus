"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CyclingHyperTextProps {
  words: string[];
  duration?: number;
  cycleDuration?: number;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function CyclingHyperText({
  words,
  duration = 800,
  cycleDuration = 3000,
  className,
  animateOnLoad = true,
}: CyclingHyperTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [trigger, setTrigger] = useState(true);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    setDisplayText(words[0].split("").map(() => alphabets[getRandomInt(26)]));
  }, [words]);

  useEffect(() => {
    if (animateOnLoad && isFirstRender.current) {
      triggerAnimation();
      isFirstRender.current = false;
    }
  }, [animateOnLoad]);

  useEffect(() => {
    const totalSteps = 20;
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
          setDisplayText(currentWord.split(""));
          setTrigger(false);
          clearInterval(interval);
        }
      },
      stepInterval,
    );
    return () => clearInterval(interval);
  }, [currentWord, duration, trigger, animateOnLoad]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
    }, cycleDuration);

    return () => clearInterval(cycleInterval);
  }, [currentWordIndex, words, cycleDuration]);

  useEffect(() => {
    if (currentWord) {
      setDisplayText(currentWord.split(""));
      triggerAnimation();
    }
  }, [currentWord]);

  return (
    <div className="flex scale-100 cursor-default overflow-hidden py-2">
      {displayText.map((letter, i) => (
        <span
          key={i}
          className={cn("font-mono", letter === " " ? "w-3" : "", className)}
        >
          {letter.toUpperCase()}
        </span>
      ))}
    </div>
  );
} 