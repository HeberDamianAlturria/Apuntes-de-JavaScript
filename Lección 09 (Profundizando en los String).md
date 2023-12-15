# Profundizando en los String.

Aunque los string en JavaScript son tipos primitivos, JavaScript los envuelve temporalmente en objetos cuando se usan métodos en ellos. Este proceso se conoce como `boxing` o `enveloping`.

Cuando llamas a un método en un string, JavaScript envuelve ese string primitivo en un objeto llamado `String` temporalmente para poder acceder a los métodos definidos en el prototipo del objeto `String`. Una vez que se completa la operación del método, el string se vuelve a convertir en su forma primitiva.

En esta lección aprenderemos los métodos más utilizados sobre `String`.

## Aclaración muy importante:

En JavaScript, el `String` además de ser un tipo también es un objeto, por lo tanto podríamos hacer lo siguiente para crear un string:

```javascript
const string = new String(10);
```

Pero el problema que esto tiene es que ahora `string` va a ser de tipo `object`. Trabajar utilizando el objeto `String` va a generar que nuestro código sea más lento que utilizar la primitiva de String, ya que se tiene que reservar memoria para guardar el objeto. `Así que nunca hay trabajar directamente con el objeto String`.

Y, por la técnica de `boxing` explicada previamente, podemos obtener acceso a todo los métodos del objeto `String` por más que trabajemos con las primitivas de tipo `String`.

## La propiedad length.

Podemos saber la longitud de un String agregando `.length` al final. De forma general:

```javascript
const longitud = STRING.length;
```

Esto va a retornar un número que representa la longitud que tiene el valor de `STRING`(que puede provenir de una variable o constante).

A continuación veremos un ejemplo para entender como funciona:

```javascript
console.log("hello".length); // Imprime 5
```

## Accediendo a los caracteres del string.

Hay tres maneras de acceder al caracter de un String. Todas las maneras de hacerlo requieren de utilizar un número que represente el índice o posición del caracter en el String. La manera de contar los índices se hace de la siguiente forma general:

```javascript
"a    b    ...    y    z"
 ↑    ↑    ...    ↑    ↑
 0    1    ...    n-2  n-1
```

Siendo `n` la longitud del `String`.

Esto significa que sea `str` un `String`, los índices se cuentan desde el `0` y terminan en el `str.length - 1`. Y notemos que en el índice `0` se encuentra el `primer caracter` del string y en el índice `str.length - 1` se encuentra el `último caracter`.

1. Utilizando el método `charAt()`:

   Este método toma como argumento el número del índice donde se encuentra el caracter a buscar. Se utiliza de la siguiente forma general:

   ```javascript
   const caracter = STRING.charAt(NUMERO_INDICE);
   ```

   Donde notemos que `NUMERO_INDICE` puede ser un valor entre `0` y `STRING.length - 1`. En caso de que el valor del `NUMERO_INDICE` esté fuera de ese rango, entonces va a devolver `""`.

   A continuación veremos un par de ejemplos:

   ```javascript
   const string1 = "Hola";
   console.log(string1.charAt(1)); // Imprime "o".
   console.log(string1.charAt(400)); // Imprime "".
   ```

   Y notemos que para acceder al último elemento utilizando esta forma, debemos hacerlo de la siguiente forma general:

   ```javascript
   const str = STRING;
   const ultimoCaracter = str.charAt(str.length - 1);
   ```

2. Utilizando el método `at()`:

   Este método se parece al anterior, pero funciona de una manera diferente. Para entenderlo, debemos primero comprender que este método cuenta los `indices positivos` de la misma manera que hemos explicado previamente, pero también trabaja con `indices negativos` que se cuentan de la siguiente forma general:

   ```javascript
    "a    b    ...    y    z"
    ↑    ↑     ...    ↑    ↑
    -n  -n-1   ...   -2   -1
   ```

   Siendo `n` la longitud del `String`.

   Esto significa que sea `str` un `String`, los `índices negativos` se cuentan desde el `-1` haste el en el `-str.length`. Y notemos que en el índice `-1` se encuentra el `último caracter` del string y en el índice `-str.length` se encuentra el `primer caracter`.

   Como ya hemos dicho, los `índices positivos` se cuentan de la manera que expliqué al inicio de esta sección.

   A continuación veremos la forma general en la que se utiliza el `método at()`:

   ```javascript
   const caracter = STRING.at(NUMERO_INDICE);
   ```

   Y notemos que `NUMERO_INDICE` puede ser un valor entre `0` y `STRING.length - 1` o también puede ser un valor entre `-1` y `-STRING.length`. Si el valor del `NUMERO_INDICE` está fuera de alguno de estos rangos, entonces devolverá `undefined`.

   A continuación veremos un par de ejemplos:

   ```javascript
   const string1 = "Hola";
   console.log(string1.at(1)); // Imprime "o".
   console.log(string1.at(400)); // Imprime undefined.
   console.log(string1.at(-1)); // Imprime "a".
   console.log(string1.at(-2)); // Imprime "l".
   ```

