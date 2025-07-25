import { ReactNode } from "react";

import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Why Guess Who's on Your Site?",
  badge = false,
  logos = false,
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-xl font-semibold sm:text-3xl md:text-4xl max-w-6xl text-center leading-tight">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your website visitors into actionable leads with our seamless setup process.
          </p>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo: ReactNode, i: number) => (
              <div key={i}>{logo}</div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
