import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import { Section } from "../../ui/section";
import BentoGridDemo from "../../bento-grid-demo";

interface BentoGridSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function BentoGridSection({
  title = "Powerful Features",
  description = "Discover what makes KnownVisitors the ultimate visitor identification platform",
  className,
}: BentoGridSectionProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <div className="text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight max-w-4xl mx-auto">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <BentoGridDemo />
      </div>
    </Section>
  );
} 