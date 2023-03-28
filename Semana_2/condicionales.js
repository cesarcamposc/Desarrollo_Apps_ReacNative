//condiconal
//sintáxis

/*
if (condition) {
    
}

if (condition) {
    
} else {
    
}
*/

//Escribir un programa que tome un número de entrada y muestre la suma de sus dígitos. Asumimos que el usuario ingresará un número positivo de hasta cuatro dígitos
/*
let suma = 0;

let numero = parseInt(prompt('Ingrese el número: '));
if (numero >0 && numero <= 9999) {
    suma += numero % 10;
    numero = parseInt(numero / 10);
    if (numero > 0) {
        suma += numero % 10;
        numero = parseInt(numero / 10);
    }

    if (numero > 0) {
        suma += numero % 10;
        numero = parseInt(numero / 10);
    }

    if (numero > 0) {
        suma += numero % 10;
        numero = parseInt(numero / 10);
    }
    alert("La suma de los dígitos es :" + suma);
    
} else {
    alert('El número es inválido');    
}
*/

//Escribir un  progama para verificar si el número ingresado es positivo
/*
let numero = parseInt(prompt("Ingrese el número : "));
if (numero > 0) {
    alert("El número es positivo");    
} else if(numero === 0) {
    alert("El número es cero");    
} else {
    alert("El número es negativo");
}
*/
//Escribir un programa que muestre el teorema de pitágoras en un plano bidimensional, para calcular la distancia entre los puntos es necesario utilizar cuatro variables.