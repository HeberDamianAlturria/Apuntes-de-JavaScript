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

   También podemos crear un `arreglo vacío` de la siguiente forma general:

   ```javascript
   const arreglo = [];
   ```

## Creando un arreglo con N posiciones.

### Arreglo vacío con N posiciones.

Podemos crear un `arreglo vacío` con N posiciones de la siguiente forma general:

```javascript
const ARRAY = new Array(N);
```

siendo `N` un número que representa la cantidad de posiciones vacías que debe tener el arreglo.

A continuación veremos un ejemplo:

```javascript
const arreglo = new Array(100);

console.log(arreglo); // Imprime [ <100 empty items> ]
```

### Arreglo con N posiciones con valor por defecto en cada posición.

También podemos crear un `arreglo` con N posiciones con un valor por defecto en cada posición de la siguiente forma general:

```javascript
const ARRAY = new Array(N).fill(VALOR_DEFECTO);
```

siendo `N` un número que representa la cantidad de posiciones que debe tener el arreglo. Y notemos que `VALOR_DEFECTO` es el valor que quiero que haya en cada posición. Siempre `VALOR_DEFECTO` debe ser de `tipo primitivo`, ya que los `tipos no primitivos` van a generar `aliasing` en las N posiciones (y veremos como resolver este problema más adelante).

A continuación veremos un ejemplo:

```javascript
const arreglo = new Array(5).fill("Hi");

console.log(arreglo); // Imprime [ 'Hi', 'Hi', 'Hi', 'Hi', 'Hi' ]
```

#### Resolviendo el problema de los tipo no primitivos.

A continuación veremos un error de `aliasing` por usar tipos no primitivos:

```javascript
/* Codigo erróneo */

const arreglo = new Array(4).fill({ hola: "hi" });

console.log(arreglo); // Imprime [ { hola: 'hi' }, { hola: 'hi' }, { hola: 'hi' }, { hola: 'hi' } ]

arreglo[1].hola = "chau";

console.log(arreglo); // Imprime [ { hola: 'chau' }, { hola: 'chau' }, { hola: 'chau' }, { hola: 'chau' } ]
```

Esto significa que todas las posiciones comparten la misma referencia en memoria a donde está `{hola: "hi"}`, por eso al modificar uno cambian todos.

Esto puede resolverse de la siguiente forma general:

```javascript
const ARRAY = new Array(N).fill().map(() => {
  return VALOR_DEFECTO_NO_PRIMITIVO;
});
```

Siendo `N` un número que representa la cantidad de posiciones que debe tener el arreglo. Y notemos que `VALOR_DEFECTO_NO_PRIMITIVO` es el valor no primitivo que quiero que haya en cada posición. Entenderemos mejor el por qué esto funciona cuando casi al final de esta lección veamos el método `map`.

A continuación veremos como corregir el ejemplo anterior:

```javascript
const arreglo = new Array(4).fill().map(() => {
  return { hola: "hi" };
});

console.log(arreglo); // Imprime [ { hola: 'hi' }, { hola: 'hi' }, { hola: 'hi' }, { hola: 'hi' } ]

arreglo[1].hola = "chau";

console.log(arreglo); // Imprime [ { hola: 'hi' }, { hola: 'chau' }, { hola: 'hi' }, { hola: 'hi' } ]
```

Y notemos que ahora estamos evitando el `aliasing`.

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

## Operador Spread para arreglos.

El `spread operator` puede ser utilizado para otros tipos de objetos. En este caso, nos enfocaremos exclusivamente en su uso para arreglos.

El operador `spread` es utilizado para expandir los elementos de un `arreglo`. Supongamos que tenemos un arreglo llamado `ARRAY` que es igual a `[ELEM_1, ELEM_2, ..., ELEM_n]` entonces el operador `spread` se escribe como `...ARRAY` y da como resultando `ELEM_1, ELEM_2, ..., ELEM_n`, por lo que podemos pensar que el operador `spread` le quita los `[]` al `ARRAY` para dejar solamente los elementos que lo conforman.

A continuación veremos una serie de usos que podemos darle al operador `spread`:

### Utilizando el operador Spread para copiar superficial de un arreglo.

Podemos utilizar el operado `spread` para crear una `copia superficial` de un arreglo. Esto se ve de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];
const nuevoArreglo = [...ARRAY]; // Equivale a [ELEM_1, ELEM_2, /*...*/, ELEM_n]
```

Es decir, hemos creado un `nuevoArreglo` en función de los elementos del `ARRAY`. Esto funciona a la perfección si `todos los elementos del ARRAY` son `tipos primitivos`, es por eso que decirmos que es una `copia superficial`. Sin embargo, si el `ARRAY` tiene elementos `no primitivos`, entonces vamos a tener problemas de `aliasing` (que veremos más adelante).

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

const arreglo = [1, [2], 3, { hola: "chau" }];
const nuevoArreglo = [...arreglo];

nuevoArreglo[1][0] = 20000;
nuevoArreglo[3].hola = "miau";

console.log(arreglo); // Imprime [1, [20000], 3, {hola: "miau"}]
console.log(nuevoArreglo); // Imprime [1, [20000], 3, {hola: "miau"}]
```

Como se puede observar, al hacer una `copia superficial` de la forma `[...arreglo]`, entonces se generan `aliasing` entre los objetos internos del `arreglo` y del `nuevoArreglo`. Esto resulta en que si modificamos en el `nuevoArreglo` algún valor de los objetos, entonces el cambio se verá reflejado en `arreglo`.

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
const arreglo1 = [1, 2, 3],
  arreglo2 = ["Hola", "soy", "Heber"];
const arregloConcatenado = [...arreglo1, ...arreglo2];

console.log(arregloConcatenado); // Imprime [ 1, 2, 3, 'Hola', 'soy', 'Heber' ]
```

### Utilizando el operador Spread para pasar argumentos a una función desde un array.

En futuras lecciones aprenderemos sobre funciones. Por ahora, vamos a aprender como hacer para pasarle los valores de un array como argumentos a una función utilizando el operador `spread`. Esto se hace de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2, /*...*/, ELEM_n];

nombreDeLaFuncion(...ARRAY); // Es equivalente a hacer: nombreDeLaFuncion(ELEM_1, ELEM_2, /*...*/, ELEM_n);
```

