# Programación funcional en JavaScript.

## Introducción.

En esta lección vamos a aprender sobre los principios de la `programación funcional`. Cabe mencionar que la `programación funcional` es un paradigma que podemos utilizar en JavaScript, sin embargo el lenguaje no fue diseñado desde un principio para utilizar dicho paradigma, por ende está muy limitado su uso en `JavaScript`.

Es importante mencionar que la `programación funcional` tiene ventajas y desventajas, por lo que recomiendo tener en cuenta que, si bien es buena para algunas cosas, puede llegar a complejizar el código de manera innecesaria para realizar otras tareas. Así que lo mejor es no intentar ser `100% purista` de la programación funcional, sino que es mejor adaptarse para utilizarla como una herramienta útil en ciertas circunstancias y NO para todo.

## Funciones puras.

El principal concepto de la `programación funcional` son las `funciones puras`, las cuales se define como: `una función pura es una función que es 100% determinista y que NO produce side effects (efectos secundarios). En terminos simples, una función pura es una función que siempre produce el mismo resultado cuando se llama con los mismos argumentos y que NO modifica su entorno`.

Veamos ahora más a detalle los principales conceptos que definen a una `función pura`:

### Determinismo.

Esta característica de las funciones puras hace referencia a que `siempre se produce el mismo resultado cuando se llama a la función con los mismos argumentos`.

Veamos a continuación ejemplos de los que es una `función determinista` y otra que `NO es una función determinista`:

#### Ejemplo NO determinista:

A continuación veremos un código de ejemplo que es NO determinista:

```javascript
const generateRandomNumber = (fromValue, toValue) =>
  Math.floor(Math.random() * toValue + fromValue);

console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
```

En este ejemplo, notemos que los argumentos son `siempre iguales`, sin embargo el código generará de manera aleatoria números en el rango dado por los argumentos. Es por eso que es bastante probable que en la ejecución de los tres `console.log(generateRandomNumber(1, 10));` todos los valores sean distintos. Así que, debido a que `bajo los mismos argumentos la función retorna distintos resultados, entonces es NO determinista`.

#### Ejemplo de función determinista:

El siguiente código es un ejemplo de una función determinista:

```javascript
const add = (a, b) => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3
console.log(add(1, 2)); // 3
```

Notemos que en este ejemplo, `bajo los mismos argumentos siempre se retornará el mismo valor, por lo que la función cumple la definición de determinismo`.

### Efectos secundarios (side effects).

Se dice que una `función` tiene `side effects` si dicha función al ejecutarse `modifica el estado de su entorno o interactúa con el mundo exterior (como escribir en un archivo o modificar una variable global)`. Dicho de una manera más informal, una función tiene side effects si al ejecutarse `modifica valores o genera acciones fuera del alcance (scope) de dicha función`.

A continuación veremos un ejemplo de `una función que tiene side effects` y `otra función sin side effects`:

#### Ejemplo de función con side effects:

El siguiente código es un ejemplo de una función que contiene side effects:

```javascript
let count = 0;

const incrementCounter = (addValue = 1) => {
  count += addValue;
}

console.log(count); // 0

incrementCounter(5);

console.log(count); // 5

incrementCounter();

console.log(count); // 6
```

Notemos que en este ejemplo la función `incrementCounter` contiene un `side effect`, ya que está modificando el valor `count`, el cuál es una variable definida fuera de su scope.

#### Ejemplo de función sin side effects.

El siguiente código es un ejemplo de una función que NO contiene side effects:

```javascript
let count = 0;

const incrementCounter = (currentCount, addValue = 1) => currentCount + addValue;

console.log(count); // 0

count = incrementCounter(count, 5);

console.log(count); // 5

count = incrementCounter(count);

console.log(count); // 6
```

Notemos que este ejemplo hace lo mismo que el ejemplo anterios, sin embargo en este caso `incrementCounter` es una `función pura`, ya que `NO posee efectos secundarios debido a que NO modifica nada fuera de su scope` y `es determinista`.


## Las funciones puras solo pueden llamar a otras funciones puras.

La `pureza` en las funciones es `transitiva` y funciona como un `todo o nada`. Esto significa que, para que una función sea considerada `pura`, todas las funciones que ella `llame` también deben ser `puras`. Por lo tanto, si una `función pura` llama a una `función que NO es pura`, la primera función ya NO puede ser considerada `pura`.

Ahora bien, hay ciertas `funciones impuras` que pueden ser `aceptables`. Dichas `funciones impuras aceptables` suelen ser aquellas que `tienen side effects que interactuan con el mundo exterior pero sin alterar el estado del programa de manera que afecte su comportamiento esperado`, como pueden ser por ejemplo imprimir por consola con el `console.log()` o utilizar el `fetch()` para obtener recursos desde un servidor.

