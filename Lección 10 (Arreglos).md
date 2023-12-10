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
const arreglo = [1,2,3,4,5];
console.log(arreglo.length); // Imprime 5.
```

## Acceso a elementos del array.

