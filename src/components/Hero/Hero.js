import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import { focusAreas, heroStats, personalInfo } from '../../utils/data';

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Layers drift at different speeds as the hero scrolls away
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.2]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -64]);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__inner">
        <motion.div className="hero__content" style={{ y: contentY, opacity: contentOpacity }}>
          <span className="hero__availability-badge animate-fade-up" style={{ animationDelay: '0.02s', opacity: 0 }}>
            Available for hire
          </span>
          <div className="hero__eyebrow animate-fade-up" style={{ animationDelay: '0.05s', opacity: 0 }}>
            <span className="hero__eyebrow-dot" />
            {personalInfo.currentRole}
          </div>

          <p className="hero__intro animate-fade-up" style={{ animationDelay: '0.12s', opacity: 0 }}>
            {personalInfo.role} · {personalInfo.location}
          </p>

          <h1 className="hero__headline animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Mobile Engineer <em>· Grounded AI Workflows.</em>
          </h1>

          <p className="hero__description animate-fade-up" style={{ animationDelay: '0.32s', opacity: 0 }}>
            {personalInfo.summary} I also build dependable mobile products for real-world teams.
          </p>

          <div className="hero__pill-row animate-fade-up" style={{ animationDelay: '0.42s', opacity: 0 }}>
            <span className="hero__pill">Repository wikis + guardrails</span>
            <span className="hero__pill">MCP · GLiNER · agent routing</span>
            <span className="hero__pill">Sandboxed QA · feedback loops</span>
          </div>

          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <a href="#projects" className="hero__btn hero__btn--primary">
              See Case Studies
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__btn hero__btn--secondary">
              Start a Conversation
            </a>
          </div>
          <a href={personalInfo.cvUrl} className="hero__cv-link animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }} download>
            Download CV (PDF)
          </a>

          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.64s', opacity: 0 }}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="hero__panel animate-fade-up"
          style={{ animationDelay: '0.24s', opacity: 0, y: panelY }}
        >
          <span className="hero__panel-mark" aria-hidden="true">SZK</span>
          <div className="hero__panel-top">
            <span className="hero__panel-kicker">What teams hire me for</span>
            <span className="hero__panel-availability">{personalInfo.availability}</span>
          </div>

          <div className="hero__focus-list">
            {focusAreas.map((item) => (
              <div key={item.title} className="hero__focus-item">
                <h2 className="hero__focus-title">{item.title}</h2>
                <p className="hero__focus-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="hero__panel-footer">
            <div className="hero__panel-detail">
              <span className="hero__panel-label">Best fit</span>
              <span className="hero__panel-value">Operations-heavy products that need mobile reliability</span>
            </div>
            <div className="hero__panel-detail">
              <span className="hero__panel-label">Response time</span>
              <span className="hero__panel-value">{personalInfo.responseTime}</span>
            </div>
          </div>
        </motion.aside>
      </div>

      <a href="#about" className="hero__scroll-hint">
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;
