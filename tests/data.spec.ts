import { test, expect, Page} from "@playwright/test";
import { User,usuarios } from "./data/usuarios";




//Usuario estandar- Llamado a la pagina, encontrar el input y setear el user name
// igual para el input de la contraseña
test("Login whith standard user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");

    
    const user: User = usuarios[0];

    await page.locator("input#user-name").fill(user.username);
    await page.locator("//input[@id='password']").fill(user.password);
    await page.getByRole("button", { name: "login"}).click();
});


// Problema en el usuario
 //llamando el usuario con desestructuracion, para obtener el usuario y la contraseña
test("Login whith problem user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    const { username,password} = usuarios[2];

    await page.locator("input#user-name").fill(username);
    await page.locator("//input[@id='password']").fill(password);
    
    
    await page.getByRole("button", { name: "login"}).click();
});

 // Usuario bloqueado
 //llamando el usuario con desestructuracion, para obtener el usuario y la contraseña
test("Login whith locked out user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    const { username,password} = usuarios[2];

    await page.locator("input#user-name").fill(username);
    await page.locator("//input[@id='password']").fill("secret_sauce");
      

    await page.getByRole("button", { name: "login"}).click();

});
// Ejercicio Propio
test("Select radio button page", async ({ page }) => {

    await page.goto("https://demoqa.com/radio-button");

    // Seleccionar la opción Yes
    await page.getByText("Yes").click();

    // Validar el mensaje
    await expect(page.locator(".text-success"))
        .toHaveText("Yes");
});



