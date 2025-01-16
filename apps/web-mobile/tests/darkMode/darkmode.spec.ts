import { expect, test,  } from '@playwright/test';

test('has', async ({ page }) => {
  await page.goto('/settings/profile');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Dark Mode Preference");
});
