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

## Verificar si un objeto es vacío.

Podemos verificar si un objeto está vacío de la siguiente forma general:

```javascript
const isEmpty = JSON.stringify(OBJETO) === '{}';
```

Esta comparación será `true` solamente si `OBJETO` está vacío, en caso contrario devolverá `false`.

A continuación veremos un ejemplo sencillo:

```javascript
const persona1 = {};

const persona2 = {
  name: "Heber",
};

console.log(JSON.stringify(persona1) === '{}'); // Imprime true

console.log(JSON.stringify(persona2) === '{}'); // Imprime false
```

## Eliminando una clave-valor de un objeto.

La forma de eliminar un `clave-valor` de un objeto es hacerlo de la siguiente forma general:

```javascript
// Usando el operador "."
delete OBJETO.CLAVE_A_ELIMINAR;

// Usando el operador [].
delete OBJETO["CLAVE_A_ELIMINAR"];
```

Esto lo que hará será eliminar del `OBJETO` la clave llamada `CLAVE_A_ELIMINAR` y su valor asociado.

A continuación veremos un ejemplo de como esto funciona.

```javascript
const personalInfo = {
  name: "Heber",
  age: 22,
};

console.log(personalInfo); // Imprime { name: "Heber", age: 22 }

delete personalInfo.age;

console.log(personalInfo); // Imprime { name: "Heber" }
```

Como se puede observar, en este ejemplo eliminamos el campo `age`.

## Operador spread para objetos.

El `spread operator` puede ser utilizado para otros tipos de objetos. En este caso, nos enfocaremos exclusivamente en su uso para objetos.

El operador `spread` es utilizado para expandir los elementos de un `objeto`. Supongamos que tenemos un objeto llamado `OBJETO` que es igual a `{KEY_1: VALUE_1, KEY_2: VALUE_2, ..., KEY_N: VALUE_N}` entonces el operador `spread` se escribe como `...OBJETO` y da como resultando `KEY_1: VALUE_1, KEY_2: VALUE_2, ..., KEY_N: VALUE_N`, por lo que podemos pensar que el operador `spread` le quita los `{}` al `OBJETO` para dejar solamente los `clave-valor` que lo conforman.

A continuación veremos una serie de usos que podemos darle al operador `spread` para objetos:

### Modificar el valor de una clave en un Objeto.

Podemos utilizar el operador `spread` para modificar el valor de una clave en un objeto. Se hace de la siguiente forma general:

```javascript
/* Usar con precaución */

let OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyN: valueN,
};

OBJETO = { ...OBJETO, keyI: NEW_VALUE };
```

Esto lo que hará será asignarle a `OBJETO` una nueva posición de la memoria donde estarán todos `clave-valor` del `OBJETO` pero donde la clave `keyI` tendrá el valor de `NEW_VALUE`.

Hacer esto es muy costoso computacionalmente, por lo que recomiendo evitar hacerlo a toda costa. Lo expliqué por una cuestión de completitud.

A continuación veremos un ejemplo sencillo:

```javascript
let personalInfo = {
  name: "Heber Alturria",
  age: 22,
  favAnime: ["Death Note", "Monster", "Steins;gate"],
};

console.log(personalInfo);
/*
  Imprime:

  {
    name: "Heber Alturria",
    age: 22,
    favAnime: ["Death Note", "Monster", "Steins;gate"],
  }
*/

personalInfo = { ...personalInfo, name: "Hebercito" };

console.log(personalInfo);
/*
  Imprime:

  {
    name: "Hebercito",
    age: 22,
    favAnime: ["Death Note", "Monster", "Steins;gate"],
  }
*/
```

Como podemos observar en este ejemplo, utilizamos el operador `spread` para cambiar el valor de `name`.

### Clonar un objeto con valores primitivos.

Notemos que podemos hacer una copia de un objeto de la siguiente forma general:

```javascript
const copiaObjeto = { ...OBJETO_ORIGINAL };
```

Esto funcionará a la perfección si todos los `valores` del `OBJETO_ORIGINAL` son de `tipo primitivo`. Esto se debe a que estamos haciendo una `copia superficial` del objeto, lo que significa que si cambiamos el valor de una clave en `OBJETO_ORIGINAL`, entonces no se verá reflejado en `copiaObjeto`.

