import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { aboutPrinciples, personalInfo } from '../../utils/data';
import './About.css';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about__inner${isVisible ? ' about__inner--visible' : ''}`}>
        <div className="about__content">
          <p className="section-label">About</p>
          <h2 className="section-title">
            I build mobile products for teams that need clarity, speed, and reliability.
          </h2>
          <p className="about__text">
            I am a software engineer based in {personalInfo.location}, focused on cross-platform
            mobile development with Flutter and React Native. My strongest work sits inside
            operations-heavy products where the app has to stay useful in the real world, not just in a demo.
          </p>
          <p className="about__text">
            That means thinking beyond screens alone. I care about architecture, offline behavior,
            real-time systems, device integrations, and the small UX decisions that help field teams
            move faster under pressure.
          </p>
          <p className="about__text">
            At Novus Altair, I also contribute to Optima AI Factory: grounding engineering agents in
            product knowledge — AI assistants that work from a project&apos;s own docs and code
            instead of guessing — and connecting their work to isolated sandboxes, automated QA,
            and feedback-driven improvement.
          </p>
          <p className="about__text">
            I work best with product teams that value calm problem solving, strong ownership, and
            mobile experiences that make complex workflows feel obvious.
          </p>

          <div className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Current focus</span>
              <span className="about__detail-value">Cross-platform apps and grounded AI workflows for real product teams</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Education</span>
              <span className="about__detail-value">B.Sc. Computer Science, Sir Syed University of Engineering and Technology</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Graduated</span>
              <span className="about__detail-value">2024</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Working style</span>
              <span className="about__detail-value">Product-minded, detail-oriented, and comfortable with client-facing ownership</span>
            </div>
          </div>
        </div>

        <div className="about__sidebar">
          <div className="about__card">
            <span className="about__card-kicker">How I work</span>
            <h3 className="about__card-title">What teams trust me with</h3>

            <div className="about__principles">
              {aboutPrinciples.map((item) => (
                <div key={item.title} className="about__principle">
                  <h4 className="about__principle-title">{item.title}</h4>
                  <p className="about__principle-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__mini-grid">
            <div className="about__mini-card">
              <span className="about__mini-label">Availability</span>
              <span className="about__mini-value">{personalInfo.availability}</span>
            </div>
            <div className="about__mini-card">
              <span className="about__mini-label">Timezone</span>
              <span className="about__mini-value">{personalInfo.timezone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
