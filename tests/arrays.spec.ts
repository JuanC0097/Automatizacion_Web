import { test, expect} from "@playwright/test";

//Array de textos
const usernames: String[] = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    //
    "performance_glitch_user",
];
// Variable User -- Objeto compuesto x tipo de usuario y contraseña
const users: {username: string; password: string} [] = [
    {username: "standard_user", password: "secret_sauce"},
    {username: "locked_out_user", password: "secret_sauce"},
    {username: "problem_user", password: "secret_sauce"},
    {username: "performance_glitch_user", password:"secret_sauce"},
];


//Usuario estandar- Llamado a la pagina, encontrar el input y setear el user name
// igual para el input de la contraseña
test("Login whith standard user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");

   const {username , password} = users[0];

    await page.locator("input#user-name").fill(username);
    await page.locator("//input[@id='password']").fill(password);
    
    await page.getByRole("button", { name: "login"}).click();
});

// Problema en el usuario
// Mismo pasos diferente resultado
test("Login whith problem user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    //desestructuracion:
    //toma del objeto al usuario con problemas
    const { username,password} = users[2];
    //Hace el llamado de la constante con los valores especificos que necesitamos
    await page.locator("input#user-name").fill(username);
    await page.locator("//input[@id='password']").fill(password);
    
    await page.getByRole("button", { name: "login"}).click();
});
 // Usuario bloqueado
test("Login whith locked out user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    const {username,password} = users[1];
    await page.locator("input#user-name").fill(users[1].username);
    await page.locator("//input[@id='password']").fill(users[1].username);
    
    await page.getByRole("button", { name: "login"}).click();
});

