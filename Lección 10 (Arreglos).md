# Los arreglos.

Los `arreglos` o `array` son un `objeto iterable` en JavaScript. Permite coleccionar distintos elementos de manera `ordenada` cuyos tipos no necesariamente son iguales. Se utiliza principalmente para agrupar valores en una misma variable.

## Como definir un array.

Un `array` es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición o `índice`. Los elementos que conforman a un `array` no necesariamente tienen que ser del mismo tipo.

Hay dos maneras de definir un `array`:

1. `Usando el objeto Array`:

   Podemos crear un `array` usando el objeto `Array` de la siguiente forma general:

   ```javascript
   const arreglo = new Array(VALOR_1, VALOR_2, ... , VALOR_N);
   ```

   Donde notemos que `VALOR_1`, `VALOR_2`, ..., `VALOR_N`, no necesariamente deben ser del mismo tipo. También puede ser que el arreglo no tenga valores, en cuyo caso no debemos poner nada adentro.

   A continuación veremos un ejemplo de esto:

   ```javascript
   const arreglo = new Array(1, "Hola", 3.4, true);

   console.log(arreglo); // Imprime: [ 1, 'Hola', 3.4, true ]
   ```

2. `Usando el operador []` (Mejor opción):

   Podemos crear un `array` usando el `operador []` de la siguiente forma general:

   ```javascript
   const arreglo = [VALOR_1, VALOR_2, ... , VALOR_N];
   ```

   Donde notemos que `VALOR_1`, `VALOR_2`, ..., `VALOR_N`, no necesariamente deben ser del mismo tipo. También puede ser que el arreglo no tenga valores, en cuyo caso no debemos poner nada adentro.

   A continuación veremos un ejemplo de esto:

   ```javascript
   const arreglo = [1, "Hola", 3.4, true];

   console.log(arreglo); // Imprime: [ 1, 'Hola', 3.4, true ]
   ```

## Los array son una referencia.

Los `array` son un tipo de dato no primitivo, por ende los `array` se asignan por `referencia`. Esto quiere decir que `el array se va a guardar en una posición de la memoria distinta a la posición en memoria de la variable o constante que definamos, y lo que se le asigna a dicha variable o constante es la posición de la memoria con el que puedo referenciar al array`. Esto significa que las constantes o variables que tengan asignadas un `array` en realidad `trabajan como si fuesen punteros` a la posición en memoria donde realmente se encuentra almacenado dicho array.

Recomiendo definir el valor de un `array` siempre como una `constante`, ya que de esa manera nunca vamos a perder la `referencia` a dicho array (por ende, el código es más seguro). Es decir, de forma general:

```javascript
/* Manera recomendada */
const arreglo = [VALOR_1, VALOR_2, ... , VALOR_N];

arreglo = ALGUN_VALOR; // ERROR, ya que es una constante.

/* MANERA NO RECOMENDADA */
let arreglo = [VALOR_1, VALOR_2, ... , VALOR_N];

arreglo = ALGUN_VALOR; // Pierdo la referencia al arreglo.
```

## Atributo length.

Podemos utilizar el atributo `.length` para saber la longitud de un `array` (es decir, la cantidad de elementos que posee). Esto se usa de la siguiente forma general:

```javascript
const longitud = ARRAY.length;
```

Siendo `ARRAY` un valor definido como un `array`.

A continuación veremos un ejemplo de como utilizarlo:

```javascript
const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo.length); // Imprime 5.
```

## Acceso a elementos del array.

Hay dos maneras de acceder al elemento de un array. Todas las maneras de hacerlo requieren de utilizar un número que represente el índice o posición del elemento en el array. La manera de contar los índices se hace de la siguiente forma general:

```javascript
[a    b    ...    y    z]
 ↑    ↑    ...    ↑    ↑
 0    1    ...   n-2  n-1
```

Siendo `n` la longitud del `array`.

Esto significa que sea `arr` un `array`, los índices se cuentan desde el `0` y terminan en el `arr.length - 1`. Y notemos que en el índice `0` se encuentra el `primer elemento` del array y en el índice `arr.length - 1` se encuentra el `último elemento`.

