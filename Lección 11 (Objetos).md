# Los objetos.

Los `objetos` en JavaScript son un tipo no primitivos que está compuesto por `claves` y `valores`.

En esta lección nos enfocaremos en los `objetos literales`, ya que en futuras lecciones aprenderemos sobre `programación orientada a objetos` en JavaScript.

## Como definir un objeto.

Los `objetos` se definen de la siguiente forma general:

```javascript
const objeto = {
  CLAVE_1: VALOR_1,
  CLAVE_2: VALOR_2,
  /*...*/
  CLAVE_N: VALOR_N,
};
```

Como se puede apreciar, los objetos se crean mediante `{}`. Lo que hace un `objeto` es asociarle a una clave `CLAVE_I` un valor `VALOR_I` de cualquier tipo; esto último quiere decir que `VALOR_I` puede ser un número, un string, otro objeto, un array, una función, etc. Notemos que cada `clave-valor` debe estar separada por una `,` (coma) de otra.

### Reglas importantes para las claves.

Las `claves` en los objetos deben ser `strings`. Sin embargo, si la `clave` de un objeto es una palabra que NO incluye espacios, podemos escribirla sin utilizar `""` (comillas dobles). En cambio, si la `clave` contiene espacios, entonces debemos escribirla entre `""` como un string normal.

A continuación veremos un ejemplo:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  "favorite animes": ["Death note", "Monster"],
};
```

Como se puede observar en este ejemplo, las claves `name` y `age` son palabras simples que no contienen espacios, por lo que podemos omitimos el `""`. En cambio, como `favorite animes` contiene espacios, entonces es obligatorio el uso de `""`.

### Clave y valor provenientes de una constante o variable.

JavaScript nos provee de un `sugar sintax` muy conveniente cuando queremos utilizar una variable o constante dentro de un `objeto`. Esto se hace de la siguiente forma general:

```javascript
let variable = ALGUN_VALOR_PARA_VARIABLE;

const constante = ALGUN_VALOR_PARA_CONSTANTE;

const objeto = {
  /*...*/
  variable, // Equivale a "variable": variable
  /*...*/
  constante, // Equivale a "costante": constante
  /*...*/
};
```

Como se puede apreciar, lo que hará será utilizar el nombre de la variable o constante como `clave` y se le asociará el valor de dicha variable o constante como `valor`.

A continuación veremos un ejemplo de esto:

```javascript
const name = "Heber alturria";

const personalInfo = {
  name,
  age: 22,
};

console.log(personalInfo); // Imprime { name: 'Heber alturria', age: 22 }
```

`IMPORTANTE`: Hay que tener mucho cuidado al pasarle a un `objeto` valores de una constante o variable que sean de `tipo no primitivo`, ya que se pasarán por `referencia`, lo que va a generar que al hacer un cambio en el valor de dicha constante o variable entonces también se reflejará el cambio en el campo del objeto. A continuación veremos un ejemplo de esto:

```javascript
/* Código incorrecto ⛔ */

const animes = ["Death note", "Monster"];

const personalInfo = {
  name: "Heber",
  age: 22,
  animes,
};

console.log(personalInfo);
/* 
  Imprime

  { 
    name: 'Heber', 
    age: 22, 
    animes: [ 'Death note', 'Monster' ] 
  }

*/

animes.push("Evangelion");

console.log(personalInfo);
/* 
  Imprime

  { 
    name: 'Heber', 
    age: 22, 
    animes: [ 'Death note', 'Monster', 'Evangelion' ] 
  }

*/
```

Como se puede observar, al agregar un elemento a `animes` entonces el cambio también se ve reflejado en el objeto `personalInfo`, ya que tiene asignada la referencia del arreglo.

## Obtener valor en base a una clave.

Podemos obtener el `valor` asociado a una `clave` de las siguientes dos maneras:

1. `Utilizando el operador .`:

   Podemos utilizar el `.` de la siguiente forma general:

   ```javascript
   const valorAsociado = OBJETO.NOMBRE_CLAVE;
   ```

   Esta manera de hacerlo es la más común, pero solamente funciona cuando `NOMBRE_CLAVE` NO contiene espacios. Lo que hará será devolver el valor asociado al `NOMBRE_CLAVE` que hay en el `OBJETO`. Si `NOMBRE_CLAVE` NO existe en el `OBJETO`, entonces devolverá `undefined`.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     favAnimes: ["Death note", "Monster", "Steins;gate"],
   };

   console.log(personalInfo.name); // Imprime "Heber Alturria"

   console.log(personalInfo.age); // Imprime 22

   console.log(personalInfo.favAnimes); // Imprime ["Death note", "Monster", "Steins;gate"]

   console.log(personalInfo.dni); // Imprime undefined
   ```

2. `Utilizando el operador []`:

   Podemos utilizar el `[]` de la siguiente forma general:

   ```javascript
   const valorAsociado = OBJETO["NOMBRE_CLAVE"];
   ```

   En este caso, le pasamos la `clave` como un string entre los `[]`. Lo que hará será devolver el valor asociado al `"NOMBRE_CLAVE"` que hay en el `OBJETO`. Si `"NOMBRE_CLAVE"` NO existe en el `OBJETO`, entonces devolverá `undefined`.

   Esta manera de hacerlo es la indicada si la `clave` tiene espacios.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     "favorite animes": ["Death note", "Monster", "Steins;gate"],
   };

   console.log(personalInfo["name"]); // Imprime "Heber Alturria"

   console.log(personalInfo["age"]); // Imprime 22

   console.log(personalInfo["favorite animes"]); // Imprime ["Death note", "Monster", "Steins;gate"]

   console.log(personalInfo["dni"]); // Imprime undefined
   ```

## Actualizar valor de una clave.

Podemos actualizar el valor de una clave de las siguientes dos maneras:

1. `Utilizando el operador .`:

   Podemos utilizar el `.` de la siguiente forma general:

   ```javascript
   OBJETO.NOMBRE_CLAVE = NUEVO_VALOR;
   ```

   Esta manera de hacerlo es la más común, pero solamente funciona cuando `NOMBRE_CLAVE` NO contiene espacios. Lo que hará será asignarle el valor `NUEVO_VALOR` al `NOMBRE_CLAVE` que hay en el `OBJETO`.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     favAnimes: ["Death note", "Monster", "Steins;gate"],
   };

   personalInfo.name = "Hebercito";

   console.log(personalInfo.name); // Imprime "Hebercito"
   ```

2. `Utilizando el operador []`:

   Podemos utilizar el `[]` de la siguiente forma general:

   ```javascript
   OBJETO["NOMBRE_CLAVE"] = NUEVO_VALOR;
   ```

   En este caso, le pasamos la `clave` como un string entre los `[]`. Lo que hará será asignarle el valor `NUEVO_VALOR` al `NOMBRE_CLAVE` que hay en el `OBJETO`.

   Esta manera de hacerlo es la indicada si la `clave` tiene espacios.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     "favorite animes": ["Death note", "Monster", "Steins;gate"],
   };

   personalInfo["name"] = "Hebercito";

   console.log(personalInfo["name"]); // Imprime "Hebercito"
   ```
