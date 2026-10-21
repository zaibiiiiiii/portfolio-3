import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Contact from './Contact';
import { personalInfo } from '../../utils/data';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.IntersectionObserver = class IntersectionObserver {
  observe() {}
  disconnect() {}
};
window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
}));

describe('contact actions', () => {
  let container;
  let root;
  let originalClipboard;
  let clipboardDescriptor;

  beforeEach(() => {
    originalClipboard = navigator.clipboard;
    clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<Contact />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
    if (clipboardDescriptor) {
      Object.defineProperty(navigator, 'clipboard', clipboardDescriptor);
    } else {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: originalClipboard,
      });
    }
  });

  test('confirms when the email address is copied', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    await act(async () => {
      container.querySelector('.contact__cta--secondary').dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
      await Promise.resolve();
    });

    expect(writeText).toHaveBeenCalledWith('zohaibkashif@hotmail.com');
    expect(container.querySelector('[role="status"]').textContent).toContain(
      'Email address copied to clipboard.'
    );
  });

  test('explains clipboard denial without unexpectedly opening an email draft', async () => {
    const writeText = jest.fn().mockRejectedValue(new Error('permission denied'));
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    await act(async () => {
      container.querySelector('.contact__cta--secondary').dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
      await Promise.resolve();
    });

    expect(container.querySelector('[role="status"]').textContent).toContain(
      'Clipboard access was blocked.'
    );
  });

  test('renders footer navigation and working email and LinkedIn destinations', () => {
    expect(container.querySelector('.footer__identity').getAttribute('href')).toBe('#hero');
    expect(container.querySelector('.footer__nav a[href="#projects"]')).toBeTruthy();
    expect(
      container.querySelector('a[href="mailto:zohaibkashif@hotmail.com"]')
    ).toBeTruthy();
    const linkedinLink = container.querySelector('.footer__connect a[target="_blank"]');
    expect(linkedinLink.getAttribute('href')).toBe(personalInfo.linkedin);
    expect(linkedinLink.getAttribute('rel')).toBe('noreferrer');
  });
});
