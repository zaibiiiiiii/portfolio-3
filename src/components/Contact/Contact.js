import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../utils/data';
import './Contact.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact__inner${isVisible ? ' contact__inner--visible' : ''}`}>
        <div className="contact__left">
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's build something<br />
            <span className="contact__title-accent">great together.</span>
          </h2>
          <p className="contact__description">
            I'm open to new roles, freelance projects, and collaborations. Whether you have a mobile app idea
            or need an experienced Flutter developer — let's talk.
          </p>

          <div className="contact__info">
            <a href={`mailto:${personalInfo.email}`} className="contact__info-item">
              <span className="contact__info-icon"><EmailIcon /></span>
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">{personalInfo.email}</span>
              </div>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact__info-item">
              <span className="contact__info-icon"><PhoneIcon /></span>
              <div>
                <span className="contact__info-label">Phone</span>
                <span className="contact__info-value">{personalInfo.phone}</span>
              </div>
            </a>
            <div className="contact__info-item contact__info-item--static">
              <span className="contact__info-icon"><LocationIcon /></span>
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact__linkedin"
          >
            <LinkedInIcon />
            <span>Connect on LinkedIn</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="contact__right">
          <div className="contact__card">
            <div className="contact__card-header">
              <span className="contact__card-dot contact__card-dot--red" />
              <span className="contact__card-dot contact__card-dot--yellow" />
              <span className="contact__card-dot contact__card-dot--green" />
              <span className="contact__card-title">Quick Message</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer__text">
          Designed & built by <span className="footer__name">Syed Zohaib Kashif</span> — {new Date().getFullYear()}
        </p>
        <p className="footer__stack">Flutter · React Native · Firebase</p>
      </footer>
    </section>
  );
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name.value}\n\n${form.message.value}`
    );
    window.location.href = `mailto:zohaibkashif@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label className="contact-form__label">Your Name</label>
        <input
          name="name"
          className="contact-form__input"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="contact-form__group">
        <label className="contact-form__label">Email Address</label>
        <input
          name="email"
          type="email"
          className="contact-form__input"
          placeholder="john@company.com"
          required
        />
      </div>
      <div className="contact-form__group">
        <label className="contact-form__label">Message</label>
        <textarea
          name="message"
          className="contact-form__textarea"
          placeholder="Tell me about your project..."
          rows={5}
          required
        />
      </div>
      <button type="submit" className="contact-form__submit">
        Send Message
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </form>
  );
};

export default Contact;
