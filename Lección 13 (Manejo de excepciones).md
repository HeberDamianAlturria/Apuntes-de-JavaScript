# Manejo de excepciones.

En esta lección aprenderemos a como lidiar con excepciones y errores en JavaScript, y también a como generar nosostros mismos excepciones.

## El bloque try-catch.

El bloque `try-catch` se utiliza de la siguiente forma general:

```javascript
try {

  /* Cuerpo del bloque try */

} catch (errorInfo) {

  /* Cuerpo del bloque catch */

}
```

Esto lo que hará será ejecutar el `Cuerpo del bloque try` y si ocurre algún error o salta una excepción, entonces la información del error se guardará en el `errorInfo` y ejecutará el `Cuerpo del bloque catch`. En caso de que en el `Cuerpo del bloque try` NO suceda ningún error o excepción, entonces el `Cuerpo del bloque catch` no se ejecutará.

Cabe aclarar que `errorInfo` será generalmente un `objeto` que será en la mayoría de los casos una `instancia` de una clase llamara `Error` y contendrá información sobre el error. Los atributos más importantes que tiene el `errorInfo` son el `errorInfo.message` que nos dirá información de por qué ha habido un error y el `errorInfo.stack` que nos dará información sobre dónde podemos encontrar el error. También si mostramos por consola el `errorInfo` de la siguiente forma general: `console.error(errorInfo);`, éste mostrará el `errorInfo.message` y el `errorInfo.stack` de manera automática.

Como última aclaración, notemos que el `try` y el `catch` están entre `{}`, lo que significa que crean un `nuevo scope` adentro de sus correspondientes bloques.

A continuación veremos un ejemplo de como manejamos una excepción:

```javascript
const textValue = "Hi, i'm Heber";
const jsonTextValue = JSON.stringify({
  name: "Heber",
  age: 22,
});

// Ejemplo con un error.
try {
  const parsedValue = JSON.parse(textValue); // Salta una excepción.
} catch (error) {
  console.error(error.message); // Imprime: Unexpected token 'H', "Hi, i'm Heber" is not valid JSON
}


// Ejemplo sin errores.
try {
  const parsedValue = JSON.parse(jsonTextValue); // Funciona sin errores.
  console.log(parsedValue); // Imprime: { name: 'Heber', age: 22 }
} catch (error) {
  // No se ejecuta el catch.
  console.error(error);
}
```

### ¿Cuándo debemos utilizarlo?

Debemos utilizarlo en cualquier tipo de código que sepamos que es propenso a fallar, como puede ser cualquier código que dependa de `input del usuario` o de la utilización de alguna `API`, `conexión de base de datos` o cualquier herramienta externa al código que hemos creado. 

También es recomendable usarlo para cualquier tipo de código crítico que, si llega a fallar, ocacionaría un gran problema.

## El bloque try-catch-finally.

Esto se utiliza de la siguiente forma general:

```javascript
try {

  /* Cuerpo del bloque try */

} catch (errorInfo) {

  /* Cuerpo del bloque catch */

} finally {

  /* Cuerpo del bloque finally */

}
```

Notemos que los bloques `try` y `catch` se comportarán de la misma manera que he explicado previamente. Lo único que cambia es que siempre se va a ejecutar el `Cuerpo del bloque finally` luego de que se ejecute el `Cuerpo del bloque try` o el `Cuerpo del bloque catch` según corresponda (es decir, según si todo salió bien o hubo algún error). Es decir, el bloque `finally` siempre se ejecutará al final si importar si hubieron errores o no.

Generalmente, utilizaremos el bloque `finally` para limpiar valores, desconectarse de una base de datos, limpiar configuraciones o ejecutar un código que necesitemos que se ejecute sin importar si todo salió bien o hubo un error.

Como última aclaración, notemos que el `try`, el `catch` y el `finally` están entre `{}`, lo que significa que crean un `nuevo scope` adentro de sus correspondientes bloques.

A continuación veremos un ejemplo sencillo:

```javascript
const textValue = "Hi, i'm Heber";
const jsonTextValue = JSON.stringify({
  name: "Heber",
  age: 22,
});

// Ejemplo con un error.
try {
  const parsedValue = JSON.parse(textValue); // Salta una excepción.
  console.log(parsedValue); // No llega a esta línea.
} catch (error) {
  console.error(error.message); // Imprime: Unexpected token 'H', "Hi, i'm Heber" is not valid JSON
} finally {
  console.log("Siempre me ejecuto"); // Imprime: "Siempre me ejecuto"
}


// Ejemplo sin errores.
try {
  const parsedValue = JSON.parse(jsonTextValue); // Funciona sin errores.
  console.log(parsedValue); // Imprime: { name: 'Heber', age: 22 }
} catch (error) {
  // No se ejecuta el catch.
  console.error(error);
} finally {
  console.log("Siempre me ejecuto"); // Imprime: "Siempre me ejecuto"
}
```

### ¿Cómo saber si debo usar try-catch o try-catch-finally?

