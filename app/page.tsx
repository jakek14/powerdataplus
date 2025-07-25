import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import SharedTest from "../components/sections/shared-test/default";
import BentoGridSection from "../components/sections/bento-grid/default";
import TimelineSection from "../components/sections/timeline/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <TimelineSection />
      <Items />
      <BentoGridSection />
      {/* <Stats /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <SharedTest /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
