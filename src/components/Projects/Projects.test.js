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
    expect(container.querySelector('.app-project__device-caption').textContent).toContain(
      'Product screen'
    );
    expect(container.querySelector('.app-project__device-stage .app-project__device-caption')).toBeNull();
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

  test('highlights distinctive app capabilities and keeps deeper implementation notes expandable', () => {
    expect(container.querySelectorAll('.app-project__feature').length).toBe(7);
    expect(container.textContent).toContain('Checkpoint verification without geofencing');
    expect(container.textContent).toContain('Indoor positioning and 3D routes');
    expect(container.textContent).toContain('Wearable safety integrations');
    expect(container.textContent).toContain('Site cameras without GPS');
    expect(container.querySelectorAll('.app-project__details').length).toBe(3);
    expect(container.querySelector('.app-project__details').open).toBe(false);
  });

  test('shows Optima AI Factory as a case study with its delivery workflow details', () => {
    expect(container.textContent).toContain('Optima AI Factory');
    expect(container.textContent).toContain('Additional product work');
    expect(container.textContent).not.toContain('Additional mobile work');
    expect(container.textContent).toContain('MCP-connected semantic retrieval');
    expect(container.textContent.toLowerCase()).toContain('isolated docker sandboxes');
    expect(container.querySelectorAll('.other-project__highlights li').length).toBeGreaterThanOrEqual(5);
  });

  test('changes the featured screenshot when a thumbnail is selected', () => {
    const screenshot = container.querySelector('.app-project__image');
    const thumbnail = container.querySelector(
      'button[aria-label="Show Novus Guard Control Task management"]'
    );

    expect(screenshot.alt).toBe(
      'Novus Guard Control app screen: Operations overview'
    );
    expect(thumbnail.getAttribute('aria-pressed')).toBe('false');
    expect(thumbnail.getAttribute('aria-label')).toBe(
      'Show Novus Guard Control Task management'
    );

    act(() => {
      thumbnail.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.querySelector('.app-project__image').alt).toBe(
      'Novus Guard Control app screen: Task management'
    );
    expect(
      container.querySelector(
        'button[aria-label="Show Novus Guard Control Task management"]'
      ).getAttribute('aria-pressed')
    ).toBe('true');
  });

  test('shows code-backed patrol and control-room capabilities', () => {
    expect(container.textContent).toContain('floor plans');
    expect(container.textContent).toContain('remaining route');
    expect(container.textContent).toContain('nearest waypoint');
    expect(container.textContent).toContain('room, door, and stair detection');
    expect(container.textContent).toContain('3D previews');
    expect(container.textContent).toContain('RSSI-based WKNN');
    expect(container.textContent).toContain('J-Style 2208A/V1S');
    expect(container.textContent).toContain('Eview 4G pendants');
    expect(container.textContent).toContain('IP cameras and NVRs');
    expect(container.textContent).toContain('without needing GPS');
    expect(container.textContent).toContain('release-dependent');
  });
});