La manera más sencilla de decidirlo es preguntarnos: `¿Hay alguna parte del código que deba ejecutarse sin importar si todo salió bien o si es que hubo algún error?`. Si la respuesta es un `si`, entonces debermos utilizar el `try-catch-finally` y en el cuerpo del bloque `finally` debo poner el código que se ejecutará sin importar lo que pase. En cambio, si la respuesta es `no`, entonces tendré que usar el `try-catch`.

## Saltando excepciones personalizadas.

Para poder saltar excepciones personalizadas debemos utilizar la palabra reservada `throw` y, generalmente, vamos a utilizar un objeto llamado `Error`. Esto se hace de la siguiente forma general usando el `try-catch` (es lo mismo para el `try-catch-finally`):

```javascript
try {

  /* Cuerpo del bloque try */

  if (condicionDeError) throw new Error("Mensaje del error");

  /* Puede haber más código */

} catch (errorInfo) {

  /* Cuerpo del bloque catch */

}
```

Esto lo que hace es que si en el bloque `try` es `true` la `condicionDeError`, entonces haremos que salte una excepción usando la palabra especial `throw` y esto lo que hará será al `errorInfo` asignarle una referencia al objeto creado mediante `new Error("Mensaje del error")`. Esto significa que si hacemos `errorInfo.message` tendremos el siguiente valor: `"Mensaje del error"`, y si hacemos que `errorInfo.stack` nos dará información de dónde ha saltado la excepción y coincidirá en nuestra forma general con la línea en donde se encuentra el `if (condicionDeError) throw new Error("Mensaje del error");`.

Es importante aclarar que `throw` NO necesariamente debe usarse con el objeto `Error` de la siguiente forma general `throw new Error("Mensaje del error")`. Sin embargo, hacerlo de esta manera es lo más típico debido a que el objeto `Error` nos proporciona información muy útil sobre dónde se encuentra el error. 

A continuación veremos un ejemplo sencillo:

```javascript
try {
  const incorrectResult = "Hola" * 200; // será NaN.

  if (Number.isNaN(incorrectResult)) throw new Error("The result is not a number");

  console.log(incorrectResult); // No se llega a ejecutar.
} catch (error) {
  console.error(error);
  /*
    Imprime:

    Error: The result is not a number
      at Object.<anonymous> (C:\Users\Familia\Desktop\Heber Facultad\Lecciones\Lecciones de JavaScript\index.js:4:44)
      at Module._compile (node:internal/modules/cjs/loader:1241:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
      at Module.load (node:internal/modules/cjs/loader:1091:32)
      at Module._load (node:internal/modules/cjs/loader:938:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
      at node:internal/main/run_main_module:23:47
  */
}
```

### Usando el throw dentro de funciones.

También podemos utilizar el `throw` para lanzar una excepción adentro de una función que NO tenga un bloque `try-catch` de la siguiente forma general:

```javascript
const nombreFuncion = (/* Puede tener o no parámetros */) => {
  /* Cuerpo de la función */

  if (condicionDeError) throw new Error("Mensaje del error");

  /* Puede haber más código */

  return VALOR;
};
```

Lo que hará JavaScript cuando encuentre una excepción será empezar a quitar del `stack` los `activation records` hasta que se encuentre con un `catch` que le permita manejar el error, de esa manera dejará de quitar cosas del `stack`. En caso de que NO haya encontrado ningún `catch` que maneje el error, entonces se detendrá la ejecución del código y se mostrará por consola el error.

De forma general, para manejar la excepción en caso de suceder debo utilizar un `try-catch` de la siguiente forma general:

```javascript
const nombreFuncion = (/* Puede tener o no parámetros */) => {
  /* Cuerpo de la función */

  if (condicionDeError) throw new Error("Mensaje del error");

  /* Puede haber más código */

  return VALOR;
};

// Manejo la excepción.
try {

  /* Cuerpo del bloque try */

  const result = nombreFuncion(/* Puede tomar o no argumentos */);

  /* Puede haber más código */

} catch (errorInfo) {

  /* Cuerpo del bloque catch */

}

// El programa puede continuar por más que haya habido un error.
```

Y esto lo que hará será ejecutar el `Cuerpo del bloque try`. En caso de que al llamar a la función `nombreFuncion` se cumpla que `condicionDeError` sea `true` (es decir que hay un error), entonces se va a desapilar del `stack` la propia función `nombreFuncion` y luego, como está dentro de un `try-catch`, entonces sucederá que el error será tratado por el `catch` y se le asignará a `errorInfo` una referencia al objeto creado por `new Error("Mensaje del error")`. En caso de que todo salga bién, entonces se terminará de ejecutar el `Cuerpo del bloque try` y NO se ejecutará el `Cuerpo del bloque catch`.

Lo importante es que al manejar la excepción, permitiremos que por más que haya habido un error, el programa siga ejecutándose.

<br>

En cambio, si NO manejamos la excepción de la siguiente forma general:

```javascript
const nombreFuncion = (/* Puede tener o no parámetros */) => {
  /* Cuerpo de la función */

  if (condicionDeError) throw new Error("Mensaje del error");

  /* Puede haber más código */

  return VALOR;
};

// Este código finaliza la ejecución del programa.
const result = nombreFuncion(/* Puede tomar o no argumentos */);
```

