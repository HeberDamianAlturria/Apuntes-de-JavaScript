# Tipo de datos en JavaScript.

A pesar de que JavaScript es débilmente tipado, todos los valores en JavaScript pertenecen a cierto tipo. En esta lección explicaré cuales son los tipos de datos más comunes, y en la siguiente lección aprenderemos los operadores que podemos utilizar para trabajar con cada tipo de dato.

Para clasificar a los tipos de datos, se los diferencia entre `tipos de datos primitivos` y `tipos de datos no primitivos`.

## Tipos de datos primitivos.

En esta categoría existen tipos como los `Numbers`, `Strings`, `Null`, `Boolean`, `Undefined` y los `Symbol`. La particularidad de los tipos de datos primitivos es que `las variables y constantes tienen asignadas directamente el valor del tipo primitivo correspondiente` (más adelante profundizaré en este concepto).

### Number.

El tipo `Number` representa tanto números enteros como de punto flotante. Por ejemplo:

```javascript
const entero = 123;
const flotante = 123.45;
```

Como se puede observar, `para representar a un número entero debemos escribir simplemente el número`, pero `para representar a un flotante debemos agregarle el punto que diference la parte entera de la decimal`.

También, para representar a números negativos, tenemos que poner el símbolo `-` antes del número. Por ejemplo:

```javascript
const enteroNegativo = -123;
const flotanteNegativo = -123.45;
```

También el tipo `Number` tiene valores especiales como los siguientes:

1. `Infinity`: este valor representa al infinito, por consiguiente no hay valor más grande que éste. A continuación, veremos un ejemplo de como utilizarlo:

   ```javascript
   console.log(Infinity + 1000); // imprime Infinity.
   ```

2. `-Infinity`: este valor representa al infinito negativo, por consiguiente no hay valor menor que éste. A continuación, veremos un ejemplo de como utilizarlo:

   ```javascript
   console.log(-Infinity + 1000); // imprime -Infinity.
   ```

3. `NaN`: este valor literalmente significa `Not a Number`, lo que quiere decir que la operación realizada no puede ser representada como un número. Por ejemplo:
   ```javascript
   console.log(-Infinity + Infinity); // imprime NaN.
   ```
   Es importante mencionar que el valor `NaN` es absorvente, por lo que cualquier operación con un `NaN` va a devolver `NaN`.

### BigInt.

En JavaScript, el tipo `Number` no puede representar de forma segura valores enteros mayores que (2^53 - 1) (eso es 9007199254740991), o menor que -(2^53 - 1) para negativos.

Para ser realmente precisos, el tipo de dato `Number` puede almacenar enteros muy grandes (hasta 1.7976931348623157 * 10^308), pero fuera del rango de enteros seguros ±(2^53 - 1) habrá un error de precisión, porque no todos los dígitos caben en el almacén fijo de 64-bit. Así que es posible que se almacene un valor aproximado. Por ejemplo:

```javascript
/* Error de precisión */
console.log(9007199254740991 + 1); // Imprime 9007199254740992
console.log(9007199254740991 + 2); // Imprime 9007199254740992
```
Es decir que estos dos valores están siendo aproximados.

Es para estas circunstancias que existe el tipo `BigInt`, el cuál puede representar enteros de longitud arbitraria.

Un valor `BigInt` se crea agregando `n` al final de un entero. Por ejemplo:

```javascript
// la "n" al final significa que es un BigInt
const valorBigInt = 1234567890123456789012345678901234567890n;
```

Este tipo de datos nos permite resolver el problema que teníamos antes, de la siguiente manera:

```javascript
/* Error de precisión */
console.log(9007199254740991n + 1n); // Imprime 9007199254740992
console.log(9007199254740991n + 2n); // Imprime 9007199254740993
```

Lo cierto es que el tipo `BigInt` es utilizado en muy raras ocasiones, pero vale la pena mencionarlo.

### String.

Un `String` en JavaScript es una cadena de caracteres y debe colocarse entre comillas. Esto significa que los strings son utilizado para representar palabras y frases. A continuación veremos un ejemplo:

```javascript
const str = "Hola";
const str2 = 'Las comillas simples también están bien';
```

Como podemos observar, todo lo que pongamos entre comilla (ya sean `comillas dobles` o `comillas simples`) será interpretado como un `String` en JavaScript.

### Boolean.

El tipo `Boolean` tiene sólo dos valores posibles: `true` y `false`. Es generalmente utilizado para crear sentencias lógicas. A continuación veremos como usarlo:

```javascript
let nameFieldChecked = true;
let ageFieldChecked = false;
```

Como he dicho previamente, son utilizado para crear sentencias lógicas, por lo que están dados por el resultado de comparaciones. Por ejemplo:

```javascript
let isGreater = 4 > 1;

console.log(isGreater); // imprime true.
```

### Null.

El valor especial `null` no pertenece a ninguno de los tipos descritos anteriormente.

Forma un tipo propio separado que contiene sólo el valor `null`. El valor `null` se utiliza principalmente para indicar que una `variable tiene valor vacío`. Por ejemplo:

```javascript
let age = 10;

/* ... */

age = null; // Ahora hago que age sea un valor vació.
```

