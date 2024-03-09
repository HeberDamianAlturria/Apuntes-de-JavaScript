# Modulos.

Este concepto está intrínsecamente ligado tanto a `JavaScript` como al `entorno de ejecución que utilicemos` (como puede ser `NodeJS` o `Bun`). Para esta lección he decidido abstraerme por completo del entorno de ejecución y solamente me enfocaré en los `estándares` existentes para trabajar con `modulos` en `JavaScript`.

## ¿Qué son los módulos y cuál es su importancia?

Un módulo es un archivo de JavaScript que encapsula `funciones`, `clases`, `variables` y/o `constantes` relacionadas, las cuales pueden ser exportadas y utilizadas en otras partes de nuestra aplicación. Un módulo permite ocultar los detalles de la implementación, lo que ayuda a la `encapsulación` del código. Por lo tanto, al importar funcionalidades de un módulo, los detalles internos quedan abstractos, lo que simplifica su uso pues solamente debemos saber qué hace la funcionalidad importada e ignoraremos el cómo lo hace.

Cuando creamos un proyecto, será de vital importancia dividirlo en distintos módulos cuyos propósitos sean específicos y concretos. Las ventajas de hacer esto son las siguientes:

1. `Reutilización de código`: ya que podemos exportar una funcionalidad que hayamos creado en un módulo y luego importarla y utilizarla todas las veces que necesitemos a lo largo de la aplicación, entonces podemos asumir que usar módulos ayuda a que el código sea reutilizable.

2. `Facilita la organización`: ya que podemos identificar fácilmente en el código a qué módulo pertenece cada funcionalidad.

3. `Facilita la mantenibilidad del código`: ya que una funcionalidad estará encapsulada en un módulo y también ésta será utilizada múltiples veces a lo largo del programa, entonces si mejoramos o corregimos algun error en dicha funcionalidad, los cambios se verán reflejados en todas las partes que la usan. Ojo que esto es un arma de doble filo, ya que mal utilizado puede causar un desastre.

## El estándar ECMAScript.

El estándar `ECMAScript modules` (también conocido como `ES modules`) es uno de los estándares más modernos para trabajar con módulos. Introdujo las siguientes palabras claves que permiten un fácil uso de los módulos:

| Declaración | Descripción                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `export`    | Pone los datos indicados (variables, funciones, clases...) a disposición de otros ficheros                   |
| `import`    | Incorpora datos (variables, funciones, clases...) desde otros ficheros al código actual de manera `estática` |
| `import()`  | Incorpora datos (variables, funciones, clases...) desde otros ficheros al código actual de manera `dinámica` |

Cabe mencionar que muchas veces a los ficheros que siguen el estándar `ES modules` tienden a utilizar la extensión `.mjs` en lugar de utilizar la extensión `.js`.

### Export.

Por defecto, los ficheros no van a `exportar` nada. Para poder exportar uno o más datos que estén en un fichero (como pueden ser `variables`, `constantes`, `funciones` o `clases`) debemos utilizar de manera explícita la palabra clave `export`. Lo que hará `export` será agregar el dato o los datos que querramos exportar a un `objeto` especial llamado `módulo de exportación`.

Existen varias maneras de exportar datos mediante la palabra clave `export`. A continuación veremos algunas de las maneras más utilizadas:

<br>

<b>Declarar y exportar:</b>

Podemos simplemente añadir la palabra clave `export` a la `izquierda de la declaración del elemento Javascript que deseamos exportar`, ya sea una variable, una constante, una función o una clase. Esto se hace de la siguiente forma general:

```javascript
/* Forma general para constantes: */
export const nombreConstante = VALOR_DE_LA_CONSTANTE;

/* Forma general para variables: */
export let nombreVariable = VALOR_DE_LA_VARIABLE;


/* Forma general para funciones: */

// Usando arrow functions:
export const nombreArrowFunction = (/* Parámetros (opcional) */) => {
  
  /* Cuerpo de la función */

};

// Usando la palabra function:
export function nombreFuncion(/* Parámetros (opcional) */) {

  /* Cuerpo de la función */

}


/* Forma general para clases: */
export class NombreDeLaClase {

  /* Cuerpo de la clase. */

}
```

Y lo que hará el `export` será agregar lo datos que deseamos exportar al `módulo de exportación`.

`Dato importante:` Hay que tener cuidado al exportar datos `mutables`, ya que al exportar un dato `mutable` y luego modificarlo, el valor `importado` será el valor que tenga dicho dato en `el momento de la importación`, NO el valor que tenía en el momento de la exportación. Esto significa que si hago algo como:

```javascript
export let nombreVariable = VALOR_DE_LA_VARIABLE;

/*...*/

nombreVariable = OTRO_VALOR;
```

Entonces, al `importar` el `nombreVariable` en otra fichero, el valor que tendrá será el de `OTRO_VALOR`. Por lo tanto, este compartamiento puede causar errores innesperados.

<br>

<b>Exportación post-declaración:</b>

También podemos exportar las `variables`, las `constantes`, las `funciones` y/o las `clases` al final del fichero de la siguiente forma general:

```javascript
/* Definimos constantes: */
const nombreConstante = VALOR_DE_LA_CONSTANTE;

/* Definimos variables: */
let nombreVariable = VALOR_DE_LA_VARIABLE;


/* Definimos funciones: */

// Usando arrow functions:
const nombreArrowFunction = (/* Parámetros (opcional) */) => {
  
  /* Cuerpo de la función */

};

// Usando la palabra function:
function nombreFuncion(/* Parámetros (opcional) */) {

  /* Cuerpo de la función */

}


/* Definimos clases: */
class NombreDeLaClase {

  /* Cuerpo de la clase. */

}

/* Exportamos lo que necesitamos al final del fichero */
export {
  nombreConstante,
  nombreVariable,
  nombreArrowFunction,
  nombreFuncion,
  NombreDeLaClase,
};
```

