import { useEffect, useRef } from 'react';
import './Hero.css';
import { personalInfo } from '../../utils/data';

const Hero = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let frame;
    let mouse = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      current.x += (mouse.x - current.x) * 0.08;
      current.y += (mouse.y - current.y) * 0.08;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.x - 160}px, ${current.y - 160}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const words = ['Flutter.', 'React Native.', 'Firebase.', 'Innovation.'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const word = words[wordIndex];
      if (!textRef.current) return;

      if (!deleting) {
        textRef.current.textContent = word.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        textRef.current.textContent = word.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 90);
    };

    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__cursor-glow" ref={cursorRef} />

      <div className="hero__grid-lines" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="hero__grid-line" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__badge animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="hero__badge-dot" />
          Available for new opportunities
        </div>

        <h1 className="hero__name animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className="hero__name-word">{word}</span>
          ))}
        </h1>

        <div className="hero__role animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <span className="hero__role-static">Building with</span>
          <span className="hero__role-dynamic" ref={textRef}>Flutter.</span>
          <span className="hero__cursor-blink">|</span>
        </div>

        <p className="hero__description animate-fade-up" style={{ animationDelay: '0.55s', opacity: 0 }}>
          {personalInfo.tagline}
        </p>

        <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <a href="#projects" className="hero__btn hero__btn--primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.85s', opacity: 0 }}>
          <div className="hero__stat">
            <span className="hero__stat-number">4+</span>
            <span className="hero__stat-label">Companies</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">2</span>
            <span className="hero__stat-label">Live Apps</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">1yr+</span>
            <span className="hero__stat-label">Experience</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
