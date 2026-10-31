import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { reasons } from '../data/reasons';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Deeper romantic insights revealed on card tap/click
const reasonReflections: Record<number, string> = {
  0: "The kind that reaches your eyes and completely disarms me every single time.",
  1: "A simple grocery run, quiet silence, or a long drive suddenly feels like a scene from my favorite movie.",
  2: "Soft, steady, and so deeply genuine. You pay attention to the smallest emotions in others.",
  3: "The way your nose scrunches when you laugh, and that tiny cute pout when you're pretending to be stubborn.",
  4: "My absolute favourite melody in the entire universe. It resets my heaviest days.",
  5: "Just breathing in the same space with you brings an effortless sense of belonging.",
  6: "Like how you tuck your hair behind your ear, or how your hands talk when you're excited.",
  7: "Gentle, thoughtful, utterly authentic, and pure golden warmth at your core.",
  8: "Fast, sparkling, and full of that contagious little spark I could listen to for hours.",
  9: "It sounds softer, sweeter, and full of home when it comes from your voice.",
  10: "No armor, no walls. With you, I am completely and peacefully myself.",
  11: "Every little piece, every nuance, every quiet breath. All of you, always.",
};

export default function ThingsILove() {
  const [unwrappedIndex, setUnwrappedIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const toggleUnwrap = (index: number) => {
    setUnwrappedIndex((prev) => (prev === index ? null : index));
  };

  // Subtle rotation angles for authentic paper notes feel
  const rotations = [-1.5, 1.2, -0.8, 1.8, -1.2, 0.9, -1.6, 1.4, -0.9, 1.5, -1.1, 0.8];

  return (
    <section
      id="things"
      data-section="things"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 text-center select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/20 to-dark-bg"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,175,55,0.3)_0%,rgba(201,169,166,0.15)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2 text-champagne text-xs uppercase tracking-widest font-mono"
          >
            <Sparkles size={14} className="text-champagne" />
            <span>Countless Little Details</span>
            <Sparkles size={14} className="text-champagne" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight"
          >
            Things I love about you
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-text font-serif italic text-base sm:text-lg flex items-center justify-center gap-1.5"
          >
            Tap any note to unwrap a thought <Heart size={13} className="text-dusty-rose inline fill-dusty-rose/40" />
          </motion.p>
        </div>

        {/* Paper Notes Aesthetic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-4">
          {reasons.map((reason, index) => {
            const isUnwrapped = unwrappedIndex === index;
            const tilt = prefersReduced ? 0 : rotations[index % rotations.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: prefersReduced ? 0.2 : 0.6,
                  delay: prefersReduced ? 0 : (index % 3) * 0.1,
                }}
                whileHover={prefersReduced ? {} : { y: -5, scale: 1.015 }}
                onClick={() => toggleUnwrap(index)}
                style={{ transform: `rotate(${tilt}deg)` }}
                className="group relative cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleUnwrap(index);
                  }
                }}
                aria-expanded={isUnwrapped}
                aria-label={`Reason ${index + 1}: ${reason}`}
              >
                {/* Paper note card */}
                <div
                  className={`relative p-7 rounded-2xl transition-all duration-300 shadow-lg ${
                    isUnwrapped
                      ? 'bg-paper text-dark-bg border-champagne/70 shadow-[0_12px_30px_rgba(212,175,55,0.22)]'
                      : 'bg-paper/95 text-dark-bg/90 hover:bg-paper hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] border border-warm-brown/15'
                  }`}
                >
                  {/* Subtle pin/tape header badge */}
                  <div className="flex items-center justify-between border-b border-warm-brown/10 pb-3 mb-3">
                    <span className="font-mono text-xs tracking-wider text-warm-brown/60 uppercase">
                      Note #{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-dusty-rose font-handwritten text-lg">
                      {isUnwrapped ? 'unwrapped ♡' : 'tap to open'}
                    </span>
                  </div>

                  {/* Primary Reason */}
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-dark-bg leading-snug">
                    "{reason}"
                  </h3>

                  {/* Deeper reflection revealed on tap */}
                  <AnimatePresence>
                    {isUnwrapped && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 mt-3 border-t border-warm-brown/15"
                      >
                        <p className="font-serif text-sm sm:text-base text-dark-warm/90 leading-relaxed italic bg-blush/30 p-3 rounded-lg border-l-2 border-champagne">
                          {reasonReflections[index] || "Everything you do leaves a quiet warmth behind."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Featured Card: The Rasgulla Nickname Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto pt-8"
        >
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-warm/90 to-dark-bg border border-champagne/40 shadow-2xl backdrop-blur-md text-center space-y-4">
            <span className="text-3xl block">🍬</span>
            <h4 className="font-serif text-2xl sm:text-3xl text-gradient font-semibold">
              And yes… the Rasgulla thing.
            </h4>
            <div className="space-y-2 text-ivory/85 font-serif text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              <p>I still don't know how you got this nickname.</p>
              <p className="font-handwritten text-2xl text-dusty-rose">Actually, I do.</p>
              <p className="text-champagne font-medium tracking-wide">
                Because you're sweet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
