import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TechBadge from '../TechBadge/TechBadge';
import { personalInfo, projects, webProjects } from '../../utils/data';
import controlScreen01 from '../Assets/novus-control-screen-01.webp';
import controlScreen02 from '../Assets/novus-control-screen-02.webp';
import controlScreen03 from '../Assets/novus-control-screen-03.webp';
import controlScreen04 from '../Assets/novus-control-screen-04.webp';
import controlScreen05 from '../Assets/novus-control-screen-05.webp';
import controlScreen06 from '../Assets/novus-control-screen-06.webp';
import controlScreen07 from '../Assets/novus-control-screen-07.webp';
import controlScreen08 from '../Assets/novus-control-screen-08.webp';
import controlScreen09 from '../Assets/novus-control-screen-09.webp';
import controlScreen10 from '../Assets/novus-control-screen-10.webp';
import controlScreen11 from '../Assets/novus-control-screen-11.webp';
import controlScreen12 from '../Assets/novus-control-screen-12.webp';
import controlScreen13 from '../Assets/novus-control-screen-13.webp';
import controlScreen14 from '../Assets/novus-control-screen-14.webp';
import controlScreen15 from '../Assets/novus-control-screen-15.webp';
import controlScreen16 from '../Assets/novus-control-screen-16.webp';
import controlScreen17 from '../Assets/novus-control-screen-17.webp';
import proPatrol from '../Assets/novus-pro-patrol.webp';
import proReporting from '../Assets/novus-pro-reporting.webp';
import rayanLogo from '../Assets/assets rayyan instructor/rayan_driving_instructor_logo.webp';
import rayanProfile from '../Assets/rayan-profile.webp';
import rayanLessons from '../Assets/rayan-lessons.webp';
import rayanReschedule from '../Assets/rayan-reschedule.webp';
import rayanRequests from '../Assets/rayan-requests.webp';
import rayanStatus from '../Assets/rayan-status.webp';
import rayanBooking from '../Assets/rayan-booking.webp';
import controlThumb01 from '../Assets/thumbs/novus-control-screen-01.webp';
import controlThumb02 from '../Assets/thumbs/novus-control-screen-02.webp';
import controlThumb03 from '../Assets/thumbs/novus-control-screen-03.webp';
import controlThumb04 from '../Assets/thumbs/novus-control-screen-04.webp';
import controlThumb05 from '../Assets/thumbs/novus-control-screen-05.webp';
import controlThumb06 from '../Assets/thumbs/novus-control-screen-06.webp';
import controlThumb07 from '../Assets/thumbs/novus-control-screen-07.webp';
import controlThumb08 from '../Assets/thumbs/novus-control-screen-08.webp';
import controlThumb09 from '../Assets/thumbs/novus-control-screen-09.webp';
import controlThumb10 from '../Assets/thumbs/novus-control-screen-10.webp';
import controlThumb11 from '../Assets/thumbs/novus-control-screen-11.webp';
import controlThumb12 from '../Assets/thumbs/novus-control-screen-12.webp';
import controlThumb13 from '../Assets/thumbs/novus-control-screen-13.webp';
import controlThumb14 from '../Assets/thumbs/novus-control-screen-14.webp';
import controlThumb15 from '../Assets/thumbs/novus-control-screen-15.webp';
import controlThumb16 from '../Assets/thumbs/novus-control-screen-16.webp';
import controlThumb17 from '../Assets/thumbs/novus-control-screen-17.webp';
import proPatrolThumb from '../Assets/thumbs/novus-pro-patrol.webp';
import proReportingThumb from '../Assets/thumbs/novus-pro-reporting.webp';
import rayanProfileThumb from '../Assets/thumbs/rayan-profile.webp';
import rayanLessonsThumb from '../Assets/thumbs/rayan-lessons.webp';
import rayanRescheduleThumb from '../Assets/thumbs/rayan-reschedule.webp';
import rayanRequestsThumb from '../Assets/thumbs/rayan-requests.webp';
import rayanStatusThumb from '../Assets/thumbs/rayan-status.webp';
import rayanBookingThumb from '../Assets/thumbs/rayan-booking.webp';
import './Projects.css';

const imageMap = {
  control: [
    controlScreen01,
    controlScreen02,
    controlScreen03,
    controlScreen04,
    controlScreen05,
    controlScreen06,
    controlScreen07,
    controlScreen08,
    controlScreen09,
    controlScreen10,
    controlScreen11,
    controlScreen12,
    controlScreen13,
    controlScreen14,
    controlScreen15,
    controlScreen16,
    controlScreen17,
  ],
  pro: [proPatrol, proReporting],
  rayan: [rayanProfile, rayanLessons, rayanReschedule, rayanRequests, rayanStatus, rayanBooking],
};

