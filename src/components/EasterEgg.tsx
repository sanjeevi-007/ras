import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { easterEggs } from '../data/easterEggs';

/**
 * EasterEgg Component
 * Purpose: Hidden surprises and secret interactions placed around the website,
 * rewarding Rasgulla when she explores details or clicks small triggers.
 */
const EasterEgg: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const handleHeartClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      const egg = easterEggs.find((e) => e.trigger === 'heart-click-5');
      if (egg) {
        setActiveMessage(egg.message);
        setTimeout(() => setActiveMessage(null), 4000);
      }
    }
  };

  return (
    <div
      data-section="easter-egg"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3"
    >
      <button
        type="button"
        onClick={handleHeartClick}
        aria-label="Secret sweet heart"
        className="w-8 h-8 rounded-full bg-dark-warm/50 border border-dusty-rose/20 text-dusty-rose/60 hover:text-dusty-rose hover:scale-110 flex items-center justify-center transition-all"
      >
        <Heart size={14} fill="currentColor" />
      </button>

      {activeMessage && (
        <div className="px-3 py-1.5 rounded-lg bg-dark-warm/95 border border-champagne/40 text-champagne text-xs font-serif shadow-xl animate-fade-in">
          {activeMessage}
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
