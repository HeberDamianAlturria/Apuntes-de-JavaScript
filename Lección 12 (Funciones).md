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
Este tipo de funciones actuarán generalmente como un procedimiento, el cuál tendrá su propio `scope privado` (siempre y cuando usemos `let` y `const` en el cuerpo de la IIFE), pero si podrán acceder al `scope externo` de donde estén definidas.

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

### Casos de uso de las IIFE.

Podemos utilizar las `IIFE` para:

1. Reducir la cantidad de variables y constantes que hay en el script.

2. Manegar la inicialización y configuración necesaria para el script.

3. Crear variables privadas.

## Funciones generadoras.

COMPLETAR.