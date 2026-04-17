import { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { projects, webProjects } from '../../utils/data';
import guardControl1 from '../Assets/novus-control-1.png';
import guardControl2 from '../Assets/novus-control-2.png';
import guardPro1 from '../Assets/novus-guard-1.png';
import guardPro2 from '../Assets/novus-guard-2.png';
import './Projects.css';

const imageMap = {
  control: [guardControl1, guardControl2],
  pro: [guardPro1, guardPro2],
};

const AndroidIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm-11.046 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM.609 8.246l2.455 4.253A1.5 1.5 0 0 0 4.364 13.5H4.5v4.5A1.5 1.5 0 0 0 6 19.5h1.5v2.25a1.5 1.5 0 1 0 3 0V19.5h3v2.25a1.5 1.5 0 1 0 3 0V19.5H18a1.5 1.5 0 0 0 1.5-1.5V13.5h.136a1.5 1.5 0 0 0 1.3-.751l2.455-4.253A12 12 0 0 0 12 3a12 12 0 0 0-11.391 5.246z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const AppProject = ({ project, index }) => {
  const [activeImg, setActiveImg] = useState(0);
  const images = imageMap[project.imageSet] || [];

  return (
    <div className={`app-project${index % 2 !== 0 ? ' app-project--reverse' : ''}`}>
      <div className="app-project__content">
        <span className="app-project__category">{project.category}</span>
        <h3 className="app-project__name">{project.name}</h3>
        <p className="app-project__description">{project.description}</p>

        <div className="app-project__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="app-project__tag">{tag}</span>
          ))}
        </div>

        <div className="app-project__platforms">
          <div className="app-project__platform">
            <AndroidIcon />
            <span>Android</span>
          </div>
          <div className="app-project__platform">
            <AppleIcon />
            <span>iOS</span>
          </div>
        </div>

        <div className="app-project__store-btns">
          <a href={project.storeLinks?.playstore || '#'} className="store-btn store-btn--play" target="_blank" rel="noreferrer">
            <AndroidIcon />
            <div>
              <span className="store-btn__sub">Get it on</span>
              <span className="store-btn__main">Google Play</span>
            </div>
          </a>
          <a href={project.storeLinks?.appstore || '#'} className="store-btn store-btn--apple" target="_blank" rel="noreferrer">
            <AppleIcon />
            <div>
              <span className="store-btn__sub">Download on</span>
              <span className="store-btn__main">App Store</span>
            </div>
          </a>
        </div>
      </div>

      <div className="app-project__visuals">
        {images.length > 0 && (
          <>
            <div className="app-project__screenshot-wrapper">
              <img
                src={images[activeImg]}
                alt={`${project.name} screenshot set ${activeImg + 1}`}
                className="app-project__screenshot"
              />
              <div className="app-project__screenshot-glow" />
            </div>
            {images.length > 1 && (
              <div className="app-project__img-tabs">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`app-project__img-tab${activeImg === i ? ' app-project__img-tab--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    {i === 0 ? 'Screens 1–4' : 'Screens 5–8'}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const OtherProject = ({ project }) => (
  <div className="other-project">
    <div className="other-project__top">
      <span className="other-project__category">{project.category}</span>
      <div className="other-project__platforms">
        <AndroidIcon />
        <AppleIcon />
      </div>
    </div>
    <h4 className="other-project__name">{project.name}</h4>
    <p className="other-project__description">{project.description}</p>
    <div className="other-project__tags">
      {project.tags.map((tag) => (
        <span key={tag} className="other-project__tag">{tag}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects__inner${isVisible ? ' projects__inner--visible' : ''}`}>
        <div className="projects__header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            Production apps shipped to real users, from enterprise security platforms to ERP-integrated tools.
          </p>
        </div>

        <div className="projects__featured">
          {featuredProjects.map((project, i) => (
            <AppProject key={project.id} project={project} index={i} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="projects__other-section">
            <h3 className="projects__other-title">More Projects</h3>
            <div className="projects__other-grid">
              {otherProjects.map((project) => (
                <OtherProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        <div className="projects__web-section">
          <h3 className="projects__other-title">Web Projects</h3>
          <div className="projects__web-grid">
            {webProjects.map((wp) => (
              <a
                key={wp.name}
                href={wp.url}
                target="_blank"
                rel="noreferrer"
                className="web-project"
              >
                <div className="web-project__content">
                  <span className="web-project__category">{wp.category}</span>
                  <span className="web-project__name">{wp.name}</span>
                  <span className="web-project__url">{wp.url.replace('https://', '')}</span>
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
