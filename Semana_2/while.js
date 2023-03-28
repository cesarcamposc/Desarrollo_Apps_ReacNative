//SENTENCIA WHILE
//SINTÁXIS
/*
while();

while (condition) {
    
}

let repetir = false;
  while(repetir){
    console.log("Al infinito y...¡Más allá!");
  }
*/

//Escribir un programa que solicite al usuario ingresar un número, el programa nos mencionará cuántas veces hay que sumar ese número consigo mismo para obtener 100 o más.

let numero, suma, veces = 0;

numero = parseInt(prompt('Introduzca un número en cifras : '));

suma = numero;

while (suma <= 100) {
    suma += numero; // suma = suma + numero;
    veces++; // veces = veces + 1;    
}
alert('la suma se ha realizado ' + veces + ' veces');


// Escribir un programa que solicite una clave y no deje continuar mientras no se introduzca la palabra adecuada.

