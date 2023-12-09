# Operadores y Expresiones Básicos.

En esta lección vamos a aprender los operadores y las expresiones básicas para los distintos tipos de datos. Nos enfocaremos principalmente en los tipos de datos primitivos.

## Operadores de asignación.

Sea `x una variable` y sea `z una variable o constante`, entonces tenemos los siguientes operadores de asignación

| Nombre                       | Operador    | Significado    |
| ---------------------------- | ----------- | -------------- |
| Asignaciín simple            | `x = z`     | `x = z`        |
| Asignación de adición        | `x += z`    | `x = x + z`    |
| Asignación de resta          | `x -= z`    | `x = x - z`    |
| Asignación de multiplicación | `x *= z`    | `x = x * z`    |
| Asignación de exponenciación | `x **= z`   | `x = x ** z`   |
| Asignación de división       | `x /= z`    | `x = x / z`    |
| Asignación de resto          | `x %= z`    | `x = x % z`    |
| Asignación AND lógico        | `x &&= z`   | `x = x && z`   |
| Asignación OR lógico         | `x \|\|= z` | `x = x \|\| z` |

### Encadenamiento de operadores de asignación.

La mayoría de los operadores de asignación retornan del valor resultado de la asignación. Eso nos permite encadenar distintas asignaciones en una sola expresión. Por ejemplo:

```javascript
const x = (z = 100); // Es lo mismo que x = (z = 100).

console.log(x); // Imprime 100.
console.log(z); // Imprime 100.
```

Hay que tener en cuenta que los valores de retorno siempre se basan en los valores de los operandos antes de la operación. Al encadenar estas expresiones, cada asignación se evalúa de `derecha a izquierda`. Veamos otro ejemplo:

```javascript
let x = 100,
  y = 200,
  z = 300;

z += x *= y; // Esto es equivalente a z += (x *= y).

console.log(x); // Imprime 20000.
console.log(y); // Imprime 200.
console.log(z); // Imprime 20300.
```

## Operadores de Number.

Sea `x una variable, constante o un valor de tipo Number` y sea `z una variable, constante o un valor de tipo Number`

| Nombre          | Operador | Ejemplo de uso                     |
| --------------- | -------- | ---------------------------------- |
| suma            | `x + z`  | `1 + 2` da como resultado `3`      |
| resta           | `x - z`  | `1 - 20` da como resultado `-19`   |
| multiplicación  | `x * z`  | `2 * 2` da como resultado `4`      |
| exponenciación  | `x ** z` | `2 ** 10` da como resultado `1024` |
| división        | `x / z`  | `4 / 2` da como resultado `2`      |
| resto           | `x % z`  | `4 % 2` da como resultado `0`      |
| negación unaria | `-x`     | `-(-10)` da como resultado `10`    |

### Incremento y decremento.

Hay dos operadores unarios especiales sobre `Number` que se comporta de una manera especial. Dichos operadores se utilizan para trabajar con `variables de tipo Number`. Entonces, `sea x una variable de tipo Number`, definimos:

1. Incremento (`++`):
   El operador de incremento puede utilizarse de dos maneras distintas:

   - `Como prefijo`: Esto significa que el símbolo `++` se pone antes de la variable de la siguiente manera: `++x`. Esto lo que hace es devolver el valor de `x + 1` y al mismo tiempo le asigna dicho valor a `x`. Por ejemplo:

     ```javascript
     let x = 100;
     console.log(++x); // Imprime 101.
     console.log(x); // Imprime 101.
     ```

     Esto se debe a que al hacer `++x`, incrementa el valor de `x` en 1 y luego se lo asigna a `x` a dicho resultado.

   - `Como sufijo`: Esto significa que el símbolo `++` se pone después de la variable de la siguiente manera: `x++`. Esto lo que hace es devolver el valor de `x` y luego le asigna a `x` el valor de `x + 1`. Por ejemplo:

     ```javascript
     let x = 100;
     console.log(x++); // Imprime 100.
     console.log(x); // Imprime 101.
     ```

     Esto se debe a que al hacer `x++`, devuelve el valor origina del `x` y luego le asigna a `x` el valor de `x+1`.

