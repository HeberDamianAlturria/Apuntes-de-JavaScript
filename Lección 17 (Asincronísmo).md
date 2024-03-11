# Asíncronismo.

En un proyecto real, una buena parte del código es asíncrona. Es por eso que debemos aprender sobre como funciona el asincronísmo en JavaScript.

En esta lección aprenderemos las bases del asíncronismo en JavaScript, para qué usarlos y las maneras más modernas de trabajar con él.

## ¿Qué es el código síncrono?

El código `síncrono` es aquel que se ejecuta de forma secuencial, línea por línea, en el orden en que aparece en el archivo fuente. Notemos que todo el código que hemos estado escribiendo hasta el momento ha sido `síncrono`, ya que podíamos leer el código línea por línea desde el principio del archivo hasta el final, y de esa manera comprender como se ejecutaba. 

En el código `síncrono`, cada instrucción espera a que la anterior se complete antes de ejecutarse. Esto significa que si una operación es lenta o bloqueante, puede hacer que todo el programa se detenga hasta que se complete esa operación. Esta característica puede ser problemática, ya que existen operaciones que son necesarias pero que demandan mucho tiempo, por lo que si nuestro código es `síncrono`, no podría seguir haciendo otras tareas mientra espera que dichas tareas costosas se ejecuten en segundo plano.

## ¿Qué es el código asíncrono?

El código `asíncrono`, por otro lado, no espera a que una operación se complete antes de pasar a la siguiente. En lugar de eso, delega las operaciones lentas o bloqueantes a segundo plano y continúa ejecutando el resto del código.

En JavaScript, lo que sucederá es que el código se ejecutará en el `Thread principal` (también llamado `hilo principal`) de manera `síncrona`. Entonces, cuando el `Thread principal` debe realizar una tarea `asíncrona`, lo que hará será delegarla a un `Thread secundario`. Mientras dicha tarea `asíncrona` es procesada en el `Thread secundario`, el `Thread principal` no espera su finalización y continúa procesando de manera síncrona las líneas de código siguiente. Cuando una tarea `asincrónica` se completa, su resultado se comunica de vuelta al `hilo principal`. Esto puede ser a través de mecanismos como `callbacks`, `promesas` o `async/await`.

## Casos de uso del asíncronismo.

## Promesas.

## Async-await.

`Dato importante`: En JavaScript, una función `async` sin un `await`, va a ejecutarse de manera `síncrona`. Es decir que para que una función `async` se ejecute de manera `asíncrona`, debe contener al menos un `await`. Es por eso que se llama `async/await`.

## Promise API.

## Top-level await.