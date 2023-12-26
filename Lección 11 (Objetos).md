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

## Agregar un nuevo par clave-valor en un objeto.

Podemos hacerlo de las siguientes dos maneras:

1. `Utilizando el operador .`:

   Podemos utilizar el `.` de la siguiente forma general:

   ```javascript
   OBJETO.NUEVA_CLAVE = NUEVO_VALOR;
   ```

   Esta manera de hacerlo es la más común, pero solamente funciona cuando `NUEVA_CLAVE` NO contiene espacios. Lo que hará será agregarle al `OBJETO` la `NUEVA_CLAVE` con el valor `NUEVO_VALOR`, siempre y cuando en `OBJETO` NO haya otra clave igual a `NUEVA_CLAVE` ya que sino solamente se actualizará su valor.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     favAnimes: ["Death note", "Monster", "Steins;gate"],
   };

   personalInfo.email = "heber.alturria@mi.unc.edu.ar";

   console.log(personalInfo);

   /* Imprime
   
      {
        name: "Heber Alturria",
        age: 22,
        favAnimes: ["Death note", "Monster", "Steins;gate"],
        email: "heber.alturria@mi.unc.edu.ar"
      }
   */
   ```

2. `Utilizando el operador []`:

   Podemos utilizar el `[]` de la siguiente forma general:

   ```javascript
   OBJETO["NUEVA_CLAVE"] = NUEVO_VALOR;
   ```

   En este caso, le pasamos la `clave` como un string entre los `[]`. Lo que hará será agregarle al `OBJETO` la `NUEVA_CLAVE` con el valor `NUEVO_VALOR`, siempre y cuando en `OBJETO` NO haya otra clave igual a `NUEVA_CLAVE` ya que sino solamente se actualizará su valor.

   Esta manera de hacerlo es la indicada si la `clave` queremos que tenga espacios.

   A continuación veremos un ejemplo:

   ```javascript
   const personalInfo = {
     name: "Heber Alturria",
     age: 22,
     "favorite animes": ["Death note", "Monster", "Steins;gate"],
   };

   personalInfo["email"] = "heber.alturria@mi.unc.edu.ar";

   console.log(personalInfo);

   /* Imprime
   
      {
        name: "Heber Alturria",
        age: 22,
        "favorite animes": ["Death note", "Monster", "Steins;gate"],
        email: "heber.alturria@mi.unc.edu.ar"
      }
   */
   ```

## Ver si un string es una clave en un objeto.

Podemos utilizar el operador `in` para verificar si un string es una `clave` de un `objeto`. Se utiliza de la siguiente forma general:

```javascript
const esClave = CLAVE_STRING in OBJETO;
```

Donde notemos que `CLAVE_STRING` será un string que queremos comprobar si una `clave` de `OBJETO`. Si se cumple que `CLAVE_STRING` es una clave de `OBJETO`, entonces el operador `in` devolverá `true`, en caso contrario devolverá `false`.

A continuación veremos un ejemplo de esto:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  "favorite animes": ["Death note", "Monster", "Steins;gate"],
};

console.log("name" in personalInfo); // Imprime true

console.log("favorite animes" in personalInfo); // Imprime true

console.log("jaja" in personalInfo); // Imprime false
```

## Copiando un objeto.

### Introducción al problema.

Notemos que los objetos al ser un `tipo no primitivo`, se asignan por `referencia`. Por consiguiente, si hacemos algo como:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
};

const persona2 = persona1; // Genera aliasing

persona1.name = "Gokú";

console.log(persona1); // Imprime { name: "Gokú", age: 22 }

console.log(persona2); // Imprime { name: "Gokú", age: 22 }
```

Y el error radica en que al hacer `const persona2 = persona1;` genera que persona2 apunte a la misma dirección de memoria que `persona1`. Y por eso al cambiar el valor de `name` en `persona1`, también se ve reflejado el cambio en `persona2`.

### Solución al problema.

Lo que debemos hacer para resolver el problema antes mencionado es hacer una `copia profunda` del `objeto original`. Esto se hace de la siguiente forma general:

```javascript
const objetoCopiado = JSON.parse(JSON.stringify(OBJETO_ORIGINAL));
```

Esto genera que se cree una copia en nueva memoria del `OBJETO_ORIGINAL`. Esta copia es `profunda`, lo que significa que también se guardarán en nueva memoria los `tipos no primitivos` que haya en `OBJETO_ORIGINAL`.

A continuación vamos a ver un ejemplo:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
};

const persona2 = JSON.parse(JSON.stringify(OBJETO_ORIGINAL));

persona1.name = "Gokú";

console.log(persona1); // Imprime { name: "Gokú", age: 22 }

console.log(persona2); // Imprime { name: "Heber", age: 22 }
```

## Comparar dos objeto.

Debido al problema de que los objetos se asignan por `referencia`, entonces comparar dos objetos no es tan trivial como hacer `OBJETO_1 === OBJETO_2` ya que solamente estaríamos comparando si sus posiciones de memoria son iguales.

### Solución sencilla pero que puede fallar.

La manera más sencilla de comparar dos objetos es convertirlos a un string y ver si esos strings son iguales. Eso se hace de la siguiente forma general:

```javascript
const sonIguales = JSON.stringify(OBJETO_1) === JSON.stringify(OBJETO_2);
```

`IMPORTANTE`: El problema que tiene esta manera de hacerlo es que `OBJETO_1` y `OBJETO_2` deberían tener sus claves y valores en el mismo orden para que se haga `true` la expresión, ya que los estamos convirtiendo en strings para compararlos.

A continuación veremos un ejemplo:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
};

const persona2 = {
  name: "Heber",
  age: 22,
};

const persona3 = {
  age: 22,
  name: "Heber",
};

const persona4 = {
  name: "Gokú",
  age: 22,
};

console.log(JSON.stringify(persona1) === JSON.stringify(persona2)); // Imprime true

console.log(JSON.stringify(persona1) === JSON.stringify(persona3)); // Imprime false, lo cuál es erróneo

console.log(JSON.stringify(persona1) === JSON.stringify(persona4)); // Imprime false
```

Notemos que `JSON.stringify(persona1) === JSON.stringify(persona3)` es `false` ya que el orden de las claves es distinta, pero notemos que los objetos son iguales ya que tienen los mismos clave-valor por lo que dicha expresión es `errónea`.

### Solución más compleja pero que mejor funciona.

La mejor solución sería utilizar una librería externa como `lodash` o crear una función para resolver este problema.

A continuación daré un ejemplo utilizando `lodash` para que veamos como se puede resolver este problema:

```javascript
// Importo lodash.
const _ = require("lodash");

/* Objetos de ejemplo */

const persona1 = {
  name: "Heber",
  age: 22,
  animes: ["Death Note", "Steins;gate"],
};

const persona2 = {
  name: "Heber",
  age: 22,
  animes: ["Death Note", "Steins;gate"],
};

// Cambio de orden, pero igual a las anteriores
const persona3 = {
  age: 22,
  animes: ["Death Note", "Steins;gate"],
  name: "Heber",
};

const persona4 = {
  name: "Gokú",
  age: 22,
};

console.log(_.isEqual(persona1, persona2)); // Imprime true

console.log(_.isEqual(persona1, persona3)); // Imprime true

console.log(_.isEqual(persona1, persona4)); // Imprime false
```

Notemos que en en este ejemplo, al comparar `persona1` y `persona3` nos da `true`, lo que significa que son iguales ya que tienen los mismos `clave-valor` sin importar si están en distinto orden.

