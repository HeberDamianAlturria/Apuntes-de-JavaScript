# Asíncronismo.

En un proyecto real, una buena parte del código es asíncrona. Es por eso que debemos aprender sobre como funciona el asincronísmo en JavaScript.

En esta lección aprenderemos las bases del asíncronismo en JavaScript, para qué usarlo y las maneras más modernas de trabajar con él.

## ¿Qué es el código síncrono?

El código `síncrono` es aquel que se ejecuta de forma secuencial, línea por línea, en el orden en que aparece en el archivo fuente. Notemos que todo el código que hemos estado escribiendo hasta el momento ha sido `síncrono`, ya que podíamos leer el código línea por línea desde el principio del archivo hasta el final, y de esa manera comprender como se ejecutaba. 

En el código `síncrono`, cada instrucción espera a que la anterior se complete antes de ejecutarse. Esto significa que si una operación es lenta o bloqueante, puede hacer que todo el programa se detenga hasta que se complete esa operación. Esta característica puede ser problemática, ya que existen operaciones que son necesarias pero que demandan mucho tiempo, por lo que si nuestro código es `síncrono`, no podría seguir haciendo otras tareas mientra espera que dichas tareas costosas se ejecuten en segundo plano.

## ¿Qué es el código asíncrono?

El código `asíncrono`, por otro lado, no espera a que una operación se complete antes de pasar a la siguiente. En lugar de eso, delega las operaciones lentas o bloqueantes a segundo plano y continúa ejecutando el resto del código.

En JavaScript, lo que sucederá es que el código se ejecutará en el `Thread principal` (también llamado `hilo principal`) de manera `síncrona`. Entonces, cuando el `Thread principal` debe realizar una tarea `asíncrona`, lo que hará será delegarla a un `Thread secundario`. Mientras dicha tarea `asíncrona` es procesada en el `Thread secundario`, el `Thread principal` no espera su finalización y continúa procesando de manera síncrona las líneas de código siguiente. Cuando una tarea `asincrónica` se completa, su resultado se comunica de vuelta al `hilo principal`. Esto puede ser a través de mecanismos como `callbacks`, `promesas` o `async/await`.

## Casos de uso del asíncronismo.


El asincronismo es fundamental en JavaScript y se utiliza en una variedad de situaciones para mejorar la eficiencia y la capacidad de respuesta de las aplicaciones. Los casos más comunes de uso son:

1. `Solicitudes de red`: Cuando realizas solicitudes HTTP a servidores para obtener o enviar datos, el asincronismo permite que la aplicación continúe ejecutándose mientras espera la respuesta del servidor. Esto es esencial para evitar bloquear la interfaz de usuario y mantener la aplicación receptiva.

2. `Acceso a bases de datos`: Al interactuar con bases de datos, especialmente en aplicaciones web y de servidor, el asincronismo es esencial para manejar operaciones de lectura y escritura de datos de manera eficiente sin bloquear el hilo principal de ejecución.

3. `Operaciones I/O`: Cualquier interacción de tipo `I/O` suele realizarse de manera asíncrona, ya que suelen tomar mucho tiempo. El caso más usado es el de la lectura o escritura de archivos.

4. `Eventos`: El asincronismo se utiliza para manejar eventos del usuario, como clics de ratón y pulsaciones de teclas. Notemos que es crucial la no bloquear el `hilo principal` en estos casos, ya que sino al generar un evento, el resto del sitio web estaría bloqueado hasta que se termine de procesar dicho evento. 


## Promesas.

Las `promesas` (también llamadas `promises`) son un `objeto` especial de JavaScript, el cuál es utilizado para trabajar de una manera cómoda el `asincronismo`. 

Las `promesas`, al resolverse en el futuro, pueden estar en `uno y sólo uno` de los siguientes estados:

1. `Pendiente (Pending)`: Estado inicial de la promesa, mientras la operación `asincrónica` está en curso y aún no se ha completado. En otras palabras, cuando la promesa está en este estado, aún no podemos concluir nada.

2. `Cumplida (Fulfilled/Resolved)`: La operación `asincrónica` se completó con éxito y la promesa se resolvió. En este estado, se puede acceder al valor resultante.

3. `Rechazada (Rejected)`: La operación `asincrónica` falló o fue rechazada, y la promesa no pudo cumplirse. En este estado, se puede acceder al motivo del rechazo, que generalmente es un objeto de error.

