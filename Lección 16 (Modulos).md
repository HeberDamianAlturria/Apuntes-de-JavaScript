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

La `importación estática` es la manera de `importar` elementos más común, por que será la que generalmente utilicemos. Para poder `importar` elementos de manera estática debemos utilizar la palabra clave `import`.

Cabe mencionar que para `importar` elementos de un fichero, dichos elementos deben haber sido `exportados` dentro de ese fichero. Así que notemos que `NO` existe una manera de `importar` elementos si éstos no han sido `exportados`, por lo que el `import` necesita del `export`.

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

* Entonces podemos `importar por defecto` ese valor en otro fichero llamado `ficheroNormal.js` de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    import nombreValorPorDefecto from "./module.js";

    /* Resto del código del fichero */
    ```

    De esa manera importamos por defecto el valor llamado `nombreValorPorDefecto` que fue `exportado por defecto` en el fichero `modulo.js`.

    `Importante`: Cabe mencionar que podemos renombrarlo a la hora de importarlo. Esto se haría de la siguiente forma general:

    ```javascript
    // Fichero ficheroNormal.js

    import otroNombre from "./module.js";

    /* Resto del código del fichero */
    ```

    Y en este caso se sigue importando por defecto el valor llamado `nombreValorPorDefecto` que fue `exportado por defecto` en el fichero `modulo.js`, pero lo hemos importado con el nombre `otroNombre` para usarlo en el `ficheroNormal.js`. Esto nos demuestra que al importar valores por defecto, podemos renombrarlos tambien, aunque hacerlo no es lo más típico.


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



### Import dinámico.

### Inmutabilidad vs mutabilidad.

En JavaScript, cuando utilizamos `export` para `exportar` un `dato`, el valor `importado` será el valor que tenga dicho dato en `el momento de la importación`, NO el valor que tenía en el momento de la exportación. Esto significa que podemos enfrentar problemas al exportar datos que sean `mutables`, como los `objetos`, las `instancias de clases` o las `variables`. Si estos datos `mutables` son modificados en algún punto de nuestro código, entonces esos cambios se verán reflejados en todas las importaciones del mismo, ya que todas las importaciones apuntan a la misma referencia del dato mutable. Esto puede generar comportamientos inesperados y errores difíciles de depurar, ya que los cambios se podrían propagar por toda la aplicación.

Para manejar este problema y evitar comportamientos inesperados, puedes seguir algunas prácticas recomendadas:

1. `Evitar la mutabilidad siempre que sea posible`: En general, es una buena práctica evitar la mutabilidad cuando sea posible. Si puedes diseñar tu código de manera que los datos sean inmutables, será más fácil razonar sobre su comportamiento y prevenir errores.

2. `Crear copias de datos mutables antes de exportarlos`: Si necesitas exportar datos mutables, considera crear copias de esos datos antes de exportarlos. De esta manera, cada módulo que importe esos datos obtendrá su propia copia y no compartirá la referencia con otros módulos.

3. `Documentación clara`: Documenta claramente cualquier dato exportado que pueda ser mutable y proporciona instrucciones claras sobre cómo deben tratarse y manipularse para evitar comportamientos inesperados.

## El estándar Commonjs.

## Buenas prácticas a la hora de trabajar con módulos.
