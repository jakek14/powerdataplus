import { DisplayCards } from "@/components/ui/display-cards";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const sampleCards = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Visitor Recognition",
    description: "John Smith visited your pricing page",
    date: "2 minutes ago",
    iconClassName: "text-blue-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Revenue Growth",
    description: "Sarah Johnson added items to cart",
    date: "5 minutes ago",
    iconClassName: "text-green-600"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Lead Conversion",
    description: "Mike Davis viewed your demo video",
    date: "8 minutes ago",
    iconClassName: "text-purple-600"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Engagement Boost",
    description: "Lisa Wilson spent 5 minutes on site",
    date: "12 minutes ago",
    iconClassName: "text-orange-600"
  }
];

export default function DisplayCardsDemo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Real-time Visitor Activity
          </h2>
          <p className="text-muted-foreground text-lg">
            See who&apos;s visiting your site right now
          </p>
        </div>
        <div className="flex justify-center">
          <DisplayCards cards={sampleCards} />
        </div>
      </div>
    </section>
  );
} 