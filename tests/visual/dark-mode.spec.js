const { test, expect } = require('@playwright/test');

test.describe('Portfolio Dark Mode Verification', () => {
  test.use({
    viewport: { width: 1280, height: 900 },
  });

  test.beforeEach(async ({ page }) => {
    // Navigate to the local dev server
    await page.goto('http://localhost:3000');
    // Wait for the theme provider to hydrate
    await page.waitForTimeout(1000);
  });

  test('Light mode shows correct colors', async ({ page }) => {
    // Verify light mode is default
    const htmlTheme = await page.locator('html').getAttribute('data-theme');
    expect(htmlTheme).toBeNull();

    // Verify light mode CSS variables
    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    const ink = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--ink').trim());
    const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());

    expect(bg).toBe('#fcfcfb');
    expect(ink).toBe('#101619');
    expect(accent).toBe('#0e7086');

    // Take screenshot of light mode hero
    await page.locator('#hero').screenshot({ path: 'tests/visual/screenshots/light-hero.png' });
  });

  test('Dark mode toggles correctly', async ({ page }) => {
    // Click the theme toggle in the navbar
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();

    // Verify initial state is light
    let htmlTheme = await page.locator('html').getAttribute('data-theme');
    expect(htmlTheme).toBeNull();

    // Toggle to dark
    await themeToggle.click();
    await page.waitForTimeout(500);

    htmlTheme = await page.locator('html').getAttribute('data-theme');
    expect(htmlTheme).toBe('dark');

    // Verify dark mode CSS variables
    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    const ink = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--ink').trim());
    const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());

    expect(bg).toBe('#0c1316');
    expect(ink).toBe('#f1f7f6');
    expect(accent).toBe('#66c9ae');

    // Verify color-scheme changed
    const colorScheme = await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme);
    expect(colorScheme).toBe('dark');

    // Take screenshot of dark mode hero
    await page.locator('#hero').screenshot({ path: 'tests/visual/screenshots/dark-hero.png' });
  });

  test('Dark mode persists across sections', async ({ page }) => {
    // Toggle to dark
    await page.locator('.theme-toggle').click();
    await page.waitForTimeout(500);

    // Scroll to different sections and verify dark mode stays
    await page.locator('#about').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    expect(await page.locator('html').getAttribute('data-theme')).toBe('dark');

    await page.locator('#projects').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    expect(await page.locator('html').getAttribute('data-theme')).toBe('dark');

    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    expect(await page.locator('html').getAttribute('data-theme')).toBe('dark');

    // Take full page screenshot in dark mode
    await page.screenshot({ path: 'tests/visual/screenshots/dark-full-page.png', fullPage: true });
  });

  test('Theme toggle switches back to light', async ({ page }) => {
    // Toggle to dark
    await page.locator('.theme-toggle').click();
    await page.waitForTimeout(500);
    expect(await page.locator('html').getAttribute('data-theme')).toBe('dark');

    // Toggle back to light
    await page.locator('.theme-toggle').click();
    await page.waitForTimeout(500);

    const htmlTheme = await page.locator('html').getAttribute('data-theme');
    expect(htmlTheme).toBeNull();

    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    expect(bg).toBe('#fcfcfb');
  });

  test('Theme toggle aria-label updates', async ({ page }) => {
    const toggle = page.locator('.theme-toggle');

    // Light mode - label should say "Switch to dark mode"
    await expect(toggle).toHaveAttribute('aria-label', 'Switch to dark mode');

    // Toggle to dark
    await toggle.click();
    await page.waitForTimeout(500);

    // Dark mode - label should say "Switch to light mode"
    await expect(toggle).toHaveAttribute('aria-label', 'Switch to light mode');

    // Toggle back
    await toggle.click();
    await page.waitForTimeout(500);
    await expect(toggle).toHaveAttribute('aria-label', 'Switch to dark mode');
  });
});
