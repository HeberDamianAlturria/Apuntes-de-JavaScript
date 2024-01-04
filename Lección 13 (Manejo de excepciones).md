# Manejo de excepciones.

En esta lección aprenderemos a como lidiar con excepciones y errores en JavaScript, y también a como generar nosostros mismos excepciones.

## El bloque try-catch.

El bloque `try-catch` se utiliza de la siguiente forma general:

```javascript
try {

  /* Cuerpo del bloque try */

} except(errorInfo) {

  /* Cuerpo del bloque except */

}
```

Esto lo que hará será ejecutar el `Cuerpo del bloque try` y si ocurre algún error o salta una excepción, entonces la información del error se guardará en el `errorInfo` y ejecutará el `Cuerpo del bloque except`. En caso de que en el `Cuerpo del bloque try` NO suceda ningún error o excepción, entonces el `Cuerpo del bloque except` no se ejecutará.