A continuación veremos un ejemplo:

```javascript
const personalInfo = {
  name: "Heber",
  age: 22,
};

const copiaObjeto = { ...personalInfo };

console.log(personalInfo); // Imprime { name: "Heber", age: 22 }

console.log(copiaObjeto); // Imprime { name: "Heber", age: 22 }
```

`IMPORTANTE`: ES importante notar que esto solamente funciona de manera correcta si todos los `valores` del `objeto` son de `tipo primitivo`. Sin embargo, como estamos haciendo una `copia superficial` del objeto, tendremos problemas de `aliasing` entre el objeto original y el objeto copiado cuando los valores sean de `tipo no primitivo`. A continuación veremos un ejemplo de este error:

```javascript
/* Código incorrecto ⛔ */
const personalInfo = {
  name: "Heber",
  age: 22,
  favAnime: ["Death Note", "Monster", "Steins;gate"],
};

const copiaObjeto = { ...personalInfo };

personalInfo.favAnime.push("Evangelion");

console.log(personalInfo);
/*
  Imprime:

  {
    name: "Heber Alturria",
    age: 22,
    favAnime: ["Death Note", "Monster", "Steins;gate", "Evangelion"],
  }
*/

console.log(copiaObjeto);
/*
  Imprime:

  {
    name: "Heber Alturria",
    age: 22,
    favAnime: ["Death Note", "Monster", "Steins;gate", "Evangelion"],
  }
*/
```

Notemos que tenemos un `aliasing` en el arreglo asociado a la clave `favAnime`.

### Concatenar dos o más objetos.

También podemos concatenar dos o más objetos de la siguiente forma general:

```javascript
const objetoResultante = {...OBJETO_1, ...OBJETO_2, /*...*/, ...OBJETO_N};
```

Esto funcionará a la perfección si todos los `objetos` a concatenar tiene `valores de tipo primitivo`. En caso de que algún objeto tengo valores de tipo `no primitivo`, tendremos problemas de `aliasing` como hemos visto previamente.

También si hay dos o más objetos que contienen la misma `clave`, entonces el `Objeto resultante` tendrá esa misma `clave` pero el `valor asociado` será el mismo valor asociado que tiene dicha clave en el último objeto en ser clonado (el objeto de más a la derecha).

A continuación veremos un ejemplo:

```javascript
const birthdayInfo = {
  day: 26,
  month: "September",
  year: 2001,
};

const nameAndAge = {
  name: "Heber Alturria",
  age: 22,
};

const personalInfo = { ...nameAndAge, ...birthdayInfo };

console.log(personalInfo);
/*
  Imprime:

  {
    name: "Heber Alturria",
    age: 22,
    day: 26,
    month: "September",
    year: 2001,
  }
*/
```

## Destructuring assignment de Objetos.

Podemos destructurar un objeto para asignarle sus valores a `variables o constantes` de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI: NOMBRE_CONSTANTE_I, keyJ: NOMBRE_VARIABLE_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const NOMBRE_CONSTANTE_I = OBJETO.keyI, NOMBRE_CONSTANTE_J = OBJETO.keyJ, /* Pueden haber más asignaciones */;



