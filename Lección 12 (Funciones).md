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

### Return de múltiples línes.

También podemos escribir un return en múltiples líneas de la siguiente forma general:

```javascript
// función sin parámetros
function nombreFuncion() {
  /* Cuerpo de la función */

  return (
    // Expresión de múltiples líneas.
  );
}


// función con parámetros
function nombreFuncion(parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo de la función */

  return (
    // Expresión de múltiples líneas.
  );
}
```

A continuación veremos un ejemplo sencillo:

```javascript
function calculoBooleano(number1, number2, number3) {
  return (
    (number1 > 1000 || number1 <= 0) &&
    (number2 > 1000 || number2 <= 0) &&
    (number3 > 1000 || number3 <= 0)
  );
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

Las funciones en JavaScript son `first class citizens`, lo que significa que pueden ser tratadas como si fuesen objetos. Esto permite que las funciones pueden ser pasadas como argumentos a otras funciones o retornadas desde otras funciones, o también `asignadas a variables o constantes por referencia` (cuidado que esto puede generar `aliasing`).

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
};

// Funcion que toma parámetros
const nombreFuncion = function (parameter1, parameter2, /*...*/, parameterN) {
  /* Cuerpo de la función */

  return VALOR; // Retorna algún valor.
};
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

También, otra manera de definir funciones como constantes es hacerlo utilizando `arrow functions`. Se hace de la siguiente forma general:

```javascript
// Funcion que no toma parámetros
const nombreFuncion = () => {
  /* Cuerpo de la función */

  return VALOR; // Retorna algún valor.
};

// Funcion que toma parámetros
const nombreFuncion = (parameter1, parameter2, /*...*/, parameterN) => {
  /* Cuerpo de la función */

  return VALOR; // Retorna algún valor.
};
```

Estamos definiendo funciones de la misma manera que hacíamos antes, solamente que la sintáxis cambia. `Recomiendo utilizar esta sintáxis, ya que es más resumida y moderna`.

A continuación veremos un ejemplo sencillo:

```javascript
const sumar = (number1, number2) => {
  return number1 + number2;
};

console.log(sumar(1, 2)); // Imprime 3
```

### Sintáxis especial para las arrow functions que NO requieren cuerpo.

También tenemos la siguiente sintáxis especial para poder escribir las funciones de una manera más acortada cuando dicha función NO requiere de cuerpo y solamente retorna un valor:

```javascript
// Funcion que no toma parámetros
const nombreFuncion = () => VALOR;

// Y lo de arriba es equivalente a escribir.
const nombreFuncion = () => {
  return VALOR; // Retorna algún valor.
};


// Funcion que toma parámetros
const nombreFuncion = (parameter1, parameter2, /*...*/, parameterN) => VALOR;

// Y lo de arriba es equivalente a escribir.
const nombreFuncion = (parameter1, parameter2, /*...*/, parameterN) => {
  return VALOR; // Retorna algún valor.
};
```

Como se puede observar, esta sintáxis es aún más compacta, por lo que conviene usarla siempre que sea posible. Y notemos que `VALOR` puede estar dada por una expresión, pero `NO puede ser un objeto literal` (más adelante explicaré el motivo).

A continuación veremos un ejemplo:

```javascript
const suma = (number1, number2) => number1 + number2;

console.log(suma(1, 2)); // Imprime 3
```

Como se puede observar, aquí la función va a tomar como argumento `number1` y `number2` y va a devolver `number1 + number2`.

<br />

`PROBLEMA IMPORTANTE`: En la forma general que hemos dado previamente tiene que cumplirse que `VALOR` NO es un `objeto litaral`, ya que los `{}` del `objeto literal` van a confundirse con el cuerpo de la función y por ende la función va a retornar siempre `undefined` o va a `tirar error`.

A continuación veremos un ejemplo erróneo:

```javascript
// Esta definición es incorrecta. Devuelve siempre undefined.
const retornaObjeto = (name, age) => {name, age};

console.log(retornaObjeto("Heber", 22)); // Imprime undefined
```

Y el error es que JavaScript piensa que lo que está entre `{}` es el cuerpo de la función.

<br />

`SOLUCIÓN A ESTE PROBLEMA`: La manera de resolver este problema es de la siguiente forma general:

```javascript
// Función sin parámetros
const nombreFuncion = () => ({
  /* Claves y valores del objeto literal retornado */
});

