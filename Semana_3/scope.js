//Alcance Global

//Escribir un programa para imprimir un texto
/*
let texto = "HOla estamos en Scope de Javascript";

function saludar() {
    console.log(texto);    
}

saludar();
*/
//Escribir un programa que muestre el cambio dentro de una función
/*
let texto = "HOla estamos en Scope de Javascript";

function saludar(){
    texto = 20;
}

console.log(texto);

saludar();
console.log(texto);
*/
// Scope Local

//Escribir un programa que nos muestre el alcance local de una variable

let texto1 = "HOla estamos en Scope de Javascript";

function saludar(){
    let texto2 = "Y seguimos avanzando";
    console.log(texto1 + texto2);

}

saludar();
console.log(texto1 + texto2);