// Destructuring assignment con variables.
let {keyI: NOMBRE_VARIABLE_I, keyJ: NOMBRE_VARIABLE_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const NOMBRE_VARIABLE_I = OBJETO.keyI, NOMBRE_VARIABLE_J = OBJETO.keyJ, /* Pueden haber más asignaciones */;
```

Básicamente, lo que se estamos haciendo es crear variables o objetos que tendrán asignados los valores correspondientes a una clave del `OBJETO`, pero con una sintáxis mucho más cómoda.

`IMPORETANTE`: Es importante notar que como son objetos y la asignación se hace por la `clave`, entonces el orden en que lo escribamos en la asignación no es importante.

A continuación veremos un ejemplo sencillo:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  birthday: "26 de Septiembre del 2001",
};

const { name: myName, age: myAge } = personalInfo;

console.log(myName); // Imprime "Heber Alturria"

console.log(myAge); // Imprime 22
```

### Manera más utilizada de hacer Destructuring assignment de Objetos.

Esta manera es mucho más utilizada que la anterior debido a que es más corta, y se hace de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI, keyJ, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const keyI = OBJETO.keyI, keyJ = OBJETO.keyJ, /* Pueden haber más asignaciones */;



// Destructuring assignment con variables.
let {keyI, keyJ, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const keyI = OBJETO.keyI, keyJ = OBJETO.keyJ, /* Pueden haber más asignaciones */;
```

Como se puede observar, lo que hacemos es crear una variable o constante (según necesitemos) que se va a llamar igual que la `clave`. Esta manera es la más usada, ya que requiere menos código.

A continuación veremos un ejemplo sencillo:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  birthday: "26 de Septiembre del 2001",
};

const { name, age } = personalInfo;

console.log(name); // Imprime "Heber Alturria"

console.log(age); // Imprime 22
```

### Destructuring assignment de Objetos con valor por defecto.

Si una `clave buscada` no está en un `objeto`, entonces la variable o constante a crear tendrá el valor `undefined`. Podemos asignarle un valor por defecto a la varible o constante creada en caso de que la `clave buscada` NO esté en el `objeto`. Esto se hace de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI: NOMBRE_CONSTANTE_I = VALOR_POR_DEFECTO_I, keyJ: NOMBRE_VARIABLE_J = VALOR_POR_DEFECTO_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const NOMBRE_CONSTANTE_I = OBJETO.keyI ?? VALOR_POR_DEFECTO_I, NOMBRE_CONSTANTE_J = OBJETO.keyJ ?? VALOR_POR_DEFECTO_J, /* Pueden haber más asignaciones */;



// Destructuring assignment con variables.
let {keyI: NOMBRE_VARIABLE_I = VALOR_POR_DEFECTO_I, keyJ: NOMBRE_VARIABLE_J = VALOR_POR_DEFECTO_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const NOMBRE_VARIABLE_I = OBJETO.keyI ?? VALOR_POR_DEFECTO_I, NOMBRE_VARIABLE_J = OBJETO.keyJ ?? VALOR_POR_DEFECTO_J, /* Pueden haber más asignaciones */;
```

O también si usamos la última sintáxis vista, esto se hace de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI = VALOR_POR_DEFECTO_I, keyJ = VALOR_POR_DEFECTO_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const keyI = OBJETO.keyI ?? VALOR_POR_DEFECTO_I, keyJ = OBJETO.keyJ ?? VALOR_POR_DEFECTO_J, /* Pueden haber más asignaciones */;


// Destructuring assignment con variables.
let {keyI = VALOR_POR_DEFECTO_I, keyJ = VALOR_POR_DEFECTO_J, /* Pueden haber más claves */} = OBJETO;

// Y lo de arriba es equivalente a:
const keyI = OBJETO.keyI ?? VALOR_POR_DEFECTO_I, keyJ = OBJETO.keyJ ?? VALOR_POR_DEFECTO_J, /* Pueden haber más asignaciones */;
```

A continuación veremos un ejemplo sencillo:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  birthday: "26 de Septiembre del 2001",
};

const { name = "Hebercito", age = 100, dni = 43690658 } = personalInfo;

console.log(name); // Imprime "Heber Alturria"

console.log(age); // Imprime 22

console.log(dni); // Imprime 43690658
```

### Usando el operador spread al hacer Destructuring assignment de Objetos.

También podemos guardar el resto de `claves-valores` que no hayan matcheado con ninguna clave de la asignación destructurada. Esto se hace de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI: NOMBRE_CONSTANTE_I, keyJ: NOMBRE_VARIABLE_J , /* Pueden haber más claves */, ...RESTO_OBJETO} = OBJETO;


// Destructuring assignment con variables.
let {keyI: NOMBRE_VARIABLE_I, keyJ: NOMBRE_VARIABLE_J, /* Pueden haber más claves */, ...RESTO_OBJETO} = OBJETO;
```

O también si usamos la última sintáxis vista, esto se hace de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyI: valueI,
  /*...*/
  keyJ: valueJ,
  /*...*/
  keyN: valueN,
};

// Destructuring assignment con constantes.
const {keyI, keyJ , /* Pueden haber más claves */, ...RESTO_OBJETO} = OBJETO;


// Destructuring assignment con variables.
let {keyI, keyJ, /* Pueden haber más claves */, ...RESTO_OBJETO} = OBJETO;
```

En cualquiera de los casos, lo que hará el operador `spread` es hacer que `RESTO_OBJETO` sea un objeto que contenga todos los `clave-valor` que no han sido utilizados para hacer la asignación. `siempre deber ir al final`.

A continuación veremos un ejemplo sencillo:

```javascript
const personalInfo = {
  name: "Heber Alturria",
  age: 22,
  birthday: "26 de Septiembre del 2001",
};

const { birthday, ...resto } = personalInfo;

console.log(name); // Imprime "26 de Septiembre del 2001"

console.log(resto); // Imprime {name: "Heber Alturria", age: 22}
```

### Destructuring assignment de Objetos en argumentos de una función.

Podemos utilizar todas las técnicas antes vistas para destructurar un objeto si se le es pasado como argumento a una función. Esto se hace de la siguiente forma general:

```javascript
function nombreFuncion({keyI, /*...*/, keyJ}) {

  /* Cuerpo de la función */

  // Return de la función.
}


// Y lo de arriba es equivalente a escribir:
function nombreFuncion(objeto) {
  const {keyI, /*...*/, keyJ} = objeto;

  /* Cuerpo de la función */

  // Return de la función.
}
```

Pero notemos que si alguna clave no existe en el `objeto` que luego le pasaremos como argumento, entonces se la asignará a la variable el valor de `undefined`. Podemos asignarle valores por defecto de la siguiente forma general:

```javascript
function nombreFuncion({keyI = VALOR_DEFECTO_I, /*...*/, keyJ = VALOR_DEFECTO_J}) {

  /* Cuerpo de la función */

  // Return de la función.
}


// Y lo de arriba es equivalente a escribir:
function nombreFuncion(objeto) {
  const {keyI = VALOR_DEFECTO_I, /*...*/, keyJ = VALOR_DEFECTO_J} = objeto;

  /* Cuerpo de la función */

  // Return de la función.
}
```

`Importante`: Cabe mencionar que esta solución funcionará si a la función se le pasa un `objeto` como argumento, en caso contrario, si la función recibe como argumento `null` o `undefined` entonces el código se romperá. Esto quiere decir que si llamamos a la función de la siguiente manera: `nombreFunction()`, entonces el código se rompería. Si quisieramos que la función funcione por más que se le pase como argumento un `null` o un `undefined`, entonces deberíamos hacer lo siguiente:

```javascript
function nombreFuncion({keyI = VALOR_DEFECTO_I, /*...*/, keyJ = VALOR_DEFECTO_J} = {}) {

  /* Cuerpo de la función */

  // Return de la función.
}
```

De esa manera, al llamar a la función como `nombreFuncion()`, entonces NO se romperá el código debido a que la función recibirá como argumento un objeto vacío. Esto genera que, al destructurar el objeto, se le asignarán los valores por defecto. Es decir que ahora llamar a la función de la siguiente manera: `nombreFuncion()`, es equivalente a llamarla de la siguiente manera: `nombreFuncion({})`.

A continuación veremos un ejemplo sencillo de como esto se utiliza:

```javascript
function sumar({ number1 = 0, number2 = 0, number3 = 0 } = {}) {
  return number1 + number2 + number3;
}

const objeto1 = {
  number1: 20,
  number2: 40,
  number3: 100,
};

const objeto2 = {
  number1: 20,
  number3: 10,
};

const objeto3 = {
  random: "jajaja",
};

console.log(sumar(objeto1)); // Imprime 160

console.log(sumar(objeto2)); // Imprime 30

console.log(sumar(objeto3)); // Imprime 0

console.log(sumar()); // Imprime 0
```

#### Ejemplo un poco más complejo.

Notemos que entender el concepto anterior es muy importante, ya que es una técnica muy utilizada en muchos frameworks como por ejemplo en `React`.

A continuación veremos un ejemplo sencillo de `React` en donde podamos apreciar esta técnica en uso:

```javascript
// Uso el destructuring de objetos para destructurar el prop.
const ShowPersonalInfo = ({name = "", age: -1}) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
};

