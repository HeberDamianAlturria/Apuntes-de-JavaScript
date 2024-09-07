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

## Asignando valores por defecto en funciones.

Los parámetros de las funciones también pueden tener `valores por defecto`, lo cuales serán de utilidad para que los parámetros tengan valores predefinidos si no se pasa ningún valor o si se pasa `undefined` al llamar a la función. Esta característica hace que las funciones sean más flexibles y evita la necesidad de comprobar explícitamente si los argumentos son `undefined` dentro del cuerpo de la función. Podemos definir funciones que tengan valores por defecto de la siguiente forma general:

- Funciones que donde todos sus parámetros tienen valores por defecto:

  Podemos definir en `JavaScript` una función cuyos argumentos tengan todos valore por defecto de la siguiente forma general:

  ```javascript
  /* Usando funciones lambda */
  const nombreFunction = (parameter1 = VALOR_POR_DEFECTO_1, parameter2 = VALOR_POR_DEFECTO_2, /*...*/, parameterN = VALOR_POR_DEFECTO_N) => {

    /* Cuerpo de la función */

    // Puede retornar un valor (opcional).
  };

  /* Usando la palabra function */
  function nombreFunction(parameter1 = VALOR_POR_DEFECTO_1, parameter2 = VALOR_POR_DEFECTO_2, /*...*/, parameterN = VALOR_POR_DEFECTO_N) {

    /* Cuerpo de la función */

    // Puede retornar un valor (opcional).
  }
  ```

  De esta manera, tenemos la flexibilidad de llamar a una función llamada `nombreFunction` pasándole todos, solamente algunos o ningún valor como argumento, ya que tendrán sus parámetros valores por defecto.

  A continuación veremos un ejemplo sencillo de esto:

  ```javascript
  const add = (a = 1, b = 2) => a + b;

  console.log(add(200, 300)); // Imprime: 500

  // add(2) es igual a hacer add(2, 2), ya que por defecto b = 2
  console.log(add(2)); // Imprime: 4

  // add(undefined, 1) es igual a hacer add(1, 1), ya que por defecto a = 1
  console.log(add(undefined, 1)); // Imprime: 2

  // add() es igual a hacer add(1, 2), ya que por defecto a = 1 y b = 2
  console.log(add()); // Imprime: 3
  ```

  Y notemos que con algo tan sencillo podemos lograr que una función se comporte de diferentes maneras, lo cuál es muy útil para algunas circunstancias.

- Funciones que donde solamenta ALGUNOS de sus parámetros tienen valores por defecto:

  También podemos hacer que solamente `ALGUNOS` de sus parámetros tengan valores por defecto. Esto podemos hacerlo de las siguiente forma general:

  ```javascript
  /* Usando funciones lambda */
  const nombreFunction = (parameter1, parameter2, /*...*/, parameterI, parameterJ = VALOR_POR_DEFECTO_J, /*...*/, parameterN = VALOR_POR_DEFECTO_N) => {

    /* Cuerpo de la función */

    // Puede retornar un valor (opcional).
  };

  /* Usando la palabra function */
  function nombreFunction(parameter1, parameter2, /*...*/, parameterI, parameterJ = VALOR_POR_DEFECTO_J, /*...*/, parameterN = VALOR_POR_DEFECTO_N) {

    /* Cuerpo de la función */

    // Puede retornar un valor (opcional).
  }
  ```

  Como se puede observar, para poder lograr que solamente ALGUNOS parámetros tengan valores por defecto debemos entonces:
  
  1. Poner adelante los nombres de los parámetros que deberán tener un valor si o si cuando se llame a la función.

  2. Ponemos al final los nombres de los parámetros que tendrán valores por defecto en caso de que no se les provea un valor explícito al llamar a la función.

  A continuación veremos un ejemplo sencillo:

  ```javascript
  const showNames = (firstName, lastName = "Perez") => {
    console.log(`Hello ${firstName} ${lastName}`);
  };

  showNames("Heber"); // Hello Heber Perez

  showNames("Heber", undefined); // Hello Heber Perez

  showNames("Heber", "ALturria"); // Hello Heber ALturria
  ```

## Pasaje de parametros por valor y por referencia.

Hemos visto en lecciones anteriores que los `tipos primitivos` se asignan `por valor` y los `tipos NO primitivos` se asignan `por referencia`. Bueno, a la hora de pasarle argumentos a una función, los valores se le son asignados a los parámetros tendremos que tener en cuenta si se pasan `por valor` o `por referencia` para evitar efectos secundarios. 

A continuación veremos las diferencias entre `pasaje por valor` y `pasaje por referencia`.

### Pasaje por valor.

Al pasarle un valor de `tipo primitivo` como argumento a una función, se le `asigna` una copia exacta de ese valor al parámetro correspondiente. Esto significa que cualquier modificación realizada al parámetro dentro de la función no afectará al valor original fuera de ella. A esto se lo conoce como `pasaje por valor`. 

A continuación veremos un ejemplo:

```javascript
const sumar = (num1, num2) => {
  num1 = 1;
  num2 = 2;
  return num1 + num2;
};

const number1 = 10, number2 = 20;

console.log(sumar(number1, number2)); // Imprime 3

console.log(number1); // Imprime 10

console.log(number2); // Imprime 20
```

Como se puede observar, le cambiamos los valores a los parámetros dentro de la función `sumar`, pero dicho cambio no afectó a los valores originales de `number1` y `number2` que fueron los argumentos.

### Pasaje por referencia.

Al pasarle un valor de `tipo NO primitivo` como argumento a una función, se le `asigna` la dirección de la memoria de dicho valor al parámetro correspondiente, lo que genera un `aliasing`. Esto significa que cualquier modificación realizada al parámetro dentro de la función afectará al valor original fuera de ella. A esto se lo conoce como `pasaje por referencia`.

A continuación veremos un ejemplo:

```javascript
// Esta función presenta efectos secundarios.
const sortArrayOfNumbers = (arrayOfNumbers) => {
  arrayOfNumbers.sort((a, b) => a - b);
  return arrayOfNumbers;
};

const numbers = [5, 2, 3, 1, 20];

const sortedNumbers = sortArrayOfNumbers(numbers);

console.log(sortedNumbers); // Imprime [ 1, 2, 3, 5, 20 ]

console.log(numbers); // Imprime [ 1, 2, 3, 5, 20 ]

// Es más, ahora apuntan a la misma posición de memoria.

sortedNumbers.push(20202020);

console.log(sortedNumbers); // Imprime [ 1, 2, 3, 5, 20, 20202020 ]

console.log(numbers); // Imprime [ 1, 2, 3, 5, 20, 20202020 ]
```

### Consejo al usar pasaje por referencia.

Al trabajar con `pasaje por referencia` hay que tener en cuenta que estamos trabajando con `referencias en memoria` y por ende podemos tener efectos secundarios si es que no somos cuidadosos, o generar un `aliasing` si es que retornamos esa referencia en la función.

A continuación daré una serie de consejos para minimizar la posibilidad de errores al utilizar `pasaje por referencia`:

