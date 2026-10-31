import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ProgressIndicator() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [currentProgress, setCurrentProgress] = useState<number>(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setCurrentProgress(latest);
    });
  }, [scrollYProgress]);

  // If user prefers reduced motion, render a very quiet minimal top line
  if (prefersReduced) {
    return (
      <div
        data-section="progress-indicator"
        className="fixed top-0 left-0 right-0 h-[2px] z-30 pointer-events-none bg-dark-warm/30"
        aria-hidden="true"
      >
        <div
          className="h-full bg-champagne/60 transition-all duration-200"
          style={{ width: `${Math.round(currentProgress * 100)}%` }}
        />
      </div>
    );
  }

  return (
    <div
      data-section="progress-indicator"
      className="pointer-events-none z-30"
      aria-hidden="true"
    >
      {/* Mobile Top Minimal Progress Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[2px] bg-dark-warm/40">
        <motion.div
          className="h-full bg-gradient-to-r from-dusty-rose via-champagne to-champagne-light origin-left"
          style={{ scaleX: scaleY }}
        />
      </div>

      {/* Desktop Vertical Narrative Spine on Right Edge */}
      <aside className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="relative w-[2px] h-40 bg-dark-warm/60 rounded-full overflow-hidden">
          {/* Filled glowing progress */}
          <motion.div
            className="w-full bg-gradient-to-b from-champagne via-dusty-rose to-burgundy rounded-full origin-top"
            style={{
              height: '100%',
              scaleY,
            }}
          />
        </div>

        {/* Tiny heart milestone anchor */}
        <motion.div
          className="text-dusty-rose/70"
          animate={{
            scale: currentProgress > 0.05 ? [1, 1.15, 1] : 1,
            color: currentProgress > 0.85 ? '#D4AF37' : '#C9A9A6',
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart size={11} fill="currentColor" />
        </motion.div>
      </aside>
    </div>
  );
}
