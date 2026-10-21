import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.IntersectionObserver = class IntersectionObserver {
  static instances = [];

  constructor(callback) {
    this.callback = callback;
    globalThis.IntersectionObserver.instances.push(this);
  }

  observe(target) {
    this.target = target;
  }

  disconnect() {}
};

describe('responsive primary navigation', () => {
  let container;
  let root;
  let fixture;
  let originalWidth;
  let originalOverflow;

  beforeEach(() => {
    originalWidth = window.innerWidth;
    originalOverflow = document.body.style.overflow;
    window.innerWidth = 390;
    globalThis.IntersectionObserver.instances = [];
    fixture = document.createElement('div');
    ['about', 'skills', 'experience', 'projects', 'contact'].forEach((id) => {
      const section = document.createElement('section');
      section.id = id;
      fixture.appendChild(section);
    });
    document.body.appendChild(fixture);
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<Navbar />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
    fixture.remove();
    window.innerWidth = originalWidth;
    document.body.style.overflow = originalOverflow;
  });

  test('hides closed mobile links from assistive technology and keyboard focus', () => {
    const panel = container.querySelector('#site-navigation');

    expect(panel.getAttribute('aria-hidden')).toBe('true');
    expect(
      [...panel.querySelectorAll('.navbar__link')].every(
        (link) => link.getAttribute('tabindex') === '-1'
      )
    ).toBe(true);
  });

  test('opens as a labeled, scroll-locked drawer and closes on Escape', () => {
    document.body.style.overflow = 'auto';
    const trigger = container.querySelector('.navbar__burger');

    act(() => {
      trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const panel = container.querySelector('#site-navigation');
    expect(panel.getAttribute('aria-hidden')).toBe('false');
    expect(panel.querySelector('h2').textContent).toBe('Navigate');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.activeElement.textContent).toBe('About');

    const focusable = panel.querySelectorAll('a[href], button:not(:disabled)');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    last.focus();
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    });
    expect(document.activeElement).toBe(first);

    first.focus();
    act(() => {
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
      );
    });
    expect(document.activeElement).toBe(last);

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });

    expect(panel.getAttribute('aria-hidden')).toBe('true');
    expect(document.body.style.overflow).toBe('auto');
    expect(document.activeElement).toBe(trigger);
  });

  test('keeps desktop navigation visible and keyboard-accessible', () => {
    act(() => {
      container.querySelector('.navbar__burger').dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
    });
    container.querySelector('.navbar__menu-close').focus();
    window.innerWidth = 1024;
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    const panel = container.querySelector('#site-navigation');
    expect(panel.getAttribute('aria-hidden')).toBe('false');
    expect(container.querySelector('.navbar__link').hasAttribute('tabindex')).toBe(false);
    expect(document.activeElement).toBe(container.querySelector('.navbar__link'));
  });

  test('clears a stale section highlight when leaving that section', () => {
    const observer = globalThis.IntersectionObserver.instances[0];
    const about = fixture.querySelector('#about');

    act(() => {
      observer.callback([{ target: about, isIntersecting: true }]);
    });
    expect(container.querySelector('.navbar__link--active').getAttribute('href')).toBe('#about');

    act(() => {
      observer.callback([{ target: about, isIntersecting: false }]);
    });
    expect(container.querySelector('.navbar__link--active')).toBeNull();
  });
});
