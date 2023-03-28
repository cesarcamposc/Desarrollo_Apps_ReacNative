//Esribir una función que devuelva el cuadrado de un número, la función recibe como parámetro en la llamada a la función.
/*
function cuadrado(numero) {
    return numero*numero;    
}

console.log(cuadrado(9));
*/
//Escribir un programa que solicite al usuario un nombre y mostrarlo por un alert
/*
let ingresarNombre = prompt('Ingresar nombre:');
alert('El nombre ingresado es : ' + ingresarNombre);
*/
/*
function solicitarNombre() {
    let ingresarNombre = prompt('Ingresar nombre:');
    alert('El nombre ingresado es : ' + ingresarNombre);
    
}

solicitarNombre();
solicitarNombre();
*/
//escribir un programa que imprima un texto declarando una función
/*
function mostrarTexto(texto) {
    alert('Hola '+ texto);  
}

let texto = prompt('ingrese el texto : ');

mostrarTexto(texto);
*/

//Escribir un programa que imprima dos números, los números son de vacas y pollos en una granja, con las palabras Vacas Y Pollos después de ellos, y ceros antes de ambos números para que siempre tengan tres dígitos de largo.
//007 Vacas
//015 Pollos
// la función debe recibir dos parámetros: el número de vacas y de pollos
/*

function imprimirInventarioGranja(vacas , pollos) {

    let stringVaca = String(vacas);
    while (stringVaca.length < 3 ) {
        stringVaca = "0" +  stringVaca;               
    }

    console.log(`${stringVaca} Vacas`);
    
    let stringPollo = String(pollos);
    while (stringPollo.length < 3 ) {
        stringPollo = "0" +  stringPollo;               
    }

    console.log(`${stringPollo} Pollos`);
}

imprimirInventarioGranja(7 , 15);

*/
//funciones anónimas
/*
const suma = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };
console.log(suma(15,20));
console.log(resta(15,5));
*/
//funciones arrow o de flecha
//const suma = (numero1, numero2) =>{ return numero1 + numero2};

//si es una función de una sola línea con return podemos evitar escribir el cuerpo de la función.
/*
const suma = (numero1, numero2) => numero1 + numero2;

console.log(suma(25,30));
*/
//Escribir un programa de tipo function arrow para calcular el precio de venta de un producto en función a su impuesto(igv), precio del producto y descuento.

const suma = (a,b) => a+b;
const resta = (a,b) => a-b; 

const igv = x => x * 0.18;
let precioProducto = 100;
let precioDescuento = 10;

//calculo del precio de venta =  precioProducto + IGV - descuento.
let precioVenta = resta(suma(precioProducto, igv(precioProducto) ),precioDescuento) ;

console.log(precioVenta);

//Escribir un programa para convertir la siguiente función de javascript en sintáxis de la función flecha o arrow.

function funcContador(contador) {
    if (contador >100){
        contador = 0;
    }else {
        contador++;
    }
    return contador;
  
}

const funcContador = (contador) =>{
    if (contador >100){
        contador = 0;
    }else {
        contador++;
    }
    return contador;
}

//Escribir un programa de función flecha para lo siguiente:

function soloImpresion() {
    console.log("imprimiendo");     
}

const soloImpresion = ()=>console.log("imprimiendo");

//Escribir un programa de función flecha o arrow que tome como parámetro el peso en KG. el cual convertirá de Kg a libras(LBS), la fórmula es KG*2.2.

//si lbs es > 150, entonces la función devuelve "estás obeso".
//si lbs es entre 100 y 150, la función devuelve "estás bien".
//si lbs es < 100, esntonces la función devuelve "bajo de peso".