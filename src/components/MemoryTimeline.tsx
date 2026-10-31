import { motion } from 'framer-motion';
import { memories } from '../data/memories';
import { useReducedMotion } from '../hooks/useReducedMotion';

const handwrittenNotes: Record<number, string> = {
  1: "the start of my favorite story.",
  2: "when time completely stopped mattering.",
  3: "and suddenly everything was lighter.",
  4: "natural, unforced, and deeply real.",
  5: "you slipped into every quiet thought.",
  6: "my safest place in this whole world.",
};

export default function MemoryTimeline() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="timeline"
      data-section="timeline"
      className="relative min-h-screen py-28 px-6 sm:px-12 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/25 to-dark-bg"
    >
      {/* Background ambient warmth glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(107,45,62,0.15)_45%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-dusty-rose"
          >
            Chronicles of Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal"
          >
            Our Story So Far
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-handwritten text-2xl text-champagne-light"
          >
            Somewhere along the way…
          </motion.p>
        </div>

        {/* Timeline Track Container */}
        <div className="relative max-w-4xl mx-auto pt-6 pb-12">
          {/* Central Vertical Champagne Spine Line */}
          {/* Desktop: center line. Mobile: pinned to left-6 */}
          <div
            className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-champagne/10 via-champagne/50 to-dusty-rose/20 rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {memories.map((memory, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={memory.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-row`}
                >
                  {/* Glowing Node Dot on Central Line */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-champagne border-4 border-dark-bg shadow-[0_0_12px_rgba(212,175,55,0.8)] z-10 flex-shrink-0"
                    aria-hidden="true"
                  />

                  {/* Spacer for desktop 50% split */}
                  <div className="hidden md:block w-1/2" aria-hidden="true" />

                  {/* Content Card (Left on mobile, alternating on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: prefersReduced ? 0.2 : 0.7,
                      delay: prefersReduced ? 0 : 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8 text-left"
                  >
                    <div className="p-6 sm:p-7 rounded-2xl border border-dusty-rose/25 bg-dark-warm/50 backdrop-blur-md hover:border-champagne/50 hover:bg-dark-warm/75 transition-all duration-300 shadow-xl group">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-dark-warm">
                        <span className="font-mono text-xs text-champagne/80 tracking-widest uppercase">
                          Milestone 0{memory.id}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-medium group-hover:text-champagne-light transition-colors">
                        {memory.label}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-ivory/80 font-serif leading-relaxed">
                        {memory.description}
                      </p>

                      {handwrittenNotes[memory.id] && (
                        <p className="mt-3 font-handwritten text-xl sm:text-2xl text-dusty-rose">
                          ~ {handwrittenNotes[memory.id]}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