Y lo que hará el `export` será agregar lo datos que deseamos exportar al `módulo de exportación`.

`Renombrando un elemento exportado:` También podemos utilizar el operador `as` para renombrar un elementos que estamos exportando. Esto se hace de la siguiente forma general:

```javascript
/* Definimos constantes: */
const nombreConstante = VALOR_DE_LA_CONSTANTE;

/* Definimos variables: */
let nombreVariable = VALOR_DE_LA_VARIABLE;


/* Definimos funciones: */

// Usando arrow functions:
const nombreArrowFunction = (/* Parámetros (opcional) */) => {
  
  /* Cuerpo de la función */

};

// Usando la palabra function:
function nombreFuncion(/* Parámetros (opcional) */) {

  /* Cuerpo de la función */

}


/* Definimos clases: */
class NombreDeLaClase {

  /* Cuerpo de la clase. */

}

/* Exportamos lo que necesitamos al final del fichero */
export {
  nombreConstante as otroNombreConstante,
  nombreVariable as otroNombreVariable,
  nombreArrowFunction as otroNombreArrowFunction,
  nombreFuncion as otroNombreFuncion,
  NombreDeLaClase as OtroNombreDeLaClase,
};
```

No es necesario usar `as` con todos los elementos a exportar, puede que lo usemos solamente en algunos de los elementos a exportar.

Personalmente, preferiría evitar el uso de `as`, pero lo menciono por una cuestión de completitud.

<br>

<b>Exportación por defecto:</b>

Al `exportar` elementos, se crea un `módulo de exportación`, el cuál es un `objeto` donde las `propiedades` son los nombres de los elementos que exportamos (`constantes`, `variables`, `funciones` y/o `clases`). Existe una modalidad de exportación diferente a las que hemos vista previamente que es conocida como `exportación por defecto`.

Para realizarla, sólo tenemos que añadir la palabra clave `default` después del `export`, creando entonces el `export default`. Es `IMPORTANTE` mencionar que `en un mismo fichero` pueden haber múltiples `export`, pero solamente puede haber `un único export default`.

Los `export default` se pueden utilizar de una manera similar a las vistas previamentes. A continuación veremos las formas generales:

1. Para exportar por defecto `constantes`:

   ```javascript
   const nombreConstante = VALOR_DE_LA_CONSTANTE;

   /*...*/

   export default nombreConstante;
   ```
  
2. Para exportar por defecto `variables`:

   ```javascript
   let nombreVariable = VALOR_DE_LA_VARIABLE;

   /*...*/

   export default nombreVariable;
   ```

3. Para exportar por defecto `arrow functions`:

   ```javascript
   function nombreFuncion(/* Parámetros (opcional) */) {

    /* Cuerpo de la función */

   }

   /*...*/

   export default nombreFuncion;
   ```

4. Para exportar por defecto `funciones` que usen el `function`:

   ```javascript
   const nombreArrowFunction = (/* Parámetros (opcional) */) => {
  
    /* Cuerpo de la función */

   };

   /*...*/

   export default nombreArrowFunction;
   ```

5. Para exportar por defecto `clases`:

   ```javascript
   class NombreDeLaClase {

    /* Cuerpo de la clase. */

   }

   /*...*/

   export default NombreDeLaClase;
   ```


Mi recomendación sería siempre poner el `export default` al `final` del `fichero`.

Cabe mencionar que luego tendremos una `sintáxis especial` para `importar` a el elemento que fue `exportado por defecto` y otra sintáxis para `importar` los elementos que fueron `exportados de manera normal`.

### Import estático.

La `importación estática` es la manera de `importar` elementos más común, por que será la que generalmente utilicemos. Para poder `importar` elementos de manera estática debemos utilizar la palabra clave `import`. La `importación estática` consiste en que todos los `módulos` sean importados antes de ejecutar el código del fichero que los ha importado.

Cabe mencionar que para `importar` elementos de un fichero, dichos elementos deben haber sido `exportados` dentro de ese fichero. Así que notemos que `NO` existe una manera de `importar` elementos si éstos no han sido `exportados`, por lo que el `import` necesita del `export`.


`Regla importante`: Al trabajar con `imports estáticos`, siempre los escribiremos `al principio del fichero`. 

Hay distintas formas de `importar` elementos. A continuación veremos las maneras más utilizadas:

<br>

<b>Importación con nombre:</b>

La forma más habitual de importar elementos es a través de la denominada `importación nombrada`. La forma general de utilizarlo es la siguiente:

* Supongamos que tenemos un fichero llamado `modulo.js` que está definido de la siguiente forma general:

  ```javascript
  // Fichero modulo.js

  /* Definimos constantes: */
  const nombreConstante = VALOR_DE_LA_CONSTANTE;

  /* Definimos variables: */
  let nombreVariable = VALOR_DE_LA_VARIABLE;


  /* Definimos funciones: */

  // Usando arrow functions:
  const nombreArrowFunction = (/* Parámetros (opcional) */) => {
    
    /* Cuerpo de la función */

  };

  // Usando la palabra function:
  function nombreFuncion(/* Parámetros (opcional) */) {

    /* Cuerpo de la función */

  }


  /* Definimos clases: */
  class NombreDeLaClase {

    /* Cuerpo de la clase. */

  }

  /* Exportamos lo que necesitamos al final del fichero */
  export {
    nombreConstante,
    nombreVariable,
    nombreArrowFunction,
    nombreFuncion,
    NombreDeLaClase,
  };
  ```