A continuación veremos ejemplos de como la `pureza` de las funciones es `transitiva`:

### Ejemplo de función que se vuelve impura:

A continuación veremos un ejemplo de como una función puede volverse impura:

```javascript
const arrayOfValues = [1, 2, 3];

const impureFunction = () => {
  arrayOfValues.push(arrayOfValues.at(-1) + 1); // side effect - changes the arrayOfValues array

  return arrayOfValues.length;
}

const sumValues = (array) => {
  const length = impureFunction();
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  return sum; 
}

console.log(arrayOfValues); // [1, 2, 3]

console.log(sumValues(arrayOfValues)); // 10 - Expected 6

console.log(arrayOfValues); // [1, 2, 3, 4]
```

Notemos que en este ejemplo `impureFunction` lo que hace es agregarle a `arrayOfValues` su último valor más 1, y finalmente retorna su longitud. Por lo tanto, al modificar el valor de `arrayOfValues` ya `impureFunction` se convierte en una `función impura`. 

Y notemos que `sumValues` cumple a simple vista las características de una `función pura`, sin embargo al llamar a `impureFunction` para obtener la longitud de `arrayOfValues`, entonces es `complice` de que se cambie el estado de `arrayOfValues` debido al funcionamiento interno de `impureFunction`, provocando en que el resultado retornado `NO sea el esperado`. Es por eso que `sumValues` también es una `función impura` desde el momento en que llama a `impureFunction`.

De esa manera, podemos apreciar que la `pureza` en las funciones es `transitiva`.

### Ejemplo de función pura que continúa siendo pura.

A continuación veremos un ejemplo de una función pura que continuará siendo pura:

```javascript
const arrayOfValues = [1, 2, 3];

const getLength = (array) => {
  return array.length;
}

const sumValues = (array) => {
  const length = getLength(array);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  return sum; 
}

console.log(arrayOfValues); // [1, 2, 3]

console.log(sumValues(arrayOfValues)); // 6

console.log(arrayOfValues); // [1, 2, 3]
```

Notemos que en este caso `getLength` es una función pura y, por lo tanto `sumValues` que la llama también logra ser una función pura.

## Inmutabilidad.

La `inmutabilidad` es también otro pilar fundamental de la `Programación funcional`. Dicho concepto está enfocado principalmente en los `objetos` (como pueden ser los `arrays`, `instancias de clases`, etc.), y consiste en que una vez `creado el objeto` entonces sus `datos nunca cambiarán de valor`.

### ¿Cómo lograr la inmutabilidad en JavaScript?

JavaScript no posee una manera nativa y directa de realizar la `inmutabilidad`, por lo que será responsabilidad del programador usar buenas prácticas para garantizar la inmutabilidad. La técnica más importante a utilizar para garantizar la inmutabilidad será: `En lugar de modificar directamente el valor de un dato en un objeto, vamos a crear un nuevo objeto que será una copia del que queremos modificar, pero con la diferencia de que esta nueva copia tendrá el valor del dato ya cambiado y todos los demás serán los mismos que el objeto original, de esa manera no modificaremos el objeto original`. También es recomendable (mas no obligatorio) crear `constantes` en lugar de `variables` cuando trabajemos con `objetos`, de esa manera evitamos cambiar la referencia de un objeto por una referencia a otro objeto, lo cuál rompería en cierta manera la idea de inmutabilidad.

A continuación veremos un ejemplo que ilustra esta técnica de una manera sencilla:

```javascript
/* NO respeta la inmutabilidad. */

const numbers1 = [1, 2, 3, 4];

const addNumberMutable = (numbers, num) => {
  numbers.push(num);
}

console.log(numbers1); // [ 1, 2, 3, 4 ]

addNumberMutable(numbers1, 5);

console.log(numbers1); // [ 1, 2, 3, 4, 5 ]


/* Respeta la inmutabilidad */

const numbers2 = [1, 2, 3, 4];

const addNumbersInmutable = (numbers, num) => [...numbers, num];

console.log(numbers2); // [ 1, 2, 3, 4 ]

const newNumbers = addNumbersInmutable(numbers2, 50);

console.log(numbers2); // [ 1, 2, 3, 4 ]

console.log(newNumbers); // [ 1, 2, 3, 4, 50 ]
```

Como se puede observar en este ejemplo, `addNumberMutable` NO es una función pura debido a que tiene el efecto secundario de modificar el arreglo que le pasemos como argumento y, por ende, rompiendo la inmutabilidad. En cambio, `addNumbersInmutable` si es una función pura gracias a que garantiza la inmutabilidad del arreglo que le pasemos como argumento.

### Operadores y métodos útiles para conservar la inmutabilidad. 

#### Para los arreglos.

A continuación voy a explicar cuales son los métodos y operados más útiles para aplicar la inmutabilidad en arreglos:

