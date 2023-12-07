# Introducción a JavaScript.

JavaScript es un lenguaje de programación `multiparadigma, débilmente tipado e interpretado`. Este lenguaje de programación nació originalmente para darle funcionalidad a lo sitios web, por lo que solamente podía ejecutarse en los navegadores web. En la actualidad se puede correr JavaScript fuera del navegador gracias a tecnología como `NodeJS` o `Bun`, por lo que su popularidad ha crecido enormemente. 

Las ventajas de trabajar con JavaScript es que existen muchas librerías y frameworks que podemos utilizar para programar más rápido. También cabe mencionar que JavaScript es un lenguaje de programación fácil de aprender, por lo que puede ser adoptado con facilidad por equipos de trabajo.

La principal desventaja que tiene JavaScript es que al ser débilmente tipado y ser interpretado, el códigos que creamos puede contener errores y no notarlos hasta que el código se interprete. Esto significa que debemos testear mejor el código que hacemos al trabajar con JavaScript. 

En la actualidad existe un lenguaje de programación llamado `TypeScript` que es un super conjunto de JavaScript, el cuál busca otorgarle tipado y seguridad a JavaScript.

## Desglozando las características principales.

### ¿Qué significa que es multiparadigma?

Esto significa que en JavaScript podemos trabajar con `Programación orientada a objetos`, `Programación funcional`, `Programación imperativa` y podemos hacer `Scripts`. Eso nos da mayor flexibilidad a la hora de resolver problemas, ya que podemos utilizar el paradigma que mejor nos convenga o hacer una mezcla de dichos paradigmas.

### ¿Qué significa que sea interpretado?

Significa que el código que creemos en JavaScript se va a convertir a código máquina en tiempo de ejecución. Por lo tanto, no podremos saber si el código que hemos creado funciona de manera correcta hasta que se ejecute.

### ¿Qué significa que sea débilmente tipado?

Significa que en JavaScript no existe manera de declarar que una variable deba tener un tipo concreto, por lo que dicho tipo puede cambiar a lo largo del código. Además, JavaScript busca hacer que el código se rompa lo menos posible, por lo que algunos operadores no tiran ningún error si los utilizamos entre variables de distintos tipos. Así que hay que se muy cuidadosos con el tipo de nuestras variables.

### Archivos de JavaScript.

Todos los archivos de JavaScript terminan con la extensión `.js`.

## Ejecutar archivos de JavaScript con NodeJS

`NodeJS` es un entorno de ejecución de JavaScript que nos permite correr código de JavaScript en nuestro sistema operativo. En este curso no vamos a indagar en `NodeJS`, sino que nos vamos a ocupar en el lenguaje `JavaScript`. 

Es importante saber que debemos tener instalado `NodeJS` en nuestro ordenador para poder interpretar código de JavaScript.

Si quiero ejecutar el archivo de código de JavaScript llamado `NOMBRE_DEL_ARCHIVO.js`, entonces debo escribir lo siguiente en la consola:

```powershell
node NOMBRE_DEL_ARCHIVO.js
```
Y eso interpretará el código del archivo `NOMBRE_DEL_ARCHIVO.js`.