Esto se hace para pasarle múltiples argumentos a una función en base a un arreglo. Se puede hacer esto sobre cualquier función debido a que si hay más elementos en el `array` que `parametros` en la función, entonces los elementos sobrantes del `array` serán `ignorados`. Aunque, es especialmente útil para las `funciones que usan rest parameters`, ya que pueden tomar una `cantidad indefinida de argumentos` y, por consiguiente, pueden aceptar todos los elementos del `array` como argumentos.

También notemos que esto se puede generalizar para `más de un arreglo` de la siguiente forma general:

```javascript
nombreDeLaFuncion(...ARRAY_1, ...ARRAY_2, /*...*/, ...ARRAY_n);
```

Aunque esta generalización es raramente utilizada.

#### Ejemplo creando funciones con parametros finitos.

Vamos a ver como funciona esto para una función que tiene una `cantidad finita de argumentos`:

```javascript
function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3, 4, 5];

console.log(sumar(...numeros)); // Imprime 6
```

Lo que sucede es que `sumar(...numeros)` es equivalente a `sumar(1, 2, 3, 4, 5)`. Pero notemos que la función `sumar` puede tomar solamente `3 argumentos`, por lo tanto vamos a tener que `a = 1`, `b = 2` y `c = 3`, mientras que los demás valores (que son el `4` y el `5`) serán ignorados.

#### Ejemplo creando funciones con parametros infinitos.

Vamos a ver ahora como funciona esto para una función que tiene una `cantidad infinita de argumentos`:

```javascript
function sumar(...args) {
  let resultado = 0;

  for (const numero of args) {
    resultado += numero;
  }

  return resultado;
}

const numeros = [1, 2, 3, 4, 5];

console.log(sumar(...numeros)); // Imprime 15
```

Lo que aquí está pasando es que `sumar(...numeros)` es equivalente a `sumar(1, 2, 3, 4, 5)`. Y como `sumar` puede tomar una cantidad infinita de argumentos, entonces va a hacer la suma entre todos los argumentos sin ignorar ninguno.

#### Ejemplo importante:

Si tenemos un `arreglo de números` y queremos hallar el valor máximo y el valor mínimo, podemos utilizar la función `Math.max()` y `Math.min()`, ya que dichas funciones pueden tomar una cantidad indefinida de argumentos. Esto se hace de la siguiente forma general:

```javascript
const maximoValor = Math.max(...ARREGLO_DE_NUMEROS);
const minimoValor = Math.min(...ARREGLO_DE_NUMEROS);
```

A continuación, veremos un ejemplo:

```javascript
const arregloDeNumeros = [1, 2, 3];
const maximoNumero = Math.max(...arregloDeNumeros);
const minimoNumero = Math.min(...arregloDeNumeros);

console.log(maximoNumero); // Imprime 3.
console.log(minimoNumero); // Imprime 1.
```

## Destructuring assignment de Arreglos.

Podemos destructurar un arreglo para asignarle sus valores a `variables o constantes` de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];

// Destructuring assignment con constantes.
const [CONST_1, CONST_2 /*...*/, , CONST_n] = ARRAY;

// Destructuring assignment con variables.
let [VARIABLE_1, VARIABLE_2 /*...*/, , VARIABLE_n] = ARRAY;
```

Básicamente, lo que estará sucediendo en este caso es que `VARIABLE_1 = ELEM_1, VARIABLE_2 = ELEM_2, ..., VARIABLE_n = ELEM_n` (lo mismo pasa para las constantes). Y notemos que la asignación se hace en función del orden de los elementos en el arreglo.

A continuación veremos un ejemplo sencillo:

```javascript
const arreglo = [1, 2, 3];

const [a, b, c] = arreglo;

console.log(a); // Imprime 1
console.log(b); // Imprime 2
console.log(c); // Imprime 3
```

### ¿Qué pasa si hay menos variables/constantes que elementos en el array?

Cabe mencionar que en la forma general anterios, existía la misma cantidad de variables/constantes que elementos del array. Pero notemos que si hay menos variables/constantes que elementos del array, eso no es problema ya que entonces funcionaría de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_i, ELEM_(i + 1), /*...*/ ELEM_n];

// Destructuring assignment con constantes.
const [CONST_1, CONST_2 /*...*/, , CONST_i] = ARRAY;

// Destructuring assignment con variables.
let [VARIABLE_1, VARIABLE_2 /*...*/, , VARIABLE_i] = ARRAY;
```

Básicamente, lo que estará sucediendo en este caso es que `VARIABLE_1 = ELEM_1, VARIABLE_2 = ELEM_2, ..., VARIABLE_i = ELEM_i` (lo mismo pasa para las constantes), pero los elementos del array que son `ELEM_(i+1), ..., ELEM_n` serán completamente ignorados.

A continuación veremos un ejemplo sencillo:

```javascript
const arreglo = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c] = arreglo;

console.log(a); // Imprime 1
console.log(b); // Imprime 2
console.log(c); // Imprime 3
```

### Valores por defecto.

Ahora veremos como asignarle un valor por defecto en caso de que el `arreglo` tenga menos elementos que la cantidad de `variables/constantes`. La forma general se ve así:

```javascript
const ARRAY = [ELEM_1, ELEM_2, /*...*/, ELEM_i];

// Destructuring assignment con constantes.
const [CONST_1, CONST_2, /*...*/, CONST_i, CONST_(i+1) = VALOR_DEFECTO_1, /*...*/, CONST_n = VALOR_DEFECTO_m] = ARRAY;

// Destructuring assignment con variables.
let [VARIABLE_1, VARIABLE_2, /*...*/, VARIABLE_i, VARIABLE_(i+1) = VALOR_DEFECTO_1, /*...*/, VARIABLE_n = VALOR_DEFECTO_m] = ARRAY;
```

Básicamente, lo que estará sucediendo en este caso es que `VARIABLE_1 = ELEM_1, VARIABLE_2 = ELEM_2, ..., VARIABLE_i = ELEM_i` (lo mismo pasa para las constantes), pero como ya no habría más elementos de `ARRAY` entonces se empezarían a asignar los valores por defecto de la siguiente manera: `VARIABLE_(i+1) = VALOR_DEFECTO_1, ..., VARIABLE_n = VALOR_DEFECTO_m` (lo mismo pasa para las constantes). Cabe mencionar que todas las variables/constantes pueden tener valor por defecto si así lo deseamos.

