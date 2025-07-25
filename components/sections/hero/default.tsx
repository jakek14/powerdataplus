import { ReactNode } from "react";

import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { HeroMemberList } from "../../ui/hero-member-list";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Turn Anonymous Visitors Into Sales",
  description = "KnownVisitors identifies your anonymous website visitors even if they never filled out a form. Transform lost traffic into actionable contact data.",
  mockup = <HeroMemberList />,
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        New version of KnownVisitors is out!
      </span>
    </Badge>
  ),
  buttons: _buttons = false,
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {/* Email Input and Waitlist Button */}
          <div className="animate-appear relative z-10 flex flex-col sm:flex-row gap-4 max-w-md w-full opacity-0 delay-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1da84f]/50 focus:border-[#1da84f] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1da84f]/20"
            />
            <Button
              variant="default"
              size="lg"
              className="bg-[#1da84f] hover:bg-[#1da84f]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1da84f]/30 transform"
            >
              Join the Waitlist
            </Button>
          </div>
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
