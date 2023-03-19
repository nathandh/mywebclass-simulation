const { test, expect } = require('@playwright/test');

test('Check Privacy Policy Page', async ({ page }) => {
  await page.goto('https://nathandh.github.io/mywebclass-simulation/privacy.html');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass.org | Privacy Policy');
});