* Entonces, supongamos que ahora tenemos otro archivo llamado `ficheroNormal.js` y querémos `importar` los elementos de fichero `modulo.js`. Entonces, tendremos que hacerlo de la siguiente forma general:

   ```javascript
   // Fichero ficheroNormal.js

   import {
    nombreConstante,
    nombreVariable,
    nombreArrowFunction,
    nombreFuncion,
    NombreDeLaClase,
   } from "./modulo.js";

   /* Resto del fichero */
   ```

   Cabe mencionar que `NO` es necesario `importar` todos los elementos que un `módulo` ofrece. Generalmente, vamos a `importar` solamente los elementos de un `módulo` que nos sirvan para el problema a resolver.


#### Ejemplo:

A continuación veremos un ejemplo de como utilizar la `importación nombrada`:

* Tenemos un fichero llamado `math.js` definido de la siguiente forma:

  ```javascript
  const sum = (a, b) => a + b;

  const sub = (a, b) => a - b;

  const multiply = (a, b) => a * b;

  const divide = (a, b) => a / b;

  export { sum, sub, multiply, divide };
  ```

* Y tenemos un fichero llamado `main.js` definido de la siguiente manera:

  ```javascript
  import {sum, sub, multiply} from './math.js';

  console.log(sum(3, 4)); // 7

  console.log(sub(3, 4)); // -1

  console.log(multiply(3, 4)); // 12
  ```

  Notemos que pudimos `importar` las funciones `sum, sub y multiply` que nos ofecía el fichero `math.js`. Sin embargo, como no usamos la función `divide`, entonces decidimos no importarla.

 #### Renombrando un elemento al importarlo.

 También podemos utilizar la palabra clave `as` para cambiarle el nombre a un elementos que estemos `importando`. Esto se hace de la siguiente forma general:

 * Supongamos que tenemos un fichero llamado `modulo.js` que está definido de la siguiente forma general:

    ```javascript
    // Fichero modulo.js

    /* Definimos constantes: */
    const nombreConstante = VALOR_DE_LA_CONSTANTE;

    /* Definimos variables: */
    let nombreVariable = VALOR_DE_LA_VARIABLE;


    /* Definimos funciones: */

    // Usando arrow functions:
    const nombreArrowFunction = (/* Parámetros (opcional) */) => {
      
      /* Cuerpo de la función */

    };

    // Usando la palabra function:
    function nombreFuncion(/* Parámetros (opcional) */) {

      /* Cuerpo de la función */

    }


    /* Definimos clases: */
    class NombreDeLaClase {

      /* Cuerpo de la clase. */

    }

    /* Exportamos lo que necesitamos al final del fichero */
    export {
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase,
    };
    ```

* Entonces, supongamos que ahora tenemos otro archivo llamado `ficheroNormal.js` y querémos `importar` los elementos de fichero `modulo.js`. Entonces, tendremos que hacerlo de la siguiente forma general:

   ```javascript
   // Fichero ficheroNormal.js

   import {
    nombreConstante as otroNombreConstante,
    nombreVariable as otroNombreVariable,
    nombreArrowFunction as otroNombreArrowFunction,
    nombreFuncion as otroNombreFuncion,
    NombreDeLaClase as OtroNombreDeLaClase,
   } from "./modulo.js";

   /* Resto del fichero */
   ```

   Cabe mencionar que `NO` es necesario renombrar todos los elementos que importemos.

#### Ejemplo renombrando un elemento al importarlo:

A continuación veremos un ejemplo de como utilizar el `as` para renombrar un elemento a importar:

* Tenemos un fichero llamado `math.js` definido de la siguiente forma:

  ```javascript
  const sum = (a, b) => a + b;

  const sub = (a, b) => a - b;

  const multiply = (a, b) => a * b;

  const divide = (a, b) => a / b;

  export { sum, sub, multiply, divide };
  ```

* Y tenemos un fichero llamado `main.js` definido de la siguiente manera:

  ```javascript
  import { sum as addition, sub, multiply } from "./math.js";

  console.log(addition(3, 4)); // 7

  console.log(sub(3, 4)); // -1

  console.log(multiply(3, 4)); // 12

  console.log(sum(3, 4)); // Uncaught ReferenceError: sum is not defined
  ```

  Notemos que renombramos a la función `sum` como `addition` al importarla. Es por eso que al final `NO` está definida, pues se llamará para nuestro fichero `addition` y no `sum`.

<br>

<b>Importación por defecto:</b>

Ya habíamos hablado sobre la `exportación por defecto`. Ahora hablaremos de como hacer `importación por defecto` para importar aquellos elementos que fueron exportados por defecto.

* Supongamos que tenemos un fichero llamado `modulo.js` que `exporta por defecto` un valor llamado `nombreValorPorDefecto` (el cuál puede ser una `constante` o una `variable` o una `función` o una `clase` o un `objeto`, etc.). Esto se vería de la siguiente forma general:

    ```javascript
    // Fichero module.js
    
    /* Código del fichero */


    /*
      nombreValorPorDefecto debe haber sido declarado previamente
      y puede ser una constante o una variable o una función o una clase o un objeto, etc.
    */
    export default nombreValorPorDefecto;
    ```

  Notese que también podría exportar de manera normal otros elementos.

