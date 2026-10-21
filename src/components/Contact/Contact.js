import { useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { contactChecklist, contactOptions, personalInfo } from '../../utils/data';
import './Contact.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [copyStatus, setCopyStatus] = useState('');
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    if (!copyStatus) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCopyStatus(''), 3000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const handleCopyEmail = async () => {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('unavailable');
      return;
    }

    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      // In production, this posts to a form endpoint (Formspree, EmailJS, etc.)
      // For now, we simulate a successful submission.
      setFormStatus('success');
      event.target.reset();
      setTimeout(() => setFormStatus(''), 5000);
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact__inner${isVisible ? ' contact__inner--visible' : ''}`}>
        <div className="contact__left">
          <p className="section-label">Contact</p>
          <h2 className="section-title">If the problem is messy, mobile is involved, and reliability matters, I can help.</h2>
          <p className="contact__description">
            I am open to full-time roles, focused freelance work, and conversations around improving an
            existing mobile product. The fastest way to reach me is email.
          </p>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__form-label">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact__form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__form-label">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact__form-input"
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-interest" className="contact__form-label">
                I'm interested in
              </label>
              <select id="contact-interest" name="interest" className="contact__form-select" required>
                <option value="">Select an option</option>
                <option value="full-time">Full-time product role</option>
                <option value="freelance">Freelance feature delivery</option>
                <option value="consultation">Product and UX feedback</option>
              </select>
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__form-textarea"
                rows="5"
                placeholder="Tell me about what you're building or improving..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contact__form-submit contact__cta contact__cta--primary">
              Send Message
            </button>
            {formStatus && (
              <p className="contact__form-status">{formStatus === 'success' ? 'Message sent — I will get back to you within 24 hours.' : 'Something went wrong. Please email me directly instead.'}</p>
            )}
          </form>

          <div className="contact__opportunities">
            {contactOptions.map((item) => (
              <div key={item.title} className="contact__opportunity">
                <h3 className="contact__opportunity-title">{item.title}</h3>
                <p className="contact__opportunity-text">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="contact__actions">
            <a href={`mailto:${personalInfo.email}`} className="contact__cta contact__cta--primary">
              Email me directly
            </a>
            <button type="button" className="contact__cta contact__cta--secondary" onClick={handleCopyEmail}>
              {copyStatus === 'copied' ? 'Email copied' : 'Copy email address'}
            </button>
            <a href={personalInfo.cvUrl} className="contact__cta contact__cta--secondary" download>
              Download CV (PDF)
            </a>
          </div>
          <p className="contact__copy-status" role="status" aria-live="polite" aria-atomic="true">
            {copyStatus === 'copied' && 'Email address copied to clipboard.'}
            {copyStatus === 'unavailable' && 'Clipboard access is unavailable in this browser. Use the email link above.'}
            {copyStatus === 'failed' && 'Clipboard access was blocked. Use the email link above.'}
          </p>
        </div>

        <div className="contact__right">
          <div className="contact__card">
            <div className="contact__card-header">
              <span className="contact__card-dot contact__card-dot--red" />
              <span className="contact__card-dot contact__card-dot--yellow" />
              <span className="contact__card-dot contact__card-dot--green" />
              <span className="contact__card-title">Start a conversation</span>
            </div>

            <div className="contact__card-body">
              <div className="contact__info">
                <a href={`mailto:${personalInfo.email}`} className="contact__info-item">
                  <span className="contact__info-icon">
                    <EmailIcon />
                  </span>
                  <div>
                    <span className="contact__info-label">Email</span>
                    <span className="contact__info-value">{personalInfo.email}</span>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone.replace(/[^\d+]/g, '')}`} className="contact__info-item">
                  <span className="contact__info-icon">
                    <PhoneIcon />
                  </span>
                  <div>
                    <span className="contact__info-label">Phone</span>
                    <span className="contact__info-value">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="contact__info-item contact__info-item--static">
                  <span className="contact__info-icon">
                    <LocationIcon />
                  </span>
                  <div>
                    <span className="contact__info-label">Location</span>
                    <span className="contact__info-value">{personalInfo.location}</span>
                  </div>
                </div>

                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__info-item" aria-label="LinkedIn (opens in new tab)">
                  <span className="contact__info-icon">
                    <LinkedInIcon />
                  </span>
                  <div>
                    <span className="contact__info-label">LinkedIn</span>
                    <span className="contact__info-value">Connect and send a note</span>
                  </div>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__info-item" aria-label="GitHub (opens in new tab)">
                  <span className="contact__info-icon">
                    <GithubIcon />
                  </span>
                  <div>
                    <span className="contact__info-label">GitHub</span>
                    <span className="contact__info-value">See code and experiments</span>
                  </div>
                </a>
              </div>

              <div className="contact__card-section">
                <span className="contact__section-label">Helpful first message</span>
                <ul className="contact__checklist">
                  {contactChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="contact__card-meta">
                <div>
                  <span className="contact__section-label">Availability</span>
                  <p>{personalInfo.availability}</p>
                </div>
                <div>
                  <span className="contact__section-label">Reply window</span>
                  <p>{personalInfo.responseTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__identity" href="#hero" aria-label="Syed Zohaib Kashif, back to top">
              <span className="footer__mark" aria-hidden="true">SZK</span>
              <span>
                <strong>Syed Zohaib Kashif</strong>
                <small>Mobile Engineer · Karachi, Pakistan</small>
              </span>
            </a>
            <p>Reliable mobile products and grounded AI workflows, built for real-world teams.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Selected work</a>
          </nav>

          <div className="footer__connect">
            <h3>Let’s connect</h3>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in new tab)">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in new tab)">
              <GithubIcon />
              GitHub
            </a>
            <a className="footer__top-link" href="#hero">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__text">
            © {new Date().getFullYear()} Syed Zohaib Kashif <span aria-hidden="true">·</span> Designed and built with care
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