// Renderiza todos los componentes.
function App() {
  return (
    <>
      <ShowPersonalInfo name="Heber Alturria" age={22} />
      <ShowPersonalInfo name="Natasha Ivancich" age={23} />
    </>
  );
}
```

No es necesario que se entienda lo que hace este código, sino que lo importante es ver que podemos utilizarlo a la hora de utilizar otros `frameworks`.

## Copiando un objeto.

### Entendiendo el problema.

Si hacemos una asignación directa de un `objeto` a otro, entonces lo que estamos haciendo es que ambos objetos apunten a la misma dirección de memoria, lo que significa que si modificamos un objeto entonces el otro también verá modificado. Esto se conoce como `aliasing` y es debido a que los `objetos` se asignan por `referencia`. 

A continuación veremos un ejemplo de esto:

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

### Copia superficial de un objeto.

Para evitar un `aliasing` entre dos objetos, entonces lo que podemos hacer es hacer una `copia superficial` de un objeto. Esto funciona perfectamente si todos los `valores` del `objeto` son de `tipo primitivo`. La manera más común de hacerlo es utilizando el `operador spread` y se hace de la siguiente forma general:

```javascript
const COPIA_OBJETO = { ...OBJETO_ORIGINAL };
```

A continuación veremos un ejemplo de esto:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
};

const persona2 = { ...persona1 }; // Copia superficial

persona1.name = "Gokú";

console.log(persona1); // Imprime { name: "Gokú", age: 22 }

console.log(persona2); // Imprime { name: "Heber", age: 22 }
```

