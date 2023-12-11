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

Los `array` son un tipo de dato no primitivo, por ende los `array` se asignan por `referencia`. Esto quiere decir que `el array se va a guardar en una posición de la memoria distinta a la posición en memoria de la variable o constante que definamos, y lo que se le asigna a dicha variable o constante es la posición de la memoria con el que puedo referencia al array`.

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

## Modificación de elementos de un Array.

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

