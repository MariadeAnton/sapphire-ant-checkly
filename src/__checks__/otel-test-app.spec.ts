import { test, expect } from '@playwright/test'

test('OpenTelemetry Browser Check', async ({ page }) => {
  const response = await page.goto('https://checkly-otel-test-app-mu.vercel.app/')
  expect(response?.status()).toBeLessThan(400)
})