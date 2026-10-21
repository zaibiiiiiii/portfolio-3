import './Hero.css';
import { focusAreas, heroStats, personalInfo } from '../../utils/data';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow animate-fade-up" style={{ animationDelay: '0.05s', opacity: 0 }}>
            <span className="hero__eyebrow-dot" />
            {personalInfo.currentRole}
          </div>

          <p className="hero__intro animate-fade-up" style={{ animationDelay: '0.12s', opacity: 0 }}>
            {personalInfo.role} · {personalInfo.location}
          </p>

          <h1 className="hero__headline animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            {personalInfo.headline}
          </h1>

          <p className="hero__description animate-fade-up" style={{ animationDelay: '0.32s', opacity: 0 }}>
            {personalInfo.summary}
          </p>

          <div className="hero__pill-row animate-fade-up" style={{ animationDelay: '0.42s', opacity: 0 }}>
            <span className="hero__pill">Offline-first mobile</span>
            <span className="hero__pill">GPS · NFC · real-time</span>
            <span className="hero__pill">Grounded AI agents</span>
          </div>

          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.52s', opacity: 0 }}>
            <a href="#projects" className="hero__btn hero__btn--primary">
              See Case Studies
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__btn hero__btn--secondary">
              Start a Conversation
            </a>
            <a href={personalInfo.cvUrl} className="hero__btn hero__btn--secondary" download>
              Download CV
            </a>
          </div>

          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.64s', opacity: 0 }}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__panel animate-fade-up" style={{ animationDelay: '0.24s', opacity: 0 }}>
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
        </aside>
      </div>

      <a href="#about" className="hero__scroll-hint">
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;
