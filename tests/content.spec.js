const { test, expect } = require('@playwright/test')

test('Check Privacy Policy Page', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html')
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Content')
})
