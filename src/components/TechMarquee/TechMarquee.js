import { skillGroups } from '../../utils/data';
import './TechMarquee.css';

const TechMarquee = () => {
  const skills = [...new Set(skillGroups.flatMap((group) => group.skills))];
  const row = (hidden) => (
    <ul className="tech-marquee__row" aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <li key={skill} className="tech-marquee__item">
          {skill}
          <span aria-hidden="true">·</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="tech-marquee" aria-label="Technologies I work with">
      {row(false)}
      {row(true)}
    </div>
  );
};

export default TechMarquee;
