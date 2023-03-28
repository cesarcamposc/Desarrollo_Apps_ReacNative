/*let miVariable = 10;

//visualizar la salida
console.log(miVariable);
document.write(miVariable);
alert(miVariable);*/

/*
//declarando e inicializando en líneas separadas
let miTexto;
miTexto = 'Hello World';
alert(miTexto);
document.write(miTexto);
*/

/*
//concatenar con variables de tipo String(cadena):
var textoA = "SOMOS";
let textoB = "IDAT";
const blanco = " ";

let resultadoA = textoA + "\n" + textoB + "<br>";
document.write(resultadoA);

let resultadoB = textoB + '<br>';
document.write(resultadoB);

let resultadoC = textoA + blanco + textoB;
document.write(resultadoC);
*/

/*
//Ingreso de datos por pantalla
let nombreIngresado = prompt("Ingrese su nombre");
alert(nombreIngresado);
document.write(nombreIngresado);
console.log(nombreIngresado);
*/

//objetos
//let objeto= {}; //declarando el objeto 
/*
let persona = {
    nombre: "Homero",
    edad: 29,
    calle: "los lirios 321",
}

//console.log(persona.nombre);
console.log(persona.edad);
*/
//Crear un objeto para contener información sobre su receta favorita. Debe tener propiedades como título(String), raciones(Numérico), e ingredientes(un array de strings).
//registrar la información de la receta:

var receta = {
    titulo : "tallarines",
    raciones : 2,
    ingredientes : ['fideos', 'pimienta','laurel']
};

console.log(receta.titulo);
console.log('Porciones : ' + receta.raciones);
console.log('Ingredientes : ');
for(var i=0; i < receta.ingredientes.length; i++){
    console.log(receta.ingredientes[i]);
}