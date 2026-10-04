import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//Creacion de nuevoTest('Creacion de nuevo Test', async ({ page }) => {
//   await page.goto('https://playwright.dev/'); elegimos el URL a probar
//Await nos permite manejar metodos
// utilizando wait con el elemento textbox y el nombre del elemento a probar
//Eso nos permite buscar el elemento en 
test("create login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //Permite buscar por label
  await page.getByLabel("Username").fill("standard_user");
  //Permite buscar por locator(validar en devtools)
 // await page.locator("input#username").fill("standard_user");
  //Permite buscar por roll
  //await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  //Permite buscar por roll
  //await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  //Permite buscar por placeholder
  await page.getByPlaceholder("Password").fill("secret_sauce");
  //await page.getByRole("textbox", { name: "Login" }).fill("standard_user");
})