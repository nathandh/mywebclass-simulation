const { test, expect } = require('@playwright/test')

test('Check for Bootstrap', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const bootstrapPresent = await page.evaluate(() => {
    return Boolean(window.bootstrap)
  })

  expect(bootstrapPresent).toBe(true)
})