A continuación veremos un ejemplo sencillo:

```javascript
const arreglo = [1, 2];

const [a, b, c = 2000] = arreglo;

console.log(a); // Imprime 1
console.log(b); // Imprime 2
console.log(c); // Imprime 2000
```

### El operador rest.

También puede ser que querramos destructurar de un arreglo una cierta cantidad de `variables/constantes` y el resto de elementos sin asignar guardarlos en otro arreglo. Esto se puede hacer utilizando el operador `rest` de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_i, ELEM_(i + 1), /*...*/ ELEM_n];

// Destructuring assignment con constantes.
const [CONST_1, CONST_2 /*...*/, , CONST_i, ...RESTO_ARRAY] = ARRAY;

// Destructuring assignment con variables.
let [VARIABLE_1, VARIABLE_2 /*...*/, , VARIABLE_i, ...RESTO_ARRAY] = ARRAY;
```

Básicamente, lo que estará sucediendo en este caso es que `VARIABLE_1 = ELEM_1, VARIABLE_2 = ELEM_2, ..., VARIABLE_i = ELEM_i` (lo mismo pasa para las constantes), y finalmente a los elementos que restan del `ARRAY` los asignamos como un arreglo a el `RESTO_ARRAY` resultando en que `RESTO_ARRAY = [ELEM_i, ELEM_(i+1), /*...*/, ELEM_n]`. `IMPORTANTE:` el `operador rest` siempre `va a ir al final`.

Cabe mencionar que el `RESTO_ARRAY` será una `copia superficial` de los elementos que no se asignaron a las `variables/constantes`, por lo que si los elementos del `ARRAY` son `no primitivos`, entonces vamos a tener problemas de `aliasing`.

A continuación veremos un ejemplo sencillo:

```javascript
const arreglo = [1, 2, 3, 4, 5, 6, 7];

const [a, b, ...resto] = arreglo;

console.log(a); // Imprime 1
console.log(b); // Imprime 2
console.log(resto); // Imprime [3,4,5,6,7]
```

### Truco interesante para hacer swap de dos valores.

Podemos intercambiar dos valores de una manera sencilla utilizando la siguiente forma general:

```javascript
let a = VALOR_1,
  b = VALOR_2;

[a, b] = [b, a]; // Ahora a = VALOR_2 y b = VALOR_1
```

A continuación veremos un ejemplo sencillo:

```javascript
let a = 1,
  b = 2000;

[a, b] = [b, a];

console.log(a); // Imprime 2000
console.log(b); // Imprime 1
```


## Como clonar un array.

### Entendiendo el problema.

Cuando queremos clonar un `array`, debemos tener en cuenta que si hacemos una asignación directa de un `array` a otro, entonces ambos `arrays` van a apuntar a la misma posición de memoria, lo que significa que si modificamos un `array`, entonces el otro `array` también se verá modificado. Esto se conoce como `aliasing`.

A continuación veremos un ejemplo de esto:

```javascript
const arreglo = [1, 2, 3, 4, 5];
const copiaArreglo = arreglo;

copiaArreglo[0] = 1000;

console.log(arreglo); // Imprime [1000, 2, 3, 4, 5]
console.log(copiaArreglo); // Imprime [1000, 2, 3, 4, 5]
```

En este ejemplo vemos que si modificamos `copiaArreglo`, entonces también se modifica `arreglo`. Esto es un problema que queremos evitar.

### Copia superficial.

Para evitar el `aliasing` a la hora de clonar un `array`, podemos hacer una `copia superficial`. Las `copias superficiales` funcionan perfectamente si `todos los elementos` del `array` son de `tipo primitivo`. Hay muchas manera de hacer `copias superficiales`, pero la más común es utilizando el `spread operator`. Esto se hace de la siguiente forma general:

```javascript
const copiaArreglo = [...ARREGLO];
```

A continuación veremos un ejemplo de esto:

```javascript
const arreglo = [1, 2, 3, 4, 5];
const copiaArreglo = [...arreglo];

copiaArreglo[0] = 1000;

console.log(arreglo); // Imprime [1, 2, 3, 4, 5]
console.log(copiaArreglo); // Imprime [1000, 2, 3, 4, 5]
```

En este caso, si modificamos `copiaArreglo`, entonces no se modifica `arreglo`. Esto es debido a que hemos hecho una `copia superficial` de `arreglo`.

Sin embargo, las `copias superficiales` solamente funcionan si `todos los elementos` del `array` a copiar son de `tipo primitivo`. Si hay algún elemento que NO sea de `tipo primitivo`, entonces vamos a tener problemas de `aliasing`. A continuación veremos un ejemplo de este error:

```javascript
const arreglo = [1, [2], 3, { hola: "mundo" }];
const copiaArreglo = [...arreglo];

copiaArreglo[1][0] = 2000;
copiaArreglo[3].hola = "Adios";

console.log(arreglo); // Imprime [1, [2000], 3, {hola: "Adios"}]
console.log(copiaArreglo); // Imprime [1, [2000], 3, {hola: "Adios"}]
```

En este caso, si modificamos `copiaArreglo`, entonces también se modifica `arreglo`. Esto es debido a que hemos hecho una `copia superficial` de `arreglo` y algunos de los elementos de `arreglo` no son de `tipos primitivos`.

### Copia profunda.

Si queremos hacer una copia de un `array` que tenga elementos que NO sean de `tipo primitivo`, entonces debemos hacer una `copia profunda` para evitar problemas de `aliasing`. Las `copias profundas` son más complicadas de hacer y son más costosas computacionalmente que las `copias superficiales`. Sin embargo, las `copias profundas` son necesarias si queremos evitar el `aliasing` en `arrays` que tengan elementos que no sean de `tipo primitivo`. 

La idea de las `copias profundas` es duplicar no solo el arreglo en sí, sino también cada uno de los objetos o elementos tanto primitivos como no primitivos que contiene. Esto significa que cualquier cambio que se haga a los elementos de la copia no afectará a los elementos del original y viceversa, eliminando el problema del aliasing.

Hay dos maneras muy conocidas de hacer `copias profundas` de un `array`:

#### Utilizando el JSON.parse(JSON.stringify(ARRAY)).

La manera más común de hacer una `copia profunda` de un `array` es utilizando el `JSON.parse(JSON.stringify(ARRAY))`. Esto se hace de la siguiente forma general:

```javascript
const deepCloneArray = JSON.parse(JSON.stringify(ARRAY));
```

Lo que estamos haciendo aquí es convertir el `ARRAY` a un `string` utilizando `JSON.stringify(ARRAY)`, luego convertimos ese `string` a un `objeto` utilizando `JSON.parse(STRING)` y finalmente asignamos ese `objeto` a `deepCloneArray`. Esto va a hacer una `copia profunda` de `ARRAY`.

`Importante:` Cabe mencionar que esto funcionará especialmente para arreglos que tengan un formato de tipo `JSON`. Si no tiene este formato, entonces recomiendo buscar otra alternativa, ya que puede que algunos valores cambien. Además, esta manera de hacer `copias profundas` es muy costosa computacionalmente.

A continuación veremos un ejemplo de como esto se hace:

```javascript
const nestedArray = [1, [2], 3, { hola: "mundo" }];
const arrayCopy = JSON.parse(JSON.stringify(nestedArray));

