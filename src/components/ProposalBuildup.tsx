import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const buildupLines = [
  "Okay…",
  "I've been trying to find the right way to ask you something.",
  "Something bigger than this website.",
  "Something I've probably imagined more times than I'll admit.",
];

export default function ProposalBuildup() {
  const prefersReduced = useReducedMotion();

  const handleProceed = () => {
    const proposalElement = document.getElementById('proposal');
    if (proposalElement) {
      proposalElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="buildup"
      data-section="proposal-buildup"
      className="relative min-h-screen py-32 sm:py-40 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/25 to-dark-bg flex flex-col items-center justify-center text-center"
    >
      {/* Dimmed, atmospheric background aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,rgba(107,45,62,0.1)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-14">
        {/* Soft pulse cue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-champagne text-xs font-mono uppercase tracking-widest"
        >
          <Sparkles size={12} className="animate-pulse" />
          <span>A Quiet Breath</span>
          <Sparkles size={12} className="animate-pulse" />
        </motion.div>

        {/* Minimalist Sequential Lines */}
        <div className="space-y-6 sm:space-y-8">
          {buildupLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: prefersReduced ? 0.2 : 0.8,
                delay: prefersReduced ? 0 : index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-serif tracking-wide leading-relaxed ${
                index === 0
                  ? 'text-2xl sm:text-3xl text-dusty-rose font-handwritten'
                  : 'text-xl sm:text-2xl md:text-3xl text-ivory/85 font-light'
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Transition Lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: prefersReduced ? 0.2 : 0.9, delay: 0.2 }}
          className="space-y-3 pt-6"
        >
          <p className="font-serif text-3xl sm:text-4xl text-gradient font-medium">
            Rasgulla…
          </p>
          <p className="font-handwritten text-2xl sm:text-3xl text-champagne-light">
            come a little closer.
          </p>
        </motion.div>

        {/* Interactive Button to Proceed to Proposal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4"
        >
          <motion.button
            type="button"
            onClick={handleProceed}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group px-9 py-3.5 rounded-full text-base font-serif tracking-wide border border-champagne/50 bg-dark-warm/70 backdrop-blur-md text-champagne hover:bg-dark-warm hover:border-champagne hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-champagne/60 transition-all duration-300"
            aria-label="Proceed to the question"
          >
            <span className="flex items-center gap-2">
              <span>I'm ready</span>
              <Heart
                size={15}
                className="text-dusty-rose fill-dusty-rose/40 group-hover:scale-125 transition-transform"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
