# Funciones.

Una función en JavaScript es un bloque de código reutilizable que se puede invocar (llamar) para ser ejecutado en el momento que nos sea necesario.

En esta lección veremos todo lo referido a funciones y las distintas maneras de crearlos que existen en JavaScript. También hablaremos sobre los procedimientos y su sutil diferencia con las funciones en JavaScript.

## Como declarar un procedimiento.

En JavaScript podemos crear un procedimiento de la siguiente forma general:

```javascript
// procedimiento sin parámetros
function nombreProcedimiento() {
  /* Cuerpo del procedimiento */
}


// procedimiento con parámetros
function nombreProcedimiento(parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo del procedimiento */
}
```

Básicamente, para declarar un procedimiento, utilizamos la palabra reservada `function`, seguida del nombre que le asignamos al procedimiento (utilizamos `nombreProcedimiento` de forma genérica). Luego, empleamos paréntesis `()` donde se especifican los parámetros que el procedimiento puede recibir; estos parámetros son `opcionales` y requieren de un nombre que los identifique dentro el procedimiento y además deberán ser separados por `comas`. En caso de NO requerir parámetros, los paréntesis se dejan `vacíos`. `Los procedimientos NO van a retornar ningún valor`.

A continuación veremos ejemplos sencillos de definiciones de procedimientos:

```javascript
function helloWorld() {
  console.log("Hello");
  console.log("World");
}

function ordenarNumerosCreciente(list) {
  list.sort((a, b) => a - b);

  // No se devuelve ningún valor explícito, la list se ordena porque se pasa por referencia.
}
```

### Como invocar a un procedimiento.

Podemos invocar a un procedimiento de la siguiente forma general:

```javascript
// procedimiento sin parámetros
function nombreProcedimientoSinParametros() {
  /* Cuerpo del procedimiento */
}

// Llamada de procedimiento sin parámetros.
nombreProcedimientoSinParametros();


// procedimiento con parámetros
function nombreProcedimientoConParametros(parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo del procedimiento */
}

// Llamada de procedimiento con parámetros.
nombreProcedimientoConParametros(valor1, valor2, /*...*/, valorN);
```

La particularidad que tiene el llamar al `nombreProcedimientoConParametros` es que debemos hacer que los parámetros tomen valores como argumento. El pasarle valores como argumento de la forma general previamente vista, equivale a hacer: `parameter1 = valor1, parameter2 = valor2, ..., parameterN = valorN`.

A continuación veremos un par de ejemplos sencillos:

```javascript
function helloWorld() {
  console.log("Hello");
  console.log("World");
}

helloWorld();
/*
  Imprime:

  "Hello"
  "World"
*/

function imprimirOperaciones(number1, number2) {
  console.log(`number1 + number2 = ${number1 + number2}`);
  console.log(`number1 - number2 = ${number1 - number2}`);
  console.log(`number1 * number2 = ${number1 * number2}`);
  console.log(`number1 / number2 = ${number1 / number2}`);
}

imprimirOperaciones(2, 1);
/*
  Imprime:

  "number1 + number2 = 3"
  "number1 - number2 = 1"
  "number1 * number2 = 2"
  "number1 / number2 = 2"
*/

imprimirOperaciones(200, 4);
/*
  Imprime:

  "number1 + number2 = 204"
  "number1 - number2 = 196"
  "number1 * number2 = 800"
  "number1 / number2 = 50"
*/
```

Como se puede observar en estos ejemplos, las ventajas de crear procedimientos es que podemos escribir un bloque de código repetitivo y llamarlo cuantas veces necesitemos. Esto va a reducir la cantidad de líneas de código que tengamos.

## Como declarar una función.

En JavaScript podemos crear una función de la siguiente forma general:

```javascript
// función sin parámetros
function nombreFuncion() {
  /* Cuerpo de la función */

  return VALOR; // Retornamos un valor
}


// función con parámetros
function nombreFuncion(parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo de la función */

  return VALOR; // Retornamos un valor
}
```

Básicamente, para declarar una función, utilizamos la palabra reservada `function`, seguida del nombre que le asignamos a la función (utilizamos `nombreFuncion` de forma genérica). Luego, empleamos paréntesis `()` donde se especifican los parámetros que la función puede recibir; estos parámetros son `opcionales` y requieren de un nombre que los identifique dentro la función y además deberán ser separados por `comas`. En caso de NO requerir parámetros, los paréntesis se dejan `vacíos`. También adentro del cuerpo de la función debemos utilizar la palabra reservada `return` para retornar algún `VALOR` de cualquier tipo, el cuál puede estar dado por una expresión o puede haber sido calculada a lo largo del cuerpo de la función. `Las funciones siempre van a tener que retornar un valor`.

A continuación veremos un par de ejemplos sencillos:

```javascript
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function sumar(number1, number2) {
  return number1, number2;
}
```

### Como invocar a una función.

Podemos invocar a una función de la siguiente forma general:

```javascript
// función sin parámetros
function nombreFuncionSinParametros() {
  /* Cuerpo de la función */

  return VALOR; // Retorno un valor.
}

// Llamada de función sin parámetros.
const valorResultante = nombreFuncionSinParametros();



// función con parámetros
function nombreFuncionConParametros(parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo de la función */

  return VALOR; // Retorno un valor.
}

// Llamada de función con parámetros.
const valorResultante = nombreFuncionConParametros(valor1, valor2, /*...*/, valorN);
```

Notemos que las funciones devuelven un valor, por lo que debemos capturar de alguna manera el valor retornado. En este caso general, hemos guardado el valor retornado en una constante, pero podemos utilizarlo en alguna expresión

