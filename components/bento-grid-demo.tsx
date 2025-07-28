"use client";


import {
  IconBrain,
  IconChartBar,
  IconEye,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Dashboard3D from "./ui/3d-dashboard";
import ImageAutoSlider from "./ui/image-auto-slider";
import { TiltedScroll } from "./ui/tilted-scroll";
import { LockAnimation } from "./ui/lock-animation";

import { cn } from "@/lib/utils";

export default function BentoGridDemo() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden space-y-12">
      {/* Top 3 vertical cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center px-4 md:px-0 overflow-hidden">
        {topCards.map((item, i) => (
          <div key={`top-${i}`} className={cn("md:w-96 h-[32rem]", item.className)}>
            <div className="group/bento glass-2 hover:glass-3 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border/70 dark:border-border/5 dark:border-t-border/15 bg-card p-6 transition duration-200 hover:shadow-xl dark:shadow-none after:content-[''] after:absolute after:-top-[64px] after:left-1/2 after:h-[64px] after:w-[80%] after:-translate-x-1/2 after:rounded-[50%] after:bg-[#1da84f]/20 after:blur-[36px] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 h-full">
              <div className="transition duration-200 group-hover/bento:translate-x-2">
                <div className="mt-2 mb-2 font-sans font-bold text-card-foreground text-xl">
                  {item.title}
                </div>
                <div className="font-sans text-xs font-normal text-muted-foreground">
                  {item.description}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.header}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Data you can act on section */}
      <div className="w-full max-w-[100vw] md:max-w-6xl mx-auto flex flex-col lg:flex-row justify-start gap-8 mt-16 px-4 md:px-0 overflow-hidden">
        {/* 3D Dashboard Component - Positioned to the Left */}
        <div className="w-full lg:max-w-2xl order-1 lg:order-1">
          <Dashboard3D />
        </div>
        
        {/* Text Content - Positioned to the Right */}
        <div className="w-full lg:max-w-xl p-4 md:p-8 order-2 lg:order-2">
          <div className="space-y-6 md:space-y-8 min-h-[300px] md:min-h-[400px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground sm:text-3xl">
                  Complete Data Solutions. Smarter Outcomes.
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  We help you unlock the full value of your data with powerful enrichment, hygiene, and monetization tools — all in one place.
                </p>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-base md:text-lg font-semibold text-card-foreground">
                    Data Sales
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Access high-quality, compliant data to grow your pipeline fast.
                  </p>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-base md:text-lg font-semibold text-card-foreground">
                    Data Append
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Fill in missing fields like emails, phone numbers, and firmographics to complete your records.
                  </p>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-base md:text-lg font-semibold text-card-foreground">
                    Data Hygiene
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Keep your database clean, accurate, and up-to-date with real-time validation and deduplication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border/70 dark:border-border/5 p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border/70 dark:border-border/5 p-2 items-center space-x-2 w-3/4 ml-auto bg-card"
      >
        <div className="w-full bg-muted h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border/70 dark:border-border/5 p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  // Fixed width values to prevent hydration errors
  const widthValues = [85, 65, 90, 45, 75, 60];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: widthValues[i] + "%",
          }}
          className="flex flex-row rounded-full border border-border/70 dark:border-border/5 p-2 items-center space-x-2 bg-muted w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #1da84f, #2dbb5f, #3dce6f, #4de17f)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border/70 dark:border-border/5 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] flex items-center justify-center text-white font-bold">
          A
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Anonymous Visitor
        </p>
        <p className="border border-[#1da84f] bg-[#1da84f]/10 text-[#1da84f] text-xs rounded-full px-2 py-0.5 mt-4">
          Identified
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-card p-4 border border-border/70 dark:border-border/5 flex flex-col items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] flex items-center justify-center text-white font-bold">
          K
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Known Visitor
        </p>
        <p className="border border-[#2dbb5f] bg-[#2dbb5f]/10 text-[#2dbb5f] text-xs rounded-full px-2 py-0.5 mt-4">
          Tracked
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border/70 dark:border-border/5 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] flex items-center justify-center text-white font-bold">
          L
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Lead Generated
        </p>
        <p className="border border-[#3dce6f] bg-[#3dce6f]/10 text-[#3dce6f] text-xs rounded-full px-2 py-0.5 mt-4">
          Converted
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-border/70 dark:border-border/5 p-2 items-start space-x-2 bg-card"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] flex items-center justify-center text-white font-bold">
          V
        </div>
        <p className="text-xs text-muted-foreground">
          Visitor from Google Analytics identified as John Doe from Acme Corp...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border/70 dark:border-border/5 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-card"
      >
        <p className="text-xs text-muted-foreground">Lead captured!</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1da84f] to-[#2dbb5f] shrink-0" />
      </motion.div>
    </motion.div>
  );
};



const topCards = [
  {
    title: "Your Hidden Funnel Just Got Exposed",
    description: (
      <span className="text-lg">
        You&apos;re only seeing a fraction of your funnel. KnownVisitors uncovers who&apos;s actually moving through it.
      </span>
    ),
    header: <LockAnimation size={0.8} />,
    className: "md:col-span-1",
    icon: <IconEye className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Effortless List Growth",
    description: (
      <span className="text-lg">
        Grow your email and SMS lists with real, high-intent contacts — without relying on popups or gated content.
      </span>
    ),
    header: <TiltedScroll />,
    className: "md:col-span-1",
    icon: <IconChartBar className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Fits Right Into Your Workflow",
    description: (
      <span className="text-lg">
        No need to change your tools — just enhance them. KnownVisitors plugs into your existing marketing setup.
      </span>
    ),
    header: <div className="w-full h-full flex items-center justify-center overflow-hidden"><ImageAutoSlider /></div>,
    className: "md:col-span-1",
    icon: <IconTarget className="h-4 w-4 text-[#1da84f]" />,
  },
]; 