Entonces, lo que sucederá es que en caso de que en la llamada a la función `nombreFuncion` se cumpla que `condicionDeError` es `true`, entonces se empezarán a desapilar del `stack` todos los `activations records`. Y como no habrá ningún `catch` para capturar el error, entonces el programa finalizará de manera errónea mostrando por consola el error que hemos tenido.

A continuación veremos un ejemplo de como es que esto funciona:

```javascript
const divide = (num1, num2) => {
  if (num2 === 0) throw new Error("No se puede dividir por 0");

  return num1 / num2;
};

// Manejo la excepción para que el programa pueda continuar.
try {
  const result = divide(1, 0); // salta la excepción.

  console.log(result); // No se ejecuta.
} catch (error) {
  console.error(error);
  /*
    Imprime:

    Error: No se puede dividir por 0
      at divide (C:\Users\Familia\Desktop\Heber Facultad\Lecciones\Lecciones de JavaScript\index.js:2:25)
      at Object.<anonymous> (C:\Users\Familia\Desktop\Heber Facultad\Lecciones\Lecciones de JavaScript\index.js:9:18)
      at Module._compile (node:internal/modules/cjs/loader:1241:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
      at Module.load (node:internal/modules/cjs/loader:1091:32)
      at Module._load (node:internal/modules/cjs/loader:938:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
      at node:internal/main/run_main_module:23:47
  */
}

// Y al no manejar el error, el código se rompe.
const result = divide(1, 0); // salta la excepción y me detiene la ejecución del programa.

console.log(
  "No me ejecuto nunca porque el programa se rompe culpa de la línea de arriba"
);
```

## Creando mis propias excepciones.

Esta lección tendrá más sentido cuando aprendamos sobre `programación orientada a objetos`, más precisamente sobre la `herencia`. Pero lo importante es saber que podemos crear nuestras propias clases de excepciones que serán `hijas` de la clase `Error`. Esto se hace de la siguiente forma general:

```javascript
class MyCustomError extends Error {
  constructor(message, /* Puede tener más parámetros */) {
    super(message); // Llamo al constructos del padre.

    // Demás código del constructor.
  }

  /* Métodos para manejar este tipo de error de una manera cómoda (OPCIONAL) */
}
```

Notemos que esta forma general solo propone una plantilla de como se vería la creación de un error llamado `MyCustomError`, pero lo importante es que sepamos que debemos agregarle la cantidad de atributos y métodos a `MyCustomError` según las necesidades del error a resolver. 

La ventaja de hacer que `MyCustomError` herede de `Error` es que podemos también saber en qué línea de código ha saltado una excepción del tipo ``MyCustomError`

Y notemos que ahora podemos utilizar el `throw` para hacer saltar una excepción de `MyCustomError`. Esto se hace de la siguiente forma general:

```javascript
class MyCustomError extends Error {
  constructor(message, /* Puede tener más parámetros */) {
    super(message); // Llamo al constructos del padre.

    this.name = "MyCustomError"; // Generalmente le pondemos nombre al error.

    // Demás código del constructor. 
    // Podemos crear más atributos.
  }

  /* Métodos para manejar este tipo de error de una manera cómoda (OPCIONAL) */
}


try {

  /* Cuerpo del bloque try */

  if (condicionDeError) throw new MyCustomError("Mensaje del error", /* Demás argumentos */);

  /* Puede haber más código */

} catch (errorInfo) {

  /* Cuerpo del bloque catch */

  if (errorInfo instanceof MyCustomError) {
    /* 
      Cuerpo del if para controlar este error.

      Sabemos que errorInfo es de tipo MyCustomError, por lo que podemos
      utilizar sus métodos y atributos.
    */
  }

  // Puede haber más código en el catch.
}
```

Notemos que utilizar `MyCustomError` es muy similar a utilizar simplemente la clase `Error`. La particularidad es que en el `catch` debemos hacer un `if` con el operador `instanceof` para saber si el `errorInfo` es una instancia del `MyCustomError`, de esa manera saber como manejar el error y poder utilizar los método y atributos de dicha clase.

A continuación veremos un ejemplo sencillo es esto:

```javascript
class DivisionByZeroError extends Error {
  constructor(message = "No se puede dividir por cero") {
    super(message);
    this.name = "DivisionByZeroError";
    this.date = new Date();
  }

  // Este método muestra info del error.
  showError() {
    console.error(this.stack); // Muestra el mensaje y el stack de la excepción.
    console.error(`Date ${this.name}: ${this.date}`);
  }
}

const divide = (num1, num2) => {
  if (num2 === 0) throw new DivisionByZeroError();

  return num1 / num2;
};

// Manejo la excepción.
try {
  const result = divide(1, 0); // salta la excepción.

  console.log(result); // No se ejecuta.
} catch (error) {
  if (error instanceof DivisionByZeroError) error.showError(); // Se ejecutará esta línea de código.
  else console.error(error);
}
```