1. Si un `parametro` recibe un valor `por referencia`, es recomendable tratarlo como si fuera de `solo lectura` y NO modificar su valor.

2. Si un `parametro` recibe un valor `por referencia` y debemos modificarlo si o si, entonces lo mejor es crear una copia en nueva memoria de dicho valor y `modificar` esa copia.

3. Si un `parametro` recibe un valor `por referencia` y debemos retornarlo si o si, entonces lo mejor es crear una copia en nueva memoria de dicho valor y `retornar` esa copia.

A continuación veremos un ejemplo utilizando estos consejos:

```javascript
// Esta función NO tiene efectos secundarios.
const sortArrayOfNumbers = (arrayOfNumbers) => {
  const numbersCopy = [...arrayOfNumbers];
  numbersCopy.sort((a, b) => a - b);
  return numbersCopy;
};

const numbers = [5, 2, 3, 1, 20];

const sortedNumbers = sortArrayOfNumbers(numbers);

console.log(sortedNumbers); // Imprime [ 1, 2, 3, 5, 20 ]

console.log(numbers); // Imprime [ 5, 2, 3, 1, 20 ]

// Es más, ahora NO apuntan a la misma memoria.

sortedNumbers.push(20202020);

console.log(sortedNumbers); // Imprime [ 1, 2, 3, 5, 20, 20202020 ]

console.log(numbers); // Imprime [ 5, 2, 3, 1, 20 ]
```

## Funciones de alto orden.

Las `funciones de alto orden` o también llamadas `high order functions`, son aquellas funciones que pueden tomar como argumento una o más funciones y/o pueden retornar una o más funciones como resultado.

A continuación veremos las distintas maneras de utilizar las `high order functions`:

### Pasar funciones como argumento.

Las `high order functions` pueden tomar como argumento una o más funciones. Esto se vería de la siguiente forma general:

```javascript
const highOrderFunction = (function_1, function_2, /*...*/, function_N) => {
  /* Cuerpo de la función 
   * que trabaja con las funciones proporcionadas 
   */

  return VALOR;
};

// Llamando a esta función usando funciones anónimas.
const resultado = highOrderFunction(
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 1 */ },
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 2 */ },
  /*...*/,
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback N */ }
);
```

A las funciones que son pasadas como argumento a otra función se les llaman `funciones de callback`. Generalmente, las `funciones de callback` estarán definidas como `funciones anónimas`. Sin embargo, también puede ser que las `funciones de callback` provengan de otras funciones que hemos definido previamente.

<br />

También pueden tomar como argumentos una o más funciones y a su vez también tomar como argumento uno o más elementos que NO sean funciones. Esto podemos hacerlo de la siguiente forma general:

```javascript
// Funciones primero y luego valores
const highOrderFunction = (function_1, function_2, /*...*/, function_N, elem_1, elem_2, /*...*/, elem_N) => {
  /* Cuerpo de la función 
   * que trabaja con los elementos y 
   * funciones proporcionados 
   */

  return VALOR;
};

// Llamando a esta función usando funciones anónimas.
const resultado = highOrderFunction(
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 1 */ },
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 2 */ },
  /*...*/,
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback N */ },
  VALOR_1,
  VALOR_2,
  /*...*/,
  VALOR_N
);


// Valores primero y luego funciones
const highOrderFunction = (elem_1, elem_2, /*...*/, elem_N, function_1, function_2, /*...*/, function_N) => {
  /* Cuerpo de la función 
   * que trabaja con los elementos y 
   * funciones proporcionados 
   */

  return VALOR;
};

// Llamando a esta función usando funciones anónimas.
const resultado = highOrderFunction(
  VALOR_1,
  VALOR_2,
  /*...*/,
  VALOR_N,
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 1 */ },
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback 2 */ },
  /*...*/,
  (/* Puede tomar o no argumentos */) => { /* lógica de la función callback N */ }
);
```

En estas formas generales hemos estado utilizando `arrow functions`, pero podemos utilizar también `expresión de función` o también el nombre de funciones que hayamos definido a lo largo del código.

Como ejemplo de este tipo de `high order functions` tenemos los métodos de arreglos como `map`, `filter`, `reduce`, etc.

A continuación haré un ejemplo de como se utilizan:

```javascript
const procesarElementos = (lista, funcionMap, funcionFiltro) => {
  const elementosTransformados = lista.map(funcionMap);

  const elementosFiltrados = elementosTransformados.filter(funcionFiltro);

  return elementosFiltrados;
};

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementosProcesados = procesarElementos(
  listaNumeros,
  (num) => num * 2,
  (num) => num > 10
);

console.log(elementosProcesados); // Imprime [ 12, 14, 16, 18, 20 ]
```

#### Casos de uso.

El pasar funciones como argumento nos permite reutilizar mejor el código, ya que para una misma base de código le estamos agregando la flexibilidad de poder definir partes de su comportamiento mediante las `callback`.

### Retornar funciones.

Las `high order functions` pueden retornar una función como resultado. Esto se vería de la siguiente forma general:

```javascript
const highOrderFunction = (parameter_1, parameter_2, /*...*/, parameter_N) => {
  /* Cuerpo de la función externa */

  // Retorno la función.
  return (/* Puede tener parámetros o no */) => {
    /* Cuerpo de la función interna */

    return VALOR;
  };
};

// Llamar a la highOrderFunction devuelve otra función.
const funcionResultante = highOrderFunction(
  VALOR_1,
  VALOR_2,
  /*...*/,
  VALOR_N,
);
```

La particularida que tiene este tipo de `high order functions` es que la `función interna` (que es la función retornada) tendrá acceso a los parámetros de la `función externa` (la `highOrderFunction` en nuestra forma general) y a las variables/constantes definidas en el `cuerpo de la función externa`, por más que dicha `función externa` se haya terminado de ejecutar. Esto permite a la `función interna` utilizar y manipular los `valores y parámetros` que fueron `definidos en el ámbito` de la `función externa`. Este comportamiento se debe al `closure`.

Básicamente se le conoce como `closure` al comportamiendo del ámbito léxico de JavaScript, que permite a las funciones acceder a las variables/constantes definidas en sus ámbitos superiores, incluso después de que esas funciones de ámbito superior hayan terminado de ejecutarse.

Este es un concepto muy abstracto que se entiende mucho mejor con ejemplos. A continuación veremos un ejemplo sencillo de uso:

```javascript
const createCounter = () => {
  let count = 0;

  return () => {
    count++;

    console.log(`This function have been called ${count} times`);
  };
};

const counter = createCounter();

counter(); // Imprime: This function have been called 1 times

counter(); // Imprime: This function have been called 2 times

counter(); // Imprime: This function have been called 3 times
```

Como se puede observar en este ejemplo, al hacer `const counter = createCounter();` lo que hacemos es que `counter` sea ahora la función retornada por la función `createCounter`. Y notemos que debido a esto, `counter` puede acceder a la variable `count` que define el `creteCounter`, por más que dicha función haya terminado de ejecutarse. 

