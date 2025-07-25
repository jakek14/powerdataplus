import { Section } from "../../ui/section"
import { SetupGuide } from "../../ui/setup-guide"

interface SetupGuideSectionProps {
  className?: string
}

export default function SetupGuideSection({ className }: SetupGuideSectionProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight max-w-4xl mx-auto mb-4">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Set up KnownVisitors on your website in minutes and start identifying anonymous visitors immediately.
          </p>
        </div>
        
        {/* Setup Guide Component */}
        <SetupGuide />
      </div>
    </Section>
  )
} 