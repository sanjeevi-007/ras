import { motion } from 'framer-motion';
import { promises } from '../data/promises';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function PromisesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="promises"
      data-section="promises"
      className="relative min-h-screen py-28 px-6 sm:px-12 lg:px-20 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/25 to-dark-bg"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(201,169,166,0.15)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-champagne"
          >
            Quiet Vows
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal"
          >
            Some things I want you to know.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif italic text-muted-text text-base sm:text-lg"
          >
            No grand theatrics—just simple, honest, steady promises.
          </motion.p>
        </div>

        {/* 2-Column Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: prefersReduced ? 0.2 : 0.6,
                delay: prefersReduced ? 0 : (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={prefersReduced ? {} : { y: -3 }}
              className="p-5 sm:p-6 rounded-2xl border border-dusty-rose/25 bg-dark-warm/50 backdrop-blur-sm hover:border-champagne/45 hover:bg-dark-warm/70 transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Subtle warm glow bullet */}
              <div className="w-2.5 h-2.5 rounded-full bg-champagne flex-shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.7)] group-hover:scale-125 transition-transform" />
              <p className="font-serif text-lg sm:text-xl text-ivory/90 group-hover:text-champagne-light transition-colors leading-relaxed">
                {promise}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Sincere Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: prefersReduced ? 0.2 : 0.9 }}
          className="p-8 sm:p-12 rounded-3xl border border-champagne/30 bg-dark-warm/60 backdrop-blur-md shadow-2xl max-w-2xl mx-auto text-center space-y-4"
        >
          <p className="font-serif text-lg sm:text-2xl text-ivory/80 leading-relaxed font-light">
            I can't promise that life will always be easy.
          </p>
          <p className="font-serif text-xl sm:text-3xl text-gradient font-medium leading-relaxed">
            But I can promise that you won't have to face it alone.
          </p>
          <p className="font-handwritten text-2xl text-dusty-rose pt-2">
            Not for a single second.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