Como podemos observar, al cambiar el valor de `name` en `persona1`, no se ve reflejado en `persona2`.

### Copia profunda de un objeto.

Aquí tienes una versión adaptada para objetos:

---

Si queremos hacer una copia de un `objeto` que contenga valores que `no sean de tipo primitivo` (como otros objetos o arrays), es necesario hacer una `copia profunda` para evitar problemas de `aliasing`. Las copias profundas son más complicadas de realizar y son más costosas en términos de rendimiento que las `copias superficiales`. Sin embargo, son esenciales para evitar el aliasing en objetos que contienen valores no primitivas. 

La idea de las `copias profundas` es duplicar no solo el objeto en sí, sino también cada uno de valores tanto primitivos como no primitivos que contiene. Esto significa que cualquier cambio que se haga a los elementos de la copia no afectará a los elementos del original y viceversa, eliminando el problema del aliasing.

Hay dos maneras muy conocidas de hacer `copias profundas` de un `array`:

#### Usando JSON.stringify() y JSON.parse()

La manera más sencilla de hacer una `copia profunda` de un `objeto` es convertirlo a un `string` con `JSON.stringify()` y luego convertirlo de nuevo a un `objeto` con `JSON.parse()`. Esto se hace de la siguiente forma general:

```javascript
const COPIA_OBJETO = JSON.parse(JSON.stringify(OBJETO_ORIGINAL));
```

Donde `OBJETO_ORIGINAL` es el objeto que queremos copiar y `COPIA_OBJETO` es la copia profunda del objeto original. Y esto funcionará perfectamente para cualquier tipo de objeto que sea un JSON válido.

A continuación veremos un ejemplo de esto:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
  favAnime: ["Death Note", "Monster", "Steins;gate"],
};

const persona2 = JSON.parse(JSON.stringify(persona1)); // Copia profunda

persona1.favAnime.push("Evangelion");

console.log(persona1); // Imprime { name: "Heber", age: 22, favAnime: ["Death Note", "Monster", "Steins;gate", "Evangelion"] }

console.log(persona2); // Imprime { name: "Heber", age: 22, favAnime: ["Death Note", "Monster", "Steins;gate"] }
```

#### Usando la función structuredClone(). La mejor solución.

La otra manera de hacer una `copia profunda` de un `objeto` es utilizando la función `structuredClone()`. Esta función se utiliza de la siguiente forma general:

```javascript
const COPIA_OBJETO = structuredClone(OBJETO_ORIGINAL);
```

Lo que estamos haciendo aquí es simplemente llamando a la función `structuredClone()` y pasándole como argumento el `OBJETO_ORIGINAL` que queremos clonar. Esto va a hacer una `copia profunda` de `OBJETO_ORIGINAL` y lo va a retornar. Además, tiene la ventaja de que puede realizar copias profundas de tantos niveles como sea necesario.

Sin embargo, esta función tiene algunas limitaciones, como que `NO puede clonar funciones ni métodos` y que `NO puede clonar elementos DOM`.

`Importante`: Esta solución es la mejor para hacer `copias profundas` de `objetos` que tengan elementos que no sean de `tipo primitivo`. Además, es mucho más eficiente que la solución anterior. Recomiendo utilizar esta solución siempre que sea posible.

A continuación veremos un ejemplo de esto:

```javascript
const persona1 = {
  name: "Heber",
  age: 22,
  favAnime: ["Death Note", "Monster", "Steins;gate"],
};

