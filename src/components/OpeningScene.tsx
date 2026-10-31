import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface OpeningSceneProps {
  onComplete: () => void;
}

export default function OpeningScene({ onComplete }: OpeningSceneProps) {
  const [step, setStep] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();

  // Timing orchestration
  useEffect(() => {
    if (prefersReduced) {
      // Immediately reach final interactive state if user prefers reduced motion
      const timer = setTimeout(() => setStep(5), 300);
      return () => clearTimeout(timer);
    }

    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 2400);
    const t3 = setTimeout(() => setStep(3), 4200);
    const t4 = setTimeout(() => setStep(4), 5800);
    const t5 = setTimeout(() => setStep(5), 7200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [prefersReduced]);

  const handleOpen = () => {
    if (isExiting) return;
    setIsExiting(true);
  };

  const handleAnimationComplete = () => {
    if (isExiting) {
      onComplete();
    }
  };

  // 6 subtle background embers
  const embers = [
    { top: '25%', left: '20%', size: 2, delay: 0 },
    { top: '70%', left: '15%', size: 3, delay: 1.2 },
    { top: '35%', left: '80%', size: 2.5, delay: 0.6 },
    { top: '65%', left: '75%', size: 1.5, delay: 1.8 },
    { top: '80%', left: '48%', size: 2, delay: 0.9 },
  ];

  return (
    <AnimatePresence>
      <motion.div
        data-section="opening-scene"
        className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg text-ivory overflow-hidden select-none px-6"
        initial={{ opacity: 1 }}
        animate={
          isExiting
            ? {
                opacity: 0,
                scale: prefersReduced ? 1 : 1.06,
                filter: prefersReduced ? 'none' : 'blur(10px)',
              }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: prefersReduced ? 0.3 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        role="dialog"
        aria-modal="true"
        aria-label="Opening letter for Rasgulla"
      >
        {/* Expanding radial glow during exit */}
        {isExiting && !prefersReduced && (
          <motion.div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35)_0%,rgba(201,169,166,0.15)_40%,transparent_70%)]"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 3, opacity: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
        )}

        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(42,31,26,0.8)_0%,transparent_75%)]"
          aria-hidden="true"
        />

        {/* Ambient slow drifting embers */}
        {!prefersReduced &&
          embers.map((ember, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-champagne-light pointer-events-none"
              style={{
                top: ember.top,
                left: ember.left,
                width: ember.size,
                height: ember.size,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: ember.delay,
                ease: 'easeInOut',
              }}
              aria-hidden="true"
            />
          ))}

        {/* Content sequence */}
        <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center justify-center min-h-[260px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.p
                key="step-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: prefersReduced ? 0.2 : 0.8 }}
                className="font-handwritten text-3xl sm:text-4xl text-dusty-rose tracking-wide"
              >
                psst…
              </motion.p>
            )}

            {step === 2 && (
              <motion.p
                key="step-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: prefersReduced ? 0.2 : 0.8 }}
                className="font-sans font-light text-base sm:text-lg text-muted-text tracking-wider"
              >
                this is for one very specific person.
              </motion.p>
            )}

            {step >= 3 && (
              <motion.div
                key="step-3-plus"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0.3 : 1.0 }}
                className="flex flex-col items-center space-y-5"
              >
                {/* Rasgulla prominent greeting */}
                <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight text-gradient drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]">
                  Rasgulla.
                </h1>

                {/* Step 4 supporting text */}
                <div className="min-h-[28px]">
                  {step >= 4 && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: prefersReduced ? 0.2 : 0.8 }}
                      className="font-sans text-sm sm:text-base text-ivory/80 font-light tracking-wide max-w-sm"
                    >
                      I made you a little corner of the internet.
                    </motion.p>
                  )}
                </div>

                {/* Step 5 interactive button */}
                <div className="min-h-[52px] pt-4">
                  {step >= 5 && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={prefersReduced ? {} : { scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: prefersReduced ? 0.2 : 0.6 }}
                      onClick={handleOpen}
                      disabled={isExiting}
                      aria-label="Open the website"
                      className="group relative px-8 py-3 rounded-full text-sm font-sans font-medium text-ivory tracking-widest uppercase transition-all duration-300 border border-champagne/40 bg-dark-warm/60 backdrop-blur-sm hover:border-champagne hover:bg-dark-warm hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] focus:outline-none focus:ring-2 focus:ring-champagne/60 focus:ring-offset-2 focus:ring-offset-dark-bg"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-champagne-light group-hover:text-champagne transition-colors">
                        Open it <span className="text-dusty-rose group-hover:text-blush">♡</span>
                      </span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick skip in bottom corner during buildup */}
        {step > 0 && step < 5 && (
          <button
            type="button"
            onClick={() => setStep(5)}
            className="absolute bottom-6 right-6 text-xs text-muted-text/50 hover:text-muted-text font-mono transition-colors focus:outline-none"
            aria-label="Skip intro animation"
          >
            skip →
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
