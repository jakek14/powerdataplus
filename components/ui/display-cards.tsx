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
            className={`absolute left-0 top-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl border border-gray-200 p-3 flex flex-col gap-2 cursor-pointer w-full text-left overflow-visible transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'shadow-xl' : 'shadow-lg'} ${card.className ?? ''}`}
            style={{
              zIndex: isHovered ? 50 : 10 + idx,
              transform: isHovered
                ? `translateY(${idx * overlap - 16}px) scale(1.03) rotate(${(idx - 1) * angleStep}deg)`
                : `translateY(${idx * overlap}px) scale(0.97) rotate(${(idx - 1) * angleStep}deg)`,
              borderLeft: '4px solid #38bdf8',
              ...((isHovered ? { boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' } : {})),
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* Avatar with initials */}
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shadow-sm border border-blue-200">
                {(() => {
                  const match = card.description.match(/([A-Z])[a-z]+\s([A-Z])[a-z]+/i);
                  return match ? match.slice(1, 3).join("") : "?";
                })()}
              </div>
              <span className={`ml-1 text-lg ${card.iconClassName ?? ''}`}>{card.icon}</span>
            </div>
            <div className={`text-lg font-semibold mb-1 ${card.titleClassName ?? ''}`}>{card.title}</div>
            <div className="text-gray-600 text-sm mb-2 leading-relaxed">{card.description}</div>
            <div className="text-sm text-gray-400 mt-auto">{card.date}</div>
          </div>
        );
      })}
    </div>
  );
}; 