const persona2 = structuredClone(persona1); // Copia profunda

persona1.favAnime.push("Evangelion");

console.log(persona1); // Imprime { name: "Heber", age: 22, favAnime: ["Death Note", "Monster", "Steins;gate", "Evangelion"] }

console.log(persona2); // Imprime { name: "Heber", age: 22, favAnime: ["Death Note", "Monster", "Steins;gate"] }
```

## Métodos importantes sobre objetos.

A continuación veremos un par de métodos interesantes que podemos utilizar cuando trabajemos con objetos.

### El método Object.keys().

Este método se utiliza de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyN: valueN,
};

const arrayOfKeys = Object.keys(OBJETO);
/* 
  Y vamos a tener que:

  arrayOfKeys = ["key1", "key2", ..., "keyN"]
*/
```

Este método lo que hará será devolver un `arreglo de claves del OBJETO`, por lo que será un arreglo de strings.

A continuación veremos un ejemplo de esto:

```javascript
const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

const movieKeys = Object.keys(movie);

console.log(movieKeys); // Imprime ["title", "director", "releaseYear"]
```

### El método Object.values().

Este método se utiliza de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyN: valueN,
};

const arrayOfValues = Object.values(OBJETO);
/* 
  Y vamos a tener que:

  arrayOfValues = [value1, value2, ..., valueN]
*/
```

Este método lo que hará será devolver un `arreglo de valores del OBJETO`, por lo que será un arreglo de diferentes tipos.

A continuación veremos un ejemplo de esto:

```javascript
const student = {
  name: "Heidi Kennedy",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"],
};

const studentValues = Object.values(student);

console.log(studentValues);
// Imprime [ "Heidi Kennedy", 21, "A", [ "Math", "Science", "English" ] ]
```

### El método Object.entries().

Este método se utiliza de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyN: valueN,
};

const arrayOfEntries = Object.entries(OBJETO);

/* 
  Y vamos a tener que:

  arrayOfEntries = [
    [ "key1", value1 ],
    [ "key2", value2 ],
    ...
    [ "keyN", valueN ]
  ]
*/
```

Este método lo que hará será devolver un `arreglo de clave-valor del OBJETO`, por lo que será un arreglo de arreglos de dos dimensiones (clave y valor).

A continuación veremos un ejemplo de esto:

```javascript
const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

const movieEntries = Object.entries(movie);

console.log(movieEntries);
// Imprime: [ [ "title", "The Matrix" ], [ "director", "Lana Wachowski" ], [ "releaseYear", 1999 ] ]
```

### El método Object.freeze().

Este método se utiliza de la siguiente forma general:

```javascript
const OBJETO = {
  key1: value1,
  key2: value2,
  /*...*/
  keyN: valueN,
};

Object.freeze(OBJETO); // Congela el objeto
```

Este método lo que hará será `congelar` el `OBJETO`, lo que significa que no se podrá modificar ni añadir ni eliminar `claves` ni `valores` del `OBJETO`. Además, tampoco se podrá modificar los `valores` de las `claves` del `OBJETO`. Este método es muy útil para evitar que un `objeto` sea modificado por error.

Cabe mencionar que este método NO es profundo, lo que significa que si el `OBJETO` tiene `valores` que no sean de `tipo primitivo`, entonces estos `valores` si se podrán modificar. 

A continuación veremos un ejemplo de esto:

```javascript
const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

Object.freeze(movie);

movie.title = "The Matrix Reloaded"; // No se va a modificar

console.log(movie); // Imprime { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 }
```

#### Comportamiento de Object.freeze() con valores no primitivos.

Como mencioné anteriormente, el método `Object.freeze()` no es profundo, lo que significa que si el `OBJETO` tiene `valores` que no sean de `tipo primitivo`, entonces estos `valores` si se podrán modificar. A continuación veremos un ejemplo de esto:

