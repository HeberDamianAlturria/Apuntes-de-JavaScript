# Estructuras de datos útiles.

Nosostros ya hemos visto algunas estructuas de datos útiles como los `Arrays`, los `Strings` y los `Objetos`. En esta lección aprenderemos algunas estructuras de datos más avanzadas que podemos usar para algunos casos específicos.

## Sets.

Los `sets` son una colección de elementos `únicos` de `cualquier tipo` y NO necesariamente todos del mismo tipo, cuyo orden es irrelevante. Básicamente los `sets` buscan imitar el comportamiento de los `conjuntos matemáticos`.

Notese que como los elementos en la colección pueden ser de `cualquier tipo`, esto significa que puede almacenar tanto `tipo primitivos` como `referencias a objetos`, aunque personalmente recomendaría almacenar `tipos primitivos` ya que guardar referencias no es demasiado útil.

### Creando sets vacíos.

Podemos crear un `set vacío` de la siguiente forma general:

```javascript
const nombreSet = new Set();
```

### Creando sets con valores iniciales:

Podemos crear un `set con valores iniciales` de la siguiente forma general:

```javascript
const nombreSet = new Set([valor1, valor2, /*...*/, valorN]);
```

Donde notemos que NO todos los valores del `arreglo` deben ser del mismo tipo.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear un `set con valores iniciales`:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

console.log(setOfNumbers); // Imprime: Set(4) { 1, 2, 3, 4 }
```

### Agregando elementos al set.

Podemos utilizar el método `add()` para agregar elementos a un `set` de la siguiente forma general:

```javascript
nombreSet.add(valorAgregar);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear un `set con valores iniciales`:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

setOfNumbers.add(1000);

console.log(setOfNumbers); // Imprime: Set(5) { 1, 2, 3, 4, 1000 }
```

### Obteniendo la longitud del set.

Podemos ver la longitud de un `set` mediante el atribuo `size` de la siguiente forma general:

```javascript
nombreSet.size;
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de esto:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

console.log(setOfNumbers.size); // Imprime: 4
```

### Verificando si un valor está en el set.

Podemos verificar si un valor está en un `set` mediante el método `has()`, el cuál retornará `true` si el valor pasado como argumento se encuentra en el `set` o `false` en caso contrario. Esto podemos hacerlo de la siguiente forma general:

```javascript
const booleanoRetorando = nombreSet.has(valor);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de esto:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

console.log(setOfNumbers.has(1)); // Imprime: true

console.log(setOfNumbers.has(2000)); // Imprime: false
```

### Eliminar un valor del set.

Podemos eliminar un valor del `set` mediante el método `delete()`, el cuál tomará como argumento el valor a borrar y lo quitará en caso de que esté en el `set`, pero no hará nada si el valor no está en el `set`. Se utiliza de la siguiente forma general:

```javascript
nombreSet.delete(valorEliminar);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de esto:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

console.log(setOfNumbers); // Imprime: Set(4) { 1, 2, 3, 4 }

setOfNumbers.delete(1);

console.log(setOfNumbers); // Imprime: Set(3) { 2, 3, 4 }
```

### Iterar los sets.

Podemos iterar los `sets` mediante el uso del `for...of` de la siguiente forma general:

```javascript
for (const item of nombreSet) {

  /* Cuerpo del for */

}
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo:

```javascript
const setOfNumbers = new Set([1, 1, 1, 2, 2, 3, 4]);

for (const item of setOfNumbers) {
  console.log(item);
}
/*
  Imprime:
  1
  2
  3
  4
*/
```

### El spread operator.

Al igual que con los `arrays`, podemos utilizar el `spread operator` para expandir los elementos de un `set`. Esto quiere decir que si tengo el set llamado `SET` definido como `Set([valor1, valor2, ..., valorN])` entonces el `operador spread` para sets se escribe como `...SET` y da como resultado `valor1, valor2, ..., valorN`.

### Convertir un set en un array.

Utilizando el operador `spread` podemos convertir un `set` en un `array` de la siguiente forma general:

```javascript
const nuevoArray = [...nombreSet];
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar esto para eliminar los elementos repetidos de un array:

```javascript
const arrayConRepeticion = [1, 1, 2, 3, 1, 3, 2, 4];

const arraySinRepeticion = [...new Set(arrayConRepeticion)];

