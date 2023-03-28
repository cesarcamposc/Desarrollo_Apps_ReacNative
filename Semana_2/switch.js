//Estructura Switch
//Sintáxis
//switch
/*
switch (condition) {
    case value:
        
        break;

    default:
        break;
}
*/

// Escribir un programa en el cual nos permita ingersar las operaciones matemáticas(+ , - , * , /) a través de ña esctructura switch
/*
let operacion = prompt('Ingrese el tipo de operación suma, resta, multi,div ');

switch (operacion) {
    case 'suma':
        alert('la operación es de suma');        
        break;
        case 'resta':
        alert('la operación es de resta');        
        break;

    default:
        alert('No es ninguna operación');
        break;
}*/

// Escribir un programa de una calculadora simple

let resultado;
let operador = prompt('Ingrese el operador (+,-,*,/)');

let numero1 = parseInt(prompt('Ingrese el primer número : '));
let numero2 = parseInt(prompt('Ingrese el segundo número : '));

switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`);//interpolación de strings en javascript       
        break;

    default:
        alert('operador no es válido');
        break;
}

//Escribir un programa que solicite al usuario que ingrese un número del uno al diez(el usuario debe ingresar en cifras) y lo muestre escrito en letras, adicional si ingresa un número fuera del rango establecido le muestre un mensaje enviandole un error.