1. Utilizando el operador `[]`:
   Podemos acceder a un elemento de un `array` en una determinada posición de la siguiente forma general:

   ```javascript
   const valorEspecifico = ARRAY[NUMERO_INDICE];
   ```

   Donde notemos que `NUMERO_INDICE` puede ser un valor entre `0` y `ARRAY.length - 1`. En caso de que el valor del `NUMERO_INDICE` esté fuera de ese rango, entonces va a devolver `undefined`.

   A continuación veremos un ejemplo de como es que esto funciona:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   console.log(arreglo[1]); // Imprime 2.
   console.log(arreglo[10]); // Imprime undefined.
   ```

2. Utilizando el método `at()`:

   Este método se parece al anterior, pero funciona de una manera diferente. Para entenderlo, debemos primero comprender que este método cuenta los `indices positivos` de la misma manera que hemos explicado previamente, pero también trabaja con `indices negativos` que se cuentan de la siguiente forma general:

   ```javascript
   [a    b    ...    y    z]
    ↑    ↑    ...    ↑    ↑
   -n  -n-1   ...   -2   -1
   ```

   Siendo `n` la longitud del `array`.

   Esto significa que sea `arr` un `array`, los `índices negativos` se cuentan desde el `-1` haste el en el `-arr.length`. Y notemos que en el índice `-1` se encuentra el `último elemento` del array y en el índice `-arr.length` se encuentra el `primer elemento`.

   Como ya hemos dicho, los `índices positivos` se cuentan de la manera que expliqué al inicio de esta sección.

   A continuación veremos la forma general en la que se utiliza el `método at()`:

   ```javascript
   const valorEspecifico = ARRAY.at(NUMERO_INDICE);
   ```

   Y notemos que `NUMERO_INDICE` puede ser un valor entre `0` y `ARRAY.length - 1` o también puede ser un valor entre `-1` y `-ARRAY.length`. Si el valor del `NUMERO_INDICE` está fuera de alguno de estos rangos, entonces devolverá `undefined`.

   A continuación veremos un par de ejemplos:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   console.log(arreglo.at(1)); // Imprime 2.
   console.log(arreglo.at(10)); // Imprime undefined.
   console.log(arreglo.at(-1)); // Imprime 5.
   console.log(arreglo.at(-3)); // Imprime 3.
   ```

## Modificar elementos de un array.

Para modificar el valor de un elemento en un `array`, asignamos un nuevo valor utilizando su `índice positivo`. Esto se hace de la siguiente forma general:

```javascript
ARRAY[NUMERO_INDICE] = NUEVO_VALOR;
```

Y notemos que `NUMERO_INDICE` debe ser un valor entre `0` y `ARRAY.length - 1` para modificar elementos que estén en el `ARRAY`.

A continuación veremos un ejemplo:

```javascript
const arreglo = [1, 2, 3, 4, 5];

arreglo[1] = "Hola";

console.log(arreglo); // Imprime [1, "Hola", 3, 4, 5]
```

## Agregar elementos a un array.

Hay muchas maneras de agregar elementos a un array:

1. `Utilizando el método push() para agreagar un elemento al final del array`:
   El método `push()` nos permite agregar elementos al `final` de un array. Este método `modifica al array` en el que es usado. Se utiliza de la siguiente forma general:

   ```javascript
   ARRAY.push(VALOR_A_AGREGAR);
   ```

   Esto lo que hará será modificar el `ARRAY` para agregar al `final` el `VALOR_A_AGREGAR`.

   A continuación veremos un ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.push("Hola");
   console.log(arreglo); // Imprime [1, 2, 3, 4, 5, "Hola"].
   ```

   También podemos agregar más de un elemento a la vez al `final` del array de la siguiente forma general:

   ```javascript
   ARRAY.push(VALOR_A_AGREGAR_1, VALOR_A_AGREGAR_2, ... , VALOR_A_AGREGAR_N);
   ```

   Esto lo que hará será modificar el `ARRAY` para agregar al `final` todos los valores en el orden dado. Por ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.push("Hola", "Chau", 200);
   console.log(arreglo); // Imprime [1, 2, 3, 4, 5, "Hola", "Chau", 200].
   ```

