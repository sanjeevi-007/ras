import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Particle {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  color: string;
  duration: number; // seconds
  delay: number; // seconds
}

export default function FloatingParticles() {
  const prefersReduced = useReducedMotion();

  // Deterministic particle set (16 particles max, reduced to 3 on reduced motion)
  const particles: Particle[] = useMemo(() => {
    const palette = ['#FAF7F2', '#D4AF37', '#C9A9A6', '#F5E6CC'];
    const count = prefersReduced ? 3 : 16;
    
    // Pre-calculated coordinates to avoid hydration mismatches
    const baseCoords = [
      { x: 12, y: 85, s: 2, c: 0, d: 14, dl: 0 },
      { x: 28, y: 70, s: 1.5, c: 1, d: 18, dl: 2 },
      { x: 42, y: 92, s: 2.5, c: 2, d: 16, dl: 4 },
      { x: 55, y: 65, s: 1, c: 3, d: 22, dl: 1 },
      { x: 68, y: 88, s: 3, c: 0, d: 15, dl: 5 },
      { x: 82, y: 78, s: 1.5, c: 1, d: 19, dl: 3 },
      { x: 18, y: 40, s: 2, c: 2, d: 17, dl: 6 },
      { x: 35, y: 30, s: 1, c: 3, d: 20, dl: 2 },
      { x: 62, y: 45, s: 2.5, c: 1, d: 14, dl: 7 },
      { x: 75, y: 20, s: 1.5, c: 0, d: 21, dl: 4 },
      { x: 88, y: 50, s: 2, c: 2, d: 16, dl: 1 },
      { x: 8, y: 15, s: 1.5, c: 3, d: 23, dl: 8 },
      { x: 48, y: 12, s: 2, c: 1, d: 18, dl: 5 },
      { x: 92, y: 82, s: 1, c: 0, d: 19, dl: 3 },
      { x: 22, y: 95, s: 2.5, c: 2, d: 15, dl: 6 },
      { x: 70, y: 10, s: 1.5, c: 1, d: 20, dl: 2 },
    ];

    return baseCoords.slice(0, count).map((item, idx) => ({
      id: idx,
      x: item.x,
      y: item.y,
      size: item.s,
      color: palette[item.c],
      duration: item.d,
      delay: item.dl,
    }));
  }, [prefersReduced]);

  return (
    <div
      data-section="floating-particles"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={
            prefersReduced
              ? { opacity: 0.2 }
              : {
                  y: [0, -40, -80, -40, 0],
                  x: [0, 8, -6, 4, 0],
                  opacity: [0.1, 0.45, 0.15, 0.5, 0.1],
                }
          }
          transition={
            prefersReduced
              ? { duration: 0 }
              : {
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}