* Entonces podemos `importar por defecto` ese valor en otro fichero llamado `ficheroNormal.js` de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    import nombreValorPorDefecto from "./module.js";

    /* Resto del código del fichero */
    ```

    De esa manera importamos por defecto el valor llamado `nombreValorPorDefecto` que fue `exportado por defecto` en el fichero `modulo.js`.

    <br>

    `Importante`: Cabe mencionar que podemos renombrarlo a la hora de importarlo. Esto se haría de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    import otroNombre from "./module.js";

    /* Resto del código del fichero */
    ```

    Y en este caso se sigue importando por defecto el valor llamado `nombreValorPorDefecto` que fue `exportado por defecto` en el fichero `modulo.js`, pero lo hemos importado con el nombre `otroNombre` para usarlo en el `ficheroNormal.js`. Esto nos demuestra que al importar valores por defecto, podemos renombrarlos tambien, aunque hacerlo no es lo más típico.

    <br>

    `Otra manera menos usada`: También podemos `importar por defecto` usando la sintáxis de `import nombrados` de la siguiente manera general:

    ```javascript
    // Fichero ficheroNormal.js

    import {default as nombreValorPorDefecto} from "./module.js";

    /* Resto del código del fichero */
    ```

    Ya que todos los elementos que fueron `exportados por defecto` se guardan con el `nombre` de `default`.

    Recomiendo evitar esta manera de hacerlo, pero lo explico por completitud.


#### Ejemplo de esto:

A continuación veremos un ejemplo de como exportar e importar valores por defecto:

* Tenemos el fichero llamado `Logger.js` el cuál contiene el siguiente código:

  ```javascript
  class Logger {
    static log = [];

    constructor(username) {
      this.username = username;
    }

    logMessage(message) {
      Logger.log.push({
        username: this.username,
        message,
        timestamp: Date.now(),
      });
    }

    static getLog() {
      return Logger.log;
    }
  }

  export default Logger;
  ```

* Entonces podemos importar por defecto esta clase de la siguiente manera en un fichero llamado `main.js`:

    ```javascript
    import Logger from "./Logger.js";

    const loggerHeber = new Logger('Heber');

    loggerHeber.logMessage("I'm Heber");

    console.log(Logger.getLog());
    ```

<br>

<b>Importación por defecto y nombrada:</b>

También hay ocasiones en las que debemosm combinar tanto la `importación por defecto` como la `importación nombrada`. Esto se hace de la siguiente forma general:

* Supongamos que tenemos un fichero llamado `modulo.js` que `exporta por defecto` un valor llamado `nombreValorPorDefecto` (el cuál puede ser una `constante` o una `variable` o una `función` o una `clase` o un `objeto`, etc.) y que exporta otros valores de manera normal. Esto se vería de la siguiente forma general:

    ```javascript
    // Fichero modulo.js

    /* Definimos constantes: */
    const nombreConstante = VALOR_DE_LA_CONSTANTE;

    /* Definimos variables: */
    let nombreVariable = VALOR_DE_LA_VARIABLE;


    /* Definimos funciones: */

    // Usando arrow functions:
    const nombreArrowFunction = (/* Parámetros (opcional) */) => {
      
      /* Cuerpo de la función */

    };

    // Usando la palabra function:
    function nombreFuncion(/* Parámetros (opcional) */) {

      /* Cuerpo de la función */

    }


    /* Definimos clases: */
    class NombreDeLaClase {

      /* Cuerpo de la clase. */

    }

    /* Exportamos lo que necesitamos al final del fichero */
    export {
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase,
    };


    /*
      nombreValorPorDefecto debe haber sido declarado previamente
      y puede ser una constante o una variable o una función o una clase o un objeto, etc.
    */
    export default nombreValorPorDefecto;
    ```

