import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const affirmations = [
  "You are loved.",
  "You are enough.",
  "You don't have to be perfect around me.",
  "You don't have to have everything figured out.",
  "You can have bad days.",
  "You can be quiet.",
  "You can be emotional.",
  "You can be completely yourself.",
  "And I'll still choose you.",
];

export default function ReassuranceSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="reassurance"
      data-section="reassurance"
      className="relative min-h-screen py-32 sm:py-40 px-6 sm:px-12 text-center select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/30 to-dark-bg"
    >
      {/* Soft calm ambient warm spotlight centered on text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(92,64,51,0.2)_40%,transparent_75%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-dusty-rose">
            Safe Harbor
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
            Just in case you ever forget…
          </h2>
        </motion.div>

        {/* Calm staggered affirmations */}
        <div className="space-y-6 sm:space-y-7 max-w-xl mx-auto">
          {affirmations.map((affirmation, index) => {
            const isLast = index === affirmations.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: prefersReduced ? 0.2 : 0.8,
                  delay: prefersReduced ? 0 : 0.08 * (index % 4),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className={`font-serif tracking-wide ${
                    isLast
                      ? 'text-xl sm:text-2xl text-champagne font-medium pt-3'
                      : 'text-lg sm:text-xl text-ivory/80 font-light'
                  }`}
                >
                  {affirmation}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Strongest Line Accent Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: prefersReduced ? 0.2 : 1.0, ease: 'easeOut' }}
          className="my-16 py-12 px-6 sm:px-12 rounded-3xl border border-champagne/25 bg-dark-warm/40 backdrop-blur-md max-w-2xl mx-auto space-y-4"
        >
          <div className="space-y-2">
            <p className="font-serif text-2xl sm:text-4xl text-gradient font-normal">
              I don't want only your best days.
            </p>
            <p className="font-serif text-2xl sm:text-4xl text-ivory font-medium">
              I want the real you.
            </p>
          </div>
        </motion.div>

        {/* Closing Calm Vow Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="space-y-3 font-serif text-base sm:text-lg text-muted-text max-w-lg mx-auto leading-relaxed pt-2"
        >
          <p>On the easy days.</p>
          <p>On the difficult days.</p>
          <p>On the days when everything feels confusing.</p>
          <p className="font-handwritten text-2xl sm:text-3xl text-dusty-rose pt-3">
            I want to be there.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
