import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, MailOpen } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function LoveLetter() {
  const [isUnfolded, setIsUnfolded] = useState<boolean>(true);
  const prefersReduced = useReducedMotion();

  const toggleFold = () => {
    setIsUnfolded((prev) => !prev);
  };

  return (
    <section
      id="letter"
      data-section="love-letter"
      className="relative min-h-screen py-28 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/30 to-dark-bg flex flex-col items-center justify-center text-center"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(107,45,62,0.15)_45%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-dusty-rose"
          >
            Handwritten Note
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal"
          >
            A Letter For You
          </motion.h2>

          {/* Toggle Fold / Unfold Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={toggleFold}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-champagne border border-champagne/30 bg-dark-warm/50 hover:bg-dark-warm hover:border-champagne transition-all focus:outline-none"
              aria-label={isUnfolded ? 'Fold letter' : 'Unfold letter'}
            >
              {isUnfolded ? (
                <>
                  <MailOpen size={14} />
                  <span>Fold letter</span>
                </>
              ) : (
                <>
                  <Mail size={14} />
                  <span>Unfold letter ♡</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* The Physical Parchment Letter Container */}
        <AnimatePresence mode="wait">
          {isUnfolded ? (
            <motion.div
              key="unfolded"
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: prefersReduced ? 0.2 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto max-w-2xl text-left bg-[#FDF8F0] text-dark-bg p-8 sm:p-14 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-[#E8D8C8] overflow-hidden"
            >
              {/* Folded paper corner decorative triangle */}
              <div
                className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-dark-bg/15 to-transparent border-b border-l border-[#D6C2B0] pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
                aria-hidden="true"
              />

              {/* Subtle vintage parchment texture lines */}
              <div className="space-y-6 text-[#2A1F1A]">
                {/* Salutation */}
                <h3 className="font-serif text-2xl sm:text-3xl text-warm-brown font-medium">
                  To my Rasgulla,
                </h3>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#382820]">
                  <p>
                    I don't know if a website can explain everything I feel…
                  </p>
                  <p className="italic text-warm-brown font-medium">
                    But I wanted to try.
                  </p>
                  <p>
                    You've become someone I don't just love…
                  </p>
                  <p className="pl-4 border-l-2 border-dusty-rose/60 py-1 text-dark-warm font-normal">
                    You've become someone I want to protect, understand, grow with, laugh with, annoy, support, and come home to.
                  </p>
                  <p className="pt-2 text-dark-bg font-medium">
                    Thank you for being my favourite part of every day.
                  </p>
                </div>

                {/* Signature at bottom right */}
                <div className="pt-8 text-right space-y-1">
                  <p className="font-handwritten text-2xl sm:text-3xl text-warm-brown">
                    Love,
                  </p>
                  <p className="font-handwritten text-3xl sm:text-4xl text-dusty-rose font-bold">
                    Sanjeevi
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="folded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={toggleFold}
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              className="relative mx-auto max-w-md p-10 rounded-2xl bg-[#FDF8F0] text-dark-bg border border-[#E8D8C8] shadow-2xl cursor-pointer space-y-4 flex flex-col items-center justify-center group"
              role="button"
              tabIndex={0}
              aria-label="Click to unfold love letter"
            >
              {/* Wax Seal Emblem */}
              <div className="w-16 h-16 rounded-full bg-burgundy text-champagne-light border-2 border-champagne flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Heart size={24} fill="currentColor" />
              </div>

              <div className="text-center space-y-1">
                <p className="font-serif text-xl text-dark-warm font-medium">
                  To my Rasgulla
                </p>
                <p className="font-handwritten text-lg text-dusty-rose">
                  Tap to unfold letter ♡
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
