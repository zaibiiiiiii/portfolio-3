import { useEffect, useState, useRef } from 'react';

/**
 * RevealSection - Reusable intersection-observer reveal wrapper.
 * Handles the fade-up animation consistently across all sections.
 * Respects prefers-reduced-motion.
 */
const RevealSection = ({ children, threshold = 0.15, rootMargin = '-10% 0px -10% 0px', once = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <section ref={ref} className={`reveal-section ${isVisible ? 'reveal-section--visible' : ''}`}>
      {children}
    </section>
  );
};

export default RevealSection;