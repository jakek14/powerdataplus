import { Section } from "../../ui/section"
import { Timeline } from "../../ui/timeline"

interface TimelineSectionProps {
  className?: string
}

export default function TimelineSection({ className }: TimelineSectionProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-0 mt-0 sm:-mt-48">
        {/* Timeline Component */}
        <Timeline />
      </div>
    </Section>
  )
} 