# Estructura de código de JavaScript.

En esta lección aprenderemos a grandes rasgos como es que se estructura el código de JavaScript. Es importante mencionar que aquí tocaremos temas más avanzados, pero la idea es enfocarse en la estructura y no en como funciona el código que escribiremos.

## Estructura principal.

A diferencia de otros lenguajes de programación, en JavaScript no hace falta tener una función especial que actúe como `main` y que se encargue de ejecutar todo el código. Al ejecutar un archivo de JavaScript, todo el código en el archivo se interpreta secuencialmente línea por línea, pero la ejecución de las funciones no es automática; estas se activan únicamente cuando son llamadas explícitamente dentro del flujo de ejecución o en respuesta a algún evento específico. Todo el archivo puede ejecutarse, pero la ejecución de funciones depende de su invocación dentro del código. Básicamente, podría pensarse como que el archivo que ejecutamos en JavaScript es en sí mismo un `main`.

A continuación, veremos un simple ejemplo:

```javascript
console.log("hola mundo");

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2));
```

Esto lo que hará es primero imprimir por consola un "hola mundo", luego va a definir una función llamada `sumar` y finalmente, va a imprimier "3" que es el resultado de sumar 1 más 2.

Como se puede apreciar en este ejemplo, se interpretó el código de la siguiente manera:

1. Primero se interpretó el `console.log`, la cuál es una función para imprimir datos por consola.
2. Luego se interpretó la creación de `sumar`, pero dicha función no se ejecutó ya que no fue explícitamente invocada para hacelo.
3. Finalmente, se interpretó la última sentencia en la que invocamos explícitamente a la función `sumar` con los argumento de 1 y 2, y el resultado lo usamos en el `console.log` para imprimirlo por consola.

## Buenas prácticas para proyectos más grandes.

Gracias a la utilización de `NodeJS`, podemos dividir nuestro código en distintos archivos para que sea más mantenible y entendible. Sin embargo, vamos a tener que crear un archivo que se encargue de actuar como `archivo main`, en donde importaremos e invocaremos todo el código necesario para que nuestro proyecto funcione de manera correcta. Generalmente a dicho archivo le llamaremos `index.js`, pero no es obligarotio usar ese nombre.

A continuación mostraré como se puede hacer esto usando `NodeJS`. El código utiliza una sintáxis antigua, pero más adelante en el curso aprenderemos como utilizar la sintáxis moderna de JavaScript ya que requiere de algunas configuraciones.

Supongamos que tenemos el archivo `sumar.js` definido de la siguiente manera:

```javascript
function sumar(a, b) {
  return a + b;
}

module.exports = { sumar };
```

Y tenemos el archivo `index.js` definido de la siguiente forma:

```javascript
const { sumar } = require("./sumar");

console.log("hola mundo");

console.log(sumar(1, 2));
```

Entonces, como el archivo `index.js` es el archivo main, entonces al ejecutarlo, va a imprimir por consola primero el "hola mundo" y luego "3" que es el resultado de sumar 1 más 2. Pero es importante aclarar que la definición de la suma la hicimos en otro archivo externo, el cuál importamos para poder usar. Lo que hace JavaScript es empezar a interpretar el archivo de `index.js`, luego en el `require` interpreta el archivo `sumar.js` y termina de ejecutar el archivo `index.js`.

Más adelante en el curso, vamos a profundizar en como importar y exportar elementos, ya que hay cosas que tenemos que tener en cuenta para evitar errores y también hay que hacer algunas configuraciones para poder utilizar las sintáxis más moderna de JavaScript.

## El uso del punto y coma.

En JavaScript el uso del `;` a final de cada sentencia no es obligatorio, sin embargo recomiendo como buena práctica siempre utilizarlo ya que hace el código menos ambiguo y menos propenso a errores, ya que hay situaciones en las que el código puede no funcionar por culpa de no utilizar el `;`.

### ¿Y para que sirve el `;` al final de una sentencia?

El objetivo es indicar el final de una sentencia, ya que el hacer un salto de línea no indica que una sentencia halla finalizado. Por ejemplo, podrías escribir algo como:

```javascript
console.log("hola"); console.log("mundo");
```

Y no habría problemas gracias a que utilizar le `;`, se interpretaría cada `console.log` como sentencias distintas.

Generalmente, se puede no utilizar el `;` y usar el salto de línea y JavaScript puede intuir que intentamos hacer, pero no es 100% fiable ya que hay situaciones que la sentencia se hace ambigua y no logra diferir bien lo que quisimos escribir. Por ejemplo:

```javascript
/* Código incorrecto. */
console.log("holis")

[1, 2].forEach(number => console.log(number))
```

Eso tiraría un error, ya que no identifica el salto de línea como dos sentencias distintas. La manera de solucionarlo es usar `;` de la siguiente forma:

```javascript
/* Código correcto. */
console.log("holis");

[1, 2].forEach(number => console.log(number));
```

`Conclusión:` siempre utilizar el `;` para evitar todo tipo de situaciones imprevistas.