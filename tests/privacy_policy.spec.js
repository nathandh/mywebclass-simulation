const { test, expect } = require('@playwright/test')

test('Should have a privacy policy page', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const privacyPolicyLink = await page.$('a[href="/privacy-policy"]')
  expect(privacyPolicyLink).not.toBeNull()
})