3. Utilizando el string como un array:

   También podemos utilizar el string como si fuese un array de la siguiente forma general:

   ```javascript
   const caracter = STRING[NUMERO_INDICE];
   ```

   Donde notemos que `NUMERO_INDICE` puede ser un valor entre `0` y `STRING.length - 1`. En caso de que el valor del `NUMERO_INDICE` esté fuera de ese rango, entonces va a devolver `undefined`.

   A continuación veremos un par de ejemplos:

   ```javascript
   const string1 = "Hola";
   console.log(string1.charAt(1)); // Imprime "o".
   console.log(string1.charAt(400)); // Imprime "".
   ```

   Y notemos que para acceder al último elemento utilizando esta forma, debemos hacerlo de la siguiente forma general:

   ```javascript
   const str = STRING;
   const ultimoCaracter = str.[str.length - 1];
   ```

## El método toUpperCase()

Este método convierte todos los caracteres de un string en mayúsculas y los devuelve. Se usa de la siguiente forma general:

```javascript
const stringMayuscula = STRING.toUpperCase();
```

## El método toLowerCase()

Este método convierte todos los caracteres de un string en minúscula y los devuelve. Se usa de la siguiente forma general:

```javascript
const stringMinuscula = STRING.toLowerCase();
```

## El método trim()

El método `trim()` elimina los espacios en blanco iniciales y finales de un string. Se usa de la siguiente forma general:

```javascript
const string = STRING.trim();
```

A continuación veremos un ejemplo:

```javascript
const str = "     Heber Alturria     ";

console.log(str.trim()); // Imprime "Heber Alturria"
```

## El método replace()

Este método nos permite reemplazar la primera aparición de un `subtring` por `otro subtring`. Se utiliza de la siguiente forma general:

```javascript
const newString = STRING.replace(SEARCH_SUBSTRING, NEW_SUBSTRING);
```

Lo que hará este método es buscar en el `STRING` la primera aparición del `SEARCH_SUBSTRING` y reemplazarla por el `NEW_SUBSTRING`. Como busca la primera aparición, si hay más apariciones serán ignoradas. Hay que tener en cuenta que la búsqueda se hace de manera `case sensitive`, por lo que los mayúsculas y las minúsculas tienen que ser las mismas tanto en el `STRING` como en el `SEARCH_SUBSTRING` para que pueda encontrarlo. Si no encuentra `SEARCH_SUBSTRING`, entonces devolverá el `STRING` sin modificar.

A continuación veremos un ejemplo:

```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // Devuelve "Please visit W3Schools and Microsoft!"
```

### Evitar que sea case sensitive.

Podemos utilizar una expresión regular con un flag `/i` para evitar que sea `case sensitive` y busque de manera `case insensitive`. Esto se puede hacer de la siguiente forma general:

```javascript
const newString = STRING.replace(/SEARCH_SUBSTRING/i, NEW_SUBSTRING);
```

Donde notemos que `/SEARCH_SUBSTRING/i` es una `expresión regular` y NO una primitiva `String`.

Veamos un ejemplo de como usarlo:

```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); // Devuelve "Please visit W3Schools and Microsoft!"
```

## El método replaceAll()

Este método es similar al anterior, pero en su lugar nos permite reemplazar todas las apariciones de un `subtring` por `otro subtring`. Se utiliza de la siguiente forma general:

```javascript
const newString = STRING.replaceAll(SEARCH_SUBSTRING, NEW_SUBSTRING);
```

Lo que hará este método es buscar en el `STRING` todas las apariciones del `SEARCH_SUBSTRING` y reemplazarlas por el `NEW_SUBSTRING`. Hay que tener en cuenta que la búsqueda se hace de manera `case sensitive`, por lo que los mayúsculas y las minúsculas tienen que ser las mismas tanto en el `STRING` como en el `SEARCH_SUBSTRING` para que pueda encontrarlo. Si no encuentra `SEARCH_SUBSTRING`, entonces devolverá el `STRING` sin modificar.

A continuación veremos un ejemplo:

```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll("Microsoft", "W3Schools"); // Devuelve "Please visit W3Schools and W3Schools!"
```

### Evitar que sea case sensitive.