* Entonces podemos `importar por defecto` ese valor en otro fichero llamado `ficheroNormal.js` de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    import nombreValorPorDefecto, {
      nombreConstante, 
      nombreVariable,
      nombreArrowFunction, 
      nombreFuncion,
      NombreDeLaClase
    } from "./module.js";

    /* Resto del código del fichero */
    ```

    De esa manera importamos por defecto el valor llamado `nombreValorPorDefecto` que fue `exportado por defecto` en el fichero `modulo.js`, y también importamos por nombre los demás elementos.

    <br>

    `Otra manera menos usada`: También podemos `importar por defecto` usando la sintáxis de `import nombrados` de la siguiente manera general:

    ```javascript
    // Fichero ficheroNormal.js

    import {
      default as nombreValorPorDefecto, 
      nombreConstante, 
      nombreVariable,
      nombreArrowFunction, 
      nombreFuncion,
      NombreDeLaClase
    } from "./module.js";

    /* Resto del código del fichero */
    ```

    Ya que todos los elementos que fueron `exportados por defecto` se guardan con el `nombre` de `default`.

    Recomiendo evitar esta manera de hacerlo, pero lo explico por completitud.

#### Ejemplo de uso:

A continuación veremos un ejemplo de como se usa esta característica:

* Tenemos un fichero llamado `Logger.js` de la siguiente forma:

  ```javascript
  class Logger {
    static log = [];

    constructor(username) {
      this.username = username;
    }

    logMessage(message) {
      Logger.log.push({
        username: this.username,
        message,
        timestamp: Date.now(),
      });
    }

    static getLog() {
      return Logger.log;
    }
  }

  export const commonNames = ["Heber", "Naty", "Gokú"];

  export default Logger;
  ```

* Podemos importar estos datos en un fichero llamado `main.js` de la siguiente manera:

   ```javascript
   import Logger, { commonNames } from "./Logger.js";

   const loggerHeber = new Logger(commonNames[0]);

   loggerHeber.logMessage("I'm Heber");

   console.log(Logger.getLog());

   console.log(commonNames);
   ```

<br>

<b>Importación masiva:</b>

También un tipo de `import` muy utilizado es el masivo, el cuál se hace de la siguiente forma general:


* Supongamos que tenemos un fichero llamado `modulo.js` que `exporta por defecto` un valor llamado `nombreValorPorDefecto` (el cuál puede ser una `constante` o una `variable` o una `función` o una `clase` o un `objeto`, etc.) y que exporta otros valores de manera normal. Esto se vería de la siguiente forma general:

    ```javascript
    // Fichero modulo.js

    /* Definimos constantes: */
    const nombreConstante = VALOR_DE_LA_CONSTANTE;

    /* Definimos variables: */
    let nombreVariable = VALOR_DE_LA_VARIABLE;


    /* Definimos funciones: */

    // Usando arrow functions:
    const nombreArrowFunction = (/* Parámetros (opcional) */) => {
      
      /* Cuerpo de la función */

    };

    // Usando la palabra function:
    function nombreFuncion(/* Parámetros (opcional) */) {

      /* Cuerpo de la función */

    }


    /* Definimos clases: */
    class NombreDeLaClase {

      /* Cuerpo de la clase. */

    }

    /* Exportamos lo que necesitamos al final del fichero */
    export {
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase,
    };


    /*
      nombreValorPorDefecto debe haber sido declarado previamente
      y puede ser una constante o una variable o una función o una clase o un objeto, etc.
    */
    export default nombreValorPorDefecto;
    ```
    
    No es necesario que el fichero tenga `exports por default`, pero si tiene que exportar algún elemento.

* Podemos hacer un `import masivo` en un fichero llamado `ficheroNormal.js` de la siguiente forma general:


  ```javascript
  // Fichero ficheroNormal.js

  import nombreValorPorDefecto, * as nombreDeseadoObjeto from "./modulo.js";

  /* Resto del código */
  ```

  De esa manera, `importamos por defecto` el `nombreValorPorDefecto` con su mismo nombre y luego `TODO` lo que el `modulo.js` exporta lo vamos a guardar en un `objeto` llamado `nombreDeseadoObjeto`. Es obligatorio usar el `as` en este caso para ponerle nombre al `objeto` que contendrá todo lo que el `modulo.js` ha exportado.

  Ahora, notemos que como `nombreDeseadoObjeto` es un `objeto` que contiene todo lo que `modulo.js` ha `exportado`, esto significa que que para acceder a los elementos vamos a tener que trabajar con objetos de la siguiente forma general:

  ```javascript
  // Fichero ficheroNormal.js

  import nombreValorPorDefecto, * as nombreDeseadoObjeto from "./modulo.js";

  /* Sintáxis para acceder a los elementos exportados de forma normal: */

  // la constante.
  nombreDeseado.nombreConstante;

  // La variable.
  nombreDeseado.nombreVariable,
      
  // La arrow function.
  nombreDeseado.nombreArrowFunction();
  
  // La función normal.
  nombreDeseado.nombreFuncion();

  // La clase.
  new nombreDeseado.NombreDeLaClase();
  ```

  Este código NO tiene sentido, pero es para mostrar la sintáxis de como usar el `objeto` llamado `nombreDeseadoObjeto`. Notese que como el elementos exportado por defecto se llama `nombreValorPorDefecto`, podemos usarlo como hacemos normalmente.


  <br>

  `Otra manera poco habitual de hacerlo`:

  También podemos importar todo de la siguiente manera, incluyendo al elemento exportado por defecto:

  ```javascript
  // Fichero ficheroNormal.js

  import * as nombreDeseado from "./modulo.js";

  /* Resto del código */
  ```

  Esto lo que hace es `importar` TODO lo que el fichero `modulo.js` está `exportando`, y lo guarda en un objeto llamado `nombreDeseado`. Y notemos que luego podríamos acceder a los elementos `importados` desde el objeto `nombreDeseado` de la misma manera que vimos previamente.

  La particularidad es que ahora el `elemento exportado por defecto` se llama `default`, por lo que cada vez que querramos utilizarlo tendremos que hacer algo similar a `nombreDeseado.default`, lo cuál puede ser muy confuso. 

  Es por esto último que recomiendo no utilizar esta sintáxis si `existen valores exportados por defecto`. En cambio, si NO hay valores `exportados por defecto`, entonces si se puede usar sin generar tanta confusión.

#### Ejemplo de uso:

A continuación veremos un ejemplo de como se usa esta característica:

* Tenemos un fichero llamado `Logger.js` de la siguiente forma:

  ```javascript
  class Logger {
    static log = [];

    constructor(username) {
      this.username = username;
    }

    logMessage(message) {
      Logger.log.push({
        username: this.username,
        message,
        timestamp: Date.now(),
      });
    }

    static getLog() {
      return Logger.log;
    }
  }

  const commonNames = ["Heber", "Naty", "Gokú"];

  const generateRandomName = (length = 5) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomName = "";

    for (let i = 0; i < length; i++) {
      randomName += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomName;
  };

  export { commonNames, generateRandomName };

  export default Logger;
  ```

* Podemos importar estos datos en un fichero llamado `main.js` de la siguiente manera:

   ```javascript
  import Logger, * as extraElements from "./Logger.js";

  const loggerHeber = new Logger("Heber"),
    loggerCommon = new Logger(extraElements.commonNames[1]),
    loggerRandom = new Logger(extraElements.generateRandomName(10));

  loggerHeber.logMessage("I'm Heber");

  loggerCommon.logMessage("I'm cool");

  loggerRandom.logMessage("Random message");

  console.log(Logger.getLog());
   ```

   Como es puede observar en este ejemplo, guardamos tanto la constante `commonNames` como la función `generateRandomName` en el `objeto` llamado `extraElements`.


### Import dinámico.

Los `imports dinámicos` tendrán mucho más sentido cuando aprendamos sobre `programación asíncrona`, `promesas` y `async/await`. Sin embargo, voy a explicarlo aquí por una cuestión de completitud. Cabe mencionar que yo me centraré en la sintáxis del `async/await` debido a que es la manera más cómoda y moderna de trabajar el asíncronismo.

Notemos que los `imports estáticos` se escriben siempre al principio de un `fichero`, ya que importan todos los `módulos` necesarios antes de ejecutar el código. Y, hay situaciones en las que se `importa un módulo pesado` y se utiliza en una situación muy concreta, lo que genera que en la mayoría de las veces dicho import sea hecho en vano.  

Por otro lado, los `imports dinámicos` lo que permiten hacer es `importar elementos` bajo demanda. Esto último significa que al usar `imports dinámicos`, vamos a poder cargar un módulo solo cuando sea necesario mediante ejecutamos el código. Esto genera que podamos hacer optimizaciones en el código, permitiendo que `módulos pesados` que se usan en ciertas ocasiones concretas, se importen solamente si dicho caso se da.

Los `imports dinámicos` trabajan como una `función asíncrona`, la cuál toma como argumento la `ruta del fichero a importar`. A continuación veremos la forma general de utilizarlo:


* Supongamos que tenemos el fichero `modulo.js` definido de la siguiente forma general:

    ```javascript
    // Fichero modulo.js

    /* Definimos constantes: */
    const nombreConstante = VALOR_DE_LA_CONSTANTE;

    /* Definimos variables: */
    let nombreVariable = VALOR_DE_LA_VARIABLE;


    /* Definimos funciones: */

    // Usando arrow functions:
    const nombreArrowFunction = (/* Parámetros (opcional) */) => {
      
      /* Cuerpo de la función */

    };

    // Usando la palabra function:
    function nombreFuncion(/* Parámetros (opcional) */) {

      /* Cuerpo de la función */

    }


    /* Definimos clases: */
    class NombreDeLaClase {

      /* Cuerpo de la clase. */

    }

    /* Exportamos lo que necesitamos al final del fichero */
    export {
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase,
    };


    /*
      nombreValorPorDefecto debe haber sido declarado previamente
      y puede ser una constante o una variable o una función o una clase o un objeto, etc.
    */
    export default nombreValorPorDefecto;
    ```

* Podemos hacer un `import dinámico` en un fichero llamado `ficheroNormal.js` de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    /* Código del fichero */

    try {
      const {
        default: nombreValorPorDefecto,
        nombreConstante,
        nombreVariable,
        nombreArrowFunction,
        nombreFuncion,
        NombreDeLaClase,
      } = await import("./module.js");

      /* Resto del cuerpo del try */
    } catch (error) {
      /* Cuerpo del catch */
    }
    ```

    Notemos que estamos utilizando la sintáxis `async/await` y que la función `import()` al ser una función asíncrona debe ser esperada con el `await`. Además, generalmente lo haremos con un `try...catch` ya que la función asíncrona puede salir mal, pero esto NO es obligatorio.

    Cabe mencionar que el `await import("./module.js")` lo que hará será devolver un `objeto` que tendrá todos los elementos que el `modulo.js` exporta. Para trabajar de una manera más cómoda le hicimos `object destructuring`, aunque no es obligatorio. Podemos hacer cualquier cosa de las vistas en `destructuring` de objetos para extraer los elementos que nos sean útiles.