console.log(arrayConRepeticion); // Imprime: [1, 1, 2, 3, 1, 3, 2, 4]

console.log(arraySinRepeticion); // Imprime: [1, 2, 3, 4]
```

### Método unión.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `union()` permite unir `dos conjuntos` al igual que se hace en matemática. Sean A y B dos conjuntos, la definición a nivel matemático de la `unión` es `A ∪ B = { x ∣ x ∊ A V x ∊ B}`. De forma general, en el código, el método `union()` se utiliza de la siguiente manera:

```javascript
const resultadoDeLaUnion = nombreSet1.union(nombreSet2);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo:

```javascript
const setOfNumbers1 = new Set([1, 2, 3, 4]);

const setOfNumbers2 = new Set([1, 2, 3, 4, 5, 6, 7]);

const unionOfSets = setOfNumbers1.union(setOfNumbers2);

console.log(unionOfSets); // Imprime: Set(7) {1, 2, 3, 4, 5, 6, 7}
```

### Método intersection.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `intersection()` permite quedarnos con los elementos que tienen en común `dos conjuntos` al igual que se hace en matemática. Sean A y B dos conjuntos, la definición a nivel matemático de la `intersección` es `A ∩ B = { x ∊ A ∣ x ∊ B}`. De forma general, en el código, el método `intersection()` se utiliza de la siguiente manera:

```javascript
const resultadoDeLaInterseccion = nombreSet1.intersection(nombreSet2);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo:

```javascript
const setOfNumbers1 = new Set([1, 2, 3, 4]);

const setOfNumbers2 = new Set([1, 2, 3, 4, 5, 6, 7]);

const intersectionOfSets = setOfNumbers1.intersection(setOfNumbers2);

console.log(intersectionOfSets); // Imprime: Set(4) {1, 2, 3, 4}
```

### Método difference.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

Sean A y B dos conjuntos, la definición a nivel matemático de la `diferencia entre A y B` es `A \ B = { x ∊ A ∣ x ∉ B}`. De forma general, en el código, el método `difference()` se utiliza de la siguiente manera:

```javascript
const resultadoDeLaDiferencia = nombreSet1.difference(nombreSet2);
```

Notese que en este caso el orden es importante, ya que en la forma general estamos haciendo `nombreSet1 \ nombreSet2`, pero si cambiamos el orden, el resultado será distinto.

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo:

```javascript
const setOfNumbers1 = new Set([1, 2, 3, 4]);

const setOfNumbers2 = new Set([1, 3, 5, 10]);

const differenceOfSets = setOfNumbers1.difference(setOfNumbers2);

console.log(differenceOfSets); // Imprime: Set(2) {2, 4}
```

### Método symmetricDifference.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `symmetricDifference()` se utiliza para obtener un nuevo conjunto compuesto por los elementos que NO pertenecen a la intersección de dos conjuntos. Sean A y B dos conjuntos, la definición a nivel matemático de que `A simetricamente diferente de B` es `A ⊖ B = (A \ B) U (B \ A)`. A nivel de código se hace de la siguiente forma general:

```javascript
const resultadoDeLaDiferenciaSimetrica = nombreSet1.symmetricDifference(nombreSet2);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo:

```javascript
const setOfNumbers1 = new Set([1, 2, 3, 4]);

const setOfNumbers2 = new Set([1, 3, 5, 10]);

const symmetricDifferenceOfSets = setOfNumbers1.symmetricDifference(setOfNumbers2);

console.log(symmetricDifferenceOfSets); // Imprime: Set(4) {2, 4, 5, 10}
```

### Método isDisjointFrom.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `isDisjointFrom()` se utiliza para ver si `dos conjuntos` son disjuntos. Sean A y B dos conjuntos, la definición a nivel matemático de que `A y B sean disjuntos` es `A y B son disjuntos ⇔ A ∩ B = ∅`. De forma general, en el código, el método `isDisjointFrom()` devolverá `true` si los dos conjuntos son disjuntos, o `false` en caso contrario. Se utiliza de la siguiente forma general:

```javascript
const valorBooleano = nombreSet1.isDisjointFrom(nombreSet2);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de su uso:

```javascript
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

const squares = new Set([1, 4, 9, 16]);

console.log(primes.isDisjointFrom(squares)); // Imprime: true

const powerOfTwo = new Set([2, 4, 6, 8]);