Podemos utilizar una expresión regular con un flag `/gi` para evitar que sea `case sensitive` y busque de manera `case insensitive`. Esto se puede hacer de la siguiente forma general:

```javascript
const newString = STRING.replaceAll(/SEARCH_SUBSTRING/gi, NEW_SUBSTRING);
```

Donde notemos que `/SEARCH_SUBSTRING/gi` es una `expresión regular` y NO una primitiva `String`. `Es importantísimo agregar el flag /gi, ya que si usamos solamente el /i generará un error`.

Veamos un ejemplo de como usarlo:

```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll(/MICROSOFT/gi, "W3Schools"); // Devuelve "Please visit W3Schools and W3Schools!"
```

## El método slice()

El método slice va a obtener un `substring` en base a un `string` y a un `índice inicial` y un `índice final` (este último es opcional). Esto funciona de la siguiente forma general:

```javascript
const subString = STRING.slice(INDICE_INICIAL, INDICE_FINAL);
```

Y esto lo que hará será devolver un substring que estará conformado por los caracteres del `STRING` desde el `INDICE_INICIAL` hasta el `INDICE_FINAL - 1` (es decir, hasta el `INDICE_FINAL` no incluido). Notemos que el `INDICE_FINAL` es opcional, ya que por defecto tendrá el valor de `STRING.length`.

A continuación veremos algunos ejemplos:

```javascript
let text = "Apple, Banana, Kiwi";

console.log(text.slice(7, 13)); // Imprime "Banana".

console.log(text.slice(0, 6)); // Imprime "Apple".

console.log(text.slice(7)); // Imprime "Banana, Kiwi".
```

### Ejemplo visual de como funciona con índices positivos

Ahora voy a hacer un ejemplo visual de como funciona el `slice()` con `índices positivos`. Para ello, vamos a tener la siguiente expresión:

```javascript
let text = "The mirror";

console.log(text.slice(4, 8)); // Imprime "mirr".
```

Notemos que en este caso el `índice inicial` es 4 y el `índice final` es 8. Y esto se ve visualmente como:

```
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result
```

Notemos que el resultado son los caracteres desde `indexStart` hasta `indexEnd - 1`.

### Trabajando con índices negativos.

El método `slice()` también nos permite trabajar con `índices negativos`. A continuación veremos algunos ejemplos:

```javascript
let text = "Apple, Banana, Kiwi";

console.log(text.slice(0, -6)); // Imprime "Apple, Banana"

console.log(text.slice(-4)); // Imprime "Kiwi"

console.log(text.slice(-13, -6)); // Imprime "Banana".
```

### Ejemplo visual de como funciona con índices negativos

Ahora voy a hacer un ejemplo visual de como funciona el `slice()` con `índices negativos`. Para ello, vamos a tener la siguiente expresión:

```javascript
let text = "The mirror";

console.log(text.slice(-6, -2)); // Imprime "mirr".
```

Notemos que en este caso el `índice inicial` es -6 y el `índice final` es -2. Y esto se ve visualmente como:

```
                     indexStart          indexEnd
                        ↓                   ↓
| -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |
|  T  |  h |  e |    |  m |  i |  r |  r |  o |  r |

                        m    i    r    r
                      ___________________
                               ↑
                             Result
```

Notemos que el resultado son los caracteres desde `indexStart` hasta `indexEnd - 1`.

## El método includes()

Este método busca un `substring` adentro de un `string`. Se utiliza de la siguiente forma general:

```javascript
const incluye = STRING.includes(SUBSTRING);
```

Esto va a devolver `true` si en `STRING` aparece el `SUBSTRING`, y va a devolver `false` en caso contrario. Notemos que la comparación es `case sensitive`, por lo que tanto el `STRING` como el `SUBSTING` deben tener las mimas mayúsculas y minúsculas.

A continuación veremos un ejemplo:

```javascript
const text = "Apple, Banana, Kiwi";

console.log(text.includes("Banana")); // Imprime true.

console.log(text.includes("banana")); // Imprime false.
```

## El método startsWith()

Se utiliza de la siguiente forma general:

```javascript
const empizaCon = STRING.startsWith(SUBSTRING);
```

Esto va a devolver `true` si el `STRING` comienza con el `SUBSTRING`, y va a devolver `false` en caso contrario. Notemos que la comparación es `case sensitive`, por lo que tanto el `STRING` como el `SUBSTING` deben tener las mimas mayúsculas y minúsculas.

A continuación veremos un ejemplo:

```javascript
const text = "Apple, Banana, Kiwi";

console.log(text.startsWith("Apple")); // Imprime true.

console.log(text.startsWith("Banana")); // Imprime false.
```