Esta forma general se queda muy corta para mostrar todos las situaciones en la que se puede usar, ya que es una herramienta muy versátil que puede usarse para las siguientes situaciones:

1. Cuando queremos importar un módulo si se cumple una determinada condición. Esto se vería de la siguiente forma general:

    ```javascript
    if (condicion) {
      try {
        const {
          default: nombreValorPorDefecto,
          nombreConstante,
          nombreVariable,
          nombreArrowFunction,
          nombreFuncion,
          NombreDeLaClase,
        } = await import("./module.js");

        /* Resto del cuerpo del try */
      } catch (error) {
        /* Cuerpo del catch */
      }
    }
    ```

    Notese que si la condición se cumple, entonces vamos a importar los elementos de `modulo.js`. Sin embargo, si la condición NO se cumple, entonces no perdemos tiempo importando el módulo. Esto es muy útil para optimizar código y es un ejemplo de por qué se dice que el `import dinámico` es `import bajo demanda`.

2. Cuando queremos hacer un `import condicional`. Es decir que cuando se cumpla cierta condición se importe un módulo y si NO se cumple esa condición, entonces se importe otro módulo.

3. Cuando queremos importar un módulo `interpolando` variables o constantes en su `path`. Esto se vería de la siguiente forma general:

    ```javascript
    let nombreModulo = "module";

    try {
      const {
        default: nombreValorPorDefecto,
        nombreConstante,
        nombreVariable,
        nombreArrowFunction,
        nombreFuncion,
        NombreDeLaClase,
      } = await import(`./${nombreModulo}.js`);

      /* Resto del cuerpo del try */
    } catch (error) {
      /* Cuerpo del catch */
    }
    ```

    Esto no es muy utilizado, pero puede ser interesante para algún problema muy específico.

4. Cuando queremos optimizar nuestro código. Esto lo hemos estado hablando a lo largo de esta explicación, ya que es el punto clave por el que es interesante el `import dinámico`.


#### Ejemplo:

A continuación veremos un ejemplo sencillo en el que compararemos un código con `imports dinámicos` y otro con `imports estático`, y veremos la diferencia:

* Tenemos definido el fichero `Logger.js` de la siguiente manera:

    ```javascript
    // Fichero Logger.js

    /* Esta línea simula un módulo pesado, ya que tarda unos segundos en ejecutarse */
    for (let i = 0; i < 10000000000; i++);


    class Logger {
      static log = [];

      constructor(username) {
        this.username = username;
      }

      logMessage(message) {
        Logger.log.push({
          username: this.username,
          message,
          timestamp: Date.now(),
        });
      }

      static getLog() {
        return Logger.log;
      }
    }

    const commonNames = ["Heber", "Naty", "Gokú"];

    const generateRandomName = (length = 5) => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      let randomName = "";

      for (let i = 0; i < length; i++) {
        randomName += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      return randomName;
    };

    export { commonNames, generateRandomName };

    export default Logger;
    ```

    Este código al ser importado tardará unos segundo en ejecutarse.