console.log(squares.isDisjointFrom(powerOfTwo)); // Inprime: false
```

### Método isSupersetOf.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `isSupersetOf()` indica si un conjunto contiene todos los elemento de otro conjunto. Sean A y B dos conjuntos, la definición a nivel matemático de que `A sea un super conjunto de B` es `A ⊇ B ⇔ ∀x ∊ B, x ∊ A`. De forma general, en el código, el método `isSupersetOf()` se usa de la siguiente manera:

```javascript
const valorBooleano = nombreSet1.isSupersetOf(nombreSet2);
```

Y este método devolverá `true` si se cumple que `nombreSet1 ⊇ nombreSet2`, o `false` en caso contrario. Notese que el orden en este caso es de importancia.

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de su uso:

```javascript
const counts = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

const primes = new Set([2, 3, 5, 7]);

console.log(counts.isSupersetOf(primes)); // Imprime: true

const powerOfTwo = new Set([2, 4, 6, 8]);

console.log(primes.isSupersetOf(powerOfTwo)); // Inprime: false
```

### Método isSubsetOf.

Al momento de escribir este apunte, este método es aún muy moderno, por lo que puede que no funcione en todos los navegadores.

El método `isSubsetOf()` indica es un subconjunto de otro conjunto. Sean A y B dos conjuntos, la definición a nivel matemático de que `A sea un subconjunto de B` es `A ⊆ B ⇔ ∀x ∊ A, x ∊ B`. De forma general, en el código, el método `isSubsetOf()` se usa de la siguiente manera:

```javascript
const valorBooleano = nombreSet1.isSubsetOf(nombreSet2);
```

Y este método devolverá `true` si se cumple que `nombreSet1 ⊆ nombreSet2`, o `false` en caso contrario. Notese que el orden en este caso es de importancia.

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de su uso:

```javascript
const coolNames = new Set(["Heber", "Naty", "Makoto", "Gokú", "Naruto"]);

const names = new Set(["Naty", "Heber", "Makoto"]);

console.log(names.isSubsetOf(coolNames)); // Imprime: true

const anotherNames = new Set(["Shrek", "Gokú", "Naruto"]);

console.log(anotherNames.isSubsetOf(coolNames)); // Imprime: false
```

## Maps.

La estructura de datos `Map` es una colección de pares `clave-valor`, es decir que contiene `claves` y a cada clave se le asocia `un valor`, y tanto las `claves` como los `valores` pueden ser de `cualquier tipo`. Cabe mencionar que las `claves` deben ser `únicas`.

### Diferencias entre Maps y los objetos.

Por la definición dada previamente sobre los `Maps` se parece mucho a la definición de los `Objetos`, sin embargo a nivel práctico son muy diferentes. A continuación daré las principales diferencias

1. Las `claves` de los `Maps` pueden ser de `cualquier tipo`, a diferencia de lo que sucede con los `Objetos` cuyas claves deben ser `strings`.

2. Los `Objetos` no garantizan un orden específico para las `claves`, mientras que los `Map` mantienen el orden de inserción de los elementos.

3. A diferencia de los `Objetos`, el `Map` contiene varios métodos para simplificar la iteración.

4. A diferencia de los `Objetos`, el `Map` contiene un método para simplificar la `eliminación` de pares `clave-valor`.

### Creando una instancia de Map vacía.

Podemos crear una instancia de `Map` de la siguiente forma general:

```javascript
const nombreMap = new Map();
```

### Creando una instancia de Map con pares clave-valor.

También podemos crear un `Map` que ya contenga pares `clave-valor` de la siguiente forma general:

```javascript
const nombreMap = new Map([
  [clave1, valor1],
  [clave2, valor2],
  /*...*/
  [claveN, valorN]
]);
```

Es decir que debemos pasarle como argumentos un arreglo de `arreglos de dos elementos` los cuales representan la `clave` y su `valor` asociado

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de como esto se hace:

```javascript
const map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log(map); // Imprime: Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
```

### El método set.

El método `set()` toma como argumento `una clave y un valor` y los agregará a la instancia del `Map`. Esto se hace de la siguiente forma general:

```javascript
nombreMap.set(clave, valor);
```

De esa manera, guardamos la `clave` y su `valor` asociado.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como funciona:

```javascript
const map = new Map();

map.set("Hola", 1);

map.set("Mundo", 2);