// Función con parámetros
const nombreFuncion = (parameter1, parameter2, /*...*/, parameterN) => ({
  /* Claves y valores del objeto literal retornado */
});
```

Es decir, notemos que estamos poniendo entre `()` el `objeto literal` que va a retornar la función.

A continuación veremos como resolver el ejemplo anterior:

```javascript
const retornaObjeto = (name, age) => ({name, age});

console.log(retornaObjeto("Heber", 22)); // Imprime { name: 'Heber', age: 22 }
```

<br />

`RETURN DE MÚLTIPLES LÍNEAS`: También podemos utilizar los `()` para escribir la expresión a retornar en más de una línea de la siguiente forma general:

```javascript
// Función sin parámetros
const nombreFuncion = () => (
  // Expresión de múltiples líneas a retornar.
);

// Función con parámetros
const nombreFuncion = (parameter1, parameter2, /*...*/, parameterN) => (
  // Expresión de múltiples líneas a retornar.
);
```

A continuación veremos un ejemplo:

```javascript
const calculoBooleano = (number1, number2, number3) => (
  (number1 > 1000 || number1 <= 0) &&
  (number2 > 1000 || number2 <= 0) &&
  (number3 > 1000 || number3 <= 0)
);
```

### Sintáxis especial para arrow functions con un único parámetro.

Si tenemos una `arrow function` con un `único parámetro`, entonces podemos omitir el uso de `()` de la siguiente forma general:

```javascript
// Función sin cuerpo.
const nombreFuncion = parameter => VALOR;

// Lo de arriba es equivalente a:
const nombreFuncion = (parameter) => VALOR;


// Función con cuerpo.
const nombreFuncion = parameter => {
  /* Cuerpo de la función */

  return VALOR;
};

// Lo de arriba es equivalente a:
const nombreFuncion = (parameter) => {
  /* Cuerpo de la función */

  return VALOR;
};
```

Como se puede observar, es que cuando tenemos un `único parámetro` podemos omitir los `()` al crear una `arrow function`.

A continuación veremos un ejemplo sencillo:

```javascript
const doubleNumber = number => number * 2;

console.log(doubleNumber(10)); // Imprime 20
```

## Funciones lambda

Las `funciones lambda` (también conocidas como `funciones anónimas`) son aquellas funciones que NO están asociadas a un nombre específico. Se pueden definir `funciones lambda` mediante `arrow functions` o mediante `expresiones de función`.

Las `funciones lambda` son utilizadas para definir:

- `Funciones de callback`.

- `Funciones de retorno`.

- `IIFE (Immediately Invoked Function Expressions)`.

### Usando arrow functions para definir funciones lambda

`Todas las arrow functions son anónimas`, solamente que nosotros las hemos estado `asignando a constantes` para poder `darles un nombre`. 

A continuación veremos un ejemplo de como utilizr una `arrow function` para definir una `función de callback` de manera anónima:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const doubleNumbers = numbers.map(num => num * 2);

console.log(doubleNumbers); // Imprime [ 2, 4, 6, 8, 10, 12 ]
```

Como se puede observar, al método `map` le pasamos como función de callback la siguiente función lambda: `num => num * 2`.

`IMPORTANTE`: Recomiendo utilizar siempre `arrow functions` para definir `funciones lambda`, ya que hace que el código sea más legible.

### Usando expresiones de función para definir funciones lambda

También, `todas las expresiones de función son anónimas`, solamente que nosotros las hemos estado `asignando a constantes` para poder `darles un nombre`. 

A continuación veremos un ejemplo de como utilizr una `expresiones de función` para definir una `función de callback` de manera anónima:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers); // Imprime [ 2, 4, 6, 8, 10, 12 ]
```

Como se puede observar, al método `map` le pasamos como función de callback la siguiente función lambda: `function (num) { return num * 2; }`.

## Pasaje de parametros por valor y por referencia.

COMPLETAR.

## Funciones de alto orden.

COMPLETAR.

### Funciones de callback.

### Retornar funciones.

### Retornar objetos de funciones.


## Funciones recursivas.

COMPLETAR.

## Operador rest para los parámetros.

COMPLETAR.

## IIFE (Immediately Invoked Function Expressions).

COMPLETAR.
