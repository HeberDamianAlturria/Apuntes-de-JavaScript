# Profundizando en los Number.

Aunque los números en JavaScript son tipos primitivos, JavaScript los envuelve temporalmente en objetos cuando se usan métodos en ellos. Este proceso se conoce como `boxing` o `enveloping`.

Cuando llamas a un método en un número, JavaScript envuelve ese número primitivo en un objeto llamado `Number` temporalmente para poder acceder a los métodos definidos en el prototipo del objeto `Number`. Una vez que se completa la operación del método, el número se vuelve a convertir en su forma primitiva.

En esta lección aprenderemos los métodos más utilizados sobre `Number`.

## Aclaración muy importante:

En JavaScript, el `Number` puede ser tratado como un `objeto`, por lo tanto podríamos hacer lo siguiente para crear un número:

```javascript
const numero = new Number(10);
```

Pero el problema que esto tiene es que ahora `numero` va a ser de tipo `object`. Trabajar utilizando el objeto `Number` va a generar que nuestro código sea más lento que utilizar la primitiva de Number, ya que se tiene que reservar memoria para guardar el objeto. `Así que nunca hay trabajar directamente con el objeto Number`.

Y, por la técnica de `boxing` explicada previamente, podemos obtener acceso a todo los métodos del objeto `Number` por más que trabajemos con las primitivas de tipo `Number`.

## El método Number().

Este método es generalmente utilizado para convertir un `String` a un `Number`. Es utiliza de la siguiente forma general:

```javascript
const numero = Number(VALOR_STRING);
```

Si se puede convertir a un número, entonces devuelve el `String` transformado a un `Number`. En cambio, si no puede transformarlo entonces va a devolver `NaN`.

Por ejemplo:

```javascript
const numero1 = Number("1234"); // Devuelve 1234
const numero2 = Number("1234asd"); // Devuelve NaN
```

## El método parseInt()

Este método es generalmente utilizado para convertir un `String` a un `Number entero`. Se utiliza de la siguiente forma general:

```javascript
const numeroEntero = parseInt(VALOR_STRING);
```

Si se puede convertir a un número, entonces devuelve el `String` transformado a un `Number entero`. En cambio, si no puede transformarlo entonces va a devolver `NaN`.

Por ejemplo:

```javascript
const numeroEntero1 = parseInt("1234"); // Devuelve 1234
const numeroEntero2 = parseInt("1234.56"); // Devuelve 1234
```

### Como cambiarle de base al número al parsearlo.

Opcionalmente, el método `parseInt()` puede tomar como `segundo argumento` un `número` que representa la base numérica en la que está el `String` a parsear. Por defecto, se asume que el `String` estará en `base 10`. Esto se usa de la siguiente forma general:

```javascript
const numeroEntero = parseInt(VALOR_STRING, BASE_NUMERICA);
```

Por ejemplo:

```javascript
const numeroEntero = parseInt("1010", 2); // Devuelve como valor 10.
```

En este ejemplo parseamos el string `1010` que está en `base 2`.

## El método parseFloat()

Este método es generalmente utilizado para convertir un `String` a un `Number flotante`. Se utiliza de la siguiente forma general:

```javascript
const numeroFlotante = parseFloat(VALOR_STRING);
```

Si se puede convertir a un número, entonces devuelve el `String` transformado a un `Number flotante`. En cambio, si no puede transformarlo entonces va a devolver `NaN`.

Por ejemplo:

```javascript
const numeroFlotante1 = parseFloat("1234"); // Devuelve 1234
const numeroFlotante2 = parseFloat("1234.56"); // Devuelve 1234.56
```

## El método toString()

Este método es utilizado para convertir un `Number` a un `String`. Se puede utilizar de las siguientes dos formas generales:

```javascript
/* Primera manera de hacerlo */
const numero = VALOR_NUMBER;
const string = numero.toString();

/* Segunda manera de hacerlo */
const string = (VALOR_NUMBER).toString();

/* Lo siguiente es INCORRECTO */
const string = VALOR_NUMBER.toString(); // Da error.
```

A continuación veremos un ejemplo:

```javascript
const x = 10;
const str = x.toString(); // devuelve "10"
```

### Como cambiarle de base al número al parsearlo.

Opcionalmente, el método `toString()` aceptar como argumento un número que representa la base en la que estará representado el número al convertirlo a un string. Por defecto, se asume que se desea que el `String` obtenido esté en `base 10`. Esto se puede utilizar de la siguiente forma general:

