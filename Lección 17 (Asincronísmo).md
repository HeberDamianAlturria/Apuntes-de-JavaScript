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

Cabe mencionar que una vez que se llama al `resolve o al reject`, todas las llamadas a `resolve o reject` que `estén por debajo` serán ignoradas, pero el código normal que `esté por debajo` si se ejecutará. Para evitar complicaciones, `conviene` pensar al `resolve y al reject` como un `return` típico de una función, sin embargo, hay que tener bien presente que el `resolve` se usará para retornar un valor en un caso de éxito y el `reject` se utilizará para retornar el `error` en caso de rechazar la promesa.

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

Lo que significa que el `executor` se ejecuta de manera `síncrona`.

### El método then.

Las `promises` poseen un método crucial llamado `then`, el cuál se ejecutará cuando la promesa sea `resolved` (es decir, cuando la promesa se resuelva de manera exitosa). El método `then` tomará como argumento una `función callback`, y a su vez dicha función callback podrá tomar como argumento el `valor resultante de la resolución de la promesa`. 

Se utiliza de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el then.
  resolve(ALGUN_VALOR);

});

nuevaPromesa.then((resultadoResolved) => {

  // Cuerpo del then.

});
```

Notese que el cuerpo del `executor` puede ser más complejo, pero lo simplificamos para explicar como funciona el `then`. En esta forma general, el valor de `resultadoResolved` será el de `ALGUN_VALOR`, ya que se resolvió con ese valor la promesa al hacer `resolve(ALGUN_VALOR);`.

Otra forma `equivalente` de escribir lo mismo es:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el then.
  resolve(ALGUN_VALOR);

}).then((resultadoResolved) => {

  // Cuerpo del then.

});
```

<b>Dato importantísimo:</b>

El `then` se va a ejecutar de manera `asíncrona`, lo que significa que la función de callback que le pasemos como argumento al `then` se va a ejecutar en un `thread secundario` para evitar que el `thread principal` se bloquee.

Básicamente, lo que sucede es lo siguiente:

1. el `thread principal` ejecuta de manera `síncrona` el `executor` de la promesa para poder crearla y delegarla a un `thread secundario`.

2. Una vez creada, si la promesa es `resolved`, entonces en el `thread secundario` se ejecutará el `then`. Es por esto que decimos que es `asíncrono`, ya que el `thread principal` seguirá ejecutando otras líneas de código mientras que el `thread secundario` ejecutará el `then` de la promesa.

Todavía nos faltaría saber que pasa cuando una promesa es `rejected`, pero pronto lo averiguaremos.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como funciona el `then`:

```javascript
console.log("Antes de crear la promesa.");

const miPromesa = new Promise((resolve, reject) => {
  resolve("Todo sale bien");
}).then((value) => console.log(value));

console.log("Después de haber creado la promesa.");
```

Este código imprimirá por pantalla lo siguiente:

```
Antes de crear la promesa.
Después de haber creado la promesa.
Todo sale bien
```

Y como se puede observar, valor de `value` ha sido `Todo sale bien`, ya que la promesa se resuelve como `resolve("Todo sale bien")`. Además, también podemos notar que el `then` se ejecuta de manera `asíncrona`, ya que es el último mensaje en ser mostrado en pantalla.

### El método catch.

Las `promises` poseen otro método crucial llamado `catch`, el cuál se ejecutará cuando la promesa sea `rejected` (es decir, cuando la promesa sea rechazada). El método `catch` tomará como argumento una `función callback`, y a su vez dicha función callback podrá tomar como argumento el `valor de error resultante de haber rechazado la promesa`. 

Se utiliza de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el catch.
  reject(ALGUN_VALOR_DE_ERROR);

});

nuevaPromesa.catch((error) => {

  // Cuerpo del catch.

});
```

Notese que el cuerpo del `executor` puede ser más complejo, pero lo simplificamos para explicar como funciona el `catch`. En esta forma general, el valor de `error` será el de `ALGUN_VALOR_DE_ERROR`, ya que se rechazó con ese valor la promesa al hacer `reject(ALGUN_VALOR_DE_ERROR)`.

Otra forma `equivalente` de escribir lo mismo es:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el catch.
  reject(ALGUN_VALOR_DE_ERROR);

}).catch((error) => {

  // Cuerpo del catch.

});
```