En JavaScript, null `no` es una "referencia a un objeto inexistente" o un "puntero nulo" como en otros lenguajes. En JavaScript el valor `null` es sólo un valor especial que representa "nada" o "vacío".

### Undefined.

El significado de `undefined` es "valor no asignado". 

Si una variable es declarada, pero no asignada, entonces su valor es `undefined`:

```javascript
let age;

console.log(age); // Imprime Undefined.
```

Es decir, `undefined` es un valor inicial reservado para cosas que no han sido asignadas.

## Tipos de datos no primitivos.

Los tipos de datos complejos o no primitivos son `Objectos`, `Arreglos` y `Funciones`. La particularidad de los tipos de datos no primitivos es que `las variables y constantes tienen asignadas una posición de la memoria que apunta al valor`. Es decir, se comportan esta variables como si fuesen punteros.

### Function.

El tipo `Function` es el tipo que tienen las funciones en JavaScript. No voy a profundizar sobre como crear funciones debido a que eso amerita una lección especial, pero si voy a mostrar un ejemplo:

```javascript
// Usando arrow functions.
const sumarArrow = (a, b) => a + b;

// Usando la palabra especial functions.
function sumarNormal(a, b) {
  return a + b;
}
```

Ambas funciones serán del tipo `Functions`.

### Object.

El tipo `Object` es muy amplio y necesitaría una lección particular. A continuación voy a mostrar como definir un objeto sencillo: 

```javascript
const informacionPersonal = {
  nombre: "Heber",
  apellido: "Alturria",
  DNI: 43690658,
};

// Y accedo a sus campos de la siguiente manera:
console.log(informacionPersonal.nombre); // Imprime "Heber".
console.log(informacionPersonal.apellido); // Imprime "Alturria".
console.log(informacionPersonal.DNI); // Imprime 43690658.
```

Es importante notar que los `Array` son del tipo `Object` en JavaScript. Es más, podemos definir arreglos de las siguientes dos maneras:

```javascript
const animes = ["Death Note", "Another", "Monster"];

const animes2 = new Array("Death Note", "Another", "Monster");
```

Ambos generan un arreglo con los mismos valores, por lo que podemos usar cualquiera de las dos formas a la hora de crear un arreglo. Aunque recomiendo la primera manera, ya que es la más típica.

## Valor vs Referencia.

### Por valor:

Que un tipo de dato es asignado por valor significa que `el valor se va a guardar directamente en la posición de la memoria de la variable o constante a la que se le es asignada`. Entonces, siempre que trabajemos con dicha variable o constante, será exactamente lo mismo que trabajar con el valor puro. Es por eso que podemos hacer lo siguiente:

```javascript
let a = "hola";
let b = a; // asignamos valor de `a` a `b`.

a += "!"; // cambiamos valor de `a` añadiendo ! al final.

console.log(a); // Imprime hola!
console.log(b); // Imprime hola
```

Es decir, notemos que al hacer `let b = a;`, lo que se hizo fue tomar el valor de `a` y asignarselo a `b`. Por consiguiente, las modificaciones que le haga a la variable `a` no le afectarán a `b`.

### Por referencia:

En cambio, que un tipo de dato sea asignado por referencia significa que `el valor se va a guardar en una posición de la memoria distinta a la posición de la variable o constante, y lo que se le asigna a dicha variable o constante es la posición de la memoria con el que puedo referencia al valor`. Entonces, cada vez que trabajemos con dicha variable o constante, tendremos que tener en cuenta que en realidad tiene asignado una posición de la memoria que hace referencia al valor y no el valor en sí mismo (como pasaba en el caso anterior). Esto se asemeja a cuando trabajamos con punteros en lenguajes de programación como C o C++.

Es por eso que si no tenemos cuidado, pueden darse circunstancias como la siguiente:

```javascript
let a = [1, 2, 3]; // Los arreglo se asignan por referencia.
let b = a; // Aquí se le asigna a `b` las posición de memoria a la que apunta `a`.

a.push(4); // Agrego el valor 4 al final del arreglo.

console.log(a); // Imprime [1,2,3,4].
console.log(b); // Imprime [1,2,3,4].
```

Esto se debe a que en el paso `let b = a;`, le estamos asignando a `b` la posición de la memoria a la que apunta `a`, por lo que hacemos un `Aliasing` de las memoria (es decir, que ahora tanto `a` como `b` apuntan a la misma dirección de memoria que representa al arreglo).

Para solucionar el problema del `aliasing` al trabajar con tipos de datos no primitivos, debemos siempre asignar copias en nueva memoria de dichos datos.

#### <i>Otro error muy común:</i>

Otro error muy común al trabajar con valores por referencia se da al intentar compararlos, ya que mucha gente intenta hacerlo de la siguiente manera:

```javascript
let a = [1, 2, 3]; // Los arreglo se asignan por referencia.
let b = [1, 2, 3]; // Los arreglo se asignan por referencia.

console.log(a === b); // Imprime false.
```

El error aquí es que al hacer `a === b` en realidad se está comparando si la posición de la memoria a la que apunta `a` es exactamente igual a la que apunta `b`, lo cuál es falso ya que apuntas a valores distintos.