### Creando promesas.

Las promesas se crean utilizando la clase `Promise` de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

});
```

Notemos que en esta forma general, se puede apreciar que el `constructor` del `Promise` toma como argumento una `función callback` llamada `executor`. El `executor` tomará como parámetro `dos funciones`, llamadas `resolve` y `reject`, y no retornará nada. Dichas funciones se usarán de la siguiente forma:

* El primer callback, `resolve`, lo utilizaremos cuando queremos que la `promesa` sea `exitosa`. Para utilizarlo tendremos que pasarle como argumento el valor que queremos retornar para este caso exitoso. La forma general de utilizarlo sería así: `resolve(value)`, siendo el `value` el valor a retornar. 

  Cuando la promesa está en `Pendiente` y se utiliza la función `resolve`, entonces la promesa pasa a estar en el estado `Cumplida`.

* El segundo callback, `reject`, lo utilizamos cuando queremos que la `promesa` sea `rechazada`. Para utilizarlo tendremos que pasarle como argumento el valor de error a retornar. La forma general de utilizarlo sería así: `reject(error)`, donde `error` es el valor a retornar en este caso de error; generalmente `error` será una instancia de `new Error()`.

  Cuando la promesa está en `pendiente` y se utiliza la función `reject`, entonces la promesa pasa a estar en el estado `Rechazada`.


<b>Dato importante sobre el resolve y el reject:</b>

ESTO ESTÁ MAL Y NO ES CIERTO. MEJORAR LUEGO

Cabe mencionar que hay que pensar al `resolve` y al `reject` como si fueran el `return` típico de las funciones, ya que una vez que se llama a una de esas dos funciones, el resto del código de abajo será ignorado. Sin embargo, hay que tener bien presente que el `resolve` se usará para retornar un valor en un caso de éxito y el `reject` se utilizará para retornar el `error` en caso de rechazar la promesa.

Así que notemos que cuando llamemos al `resolve` o al `reject` dentro del `executor`, el código del `executor` terminará de ejecutarse, al igual que sucede con el `return` en una función convencional. 

Esto funciona de esta manera, ya que la `Promesa` puede haber sido `aceptada` o `rechada`, pero nunca puede ser ambas al mismo tiempo.

<b>Otro dato importantísimo del executor:</b>

Cuando creamos una `promesa`, el `executor` se va a ejecutar de manera `síncrona` para crear la instancia del `Promise`. Por lo tanto, recomiendo evitar hacer operaciones costosas en el `executor` y solamente utilizarlo para decidir si una promesa será aceptada (mediante el `resolve`) o será rechazada (mediante el `reject`).

<b>Ejemplo:</b>

A continuación veremos un ejemplo creando una `promesa` y también demostraremos que el `executor` de las promesas se ejecutan de manera `síncrona`:

```javascript
console.log("Antes de crear la promesa.");

const miPromesa = new Promise((resolve, reject) => {
  console.log("Soy el executor y me ejecuto de manera síncrona.");

  resolve("Todo sale bien");
});

console.log("Después de haber creado la promesa");
```

Este código imprimirá por pantalla lo siguiente:

```
Antes de crear la promesa.
Soy el executor y me ejecuto de manera síncrona.
Después de haber creado la promesa
```

Lo que significa que se está l

### Funciones que retornan promesas.


`Dato importante`: La función de callback que le pasamos al constructor del `Promise` se ejecutará de manera `síncrona`, pero los `then`, `catch` y `finally` se ejecutarán de manera `asíncrona`. 

Notese entonces que los dicha previamente me está indicando que la función callback del constructor del `Promise` generalmente deberá ser usado para comprobar ciertas precondiciones, pero NO debe realizar operaciones costosas por que trabajan de manera `síncrona`. Las operaciones interesantes deberán hacerse en el `then`, el `catch` o el `finally`, ya que esos si trabajan de manera `asíncrona`.

## Async-await.

`Dato importante`: En JavaScript, una función `async` sin un `await`, va a ejecutarse de manera `síncrona`. Es decir que para que una función `async` se ejecute de manera `asíncrona`, debe contener al menos un `await`. Es por eso que se llama `async/await`.

## Promise API.

## Top-level await.