## El método endsWith()

Se utiliza de la siguiente forma general:

```javascript
const terminaCon = STRING.endsWith(SUBSTRING);
```

Esto va a devolver `true` si el `STRING` termina con el `SUBSTRING`, y va a devolver `false` en caso contrario. Notemos que la comparación es `case sensitive`, por lo que tanto el `STRING` como el `SUBSTING` deben tener las mimas mayúsculas y minúsculas.

A continuación veremos un ejemplo:

```javascript
const text = "Apple, Banana, Kiwi";

console.log(text.endsWith("Apple")); // Imprime false.

console.log(text.endsWith("Kiwi")); // Imprime true.
```

## El método search()

Este método busca un `substring` adentro de un `string` y devuelve la índice donde se encuentra el primer caracter del `substring` en el `string` en caso de encontrarlo. Se utiliza de la siguiente forma general:

```javascript
const indice = STRING.search(SUBSTRING);
```

Esto va a devolver un número entero que será el índice donde se encuentra el primer caracter del `substring` en el `string` en caso de encontrarlo, y devolverá `-1` en caso de no encontrarlo. Notemos que la comparación es `case sensitive`, por lo que tanto el `STRING` como el `SUBSTING` deben tener las mimas mayúsculas y minúsculas.

A continuación veremos un ejemplo:

```javascript
const text = "The mirror";

console.log(text.search("mirror")); // Imrpime 4.

console.log(text.search("Mirror")); // Imrpime -1.
```

## El método split()

Este método es utilizado para convertir un `string` en un array de `substrings` en base a un `separator` (que será también un substring). A continuación veremos la forma general de usarlo:

```javascript
const arrayDeSubstrings = STRING.split(SEPARATOR_PATTERN);
```

Donde notemos que el `SEPARATOR_PATTERN` será un string. Lo que esto va a hacer es que va a devolver el resultado de divir el `STRING` en distintos substrings basandose en el `SEPARATOR_PATTERN` (eliminando en el proceso todas las apariciones del `SEPARATOR_PATTERN`) y va a guardar esos substrings en un array.

A continuación veremos como es que esto funciona:

```javascript
const text = "Apple, Banana, Kiwi";

console.log(text.split(", ")); // Imprime: [ 'Apple', 'Banana', 'Kiwi' ]

// Separar una cadena de texto por espacios.
const text2 = "Hola soy Heber";
console.log(text2.split(" ")); // Imprime: [ 'Hola', 'soy', 'Heber' ]

// Separar una cadena en cada carácter.
const text3 = "Heber";
console.log(text3.split("")); // Imprime: [ 'H', 'e', 'b', 'e', 'r' ]
```

## Interpolación de Strings.

La interpolación de Strings nos permite `insertar fácilmente expresiones de JavaScript dentro de un string`. La manera de hacerlo se ve similar a la siguiente forma general:

```javascript
const stringInterpolado = `Texto fijo ${EXPRESION_DE_JAVASCRIPT} más texto fijo`;
```

Como se puede observar, debemos estar usando la comillas invertidas ` `` ` para definir al string (en lugar de usar las `''` o las `""`). Dentro de este string, colocamos la expresión que deseamos inyectar siguiendo este formato: `${EXPRESION_DE_JAVASCRIPT}`. Lo que sucede es que el valor de `EXPRESION_DE_JAVASCRIPT` es calculado y agregado al string en el lugar donde se ha escrito el `${EXPRESION_DE_JAVASCRIPT}`. Todo lo que se encuentra dentro de `${}` es evaluado como código JavaScript. `Podemos interpolar en un mismo string toda la cantidad que querramos de expresiones de JavaScript`.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const name = "Heber",
  age = 22;

/* Ejemplo 1 */

const interpolado = `Hola, soy ${name} y tengo ${age} años`;

console.log(interpolado); // Imprime "Hola, soy Heber y tengo 22 años".

// Y esto es equivalente a:
const concatenado = "Hola, soy " + name + " y tengo " + age + " años";

console.log(concatenado); // Imprime "Hola, soy Heber y tengo 22 años".


/* Ejemplo 2 */

const interpoladoTernario = `Yo soy ${age > 18 ? "mayor de edad" : "menor de edad"}`;

console.log(interpoladoTernario); // Imprime "Yo soy mayor de edad".

```

En este ejemplo podemos observar como podemos hacer lo mismo que la `interpolacion de strings` utilizando simplemente la `concatenación de strings`. El problema es que la `concatenación de strings` es muy difícil de leer, por eso `nunca hay que usarla`.
