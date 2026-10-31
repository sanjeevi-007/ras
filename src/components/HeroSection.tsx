import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.25,
        delayChildren: prefersReduced ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('eyes') || document.querySelector('[data-section="eyes-sketch-reveal"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 sm:px-12 py-20 text-center select-none overflow-hidden"
    >
      {/* Subtle radial warmth behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(107,45,62,0.15)_45%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Top spacer to balance vertical layout */}
      <div className="w-full h-8" aria-hidden="true" />

      {/* Main typographic body */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8 my-auto"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory leading-[1.25] tracking-tight max-w-3xl"
        >
          For the girl who somehow became my{' '}
          <span className="italic font-normal text-gradient font-serif">
            favourite part
          </span>{' '}
          of every day.
        </motion.h1>

        {/* Supporting text */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-2 text-muted-text font-sans font-light text-base sm:text-lg md:text-xl tracking-wide max-w-xl"
        >
          <p>This isn't a website.</p>
          <p className="text-ivory/80 font-normal">
            It's everything I don't always know how to say.
          </p>
        </motion.div>

        {/* Handwritten note */}
        <motion.p
          variants={itemVariants}
          className="font-handwritten text-2xl sm:text-3xl text-dusty-rose pt-2"
        >
          Made with an unreasonable amount of love.
        </motion.p>
      </motion.div>

      {/* Animated scroll prompt at bottom */}
      <motion.button
        type="button"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: prefersReduced ? 0.3 : 1.2,
          duration: 0.8,
        }}
        className="relative z-10 pt-8 pb-4 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        aria-label="Scroll down to begin story"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-muted-text/80 group-hover:text-champagne transition-colors">
          keep going ↓
        </span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1 h-3 rounded-full bg-champagne/40 group-hover:bg-champagne transition-colors"
          aria-hidden="true"
        />
      </motion.button>
    </section>
  );
}