* `Operador spread`: Podemos utilizar el `spread operator` para agregar elementos a un arreglo sin modificarlo. Esto podemos hacerlo de la siguiente forma general:

    ```javascript
    const originalArray = [VALOR_1, /*...*/, VALOR_N];

    const newArray = [...originalArray, NEW_VALUE_1, /*...*/, NEW_VALUE_M];
    ```

    Y notemos que de esta manera tendremos que `newArray` será de la forma `[VALOR_1, /*...*/, VALOR_N, NEW_VALUE_1, /*...*/, NEW_VALUE_M]`, pero `originalArray` no habrá cambiado en nada. De esa manera podremos lograr la inmutabilidad al agregar elementos. Sin embargo, es importante notar que esto funciona bien si se cumple que `VALOR_1, ..., VALOR_N` son todos `datos primitivos`.

    Si queremos trabajar con arreglos que contengan otros objetos, entonces debemos hacer una `copia profunda`, ya que sino pueden haber `aliasings` que romperán la inmutabilidad. Para más información, recomiendo repasar la `lección sobre Arreglos` que hice.

    A continuación veremos un ejemplo sencillo de uso:

    ```javascript
    const numbers = [1, 2, 3, 4];

    const newNumbers = [-1, 0, ...numbers, 5, 6];

    console.log(numbers); // [ 1, 2, 3, 4 ]

    console.log(newNumbers); // [ -1, 0, 1, 2, 3, 4, 5, 6 ]
    ```

* `map`: El método `map` nos devolverá un `nuevo arreglo` en donde los cambios ya se habrá hecho, y conservará el arreglo original sin modificar. Esto es muy útil, ya que nos indica que el método `map` preserva la inmutabilidad.

    A continuación veremos un ejemplo:

    ```javascript
    const numbers = [1, 2, 3, 4];

    const doubleNumbers = numbers.map((num) => num * 2);

    console.log(numbers); // [ 1, 2, 3, 4 ]

    console.log(doubleNumbers); // [ 2, 4, 6, 8 ]
    ```

* `filter`: El método `filter` nos devolverá un `nuevo arreglo` que será una copia del arreglo original pero con los elementos filtrados, y NO modificará el arreglo original. Esto es muy útil, ya que nos indica que el método `filter` preserva la inmutabilidad.

    A continuación veremos un ejemplo:

    ```javascript
    const numbers = [1, 2, 3, 4];

    const evenNumbers = numbers.filter((num) => num % 2 == 0);

    console.log(numbers); // [ 1, 2, 3, 4 ]

    console.log(evenNumbers); // [ 2, 4 ]
    ```

* `toSorted`: El método `toSorted` nos devolverá un `nuevo arreglo` en donde tendrá los elementos del arreglo original ordenados según nuestras necesidades, y conservará el arreglo original sin modificar. Esto es muy útil, ya que nos indica que el método `toSorted` preserva la inmutabilidad.

    A continuación veremos un ejemplo:

    ```javascript
    const numbers = [8, 10, 1, 2];

    const arregloDecreciente = numbers.toSorted((a, b) => b - a);

    console.log(numbers); // Imprime [8, 10, 1, 2]

    console.log(arregloDecreciente); // Imprime [10, 8, 2, 1]
    ```

* `toReversed`: El método `toReversed` nos devolverá un `nuevo arreglo` en donde tendrá los elementos del arreglo original ordenados al revés, y conservará el arreglo original sin modificar. Esto es muy útil, ya que nos indica que el método `toReversed` preserva la inmutabilidad.

    A continuación veremos un ejemplo:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    const reversedNumbers = numbers.toReversed();

    console.log(numbers); // Imprime [1,2,3,4,5]

    console.log(reversedNumbers); // Imprime [5,4,3,2,1]
    ```

* `reduce`: El método `reduce` es utilizado para iterar un arreglo y reducirlo a un único valor, sin modificar el arreglo. Es por ello que `reduce` preserva la inmutabilidad.

    A continuación veremos un ejemplo de uso:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    const totalSum = numbers.reduce((acc, num) => acc + num, 0);

    console.log(numbers); // [ 1, 2, 3, 4, 5 ]

    console.log(totalSum); // Imprime 15.
    ```

### Para objetos.

A continuación voy a explicar cuales son los métodos y operados más útiles para aplicar la inmutabilidad en `objetos`:

