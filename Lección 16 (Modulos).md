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
export const nombreFuncion = (/* Parámetros (opcional) */) => {
  
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

### Import estático.

### Import dinámico.

## El estándar Commonjs.

## Buenas prácticas a la hora de trabajar con módulos.