arrayCopy[1][0] = 2000;
arrayCopy[3].hola = "Adios";

console.log(arrayCopy); // Imprime [ 1, [ 2000 ], 3, { hola: 'Adios' } ]
console.log(nestedArray); // Imprime [ 1, [ 2 ], 3, { hola: 'mundo' } ]
```

Como se puede observar, si modificamos `arrayCopy`, entonces no se modifica `nestedArray`. Esto es debido a que hemos hecho una `copia profunda` de `nestedArray`.

#### Utilizando la función structuredClone(). La mejor solución.

La otra manera de hacer una `copia profunda` de un `array` es utilizando la función `structuredClone()`. Esta función se utiliza de la siguiente forma general:

```javascript
const deepCloneArray = structuredClone(ARRAY);
```

Lo que estamos haciendo aquí es simplemente llamando a la función `structuredClone()` y pasándole como argumento el `ARRAY` que queremos clonar. Esto va a hacer una `copia profunda` de `ARRAY`. Además, tiene la ventaja de que puede realizar copias profundas de tantos niveles como sea necesario.

Sin embargo, esta función tiene algunas limitaciones, como que `NO puede clonar funciones ni métodos` y que `NO puede clonar elementos DOM`.

`Importante`: Esta solución es la mejor para hacer `copias profundas` de `arrays` que tengan elementos que no sean de `tipo primitivo`. Además, es mucho más eficiente que la solución anterior. Recomiendo utilizar esta solución siempre que sea posible.

A continuación veremos un ejemplo de como esto se hace:

```javascript
const nestedArray = [1, [2], 3, { hola: "mundo" }];
const arrayCopy = structuredClone(nestedArray);

arrayCopy[1][0] = 2000;
arrayCopy[3].hola = "Adios";

console.log(arrayCopy); // Imprime [ 1, [ 2000 ], 3, { hola: 'Adios' } ]
console.log(nestedArray); // Imprime [ 1, [ 2 ], 3, { hola: 'mundo' } ]
```

Como se puede observar, si modificamos `arrayCopy`, entonces no se modifica `nestedArray`. Esto es debido a que hemos hecho una `copia profunda` de `nestedArray`.

## Arreglos multidimensionales.

Notemos que un `arreglo` puede tener como elementos a más `arreglos`. A los `arreglos que contienen como elementos a más arreglos` se les conocen como `arreglos multidimensionales`.

Nos enfocaremos principalmente en las matrices, ya que raramente se utilizan arreglo de dimensiones más altas que 2.

### Matrices (Arreglos bidimensionales).

Las matrices son un tipo de arreglo bidimensional muy utilizado. Se definen de la siguiente forma general:

```javascript
const matriz = [
   [ELEM_0_0, ELEM_0_1, /*...*/, ELEM_0_(M-1)],
   [ELEM_1_0, ELEM_1_1, /*...*/, ELEM_0_(M-1)],
   /*...*/
   [ELEM_(N-1)_0, ELEM_(N-1)_1, /*...*/, ELEM_(N-1)_(M-1)],
];
```

Esto va a definir una matriz de `N filas` por `M columnas`. Notemos que las filas van a contarse desde el `índice 0` hasta el `índice N-1` y las columnas van a contarse desde el `índice 0` hasta el `índice M-1`.

A continuación veremos un ejemplo sencillo:

```javascript
const matriz = [
  [1, 2],
  [3, 4],
];

console.log(matriz); // Imprime [ [ 1, 2 ], [ 3, 4 ] ]
```

#### Actualizando el valor de una matriz.

De forma general, si tengo una matriz con `N filas` y `M columnas`, puedo modificar el valor de un elemento de la siguiente forma general:

```javascript
matriz[i][j] = NUEVO_VALOR;
```

Y esto lo que hará será modificar el valor del elemento en la `fila i` (con `0 <= i < N`) y `columna j` (con `0 <= j < M`) por un `NUEVO_VALOR`.

A continuación veremos un ejemplo sencillo:

```javascript
const matriz = [
  [1, 2],
  [3, 4],
];

matriz[1][0] = 100000; // Cambio el valor de la fila 1, columna 0.

console.log(matriz); // Imprime [ [ 1, 2 ], [ 100000, 4 ] ]
```

#### Iterando una matriz.

Para iterar una matriz, debemos ir iterando `cada fila` y por cada fila debemos iterar `cada columna`. Esto se puede hacer de la siguiente forma general:

```javascript
for (let row = 0; row < MATRIZ.length; row++) {
  for (let column = 0; column < MATRIZ[0].length; column++) {
    /*
     * Puedo haceder a cada elemento de la matriz siguiente manera:
     * ARRAY[row][column]
     */
  }
}
```

A continuación veremos un pequeño ejemplo:

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matriz.length; row++) {
  for (let column = 0; column < matriz[0].length; column++) {
    console.log(matriz[row][column]);
  }
}
```

En este ejemplo, vamos a imprimir cada elemento que compone a la matriz. Por lo que se imprimirá: `1 2 3 4 5 6 7 8 9`.

También podemos iterar la matriz usando el `for...of` de la siguiente forma general:

```javascript
for (const row of MATRIZ) {
  for (const element of row) {
    /*
     * Cuerpo del for.
     */
  }
}
```

