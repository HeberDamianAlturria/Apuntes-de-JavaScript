# Programación funcional en JavaScript.

## Introducción.

En esta lección vamos a aprender sobre los principios de la `programación funcional`. Cabe mencionar que la `programación funcional` es un paradigma que podemos utilizar en JavaScript, sin embargo el lenguaje no fue diseñado desde un principio para utilizar dicho paradigma, por ende está muy limitado su uso en `JavaScript`.

Es importante mencionar que la `programación funcional` tiene ventajas y desventajas, por lo que recomiendo tener en cuenta que, si bien es buena para algunas cosas, puede llegar a complejizar el código de manera innecesaria para realizar otras tareas. Así que lo mejor es no intentar ser `100% purista` de la programación funcional, sino que es mejor adaptarse para utilizarla como una herramienta útil en ciertas circunstancias y NO para todo.

## Funciones puras.

El principal concepto de la `programación funcional` son las `funciones puras`, las cuales se define como: `una función pura es una función que es 100% determinista y que NO produce side effects (efectos secundarios). En terminos simples, una función pura es una función que siempre produce el mismo resultado cuando se llama con los mismos argumentos y que NO modifica su entorno`.

Veamos ahora más a detalle los principales conceptos que definen a una `función pura`:

### Determinismo (transparencia referencial).

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

Las `funciones de alto orden` o también llamadas `high order functions`, son aquellas funciones que pueden tomar como argumento una o más funciones y/o pueden retornar una o más funciones como resultados. Hemos hablado con anterioridad de las `high order functions`, pero ahora vamos a enfocarlo principalmente en términos de la `programación funcional`.

A continuación veremos las distintas maneras de utilizar las `high order functions`:

### Pasar funciones como argumento.

Las `high order functions` pueden tomar como argumento una o más `funciones puras`. Además, querremos que la `high order function` sea `determinista` y no tenga `side effects`, para lograr garantizar que es una `función pura`. Esto se vería de la siguiente forma general:

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

A las funciones que son pasadas como argumento a otra función se les llaman `funciones de callback` y, como estamos usando la programación funcional, deberán ser `funciones puras`.

<br />

También pueden tomar como argumentos una o más `funciones puras` y a su vez también tomar como argumento uno o más elementos que NO sean funciones. Además, querremos que la `high order function` sea `determinista` y no tenga `side effects`, para lograr garantizar que es una `función pura`. Esto podemos hacerlo de la siguiente forma general:

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

En estas formas generales hemos estado utilizando `arrow functions` para representar a las `funciones puras`, pero podemos utilizar también `expresión de función` o también el nombre de funciones que hayamos definido a lo largo del código.

Como ejemplo de este tipo de `high order functions` tenemos los métodos de arreglos como `map`, `filter`, `reduce`, etc. los cuales toman como argumento una `función pura`.

A continuación haré un ejemplo de como se utilizan:

```javascript
const users = [
  {
    id: 1,
    name: "Heber",
    favoriteAnimes: ["Death Note", "Monster", "Steins;gate"],
  },
  { id: 2, name: "Naty", favoriteAnimes: ["Horimiya", "Steins;gate"] },
  { id: 3, name: "L Lawliet", favoriteAnimes: ["Death Note", "Naruto"] },
];

const getUniqueAnimesByCriteria = (users, filterCriteria) => {
  return new Set(
    users.filter(filterCriteria).flatMap((user) => user.favoriteAnimes)
  );
};

console.log(users);
/* Imprime:

  [
    {
      id: 1,
      name: 'Heber',
      favoriteAnimes: [ 'Death Note', 'Monster', 'Steins;gate' ]
    },
    { id: 2, name: 'Naty', favoriteAnimes: [ 'Horimiya', 'Steins;gate' ] },
    { id: 3, name: 'L Lawliet', favoriteAnimes: [ 'Death Note', 'Naruto' ] }
  ]
*/

const favoriteAnimesOfUserWithId1 = getUniqueAnimesByCriteria(
  users,
  (user) => user.id === 1
);

console.log(favoriteAnimesOfUserWithId1); // Imprime: Set(3) { 'Death Note', 'Monster', 'Steins;gate' }

const favoriteAnimesOfUsersWithTwoFavorites = getUniqueAnimesByCriteria(
  users,
  (user) => user.favoriteAnimes.length === 2
);

console.log(favoriteAnimesOfUsersWithTwoFavorites); // Imprime: Set(4) { 'Horimiya', 'Steins;gate', 'Death Note', 'Naruto' }
```