<br/>

<b>Dato útil:</b>

Es evidente que el método `catch` solo no tiene mucho sentido, por lo que siempre lo utilizaremos en conjunto del método `then` de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

}).then((valorResolved) => {

  // Cuerpo del then.

}).catch((error) => {

  // Cuerpo del catch.

});
```

Es decir, notese que estamos encadenando el método `catch` luego del método `then`. 

Obviamente, si la promesa ha sido `resolved`, entonces se ejecutará el `then` y NO el `catch`. En cambio, si la promesa ha sido `rejected`, entonces se ejecutará el `catch` y NO el `then`.

<b>Dato importantísimo:</b>

El `catch` se va a ejecutar de manera `asíncrona`, lo que significa que la función de callback que le pasemos como argumento al `catch` se va a ejecutar en un `thread secundario` para evitar que el `thread principal` se bloquee.

Básicamente, lo que sucede es lo siguiente:

1. el `thread principal` ejecuta de manera `síncrona` el `executor` de la promesa para poder crearla y delegarla a un `thread secundario`.

2. Una vez creada, si la promesa es `resolved`, entonces en el `thread secundario` se ejecutará el `then`. Es por esto que decimos que es `asíncrono`, ya que el `thread principal` seguirá ejecutando otras líneas de código mientras que el `thread secundario` ejecutará el `then` de la promesa.

3. Si la promesa es `rejected`, entonces en el `thread secundario` se ejecutará el `catch`. Es por esto que decimos que es `asíncrono`, ya que el `thread principal` seguirá ejecutando otras líneas de código mientras que el `thread secundario` ejecutará el `catch` de la promesa.

<b>Ejemplo de uso del catch:</b>

A continuación veremos un ejemplo de como utilizar el método `catch`:

```javascript
console.log("Antes de crear la promesa.");

const miPromesa = new Promise((resolve, reject) => {
  reject(new Error("Error en la promesa"));
})
  .then((value) => console.log("El valor de la promesa es:", value))
  .catch((error) => console.error(error.message));

console.log("Después de haber creado la promesa.");
```

Y este código va a imprimir lo siguiente por pantalla:

```
Antes de crear la promesa.
Después de haber creado la promesa.
Error en la promesa
```

Notese que el `then` no se ha ejecutado, ya que la promesa ha sido `rejected`. Y podemos observar que el `catch` se ha ejecutado de manera asíncrona.

<b>Capturando errores del then en el catch:</b>

También podemos utilizar el `throw` para hacer saltar una excepción en un método `then` y luego capturar el error en un `catch`. Esto podemos hacerlo de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

}).then((valorResolved) => {

  // Cuerpo del then.

  // Esta línea muestra como salta un error en un then.
  throw ALGUN_VALOR_DE_ERROR;

}).catch((error) => {

  // Cuerpo del catch.

});
```

El cuerpo del `then` puede ser más complejo, pero lo hemos generalizado y simplificado para la explicación.

En esta forma general, cuando se esté ejecutando el `then` y se llegue al `throw ALGUN_VALOR_DE_ERROR`, lo que pasará es que saltará una excepción que será capturada por el método `catch`, por lo que su valor de `error` será el `ALGUN_VALOR_DE_ERROR`.

Esto puede ser muy útil cuando procesamos en el `then` un valor y notamos que no cumple alguna condición necesaria.

<br>

A continuación veremos un ejemplo de esto:

```javascript
console.log("Antes de crear la promesa.");

const miPromesa = new Promise((resolve, reject) => {
  resolve("Promesa resuelta");
})
  .then((value) => {
    console.log("El valor de la promesa es:", value);

    throw new Error("Error en el then");
  })
  .catch((error) => console.error(error.message));

console.log("Después de haber creado la promesa");
```

Y esto mostrará lo siguiente por pantalla:

```
Antes de crear la promesa.
Después de haber creado la promesa
El valor de la promesa es: Promesa resuelta
Error en el then
```

Y notemos que en efecto estamos capturando la excepción del `then` en el `catch`.

