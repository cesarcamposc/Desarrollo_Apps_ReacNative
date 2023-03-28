# Curso de JavaScript desde Cero
## 1 ¿QUÉ ES JAVASCRIPT?

JavaScript es un lenguaje de programación que se utiliza principalmente para aportar dinamismo a sitios y aplicaciones web.
Técnicamente, JavaScript es un lenguaje de programación interpretado por lo que el código escrito con JavaScript se puede probar directamente en cualquier navegador sin necesidad de procesos intermedios. JavaScript funciona en complemento con los lenguajes web HTML Y CSS3.

## 2 ¿QUÉ ES una APLICACIÓN WEB?

Mientras que los sitios web buscan brindar información estática, las web apps permiten a los usuarios realizar múltiples tareas.
Las aplicaciones web son plataformas dinámicas e interactivas y sus funcionalidades están en constante mantenimiento y mejora.
Plataformas como MercadoLibre, Youtube, Gmail, Facebook son web apps por la cantidad de funcionalidades que ofrecen.


## 3 CÓDIGO JAVASCRIPT
JavaScript tiene sus propias reglas para la sintaxis, aunque respeta los estándares de muchos lenguajes de programación lógicos. Existen dos maneras de escribir código en JavaScript.

## 4 ¿CÓMO ESCRIBIR CÓDIGO JS?

- Dentro de un archivo html, entre medio de las etiquetas   
  <script>
  Ejemplo: 
  <script>
  // Aquí se escribe el código JS 
  </script>

- En un archivo individual con extensión .js
  Ejemplo: mi-archivo.js
  Recuerda no utilizar espacios ni mayúsculas en los Nombres de archivo. 
  
  <script src="js/main.js"></script>

## 5 SINTAXIS: REGLAS BÁSICAS
- No se tienen en cuenta los espacios en blanco y las nuevas líneas (al igual que HTML).
- Se distinguen las mayúsculas y minúsculas.
- Se pueden incluir bloques de comentarios:
  <script>
  // Comentario simple: una línea
  /* Comentario de más de una línea I
  Comentario de más de una línea II */
  </script>

## 6 SINTAXIS: PALABRAS RESERVADAS:

  - Palabras reservadas: son las palabras que se utilizan para construir las sentencias de JavaScript y que por tanto no pueden ser utilizadas libremente. 
  Las palabras actualmente reservadas por javaScript son: 
  break, case, catch, continue, default, let
  delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, etc.

## 7 VARIABLES
  Una variable es un espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecución de un programa. 
  Podemos almacenar un número, un texto, un listado de números, etc. 
  <script>
 //Declaración de variable ES5. 
 var nombreVariable1;
 
 //Declaración de variable ES6.
 let nombreVariable2;
 const LENGUAJE = "JAVASCRIPT";
 const numeroPi = 3.1416
 </script>

 ## 8 VALORES
  A una variable a la cual se le asigna un valor al declarar se le dice variable inicializada

## 9 TIPOS DE VALORES
  En una variable podemos asignar distintos tipos de valores, ya sea un número, un texto, o resultados de operaciones entre ambos.

  <script>
  let variableNumerica;
  var variableTexto;
  
  variableNumerica = 5;
  variableTexto = "Mi texto";
  variableTexto = 'Mi texto';
  </script>

## 10 OPERACIONES BÁSICAS
- Con variables de valores numéricos se puede realizar operaciones matemáticas: sumas, restas, multiplicaciones,etc.
 <script>
    var numeroA = 1;
    let numeroB = 2;
    const NUMEROC = 3;
    //Suma de dos números (1 + 2 = 3)
    let resultadoSuma = numeroA + numeroB;
    //Resta de dos números (2 - 1 = 1)
    let resultadoResta = numeroB - numeroA;
    //Producto de dos números (2 * 3 = 6)
    let resultadoProducto = numeroB * NUMEROC;
  </script>