2. `Utilizando un índice cualquiera` (No recomendado).

   Podemos asignarle un valor a cualquier posición de un array de la siguiente forma general:

   ```javascript
   ARRAY[NUMERO_INDICE] = VALOR_A_AGREGAR;
   ```

   Donde notemos que debe cumplirse que `NUMERO_INDICE >= ARRAY.length`, de esa manera asignamos el `VALOR_A_AGREGAR` en un índice que aún no había sido utilizado en el `ARRAY`.

   A continuación veremos un ejemplo de por qué no es bueno utilizar esta manera de hacerlo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo[100] = "Hola";
   console.log(arreglo); // Imprime [1, 2, 3, 4, 5, <95 empty items>, 'Hola']
   ```

   Eso significa que puedo asignarle valores a un `array` en cualquier posición deseada. `Debemos tener presente este comportamiento para evitar agregar elementos a un array por error cuando en realidad queremos modificar un valor existente`.

3. `Utilizando el método unshift() para agreagar un elemento al inicio del array`:

   El método `unshift()` nos permite agregar elementos al `inicio` de un array. Este método `modifica al array` en el que es usado. Se utiliza de la siguiente forma general:

   ```javascript
   ARRAY.unshift(VALOR_A_AGREGAR);
   ```

   Esto lo que hará será modificar el `ARRAY` para agregar al `inicio` el `VALOR_A_AGREGAR`.

   A continuación veremos un ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.unshift("Hola");
   console.log(arreglo); // Imprime ["Hola", 1, 2, 3, 4, 5].
   ```

   También podemos agregar más de un elemento a la vez al `inicio` del array de la siguiente forma general:

   ```javascript
   ARRAY.unshift(VALOR_A_AGREGAR_1, VALOR_A_AGREGAR_2, ... , VALOR_A_AGREGAR_N);
   ```

   Esto lo que hará será modificar el `ARRAY` para agregar al `inicio` todos los valores en el orden dado. Por ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.unshift("Hola", "Chau", 200);
   console.log(arreglo); // Imprime ["Hola", "Chau", 200, 1, 2, 3, 4, 5].
   ```

4. `Utilizando el método splice() para agreagar un elemento en cualquier posición del array`:

   El método `splice()` es una verdadera navaja suiza, ya que nos permita agregar elementos en cualquier posición y eliminar elementos en cualquier posición. En este caso `nos enfocaremos en como agregar elementos en cualquier posición`. Eso se hace de la siguiente forma general:

   ```javascript
   ARRAY.splice(NUMERO_INDICE, 0, VALOR_A_AGREGAR);
   ```

   Esto lo que hará será `modificar el ARRAY` para agregar el `VALOR_A_AGREGAR` en el índice `NUMERO_INDICE`.

   A continuación veremos un ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.splice(1, 0, "Hola");
   console.log(arreglo); // Imprime [1, "Hola", 2, 3, 4, 5].
   ```

   También podemos agregar más de un elemento a la vez al en cualquier posición del array de la siguiente forma general:

   ```javascript
   ARRAY.splice(NUMERO_INDICE, 0, VALOR_A_AGREGAR_1, VALOR_A_AGREGAR_2, ... , VALOR_A_AGREGAR_N);
   ```

   Esto lo que hará será modificar el `ARRAY` para agregar en el índice `NUMERO_INDICE` todos los valores en el orden dado. Por ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.splice(1, 0, "Hola", "Chau", 200);
   console.log(arreglo); // Imprime [1, "Hola", "Chau", 200, 2, 3, 4, 5].
   ```

## Eliminar elementos de un array.

Hay varias maneras de eliminar elementos de un `array`:

1. `Eliminando el último elemento usando el método pop()`:

   Podemos utilizar el método `pop()` para eliminar el `último` elemento de un `array`. Este método me modifica el `array`. Se utiliza de la siguiente forma general:

   ```javascript
   ARRAY.pop();
   ```

   A continuación veremos un ejemplo de este método:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.pop();
   console.log(arreglo); // Imprime [1,2,3,4]
   ```

2. `Eliminando el primer elemento usando el método shift()`:

   Podemos utilizar el método `shift()` para eliminar el `primer` elemento de un `array`. Este método me modifica el `array`. Se utiliza de la siguiente forma general:

   ```javascript
   ARRAY.shift();
   ```

   A continuación veremos un ejemplo de este método:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.shift();
   console.log(arreglo); // Imprime [2,3,4,5]
   ```

3. `Eliminar múltiples elementos en cualquiero posición usando el método splice()`:

   También podemos utilizar el método `splice()` para eliminar `múltiples elementos` en `cualquier posición` del `array`. Este método modifica el `array`. Se utiliza de la siguiente forma general:

   ```javascript
   ARRAY.splice(INDICE_INICIAL, CANTIDAD_A_BORRAR);
   ```

   Esto lo que hará será en el `ARRAY` a partir del índice `INDICE_INICIAL` borrar una `CANTIDAD_A_BORRAR` de elementos. Si no especificamos el valor de `CANTIDAD_A_BORRAR`, entonces borrará hasta el final del `ARRAY`.

   A continuación veremos un ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.splice(1, 2); // A partir del índice 1 borra 2 elementos.
   console.log(arreglo); // Imprime [1,4,5]
   ```

   Generalmente lo utilizaremos para `borrar un único elemento`, por lo que lo usaremos de la siguiente forma general:

   ```javascript
   ARRAY.splice(INDICE_ELEMENTO_A_BORRAR, 1);
   ```

   De esa manera, podemos modificar el `ARRAY` borrando el elemento en el índice `INDICE_ELEMENTO_A_BORRAR`. A continuación veremos un ejemplo:

   ```javascript
   const arreglo = [1, 2, 3, 4, 5];
   arreglo.splice(3, 1);
   console.log(arreglo); // Imprime [1,2,3,5]
   ```

