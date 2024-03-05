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