<br />

#### Currificación.

Es importante mencionar que esta técnica nos permite hacer `currificación`, lo que significa que a una función que toma muchos argumentos (a la que le llamaré `función original`) la transformamos en dos o más `funciones parciales` que toman menos argumentos de forma individual que la `función original`, pero que en conjunto hacen la misma tarea y toman la misma cantidad de argumentos que la `función original`. Esto se ve de la siguiente forma general:

```javascript
// Función original que toma varios argumentos.
const originalFunction = (arg1, arg2, /*...*/, argN) => {
  // Cuerpo de la función original
};

const originalResult = originalFunction(VALUE_1, VALUE_2, /*...*/, VALUE_N);

// Función currificada
const curriedFunction = (arg1) => (arg2) => /*...*/ (argN) => {
  // Cuerpo de la función currificada que hace lo mismo que el cuerpo de la función original.
};

const result = curriedFunction(VALUE_1)(VALUE_2)/*...*/(VALUE_N);

// Y va a cumplirse que originalResult es igual a result.
```

Pero lo importante de la currificación es que podemos hacer `Partial Function Application`, lo que significa que podemos crear nuevas funciones pasandole como argumentos algunos valores y dejando el resto de argumentos para pasarselos en el futuro. Esto se vería de la siguiente forma general:

```javascript
// Función currificada
const curriedFunction = (arg1) => (arg2) => /*...*/ (argI) => (argJ) => /*...*/ (argN) => {
  // Cuerpo de la función currificada que hace lo mismo que el cuerpo de la función original.
};

const partialFunction = curriedFunction(VALUE_1)(VALUE_2)/*...*/(VALUE_I); 

const result = partialFunction(VALUE_J)/*...*/(VALUE_N);

/*
  Es equivalente a haber hecho:

 const result = curriedFunction(VALUE_1)(VALUE_2)...(VALUE_I)(VALUE_J)...(VALUE_N);
*/
```

Esto nos da la flexibilidad de crear nuevas funciones en base a pasarle solamente una cierta cantidad de argumentos a la función currificada.

A continuación veremos un ejemplo de uso de la currificación:

```javascript
const taxCalculatorOriginal = (taxPercentage, amount) => {
  const taxAmount = amount * (taxPercentage / 100);
  return `Impuestos a pagar: $${taxAmount.toFixed(2)}`;
};

const curriedTaxCalculator = (taxPercentage) => (amount) => {
  const taxAmount = amount * (taxPercentage / 100);
  return `Impuestos a pagar: $${taxAmount.toFixed(2)}`;
};

const calculateIVA = curriedTaxCalculator(16); // IVA del 16%
/* Y como taxPercentage es igual a 16, entonces esto es equivalente a tener:

  const calculateIVA = (amount) => {
    const taxAmount = amount * (16 / 100);
    return `Impuestos a pagar: $${taxAmount.toFixed(2)}`;
  };
*/

const calculateSalesTax = curriedTaxCalculator(10); // Impuesto de venta del 10%
/* Y como taxPercentage es igual a 10, entonces esto es equivalente a tener:

  const calculateIVA = (amount) => {
    const taxAmount = amount * (10 / 100);
    return `Impuestos a pagar: $${taxAmount.toFixed(2)}`;
  };
*/

// Y estos tres llamados son equivalentes:
console.log(calculateIVA(1000)); // Imprime: Impuestos a pagar: $160.00
console.log(curriedTaxCalculator(16)(1000)); // Imprime: Impuestos a pagar: $160.00
console.log(taxCalculatorOriginal(16, 1000)); // Imprime: Impuestos a pagar: $160.00

// Y estos tres llamados son equivalentes:
console.log(calculateSalesTax(500)); // Imprime: Impuestos a pagar: $50.00
console.log(curriedTaxCalculator(10)(500)); // Imprime: Impuestos a pagar: $50.00
console.log(taxCalculatorOriginal(10, 500)); // Imprime: Impuestos a pagar: $50.00
```

Lo interesante de este ejemplo es que utilizamos la `Partial Function Application` para crear nuevas funciones.

### Retornar objetos de funciones.

Podemos también utilizar las `high order functions` para retornar objetos de funciones, lo cuál sería una manera de retornar múltiples funciones pero con una idea similar a lo visto previamente. De forma general esto se vería como:

```javascript
const highOrderFunction = (parameter_1, parameter_2, /*...*/, parameter_N) => {
  /* Cuerpo de la función externa */

  const funcionInterna_1 = (/* Puede tener parámetros o no */) => {
    /* Cuerpo de la función interna 1 */

    return ALGUN_VALOR_1;
  };

  const funcionInterna_2 = (/* Puede tener parámetros o no */) => {
    /* Cuerpo de la función interna 2 */

    return ALGUN_VALOR_2;
  };

  /*...*/

  const funcionInterna_N = (/* Puede tener parámetros o no */) => {
    /* Cuerpo de la función interna N */

    return ALGUN_VALOR_N;
  };

  return {
    funcionInterna_1,
    funcionInterna_2,
    /*...*/,
    funcionInterna_N,
  }
};

// Llamar a la highOrderFunction devuelve un objeto de funciones.
const objetoDeFuncionesResultante = highOrderFunction(
  VALOR_1,
  VALOR_2,
  /*...*/,
  VALOR_N,
);

// También podemos utilizar el destructuring para acceder a las funciones que necesitemos.

const {funcionInterna_I, /*...*/, funcionInterna_J} = highOrderFunction(
  VALOR_1,
  VALOR_2,
  /*...*/,
  VALOR_N,
);
```

La particularida que tiene este tipo de `high order functions` es que `todas` las `funciones internas` tendrá acceso a los parámetros de la `función externa` (la `highOrderFunction` en nuestra forma general) y a las variables/constantes definidas en el `cuerpo de la función externa`, gracias al ya mencionado `closure`. Esto permite a las `funciones internas` utilizar y manipular estos valores externos.

A continuación veremos un ejemplo de esta técnica:

```javascript
const createCounter = (initialValue) => {
  let counter = initialValue;

  const getCounter = () => counter;

  const incrementCounter = () => {
    counter++;
  };

  const decrementCounter = () => {
    counter--;
  };

  return { getCounter, incrementCounter, decrementCounter };
};

const myCounter = createCounter(10);

console.log(myCounter.getCounter()); // Imprime: 10

myCounter.incrementCounter(); // Incremento en 1

console.log(myCounter.getCounter()); // Imprime: 11

myCounter.decrementCounter(); // Decremento en 1

console.log(myCounter.getCounter()); // Imprime: 10
```

#### Dato importante.

Como hemos visto en el ejemplo anterior, cuando querramos acceder a un `valor` definido en el cuerpo de la `función externa`, el cual se irá actualizando gracias a otras funciones; para ver las actualizaciones debemos utilizar el concepto de `closure`. Esto significa que debemos retornar el `valor` en una `función` para asegurarnos de obtener siempre la versión más reciente del valor, gracias al comportamiento del `closure`.

