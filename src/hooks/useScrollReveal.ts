import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal hook
 * Uses IntersectionObserver to detect when an element enters the viewport.
 * @param threshold - Intersection threshold (default 0.2)
 * @returns { ref, isVisible }
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}

export default useScrollReveal;
