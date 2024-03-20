// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/paginaprueba.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Hoola");
});
