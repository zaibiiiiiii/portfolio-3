import { useEffect, useState } from 'react';
import { skillGroups } from '../../utils/data';
import './TechMarquee.css';

const TechMarquee = () => {
  const skills = [...new Set(skillGroups.flatMap((group) => group.skills))];
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const row = (hidden) => (
    <ul className={`tech-marquee__row${paused ? ' tech-marquee__row--paused' : ''}`} aria-hidden={hidden || undefined}>
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