## Comparar dos arrays.

Para comparar dos arrays uno pensaría que puede hacerlo de la siguiente forma general:

```javascript
/* Manera incorrecta ⛔ */
ARRAY_1 === ARRAY_2; // Daría siempre false.
```

Pero esto es `absolutamente incorrecto`. El problema aquí radica en que `ARRAY_1` y `ARRAY_2` actuarían como punteros a posiciones de la memoria. Por ende, `ARRAY_1 === ARRAY_2` daría siempre `false`, ya que las posiciones de las memorias serían distintas.

### Solución a este problema.

La manera más simple de resolver este problema es conviertiendo el arreglo completo en un `string` y comparando si ambos strings son iguales. Esto se hace de la siguiente forma general:

```javascript
JSON.stringify(ARRAY_1) === JSON.stringify(ARRAY_2);
```

Si ambos strings son iguales, entonces eso significa que los arreglos son iguales y, por ende, el resultado es `true`. Caso contrario, el resultado es `false`.

A continuación veremos un ejemplo:

```javascript
const arreglo1 = [1, "Hola", [1, 2], { name: "heber" }];
const arreglo2 = [1, "Hola", [1, 2], { name: "heber" }];
const arreglo3 = [1, "Hola", [1, 2], { name: "jasdjashdkjsahk" }];

console.log(JSON.stringify(arreglo1) === JSON.stringify(arreglo2)); // Imprime true

console.log(JSON.stringify(arreglo1) === JSON.stringify(arreglo3)); // Imprime false
```

## Como concatenar dos arreglos.

Para concatenar dos arreglos debemos utilizar el método `concat`, el cuál no modifica ningún arreglo, sino que devuevle un arreglo nuevo con ambos arreglos concatenados. Eso se utiliza de la siguiente forma general:

```javascript
const arregloResultante = ARRAY_1.concat(ARRAY_2);
```

Esto lo que hará será agregar todos los elementos de `ARRAY_2` al final del `ARRAY_1`.

A continuación veremos un ejemplo de esto:

```javascript
const fruits = ["Apple", "Banana", "Kiwi"],
  names = ["Heber", "Nat"];
const fruitsAndNames = fruits.concat(names);
console.log(fruitsAndNames); // Imprime [ 'Apple', 'Banana', 'Kiwi', 'Heber', 'Nat' ]
```

También se pueden concatenar varios arreglos de la siguiente forma general:

```javascript
const arregloResultante = ARRAY_1.concat(ARRAY_2, ARRAY_3, ..., ARRAY_N);
```

## Como clonar un array.

Queremos evitar el `aliasing` a la hora de clonar un array. Para lograrlo, tenemos que hacer un `deep clone`, lo que significa que debemos copiar en nueva memoria no solamente al arreglo, sino a cada elemento que compone al arreglo como pueden ser `otros arreglos internos u objectos`. Así que para hacer un `deep clone`, recomiendo hacerlo de la siguiente forma general:

```javascript
const deepCloneArray = JSON.parse(JSON.stringify(ARRAY));
```

A continuación veremos un ejemplo de como esto se hace:

```javascript
const nestedArray = [1, [2], 3, { hola: "mundo" }];
const arrayCopy = JSON.parse(JSON.stringify(nestedArray));

arrayCopy[1][0] = 2000;
arrayCopy[3].hola = "Adios";

console.log(arrayCopy); // Imprime [ 1, [ 2000 ], 3, { hola: 'Adios' } ]
console.log(nestedArray); // Imprime [ 1, [ 2 ], 3, { hola: 'mundo' } ]
```

`Importante:` Cabe mencionar que esto funcionará especialmente para arreglos que tengan un formato de tipo JSON. Si no tiene este formato, entonces recomiendo buscar otra alternativa, ya que puede que algunos valores cambien.