- Con variables de tipo string (texto) se puede concatenar los valores, es decir combinarlas.
<script>
  var textoA = "SOMOS";
  let textoB = "IDAT";
  const BLANCO = " ";
  //Concatenar textoA y textoB ("SOMOS" + "IDAT" = "SOMOSIDAT")
  let resultadoA = textoA + textoB;
  //Concatenar textoB y 1 ("HOUSE" + 1 = "HOUSE1")
  let resultadoB = textoB + 1;
  //Concatenar textoA, BLANCO y textoB ("SOMOS" + " " + "IDAT" = "SOMOS IDAT")
  let resultadoC = textoA + BLANCO + textoB;
</script>

## 11 PROMPT
La sentencia prompt() mostrará un cuadro de diálogo para que el usuario ingrese un dato. Se puede proporcionar un mensaje que se colocará sobre el campo de texto. El valor que devuelve es una cadena que representa lo que el usuario ingresó.
<script>
  let nombreIngresado = prompt("Ingrese su nombre");
</script>
  EJEMPLO DE PROMPT
  En la pantalla del navegador, el usuario verá una ventana sobre la web que le solicitará un dato. Al valor que el usuario ingresa se lo conoce por el término de entrada.

## 12 CONSOLA
La sentencia console.log() muestra el mensaje que pasemos
como parámetro a la llamada en la consola JavaScript del
Navegador web.

<script>
  console.log("Mensaje de prueba");
</script>
  EJEMPLO DE CONSOLE.LOG
  En Chrome, la consola del navegador está disponible accediendo mediante: Botón derecho sobre alguna parte de la web > Inspeccionar > Consola

## 13 ALERT
La sentencia alert() mostrará una ventana sobre la página web que estemos accediendo mostrando el mensaje que se pase como parámetro a la llamada.
<script>
  alert("¡Hola Idat!");
</script>
  EJEMPLO DE ALERT 
  En la pantalla del navegador, el usuario verá una ventana sobre la web que muestra un mensaje. Al valor que mostramos al usuario como un resultado se lo conoce por el término de salida.

## 14 ALGORITMO
  En programación, un algoritmo es un conjunto de procedimientos o funciones ordenados que se necesitan para realizar cierta operación o acción. Por ejemplo, en una suma el algoritmo implica tomar un dato, sumarlo a otro y obtener un resultado.

  - EJEMPLO DE SCRIPT COMPLETO
  Este es un ejemplo de un Script JS corriendo en un archivo HTML.
  <!DOCTYPE html>
  <html>
    <head>
      <title>Mi primer App - Idat</title>
      <script>
        let entrada = prompt("Ingresar una letra");
        let salida = entrada + " " + "ingresada";    
        alert(salida);
      </script>
    </head>
    <body>
      <h2>Esta página contiene una app</h2>
    </body>
  </html>

## VAMOS A PRACTICAR
## CREAR UN ALGORITMO JS SIMPLE
  Crea un script en JS que le solicite al usuario ingresar datos y luego, mediante JavaScript, realiza operaciones sobre los mismos.

## 15 CONTROL DE FLUJOS

  CONDICIONALES EN JS

  ESTRUCTURA IF

  - La estructura más utilizada en la mayoría de los lenguajes, y por ende también en JS, es la estructura if.
  <script>
  if (true){
    console.log("vas a ver este mensaje");
  }
  </script>

  Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro de {...}. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {...} y el programa continúa ejecutando el resto de instrucciones del script.
  
  if (false){ 
      console.log("no vas a ver este mensaje");
    }

  EJEMPLO DE CONDICIONALES

## VARIABLES BOOLEAN
  - TRUE o FALSE
  Las variables booleanas son las que sólo tienen dos valores, true or false. Pueden recibir el valor a partir de una evaluación booleana sobre otras variables:
    
  let esValida = true; 
  let numero = 10;
  let esMayor5 = (numero > 5); // su valor sera true
  if (esValida) {
    alert("Es boolean true");
  }

  - OPERADORES EN JS

  En JavaScript, disponemos de los operadores lógicos habituales en lenguajes de programación como son: es igual, es distinto, menor, menor o igual, mayor, mayor o igual, and (y), or (o) y not (no).La sintaxis se basa en símbolos, como veremos a continuación. Cabe destacar que hay que prestar atención a no confundir ‘==’ con ‘=’ porque implican distintas cosas.

  Las expresiones booleanas más comunes comparar el valor de una variable con el valor de alguna otra variable, una constante, o tal vez una expresión aritmética simple. Esta comparación usa uno de los siguientes operadores relacionales:

  Las expresiones booleanas se pueden crear utilizando los operadores de comparación que se muestran en la tabla siguiente.

  Operador	      Significado
      ===	          Igual
      !==	          No es igual a
      <	            Menos que
      <=	          Menor o igual que
        >	          Mayor que
        >=	        Mayor o igual que