const thumbMap = {
  control: [
    controlThumb01,
    controlThumb02,
    controlThumb03,
    controlThumb04,
    controlThumb05,
    controlThumb06,
    controlThumb07,
    controlThumb08,
    controlThumb09,
    controlThumb10,
    controlThumb11,
    controlThumb12,
    controlThumb13,
    controlThumb14,
    controlThumb15,
    controlThumb16,
    controlThumb17,
  ],
  pro: [proPatrolThumb, proReportingThumb],
  rayan: [
    rayanProfileThumb,
    rayanLessonsThumb,
    rayanRescheduleThumb,
    rayanRequestsThumb,
    rayanStatusThumb,
    rayanBookingThumb,
  ],
};

const logoMap = {
  rayan: rayanLogo,
};

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CapabilityIcon = ({ type }) => {
  const icons = {
    overview: <><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="5" rx="2" /><rect x="13" y="10" width="8" height="11" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /></>,
    patrol: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" /></>,
    response: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="M12 8v4m0 4h.01" /></>,
    checkpoint: <><path d="M4 4h5v5H4zM15 4h5v5h-5zM4 15h5v5H4z" /><path d="M15 15h2v2h-2zm4 0v5m-4-1h2m2-4h1" /></>,
    positioning: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    wearable: <><rect x="7" y="5" width="10" height="14" rx="3" /><path d="m9 2-1 3m7-3 1 3m-7 14 1 3m7-3 1 3M10 12h4" /></>,
    camera: <><path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><circle cx="12" cy="13" r="3" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[type] || icons.overview}
    </svg>
  );
};

