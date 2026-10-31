import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { easterEggs } from '../data/easterEggs';

export default function EasterEgg() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showCornerNote, setShowCornerNote] = useState<boolean>(false);

  // Auto dismiss toast after 4 seconds
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleHeartClick = () => {
    const next = clickCount + 1;
    setClickCount(next);

    if (next === 5) {
      const egg = easterEggs.find((e) => e.trigger === 'heart-click-5');
      setToastMessage(egg ? egg.message : "Okay fine. I really, really like you. ♡");
    } else if (next > 5 && next % 5 === 0) {
      setToastMessage("Still clicking? Yes, I still love you. ♡");
    }
  };

  const handleRasgullaSecret = (e: React.MouseEvent) => {
    e.stopPropagation();
    const egg = easterEggs.find((e) => e.trigger === 'hidden-rasgulla');
    setToastMessage(egg ? egg.message : "You found the Rasgulla! 🍬");
  };

  return (
    <>
      {/* Toast Notification Container */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto px-5 py-3 rounded-2xl bg-dark-warm/95 border border-champagne text-champagne text-sm font-serif shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2"
              role="alert"
            >
              <Heart size={14} className="fill-champagne text-champagne flex-shrink-0 animate-pulse" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Secret Floating Corner Interaction (Bottom-Left) */}
      <aside
        data-section="easter-egg"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Heart Click Trigger (Secret 1) */}
        <button
          type="button"
          onClick={handleHeartClick}
          aria-label="Secret sweet heart"
          title="A secret little heart"
          className="w-10 h-10 rounded-full bg-dark-warm/60 border border-dusty-rose/25 text-dusty-rose/60 hover:text-dusty-rose hover:border-champagne/40 hover:scale-110 flex items-center justify-center transition-all duration-300 backdrop-blur-sm focus:outline-none"
        >
          <Heart size={15} fill="currentColor" />
        </button>

        {/* Hidden Rasgulla Candy Button (Secret 2) */}
        <button
          type="button"
          onClick={handleRasgullaSecret}
          title="Hidden Rasgulla"
          className="opacity-40 hover:opacity-100 transition-opacity text-sm hover:scale-110 focus:outline-none"
          aria-label="Hidden Rasgulla secret"
        >
          🍬
        </button>

        {/* Subtle Corner Note (Secret 3) */}
        <div
          onMouseEnter={() => setShowCornerNote(true)}
          onMouseLeave={() => setShowCornerNote(false)}
          onClick={() => setShowCornerNote((prev) => !prev)}
          className="cursor-pointer font-mono text-[10px] text-muted-text/40 hover:text-champagne transition-colors pl-1"
          role="button"
          tabIndex={0}
          aria-label="Secret corner note"
        >
          {showCornerNote ? (
            <span className="font-handwritten text-xs text-dusty-rose">
              P.S. you're cute.
            </span>
          ) : (
            <span>psst</span>
          )}
        </div>
      </aside>
    </>
  );
}
