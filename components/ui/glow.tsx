import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), "glow-soft", className)}
      {...props}
    >
      {/* Large ambient glow for seamless edges */}
      <div
        className={cn(
          "from-[#1da84f]/8 to-transparent absolute left-1/2 h-[800px] w-[120%] -translate-x-1/2 scale-[1.05] rounded-[50%] bg-radial from-0% to-90% opacity-15 sm:h-[1000px] dark:opacity-25",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      {/* Soft primary glow with large fade */}
      <div
        className={cn(
          "from-[#1da84f]/25 to-transparent absolute left-1/2 h-[500px] w-[100%] -translate-x-1/2 scale-[1.1] rounded-[50%] bg-radial from-5% to-85% opacity-20 sm:h-[700px] dark:opacity-35",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      {/* Medium glow for depth */}
      <div
        className={cn(
          "from-[#1da84f]/20 to-transparent absolute left-1/2 h-[300px] w-[80%] -translate-x-1/2 scale-[1.3] rounded-[50%] bg-radial from-10% to-75% opacity-18 sm:h-[450px] dark:opacity-30",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      {/* Subtle center highlight */}
      <div
        className={cn(
          "from-[#1da84f]/15 to-transparent absolute left-1/2 h-[150px] w-[50%] -translate-x-1/2 scale-[1.5] rounded-[50%] bg-radial from-20% to-60% opacity-15 sm:h-[250px] dark:opacity-25",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
}

export default Glow;
