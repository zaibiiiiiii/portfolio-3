import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './About.css';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about__inner${isVisible ? ' about__inner--visible' : ''}`}>
        <div className="about__content">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Crafting mobile experiences<br />
            <span className="about__title-accent">that scale.</span>
          </h2>
          <p className="about__text">
            I'm a Software Engineer based in Karachi, Pakistan, specializing in cross-platform mobile development
            with Flutter and React Native. I've built and shipped production apps used by real users — from
            security field officers managing GPS patrols, to enterprise teams handling ERP supply chains.
          </p>
          <p className="about__text">
            My work sits at the intersection of clean architecture and intuitive UX. I care deeply about
            performance, offline resilience, and real-time capabilities — whether that's Socket.IO chat,
            NFC verification, or live geofence monitoring.
          </p>

          <div className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Degree</span>
              <span className="about__detail-value">B.Sc. Computer Science</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">University</span>
              <span className="about__detail-value">Sir Syed University of Engineering & Technology</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Graduation</span>
              <span className="about__detail-value">2020 – 2024</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Location</span>
              <span className="about__detail-value">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="about__card-stack">
          <div className="about__card about__card--back" />
          <div className="about__card about__card--mid" />
          <div className="about__card about__card--front">
            <div className="about__card-header">
              <div className="about__card-avatar">SZK</div>
              <div>
                <div className="about__card-name">Syed Zohaib Kashif</div>
                <div className="about__card-role">Mobile App Developer</div>
              </div>
            </div>
            <div className="about__card-divider" />
            <div className="about__card-items">
              {[
                { icon: '📱', label: 'Flutter & React Native' },
                { icon: '🔥', label: 'Firebase & REST APIs' },
                { icon: '📍', label: 'GPS & Geofencing' },
                { icon: '🔌', label: 'NFC & Real-time' },
              ].map(({ icon, label }) => (
                <div className="about__card-item" key={label}>
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="about__card-footer">
              <span className="about__available-badge">
                <span className="about__available-dot" />
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
