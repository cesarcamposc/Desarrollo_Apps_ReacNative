//función FOREACH
//Sintáxis es la siguiente:

//arr.forEach(<function>);

//la función forEach pasa una funcion callback para cada elemento del array junto con los siguiente parámetros:

//valor actual(requerido) - Es el valor del elemento actual del array.
//Index(opcional) - Es el número de índice del elemento actual.
//array(opcional) - Es el Objeto del array al que pertenece el elem ento actual

//Teniendo en cuenta el siguiente array:
//const numeros = [10 , 20 , 30 , 40 , 50];

//utilizando el método tradicional "for " para recorrer el array, sería asi:
/*
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);    
}
*/
// 1. para recorrer el array utilizando la función forEach, se necesita una función callback:
/*
numeros.forEach(function(){
    //código
});
*/
// 2.la función se ejejecutará para cada elemento del array. debe tomar al menos un parámetro que represente los elementos del array:
/*
numeros.forEach(function(numero) {
    console.log(numero);    
})
*/
//la representación de la función arrow del código es la siguiente:

//numeros.forEach(numero => console.log(numero));
/*
numeros.forEach((numero,index)  => {
    console.log('Indice: '+ index + ' valor:' + numero)
});
*/
/*
numeros.forEach((numero, index, arr)  => {
    console.log('Indice: '+ index + ' valor:' + numero + ' array: ' + arr);
});
*/
//Escribir un programa en el cual tenemos una array que tiene un número impar en el primer lugar y varios números pares seguidos. se solicita eliminar el número impar del array usando forEach().
/*
let numeros = [5, 8, 10, 12, 14];
let numeroAeliminar = 5;

numeros.forEach(function(numero){
    if (numero === numeroAeliminar){
        numeros.shift()
    }
})

console.log(numeros);
*/
//Función filter
//Sintáxis

//arr.filter(funtion());

//la función filter proporciona parámetros a al función filter y pasará los valores en el siguiente orden:

//function callbackfn(valor: any, index: Number, array:any[])

//Ejemplo:

//Teniendo en cuenta el siguiente array:
/*
const arr = [10 , 20 , 30 , 40 , 50];

const arr1 = arr.filter(mayoresA30 => mayoresA30 > 30);

console.log("El Array inicial es = ", arr);

console.log("Los elementos del array que son mayor que 30 = ", arr1);
*/

//Función MAP
//Aplica una función a cada elemento del array y crea un nuevo array de los valores devueltos.

//Sintáxis
//arr.map(function());

//function callbackfn(valor: any, index: Number, array:any[])
//Ejemplo:
/*
//Teniendo en cuenta el siguiente array:
const arr = [10 , 20 , 30 , 40 , 50];

const arr1 = arr.map( valorDoble => valorDoble * 2);

console.log("El Array inicial es = ", arr);

console.log("El doble de valor de cada elemento del array = ", arr1);
*/
//Funcion Reduce
//Reduce el array a un solo valor de izquierda a derecha. Deja el array original sin cambios cuando se aplica.
//Sintáxis

//arr.reduce(function());
//function callbackfn(prev: any, valor: any, index: Number, array:any[])
//Ejemplo:

//Teniendo en cuenta el siguiente array:
const arr = [10 , 20 , 30 , 40 , 50];

const valor = arr.reduce((previus, actual) => previus + actual);

console.log("El Array inicial es = ", arr);

console.log("El valor retornado por reduce = ", valor);

//Escribir un programa en el cual se proporciona una serie de objetos que representan un grupo de estudiantes, cada uno con un nombre y una serie de puntuaciones de exámenes. 
//Se solicita usar map, filter y reduce para calcular el puntaje promedio de la prueba para cada estudiante y devolver un array de objetos que contengan solo a los estudiantes que tienen un puntaje superior a 90 .

const estudiantes = [
    {nombre : "Carlos", puntuacion: [90, 85, 92]},
    {nombre : "Renzo", puntuacion: [75, 80, 85]},
    {nombre : "Miguel", puntuacion: [90, 95, 85]},
    {nombre : "Maycol", puntuacion: [100, 100, 100]},
]

//usamos el método map y reduce para calcular el promedio de puntuación de cada estudiante
const promedioEstudiante = estudiantes.map( estudiante => {
    
    const suma = estudiante.puntuacion.reduce(( adicion, puntaje )=>adicion + puntaje);

    return { nombre: estudiante.nombre , promedio: suma / estudiante.puntuacion.length };
})

//usamos el método filter para seleccionar a los estudiantes con el promedio mayor de 90.

const altoPromedio = promedioEstudiante.filter(estudiante=>estudiante.promedio > 90);

console.log(altoPromedio);


