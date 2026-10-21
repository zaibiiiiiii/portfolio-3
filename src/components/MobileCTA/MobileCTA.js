import { useEffect, useState } from 'react';
import { personalInfo } from '../../utils/data';
import './MobileCTA.css';

// Slim persistent action bar for phones: appears once the hero's own
// CTAs have scrolled away, hides again around the contact section.
const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let contactVisible = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      setVisible(window.scrollY > window.innerHeight * 0.65 && !contactVisible);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        onScroll();
      },
      { threshold: 0.02 }
    );
    const contact = document.getElementById('contact');
    if (contact) observer.observe(contact);

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`mobile-cta${visible ? ' mobile-cta--visible' : ''}`} aria-hidden={!visible}>
      <a
        href={`mailto:${personalInfo.email}`}
        className="mobile-cta__primary"
        tabIndex={visible ? 0 : -1}
      >
        Email me
      </a>
      <a
        href={personalInfo.cvUrl}
        className="mobile-cta__secondary"
        download
        tabIndex={visible ? 0 : -1}
      >
        CV
      </a>
    </div>
  );
};

export default MobileCTA;
