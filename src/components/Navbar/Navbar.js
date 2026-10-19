import { useEffect, useState } from 'react';
import { personalInfo } from '../../utils/data';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: '-18% 0px -62% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Primary">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <span className="navbar__logo-mark">SZK</span>
            <span className="navbar__logo-text">Zohaib Kashif</span>
          </a>

          <div className={`navbar__menu-shell${menuOpen ? ' navbar__menu-shell--open' : ''}`}>
            <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} id="site-navigation">
              {navLinks.map(({ label, href }) => {
                const isActive = active === href.slice(1);

                return (
                  <li key={label}>
                    <a
                      href={href}
                      className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <a href={`mailto:${personalInfo.email}`} className="navbar__cta">
            Email Me
          </a>

          <button
            type="button"
            className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={`navbar__backdrop${menuOpen ? ' navbar__backdrop--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
};

export default Navbar;
