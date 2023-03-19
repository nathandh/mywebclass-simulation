const { test } = require('@playwright/test')
const assert = require('assert')

test('Sitemap.xml file is present', async ({ page }) => {
  await page.goto('https://example.com')

  const sitemapLinkTag = await page.$('link[rel="sitemap"]')

  assert.ok(sitemapLinkTag, 'Sitemap.xml file is not linked on the page')

  const sitemapResponse = await page.goto(sitemapLinkTag.getAttribute('href'))

  assert.equal(sitemapResponse.status(), 200, 'Sitemap.xml file is not accessible or not found')
})
