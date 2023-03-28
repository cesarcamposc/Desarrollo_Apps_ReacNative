//SENTENCIA FOR
//Sintaxis
//for
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

// Escribir un programa para calcular la tabla de multiplicar de un número del 1 al 10
/*
let ingresarNumero = parseInt(prompt('Ingrese el número : '));

for (let i = 1; i < 11; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + ' X ' + i + ' = ' + resultado);    
}
*/
//Escribir un programa que solicite la edad a cuatro usuarios y determinar si son adultos
/*
let edad;
for (let i = 1; i <= 4 ; i++){
       edad = parseInt(prompt('Ingrese su edad en cifras : '));
       if (edad < 18 ) {
        alert('Es Ud. menor de edad');     
       } else {
        alert('Es Ud. Mayor de edad');        
       }
}
*/
// Escribir un programa que simule el recorrido por todos los pisos de un edificio,visitando todas las puertas(nuestro edificio tiene solo dos plantas, con tres vecinos en cada una).

let piso , puerta;

for (let piso = 1; piso < 3; piso++) {
    for (let puerta = 1; puerta <= 3; puerta++) {
        alert('Piso = ' + piso + " " +'Puerta = ' + puerta); 
       
    }
  
}



