import { test, expect} from "@playwright/test";

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
    
    const locked_out_user: User  | undefined = getUserFuntion("locked_out_user");
    
    //desestructuracion:
    //Hace el llamado de la constante con los valores especificos que necesitamos
    await page.locator("input#user-name").fill(locked_out_user?.username || "");
    await page.locator("//input[@id='password']").fill(locked_out_user?.password || "");
    
    await page.getByRole("button", { name: "login"}).click();
});
 // Usuario bloqueado
test("Login whith locked out user", async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    
    await page.locator("input#user-name").fill(users[1].username);
    await page.locator("//input[@id='password']").fill(users[1].username);
    
    await page.getByRole("button", { name: "login"}).click();
});