const AppProject = ({ project, index }) => {
  const [activeImage, setActiveImage] = useState(0);
  const deviceRef = useRef(null);
  const thumbsRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: deviceRef,
    offset: ['start end', 'end start'],
  });
  const deviceY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const deviceRotate = useTransform(scrollYProgress, [0, 1], [2.5, -2.5]);
  const images = imageMap[project.imageSet] || [];
  const thumbs = thumbMap[project.imageSet] || [];
  const logo = logoMap[project.logoKey];
  const activeGallery = project.gallery?.[activeImage];

  // Keep the active thumbnail in view when the strip overflows (phones).
  // Scrolls the strip only — never the page.
  useEffect(() => {
    const strip = thumbsRef.current;
    const el = strip?.children[activeImage];
    if (!strip || !el) return;
    const left = el.offsetLeft - (strip.clientWidth - el.clientWidth) / 2;
    strip.scrollTo?.({ left, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [activeImage, reduceMotion]);

  return (
    <motion.article
      className={`app-project${index % 2 !== 0 ? ' app-project--reverse' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="app-project__content">
        <div className="app-project__eyebrow">
          <span className="app-project__category">{project.category}</span>
          <span className="app-project__status">{project.status}</span>
        </div>

        <div className="app-project__brand">
          {logo && (
            <div className="app-project__logo-shell">
              <img src={logo} alt={`${project.name} logo`} className="app-project__logo" loading="lazy" />
            </div>
          )}

          <div className="app-project__brand-copy">
            <h3 className="app-project__name">{project.name}</h3>
          </div>
        </div>
        <p className="app-project__summary">{project.summary}</p>

        {project.features?.length > 0 && (
          <div className="app-project__features" aria-label={`${project.name} key capabilities`}>
            {project.features.map((feature) => (
              <article className="app-project__feature" key={feature.title}>
                <span className="app-project__feature-icon">
                  <CapabilityIcon type={feature.icon} />
                </span>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="app-project__sections">
          <div className="app-project__section">
            <span className="app-project__section-label">Challenge</span>
            <p>{project.challenge}</p>
          </div>
          <div className="app-project__section">
            <span className="app-project__section-label">My role</span>
            <p>{project.role}</p>
          </div>
          <div className="app-project__section">
            <span className="app-project__section-label">Impact</span>
            <p>{project.impact}</p>
          </div>
        </div>

        <details className="app-project__details">
          <summary>More implementation details</summary>
          <ul className="app-project__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="app-project__tags">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} variant="tag" />
          ))}
        </div>

        <div className="app-project__actions">
          <a href="#contact" className="app-project__cta app-project__cta--primary">
            Request a walkthrough
          </a>
          <a href={`mailto:${personalInfo.email}`} className="app-project__cta app-project__cta--secondary">
            Email for details
          </a>
        </div>

        {project.storeLinks && (
          <div className="app-project__stores" aria-label={`${project.name} app store links`}>
            <span className="app-project__stores-label">Get the app</span>
            <div className="app-project__store-links">
              <a
                href={project.storeLinks.ios}
                target="_blank"
                rel="noreferrer"
                className="app-project__store-link"
                aria-label={`Download ${project.name} from the App Store`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M16.7 12.7c0-2.3 1.9-3.4 2-3.4a4.3 4.3 0 0 0-3.4-1.8c-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.9a4.5 4.5 0 0 0-3.8 2.3c-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7s1.8.7 3 .7 1.9-1.1 2.7-2.3a10 10 0 0 0 1.2-2.5 4 4 0 0 1-2.1-4Zm-2.3-6.7a4.1 4.1 0 0 0 1-3 4.2 4.2 0 0 0-2.8 1.4 3.9 3.9 0 0 0-1 2.9 3.5 3.5 0 0 0 2.8-1.3Z" />
                </svg>
                <span><small>Download on the</small><strong>App Store</strong></span>
              </a>
              <a
                href={project.storeLinks.android}
                target="_blank"
                rel="noreferrer"
                className="app-project__store-link"
                aria-label={`Get ${project.name} on Google Play`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#34A853" d="M4.2 2.8c-.3.3-.5.8-.5 1.5v15.4c0 .7.2 1.2.5 1.5L13 12 4.2 2.8Z" />
                  <path fill="#4285F4" d="m15.3 9.7-9.8-7 9.8 9.3 3-1.6c1-.6 1-.9 0-1.5l-3-1.6Z" />
                  <path fill="#EA4335" d="m5.5 21.3 9.8-7-3-2.3-6.8 9.3Z" />
                  <path fill="#FBBC04" d="m15.3 14.3 3-1.6c1-.6 1-.9 0-1.5l-3-1.6-2.3 2.3 2.3 2.4Z" />
                </svg>
                <span><small>Get it on</small><strong>Google Play</strong></span>
              </a>
            </div>
          </div>
        )}

        <p className="app-project__platform-copy">
          {project.platformNote || `Available for ${project.platforms.join(' and ')}.`}
        </p>
      </div>

      <div className="app-project__visuals" ref={deviceRef}>
        {images.length > 0 && (
          <>
            <div className="app-project__device-stage">
              <motion.div
                className="app-project__device"
                style={{
                  y: reduceMotion ? 0 : deviceY,
                  rotateX: reduceMotion ? 0 : deviceRotate,
                  rotateY: index % 2 === 0 ? -1.5 : 1.5,
                }}
              >
                <span className="app-project__device-button app-project__device-button--power" aria-hidden="true" />
                <span className="app-project__device-button app-project__device-button--volume" aria-hidden="true" />
                <div className="app-project__device-screen">
                  <img
                    src={images[activeImage]}
                    alt={`${project.name} app screen: ${activeGallery?.label || 'preview'}`}
                    className="app-project__image"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
            <div className="app-project__device-caption">
              <span className="app-project__device-caption-dot" />
              <span>Product screen</span>
              <span className="app-project__device-caption-separator" />
              <span>{activeGallery?.label}</span>
            </div>

            {activeGallery && (
              <div className="app-project__caption">
                <span className="app-project__caption-label">{activeGallery.label}</span>
                <p className="app-project__caption-text">{activeGallery.caption}</p>
              </div>
            )}

            {project.gallery?.length > 1 && (
              <>
                <p className="app-project__gallery-hint">
                  Browse all {project.gallery.length} screens · tap one to preview it on the device
                </p>
                <div
                  ref={thumbsRef}
                  className="app-project__thumbs"
                  aria-label={`${project.name} screenshots`}
                >
                  {project.gallery.map((item, thumbIndex) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`app-project__thumb${activeImage === thumbIndex ? ' app-project__thumb--active' : ''}`}
                      onClick={() => setActiveImage(thumbIndex)}
                      aria-label={`Show ${project.name} ${item.label}`}
                      aria-pressed={activeImage === thumbIndex}
                    >
                      <img
                        src={thumbs[thumbIndex]}
                        alt=""
                        className="app-project__thumb-image"
                        loading="lazy"
                        aria-hidden="true"
                      />
                      <span className="app-project__thumb-label">
                        {item.shortLabel || item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </motion.article>
  );
};

const OtherProject = ({ project }) => (
  <article className="other-project">
    <span className="other-project__category">{project.category}</span>
    <h4 className="other-project__name">{project.name}</h4>
    <p className="other-project__summary">{project.summary}</p>
    {project.highlights?.length > 0 && (
      <ul className="other-project__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    <p className="other-project__impact">{project.impact}</p>
    <div className="other-project__tags">
      {project.tags.map((tag) => (
        <TechBadge key={tag} label={tag} variant="tag" />
      ))}
    </div>
  </article>
);

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects__inner${isVisible ? ' projects__inner--visible' : ''}`}>
        <div className="projects__header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Mobile products. Grounded AI. <span className="projects__title-highlight">Built for real work.</span></h2>
          <p className="section-subtitle">
            These are the projects that best show how I think: translating difficult workflows into
            mobile tools that stay dependable for the people using them.
          </p>
          <p className="projects__note">
            Much of my recent work is private client software, so I share the product thinking and system
            design rather than internal metrics or store links.
          </p>
        </div>

        <div className="projects__featured">
          {featuredProjects.map((project, index) => (
            <AppProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="projects__other-section">
            <h3 className="projects__other-title">Additional product work</h3>
            <div className="projects__other-grid">
              {otherProjects.map((project) => (
                <OtherProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        <div className="projects__web-section">
          <h3 className="projects__other-title">Selected web work</h3>
          <div className="projects__web-grid">
            {webProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="web-project"
              >
                <div className="web-project__content">
                  <TechBadge label={project.category} variant="tag" />
                  <span className="web-project__name">{project.name}</span>
                  <span className="web-project__blurb">{project.blurb}</span>
                </div>
                <ExternalIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