`Recomiendo hacerlo así`, ya que es mucho más resumida y fácil de leer.

A continuación veremos un ejemplo de esta sintáxis:

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const row of matriz) {
  for (const element of row) {
    console.log(element);
  }
}
```

En este ejemplo, vamos a imprimir cada elemento que compone a la matriz. Por lo que se imprimirá: `1 2 3 4 5 6 7 8 9`.

#### Matriz vacío con N filas y M columnas:

Se puede crear una `matriz vacía` con `N filas` y `M columnas` de la siguiente forma general:

```javascript
const MATRIZ = new Array(N).fill().map(() => new Array(M));
```

Siendo `N` la cantidad de fila y `M` la cantidad de columnas.

A continuación veremos un ejemplo sencillo;

```javascript
const matriz = new Array(3).fill().map(() => new Array(2));

console.log(matriz); // Imprime [ [ <2 empty items> ], [ <2 empty items> ], [ <2 empty items> ] ]
```

#### Matriz con N filas y M columnas y valor primitivo por defecto:

Se puede crear una `matriz` con `N filas`, `M columnas` y un valor primitivo por defecto de la siguiente forma general:

```javascript
const MATRIZ = new Array(N)
  .fill()
  .map(() => new Array(M).fill(VALOR_PRIMITIVO_DEFECTO));
```

Siendo `N` la cantidad de fila y `M` la cantidad de columnas y `VALOR_PRIMITIVO_DEFECTO` el valor primitivo que tenga cada posición.

A continuación veremos un ejemplo sencillo:

```javascript
const matriz = new Array(3).fill().map(() => new Array(2).fill(1));

console.log(matriz); // Imprime [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]
```

### El método flat().

Este método nos permite crear un `nuevo arreglo` a partir de un arreglo multidimensional, eliminando la cantidad de dimensiones pero dejando los elementos de los arreglo anidados. Se utiliza de la siguiente forma general:

```javascript
const arregloAplanado = ARRAY_MULTIDIMENSIONAL.flat(DIMENSIONES_A_ELIMINAR);
```

Donde notemos que `ARRAY_MULTIDIMENSIONAL` es un arreglo multidimensional, y `DIMENSIONES_A_ELIMINAR` es un número entero. Este método nos devolverá un nuevo arreglo donde contendrá los mismos elementos que el `ARRAY_MULTIDIMENSIONAL` pero eliminando la anidación en `DIMENSIONES_A_ELIMINAR`.

Generalmente querremos que convertir un arreglo multidimensional en otro con una única dimensión. Esto se hace de la siguiente forma general:

```javascript
const arregloAplanado = ARRAY_MULTIDIMENSIONAL.flat(Infinity);
```

A continuación veremos un par de ejemplos:

```javascript
const arregloMultidimensional = [1, 2, 3, [20, 22, [220, 590], 10], 7, 9];

console.log(arregloMultidimensional.flat(Infinity)); // Imprime [ 1, 2, 3, 20, 22, 220, 590, 10, 7, 9 ]

console.log(arregloMultidimensional.flat(1)); // Imprime [ 1, 2, 3, 20, 22, [ 220, 590 ], 10, 7, 9 ]
```

## Arreglo de objetos.

En la siguiente lección aprenderemos sobre los `objetos`. Pero por ahora vamos a aprender como trabajar con `arreglos de objetos`, ya que es lo más utilizado en proyectos reales. La forma general en la que se ve un arreglo de objetos es así:

```javascript
const arregloDeObjetos = [
  {
    // Objeto 1
    clave1: valor1,
    clave2: valor2,
    /*...*/
  },
  {
    // Objeto 2.
    clave1: valor3,
    clave2: valor4,
    /*...*/
  },
  // Más objetos.
];
```

Es importante aclarar que NO es necesario que `todos los objetos` del arreglo tengan exactamente las `mismas claves` o `la misma cantidad de claves`.

Lo importante es saber que al ser un `arreglo`, podemos aplicarle todos los métodos que veremos a continuación y podremos aplicarle todo lo visto en esta lección.

## Métodos avanzados sobre Arreglos.

### El método includes().

Este método devolverá `true` si es que un valor está en un `array`, y si no está devolverá `false`. Se usa de la siguiente forma general:

```javascript
const valorbooleano = ARRAY.includes(VALOR_PRIMITIVO);
```

Este método lo que hará será iterar el `ARRAY` y verá si se cumple que algún elemento del arreglo es igual (mediante el operador `===`) al `VALOR_PRIMITIVO`.

`IMPORTANTE`: solamente debemos utilizar este método para ver si el `ARRAY` contiene algún valor del `tipo primitivo`, ya que al hacer uso del `===` para la comparación entonces `NO` funcionará para `tipos complejos`.

A continuación veremos un ejemplo de como se usa:

```javascript
const animes = ["Monster", "Death Note", "Steins;gate"];

console.log(animes.includes("Monster")); // Imprime True.

console.log(animes.includes("monster")); // Imprime False.

console.log(animes.includes("Naruto")); // Imprime False.
```

### El método slice()

El método slice va a obtener un `subArray` en base a un `array` y a un `índice inicial` y un `índice final` (este último es opcional). Esto funciona de la siguiente forma general:

```javascript
const subArray = ARRAY.slice(INDICE_INICIAL, INDICE_FINAL);
```

Y esto lo que hará será devolver un subArray que estará conformado por los elementos del `ARRAY` desde el `INDICE_INICIAL` hasta el `INDICE_FINAL - 1` (es decir, hasta el `INDICE_FINAL` no incluido). Notemos que el `INDICE_FINAL` es opcional, ya que por defecto tendrá el valor de `ARRAY.length`.

El subArray es una `copia superficial` de los elementos del `ARRAY`, por lo que si modificamos el subArray, no se verán reflejados los cambios en el `ARRAY` original. Sin embargo, si el `ARRAY` tiene elementos `no primitivos`, entonces se generará `aliasing` entre los elementos del `ARRAY` y del `subArray`. Si quisieramos evitar esto, entonces deberíamos hacer una `copia profunda` del `ARRAY` de la siguiente forma general:

```javascript
const subArray = structuredClone(ARRAY.slice(INDICE_INICIAL, INDICE_FINAL));
```

A continuación veremos algunos ejemplos:

```javascript
const arreglo = ["Apple", "Banana", "Kiwi", "Orange"];

