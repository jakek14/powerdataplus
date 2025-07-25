"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconChartBar,
  IconEye,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[24rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
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
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
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

const items = [
  {
    title: "Your Hidden Funnel Just Got Exposed",
    description: (
              <span className="text-sm">
          You&apos;re only seeing a fraction of your funnel. KnownVisitors uncovers who&apos;s actually moving through it.
        </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconEye className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Effortless List Growth",
    description: (
      <span className="text-sm">
        Grow your email and SMS lists with real, high-intent contacts — without relying on popups or gated content.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconChartBar className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Lead Generation",
    description: (
      <span className="text-sm">
        Convert anonymous visitors into qualified leads automatically.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconTarget className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Visitor Journey Tracking",
    description: (
      <span className="text-sm">
        Follow the complete journey from anonymous visitor to known customer.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconUsers className="h-4 w-4 text-[#1da84f]" />,
  },
  {
    title: "Smart Insights",
    description: (
      <span className="text-sm">
        Get AI-powered insights to optimize your marketing and sales strategies.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconBrain className="h-4 w-4 text-[#1da84f]" />,
  },
]; 