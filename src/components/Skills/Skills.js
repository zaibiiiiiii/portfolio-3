import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { skills } from '../../utils/data';
import './Skills.css';

const categoryColors = {
  Mobile: '#5b6af0',
  Backend: '#f06b5b',
  Language: '#f0c45b',
  Database: '#5bf0b2',
  Web: '#b05bf0',
  QA: '#5bbff0',
};

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills__inner${isVisible ? ' skills__inner--visible' : ''}`}>
        <div className="skills__header">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            Focused on the mobile ecosystem — from UI to backend integration and real-time systems.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <span
                className="skill-card__dot"
                style={{ background: categoryColors[skill.category] || 'var(--accent)' }}
              />
              <span className="skill-card__name">{skill.name}</span>
              <span
                className="skill-card__tag"
                style={{ color: categoryColors[skill.category] || 'var(--accent)' }}
              >
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