console.log(arreglo.slice(1, 3)); // Imprime ["Banana", "Kiwi"]

console.log(arreglo.slice(2)); // Imprime ["Kiwi", "Orange"]

console.log(arreglo.slice()); // Imprime ["Apple", "Banana", "Kiwi", "Orange"]
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

### El método forEach().

El método `forEach` va a recorrer el `arreglo` y va a ejecutar por cada elemento una `función callback`. Se utiliza de la siguiente forma general:

```javascript
ARRAY.forEach((elemento, indice) => {
  /* Cuerpo de la función (opcional) */
});
```

Básicamente, el método `forEach` toma como argumento una función. Lo que hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; la función no va a retornar nada. Es muy similar a utilizar un `for...of`.

A continuación veremos un ejemplo sencillo:

```javascript
const listOfInfo = [
  {
    firstName: "Heber",
    lastName: "Alturria",
    DNI: 43690658,
  },
  {
    firstName: "Natasha",
    lastName: "Ivancich",
    DNI: 43142142,
  },
];

listOfInfo.forEach((info) => {
  console.log(info.firstName);
  console.log(info.lastName);
  console.log(info.DNI);
});
```

### El método filter().

El método filter es utilizado para filtrar elementos de un array bajo cierto criterio. toma como argumento una `función de callback` y va a retornar un nuevo array con los elementos ya filtrado. Se utiliza de la siguiente forma general:

```javascript
const nuevoArreglo = ARRAY.filter((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_BOOLEANO; // valor booleano que define si filtrar o no.
});
```

Básicamente, el filter toma como argumento una función. Lo que `filter` hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; si la función retorna `true`, entonces se va a `quedar el elemento`, en cambio si retorna `false` entonces se va a `filtrar el elemento`.

La sintáxis puede tener más sentido cuando en futuras lecciones aprendamos sobre las `arrow functions`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];

const soloPares = arreglo.filter((numero) => numero % 2 == 0);

console.log(soloPares);
```

### El método find().

El método find es utilizado para encontrar `el primer elemento` de un array que `cumpla con cierta condición`. toma como argumento una `función de callback` y va a retornar `el primer elemento en cumplir la condición`. Se utiliza de la siguiente forma general:

```javascript
const elementoSatisfaceCondicion = ARRAY.find((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_BOOLEANO; // valor booleano que define si el elemento satisface la condición.
});
```

Básicamente, el find toma como argumento una función. Lo que `find` hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; si la función retorna `true`, entonces significa que el `elemento` ha cumplido la condición y se `devuelve dicho elemento como resultado del método`, en cambio si retorna `false` entonces se sigue iterando. Si ningún elemento cumple la condición, entonces va a retornar `undefined`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const arreglo = [1, 2, 3, 5, 6, 7, 8];

const mayorA3 = arreglo.find((numero) => numero > 3);

console.log(mayorA3); // Imprime 5.
```

### El método findIndex().

El método `findIndex` funciona exactamente igual al `find`, pero en lugar de devolver el elemento que cumple la condición, va a devolver `el índice del elemento que cumple la condición`. Se utiliza de la siguiente forma general:

```javascript
const indexElementoSatisfaceCondicion = ARRAY.findIndex((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_BOOLEANO; // valor booleano que define si el elemento satisface la condición.
});
```

Básicamente, el findIndex toma como argumento una función. Lo que `findIndex` hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; si la función retorna `true`, entonces significa que el `elemento` ha cumplido la condición y se `devuelve el índice de dicho elemento como resultado del método`, en cambio si retorna `false` entonces se sigue iterando. Si ningún elemento cumple la condición, entonces el método `findIndex` va a retornar `-1`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const arreglo = ["Hola", "Chau", "Sol", "Maincra"];

const indiceResultado = arreglo.findIndex((word) => word.length <= 3);

console.log(indiceResultado); // Imprime 2.
```

### El método some().

El método `some` funciona de una manera similar a los dos anteriores. Lo que hace es returnar `true` si `existe` elemento del `array` cumpla la condición. Se utiliza de la siguiente forma general:

```javascript
const existeElementoSatisfaceCondicion = ARRAY.some((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_BOOLEANO; // valor booleano que define si el elemento satisface la condición.
});
```

Básicamente, el some toma como argumento una función. Lo que `some` hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; si la función retorna `true`, entonces significa que el `elemento` ha cumplido la condición y se `devuelve true como resultado del método`, en cambio si retorna `false` entonces se sigue iterando. Si ningún elemento cumple la condición, entonces el método `some` va a retornar `false`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const arreglo = [1, 2, 3, 4, 6, 100000];

const existeNumeroGrande = arreglo.some((numero) => numero >= 1000);

console.log(existeNumeroGrande); // Imprime true.
```

### El método every().

El método `every` es similar al `some`, solamente que va a retornar `true` si `todos` los elementos del `arreglo` cumplen la condición. Se utiliza de la siguiente forma general

```javascript
const todolementoSatisfaceCondicion = ARRAY.every((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_BOOLEANO; // valor booleano que define si el elemento satisface la condición.
});
```

Básicamente, el every toma como argumento una función. Lo que `every` hará será iterar el `ARRAY` y por cada elemento va a llamar a la `función de callback` pasándole como argumento el `elemento` y la `posición del elemento en el arreglo`; si la función retorna `true`, entonces sigue iterando, en cambio si retorna `false` entonces `el método va a retornar false`. Si se cumple que `todos` los elementos del `ARRAY` han hecho que la `función de callback` sea `true`, entonces el `método devuelve true`, en cambios si hubo al menos un elemento que hizo que la `función de callback` sea `false` entonces el `método devulve false`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const arreglo = [1, 2, 3, 4, 6, 10];

const todosNumerosPequeños = arreglo.every((numero) => numero <= 10);

console.log(todosNumerosPequeños); // Imprime true.
```

### El método map().

El método `map` sirve para transformar todos los elementos de un arreglo en otro valores retornados por una `función de callback`. Se utiliza de la siguiente forma general:

```javascript
const arregloCambiado = ARRAY.map((elemento, indice) => {
  /* Cuerpo de la función (opcional) */

  return NUEVO_VALOR; // nuevo valor que tendrá el elemento.
});
```

Básicamente, el `map` toma como argumento una `función de callback` y lo que hará será iterar el `ARRAY` y por cada `elemento` vamos a modificar el valor de dicho elemento en su índice correspondiente por el `valor retornado en la función de callback`. Este método devolverá un `nuevo arreglo` con los valores ya modificados.

A continuación veremos un ejemplo de uso:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);

console.log(numbers); // Imprime [1,2,3,4,5]
console.log(doubleNumbers); // Imprime [2,4,6,8,10]
```