La particularidad que tiene el llamar al `nombreFuncionConParametros` es que debemos hacer que los parámetros tomen valores como argumento. El pasarle valores como argumento de la forma general previamente vista, equivale a hacer: `parameter1 = valor1, parameter2 = valor2, ..., parameterN = valorN`.

A continuación veremos un par de ejemplos sencillos:

```javascript
function obtenerHora() {
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString();
  return hora;
}

console.log(obtenerHora()); // Imprime la hora actual.

function sumarValoresArray(arrayOfNumbers) {
  let result = 0;

  for (const number of arrayOfNumbers) {
    result += number;
  }

  return result;
}

console.log(sumarValoresArray([1, 2, 3, 4])); // Imprime 10

console.log(sumarValoresArray([10, 22, 1, 90])); // Imprime 123
```

Como se puede observar en estos ejemplos, las ventajas de crear funciones es que podemos escribir un bloque de código repetitivo y llamarlo cuantas veces necesitemos para devolver un valor. Esto va a reducir la cantidad de líneas de código que tengamos.

### Diferencia entre función y procedimiento.

La principal diferencia entre funciones y procedimientos es que `las funciones siempre retornan un valor` en cambio, `los procedimientos nunca retornan nada`. Pero podemos pensar a los procedimientos como funciones que retornan `undefined`, ya que es lo que en definitiva sucede en JavaScript.

De ahora en más vamos a pensar a los procedimientos como funciones que retornan `undefined`, de esa manera podemos utilizar la palabra `función` para referirnos indistintamente a `funciones` o `procedimientos`.

## Scope de una función.

Aquí vamos a asumir que ya se entiende la definición de `scope`. Si es necesario un repaso, se recomienda leer la `lección 03 (variable, constantes y scope)` que he escrito.

Notemos que al definir una función, entonces el cuerpo de dicha función (al estar definida entre `{}`) va a crear un `scope interno` el cuál podrá acceder a las variables o constantes del `scope externo`. Esto se vería de la siguiente forma general:

```javascript
/* Scope externo */

function nombreFuncion(parameter1, parameter2, /*...*/, parameterN) {
  /* Define un Scope interno */

  // Puede acceder a las variables o constantes del scope externo.

  return VALOR; // Retorna algún valor.
}
```

Así que tenemos que tener esto en cuenta para evitar modificar variables del `scope externo` por error o descuido.

A continuación veremos un ejemplo de como podemos tener un error:

```javascript
let x = 10;

function sumar(number1, number2) {
  x = 2000;
  return number1 + number2;
}

console.log(x); // Imprime 10

console.log(sumar(1, 2)); // Imprime 3

console.log(x); // Imprime 2000
```

Notemos que luego de ejecutar la función `sumar` entonces `x` va a valer `2000`.

### Usando este conocimiento para disminuir la cantidad de parámetros.

Podemos aprovechar el hecho de que el `scope interno` creado por una función tiene acceso al `scope externo` para disminuir la cantidad de parámetros que debe tomar dicha función. Esto va a ser seguro siempre y cuando las variables y constantes del `scope externo` sean tratadas como de `solo lectura` (es decir, que no se le asigne otro valor).

A continuación veremos un ejemplo:

```javascript
const number = 100;

function sumar(anotherNumber) {
  return number + anotherNumber;
}

console.log(sumar(20)); // Imprime 120
```

### Usando este conocimiento para actualizar valores del scope externo.

También, si lo hacemos de manera intensional y controlada, podemos crear `funciones` que cambien el valor de una `variable` del `scope externo`.

A continuación veremos un ejemplo sencillo:

```javascript
let countCallFunction = 0;

function double(number) {
  countCallFunction++; // Incremeto el contador en 1
  return number * 2;
}

console.log(countCallFunction); // Imprime 0

console.log(double(2)); // Imprime 4

console.log(countCallFunction); // Imprime 1

console.log(double(10)); // Imprime 20

console.log(countCallFunction); // Imprime 2
```

## El tipo function.

Todas las funciones que definamos en JavaScript serán del tipo `function`, el cuál es un objeto especial. La particularidad de este tipo es que le asocia al `nombre de la función` una `referencia de memoria` que permite su uso y llamado en diferentes partes del código.

Las funciones en JavaScript son `first class citizens`, lo que significa que pueden ser tratadas como si fuesen objetos. Esto permite que las funciones pueden ser pasadas como argumentos a otras funciones o retornadas desde otras funciones, o también `asignadas a variables o constantes por referencia` (cuidado que esto puede general `aliasing`).

A continuación veremos un ejemplo de como hacer `aliasing` de una función:

```javascript
function uselessFunction() {
  return "Some text";
}

const reference = uselessFunction; // Hago el aliasing

console.log(uselessFunction()); // Imprime "Some text"

console.log(reference()); // Imprime "Some text"
```

## Expresión de función.

Podemos definir funciones también como si fueran constantes de la siguiente forma general:

```javascript
// Funcion que no toma parámetros
const nombreFuncion = function () {
  /* Cuerpo de la función */

  return VALOR; // Retorna algún valor.
}

// Funcion que toma parámetros
const nombreFuncion = function (parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo de la función */

  return VALOR; // Retorna algún valor.
}
```

Estamos definiendo funciones de la misma manera que hacíamos antes, solamente que la sintáxis cambia.

A continuación veremos un ejemplo sencillo:

```javascript
const sumar = function (number1, number2) {
  return number1 + number2;
};

console.log(sumar(1, 2)); // Imprime 3
```

## Arrow functions.

COMPLETAR.

## Pasaje de parametros por valor y por referencia.

COMPLETAR.

## High Order functions y funciones de callback.

COMPLETAR.

### Retornar objetos de funciones.

## Funciones recursivas.

COMPLETAR.

## Operador rest para los parámetros.

COMPLETAR.
