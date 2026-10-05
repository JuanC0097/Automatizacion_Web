export type User = {
    username: string;
    password: string;
}

 export const usuarios: User[] = [
     {username: "standard_user", password: "secret_sauce"},
    {username: "locked_out_user", password: "secret_sauce"},
    {username: "problem_user", password: "secret_sauce"},
    {username: "performance_glitch_user", password:"secret_sauce"},
]