### El método finally.

El método `finally` es un método especial de las `Promises` que se ejecutará al final sin importar si la promesa ha sido `rejected` o ha sido `resolve`. El método `finally` toma como argumento una función de callback que contendrá el código que ejecutará.

Se utiliza de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {

  // Cuerpo del executor.

}).then((valorResolved) => {

  // Cuerpo del then.
  // Se ejecuta cuando la promesa es aceptada.

}).catch((error) => {

  // Cuerpo del catch.
  // Se ejecuta cuando la promesa es rechazada.

}).finally(() => {

  // Cuerpo del finally.
  // Se ejecuta siempre al final, independientemente del estado de la promesa.

});
```

Con que `se ejecuta al final`, lo que queremos decir es que siempre se ejecuta luego del `then` o del `catch` (dependiendo de si la promesa ha sido aceptada o rechazada). 

Generalmente, el método `finally` es utilizado para hacer algún tipo de limpieza sin importar el estado de la promesa. Por ejemplo, podríamos utilizalo para cerrar alguna conexión a la base de datos, por más que la promesa ha sido aceptada o rechazada.

<b>Dato importantísimo:</b>

El `finally` se va a ejecutar de manera `asíncrona`, lo que significa que la función de callback que le pasemos como argumento al `finally` se va a ejecutar en un `thread secundario` para evitar que el `thread principal` se bloquee.

Básicamente, lo que sucede es lo siguiente:

1. el `thread principal` ejecuta de manera `síncrona` el `executor` de la promesa para poder crearla y delegarla a un `thread secundario`.

2. Una vez creada, si la promesa es `resolved`, entonces en el `thread secundario` se ejecutará el `then`. Es por esto que decimos que es `asíncrono`, ya que el `thread principal` seguirá ejecutando otras líneas de código mientras que el `thread secundario` ejecutará el `then` de la promesa.

3. Si la promesa es `rejected`, entonces en el `thread secundario` se ejecutará el `catch`. Es por esto que decimos que es `asíncrono`, ya que el `thread principal` seguirá ejecutando otras líneas de código mientras que el `thread secundario` ejecutará el `catch` de la promesa.

4. Sin importar de si la promesa ha sido `resolved` o `rejected`, en el `thread secundario` se ejecutará el `finally`.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como funciona el `finally`:

```javascript
console.log("Antes de crear la promesa.");

const miPromesa = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    resolve("El número es menor a 0.5");
  } else {
    reject(new Error("Error en la promesa"));
  }
})
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message))
  .finally(() => console.log("La promesa ha terminado"));

console.log("Después de haber creado la promesa");
```

Y notemos que si se cumple que el valor de `randomNumber` es `< 0.5`, entonces imprimirá por pantalla:

```
Antes de crear la promesa.
Después de haber creado la promesa
El número es menor a 0.5
La promesa ha terminado
```

Y si no se cumple dicha condición, entonces imprimirá por pantalla:

```
Antes de crear la promesa.
Después de haber creado la promesa
Error en la promesa
La promesa ha terminado
```

Y notemos que sin importar si la promesa se resolvió o se rechazó, el mensaje del `finally` siempre se imprime al final.

### Encadenamiento de métodos then.

### Funciones que retornan promesas.


`Dato importante`: el `executor` de una `Promise` se ejecutará de manera `síncrona`, pero los `then`, `catch` y `finally` se ejecutarán de manera `asíncrona`. 

Notese entonces que los dicha previamente me está indicando que el `executor` de una `Promise` generalmente deberá ser usado para comprobar ciertas precondiciones, pero NO debe realizar operaciones costosas por que trabajan de manera `síncrona`. Las operaciones interesantes y costosas deberán hacerse en el `then`, el `catch` o el `finally`, ya que esos si trabajan de manera `asíncrona`.

## Async-await.

`Dato importante`: En JavaScript, una función `async` sin un `await`, va a ejecutarse de manera `síncrona`. Es decir que para que una función `async` se ejecute de manera `asíncrona`, debe contener al menos un `await`. Es por eso que se llama `async/await`.

## Top-level await.

## Promise API.

### Promise.all()