De forma general, la manera correcta de hacerlo es:

```javascript
/* Este código es correcto ✔️ */

const highOrderFunction = (/* Parametros (opcional) */) => {

  let nombreDeLaVariable = VALOR_INICIAL;

  /* Resto del cuerpo de la función externa */

  // Esta función devuelve el valor actual de nombreDeLaVariable.
  const funcionAccedeVariable = () => nombreDeLaVariable;

  // Esta función modifica el valor de nombreDeLaVariable.
  const funcionModificaVariable_1 = (/* Parametros (opcional) */) => {

    /* Cuerpo de la funcionModificaVariable_1 */

  };

  /*...*/

  // Esta función modifica el valor de nombreDeLaVariable.
  const funcionModificaVariable_N = (/* Parametros (opcional) */) => {

    /* Cuerpo de la funcionModificaVariable_N */

  };

  /* Puede haber otras funciones */

  return {
    funcionAccedeVariable,
    funcionModificaVariable_1,
    /*...*/,
    funcionModificaVariable_N,
    /* Puede retornar otras funciones */
  }
};
```

De esa manera, será posible acceder al valor actualizado de `nombreDeLaVariable`, solamente llamando a la función `funcionAccedeVariable` y obteniendo el valor retornado.


En cambio, la siguiente forma general es `totalmente incorrecta`:

```javascript
/* Este código es incorrecto ⛔. Se muestra con fines de ejemplo */

const highOrderFunction = (/* Parametros (opcional) */) => {

  let nombreDeLaVariable = VALOR_INICIAL;

  /* Resto del cuerpo de la función externa */

  // Esta función modifica el valor de nombreDeLaVariable.
  const funcionModificaVariable_1 = (/* Parametros (opcional) */) => {

    /* Cuerpo de la funcionModificaVariable_1 */

  };

  /*...*/

  // Esta función modifica el valor de nombreDeLaVariable.
  const funcionModificaVariable_N = (/* Parametros (opcional) */) => {

    /* Cuerpo de la funcionModificaVariable_N */

  };

  /* Puede haber otras funciones */

  return {
    nombreDeLaVariable, // El error está en devolver el valor ⛔.
    funcionModificaVariable_1,
    /*...*/,
    funcionModificaVariable_N,
    /* Puede retornar otras funciones */
  }
};
```

En esta forma general, el error está en devolver el `valor` de `nombreDeLaVariable`, pues tendrá el mismo valor que tiene al momento de retornar el objeto. Esto significa que el valor de `nombreDeLaVariable` nunca cambiará.

<b>Ejemplo de manera incorrecta:</b>

El siguiente ejemplo de código es una copia del ejemplo anterior, pero `es incorrecto`:

```javascript
/* Este código es incorrecto ⛔. Se muestra con fines de ejemplo */

const createCounter = (initialValue) => {
  let counter = initialValue;

  const incrementCounter = () => {
    counter++;
  };

  const decrementCounter = () => {
    counter--;
  };

  // El error está en devolver el counter ⛔.
  return { counter, incrementCounter, decrementCounter };
};

const myCounter = createCounter(10);

console.log(myCounter.counter); // Imprime: 10

myCounter.incrementCounter(); // Incremento en 1

/* No se actualiza el valor ⛔ */
console.log(myCounter.counter); // Imprime: 10. 

myCounter.incrementCounter(); // Incremento en 1

/* No se actualiza el valor ⛔ */
console.log(myCounter.counter); // Imprime: 10
```

El error viene de que estamos devolviendo directamente la variable `counter`, en lugar de devolver `una función que acceda y retorne el valor de counter`. Al devolver directamente `counter`, se devuelve el valor de `counter` en el momento de la creación del objeto, y no se actualiza cuando llamamos a incrementCounter o decrementCounter.

## Operador rest para los parámetros.

El operador rest se simboliza como `...` y nos permite pasarle como argumento a una función una cantidad indefinida de valores. Esto se hace de la siguiente forma general:

```javascript
// Función que toma infinitos argumentos.
const nameFunction = (...args) => {
  /* Cuerpo de la función */

  return VALOR;
};

const resultado = nameFunction(VALUE_1, VALUE_2, /*...*/, VALUE_N);
```

En esta forma general `args` será un `array` que contendrá los valores que le pasamos como argumento. Notemos que para `nameFunction(VALUE_1, VALUE_2, /*...*/, VALUE_N)`, entonces se cumple que `args = [VALUE_1, VALUE_2, ..., VALUE_N]`.

También puede que la función tenga unos parámetros nombrados y al final el arreglo de argumento usando el operador rest. Esto se hace de la siguiente forma general:

```javascript
// Función que toma infinitos argumentos.
const nameFunction = (parameter1, parameter2, /*...*/, parameterI, ...args) => {
  /* Cuerpo de la función */

  return VALOR;
};

const resultado = nameFunction(VALUE_1, VALUE_2, /*...*/, VALUE_I, VALUE_J, /*...*/, VALUE_N);
```

En esta forma general tenemos que para `nameFunction(VALUE_1, VALUE_2, /*...*/, VALUE_I, VALUE_J, /*...*/, VALUE_N)` se va a cumplir que `parameter1 = VALUE_1, parameter2 = VALUE_2, ..., parameterI = VALUE_I` y finalmente `args = [VALUE_J, ..., VALUE_N]`. 

Es importante mencionar que al usar el `operador rest` siempre debe ir al final en caso de tener otros parámetros nombrados.

A continuación veremos un ejemplo de como se usa:

```javascript
const addNumbers = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};

console.log(addNumbers(1, 2)); // Imprime 3

console.log(addNumbers(1, 2, 3, 4, 5)); // Imprime 15
```

Como se puede apreciar, `addNumbers` puede tomar una cantidad indefinida de argumentos gracias a que los guarda en el arreglo `numbers`.

## Funciones recursivas.

Las funciones recursivas son funciones que se llaman a sí mismas en su propio cuerpo. Se ven de la siguiente forma general:

```javascript
const recursiveFunction = (arg1, arg2, /*...*/, argN) => {
  // Caso base.
  if (condicionCasoBase) {
    /* Cuerpo del caso base */

    return VALOR_CASO_BASE;
  }

  // Caso recursivo.

  /* Cuerpo de la función del caso recursivo */

  // Llamada recursiva.
  const recursiveResult = recursiveFunction(newArg1, newArg2, /*...*/, newArgN);


  return VALOR_CASO_RECURSIVO;
};

// Llamada a la función recursiva.

const resultado = recursiveFunction(VALOR_1, VALOR_2, /*...*/, VALOR_N);
```

Como se puede observar, las `funciones recursivas` consisten de:

1. Un `caso base`: Este caso procura que nuestra función recursiva en algún momento acabará; lo que significa que el caso base `NO debe hacer llamadas recursivas`. Cabe mencionar que pueden haber muchos casos base. También es importante saber que `condicionCasoBase` será expresión booleana sobre los `parámetros de la función`.

