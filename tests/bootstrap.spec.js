const { test, expect } = require('@playwright/test');

test('Check if Bootstrap is loaded', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const isBootstrapLoaded = await page.evaluate(() => {
    const links = document.getElementsByTagName('link');
    for (const link of links) {
      if (link.rel === 'stylesheet' && link.href.includes('bootstrap')) {
        return true;
      }
    }
    return false;
  });

  expect(isBootstrapLoaded).toBe(true);
});