* Y ahora vamos a tener el fichero llamado `pruebaImportEstatico.js` de la siguiente manera:

    ```javascript
    // Fichero pruebaImportEstatico.js

    import Logger, { commonNames, generateRandomName } from "./Logger.js";

    const randomNumber = Math.floor(Math.random() * 10 + 1); // Numero random entre 1 y 10

    if (randomNumber === 10) {
      const loggerHeber = new Logger("Heber"),
        loggerCommon = new Logger(commonNames[1]),
        loggerRandom = new Logger(generateRandomName(10));

      loggerHeber.logMessage("I'm Heber");

      loggerCommon.logMessage("I'm cool");

      loggerRandom.logMessage("Random message");

      console.log(Logger.getLog());
    } else {
      console.log("Mejor suerte la próxima");
    }
    ```

    El problema que tiene este código es que `Logger.js` se ejecuta antes que este código, para exportar los datos necesarios. Esto significa que siempre va a tardar unos segundos, sin importar si se cumple la condición de `randomNumber === 10` o no. Así que, al final de cuentas, estamos importando datos en vano del `Logger.js`, ya que en TODAS las veces que corramos el código se importará lo de `Logger.js` pero `solamente se usará 1 de cada 10 veces`.

    Así que en este caso, usar `imports estáticos` no es la mejor solución.

* El problema anterior podemos resolverlo usando `imports dinámicos`. Tenemos el fichero llamado `pruebaImportDinamico.js`, definido como:

    ```javascript
    const randomNumber = Math.floor(Math.random() * 10 + 1); // Numero random entre 1 y 10

    if (randomNumber === 10) {
      try {
        const { default: Logger, commonNames, generateRandomName} = await import("./Logger.js");

        const loggerHeber = new Logger("Heber"),
          loggerCommon = new Logger(commonNames[1]),
          loggerRandom = new Logger(generateRandomName(10));

        loggerHeber.logMessage("I'm Heber");

        loggerCommon.logMessage("I'm cool");

        loggerRandom.logMessage("Random message");

        console.log(Logger.getLog());
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Mejor suerte la próxima");
    }
    ```

    Y notemos que este código a nivel lógico hace lo mismo que antes, pero de una manera más inteligente. Ahora si NO se cumple `randomNumber === 10`, entonces no tenemos que esperar nada, ya que en esos casos no importamos nada. Pero en el caso de que se cumpla `randomNumber === 10`, entonces ahí si tendremos que esperar unos segundos para que importe los elementos de `Logger.js`, ya que solamente en ese caso importamos dichos datos de manera dinámica. Es decir que `9 de cada 10 veces no va a importarse lo de Logger.js`, por lo que el código no tardará nada y se importará solemente en esa situación que pasa `1 de cada 10 veces` donde es necesario usar lo que `Logger.js` nos ofrece


#### Truco para optimizar varios imports dinámicos.

Si tenemos que hacer varios `imports dinámicos` es mucho mejor ejecutarlos en paralelo, en lugar de ejecutarlos uno por uno. Para ello podemos hacerlo usando el `Promise.all()`. Notemos que si los ejecutamos en paralelo, el costo en tiempo será igual al tiempo del que más tardó, en cambio si lo ejecutamos uno a uno entonces el costo es igual a la suma de tiempo que tardaron todos los `imports dinámicos`.

A continuación veremos una forma general de como hacer esto:

```javascript
// Fichero ficheroNormal.js

/* Código del fichero */

try {
  const [objectModuloA, objectModuloB, /*...*/] = await Promise.all([
    import("./moduloA.js"),
    import("./moduloB.js"),
    /*...*/
  ]);

  /* Resto del cuerpo del try */
} catch (error) {
  /* Cuerpo del catch */
}
```

Y de esa manera el `import dinámico` se hace más rápido.

### Inmutabilidad vs mutabilidad.

En JavaScript, cuando utilizamos `export` para `exportar` un `dato`, el valor `importado` será el valor que tenga dicho dato en `el momento de la importación`, NO el valor que tenía en el momento de la exportación. Esto significa que podemos enfrentar problemas al exportar datos que sean `mutables`, como los `objetos`, las `instancias de clases` o las `variables`. Si estos datos `mutables` son modificados en algún punto de nuestro código, entonces esos cambios se verán reflejados en todas las importaciones del mismo, ya que todas las importaciones apuntan a la misma referencia del dato mutable. Esto puede generar comportamientos inesperados y errores difíciles de depurar, ya que los cambios se podrían propagar por toda la aplicación.

Para manejar este problema y evitar comportamientos inesperados, puedes seguir algunas prácticas recomendadas:

1. `Evitar la mutabilidad siempre que sea posible`: En general, es una buena práctica evitar la mutabilidad cuando sea posible. Si puedes diseñar tu código de manera que los datos sean inmutables, será más fácil razonar sobre su comportamiento y prevenir errores.

2. `Crear copias de datos mutables antes de exportarlos`: Si necesitas exportar datos mutables, considera crear copias de esos datos antes de exportarlos. De esta manera, cada módulo que importe esos datos obtendrá su propia copia y no compartirá la referencia con otros módulos.

3. `Documentación clara`: Documenta claramente cualquier dato exportado que pueda ser mutable y proporciona instrucciones claras sobre cómo deben tratarse y manipularse para evitar comportamientos inesperados.

