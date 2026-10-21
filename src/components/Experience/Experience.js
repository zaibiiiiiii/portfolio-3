import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TechBadge from '../TechBadge/TechBadge';
import { experiences } from '../../utils/data';
import './Experience.css';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className={`experience__inner${isVisible ? ' experience__inner--visible' : ''}`}>
        <div className="experience__header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Roles that shaped how I build</h2>
          <p className="section-subtitle">
            My recent work has centered on mobile products where reliability, integrations, and
            operator confidence matter just as much as the UI.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="timeline__item"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="timeline__card">
                <div className="timeline__card-top">
                  <div>
                    <h3 className="timeline__company">{experience.company}</h3>
                    <p className="timeline__role">{experience.role}</p>
                  </div>

                  <div className="timeline__meta">
                    <span className="timeline__period">{experience.period}</span>
                    <span
                      className={`timeline__type timeline__type--${
                        experience.type === 'Internship' ? 'intern' : 'full'
                      }`}
                    >
                      {experience.type}
                    </span>
                  </div>
                </div>

                <p className="timeline__summary">{experience.summary}</p>

                <ul className="timeline__achievements">
                  {experience.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="timeline__tags">
                  {experience.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} variant="tag" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
