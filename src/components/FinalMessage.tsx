import { motion } from 'framer-motion';
import { Heart, RotateCcw } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function FinalMessage() {
  const prefersReduced = useReducedMotion();

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final"
      data-section="final-message"
      className="relative min-h-screen py-32 sm:py-44 px-6 sm:px-12 select-none overflow-hidden bg-dark-bg flex flex-col items-center justify-between text-center"
    >
      {/* Background subtle starry aura */}
      <div
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,rgba(107,45,62,0.1)_50%,transparent_75%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="w-full h-8" aria-hidden="true" />

      {/* Main Closing Text */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-12 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-4"
        >
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-tight">
            Forever sounds a little less scary…
          </p>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-gradient font-medium tracking-tight">
            when it's with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <p className="font-handwritten text-4xl sm:text-5xl text-dusty-rose">
            Love you, Rasgulla.
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-champagne-light">
            Always.
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-6"
        >
          <motion.button
            type="button"
            onClick={handleReplay}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group px-7 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-champagne border border-champagne/30 bg-dark-warm/50 hover:bg-dark-warm hover:border-champagne transition-all flex items-center justify-center gap-2 mx-auto"
            aria-label="Relive our story from the beginning"
          >
            <RotateCcw size={13} className="group-hover:-rotate-90 transition-transform duration-300" />
            <span>Relive our story ↺</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Notes and Signoff */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="relative z-10 w-full pt-16 pb-6 text-center space-y-3 text-muted-text/80 text-xs font-serif"
      >
        <p className="italic">
          Made with love, a stupid amount of code, and one very serious question.
        </p>
        <p className="font-handwritten text-2xl text-dusty-rose flex items-center justify-center gap-1.5">
          <span>— Sanjeevi</span>
          <Heart size={14} className="fill-dusty-rose inline" />
        </p>
      </motion.footer>
    </section>
  );
}
