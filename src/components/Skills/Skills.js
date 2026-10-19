import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TechBadge from '../TechBadge/TechBadge';
import { skillGroups } from '../../utils/data';
import './Skills.css';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills__inner${isVisible ? ' skills__inner--visible' : ''}`}>
        <div className="skills__header">
          <p className="section-label">Skills</p>
          <h2 className="section-title">The stack behind the work</h2>
          <p className="section-subtitle">
            I keep the tooling story simple: strong cross-platform foundations, reliable integrations,
            and the mobile systems that matter when the product is used in the field.
          </p>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="skill-group"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="skill-group__title">{group.title}</h3>
              <p className="skill-group__description">{group.description}</p>

              <div className="skill-group__items">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} variant="skill" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
