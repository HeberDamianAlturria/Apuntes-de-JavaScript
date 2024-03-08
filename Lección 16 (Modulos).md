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

### Import dinámico.

### Inmutabilidad vs mutabilidad.

En JavaScript, cuando utilizamos `export` para `exportar` un `dato`, el valor `importado` será el valor que tenga dicho dato en `el momento de la importación`, NO el valor que tenía en el momento de la exportación. Esto significa que podemos enfrentar problemas al exportar datos que sean `mutables`, como los `objetos`, las `instancias de clases` o las `variables`. Si estos datos `mutables` son modificados en algún punto de nuestro código, entonces esos cambios se verán reflejados en todas las importaciones del mismo, ya que todas las importaciones apuntan a la misma referencia del dato mutable. Esto puede generar comportamientos inesperados y errores difíciles de depurar, ya que los cambios se podrían propagar por toda la aplicación.

Para manejar este problema y evitar comportamientos inesperados, puedes seguir algunas prácticas recomendadas:

1. `Evitar la mutabilidad siempre que sea posible`: En general, es una buena práctica evitar la mutabilidad cuando sea posible. Si puedes diseñar tu código de manera que los datos sean inmutables, será más fácil razonar sobre su comportamiento y prevenir errores.

2. `Crear copias de datos mutables antes de exportarlos`: Si necesitas exportar datos mutables, considera crear copias de esos datos antes de exportarlos. De esta manera, cada módulo que importe esos datos obtendrá su propia copia y no compartirá la referencia con otros módulos.

3. `Documentación clara`: Documenta claramente cualquier dato exportado que pueda ser mutable y proporciona instrucciones claras sobre cómo deben tratarse y manipularse para evitar comportamientos inesperados.

## El estándar Commonjs.

## Buenas prácticas a la hora de trabajar con módulos.
