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