Notemos que en este ejemplo `getUniqueAnimesByCriteria` es una `función de alto orden`, la cuál cumple la propiedad de ser `pura`, ya que en ningún momento muta el arreglo de objetos llamado `users`.

#### Casos de uso.

El pasar funciones como argumento nos permite reutilizar mejor el código, ya que para una misma base de código le estamos agregando la flexibilidad de poder definir partes de su comportamiento mediante las `funciones puras` que toma como `callback`.

### Retornar funciones.

Las `high order functions` pueden retornar una función como resultado. Para poder garantizar que la `high order function` que definimos sea `pura`, NO basta con que dicha función de orden superior cumpla con las definiciones de una `función pura`, sino que también se necesita que `la función que ésta retorna también sea pura` Esto se vería de la siguiente forma general:

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

Cabe mencionar que en la programación funcional está PROHIBIDO que la `función retornada` por la `highOrderFunction` haga uso del `closure` para `modificar o mutar` los datos definidos en el cuerpo de la `highOrderFunction`, ya que eso provocaría que la `función retornada` NO sea `pura` debido a que tendría `side effects` y, por ende, provocaría que la `highOrderFunction` tampoco sea `pura`. Sin embargo, si es posible y deseable que la `función retornada` por la `highOrderFunction` haga uso del `closure` para `acceder en modo lectura dentro de su cuerpo` los datos definidas en el cuerpo de la `highOrderFunction`, siempre con el debido cuidado de que la `función retornada` preserve la `inmutabilidad`; de esa manera podremos lograr que la `función retornada` sea una `función pura`.

A continuación veremos unos ejemplos sencillos que ilustran lo dicho previamente:

#### Ejemplo de high order function cuya función retornada NO es pura:

Analicemos el siguiente código:

```javascript
const createCounter = () => {
  let count = 0;

  return () => count++;
};

const counter = createCounter();

let counterValue = counter(); 

console.log(counterValue); // Imprime: 0

counterValue = counter();

console.log(counterValue); // Imprime: 1

counterValue = counter();

console.log(counterValue); // Imprime: 2
```

Como se puede observar en este ejemplo, al hacer `const counter = createCounter();` lo que hacemos es que `counter` sea ahora la función retornada por la función `createCounter`. Y notemos que debido a esto, `counter` puede acceder a la variable `count` que define el `creteCounter`, por más que dicha función haya terminado de ejecutarse. Sin embargo, notemos que `counter` NO es una `función pura` ya que NO es `determinista` y produce el `side effect` de incrementar el valor de la variable `count` perteneciente al `closure` de `createCounter`. Así que notemos que el problema viene de que la `función retornada` por el `createCounter` está `modificando` el valor de la variable `count` y, por ende, rompiendo la `inmutabilidad`.

#### Ejemplo de high order function cuya función retornada es pura:

Analicemos el siguiente código:

```javascript
const createTaxCalculator = (taxPercentage) => {
  return (income) => {
    return income * (taxPercentage / 100);
  };
};

const calculateIncomeTaxUS = createTaxCalculator(20); // 20% de impuesto.

const incomeTaxResultUS = calculateIncomeTaxUS(200);

console.log(incomeTaxResultUS); // Imprime: 40


const calculateIncomeTaxUK = createTaxCalculator(15); // 15% de impuesto.

const incomeTaxResultUK = calculateIncomeTaxUK(200);

console.log(incomeTaxResultUK); // Imprime: 30
```