`OTRO DATO IMPORTANTE:` recomiendo hacer un `deep clone` únicamente si necesitamos crear una copia de un arreglo para modificarla sin modificar el arreglo original. En otros casos, recomiendo utilizar otra alternativa como puede ser el `spread operator`, ya que hacer `JSON.parse(JSON.stringify(ARRAY))` es muy costoso computacionalmente.

## Operador Spread.

El `spread operator` puede ser utilizado para otros tipos de objetos. En este caso, nos enfocaremos exclusivamente en su uso para arreglos.

El operador `spread` es utilizado para expandir los elementos de un `arreglo`. Supongamos que tenemos un arreglo llamado `ARRAY` que es igual a `[ELEM_1, ELEM_2, ..., ELEM_n]` entonces el operador `spread` se escribe como `...ARRAY` y da como resultando `ELEM_1, ELEM_2, ..., ELEM_n`, por lo que podemos pensar que el operador `spread` le quita los `[]` al `ARRAY` para dejar solamente los elementos que lo conforman.

A continuación veremos una serie de usos que podemos darle al operador `spread`:

### Utilizando el operador Spread para copiar un arreglo.

Notemos que nosotros podemos utilizar el operado `spread` para crear un nuevo arreglo utilizando los elementos de otro arreglo. Esto se ve de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];
const nuevoArreglo = [...ARRAY]; // Equivale a [ELEM_1, ELEM_2, /*...*/, ELEM_n]
```

Es decir, hemos creado un `nuevoArreglo` en función de los elementos del `ARRAY`. Esto funciona a la perfección si `todos los elementos del ARRAY` son `tipos primitivos`.

Veamos a continuación un ejemplo de como esto funciona bien:

```javascript
const arreglo = [1, 2, 3, 4, "Hola", true];
const nuevoArreglo = [...arreglo];

nuevoArreglo[4] = "Chau";

console.log(arreglo); // Imprime [1,2,3,4, "Hola", true]
console.log(nuevoArreglo); // Imprime [1,2,3,4, "Chau", true]
```

El problema radica cuando el `ARRAY` tiene elementos `no primitivos`, ya que utilizar el operador `spread` genera una `copia superficial`, lo que significa que la memoria de los `elemento no primitivos` será la misma en el `arreglo copiado` generando un `aliasing`.

Veremos un ejemplo de este error:

```javascript
/* Código incorrecto */

const arreglo = [1, [2], 3, {hola: "chau"}];
const nuevoArreglo = [...arreglo];

nuevoArreglo[1][0] = 20000;
nuevoArreglo[3].hola = "miau";

console.log(arreglo); // Imprime [1, [20000], 3, {hola: "miau"}]
console.log(nuevoArreglo); // Imprime [1, [20000], 3, {hola: "miau"}]
```

Como se puede observar, al tener un `aliasing` entre los objetos internos del `arreglo`, al hacer una copia superficial de la forma `[...arreglo]`, entonces si modificamos en el `nuevoArreglo` algún valor de los objetos, entonces el cambio se verá reflejado en `arreglo`.

### Utilizando el operador Spread para agregar elementos a un array.

Podemos utilizar el operador `spread` para agregar elementos al inicio o al final de un arreglo. Esto podemos hacerlo de la siguiente forma general:

```javascript
let ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];

/* Así se agrega un elemento por adelante. */
ARRAY = [ELEM_ADELANTE, ...ARRAY]; // Equivale a [ELEM_ADELANTE, ELEM_1, ELEM_2, /*...*/, ELEM_n]

/* Así se agrega un elemento por detrás. */
ARRAY = [...ARRAY, ELEM_ATRAS]; // Equivale a [ELEM_ADELANTE, ELEM_1, ELEM_2, /*...*/, ELEM_n, ELEM_ATRAS]
```

A continuación veremos un ejemplo de como se utiliza:

```javascript
let arreglo = [1, 2, 3, 4, "Hola", true];
arreglo = ["Inicio", ...arreglo, "Final"];

