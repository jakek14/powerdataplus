import { ReactNode } from "react";

import Dashboard3D from "../../ui/3d-dashboard";
import { GlowingEffect } from "../../ui/glowing-effect";
import RevenueLineGraph from "../../ui/RevenueLineGraph";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Transform Your Website Visitors Into Revenue",
  items: _items = false,
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-8">
        <h2 className="max-w-[800px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        
        {/* First Card - Text Left, Image Right */}
        <div className="relative w-full max-w-6xl glass-3 hover:glass-4 rounded-2xl border border-border/70 dark:border-border/5 dark:border-t-border/15 bg-card p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform-gpu mt-16">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-card-foreground sm:text-3xl">
                Visitor Recognition
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a single pixel, knownvisitors.com reveals the full picture of your website traffic — surfacing both known customers and previously anonymous visitors as they arrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">Real-time visitor identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">No form submissions required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">Instant lead generation</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-[#1da84f]/20 to-[#2dbb5f]/20 rounded-xl border border-[#1da84f]/30 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">👥</div>
                  <p className="text-[#1da84f] font-medium">Visitor Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card - Image Left, Text Right */}
        <div className="relative w-full max-w-6xl glass-3 hover:glass-4 rounded-2xl border border-border/70 dark:border-border/5 dark:border-t-border/15 bg-card p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform-gpu mt-16">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-md h-64 flex items-center justify-center">
                <RevenueLineGraph selectedTimeFrame="Monthly" />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-card-foreground sm:text-3xl">
                Capture Hidden Revenue
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Many of your highest-value shoppers never log in.

Now you can identify these anonymous browsers and deliver 5x more personalized outreach — from emails and texts to push notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">Company intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">Role-based targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1da84f]"></div>
                  <span className="text-sm font-medium">Engagement scoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Third Card Container - Aligned Left */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-start gap-8 mt-16">
          {/* Third Card - Half Width */}
          <div className="w-full lg:max-w-xl p-8 order-1 lg:order-1">
            <div className="space-y-8 min-h-[400px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-card-foreground sm:text-3xl">
                    Data you can act on, instantly
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Your dashboard shouldn&apos;t just display numbers — it should unlock insight.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-card-foreground">
                      See Emails, Phone Numbers, and More
                    </h4>
                    <p className="text-muted-foreground">
                      Instantly access verified customer data, from contact info to behavioral traits.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-card-foreground">
                      Uncover Postal Codes and Location
                    </h4>
                    <p className="text-muted-foreground">
                      Localize outreach and segment based on visitor geography.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-card-foreground">
                      Filter, Sort, and Export
                    </h4>
                    <p className="text-muted-foreground">
                      Use smart filters or export enriched data to your CRM, ESP, or ad platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Dashboard Component - Positioned to the Right */}
          <div className="w-full lg:max-w-2xl order-2 lg:order-2">
            <Dashboard3D />
          </div>
        </div>
      </div>
    </Section>
  );
}