console.log(map); // Imprime: Map(2) { 'Hola' => 1, 'Mundo' => 2 }
```

<b>Como cambiar el valor asociado a una clave:</b>

También podemos utilizar el método `set()` para cambiar el `valor` asociado a una `clave`. Para lograrlo, debemos saber que la `clave` ya está en el `Map` y luego podemos hacer lo siguiente:

```javascript
nombreMap.set(claveQueYaEsta, nuevoValor);
```

A continuación veremos un ejemplo sencillo:

```javascript
const map = new Map();

map.set("Hola", 1);

map.set("Mundo", 2);

console.log(map); // Imprime: Map(2) { 'Hola' => 1, 'Mundo' => 2 }

map.set("Hola", "Soy un string"); // Cambio el valor de la clave "Hola".

console.log(map); // Imprime: Map(2) { 'Hola' => 'Soy un string', 'Mundo' => 2 }
```

### El atributo size.

El `atributo size` nos indica el tamaño que tiene el `Map`. Dicho tamaño es la cantidad de pares `clave-valor` que hay en el `Map`. Se usa de la siguiente forma general:

```javascript
const sizeDelMap = nombreMap.size;
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de como se utiliza:

```javascript
const map = new Map();

map.set("Hola", 1);

map.set("Mundo", 10);

console.log(map.size); // Imprime: 2
```

### El método get.

El método `get()` toma como argumento una `clave` y devuelve el `valor` asociado en caso de que la `clave` SI esté en el `Map` o devuelve `undefined` si la `clave` NO está en el `Map`. A continuación veremos la forma general de como usarlo:

```javascript
const valorAsociado = nombreMap.get(clave);
```

Y como ya hemos dicho, `valorAsociado` será el valor asociado de la `clave` en caso de que dicha clave esté en el `nombreMap`, o `valorAsociado` será `undefined` en caso de que la `clave` NO esté en `nombreMap`.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como usarlo:

```javascript
const map = new Map([
  ["Hola", 1],
  ["Mundo", 2]
]);

console.log(map); // Imprime: Map(2) { 'Hola' => 1, 'Mundo' => 2 }

// Acceder a los valores del map.
console.log(map.get("Hola")); // Imprime: 1
console.log(map.get("Mundo")); // Imprime: 2

// Intentamos acceder a un valor que no está en map.
console.log(map.get("Adiós")); // Imprime: undefined
```

### El método has.

El método `has()` toma como argumento una `clave` y devuelve `true` si dicha clave está en el `Map` o `false` en caso contrario. A continuación veremos como se utiliza:

```javascript
const existeClaveEnMap = nombreMap.has(clave);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como se utiliza:

```javascript
const map = new Map([
  ["Hola", 1],
  ["Mundo", 2]
]);

console.log(map); // Imprime: Map(2) { 'Hola' => 1, 'Mundo' => 2 }

// Estas claves sabemos que están en el map.
console.log(map.has("Hola")); // Imprime: true
console.log(map.has("Mundo")); // Imprime: true

// Esta clave sabemos que NO están en el map.
console.log(map.has("Adiós")); // Imprime: false
```

### El método delete.

El método `delete()` toma como argumento una `clave` y lo que hará será borrar el par `clave-valor` del `Map`. Se utiliza de la siguiente forma general:

```javascript
nombreMap.delete(clave);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizarlo:

```javascript
const map = new Map([
  ["Hola", 1],
  ["Mundo", 2]
]);

console.log(map); // Imprime: Map(2) { 'Hola' => 1, 'Mundo' => 2 }

map.delete("Hola"); // Elimo la clave "Hola" y su valor asociado.

console.log(map); // Imprime: Map(1) { 'Mundo' => 2 }
```

### Iterar un Map.

Hay distintas maneras de iterar un `Map`, pero personalmente la mejor es utilizar el `for...of` de la siguiente forma general:

```javascript
for (const [clave, valor] of nombreMap) {
  
  /* Cuerpo del for. */

}
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como iterar un `Map`:

```javascript
const map = new Map([
  ["Hola", 1],
  ["Mundo", 2],
  ["Adios", 3],
  [90, 4],
]);

for (const [key, value] of map) {
  console.log(`La clave es ${key} y el valor es ${value}`);
}
/*
  Esto imprimirá:

  La clave es Hola y el valor es 1
  La clave es Mundo y el valor es 2
  La clave es Adios y el valor es 3
  La clave es 90 y el valor es 4
*/
```