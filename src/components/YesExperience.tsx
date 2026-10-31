import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ConfettiPiece {
  id: number;
  x: number; // percentage
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

const celebrationMessages = [
  "YOU SAID YES! ♡",
  "Okay…",
  "I think I need a minute.",
  "Actually…",
  "I'm going to remember this forever.",
  "Welcome to the beginning of our next chapter.",
];

export default function YesExperience() {
  const prefersReduced = useReducedMotion();

  // Deterministic celebratory confetti flakes & hearts
  const confetti: ConfettiPiece[] = useMemo(() => {
    if (prefersReduced) return [];
    const colors = ['#D4AF37', '#F5E6CC', '#C9A9A6', '#F2E0D6', '#FAF7F2', '#6B2D3E'];
    return Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      x: (i * 2.8) % 100,
      size: (i % 3 === 0) ? 14 : Math.floor((i % 4) * 3) + 6,
      color: colors[i % colors.length],
      delay: (i % 6) * 0.3,
      duration: 3.5 + (i % 4),
      rotation: (i * 45) % 360,
    }));
  }, [prefersReduced]);

  const handleScrollToFinal = () => {
    const finalSection = document.getElementById('final');
    if (finalSection) {
      finalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="yes"
      data-section="yes-experience"
      className="relative min-h-screen py-32 sm:py-40 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/35 to-dark-bg flex flex-col items-center justify-center text-center"
    >
      {/* Expanding celebration radial aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(212,175,55,0.4)_0%,rgba(201,169,166,0.2)_45%,transparent_75%)] blur-3xl animate-pulse"
        aria-hidden="true"
      />

      {/* Floating Confetti and celebratory hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: -20, opacity: 1, rotate: c.rotation }}
            animate={{
              y: '105vh',
              x: [0, (c.id % 2 === 0 ? 30 : -30), 0],
              rotate: c.rotation + 360,
              opacity: [0, 1, 1, 0.4, 0],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: `${c.x}%`,
              color: c.color,
            }}
          >
            {c.size > 10 ? (
              <Heart size={c.size} fill="currentColor" opacity={0.8} />
            ) : (
              <div
                className="rounded-sm"
                style={{
                  width: `${c.size}px`,
                  height: `${c.size * 1.5}px`,
                  backgroundColor: c.color,
                  opacity: 0.85,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-12">
        {/* Celebration Header with Radiant Sparkles */}
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-full mx-auto bg-champagne/20 border border-champagne text-champagne flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <Sparkles size={28} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-gradient tracking-tight drop-shadow-[0_0_35px_rgba(212,175,55,0.5)]"
          >
            {celebrationMessages[0]}
          </motion.h2>
        </div>

        {/* Narrative Celebration Sequence */}
        <div className="space-y-6 pt-4 max-w-lg mx-auto">
          {celebrationMessages.slice(1).map((msg, index) => {
            const isLast = index === celebrationMessages.length - 2;

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: prefersReduced ? 0.2 : 0.8,
                  delay: prefersReduced ? 0 : 0.15 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-serif tracking-wide ${
                  isLast
                    ? 'text-2xl sm:text-3xl text-champagne-light font-medium pt-4 border-t border-champagne/20'
                    : index === 0
                    ? 'font-handwritten text-3xl sm:text-4xl text-dusty-rose'
                    : 'text-lg sm:text-xl text-ivory/85 font-light'
                }`}
              >
                {msg}
              </motion.p>
            );
          })}
        </div>

        {/* Smooth Transition Down to Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-8"
        >
          <button
            type="button"
            onClick={handleScrollToFinal}
            className="group px-8 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-dusty-rose border border-dusty-rose/40 hover:border-champagne hover:text-champagne transition-all"
            aria-label="Scroll to final message"
          >
            <span className="flex items-center gap-2">
              <span>Read my final words</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
