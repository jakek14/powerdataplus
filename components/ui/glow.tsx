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
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "from-[#1da84f]/15 to-[#1da84f]/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[1.5] rounded-[50%] bg-radial from-10% to-60% opacity-5 sm:h-[256px] dark:opacity-25",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "from-[#1da84f]/10 to-[#1da84f]/0 absolute left-1/2 h-[64px] w-[30%] -translate-x-1/2 scale-150 rounded-[50%] bg-radial from-10% to-60% opacity-5 sm:h-[128px] dark:opacity-25",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
}

export default Glow;
