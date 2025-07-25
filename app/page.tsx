import BentoGridSection from "../components/sections/bento-grid/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import TimelineSection from "../components/sections/timeline/default";
import { AnimatedSection } from "../components/ui/animated-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      
      {/* Logos Section - Fade in from left */}
      <AnimatedSection animation="fadeInLeft" delay={0.2}>
        <Logos />
      </AnimatedSection>
      
      {/* Timeline Section - Slide up with scale */}
      <AnimatedSection animation="slideInUp" delay={0.3}>
        <TimelineSection />
      </AnimatedSection>
      
      {/* Items Section - Fade in from right */}
      <AnimatedSection animation="fadeInRight" delay={0.4}>
        <Items />
      </AnimatedSection>
      
      {/* Bento Grid Section - Scale in */}
      <AnimatedSection animation="scaleIn" delay={0.5}>
        <BentoGridSection />
      </AnimatedSection>
      
      {/* Footer - Fade in up */}
      <AnimatedSection animation="fadeInUp" delay={0.6}>
        <Footer />
      </AnimatedSection>
    </main>
  );
}