## 16 CICLOS

- CICLOS EN JAVASCRIPT
Los ciclos, también conocidos como bucles o iteraciones o loops son un medio rápido y sencillo para hacer algo repetidamente.
Si tenemos que hacer alguna operación más de una vez en el programa, de forma consecutiva,
usaremos las estructuras de bucles de JavaScript: for, while o do..while.

- TIPOS DE BUCLES
  * CICLOS POR CONTEO
  Repiten un bloque de código un número de veces específica.
  Estructura for.

  * CICLOS CONDICIONALES
  Repiten un bloque de código mientras la condición evaluada es verdadera. Estructuras while y do...while

  # ESTRUCTURA FOR
  for(desde; hasta; actualización) {
    ...//lo que se escriba acá se ejecutará mientras dure elciclo
  }
  El "desde" es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo.
  El "hasta" es el único elemento que decide si se repite o se detiene el ciclo.
  La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

  - EJEMPLO PRÁCTICO
  En el siguiente ejemplo utilizamos un for para contar de 0 a 9.

  for (let i = 0; i < 10; i++) {
    alert(i);
  }

  Ahora usamos for para contar de 1 a 10

  - EJEMPLO APLICADO
  * Algoritmo para calcular la tabla de Multiplicar de un número.

  * Algoritmo para dar turno del 1 al 20 a los nombres ingresados

  # SENTENCIA BREAK
  A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break; Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado.

  for (let i = 1; i <= 10; i++) {
     //Si la variable i es igual 5 interrumpo el for.
     if(i == 5){
      break;
      }
      alert(i);
  }

  # SENTENCIA CONTINUE
  A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición, el ciclo saltee esa repetición y siga con la próxima. Para eso se utiliza la sentencia continue;

  for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
      continue;
    }
    alert(i);
  }

  # WHILE
  La estructura while permite crear bucles que se ejecutan ninguna o más veces, dependiendo de la condición indicada. El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, repite indefinidamente las instrucciones incluidas dentro del bucle.
  
  - Ejemplo de repetición infinita:

  let repetir = true;
  while(repetir){
    console.log("Al infinito y...¡Más allá!");
  }
  - Realice un Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”.

  # DO...WHILE
  La estructura do..while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
  A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.

  let repetir = false;
  do{
    console.log("¡Solo una vez!");
  }while(repetir)

  - Realice un Algoritmo que solicita una entrada y se detiene cuando NO es un número.