```javascript
const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
  cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne"],
};

Object.freeze(movie);

movie.cast.push("Hugo Weaving");

movie.title = "The Matrix Reloaded"; // No se va a modificar

console.log(movie); // Imprime { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999, cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne", "Hugo Weaving"] }
```

Como podemos observar, el arreglo asociado a la clave `cast` se pudo modificar, a pesar de que el objeto `movie` esté congelado. Sin embargo, el valor de la clave `title` no se pudo modificar ya que es de tipo primitivo.

#### Comportamiento de Object.freeze() en strict mode.

Si estamos en `strict mode`, entonces el método `Object.freeze()` lanzará un error si se intenta modificar el `OBJETO` o sus `valores`. A continuación veremos un ejemplo de esto:

```javascript
"use strict";

const movie = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

Object.freeze(movie);

try {
  movie.title = "The Matrix Reloaded"; // Lanza un error
} catch (error) {
  console.error(error.message); // Imprime "Cannot assign to read only property 'title' of object '#<Object>'"
}
```

### El método Object.groupBy().

El método `Object.groupBy()` se utiliza para agrupar los `objetos` pertenecientes a un `array de objetos` según una `clave` en común. Este método toma un `array de objetos` y una `función de agrupamiento` (callback), y devuelve un `objeto` cuyas `key` son los distintos grupos formados con base en la clave devuelta por la función. Este método se utiliza de la siguiente forma general:

```javascript
const ARRAY_OBJETOS = [
  { key1: value1, key2: value2, /*...*/ },
  { key1: value3, key2: value4, /*...*/ },
  /*...*/
  { key1: valueN, key2: valueM, /*...*/ },
];

const OBJETO_AGRUPADO = Object.groupBy(ARRAY_OBJETOS, (objeto) => {
  /* Cuerpo de la función callback */

  return VALOR_KEY; // Debe retornar el valor de la key por la que se va a agrupar el objeto.
});
```

Donde notemos que el método `Object.groupBy` toma como argumento: el `ARRAY_OBJETOS` que es un `array de objetos` cuyos objetos son los que deseamos agrupar y una `función callback` que se va a encargar de devolver el valor de la key por la que se va a agrupar cada objeto. Y dicho método va a devolver un `OBJETO_AGRUPADO` que va a ser un objeto cuyas `keys` representan los diferentes grupos, y cada key contiene un array con los objetos que comparten esa misma clave.

Básicamente, lo que hace este método es agrupar los objetos de un `array` según una `clave` en común. El funcionamiento de este método sería el siguiente:

1. Se toma un `array de objetos` y una `función de agrupamiento` (callback) que devuelve la clave por la que se agruparán los objetos.
2. `Object.groupBy()` recorre cada objeto en el array y ejecuta la `función callback`, obteniendo una clave (key) para cada objeto.
3. Si la clave no existe en el objeto agrupado, se crea una nueva clave con un array vacío. El objeto se añade al array correspondiente a esa clave.
4. Devuelve un objeto donde las keys son las claves generadas por el callback y los valores son arrays que contienen los objetos agrupados.

A continuación veremos un ejemplo de uso de este método:

```javascript
const movies = [
  { title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
  { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
  { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 },
  { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 },
];

const moviesByDirector = Object.groupBy(movies, (movie) => movie.director);

console.log(moviesByDirector);

/*
  Imprime:

  {
    "Lana Wachowski": [
      { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 }
    ],
    "Christopher Nolan": [
      { title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
      { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
      { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 }
    ]
  }
*/
```

En este ejemplo, estamos agrupando los objetos del array `movies` según la clave `director`. Como resultado, obtenemos un objeto donde las keys son los nombres de los directores y los valores son arrays que contienen los objetos agrupados por director.

<br />

Otro ejemplo interesante sería el siguiente:

```javascript
const students = [
  { name: "Alice", grade: 10 },
  { name: "Bob", grade: 9 },
  { name: "Charlie", grade: 6 },
  { name: "David", grade: 2 },
  { name: "Eve", grade: 1 },
];

const studentsByStatus = Object.groupBy(students, (student) => {
  return student.grade >= 6 ? "pass" : "fail";
});

console.log(studentsByStatus);

/*
  Imprime:

  {
    "pass": [
      { name: "Alice", grade: 10 },
      { name: "Bob", grade: 9 },
      { name: "Charlie", grade: 6 }
    ],
    "fail": [
      { name: "David", grade: 2 },
      { name: "Eve", grade: 1 }
    ]
  }
*/
```

