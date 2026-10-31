import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProposalSceneProps {
  onYes?: () => void;
}

export default function ProposalScene({ onYes }: ProposalSceneProps) {
  const [showThinkingModal, setShowThinkingModal] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();

  const handleYes = () => {
    if (onYes) {
      onYes();
    }
    const yesElement = document.getElementById('yes');
    if (yesElement) {
      yesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="proposal"
      data-section="proposal-scene"
      className="relative min-h-screen py-28 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/40 to-dark-bg flex flex-col items-center justify-center text-center"
    >
      {/* Central Warm Ambient Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,rgba(107,45,62,0.18)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-12">
        {/* Central Pure SVG / CSS Shimmering Rotating Diamond Ring */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
          {/* Outer glowing halo */}
          <div className="absolute inset-0 rounded-full bg-champagne/15 blur-2xl animate-pulse" />

          {/* 3D Floating Ring Vector */}
          <motion.div
            animate={
              prefersReduced
                ? {}
                : {
                    y: [0, -10, 0],
                    rotateZ: [-2, 2, -2],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-40 h-40 sm:w-48 sm:h-48"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_10px_25px_rgba(212,175,55,0.4)]"
            >
              <defs>
                {/* Gold ring gradient */}
                <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5E6CC" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#8A6B20" />
                  <stop offset="100%" stopColor="#FAF7F2" />
                </linearGradient>

                {/* Diamond brilliant facet gradients */}
                <linearGradient id="diamondTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#FAF7F2" />
                  <stop offset="100%" stopColor="#E2D0B5" />
                </linearGradient>

                <linearGradient id="diamondFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FAF7F2" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FAF7F2" />
                </linearGradient>

                <filter id="diamondGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ring Band (Back Shadow) */}
              <ellipse
                cx="50"
                cy="62"
                rx="28"
                ry="17"
                fill="none"
                stroke="#3D2B1A"
                strokeWidth="5"
                opacity="0.6"
              />

              {/* Ring Band (Main Solid Gold Circle) */}
              <ellipse
                cx="50"
                cy="60"
                rx="28"
                ry="17"
                fill="none"
                stroke="url(#ringGold)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />

              {/* Diamond Setting Crown Prongs */}
              <path
                d="M40 37 L50 44 L60 37"
                fill="none"
                stroke="url(#ringGold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Brilliant Diamond Facets */}
              <polygon
                points="42,28 58,28 66,35 50,47 34,35"
                fill="url(#diamondTop)"
                stroke="#F5E6CC"
                strokeWidth="0.8"
                filter="url(#diamondGlow)"
              />
              {/* Center facet triangle */}
              <polygon
                points="42,28 58,28 50,38"
                fill="url(#diamondFacet)"
                opacity="0.8"
              />
              <polygon
                points="50,38 66,35 50,47"
                fill="#FFFFFF"
                opacity="0.9"
              />
              <polygon
                points="50,38 34,35 50,47"
                fill="#EAD7BE"
                opacity="0.75"
              />
            </svg>

            {/* Radiant Sparkle Star on Diamond */}
            {!prefersReduced && (
              <motion.div
                animate={{
                  scale: [0.7, 1.3, 0.7],
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-3 left-1/2 -translate-x-1/2 text-champagne-light drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              >
                <Sparkles size={20} />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* The Question Text Sequence */}
        <div className="space-y-4 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif italic text-lg sm:text-xl text-muted-text"
          >
            I have one question.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-gradient tracking-tight drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]"
          >
            Will you marry me?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-dusty-rose text-2xl font-serif"
          >
            ♡
          </motion.p>
        </div>

        {/* Choice Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 max-w-md mx-auto"
        >
          {/* Primary Highlighted YES Button */}
          <motion.button
            type="button"
            onClick={handleYes}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-base sm:text-lg font-serif font-semibold tracking-wider uppercase text-dark-bg bg-gradient-to-r from-champagne-light via-champagne to-champagne-light hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.45)] border border-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/80"
            aria-label="Yes, obviously"
          >
            <span className="flex items-center justify-center gap-2">
              <span>YES, OBVIOUSLY</span>
              <Heart size={18} fill="#1A1210" className="text-dark-bg animate-pulse" />
            </span>
          </motion.button>

          {/* Gentle Secondary "LET ME THINK" Button */}
          <motion.button
            type="button"
            onClick={() => setShowThinkingModal(true)}
            whileHover={prefersReduced ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-serif tracking-wide text-ivory/70 hover:text-ivory border border-dusty-rose/30 hover:border-dusty-rose/60 bg-dark-warm/40 backdrop-blur-sm transition-all duration-300 focus:outline-none"
            aria-label="Let me think"
          >
            LET ME THINK
          </motion.button>
        </motion.div>

        {/* Sweet Reassurance Modal for "LET ME THINK" */}
        <AnimatePresence>
          {showThinkingModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-dark-bg/85 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label="Reassurance note"
            >
              <motion.div
                initial={{ scale: 0.94, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 15 }}
                transition={{ duration: 0.3 }}
                className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-dark-warm to-dark-bg border border-champagne/40 shadow-2xl text-center space-y-6"
              >
                <span className="text-3xl block">🕊️</span>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-medium">
                    Take your time.
                  </h3>
                  <p className="font-serif text-base sm:text-lg text-ivory/80 leading-relaxed">
                    I'll still be right here.
                  </p>
                  <p className="font-handwritten text-2xl text-dusty-rose pt-1">
                    No rush, no pressure, just love.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowThinkingModal(false)}
                    className="px-8 py-3 rounded-full text-sm font-serif text-champagne border border-champagne/50 hover:bg-champagne/15 hover:border-champagne transition-all"
                  >
                    Okay… ask me again ♡
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
