import BentoGridSection from "../components/sections/bento-grid/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import ValuePropSection from "../components/sections/value-prop/default";
import DarkModeLogo from "../components/logos/darkmode-logo";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="flex justify-center py-4">
        <DarkModeLogo className="w-[500px] h-32" />
      </div>
      <Hero />
      <ValuePropSection />
      <Items />
      <BentoGridSection />
      <Footer />
    </main>
  );
}