2. Un `caso recursivo`: Este caso tendrá que hacer una o más `llamadas recursivas`. Cabe mencionar que cada llamada recursiva deberá se llamada pasándole `nuevos valores como argumento` (NO necesario a todos los parámetros tienen que tomar un valor nuevo, pero al menos uno si debe cumplir esto), y debemos hacerlo de tal manera que en algún punto se llegue a un `caso base`.

A continuación veremos un par de ejemplos sencillos:

#### Ejemplo de factorial recursivo:

```javascript
const factorial = (n) => {
  // Caso base.
  if (n === 0) return 1;

  // Caso recursivo.
  return n * factorial(n - 1);
};

console.log(factorial(5)); // Imprime 120

/*
  Y notemos que factorial(5) se calcula como:

  factorial(5);                         // paso 1: caso recursivo
  5 * factorial(4);                     // paso 2: caso recursivo
  5 * 4 * factorial(3);                 // paso 3: caso recursivo
  5 * 4 * 3 * factorial(2);             // paso 4: caso recursivo
  5 * 4 * 3 * 2 * factorial(1);         // paso 5: caso recursivo
  5 * 4 * 3 * 2 * 1 * factorial(0);     // paso 6: caso recursivo
  5 * 4 * 3 * 2 * 1 * 1;                // paso 7: caso base
*/
```

#### Ejemplo de secuencia fibonacci:

```javascript
const fibonacci = (n) => {
  // Caso base 1.
  if (n === 0) return 0;

  // Caso base 2.
  if (n === 1) return 1;

  return fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(10)); // Imprime: 55
```

#### Ejemplo de iteración recursiva de objetos:

Los objetos en JavaScript tienen una naturaleza recursiva, por ende podemos utilizar funciones recursivar para iterar sobre ellos. A continuación veremos un ejemplo:

```javascript
const sumSalary = (objectCompany) => {
  // Base case.
  if (Array.isArray(objectCompany)) {
    return objectCompany.reduce(
      (accumulateSum, { salary }) => accumulateSum + salary,
      0
    );
  }
  
  // Recursive case.
  let sum = 0;

  for (const key in objectCompany) {
    sum += sumSalary(objectCompany[key]);
  }

  return sum;
};

const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

console.log(sumSalary(company)); // Imprime: 7700
```

La función `sumSalary` lo que hará será recorrer un objeto de la forma `company` e irá sumando todos los valores de `salary` que hay en los arreglos.

### Recursión vs iteración.

La recursión tiene una particularidad y es que va apilando `activantion records` en el `stack de memoria` de memoria. El problema es que el `stack de memoria` tiene un límite y es posible que lo superemos usando funciones recursivas, generando un error conocido como `stack overflow`. 

Por otro lado, las funciones recursivas podemos convertirlas siempre a `funciones iterativas` para evitar el error de `stack overflow`.

Así que es recomendable siempre que sea posible utilizar la `iteración` en lugar de la `recursión`. Solamente recomendaría utilizar la `recursión` para recorrer estructuras de datos que por su naturaleza son recursivas, pero siempre y cuando NO sean necesarias muchas llamadas recursivas.

## IIFE (Immediately Invoked Function Expressions).

Las `IIFE` son funciones que se ejecutan inmediatamente después de su creación. Se escriben de la siguiente forma general:

```javascript
(function () {
  /* Cuerpo de la función */
})();
```
Este tipo de funciones actuarán generalmente como un `procedimiento`, el cuál tendrá su propio `scope privado` (siempre y cuando usemos `let` y `const` en el cuerpo de la IIFE), pero si podrán acceder al `scope externo` de donde estén definidas.

También podemos utilizar las `IIFE` para retornar valores de la siguiente forma general:

```javascript
const valueFromIIFE = (function () {
  /* Cuerpo de la función */

  return VALOR;
})();
```

Lo interesante de esto es que utilizamos el `IIFE` para poder asignarle un valor al `valueFromIIFE`, pero utilizando una función anónima que NO vamos a tener que llamar en ningún otro lugar del código y que no dejará rastros de su existencia.

A continuación veremos un ejemplo sencillo:

```javascript
const Counter = (function () {
  let count = 0; // Variable privada.

  const getCount = () => count;

  const incrementCount = () => {
    count++;
  };

  const decrementCount = () => {
    count++;
  };

  return {
    getCount,
    incrementCount,
    decrementCount,
  };
})();

console.log(Counter.getCount()); // Imprime: 0

Counter.incrementCount();
Counter.incrementCount();

console.log(Counter.getCount()); // Imprime: 2

Counter.decrementCount();

console.log(Counter.getCount()); // Imprime: 1
```

### IFFE para funciones asíncronas.

En contextos en donde tengamos que trabajar con funciones asíncronas y no podamos usar el `Top-level await`, una alternativa muy útil es crear un `IFFE` utilizando una función asíncrona para poder hacer el `await` dentro del `IFFE`. Esto se vería de la siguiente forma general:

```javascript
(async () => {

  // Cuerpo de la función asíncrona que se ejecuta automáticamente.

  const valor = await funcionQueRetornaPromesa(/* Argumentos (opcional) */);

  /*...*/

})();
```

### Casos de uso de las IIFE.

Podemos utilizar las `IIFE` para:

1. Reducir la cantidad de variables y constantes que hay en el script.

2. Manegar la inicialización y configuración necesaria para el script.

3. Crear variables privadas.

4. Hacer un `await` en caso de que no pudamos usar el `Top-level await`.

## Funciones generadoras.

Las `funciones generadoras` son un tipo de función especial que permite `pausar su ejecución` y `luego reanudarla más tarde`. Se utilizan para `generar secuencias de valores bajo demanda`, que pueden ser finitas o infinitas, `sin tener que calcular todos los valores de una sola vez`. Esto último significa que son muy eficientes en términos de memoria y de CPU.

Las funciones generadores se entienden mucho más con ejemplos prácticos que con sintáxis general, por lo que voy a intentar poner varios ejemplos de casos de uso. Además, las sintáxis generales que dé, son solamente a modo de representación, pero en la práctica podemos combinar muchas cosas de las que hemos visto en lecciones pasadas o futuras.

### Sintáxis para crear una función generadora y como utilizarla.

Para crear una `función generadora` tenemos que hacerlo utilizando `function*` de la siguiente forma general:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Cuerpo de la función generadora */

}
```

De esta manera `nombreFuncionGeneradora` será una función generadora.

Lo iteresante de las `funciones generadoras` es que `pueden pausar su ejecución para retornar un valor y luego retomar su ejecución desde ese punto`. Para hacer eso, dentro del cuerpo de la función generador, debemos utilizar un operador especial llamado `yield` de la siguiente forma general:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Ejecución antes de yield */

  yield VALOR_A_RETORNAR;

  /* Ejecución luego del yield */

}
```

Siendo `VALOR_A_RETORNAR` un valor que querramos que retorne la función en ese punto. Podemos tener tantos `yield` como nos sean necesarios. Es más, podemos tener ciclos infinitos que vayan haciendo `yield` de distintos valores.