## El estándar Commonjs.

El `estándar Commonjs` es bastante anticuado, por lo que actualmente se considera que es `legacy`. Sin embargo, hay muchos proyectos importantes que aún lo utilizan, por lo que vale la pena saber usarlo. Recomiendo que en la actualidad, al crear un proyecto nuevo, utilicemos el `ES module` en lugar del `Commonjs`.

El `estándar Commonjs` permite también que creemos modulos, solamente que tienen la desventaja que se importarán de manera `síncrona` y que no hay tantas features interesantes que mejoren la escritura. La ventaja que tiene es que es muy sencillo entender como funcionan los export e import en `Commonjs`. Además, tanto importar como exportar en `Commonjs` es muy similar a como lo hace `ES module` a nivel sintáctico.

### Exportar en Commonjs.

La manera de exportar es muy similar a la que vimos previamente. La principal diferencia es que en `Commonjs` no existe el `export default`. La forma general de importar en `Commonjs` es la siguiente:

```javascript
// Export para Commonjs

/* Definimos constantes: */
const nombreConstante = VALOR_DE_LA_CONSTANTE;

/* Definimos variables: */
let nombreVariable = VALOR_DE_LA_VARIABLE;


/* Definimos funciones: */

// Usando arrow functions:
const nombreArrowFunction = (/* Parámetros (opcional) */) => {
  
  /* Cuerpo de la función */

};

// Usando la palabra function:
function nombreFuncion(/* Parámetros (opcional) */) {

  /* Cuerpo de la función */

}


/* Definimos clases: */
class NombreDeLaClase {

  /* Cuerpo de la clase. */

}

/* Exportamos lo que necesitamos al final del fichero */
module.exports = {
  nombreConstante,
  nombreVariable,
  nombreArrowFunction,
  nombreFuncion,
  NombreDeLaClase,
};
```

Notese que es muy similar a lo que vimos previamente, por lo que es fácil de entender.

### Importar en Commonjs.

Para importar en `Commonjs` tenemos que utilizar una función normal llamada `require()`, la cuál toma como argumento el `path` del fichero a importar. Se utiliza de la siguiente forma general:

* Supongamos que tenemos un fichero llamado `modulo.js` definido de la siguiente forma general:

    ```javascript
    // Export para Commonjs

    /* Definimos constantes: */
    const nombreConstante = VALOR_DE_LA_CONSTANTE;

    /* Definimos variables: */
    let nombreVariable = VALOR_DE_LA_VARIABLE;


    /* Definimos funciones: */

    // Usando arrow functions:
    const nombreArrowFunction = (/* Parámetros (opcional) */) => {
      
      /* Cuerpo de la función */

    };

    // Usando la palabra function:
    function nombreFuncion(/* Parámetros (opcional) */) {

      /* Cuerpo de la función */

    }


    /* Definimos clases: */
    class NombreDeLaClase {

      /* Cuerpo de la clase. */

    }

    /* Exportamos lo que necesitamos al final del fichero */
    module.exports = {
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase,
    };
    ```

* Y supongamos que tenemos un fichero llamado `commonjsFormaGeneral.js`, entonces podemos importar los elementos de `modulo.js` de la siguiente forma general:

    ```javascript
    // Fichero commonjsFormaGeneral.js

    const { 
      nombreConstante,
      nombreVariable,
      nombreArrowFunction,
      nombreFuncion,
      NombreDeLaClase
    } = require("./module.js");

    /* Resto del código */
    ```

    Notese que se trae todos los elementos del objeto exportado en `modulo.js`. Este comportamiento también se parece a lo que hemos visto antes.

#### Ejemplo:

A continuación veremos un ejemplo de como `exportar e importar` usando `Commonjs`:

* Tenemos el fichero llamado `Logger.js`, definido de la siguiente manera:

    ```javascript
    class Logger {
    static log = [];

    constructor(username) {
      this.username = username;
    }

    logMessage(message) {
      Logger.log.push({
        username: this.username,
        message,
        timestamp: Date.now(),
      });
    }

    static getLog() {
      return Logger.log;
    }
  }

  const commonNames = ["Heber", "Naty", "Gokú"];

  const generateRandomName = (length = 5) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomName = "";

    for (let i = 0; i < length; i++) {
      randomName += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomName;
  };

  // Exportamos usando Commonjs
  module.exports = {
    Logger,
    commonNames,
    generateRandomName,
  };
    ```

* Y tenemos un fichero llamado `main.js` definido como:

    ```javascript
    const { Logger, commonNames, generateRandomName } = require("./Logger.js");

    const loggerHeber = new Logger("Heber"),
      loggerCommon = new Logger(commonNames[1]),
      loggerRandom = new Logger(generateRandomName(10));

    loggerHeber.logMessage("I'm Heber");

    loggerCommon.logMessage("I'm cool");

    loggerRandom.logMessage("Random message");

    console.log(Logger.getLog());
    ```

## Buenas prácticas a la hora de trabajar con módulos.

A continuación daré algunas reglas generales que pueden servir para que nuestros módulos sean más organizados:

1. Todo proyecto debe tener un `fichero principal`, el cuál será el fichero que ejecutaremos para que nuestra aplicación empiece a correr. Se recomienda que el `fichero principal` se llame `index.js`, ya que es lo más típico.

2. Crear un fichero por cada clase que querramos exportar.

3. Que los fichero contengan solamente elementos que sirvan para realizar una única tarea u objetivo. Es decir que cada fichero debe encargarse de una tarea específica y debe contener solamente elementos que la ayuden a cumplirla.

4. Especificar una estructura de ficheros que te permita organizar de una buena manera los ficheros de un proyecto.

5. Evitar a toda costa las dependencias circulares.