## 17 PROGRAMACIÓN CON FUNCIONES
  Entender:
 * ¿Qué es una función y cómo nos ayuda a escribir menos código?
 * ¿Qué son los parámetros de entrada y salida de una función?
 * ¿Qué es el Scope global y el Scope local?
 * ¿Qué es una función anónima y una función flecha?

 # FUNCIONES
 Cuando se desarrolla una aplicación o sitio web, es muy habitual utilizar una y otra vez las mismas instrucciones.En programación, una función es un conjunto de instrucciones que se agrupan para realizar una tarea concreta, que luego se pueden reutilizar a lo largo de diferentes instancias del código.

 # ¿Y QUÉ VENTAJAS ME DAN LAS FUNCIONES?
 Las principales ventajas del uso de funciones son:
 * Evitar instrucciones duplicadas (Principio DRY)
 * Solucionar un problema complejo usando tareas sencillas (Principio KISS)
 * Focalizarse en tareas prioritarias para el programa (Principio YAGNI)
 * Aporta ordenamiento y entendimiento al código
 * Aporta facilidad y rapidez para hacer modificaciones

 # ¿CÓMO ESCRIBIRLAS?
 Todas las funciones se escriben igual. Deben tener un nombre en minúscula y sin espacios. Deben abrirse y cerrase con llaves. El contenido de la función se escribe entre las llaves. El nombre de la función no se puede repetir en otra.
 
 function saludar() {
  console.log("¡Hola estudiantes!");
}

  # ¿Y AHORA?
  Una vez que declaramos la función podemos usarla en cualquier otra parte del código las veces que queramos.
  Para ejecutar una función sólo hay que escribir su nombre y finalizar la sentencia con (). A esto se lo conoce como llamada de la función.
  saludar();

  - EJEMPLO PRÁCTICO

  Si debemos solicitar un nombre al usuario mostrarlo en un alert, normalmente podríamos hacer esto:

  <----

  - USANDO UNA FUNCIÓN
  Podríamos entonces crear una función que se llame solicitarNombre() para solicitar al usuario la cantidad de veces que necesitemos.

  # PARÁMETROS
  Una función simple, puede no necesitar ninguna dato para funcionar. Pero cuando empezamos a codificar funciones más complejas, nos encontramos con la necesidad de recibir cierta información para funcionar. 
  Cuando enviamos a la función uno o más valores para que ser empleados en sus operaciones, estamos hablando de los parámetros de la función.
  Los parámetros se envían a la función mediante variables y se colocan entre los paréntesis posteriores al nombre de la función.
  

  # PARÁMETROS
  Dentro de la función, el valor de la variable parametro1 tomará al primer valor que se le pase a la función, y el valor de la variable parametro2 tomará el segundo valor que se le pasa.

  function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
  }

  - EJEMPLO APLICADO: SUMAR Y MOSTRAR

  # VARIABLES LOCALES Y GLOBALES 
  - DEFINICIÓN
  El ámbito de una variable (llamado "scope" en inglés), es la zona del programa en la que se define la variable, el contexto al que pertenece la misma dentro de un algoritmo.
  JavaScript define dos ámbitos para las variables: global y local.

  - VARIABLES LOCALES
  Cuando definimos una variable dentro de una función o bloque es una variable local, la misma existirá sólamente durante la ejecución de esa sección. Si queremos utilizarla por fuera, la variable no existirá para JS.
  
  function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
  }
  //No se puede acceder a la variable resultado fuera del bloque
  console.log(resultado);
  
  - VARIABLES GLOBALES
  Si una variable se declara fuera de cualquier función o bloque, automáticamente se transforma en variable global, independientemente de si se define utilizando la palabra reservada var, o no.

  let resultado = 0
  function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
  }
  sumar(5,6);
  //Se puede acceder a la variable resultado porque es global
  console.log(resultado);

# 18 FUNCIONES ANÓNIMAS Y FUNCIONES FLECHA

  # FUNCIONES ANÓNIMAS
  Una función anónima es una función que se define sin nombre y se utiliza para ser pasadas como parámetros o asignada a variable. En el caso de asignarla a una variable, pueden llamar usando el identificador de la variable declarada.
  
  //Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
  const suma = function (a, b) { return a + b };
  const resta = function (a, b) { return a - b };
  console.log(suma(15,20));
  console.log(resta(15,5));

  # FUNCIONES FLECHA
  Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada.Están disponibles desde la versión ES6 de JavaScript, no usan la palabra function pero usamos => (flecha) entre los parámetros y el bloque.

  const suma = (a, b) => { return a + b };
  //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
  const resta = (a, b) => a - b ;
  console.log(suma(15,20));
  console.log(resta(20,5));

  EJEMPLO APLICADO: CALCULAR PRECIO