Y, si quisieramos que en algún punto la función generadora `finalice definitivamente su ejecución`, debemos utilizar `return` de la siguiente forma general:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Ejecución antes de yield */

  yield VALOR_A_RETORNAR_1;

  /* Ejecución luego del yield */

  return VALOR_A_RETORNAR_2; // Si no quisieramos retornar nada, podríamos poner solamente "return;"

  /* El return finaliza la ejecución, por lo tanto, todo lo que haya abajo jamás se ejecutará */

}
```

Siendo `VALOR_A_RETORNAR_2` un valor que querramos retornar al finalizar la ejecución. Sin embargo, si no quisieramos retornar nada, podríamos simplemente escribir `return;` en lugar de `return VALOR_A_RETORNAR_2;`.

Las funciones generadoras van a finalizar su ejecución cuando se encuentren con un `return`. Obviamente, al final del cuerpo de la `función generadora` siempre hay un `return` implícito, el cuál se vería de la siguiente manera:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Ejecución antes de yield */

  yield VALOR_A_RETORNAR;

  /* Ejecución luego del yield */

  return; // aquí hay un return implícito, ya que es el final del cuerpo de la función generadora.
}
```

<br />

Ya que hemos visto la sintáxis básica para crear `funciones generadoras`, ahora vamos a ver la sintáxis de como poder utilizar la `función generadora`. 

La manera de utilizar una función generadora es de la siguiente forma general:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Ejecución antes de yield */

  yield VALOR_A_RETORNAR;

  /* Ejecución luego del yield */

}

// Creamos el iterador
const nombreIterador = nombreFuncionGeneradora(/* Argumentos (opcional) */);

// Accedemos al valor del yield.
const {value, done} = nombreIterador.next();
```

Cuando llamamos a una `función generadora`, esta no ejecuta inmediatamente su código, sino que nos devuelve un `objeto iterador`. Este objeto iterador tiene un método llamado `.next()`, que cuando lo invocamos, ejecuta el código de la función generadora hasta encontrarse con un `yield` o un `return` y devuelve un objeto con dos propiedades:

* `value`: En `value` estará el valor retornado por el `yield` o `return`.
* `done`: El `done` será un booleano que será `true` si la función generadora ha terminado (es decir que se encontró con un `return`) o `false` si todavía puede generar más valores.

Con esta información, podemos utilizar múltiples veces el método `.next()` del `objeto iterador` para ir generando valores a medida que los necesitemos.

### Ejemplo de una función generadora sencilla.

A continuación veremos un ejemplo sencillo que ejemplifica todo lo que hemos hablado previamente:

```javascript
function* generatorOfSimpleNumbers() {
  console.log("Antes del primer yield");
  yield 1;

  console.log("Antes del segundo yield");
  yield 2;

  console.log("Antes del tercer yield");
  yield 3;
}

const iterator = generatorOfSimpleNumbers();

console.log(iterator.next()); 
/*
  Primero imprime: "Antes del primer yield"
  Y luego imprime: {value: 1, done: false}
*/

console.log(iterator.next()); 
/*
  Primero imprime: "Antes del segundo yield"
  Y luego imprime: {value: 2, done: false}
*/

console.log(iterator.next()); 
/*
  Primero imprime: "Antes del tercer yield"
  Y luego imprime: {value: 3, done: false}
*/


console.log(iterator.next()); 
/*
  imprime: {value: undefined, done: true}
*/
```

Este ejemplo muestra cómo funciona una **función generadora** básica en JavaScript, y cómo se puede pausar y reanudar su ejecución utilizando el método `next()` del **iterador** que devuelve.

Notemos que en este ejemplo tenemos una `función generadora` llamada `generatorOfSimpleNumbers`, la cuál imprime en qué parte de la función estamos y luego hace un `yield` devolviendo un valor numérico. Y notemos que en base a dicha función iteradora, creamos un `objeto iterador` al que le llamamos `iterator`. Utilizamos este `iterator` para ejecutar cada porción del código de la función generadora de la siguiente manera:

1. **Primera llamada a `next()`**:
   - Con `iterator.next()`, la ejecución comienza desde el principio de la función generadora.
   - Se imprime el mensaje `"Antes del primer yield"`, y luego se pausa la ejecución en el primer `yield`, devolviendo el valor `1` en un objeto de la forma `{ value: 1, done: false }`.
   - `done: false` indica que la función generadora aún no ha terminado.

2. **Segunda llamada a `next()`**:
   - Al invocar `iterator.next()` nuevamente, la función generadora reanuda su ejecución donde se había pausado, justo después del primer `yield`.
   - Imprime `"Antes del segundo yield"`, luego pausa nuevamente en el segundo `yield`, y devuelve el valor `2` en un objeto `{ value: 2, done: false }`.
   - `done: false` indica que la función generadora aún no ha terminado.

3. **Tercera llamada a `next()`**:
   - De nuevo, se llama a `next()`, reanudando la ejecución desde donde quedó.
   - Se imprime `"Antes del tercer yield"`, y luego la ejecución se pausa en el tercer `yield`, devolviendo el valor `3` en el objeto `{ value: 3, done: false }`.
   - `done: false` indica que la función generadora aún no ha terminado.

4. **Cuarta llamada a `next()`**:
   - En la cuarta llamada a `next()`, no quedan más `yield` en la función generadora, y solamente queda un `return` implícito debido a que estamos en el final del cuerpo de la función generadora.
   - En este punto, el método `next()` devuelve `{ value: undefined, done: true }`. Notese que `value: undefined` se debe a que el `return implícito` NO retorna ningún valor.
   - `done: true` indicando que la función generadora ha terminado.

Este ejemplo ilustra cómo una función generadora **divide su ejecución en varios pasos** y devuelve valores de forma progresiva, permitiendo controlar cuándo se reanuda su código.

### Crear una función generadora usando ciclos.

La sintáxis que dimos previamente es la más fácil de entender, sin embargo es mucho más conveniente utilizar `ciclos` para poder crear una `función generadora`. A continuación veremos una sintáxis en su forma general de como hacer esto:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Cuerpo de la función antes del ciclo. 
     Podemos usarlo para inicializar variables/constantes 
   */

  while (CONDICION) {
    
    /* Ejecución antes del yield */

    yield VALOR_A_RETORNAR;

    /* Ejecución luego del yield */
  }

  /* Cuerpo de la función luego del ciclo */

}
```

En esta forma general he utilizado el `while` para representar un `ciclo`, pero podemos utilizar el `for`, el `for...of`, el `for...in`, el `do...while`, entre otros.

Lo interesante de esta sintaxis es que permite generar secuencias de valores basadas en la condición del ciclo. Si el ciclo es `infinito`, la `función generadora` podrá seguir produciendo valores de manera `infinita`. Por otro lado, si el ciclo es `finito`, entonces la `función generadora` podrá generar una cantidad `finita` de valores.

#### Ejemplo de función generadora finita.

A continuación veremos un ejemplo de una función generadora `finita`:

