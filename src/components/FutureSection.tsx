import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const futureMoments = [
  "more random pictures",
  "more stupid jokes",
  "more late-night conversations",
  "more flowers",
  "more places",
  "more celebrations",
  "more ordinary Tuesdays",
  "more versions of us",
];

export default function FutureSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="future"
      data-section="future"
      className="relative min-h-screen py-32 sm:py-40 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/30 to-dark-bg text-center"
    >
      {/* Background ambient warmth glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(107,45,62,0.15)_45%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-dusty-rose flex items-center justify-center gap-2">
            <Sparkles size={13} className="text-champagne" />
            <span>Tomorrow & Beyond</span>
            <Sparkles size={13} className="text-champagne" />
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
            Then I started thinking…
          </h2>
        </motion.div>

        {/* Sequential List of Future Moments */}
        <div className="space-y-5 max-w-lg mx-auto">
          {futureMoments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: prefersReduced ? 0.2 : 0.7,
                delay: prefersReduced ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-1"
            >
              <p className="font-serif text-xl sm:text-2xl text-ivory/80 font-light hover:text-champagne-light transition-colors">
                {moment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Climax Transition */}
        <div className="pt-16 sm:pt-24 space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: prefersReduced ? 0.2 : 1.0 }}
            className="font-serif italic text-2xl sm:text-3xl text-muted-text"
          >
            And maybe…
          </motion.p>

          <div className="h-6 sm:h-12" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: prefersReduced ? 0.3 : 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="py-8 px-6 rounded-3xl border border-champagne/30 bg-dark-warm/40 backdrop-blur-md shadow-2xl max-w-xl mx-auto"
          >
            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-gradient tracking-tight drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              a whole life.
            </h3>
            <p className="font-handwritten text-2xl sm:text-3xl text-dusty-rose pt-4">
              together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