# 19 ¿QUÉ ES UN OBJETO?
  En programación, y también en JS, un objeto es una colección de datos relacionados con funcionalidad, que generalmente consta de variables, denominadas propiedades, y funciones asociadas, llamadas métodos.
  Por ejemplo: el objeto persona, tendría como una propiedad la altura, y como un método, hablar.
  
  ## ¿POR QUÉ USAMOS OBJETOS?
  Cuando tengo que crear un elemento cuya información está compuesta por más de un valor y existen operaciones comunes (funciones) para todos los elementos de este tipo y sus propiedades, debe definirse como un objeto.

  let nombre = "Homero";
  let edad = 39;
  let calle = "Av. Siempreviva 742";
  // Los variables anteriores entran relacionados entre sí,entonces mejor usamos un objeto literal
  const persona1 = { nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" }

  ## OBTENIENDO VALORES DEL OBJETO
  - Para obtener el valor de una propiedad en un objeto utilizamos la notación punto (.): El nombre de la variable del objeto, seguido de punto y el nombre de la propiedad:
  
  const persona1 = { nombre: "Homero",
                     edad: 39,
                     calle: "Av. Siempreviva 742"};
  console.log(persona1.nombre);
  console.log(persona1.edad);
  console.log(persona1.calle);

  - Otra forma de obtener el valor de una propiedad en un objeto utilizamos la notación corchetes ([]): El nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad:

  const persona1 = { nombre: "Homero",
                     edad: 39,
                     calle: "Av. Siempreviva 742"};
  console.log(persona1["nombre"]);
  console.log(persona1["edad"]);
  console.log(persona1["calle"]);

# 20 OBJETOS: CONSTRUCTORES
  En JS, el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
  Con esta “función constructora” podemos inicializar las propiedades del objeto al momento de ser instanciado con new.

  function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }
  const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
  const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

  ## CONSTRUCTOR Y NEW
  En el ejemplo anterior, se define la función Persona, donde se asignan las diferentes propiedades con los valores recibidos como parámetros.
  Luego, en algún lugar del código posterior a esas líneas, se puede construir un objeto Persona, declarando una variable y asignando la referencia del objeto instanciado mediante la instrucción new Persona(...)

  ## USO DEL THIS
  La palabra clave this (“este”) refiere al elemento actual en el que se está escribiendo el código. Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado al nuevo objeto instanciado.
  This es muy útil para asegurar que se emplean las propiedades del objeto actual.

  function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
  }
  const persona1 = new Persona({ nombre:
  "Homero", edad: 39, calle: "Av.Siempreviva 742" });

  ## MÉTODO <> FUNCIÓN
  Como vimos anteriormente, las funciones en JS se pueden definir en cualquier parte del código, y pueden ser llamadas desde cualquier otra parte del código posterior.
  Los métodos de los objetos, también son técnicamente funciones, sólo que se limitan a poder ser ejecutados únicamente desde el mismo objeto.

  - FUNCIÓN
  //Funciones: Generalmente retornan un valor y son de acceso global.
  function f1(){
    return this;
  }

  - MÉTODO
  //Métodos: Se requiere un objeto y puede no retornar un valor.
  function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }

  - MÉTODOS EN OBJETOS JS
  JavaScript cuenta con sus propios objetos, incluso ya usamos algunos de ellos sin identificar que son objeto.
  Por ejemplo: Cada vez que creamos una cadena de caracteres se crea automáticamente como una instancia del objeto String, y por lo tanto tiene varios métodos/propiedades comunes disponibles en ella.
  
  let cadena = "HOLA CODER";
  //Propiedad de objeto String: Largo de la cadena.
  console.log(cadena.length);
  //Método de objeto String: Pasar a minúscula.
  console.log(cadena.toLowerCase());
  //Método de objeto String: Pasar a mayúscula.
  console.log(cadena.toUpperCase());

  - MÉTODOS PERSONALIZADOS
  Podemos crear nuestro propios métodos para objetos personalizados, referenciando funciones por su nombre o definiendo funciones anónimas asociadas a una propiedad de la función constructora.
  Llamar a un método es similar a acceder a una propiedad, pero se agrega () al final del nombre del método, posiblemente con argumentos.
  function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
  }
  const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
  const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
  persona1.hablar();
  persona2.hablar();

  - OPERADOR IN Y FOR...IN
  El operador in devuelve true si la propiedad especificada existe en el objeto.
  Mientra que el bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.

  const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
  //devuelve true porque la clave "nombre" existe en el objeto persona1
  console.log( "nombre" in persona1);
  //devuelve false porque la clave "origen" no existe en el objeto persona1
  console.log( "origen" in persona1);
  //recorremos todas las propiedades del objeto con el ciclo for...in
  for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
  }

  # 21 CLASES
  Las clases de javascript, introducidas en ES6, proveen una sintaxis mucho más clara y simple para crear objetos personalizados.
  Son una equivalencia al empleo de función constructora y permite definir distintos tipo
  de métodos.
  class Persona{
    constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad = edad;
      this.calle = calle;
    }
  }
  const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

  En la declaración de clase, la función constructora es reemplaza por el método constructor. Los métodos en las clases no referencian a propiedades, se declaran dentro del bloque si la palabra function

  class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
      }
    hablar(){
      console.log("HOLA SOY "+ this.nombre);
    }
  }
  const persona1 = new Persona("Homero", 39, "Av.Siempreviva 742");
  persona1.hablar();

