import { Section } from "../../ui/section"
import { Timeline } from "../../ui/timeline"
import { cn } from "@/lib/utils"

interface TimelineSectionProps {
  className?: string
}

export default function TimelineSection({ className }: TimelineSectionProps) {
  return (
    <Section className={cn("py-3 sm:py-6 md:py-1", className)}>
      <div className="max-w-[100vw] md:max-w-container mx-auto flex flex-col items-center gap-0 mt-0 px-4 md:px-0 overflow-hidden">
        {/* Timeline Component */}
        <Timeline />
      </div>
    </Section>
  )
} 