```javascript
/* Primera manera de hacerlo */
const numero = VALOR_NUMBER;
const string = numero.toString(BASE_NUMERICA);

/* Segunda manera de hacerlo */
const string = (VALOR_NUMBER).toString(BASE_NUMERICA);
```

A continuación haremos un ejemplo:

```javascript
const x = 10;
const str = x.toString(2); // devuelve "1010"
```

Es decir, convertimos el valor `10` a un string con una representación en `base 2`.

## El método toFixed()

Este método me convierte un `Number flotante` a un `String`, pero lo hace redondeando lo números decimales. Este método toma como argumento un número que indica a partir de que valor decimal se debe redondea; por defecto el valor de este argumento es 0. A continuación veremos la forma general de como utilizar:

```javascript
/* Forma general 1 */
const numeroFlotante = VALOR_NUMBER_FLOTANTE;
const stringRedondeado = numeroFlotante.toFixed(VALOR_POSICION_DECIMAL);

/* Forma general 2 */
const stringRedondeado = (VALOR_NUMBER_FLOTANTE).toFixed(VALOR_POSICION_DECIMAL);
```

A continuación veremos un ejemplo:

```javascript
const numero = 1234.45;
const stringRedondeado = numero.toFixed(); // Esto retorna "1234"

const numero2 = 1234.75;
const stringRedondeado2 = numero.toFixed(); // Esto retorna "1235"

const numero3 = 1234.75;
const stringRedondeado3 = numero.toFixed(1); // Esto retorna "1234.8"
```

## El método toLocaleString()

Este método convierte un `Number` a un `String`, el cúal estará formateado en función de un argumento un string que indica el país del formato. Voy a mostrarlo con un ejemplo a continuación:

```javascript
const stringFormateado = Number(1234.75).toLocaleString("es-AR"); // Retorna '1.234,75' que sería el formato argentino.
```

Este método es puede tomar más argumentos opcionales que permitan mejorar el formato. A continuación pondré un link de todas las opciones que posee este método: https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp

## El método isInteger()

Este método nos va a retornar `true` se el número es un entero o `false` en caso contrario. Se utiliza de la siguiente forma general:

```javascript
const esEntero = Number.isInteger(ALGUN_VALOR);
```

Notemos que estamos utilizando un método proveniente de la clase `Number`, al cuál hay que pasarle un valor `ALGUN_VALOR` que puede ser de cualquier tipo. Obviamente, si el valor de `ALGUN_VALOR` no es `Number`, entonces dará automáticamente `false`. En cambio, si el valor de `ALGUN_VALOR` es de tipo `Number`, entonces comprobará si es un entero o no.

A continuación, veremos ejemplo de como funciona:

```javascript
//Example 1
let valor1 = 10;
let esEntero1 = Number.isInteger(valor1);
console.log(esEntero1); // Output: true

//Example 2
let valor2 = 10.99;
let esEntero2 = Number.isInteger(valor2);
console.log(esEntero2); // Output: false

//Example 3
let valor3 = "10";
let esEntero3 = Number.isInteger(valor3);
console.log(esEntero3); // Output: false
```

## El método isFinite()

ste método nos va a retornar `true` se el número es finito o `false` en caso contrario. Se utiliza de la siguiente forma general:

```javascript
const esFinito = Number.isFinite(ALGUN_VALOR);
```

Notemos que estamos utilizando un método proveniente de la clase `Number`, al cuál hay que pasarle un valor `ALGUN_VALOR` que puede ser de cualquier tipo. Obviamente, si el valor de `ALGUN_VALOR` no es `Number`, entonces dará automáticamente `false`. En cambio, si el valor de `ALGUN_VALOR` es de tipo `Number`, entonces comprobará si dicho valor es igual a `Infinity` o `-Infinity` para devolver `true` o `false`.

A continuación, veremos ejemplo de como funciona:

```javascript
//Example 1
let valor1 = 1001923012931209301239;
let esFinito1 = Number.isFinite(valor1);
console.log(esFinito1); // Output: true

//Example 2
let valor2 = -10.9912312;
let esFinito2 = Number.isFinite(valor2);
console.log(esFinito2); // Output: true

//Example 3
let valor3 = "10";
let esFinito3 = Number.isFinite(valor3);
console.log(esFinito3); // Output: false

//Example 4
let valor4 = Infinity;
let esFinito4 = Number.isFinite(valor4);
console.log(esFinito4); // Output: false
```