import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Projects from './Projects';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
}));

describe('project gallery widget', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<Projects />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
  });

  test('renders a phone preview and real app store links for published apps', () => {
    expect(container.querySelectorAll('.app-project__device').length).toBe(3);
    expect(
      container.querySelector(
        'a[href="https://apps.apple.com/us/app/novus-control/id1464115021"]'
      )
    ).toBeTruthy();
    expect(
      container.querySelector(
        'a[href="https://play.google.com/store/apps/details?id=com.novusguard&hl=en"]'
      )
    ).toBeTruthy();
    expect(
      container.querySelectorAll('.app-project__stores').length
    ).toBe(2);
  });

  test('shows Optima AI Factory as a case study with its delivery workflow details', () => {
    expect(container.textContent).toContain('Optima AI Factory');
    expect(container.textContent).toContain('MCP-connected semantic retrieval');
    expect(container.textContent.toLowerCase()).toContain('isolated docker sandboxes');
    expect(container.querySelectorAll('.other-project__highlights li').length).toBeGreaterThanOrEqual(5);
  });

  test('changes the featured screenshot when a thumbnail is selected', () => {
    const screenshot = container.querySelector('.app-project__image');
    const thumbnail = container.querySelector(
      'button[aria-label="Show Novus Guard Control Contracts and tasks"]'
    );

    expect(screenshot.alt).toBe(
      'Novus Guard Control app screen: Operations overview'
    );
    expect(thumbnail.getAttribute('aria-pressed')).toBe('false');

    act(() => {
      thumbnail.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.querySelector('.app-project__image').alt).toBe(
      'Novus Guard Control app screen: Contracts and tasks'
    );
    expect(
      container.querySelector(
        'button[aria-label="Show Novus Guard Control Contracts and tasks"]'
      ).getAttribute('aria-pressed')
    ).toBe('true');
  });
});
