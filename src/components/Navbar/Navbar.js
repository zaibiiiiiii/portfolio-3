import { useEffect, useRef, useState } from 'react';
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
  const [isMobileNav, setIsMobileNav] = useState(window.innerWidth <= 860);
  const [active, setActive] = useState('');
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const wasMenuOpen = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      if (wasMenuOpen.current) {
        wasMenuOpen.current = false;
        if (isMobileNav) {
          triggerRef.current?.focus();
        } else {
          menuRef.current?.querySelector('.navbar__link')?.focus();
        }
      }
      return undefined;
    }

    wasMenuOpen.current = true;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll('a[href], button:not(:disabled)');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNav, menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const mobileNav = window.innerWidth <= 860;
      setIsMobileNav(mobileNav);
      if (!mobileNav) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibleSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const currentSection = [...navLinks]
          .reverse()
          .find(({ href }) => visibleSections.has(href.slice(1)));
        setActive(currentSection?.href.slice(1) || '');
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

          <div
            ref={menuRef}
            className={`navbar__menu-shell${menuOpen ? ' navbar__menu-shell--open' : ''}`}
            id="site-navigation"
            role="group"
            aria-label="Mobile navigation"
            aria-hidden={isMobileNav && !menuOpen}
          >
            <div className="navbar__menu-heading">
              <div>
                <span className="navbar__menu-kicker">Explore</span>
                <h2>Navigate</h2>
              </div>
              <button
                type="button"
                className="navbar__menu-close"
                onClick={() => setMenuOpen(false)}
                tabIndex={isMobileNav && menuOpen ? 0 : -1}
                aria-label="Close menu"
              >
                <span />
                <span />
              </button>
            </div>
            <ul className="navbar__links">
              {navLinks.map(({ label, href }) => {
                const isActive = active === href.slice(1);

                return (
                  <li key={label}>
                    <a
                      href={href}
                      className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                      tabIndex={isMobileNav ? (menuOpen ? 0 : -1) : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={`mailto:${personalInfo.email}`}
              className="navbar__menu-cta"
              tabIndex={isMobileNav ? (menuOpen ? 0 : -1) : undefined}
            >
              <span>Have a project in mind?</span>
              <strong>Let’s talk <span aria-hidden="true">↗</span></strong>
            </a>
          </div>

          <a href={`mailto:${personalInfo.email}`} className="navbar__cta">
            Email Me
          </a>

          <button
            ref={triggerRef}
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
        aria-label="Close navigation menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
};

export default Navbar;