Notemos que en este ejemplo la `función retornada` por el `createTaxCalculator` lo que hará será `acceder en modo lectura` a la variable `taxPercentage` para usarla dentro del cuerpo de dicha función retornada. De esa manera, tenemos que la `función retornada` por `createTaxCalculator` es una `función pura` y, por ende también `createTaxCalculator` será una `función pura`.

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

## pipelines de funciones (composición de funciones).

En general, cuando trabajemos con la programación funcional, lo que estaremos haciendo es trabajar con `pipelines de funciones o composición de funciones`. Esto implica combinar varias funciones pequeñas y específicas para construir operaciones más complejas de manera clara y legible. Para lograr este objetivo, los pipelines de funciones deben seguir varios principios clave de la programación funcional:

* `Funciones Pequeñas y Específicas`: Cada función realiza una tarea específica y simple. Esto facilita la reutilización y el mantenimiento del código.

* `Inmutabilidad`: Las funciones no mutan los datos originales. En su lugar, crean y devuelven nuevos datos basados en los datos de entrada.

* `Flujo de Datos`: El flujo de datos a través del pipeline es unidireccional y predecible. Esto significa que las funciones en el pipeline reciben datos, realizan alguna operación y pasan los resultados a la siguiente función sin alterar los datos originales.

* `Pureza Funcional`: Las funciones no tienen efectos secundarios y son deterministas. Esto significa que no alteran estados externos ni dependen de estados mutables, y además siempre se comportarán de la misma manera ante los mismos argumentos.

### Manera sencilla de definir la composición.

Podemos definir de manera sencilla a la composición de la siguiente forma general:

```javascript
const function1 = (value1) => {
  /* Cuerpo de la función 1 */

  return returnValue1;
};

const function2 = (value2) => {
  /* Cuerpo de la función 2 */

  return returnValue2;
};

const functionN = (valueN) => {
  /* Cuerpo de la función N */

  return returnValueN;
};

const compositionOfFunctions = (startValue) => functionN(function2(function1(startValue)));

const resultComposition = compositionOfFunctions(ALGUN_VALOR);
```

Entonces, al hacer `const resultComposition = compositionOfFunctions(ALGUN_VALOR);` lo que estamos haciendo visualmente es ejecutar el siguiente `pipeline`:

```
    ALGUN_VALOR                   returnValue1                    returnValue2                       returnValueN
-------------------> function1 ------------------> function2 ----------------------> functionN ------------------------> resultComposition
```

Es decir que lo que hará será:

1. Pasarle `ALGUN_VALOR` como argumento de `function1`.

2. Al resultado obtenido de `function1` se lo pasamos como argumento a `function2`.

3. Al resultado obtenido de `function2` se lo pasamos como argumento a `functionN`.

4. Al resultado obtenido de `functionN` se lo asignamos a la constante `resultComposition`

Y notemos que lo fundamental para que este `pipeline` funcione de manera adecuada es lo siguiente:

1. `function1` debe poder tomar como argumento `ALGUN_VALOR`.

2. `function2` debe poder tomar como argumento el resultado de `function1`.

3. `functionN` debe poder tomar como argumento el resultado de `function2`.

#### Dato importante.

Es muy importante destacar que `el orden de llamada de las funciones al hacer la composición es fundamental`, ya que definirá el `flujo de datos a través del pipeline`. Es más, puede que cambiando el orden de llamada de las funciones en la composición, el código deje de funcionar o que el resultado obtenido sea distinto al planeado.

De forma general, veamos que pasa si solamente invertimos el orden de llamada de las funciones en la forma general previamente mencionada:

```javascript
const compositionOfFunctions2 = (startValue) => function1(function2(functionN(startValue)));

const resultComposition2 = compositionOfFunctions2(ALGUN_VALOR_2);
```

Entonces, al hacer `const resultComposition2 = compositionOfFunctions2(ALGUN_VALOR_2);` lo que estamos haciendo visualmente es ejecutar el siguiente `pipeline`:

```
    ALGUN_VALOR_2                   returnValueN                    returnValue2                       returnValue1
-------------------> functionN ------------------> function2 ----------------------> function1 ------------------------> resultComposition2
```