# 21 ARRAYS
  
  ## ¿QUÉ ES ARRAY?
  Un Array es un objeto que almacena una lista de elementos. Puede ser un conjunto de números, strings, booleanos, objetos o hasta una lista de listas.
  Los valores del array pueden ser distintos y es posible agregar o quitar elemento en todo momento.
  Los elementos del array tienen un orden, de 0 (el primer elemento del array) hasta el último elemento.

  ## DECLARACIÓN DE ARRAY
  Para declarar un variable y asignar un array empleamos los corchetes ([ ]) y dentro definimos todos los valores separados por coma. Los arrays en Javascript empiezan siempre en la posición 0, así que un array que tenga por ejemplo 10 elementos, tendrá posiciones de 0 a 9. 

  // Declaraciòn de array vacío const arrayA = [];
  // Declaracion de array con nùmeros 
  const arrayB = [1,2];
  // Declaracion de array con strings
  const arrayC = ["C1","C2","C3"];
  // Declaracion de array con booleanos
  const arrayD = [true,false,true,false];
  // Declaracion de array mixto
  const arrayE = [1,false,"C4"];

  ## ACCESO AL ARRAY

  Podemos acceder a los elementos empleando Array indicando su posición.
  A los números de las posiciones que usamos para acceder a los elementos del
  array se los puede llamar índices.
  
  const numeros = [1,2,3,4,5];
  let resultado1 = numeros[0] + numeros[2]; // 1 + 3 = 4;
  let resultado2 = numeros[1] + numeros[4]; // 2 + 5 = 7;
  let resultado3 = numeros[1] + numeros[1]; // 2 + 2 = 4;

  ## RECORRIDO DEL ARRAY

  Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento.Los Array en JavaScript son objetos iterables lo que permite usar distintas estructuras para iterar sobre ellos.
  const numeros = [1, 2, 3, 4, 5];
  for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
  }

# 22 Manipulación del DOM en JavaScript

Este documento es una pequeña referencia de las funciones principales que podemos usar para manipular el DOM desde JavaScript, sin usar frameworks ni librerías externas.