2. Decremento (`--`):
   El operador de decremento puede utilizarse de manera análoga a las dos manera de utilizar el `Incremento`, solamente que en lugar de sumar, debe restar.

## Operadores de String.

Aquí podemos encontrar el operador de `concatenación`, el cuál se simboliza como un `+`. Sea `x una variable, constante o valor del tipo String` y sea `z una variable, constante o valor del tipo String`, entonces `x + y` lo que hace es concatenar el valor de `z` detrás del valor de `x`. Por ejemplo:

```javascript
const x = "Hola ",
  y = "Mundo";
console.log(x + y); // Imprime "Hola Mundo".
```

También cabe mencionar que si intentamos utilizar el `operador de concatenación` entre un String y un Number, el resultado será un String que tendrá concatenado el Number como si fuese un String. Por ejemplo:

```javascript
console.log("Hola " + 1234); // Imprime "Hola 1234".
```

## Operadores de comparación.

Todos los operadores de comparación dan como resultado un valor `Boolean`. Sea `x una variable, constante o valor` y sea `z una variable, constante o valor` donde puede suceder que `x` y `z` tengan `distinto tipo`. Entonces, tenemos:

| Nombre                  | Operador  | Descripción                                                                                                                  | Ejemplo                               |
| ----------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Igualdad no estricta    | `x == z`  | Devuelve `true` si los valores son iguales, sin importar el tipo. En caso contrario, da `false`                              | `"3" == 3` da como resultado `true`   |
| Desigualdad no estricta | `x != z`  | Devuelve `true` si los valores son distintos, sin importar el tipo. En caso contrario, da `false`                            | `"3" != 23` da como resultado `true`  |
| Igualdad estricta       | `x === z` | Devuelve `true` si los valores son iguales y del mismo tipo. En caso contrario, da `false`                                   | `"3" === 3` da como resultado `false` |
| Desigualdad estricta    | `x !== z` | Devuelve `true` si los valores son del mismo tipo pero no iguales, o si son de diferente tipo. En caso contrario, da `false` | `"3" !== 3` da como resultado `true`  |
| Mayor que               | `x > z`   | Devuelve `true` si el valor del lado izquierdo es mayor que el valor del lado derecho. En caso contrario, da `false`         | `1000 > 1` da como resultado `true`   |
| Mayor o igual que       | `x >= z`  | Devuelve `true` si el valor del lado izquierdo es mayor o igual que el valor del lado derecho.                               | `1 >= 1` da como resultado `true`     |
| Menor que               | `x < z`   | Devuelve `true` si el valor del lado izquierdo es menor que el valor del lado derecho. En caso contrario, da `false`         | `1000 < 1` da como resultado `false`  |
| Menor o igual que       | `x >= z`  | Devuelve `true` si el valor del lado izquierdo es menor o igual que el valor del lado derecho.                               | `1 <= 100` da como resultado `true`   |

## Operadores de lógicos.

Generalmente, los `operadores de comparación` suelen utilizarse con `operadores lógicos` para crear sentencias más complejas. Sea `x una variable, constante o valor de tipo Boolean (puede ser fruto de una comparación)` y sea `z una variable, constante o valor de tipo Boolean (puede ser fruto de una comparación)`, entonces definimos:

| Nombre     | Operador   | Descripción                                                                                                                              | Ejemplo                                         |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| AND Lógico | `x && z`   | Cuando se usa con valores booleanos, `&&` devuelve `true` si ambos valores son `true`; de lo contrario, devuelve `false`.                | `1 === "1" && true` da como resultado `false`   |
| OR lógico  | `x \|\| z` | Cuando se usa con valores booleanos, `\|\|` devuelve `true` si alguno de los operandos es `true`; si ambos son falsos, devuelve `false`. | `1 === 1000 \|\| true` da como resultado `true` |
| NOT lógico | `!x`       | Devuelve el valor opuesto. Es decir, si el valor es `true`, entonces da `false`; En cambio, si el valor es `false`, da `true`            | `!(1 === 1000)` da como resultado `true`        |
