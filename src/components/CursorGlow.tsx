import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function CursorGlow() {
  const [isPointerDevice, setIsPointerDevice] = useState<boolean>(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for organic trailing feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on precise pointer devices (desktop mouse/trackpad)
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(media.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    if (media.addEventListener) {
      media.addEventListener('change', handleMediaChange);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        Boolean(target.closest('button, a, [role="button"]'));
      setIsHoveringInteractive(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handleMediaChange);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on mobile or touch devices
  if (!isPointerDevice || prefersReduced || !isVisible) {
    return null;
  }

  return (
    <div
      data-section="cursor-glow"
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer soft trailing halo */}
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(201,169,166,0.08)_40%,transparent_70%)] blur-md pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          width: isHoveringInteractive ? 80 : 44,
          height: isHoveringInteractive ? 80 : 44,
          transition: 'width 0.25s ease-out, height 0.25s ease-out',
        }}
      />

      {/* Center pinpoint luminous dot */}
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 bg-champagne-light pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          width: isHoveringInteractive ? 6 : 4,
          height: isHoveringInteractive ? 6 : 4,
          opacity: isHoveringInteractive ? 0.85 : 0.5,
          boxShadow: '0 0 10px rgba(245,230,204,0.8)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </div>
  );
}