En este ejemplo utilizamos el `map` para multiplicar todos los elementos de `numbers` por 2.

#### Otro ejemplo interesante.

A continuación veremos un ejemplo de como utilizar el `map` en un arreglo de objetos:

```javascript
const users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

const userFullname = users.map(
  (object) => `${object.firstName} ${object.lastName}`
);

console.log(userFullname); // Imprime ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
```

### El método reduce().

El método `reduce` es utilizado para iterar un arreglo y reducirlo a un único valor. Se utiliza de la siguiente forma general:

```javascript
const valorObtenido = ARRAY.reduce((valorAcumulado, elemento) => {
  /* Cuerpo de la función (opcional) */

  return NUEVO_VALOR_ACUMULADO; // nuevo valor que tendrá el valorAcumulado para la siguiente iteración.
}, VALOR_INICIAL);
```

Básicamente, el método `reduce` va a tomar como argumento una `función de callback` y un `VALOR_INICIAL`. Y lo que hará será iterar sobre el `ARRAY` de ` izquierda a derecha` y llamará a la `función de callback` por cada elemento del arreglo. Para que se entienda como funciona voy a explicar los pasos como si fuesen un algoritmo:

1. En la primera iteración vamos a tener que para la `función de callback` sus argumentos serán: para `valorAcumulado` será igual al `VALOR_INICIAL`, y el `elemento` será igual al primer elemento del `ARRAY` (es decir, `ARRAY[0]`). Luego se va a ejecutar el `cuerpo de la función` en caso de que tenga cuerpo. Y al finalizar, el `valor retornado por la función de callback` pasará a ser el nuevo valor del `valorAcumulado`.

2. Sea `i = 1`, mientras se cumpla que `1 <= i < ARRAY.length` vamos a hacer lo siguiente:

   la `función de callback` tendrá como argumentos: `valorAcumulado` tendrá el valor retornado en la función de calback en la iteración anterior y el `elemento` será el valor de `ARRAY[i]`. Luego se va a ejecutar el `cuerpo de la función de callback` en caso de que tenga cuerpo. Y al finalizar, el `valor retornado por la función de callback` pasará a ser el nuevo valor del `valorAcumulado`.

   Para continuar la iteración, vamos a hacer `i++`.

3. Al terminar de iterar el `ARRAY`, el valor retornado por el método `reduce` será el `último valor` con el que quedó el `valorAcumulado`.

#### Primer ejemplo sencillo.

Veamos el siguiente código:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sumaTotal = numbers.reduce(
  (valorAcumulado, numero) => valorAcumulado + numero,
  0
);

console.log(sumaTotal); // Imprime 15.
```

Lo que hará este código es sumar todos los elementos del arreglo `numbers`.

#### Otro ejemplo interesante.

Veamos ahora el siguiente código:

```javascript
const personalInfo = [
  {
    name: "Heber Alturria",
    age: 22,
    favAnimes: ["Monster", "Death Note", "Steins;gate"],
  },
  {
    name: "Natasha Ivancich",
    age: 23,
    favAnimes: ["Horimiya", "Steins;gate"],
  },
];

const onlyAnimes = personalInfo.reduce((arrayAccumulate, info) => {
  for (const animeTitle of info.favAnimes) {
    // Evito agregar valores repetidos.
    if (arrayAccumulate.includes(animeTitle)) continue;

    // Si no está repetido, lo agrego.
    arrayAccumulate.push(animeTitle);
  }

  return arrayAccumulate;
}, []);

console.log(onlyAnimes); // Imprime [ 'Monster', 'Death Note', 'Steins;gate', 'Horimiya' ]
```

En este ejemplo, lo interesante es que podemos ver que el `valor inicial` de `reduce` es un `[]`, lo que crea al inicio una posición en memoria para un arreglo vacío. Y a su vez, en cada llamada a la función de callback, devolveremos el `arrayAccumulate` para seguir referenciando a la misma posición en memoria del array creado al inicio. Al finalizar, el `onlyAnimes` referenciará a la ya mencionada posición en memoria creada al inicio.

### El método reverse().

Este método revertirá las posiciones de los elementos del `array`. Se utiliza de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];

ARRAY.reverse();
```

Como se puede observar, este método va a modificarme el `ARRAY` para revertir las posiciones de sus elementos, resultando en que luego de ejecutar este método vamos a notar que `ARRAY = [ELEM_n, ..., ELEM_2, ELEM_1]`. Notese que este método `modifica el arreglo original`.

A continuación veremos un ejemplo sencillos:

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // Imprime [1,2,3,4,5]

numbers.reverse();

console.log(numbers); // Imprime [5,4,3,2,1]
```

#### El método toReversed().

En las últimas versiones de `EcmaSCRIPT` se ha añadido el método `toReversed()` que nos permite retornar un `nuevo arreglo` con el orden de los elementos al revés. Por lo tanto, `NO va a modificar el arreglo original`. Se utiliza de la siguiente manera:

```javascript
const reversedArray = ARRAY.toReversed();
```

Cabe mencionar que este método hará una `copia superficial` de los elementos del `ARRAY` y los va a devolver en orden inverso. En caso de que el `ARRAY` tenga elementos `no primitivos`, entonces se generará `aliasing` entre los elementos del `ARRAY` y del `reversedArray`. Si quisieramos evitar esto, entonces deberíamos hacer una `copia profunda` del `ARRAY` de la siguiente forma general:

```javascript
const reversedArray = structuredClone(ARRAY.toReversed());
```

A continuación veremos un ejemplo sencillo:

```javascript
const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = numbers.toReversed();

console.log(numbers); // Imprime [1,2,3,4,5]
console.log(reversedNumbers); // Imprime [5,4,3,2,1]
```

Como se puede observar, `NO` se modifica el arreglo `numbers`.

### El método sort().

Este método es utilizado para ordenar un arreglo. Se utiliza de la siguiente forma general:

```javascript
const ARRAY = [ELEM_1, ELEM_2 /*...*/, , ELEM_n];

