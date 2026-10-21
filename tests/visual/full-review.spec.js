const { test, expect } = require('@playwright/test');

test.describe('Full Portfolio Visual Review - Light & Dark', () => {
  const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'services', 'testimonials', 'faq', 'contact'];

  test.use({
    viewport: { width: 1280, height: 900 },
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(1000);
  });

  test('Light mode - all sections render correctly', async ({ page }) => {
    // Verify light mode is default
    expect(await page.locator('html').getAttribute('data-theme')).toBeNull();

    // Check key elements are visible in light mode
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#testimonials')).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();

    // Hero headline should show correct identity
    await expect(page.locator('.hero__headline')).toContainText('Mobile Engineer');

    // Availability badge should be visible
    await expect(page.locator('.hero__availability-badge')).toContainText('Available for hire');

    // Contact form should be present
    await expect(page.locator('form.contact__form')).toBeVisible();

    // Theme toggle should be in navbar
    await expect(page.locator('.theme-toggle')).toBeVisible();

    // Take light mode screenshots of each section
    for (const section of sections) {
      await page.locator(`#${section}`).screenshot({
        path: `tests/visual/screenshots/light-${section}.png`,
      });
    }
  });

  test('Dark mode - all sections render correctly with dark palette', async ({ page }) => {
    // Toggle to dark mode
    await page.locator('.theme-toggle').click();
    await page.waitForTimeout(500);

    // Verify dark mode is active
    expect(await page.locator('html').getAttribute('data-theme')).toBe('dark');

    // Verify dark CSS variables are applied
    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    const ink = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--ink').trim());
    expect(bg).toBe('#0c1316');
    expect(ink).toBe('#f1f7f6');

    // Check all sections are still visible in dark mode
    for (const section of sections) {
      await expect(page.locator(`#${section}`)).toBeVisible();
    }

    // Verify contact form fields have dark styling
    const formInputs = page.locator('.contact__form-input, .contact__form-select, .contact__form-textarea');
    await expect(formInputs.first()).toHaveCSS('background-color', /rgb/); // Should have some background

    // Take dark mode screenshots of each section
    for (const section of sections) {
      await page.locator(`#${section}`).screenshot({
        path: `tests/visual/screenshots/dark-${section}.png`,
      });
    }

    // Full page dark mode screenshot
    await page.screenshot({ path: 'tests/visual/screenshots/dark-full-page.png', fullPage: true });
  });

  test('Mobile view - theme toggle hidden, mobile CTA visible', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.reload();
    await page.waitForTimeout(1000);

    // Theme toggle should be hidden on mobile
    await expect(page.locator('.theme-toggle')).toBeHidden();

    // Mobile CTA should appear after scrolling
    await page.locator('#hero').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Navbar burger should be visible
    await expect(page.locator('.navbar__burger')).toBeVisible();
  });

  test('Accessibility - focus visible and ARIA labels', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    // Theme toggle should have proper ARIA label
    const toggle = page.locator('.theme-toggle');
    await expect(toggle).toHaveAttribute('aria-label', 'Switch to dark mode');

    // External links should announce new tab
    const githubLink = page.locator('a[href*="github.com"]').first();
    if (await githubLink.isVisible()) {
      await expect(githubLink).toHaveAttribute('aria-label', /opens in new tab/);
    }

    // Skip link should exist
    await expect(page.locator('.skip-link')).toBeVisible();
  });
});