* `operador spread`: Podemos utilizar el `spread operator` para `modificar el valor de una key en un objeto`, pero sin modificar el objeto original. Esto podemos hacerlo de la siguiente forma general:

    ```javascript
    const myObject = {
      key1: value1,
      key2: value2,
      /*...*/
      keyI: valueI,
      /*...*/
      keyN: valueN,
    };

    const newObjectModified = { ...myObject, keyI: NEW_VALUE };
    ```

    Esto lo que hará será asignarle a `newObjectModified` una copia de `myObject` donde estarán todos `clave-valor` del `myObject` pero donde la clave `keyI` tendrá el valor de `NEW_VALUE`.

    Si queremos trabajar con objetos que contengan otros objetos, entonces debemos hacer una `copia profunda`, ya que sino pueden haber `aliasings` que romperán la inmutabilidad. Para más información, recomiendo repasar la `lección sobre Objetos` que hice.

    A continuación veremos un ejemplo de su uso:

    ```javascript
    const personalInfo = {
      name: "Heber",
      age: 22,
    };

    const changedNameInfo = { ...personalInfo, name: "Gokú ssj3" };

    console.log(personalInfo); // { name: "Heber", age: 22 }

    console.log(changedNameInfo); // { name: "Gokú ssj3", age: 22 }
    ```

### Métodos de arrays que rompen la inmutabilidad.

Hay métodos que hay que evitar utilizar si queremos preservar la inmutabilidad, ya que van a modificar el arreglo original. Estos métodos serían:

* `push`: El método `push` lo que hará será agregar un elementos al final del arreglo, pero modificará el arreglo original. Conviene utilizar en su lugar el `operador spread` como vimos previamente o, también, hacer una `copia profunda` y en dicha copia hacer los cambios.

* `reverse`: El método `reverse` modifica el arreglo original poniendo al revés todos sus elementos. Conviene en su lugar utilizar el `toReversed`.

* `sort`: El método `sort` modifica el arreglo original ordenando sus elementos en función de lo que necesitemos. Conviene en su lugar utilizar el método `toSorted`.

### Relación entre funciones puras e inmutabilidad de objetos.

Si estamos trabajando con una función de la siguiente forma general:

```javascript
const OBJETO = /* Creo el objeto, el cuál puede ser también un array */

const nombreFuncion = (nombreObjeto, /* Pueden haber más argumentos */) => {

  /* Cuerpo de la función. */

};

/* LLamamos a la función */

nombreFuncion(OBJETO, /* Pueden haber más argumentos */);
```

Lo que estará sucediendo al llamar a la función de la forma `nombreFuncion(OBJETO, /* Pueden haber más argumentos */);`, es que dentro de la función `nombreFuncion` el valor de `nombreObjeto` será un `aliasing` de `OBJETO`. Entonces, si mutamos de manera directa a `nombreObjeto` dentro de la función, entonces también estaremos mutando a `OBJETO` el cuál está fuera del scope de la función, y entonces estaremos generando un `side effect`.

En conclusión, si tomamos como argumento en una función un objeto y dentro de la función lo mutamos, estaremos generando un `side effect` que proviene de `romper la inmutabilidad`. Lo que significa al fin y al cabo que para que una función sea `pura` debe respetar a toda costa la `inmutabilidad` de los `objetos que toma como argumento`, lo cuál podemos lograr si utilizamos las técnicas vistas previamente.

A continuación veremos ejemplos de esto:

#### Ejemplo de función que rompe la inmutabilidad:

Veamos el siguiente código:

```javascript
const numbers = [1, 2, 3, 4];

const addValue = (array, value) => {
  array.push(value);
};

console.log(numbers); // [ 1, 2, 3, 4 ]

addValue(numbers, 5);

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
```

Notemos que en este ejemplo `addValue` NO es una función pura, ya que tiene el `side effect` de modificar `numbers` fuera de su `scope`.

#### Ejemplo de función pura que respeta la inmutabilidad:

A continuación veremos un ejemplo de una función `pura`:

```javascript
const numbers = [1, 2, 3, 4];

const addValue = (array, value) => [...array, value];

console.log(numbers); // [ 1, 2, 3, 4 ]

const newNumbers = addValue(numbers, 5);

console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]

console.log(numbers); // [ 1, 2, 3, 4 ]
```

Notemos que en este ejemplo `addValue` es una función `pura`, ya que no está mutando el arreglo que toma como argumento y en su lugar sigue las prácticas descritas previamente.

### Problemas de la inmutabilidad en JavaScript.

Como hemos visto, la `inmutabilidad` es también un pilar fundamental de la `Programación funcional`, sin embargo en `JavaScript` existe el problema de que hacer tantas copias de objetos puede generar `problemas de rendimiento`. Podemos resolver estos problemas y garantizar la inmutabilidad mediante el uso de librería como `immer` o `immutablejs`.

## High order functions.

## Currificación.

## pipelines de funciones.

## Memoization.

Si bien este concepto no pertenece exclusivamente a la `programación funcional`, es importante mencionarlo ya que debido a que las `funciones puras` retornan siempre lo mismo cuando sus argumentos son también los mismos, entonces es posible `memoizar` los valores de retorno de dichas funciones puras en función de sus argumentos mediante una caché.

## Ventajas y desventajas de la programación funcional