console.log(arreglo); // Imprime ["Inicio", 1, 2, 3, 4, "Hola", true, "Final"]
```

También podemos utilizar esto de agregar elementos para crear nuevos arreglos de la siguiente forma general:

```javascript
const nuevoArreglo = [ELEM_ADELANTE, ...ARRAY, ELEM_ATRAS];
```

Pero tengamos cuidado de que todos los elementos de `ARRAY` sean de `tipo primitivo`, ya que si contiene elementos de `tipo no primitivo` podemos tener errores de `aliasing` como hemos mencionado previamente.

### Utilizando el operador Spread para concatenar arreglos.

Podemos concatenar dos o más arreglos utilizando el operador `spread` de la siguiente forma general:

```javascript
const arregloConcatenado = [...ARRAY_1, ...ARRAY_2, /*...*/, ...ARRAY_n];
```

Esto funcionará a la perfección si es que `ARRAY_1, ARRAY_2, /*...*/, ARRAY_n` son arreglos compuestos de `tipos primitivos`. Si alguno tiene un `tipo no primitivo`, entonces tendremos problemas de `aliasing` como hemos mencionado previamente.

A continuación veremos un ejemplo:

```javascript
const arreglo1 = [1,2,3], arreglo2 = ["Hola", "soy", "Heber"];
const arregloConcatenado = [...arreglo1, ...arreglo2];

console.log(arregloConcatenado); // Imprime [ 1, 2, 3, 'Hola', 'soy', 'Heber' ]
```

## Destructuring Arreglo.

### El operador rest.

## Arreglos multidimensionales.

## Arreglo de objetos.

## Métodos avanzados sobre Arreglos

### El método slice()

El método slice va a obtener un `subArray` en base a un `array` y a un `índice inicial` y un `índice final` (este último es opcional). Esto funciona de la siguiente forma general:

```javascript
const subArray = ARRAY.slice(INDICE_INICIAL, INDICE_FINAL);
```

Y esto lo que hará será devolver un subArray que estará conformado por los elementos del `ARRAY` desde el `INDICE_INICIAL` hasta el `INDICE_FINAL - 1` (es decir, hasta el `INDICE_FINAL` no incluido). Notemos que el `INDICE_FINAL` es opcional, ya que por defecto tendrá el valor de `ARRAY.length`.

A continuación veremos algunos ejemplos:

```javascript
const arreglo = ["Apple", "Banana", "Kiwi", "Orange"];

console.log(arreglo.slice(1, 3)); // Imprime ["Banana", "Kiwi"]
```

#### Ejemplo visual de como funciona con índices positivos

Ahora voy a hacer un ejemplo visual de como funciona el `slice()` con `índices positivos`. Para ello, vamos a tener la siguiente expresión:

```javascript
const arreglo = ["Apple", "Banana", "Kiwi", "Orange"];

console.log(arreglo.slice(1, 3)); // Imprime ["Banana", "Kiwi"]
```

Notemos que en este caso el `índice inicial` es 1 y el `índice final` es 3. Y esto se ve visualmente como:

```
            indexStart          indexEnd
                ↓                   ↓
|    0    |     1    |    2   |     3    |
| "Apple" | "Banana" | "Kiwi" | "Orange" |

          [ "Banana" , "Kiwi" ]
          _____________________
                    ↑
                  Result
```

Notemos que el resultado son los elementos desde `indexStart` hasta `indexEnd - 1`.

#### Trabajando con índices negativos.

El método `slice()` también nos permite trabajar con `índices negativos`. A continuación veremos algunos ejemplos:

```javascript
const arreglo = ["Apple", "Banana", "Kiwi", "Orange"];

console.log(arreglo.slice(0, -1)); // Imprime [ 'Apple', 'Banana', 'Kiwi' ]

console.log(arreglo.slice(-2)); // Imprime [ 'Kiwi', 'Orange' ]

console.log(arreglo.slice(-3, -2)); // Imprime [ 'Banana' ]
```

#### Ejemplo visual de como funciona con índices negativos

Ahora voy a hacer un ejemplo visual de como funciona el `slice()` con `índices negativos`. Para ello, vamos a tener la siguiente expresión:

```javascript
const arreglo = ["Apple", "Banana", "Kiwi", "Orange"];

console.log(arreglo.slice(-3, -1)); // Imprime [ 'Banana', 'Kiwi' ]
```

Notemos que en este caso el `índice inicial` es -3 y el `índice final` es -1. Y esto se ve visualmente como:

```
            indexStart          indexEnd
                ↓                   ↓
|   -4    |    -3    |   -2   |    -1    |
| "Apple" | "Banana" | "Kiwi" | "Orange" |

          [ "Banana" , "Kiwi" ]
          _____________________
                    ↑
                  Result
```

Notemos que el resultado son los elementos desde `indexStart` hasta `indexEnd - 1`.

### El método filter.

### El método map.

### El método find.

### El método forEach.

### El método reduce.

### El método sort.
