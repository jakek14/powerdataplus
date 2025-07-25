"use client";

import { useState } from "react";

export interface DisplayCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export const DisplayCards: React.FC<DisplayCardsProps> = ({ cards }) => {
  const overlap = 32; // Reduced for better fit
  const angleStep = 2; // Reduced rotation
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative w-full max-w-full mx-auto mb-4 overflow-visible" style={{ minHeight: 160 + (cards.length - 1) * 16 }}>
      {cards.map((card, idx) => {
        const isHovered = hovered === idx;
        return (
          <div
            key={idx}
            className={`absolute left-0 top-0 bg-gradient-to-br from-card via-background to-card rounded-xl border border-border p-3 flex flex-col gap-2 cursor-pointer w-full text-left overflow-visible transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'shadow-xl' : 'shadow-lg'} ${card.className ?? ''}`}
            style={{
              zIndex: isHovered ? 50 : 10 + idx,
              transform: isHovered
                ? `translateY(${idx * overlap - 16}px) scale(1.03) rotate(${(idx - 1) * angleStep}deg)`
                : `translateY(${idx * overlap}px) scale(0.97) rotate(${(idx - 1) * angleStep}deg)`,
              borderLeft: '4px solid #1da84f',
              ...((isHovered ? { boxShadow: '0 8px 32px 0 rgba(29,168,79,0.15)' } : {})),
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* Avatar with initials */}
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shadow-sm border border-primary/30">
                {(() => {
                  const match = card.description.match(/([A-Z])[a-z]+\s([A-Z])[a-z]+/i);
                  return match ? match.slice(1, 3).join("") : "?";
                })()}
              </div>
              <span className={`ml-1 text-lg ${card.iconClassName ?? ''}`}>{card.icon}</span>
            </div>
            <div className={`text-lg font-semibold mb-1 ${card.titleClassName ?? ''}`}>{card.title}</div>
            <div className="text-muted-foreground text-sm mb-2 leading-relaxed">{card.description}</div>
            <div className="text-sm text-muted-foreground/70 mt-auto">{card.date}</div>
          </div>
        );
      })}
    </div>
  );
}; 