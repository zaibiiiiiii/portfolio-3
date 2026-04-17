import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { experiences } from '../../utils/data';
import './Experience.css';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className={`experience__inner${isVisible ? ' experience__inner--visible' : ''}`}>
        <div className="experience__header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="timeline__item"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline__line">
                <div className="timeline__dot" />
                {i < experiences.length - 1 && <div className="timeline__connector" />}
              </div>

              <div className="timeline__card">
                <div className="timeline__card-top">
                  <div>
                    <h3 className="timeline__company">{exp.company}</h3>
                    <p className="timeline__role">{exp.role}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className={`timeline__type timeline__type--${exp.type === 'Internship' ? 'intern' : 'full'}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="timeline__description">{exp.description}</p>
                <div className="timeline__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
