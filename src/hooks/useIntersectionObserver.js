import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }

    const current = ref.current;

    if (!current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.03, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

export default useIntersectionObserver;