```javascript
function* generateRange(fromNumber, toNumber) {
  if (fromNumber > toNumber)
    throw new Error("fromNumber is bigger than toNumber");

  for (let number = fromNumber; number <= toNumber; number++) {
    yield number;
  }
}

const iteratorRange = generateRange(1, 3);

console.log(iteratorRange.next()); // Imprime: { value: 1, done: false }

console.log(iteratorRange.next()); // Imprime: { value: 2, done: false }

console.log(iteratorRange.next()); // Imprime: { value: 3, done: false }

console.log(iteratorRange.next()); // Imprime: { value: undefined, done: true }
```

Y notemos que la función `generateRange` generará una cantidad `finita` de valores gracias a que su ciclo for es `finito` y terminará cuando se cumpla que `number > toNumber`.

#### Ejemplo de función generadora infinita.

A continuación veremos un ejemplo de una función generadora `infinita`:

```javascript
function* fibonacciSequence() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacciGenerator = fibonacciSequence();

console.log(fibonacciGenerator.next().value); // imprime: 0
console.log(fibonacciGenerator.next().value); // imprime: 1
console.log(fibonacciGenerator.next().value); // imprime: 1
console.log(fibonacciGenerator.next().value); // imprime: 2
console.log(fibonacciGenerator.next().value); // imprime: 3
console.log(fibonacciGenerator.next().value); // imprime: 5
console.log(fibonacciGenerator.next().value); // imprime: 8
```

Y notemos que la función `fibonacciSequence` generará una cantidad `infinita` de valores gracias a que su ciclo while es `infinito`.

### Iterando una función generadora usando for...of

Notemos que en los ejemplos anteriores hemos utilizar del `objeto iterador` su método llamado `.next()` y hemos repetido muchas veces las líneas de código para poder ir pausando y obteniendo los valores generador por la `función generadora`. Sin embargo, también es posible iterar mediante un `for...of` la `función generadora` de la siguiente forma general:

```javascript
function* nombreFuncionGeneradora(/* Parametros (opcional) */) {

  /* Cuerpo de la función generadora */

}

/*...*/

for (const nombreValor of nombreFuncionGeneradora(/* Argumentos (opcional) */)) {
  
  /* Cuerpo del for */

}
```

Y esto lo que hará será iterar automáticamente sobre cada valor producido por la `función generadora` sin necesidad de llamar al `.next()` y por cada valor ejecutará el `cuerpo del for`. Dicha iteración automática finalizará cuando `done` sea `true`.

Cabe mencionar que utilizar esta sintáxis para iterar una `función generadora` tiene sentido si sabemos que dicha `función generadora` produce una cantidad `finita` de valores. En caso de que la `función generadora` sea `infinita`, entonces el `for nunca acabará su ejecución`.

#### Ejemplo sencillo.

A continuación veremos un ejemplo de como utilizar el `for...of` para iterar una `función generadora`:

```javascript
function* evenNumberGenerator(toNumber) {
  let number = 0;

  while (number <= toNumber) {
    if (number % 2 === 0) yield number;

    number++;
  }
}

for (const evenNumber of evenNumberGenerator(10)) {
  console.log(evenNumber);
}
```

Y esto va a imprimir:

```
0
2
4
6
8
10
```

#### Limitaciones del `for...of`

La principal limitación que tiene el iterar una **función generadora** mediante el uso del `for...of` es que si se utiliza un `return` con un valor al final de la función generadora, este valor no será accesible dentro del ciclo `for...of`. El `for...of` solo itera sobre los valores generados por los `yield`, y el valor del `return` no forma parte de la secuencia de iteración.

El siguiente ejemplo muestra lo dicho previamente:

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  return 'fin'; // Este valor no será accesible en el ciclo for...of
}

for (const value of generateNumbers()) {
  console.log(value);
}
// Imprime:
// 1
// 2
// 3
```

En este caso, el valor `'fin'` que se retorna al final de la función generadora no se imprime ni se procesa dentro del ciclo `for...of`. Para acceder al valor de retorno final, tendrías que llamar al método `.next()` manualmente y verificar el valor devuelto en el objeto `{ value, done }` una vez que la iteración haya terminado.

### Composición de generadores con `yield*`.

La sintaxis `yield*` permite que una `función generadora` delegue la ejecución a otro generador, simplificando la composición de generadores y la creación de secuencias de valores complejas. Utilizando `yield*`, una `función generadora` puede producir todos los valores de otro generador sin necesidad de iterar manualmente sobre ellos.

A continuación, se muestra la forma general de cómo utilizar `yield*`:

```javascript
function* nombreOtroGenerador() {

  /* Cuerpo de la función generadora llamada nombreOtroGenerador */

}

function* nombreGeneradorPrincipal() {
  // Ejecución antes de delegar

  yield* nombreOtroGenerador(); // Delega la ejecución al generador `nombreOtroGenerador`

  // Ejecución después de delegar
}
```

Como se puede observar, `nombreGeneradorPrincipal` está compuesto por `nombreOtroGenerador`. Por lo tanto, el flujo de ejecución será el siguiente:

1. El generador principal llamado `nombreGeneradorPrincipal` empieza a ejecutarse.

2. Encuentra `yield* nombreOtroGenerador()`, por lo que delega la ejecución a `nombreOtroGenerador`.

3. `nombreOtroGenerador` producirá valores `hasta completarse`.

4. El control regresa al generador principal, que puede continuar con la ejecución restante después de `yield*`.

#### Ejemplo sencillo de uso del operador `yield*`.

A continuación veremos un ejemplo sencillo de como utilizar el operador `yield*`:

```javascript
// Generador para secuencia de números del 1 al 3
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

// Generador para secuencia de letras de la 'a' a la 'c'
function* letters() {
  yield 'a';
  yield 'b';
  yield 'c';
}

// Generador principal que utiliza yield* para delegar en otros generadores
function* combined() {
  yield* numbers();  // Delegar la ejecución a numbers
  yield* letters();  // Delegar la ejecución a letters
}