Para una introducción más completa puedes ir a MDN

 * ¿Qué es el DOM?
 El DOM(Document object Model) da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. En resumen, es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JavaScript. El DOM es un árbol donde cada nodo es un objeto con todas sus propiedades y métodos que nos permiten modificarlo. Estas son algunas funciones que nos permiten acceder y modificar los elementos del DOM:
 
 - Acceso a elementos del DOM
 // Obtiene un elemento por id
 document.getElementById('someid');

 // Obtiene una lista con los elementos que tienen esa clase
 document.getElementsByClassName('someclass');
 
 // Obtiene una HTMLCollection con los todos los elementos 'li'
 document.getElementsByTagName('LI');
 
 // Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
 document.querySelector('.someclass');
 
 // Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
 document.querySelectorAll('div.note, div.alert');

 # 23 JavaScript Asíncrono
 Los mecanismos que utiliza JavaScript para controlar la asincronía son:
 ● Callbacks.
 ● Promises.
 ● Async / Await.
 
 * JavaScript Asíncrono - Callbacks
 Los callbacks son la base para que Javascript funcione de forma asíncrona. 
 Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta.
 Ejemplo:
 setTimeout(function(){
  console.log("Hola Mundo con retraso!");
 }, 1000)
 setTimeout es una función asíncrona que programa la ejecución de un callback una vez ha transcurrido, como mínimo, una determinada cantidad de tiempo.

 * JavaScript Asíncrono - Promises
 ● Una promesa (promise) es un objeto que representa el resultado de una operación asíncrona, cuenta con 3 posibles estados:
  ○ Pendiente.
  ○ Resuelta.
  ○ Rechazada.
 ● Se pueden encadenar (then), siendo el resultado de una promesa, los datos de entrada de otra posible función.
 ● Las promesas permiten mantener un código más legible y mantenible que las callbacks, también poseen un mecanismo para detectar errores (catch), el cual es posible usar en cualquier parte del flujo de instrucciones.

 * JavaScript Asíncrono-Async/Await 
   Las funciones asíncronas (async / await) se crearon para simplificar el uso de las promesas.
   ● async declara una función como asíncrona e indica que una promesa será devuelta automáticamente.
   ● Se pueden declarar como async funciones con nombre o anónimas.
   ● La palabra await debe ser utilizada siempre dentro de una función que haya sido declarada como async, ésta esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace.

  # 24 JavaScript - API Web
  Una API (Application Programming Interface) es la interfaz que permite intercambiar información entre dos componentes de software independientes. Una API hace es la intermediaria entre las funciones internas y las externas del software, creando un intercambio de información que a menudo pasa desapercibido ante el usuario final por la sencillez con la que se ejecuta.
  Las API conectan diferentes partes de una plataforma de software con el objetivo de asegurar que la información llegue al lugar correcto.

  * APIs en JavaScript del lado cliente:
  JavaScript del lado cliente, tiene varias APIs a su disposición — cabe aclarar que estas no son parte del lenguaje como tal, sino que están desarrolladas sobre el núcleo de este lenguaje de programación.
  Generalmente, se dividen en dos categorías:
    - APIs de navegador: Hacen parte del navegador web y pueden desplegar datos}  de este. Por ejemplo
     ● La API de Geolocalización que facilita algunos desarrollos sencillos de JavaScript para obtener datos de ubicación con los que puede trazar la ubicación del usuario en un mapa de Google.
    - APIs de terceros: No hacen parte por defecto del navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo
    ● la API de Twitter permite hacer cosas como mostrar los últimos tweets en un sitio web.

  * APIs de navegador más usadas:
  ● APIs para manipular documentos: API DOM (Document Object Model), que permite manipular HTML y CSS.
  ● APIs que obtienen datos del servidor: Usadas para actualizar pequeñas secciones de una página web. Las APIs hacen esto posible gracias a que incluyen XMLHttpRequest y la Fetch API.
  ● APIs para dibujar y manipular gráficos: Las más populares son Canvas y WebGL.
  ● APIS de audio y vídeo: HTMLMediaElement, la Web Audio API, y WebRTC.
  ● APIs de dispositivos: APIs para manipular y recuperar información de dispositivos modernos de hardware de forma que sean útiles para aplicaciones web. Ejemplo: API de geolocalización.
  ● APIS de almacenamiento en el lado del cliente: Web Storage API.
  
  * APIs de terceros más comunes:
  ● API de Twitter: permite mostrar últimos tweets en sitio web del cliente.
  ● API de Google Maps: permite hacer todo tipo de cosas con mapas en las páginas web del cliente.
  ● APIs de Facebook: permite usar partes de las propiedades de facebook para mejorar la aplicación del cliente.
  ● YouTube API: permite integrar videos de Youtube en sitio web del cliente, buscar en Youtube, construir listas de reproducción, etc.
  ● Twilio API: suministra un framework que permite crear la funcionalidad de llamadas y videollamadas,enviar SMS o MMS y más.  