Es decir que lo que hará será:

1. Pasarle `ALGUN_VALOR_2` como argumento de `functionN`.

2. Al resultado obtenido de `functionN` se lo pasamos como argumento a `function2`.

3. Al resultado obtenido de `function2` se lo pasamos como argumento a `function1`.

4. Al resultado obtenido de `function1` se lo asignamos a la constante `resultComposition2`

Y notemos que lo fundamental para que este `pipeline` funcione de manera adecuada es lo siguiente:

1. `functionN` debe poder tomar como argumento `ALGUN_VALOR`.

2. `function2` debe poder tomar como argumento el resultado de `functionN`.

3. `function1` debe poder tomar como argumento el resultado de `function2`.

Y como invertimos el orden de llamada, entonces `los requerimientos para que el código funcione también cambiaron`. Esto se debe a que `se ha alterado el flujo de datos por el pipeline`.

`Conclusión`: El orden de llamada de las funciones en la composición se fundamental, ya que definirá el `flujo de datos por el pipeline`. Por lo que hay que ser cuidadoso.

#### Ejemplo.

A continuación veremos un ejemplo de como realizar la composición:

```javascript
const numbers = [1, 2, 3, 4];

const getEvenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);

const multiplyByTwo = (numbers) => numbers.map((number) => number * 2);

const composeFunctions = (numbers) => multiplyByTwo(getEvenNumbers(numbers));

console.log(composeFunctions(numbers)); // [4, 8]


/* Ejemplo de que pasa si invertimos las llamadas */

const composeFunctionsInverted = (numbers) => getEvenNumbers(multiplyByTwo(numbers));

console.log(composeFunctionsInverted(numbers)); // [2, 4, 6, 8]
```

### Manera más completa de definir la composición.

Podemos hacer uso de las `high order functions` para poder definir una función que me haga la composición de una cantidad ilimitada de funciones de manera automática, en lugar de tener que hacerlas nosotros manualmente. Dicha función de composición general se define como:

```javascript
const compose = (...functions) => (startValue) => functions.reduce((acc, fn) => fn(acc), startValue);
```

Entonces, si la utilizamos de la siguiente forma general:

```javascript
const composeOfFunctions = compose(function1, function2, functionN);

const resultComposition = compositionOfFunctions(ALGUN_VALOR);
```

Estariamos haciendo exactamente lo que vimos previamente. Es decir que al hacer `const resultComposition = compositionOfFunctions(ALGUN_VALOR);` lo que estamos haciendo visualmente es ejecutar el siguiente `pipeline`:

```
    ALGUN_VALOR                   returnValue1                    returnValue2                       returnValueN
-------------------> function1 ------------------> function2 ----------------------> functionN ------------------------> resultComposition
```

Es decir que lo que hará será:

1. Pasarle `ALGUN_VALOR` como argumento de `function1`.

2. Al resultado obtenido de `function1` se lo pasamos como argumento a `function2`.

3. Al resultado obtenido de `function2` se lo pasamos como argumento a `functionN`.

4. Al resultado obtenido de `functionN` se lo asignamos a la constante `resultComposition`

Y notemos que lo fundamental para que este `pipeline` funcione de manera adecuada es lo siguiente:

1. `function1` debe poder tomar como argumento `ALGUN_VALOR`.

2. `function2` debe poder tomar como argumento el resultado de `function1`.

3. `functionN` debe poder tomar como argumento el resultado de `function2`.

`IMPORTANTE`: Por más que hayamos cambiado la manera de definir la composición, el orden de llamada de las funciones en la composición se fundamental, ya que definirá el `flujo de datos por el pipeline`. Por lo que hay que ser cuidadoso.

#### Ejemplo:

A continuación veremos un ejemplo de como utilizar el `compose`:

```javascript
const numbers = [1, 2, 3, 4];

const compose = (...functions) => (numbers) => functions.reduce((acc, fn) => fn(acc), numbers);

const getEvenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);

const multiplyByTwo = (numbers) => numbers.map((number) => number * 2);

const composeFunctions = compose(getEvenNumbers, multiplyByTwo);

console.log(composeFunctions(numbers)); // [4, 8]


/* Ejemplo de que pasa si invertimos las llamadas */

const composeFunctionsInverted = compose(multiplyByTwo, getEvenNumbers);

console.log(composeFunctionsInverted(numbers)); // [2, 4, 6, 8]
```

Este ejemplo hace exactamente lo mismo que el ejemplo anterior, pero lo hace de una manera más elegante y fácil de leer.

## Memoization.

Si bien este concepto no pertenece exclusivamente a la `programación funcional`, es importante mencionarlo ya que debido a que las `funciones puras` retornan siempre el mismo resultado cuando reciben los mismos argumentos, entonces es posible `memoizar` los valores de retorno de dichas funciones, utilizando una `caché` basada en sus argumentos. Esta técnica nos permitirá `mejorar significativamente la performance` de nuestro código pero con `el costo de consumir más memoria`.

Como la `memoización` es una técnica de programación, existen muchas maneras de implementarla. A continuación explicaré una manera general de implementar la `memoización`:

```javascript
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};
```

A continuación veremos un ejemplo sencillo de como utilizar esta definición de `memoize`:

```javascript
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

const fibonacci = memoize((n) => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(130)); // 1.0663404174917107e+27

console.log(fibonacci(130)); // 1.0663404174917107e+27
```

Notemos que en este ejemplo, la primera vez que se llama a `fibonacci(130)`, la función recursiva se ejecuta, y cada resultado intermedio se almacena en la caché.
La segunda vez que se llama a `fibonacci(130)`, el resultado ya está en la caché, por lo que se devuelve instantáneamente sin necesidad de recalcularlo.

Cabe mencionar que en este ejemplo si no fuera por el `memoize`, entonces no podríamos ejecutar `fibonacci(130)` debido a que se generaría un stack overflow y el tiempo de cómputo sería muy lento.

## Ventajas y desventajas de la programación funcional.

A continuación veremos una lista de ventajas y desventajas de la programación funcionar en `JavaScript`:

### Ventajas.

* Al trabajar con datos inmutables, se evitan errores relacionados con el cambio de estado y las mutaciones inesperadas. Esto hace que el código sea más predecible y fácil de razonar.

* Las funciones puras siempre devuelven el mismo resultado para los mismos argumentos y no tienen efectos secundarios, lo que facilita la creación de tests y el mantenimiento del código.

* La capacidad de combinar funciones pequeñas y específicas para crear funciones más complejas, promueve la reutilización de código y la modularidad.

* Dado que las funciones puras no dependen del estado global, es más fácil ejecutar el código en paralelo sin preocuparse por las condiciones de carrera.

* Las funciones puras y la inmutabilidad facilitan los unit tests y la depuración, ya que no hay efectos secundarios inesperados.

### Desventajas.

* La inmutabilidad y la creación constante de nuevos objetos pueden ser menos eficientes en términos de memoria y rendimiento, especialmente en aplicaciones con grandes volúmenes de datos.

* El código funcional, especialmente cuando se usan técnicas avanzadas, puede ser difícil de leer y mantener para aquellos que no están familiarizados con el paradigma.

* Aunque JavaScript soporta la programación funcional, no está diseñado exclusivamente para ello. Por ende, vamos a depender muchas veces del uso de librerías externas que faciliten algunas características de la programación funcional.

* La mayor parte del ecosistema de JavaScript, incluidos muchos frameworks y bibliotecas, está diseñado con un enfoque más orientado a objetos o imperativo.

* Hay muchas tareas que deben realizarse en JavaScript que si o si requieren generar side effects, como por ejemplo: manipular el DOM. Por lo tanto, no podremos utilizar un enfoque tan purista de la programación funcional si realizamos dichas tareas.

Así que como hemos visto, la programación funcional es una herramienta poderosa, pero hay que ser cautelosos al elegir si es adecuada para el problema que estoy resolviendo o no.