// Uso del generador combinado
const combinedGenerator = combined();
for (const value of combinedGenerator) {
  console.log(value);
}
```

Y esto va a imprimir lo siguiente:

```
1
2
3
a
b
c
```

Y este comportamiento se debe a que:

* En la función generadora `combined`, `yield* numbers();` delega la iteración a `numbers`. Esto significa que cuando `combined` es iterado, se generarán los valores `1, 2 y 3` tal como si fueran emitidos directamente por `combined`.

* Similarmente, `yield* letters();` delega la iteración a `letters`. Después de que `combined` ha terminado de emitir los valores de `numbers`, continuará emitiendo los valores `'a', 'b' y 'c'` de `letters`.

### Función generadora asíncrona mediante `async/await`.

Las `funciones generadoras asíncronas` permiten combinar el poder de los generadores y las operaciones asíncronas en JavaScript. Podemos crear una función generadora asíncrona usando `async function*` de la siguiente forma general:

```javascript
async function* nombreGeneradorAsync(/* Parametros (opcional) */) {

  /* Cuerpo de la función generadora asíncrona */

}
```

De esta manera, dentro del cuerpo de la `función generadora asíncrona` vamos a poder hacer uso tanto del `await` para esperar a que las promesas se resuelva, como del `yield` para pausar la ejecución y devolver un resultado `envuelto en una promesa`. Generalmente, vamos a hacer un `yield await` de la siguiente forma general:

```javascript
async function* nombreGeneradorAsync(/* Parametros (opcional) */) {

  /* Cuerpo antes del yield await */

  yield await funcionQueRetornaPromesa();

  /* Cuerpo después del yield await */
}
```

Con esta sintaxis, estamos utilizando `await` para esperar a que `funcionQueRetornaPromesa()` complete su ejecución asíncrona. Una vez que la promesa se resuelve y obtenemos el resultado, `yield` devuelve ese resultado `envuelto en una promesa`.

Obviamente dentro del cuerpo de la `nombreGeneradorAsync` podemos tener cualquier tipo de código, como pueden ser `ciclos` o también podemos tener un `try/catch` para manejar el caso en que la `funcionQueRetornaPromesa()` al hacerle `await funcionQueRetornaPromesa();` salte algún tipo de `excepción`. Esto ya dependerá de nuestras necesidades.

<br />

Ahora que entendimos como crear una `función generadora asíncrona`, estamos en condiciones para entender como utilizarla. De forma general se puede utilizar de la siguiente forma:

```javascript
async function* nombreGeneradorAsync(/* Parametros (opcional) */) {

  /* Cuerpo antes del yield await */

  yield await funcionQueRetornaPromesa();

  /* Cuerpo después del yield await */
}

const nombreIteradorAsincrono = nombreGeneradorAsync();

const { value, done } = await nombreIteradorAsincrono.next();
```

Notemos que, como el `yield` de la función generadora asíncrona `devuelve sus resultados envueltos en una promesa`, entonces al utilizar el método `.next()` del `objeto iterador`, entonces para acceder al valor tenemos que hacer `await nombreIteradorAsincrono.next();`. Es decir que la sintáxis es la misma que usabamos con `funciones generadores` simple, pero con la diferencia de que tendremos que hacer un `await` del método `.next()`.


### Ejemplo sencillo.

A continuación veremos un ejemplo sencillo de como crear una `función generadora asíncrona`:

```javascript
async function* readLinesAsync() {
  const lines = [
    "Línea 1: Hola mundo",
    "Línea 2: Aprendiendo JavaScript",
    "Línea 3: Generadores asíncronos",
  ];

  for (const line of lines) {
    yield await new Promise(resolve => setTimeout(() => resolve(line), 1000)); // Espera 1 segundo y emite la línea
  }
}

const readerAsync = readLinesAsync();

console.log(await readerAsync.next()); // Imprime: "{ value: 'Línea 1: Hola mundo', done: false }" luego de 1 segundo

console.log(await readerAsync.next()); // Imprime: "{ value: 'Línea 2: Aprendiendo JavaScript', done: false }" luego de 1 segundo

console.log(await readerAsync.next()); // Imprime: "{ value: 'Línea 3: Generadores asíncronos', done: false }" luego de 1 segundo

console.log(await readerAsync.next()); // Imprime: "{ value: undefined, done: true }"
```

#### El `for await...of` para iterar una función generadora asíncrona.

JavaScript nos proporciona una sintáxis muy cómoda para iterar sobre `funciones generadoras asíncronas`, la cuál se llama `for await...of`, la cuál se usaría de la siguiete forma general:

```javascript
async function* nombreGeneradorAsync(/* Parametros (opcional) */) {

  /* Cuerpo de la función generadora asíncrona */

}

for await (const nombreValor of nombreGeneradorAsync(/* Argumentos (opcional) */)) {

  /* Cuerpo del for await...of */

}
```

Y esta sintáxis del `for await...of` lo que hará será ir iterando sobre la `función generadora asíncrona` y, por cada promesa retornada por el `yield`, va a hacerle un `await` para obtener su valor y luego ejecutará el `Cuerpo del for await...of` para dicho valor obtenido. Notese entonces que esta iteración se hace de manera `secuencial` (es decir, una tras otra y NO en paralelo).

Obviamente que tiene sentido hacer este tipo de iteración solamente si la `función generadora asíncrona` devuelve una cantidad `finita` de resultados, ya que sino estaríamos haciendo un `ciclo infinito`.

La particularidad que tiene el `for await...of` es que cuando se obtenga una promesa que sea `rejected`, entonces saltará una excepción que impedirá seguir iterando. Por lo tanto, hay que utilizar el `try/catch` para poder manejar esta situción de la siguiente forma general:

```javascript
try {

  for await (const nombreValor of nombreGeneradorAsync(/* Argumentos (opcional) */)) {

    /* Cuerpo del for await...of */

  }

} catch (error) {

  /* Cuerpo del catch para manejar el error. */

}
```

También es posible utilizar el `try/catch/finally` si nos fuese necesario.

<br />

A continuación veremos un ejemplo sencillo:

```javascript
async function* readLinesAsync() {
  const lines = [
    "Línea 1: Hola mundo",
    "Línea 2: Aprendiendo JavaScript",
    "Línea 3: Generadores asíncronos",
  ];

  for (const line of lines) {
    yield await new Promise(resolve => setTimeout(() => resolve(line), 1000)); // Espera 1 segundo y emite la línea
  }
}

for await (const line of readLinesAsync()) {
  console.log(line);
}
```

Y esto va a imprimir lo siguiente:

```
Línea 1: Hola mundo
Línea 2: Aprendiendo JavaScript
Línea 3: Generadores asíncronos
```

Donde cada línea se va a imprimir luego de 1 segundo.

### Ventajas de la función generadora.

A continuación voy a citar las ventajas del uso de `funciones generadoras`:

* `Iteración de Datos de Forma Eficiente`: Las funciones generadoras permiten crear iteradores personalizados que generan valores sobre la marcha. Esto es útil cuando necesitas procesar datos secuencialmente y no quieres cargar todos los datos en memoria a la vez. Por ejemplo, puedes generar una secuencia de números, leer líneas de un archivo grande, o recibir datos de una fuente en tiempo real sin consumir mucha memoria.

* `Mejor Manejo de Recursos`: Al generar valores bajo demanda, las funciones generadoras permiten un manejo más eficiente de recursos. Esto es especialmente beneficioso cuando trabajas con grandes conjuntos de datos o flujos continuos de información, ya que puedes procesar los datos en trozos pequeños en lugar de cargar todo en memoria. Es esta característica la que nos permite tener una secuencia `infinita` de valores generados bajo demanda.

* `Soporte para Iteración Asíncrona`: Cuando se combinan con funciones generadoras asíncronas (`async function*`), los generadores permiten manejar flujos de datos asíncronos de manera intuitiva. Puedes usar `yield` junto con `await` para esperar a que se resuelvan promesas y emitir valores secuenciales, lo que simplifica la escritura de código que maneja datos que llegan de manera asincrónica.