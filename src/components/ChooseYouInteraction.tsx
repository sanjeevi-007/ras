import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeartBurst {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const stages = [
  {
    response: "If I had to live every day all over again…",
    buttonText: "Click to find out ♡",
  },
  {
    response: "I'd choose you.",
    buttonText: "Again?",
  },
  {
    response: "You.",
    buttonText: "And again?",
  },
  {
    response: "Still you.",
    buttonText: "One more time?",
  },
  {
    response: "Always you.",
    buttonText: "What about bad days?",
  },
  {
    response: "Even when you're being impossible.",
    handwrittenTag: "especially then.",
    buttonText: "Always & Forever ♡",
  },
];

export default function ChooseYouInteraction() {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [heartBursts, setHeartBursts] = useState<HeartBurst[]>([]);
  const prefersReduced = useReducedMotion();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Spawn subtle floating hearts from button click location
    if (!prefersReduced) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const newHearts: HeartBurst[] = Array.from({ length: 4 }).map((_, i) => ({
        id: Date.now() + i,
        x: centerX + (Math.random() * 60 - 30),
        y: centerY - 10,
        size: Math.floor(Math.random() * 8) + 12,
        color: ['#D4AF37', '#C9A9A6', '#F2E0D6', '#6B2D3E'][i % 4],
      }));

      setHeartBursts((prev) => [...prev, ...newHearts]);

      // Clear hearts after animation
      setTimeout(() => {
        setHeartBursts((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
      }, 1500);
    }

    // Advance to next stage (loops back smoothly once reached final)
    setCurrentStage((prev) => (prev < stages.length - 1 ? prev + 1 : 1));
  };

  const activeStage = stages[currentStage];
  const isFinalStage = currentStage === stages.length - 1;

  return (
    <section
      id="choose"
      data-section="choose"
      className="relative min-h-screen py-28 px-6 sm:px-12 flex flex-col items-center justify-center text-center select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/25 to-dark-bg"
    >
      {/* Background radial spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.3)_0%,rgba(201,169,166,0.15)_45%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Floating interactive reaction hearts */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
        {heartBursts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 1, scale: 0.6, x: h.x, y: h.y }}
            animate={{
              opacity: 0,
              scale: 1.3,
              y: h.y - 75 - Math.random() * 40,
              x: h.x + (Math.random() * 40 - 20),
            }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="fixed pointer-events-none"
            style={{ color: h.color }}
          >
            <Heart size={h.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-champagne"
          >
            No Hesitation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight"
          >
            Do you know what I'd choose?
          </motion.h2>
        </div>

        {/* Dynamic Interactive Response Box */}
        <div className="min-h-[140px] sm:min-h-[170px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: prefersReduced ? 0.2 : 0.45 }}
              className="space-y-4"
            >
              <p
                className={`font-serif tracking-wide leading-snug ${
                  currentStage === 0
                    ? 'text-lg sm:text-xl text-muted-text italic'
                    : isFinalStage
                    ? 'text-3xl sm:text-5xl text-gradient font-medium'
                    : 'text-3xl sm:text-5xl md:text-6xl text-ivory font-normal'
                }`}
              >
                {activeStage.response}
              </p>

              {/* Handwritten sub-tag on final stage */}
              {isFinalStage && activeStage.handwrittenTag && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="font-handwritten text-3xl sm:text-4xl text-dusty-rose"
                >
                  {activeStage.handwrittenTag}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Button Sequence */}
        <div className="pt-2">
          <motion.button
            type="button"
            onClick={handleButtonClick}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative px-8 py-3.5 rounded-full text-base font-serif tracking-wide border border-champagne/40 bg-dark-warm/70 backdrop-blur-md text-champagne hover:text-champagne-light hover:border-champagne hover:bg-dark-warm shadow-[0_0_20px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-champagne/60 transition-all duration-300"
            aria-label="Advance choice sequence"
          >
            <span className="flex items-center gap-2">
              <span>{activeStage.buttonText}</span>
              <Heart
                size={15}
                className="text-dusty-rose fill-dusty-rose/40 group-hover:scale-110 transition-transform"
              />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