En este caso, estamos agrupando los objetos del array `students` según si el estudiante aprobó o reprobó. Los estudiantes con una calificación de 6 o más se agrupan en la categoría "pass", mientras que los estudiantes con una calificación inferior a 6 se agrupan en la categoría "fail".

#### Implementación equivalente de Object.groupBy().

Podemos implementar el mismo funcionamiento que `Object.groupBy()` utilizando el método `reduce` de arreglos de la siguiente forma general:

```javascript
const ARRAY_OBJETOS = [
  { key1: value1, key2: value2, /*...*/ },
  { key1: value3, key2: value4, /*...*/ },
  /*...*/
  { key1: valueN, key2: valueM, /*...*/ },
];

const OBJETO_AGRUPADO = ARRAY_OBJETOS.reduce((acumulador, objeto) => {
  const key = VALOR_KEY; // Se obtiene el valor de la key por la que se va a agrupar el objeto.

  if (!acumulador[key]) {
    acumulador[key] = [];
  }

  acumulador[key].push(objeto);

  return acumulador;
}, {});
```

Donde notemos que estamos utilizando el método `reduce` de los arreglos para agrupar los objetos de un `array` según una `clave` en común. Y esto es equivalente a utilizar el método `Object.groupBy()`.

Personalmente, ver esta implementación equivalente me dá un mejor entendimiento de cómo funciona el método `Object.groupBy()`.

A continuación veremos un ejemplo de esto:

```javascript
const movies = [
  { title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
  { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
  { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 },
  { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 },
];

const moviesByDirector = movies.reduce((acc, movie) => {
  if (!acc[movie.director]) {
    acc[movie.director] = [];
  }

  acc[movie.director].push(movie);

  return acc;
}, {});

console.log(moviesByDirector);

/*
  Imprime:

  {
    "Lana Wachowski": [
      { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 }
    ],
    "Christopher Nolan": [
      { title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
      { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
      { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 }
    ]
  }
*/
```

#### Hacer copias profundas de los objetos agrupados.

Puede ser útil hacer copias profundas de los objetos agrupados para evitar problemas de `aliasing`. Para hacer esto, podemos utilizar la función `structuredClone()` que vimos anteriormente. Podemos lograrlo de la siguiente forma general:

```javascript
const ARRAY_OBJETOS = [
  { key1: value1, key2: value2, /*...*/ },
  { key1: value3, key2: value4, /*...*/ },
  /*...*/
  { key1: valueN, key2: valueM, /*...*/ },
];

const DEEP_COPY_OBJETO_AGRUPADO = structuredClone(Object.groupBy(ARRAY_OBJETOS, (objeto) => {
  /* Cuerpo de la función callback */

  return VALOR_KEY; // Debe retornar el valor de la key por la que se va a agrupar el objeto.
}));
```

De esta manera, estamos haciendo una `copia profunda` de los objetos agrupados.

A continuación veremos un ejemplo de esto:

```javascript
const movies = [
  { title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
  { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
  { title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999 },
  { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 },
];

const moviesByDirector = Object.groupBy(movies, (movie) => movie.director);

const deepCopyMoviesByDirector = structuredClone(moviesByDirector);

console.log(movies[2].title); // Imprime "The Matrix"

console.log(moviesByDirector["Lana Wachowski"][0].title); // Imprime "The Matrix"

console.log(deepCopyMoviesByDirector["Lana Wachowski"][0].title); // Imprime "The Matrix"


/* Modifico el titulo de la pelicula "The Matrix" por "Dragon Ball Z" */

moviesByDirector["Lana Wachowski"][0].title = "Dragon Ball Z";

console.log(movies[2].title); // Imprime "Dragon Ball Z"

console.log(moviesByDirector["Lana Wachowski"][0].title); // Imprime " Dragon Ball Z"

console.log(deepCopyMoviesByDirector["Lana Wachowski"][0].title); // Imprime "The Matrix"
```

Como podemos observar, al modificar el título de la película "The Matrix" en el objeto `moviesByDirector`, también se ve reflejado en el objeto `movies`. Sin embargo, al hacer una copia profunda de los objetos agrupados, el cambio no se ve reflejado en la copia profunda.