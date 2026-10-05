import { test, expect, Page} from "@playwright/test";

//Array de textos
type User = {
    username: string;
    password: string;
}

// contiene una array de usuario con n valores
const users: User[] = [
     {username: "standard_user", password: "secret_sauce"},
    {username: "locked_out_user", password: "secret_sauce"},
    {username: "problem_user", password: "secret_sauce"},
    {username: "performance_glitch_user", password:"secret_sauce"},
]

//funtion to get      a user by username (funtion (nombre) (parametros): tipo de retorno)
// Clase utilizaria puede tener multiples funciones
function getUserFuntion(username : string): User | undefined {
    return  users.find((user) => user.username === username)
}
//Arrow funtion to get      a user by username (funtion (nombre) (parametros) ): tipo de retorno)
//Se utiliza cuando sabemos que va a retornar, mas directa
function getUserArrowFuntion(username : string): User | undefined {
    return  users.find((user) => user.username === username)
}

//Validate Funtion- Funcion asincrona
//await la pagina hace las esperas
 async function validateError(page : Page): Promise<boolean> {
    return await page.locator('[data-test="error"]').isVisible();
}


//Usuario estandar- Llamado a la pagina, encontrar el input y setear el user name
// igual para el input de la contraseña
test("Login whith standard user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");

    const standarUser: User  | undefined = getUserFuntion("standar_user");

    await page.locator("input#user-name").fill(standarUser?.username || "");
    await page.locator("//input[@id='password']").fill(standarUser?.password || "");
    
    await page.getByRole("button", { name: "login"}).click();
});


// Problema en el usuario
// Mismo pasos diferente resultado
test("Login whith problem user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    const problem_user: User  | undefined = getUserFuntion("problem_user");

    await page.locator("input#user-name").fill(problem_user?.username || "");
    await page.locator("//input[@id='password']").fill(problem_user?.password || "");
    
    await page.getByRole("button", { name: "login"}).click();
});
 // Usuario bloqueado
test("Login whith locked out user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    const locked_Out_user: User  | undefined = getUserFuntion("locked_out_user");

    await page.locator("input#user-name").fill(locked_Out_user?.username || "");
    await page.locator("//input[@id='password']").fill(locked_Out_user?.password || "");
    
    await page.getByRole("button", { name: "login"}).click();

    const result: boolean = await validateError(page);
    expect(result, "Expect rror message not found = true").toBe(true);
});

