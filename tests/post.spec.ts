import { test, expect } from '@playwright/test';


test('Form', async ({ page }) => {
  await page.route('/api/post', async route => {
    await route.fulfill({ json: { message: 'OK' }, status: 200 })
  })

  await page.goto('/');

  await page.getByRole('textbox', { name: 'name' }).fill('Rick');
  await page.getByRole('textbox', { name: 'password' }).fill('Secret');
  await page.getByRole('button', { name: 'Login' }).click();

  const response = await page.waitForResponse('/api/post');
  const json = await response.json();
  expect(json.message).toEqual('OK')
});