ARRAY.sort((ELEM_I, ELEM_J) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_NUMERICO; // Un valor numérico que define el orden.
});
```

Como se puede observar, el método `sort` toma como argumento una `función de callback`. Lo que sucederá es que cuando se quieran comparar dos elementos `ELEM_I` y `ELEM_J` pertenecientes al `ARRAY`, entonces se le pasarán esos valores comoa argumento a la `función de callback` y dependiendo del valor numérico que retorne dicha función sabemos si queremos tener ordenado antes a `ELEM_I` o a `ELEM_J`. A continuación explicaré como funciona el retorno de la `función de callback`:

- Si se cumple que la función de callback retorna un valor `igual a 0`, esto significa que `ELEM_I` y `ELEM_J` son iguales y por ende el orden no importa.

- Si se cumple que la función de callback retorna un valor `> 0`, esto significa que quiero que `ELEM_J` esté ordenado antes que `ELEM_I` (es decir, el segundo elemento tomado como argumento en la función de callback debe estar antes que el primero).

- Si se cumple que la función de callback retorna un valor `< 0`, esto significa que quiero que `ELEM_I` esté ordenado antes que `ELEM_J` (es decir, el primer elemento tomado como argumento en la función de callback debe estar antes que el segundo).

`IMPORTANTE`: Notemos que este método me va a modificar el `ARRAY` para ordenarlo.

#### Ordenar de manera creciente un arreglo de números.

Hace esto es muy común, por consiguiente la forma general de hacerlo es:

```javascript
ARRAY_DE_NUMEROS.sort((a, b) => a - b);
```

A continuación veremos un ejemplo:

```javascript
const numbers = [8, 10, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers); // Imprime [1, 2, 8, 10]
```

#### Ordenar de manera decreciente un arreglo de números.

Hace esto es también muy común, por consiguiente la forma general de hacerlo es:

```javascript
ARRAY_DE_NUMEROS.sort((a, b) => b - a);
```

A continuación veremos un ejemplo:

```javascript
const numbers = [8, 10, 1, 2];

numbers.sort((a, b) => b - a);

console.log(numbers); // Imprime [10, 8, 2, 1]
```

#### Ejemplo interesante.

En este ejemplo vamos a ordenar un arreglo de objetos en función de un campo llamado `age` de manera decreciente, pero si hay empate en el `age` entonces vamos a ordenarlo por el `name` de manera creciente:

```javascript
const personalInfo = [
  {
    name: "Natasha Ivancich",
    age: 23,
  },
  {
    name: "Ligth Yaghami",
    age: 23,
  },
  {
    name: "Heber Alturria",
    age: 22,
  },
  {
    name: "Mercedes Molina",
    age: 54,
  },
  {
    name: "L Lawliet",
    age: 24,
  },
];

personalInfo.sort((firstInfo, secondInfo) => {
  // En este caso, debo manejar el empate en las edades.
  if (firstInfo.age === secondInfo.age) {
    // Selecciono el que tenga el menor valor de name.
    return firstInfo.name <= secondInfo.age ? -1 : 1;
  }

  return secondInfo.age - firstInfo.age;
});

console.log(personalInfo);

/*
Imprime:

[
  { name: 'Mercedes Molina', age: 54 },
  { name: 'L Lawliet', age: 24 },
  { name: 'Ligth Yaghami', age: 23 },
  { name: 'Natasha Ivancich', age: 23 },
  { name: 'Heber Alturria', age: 22 }
]

*/
```

#### El método toSorted().

Este método también es muy moderno al momento de escribir este apunte, por lo que muchos navegadores no le dan soporte, pero las últimas versiones de `NodeJS` si permiten utilizarlo. Se utiliza de la siguiente forma general:

```javascript
const sortedArray = ARRAY.toSorted((ELEM_I, ELEM_J) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_NUMERICO; // Un valor numérico que define el orden.
});
```

Y lo que hará será devolver un `nuevo arreglo` donde los elementos del `ARRAY` van a estar ya ordenados. La ventaja es que no me modifica el `arreglo original`.

Cabe mencionar que este método va a retornar una `copia superficial` de los elementos del `ARRAY` y los va a devolver en orden. En caso de que el `ARRAY` tenga elementos `no primitivos`, entonces se generará `aliasing` entre los elementos del `ARRAY` y del `sortedArray`. Si quisieramos evitar esto, entonces deberíamos hacer una `copia profunda` del `ARRAY` de la siguiente forma general:

```javascript
const sortedArray = structuredClone(ARRAY.toSorted((ELEM_I, ELEM_J) => {
  /* Cuerpo de la función (opcional) */

  return VALOR_NUMERICO; // Un valor numérico que define el orden.
}));
```

A continuación veremos un ejemplo:

```javascript
const numbers = [8, 10, 1, 2];

const arregloDecreciente = numbers.toSorted((a, b) => b - a);

console.log(numbers); // Imprime [8, 10, 1, 2]

console.log(arregloDecreciente); // Imprime [10, 8, 2, 1]
```

### El método join().

Este método es utilizado para convertir todos los elementos de un arreglo en un string, los cuáles estarán separados por un `string`. Se utiliza de la siguiente forma general:

```javascript
const stringValue = ARRAY.join(SEPARATOR_STRING);
```

Recomiento utilizar este método si es que el `ARRAY` está compuesto solamente de elementos de `tipos primitivos`.

A continuación veremos un ejemplo de como se utiliza:

```javascript
const values = [1, 2, 4, "Hola", 20];

console.log(values.join(" ")); // Imprime "1 2 4 Hola 20"

console.log(values.join("-")); // Imprime "1-2-4-Hola-20"

console.log(values.join(", ")); // Imprime "1, 2, 4, Hola, 20"
```

### El método Array.isArray().

Este es un método que va a devolver `true` solo si la variable o constante que se le pasa como argumentos es un `arreglo`, en caso contrario va a devolver `false`. 

A continuación veremos ejemplos de como se utiliza:

```javascript
console.log(Array.isArray([1,2,3,4])); // Imprime true.

console.log(Array.isArray(123)); // Imprime false.

console.log(Array.isArray("asd")); // Imprime false.

console.log(Array.isArray(["Hola", "mundo"])); // Imprime true.
```