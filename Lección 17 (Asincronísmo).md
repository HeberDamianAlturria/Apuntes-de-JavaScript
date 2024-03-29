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

}).then((resultadoResolved) => {

  // Cuerpo del then.

});
```

Notese que el cuerpo del `executor` puede ser más complejo, pero lo simplificamos para explicar como funciona el `then`. En esta forma general, el valor de `resultadoResolved` será el de `ALGUN_VALOR`, ya que se resolvió con ese valor la promesa al hacer `resolve(ALGUN_VALOR);`.

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

}).catch((error) => {

  // Cuerpo del catch.

});
```

Notese que el cuerpo del `executor` puede ser más complejo, pero lo simplificamos para explicar como funciona el `catch`. En esta forma general, el valor de `error` será el de `ALGUN_VALOR_DE_ERROR`, ya que se rechazó con ese valor la promesa al hacer `reject(ALGUN_VALOR_DE_ERROR)`.

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

El encadenamiento de métodos `then` es una técnica utilizada para ejecutar operaciones asíncronas de manera `secuencial` (es decir, una tras otra). 

La manera de lograrlo es simplemente poner un `then` tras otro, de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {
  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el then.
  resolve(ALGUN_VALOR_1);

})
  .then((valor_1) => { // Then número 1.

    // Cuerpo del then número 1.

    return ALGUN_VALOR_2;
  })
  .then((valor_2) => { // Then número 2.

    // Cuerpo del then número 2.

    return ALGUN_VALOR_3;
  })
  /*...*/
  .then((valor_N) => { // Then número N.

    // Cuerpo del then número N.

  });
```

Como se puede observar, lo que está sucediendo es lo siguiente:

1. El `then número 1` tendrá como `valor_1` el `ALGUN_VALOR_1`, ya que la promesa es aceptada con dicho valor en la línea `resolve(ALGUN_VALOR_1);`.

2. Los métodos `then` siempre van a retornar `promesas`. Por lo tanto, de forma general, el método `then número i` va a corresponder a ser el método `then` de la promesa retornada por el `then número i-1`, para `i >= 2`.

Esta separación en `encadenamientos de métodos then` es muy útil para mejorar la legibilidad del código.

<b>Dato importante:</b>

Como ya hemos dicho, los métodos `then` siempre van a retornar `promesas`, es por eso que podemos `encadenar un método then tras otro`. La particularidad es que las promesas en los `then` se crean de dos maneras distintas:

1. `De manera explícita`: Esto significa que el `valor retornado` dentro de `un método then` será el valor de una nueva Promesa que se crea explícitamente con el constructor `new Promise()` o mediante el uso de `alguna función que retorna una Promesa`. 
  
    Este caso se vería de la siguiente forma general:

    ```javascript
    const nuevaPromesa = new Promise((resolve, reject) => {
      // Cuerpo del executor.

      // Línea agregada para explicar como funciona el then.
      resolve(ALGUN_VALOR_1);

    })
      .then((valor_1) => { // Then número 1.

        // Cuerpo del then número 1.

        return new Promise((resolve, reject) => {

          // Cuerpo del executor de la promesa del then número 1.

          // Línea agregada para explicar como funciona el then encadenado.
          resolve(ALGUN_VALOR_2);

        });
      })
      .then((valor_2) => { // Then número 2.

        // Cuerpo del then número 2.

      });
    ```

    En esta forma general, el `Then número 2` sería un `then` correspondiente a la promesa retornada por el `Then número 1`. Por ende, el `valor_2` será `ALGUN_VALOR_2`, ya que es el valor resultante de que la promesa retornada por el `Then número 1` sea `resolved`.

2. `De manera implícita`: Si el `valor retornado` dentro de `un método then` NO es una promesa, entonces JavaScript lo que hará será envolver a `dicho valor retornado` en una `promesa resuelta`, para que de esa manera podamos seguir encadenando métodos then. Esto lo hace JavaScript de manera `implícita`, por lo que nosotros no tendremos que preocuparnos en hacerlo.

    De forma general, esto se vería como:

    ```javascript
    const nuevaPromesa = new Promise((resolve, reject) => {
      // Cuerpo del executor.

      // Línea agregada para explicar como funciona el then.
      resolve(ALGUN_VALOR_1);

    })
      .then((valor_1) => { // Then número 1.

        // Cuerpo del then número 1.

        return ALGUN_VALOR_QUE_NO_ES_UNA_PROMESA;
      })
      .then((valor_2) => { // Then número 2.

        // Cuerpo del then número 2.

      });
    ```

    En esta forma general, el `valor_2` será `ALGUN_VALOR_QUE_NO_ES_UNA_PROMESA`. Es decir que el `valor_2` será el valor retornado por el `then número 1`.

    Notese que en esta forma general pareciera que NO hay ningún retorno de promesa involucrado. Sin embargo, JavaScript lo que hará será envolver el `ALGUN_VALOR_QUE_NO_ES_UNA_PROMESA` adentro de una promesa resuelta. Es decir, de forma general JavaScript lo que hará será:

    ```javascript
    /* Lo que hace JavaScript */

    const nuevaPromesa = new Promise((resolve, reject) => {
      // Cuerpo del executor.

      // Línea agregada para explicar como funciona el then.
      resolve(ALGUN_VALOR_1);

    })
      .then((valor_1) => { // Then número 1.

        // Cuerpo del then número 1.

        // Promesa resuelta.
        return new Promise(
          (resolve, reject) => resolve(ALGUN_VALOR_QUE_NO_ES_UNA_PROMESA)
        );
      })
      .then((valor_2) => { // Then número 2.

        // Cuerpo del then número 2.

      });
    ```
    Pero como hacer esto es muy trivial, JavaScript lo hace de manera automática por nosotros. De esa manera, nosotros simplemente retornamos el valor como vimos en la primera forma general. y JavaScript se encargará de convertirlo en una promesa.

<b>Manejando errores en un encadenamiento de métodos then:</b>

También podemos utilizar el método `catch` para manejar `excepciones` que puedan darse en cualquiera de los `then` que conforman el `encadenamiento de métodos then`, y también para manejar la situación en que una de `las promesas retornadas` por los `then` haya sido `rejected`.

La forma general de hacer esto es:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {
  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el then.
  resolve(ALGUN_VALOR_1);

})
  .then((valor_1) => { // Then número 1.

    // Cuerpo del then número 1.

    return ALGUN_VALOR_2;
  })
  .then((valor_2) => { // Then número 2.

    // Cuerpo del then número 2.

    return ALGUN_VALOR_3;
  })
  /*...*/
  .then((valor_N) => { // Then número N.

    // Cuerpo del then número N.

  })
  .catch((error) => {

    // Cuerpo del catch para manejar todo tipo de error.

  });
```

Es decir, se utilizan casi de la misma manera que cuando hay un `único then`.

<b>Usando el método finally en un encadenamiento de métodos then:</b>

También podemos utilizar el `finally` de la siguiente forma general:

```javascript
const nuevaPromesa = new Promise((resolve, reject) => {
  // Cuerpo del executor.

  // Línea agregada para explicar como funciona el then.
  resolve(ALGUN_VALOR_1);

})
  .then((valor_1) => { // Then número 1.

    // Cuerpo del then número 1.

    return ALGUN_VALOR_2;
  })
  .then((valor_2) => { // Then número 2.

    // Cuerpo del then número 2.

    return ALGUN_VALOR_3;
  })
  /*...*/
  .then((valor_N) => { // Then número N.

    // Cuerpo del then número N.

  })
  .catch((error) => {

    // Cuerpo del catch para manejar todo tipo de error.

  })
  .finally(() => {

    // Cuerpo del finally.

  });
```

El `finally` se ejecutará cuando todos `then` hayan sido ejecutados o después del `catch` en caso de que un error haya ocurrido. Es decir que el `finally` se ejecuta al final sin importar si la promesa fue `rejected` o `resolved`.

<b>Ejemplo de encadenamiento de métodos then:</b>

A continuación veremos un ejemplo de `encadenamiento de métodos then`:

```javascript
const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const tareas = [
      { id: 1, tarea: "Completar informe", completada: true },
      { id: 2, tarea: "Reunión con equipo", completada: false },
      { id: 3, tarea: "Enviar correos electrónicos", completada: true },
    ];
    resolve(tareas);
  }, 2000);
})
  .then((tareas) => tareas.filter((tarea) => tarea.completada))
  .then((tareasCompletadas) => console.log(tareasCompletadas));
```

Este código lo que hará será tardar `2 segundos` en resolver la promesa con el valor de `tareas`, luego en el `primer then` vamos a filtrar las tareas que aún no están completadas, y en el `segundo then` va a imprimir lo siguiente por pantalla:

```json
[
  { id: 1, tarea: 'Completar informe', completada: true },
  { id: 3, tarea: 'Enviar correos electrónicos', completada: true }
]
```

### Funciones que retornan promesas.

Para mejorar aún más la legibilidad del código, podemos `crear funciones que retornen promesas`. Esto podemos hacerlo de la siguiente forma general:

```javascript
function nombreFuncion(/* Parámetros (opcional) */) {
  return new Promise((resolve, reject) => {
  
    // Cuerpo del executor.

  });
};
```

Y también podemos `crear funciones que retornen encadenamientos de métodos then`. Esto se puede hacer de la siguiente forma general:

```javascript
function nombreFuncion(/* Parámetros (opcional) */) {
  return new Promise((resolve, reject) => {
  
    // Cuerpo del executor.

  })
    .then((valor_1) => { // Then número 1.

      // Cuerpo del then número 1.

      return ALGUN_VALOR_2;
    })
    .then((valor_2) => { // Then número 2.

      // Cuerpo del then número 2.

      return ALGUN_VALOR_3;
    })
    /*...*/
    .then((valor_N) => { // Then número N.

      // Cuerpo del then número N.

    });
};
```

No importa de que manera lo definamos, como `siempre estamos retornando una promesa`, entonces podemos utilizarla de la siguiente forma general:

```javascript
nombreFuncion(/* Argumento (opcional) */)
  .then((valor_1) => { // Then número 1.

    // Cuerpo del then número 1.

    return ALGUN_VALOR_2;
  })
  .then((valor_2) => { // Then número 2.

    // Cuerpo del then número 2.

    return ALGUN_VALOR_3;
  })
  /*...*/
  .then((valor_N) => { // Then número N.

    // Cuerpo del then número N.

  })
  .catch((error) => { // OPCIONAL, pero recomendado

    // Cuerpo del catch para manejar todo tipo de error.

  })
  .finally(() => { // OPCIONAL

    // Cuerpo del finally.

  });
```

Es decir que podemos hacer un `encadenamiento de métodos then` para ir manejando las promesas. También podemos agregar el método `catch` y el `finally`, de ser necesarios.

<b>Ejemplo:</b>

A continuación veremos como crear una función que retorna una promesa:

```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tareas = [
        { id: 1, tarea: "Completar informe", completada: true },
        { id: 2, tarea: "Reunión con equipo", completada: false },
        { id: 3, tarea: "Enviar correos electrónicos", completada: true },
      ];
      resolve(tareas);
    }, 2000);
  });
}

// Imprime las tareas completadas.
getData()
  .then((tareas) => tareas.filter((tarea) => tarea.completada))
  .then((tareasCompletadas) => {
    console.log("Las tareas completadas son:");
    console.log(tareasCompletadas);
  });

// Imprime las tareas incompletas.
getData()
  .then((tareas) => tareas.filter((tarea) => !tarea.completada))
  .then((tareasIncompletas) => {
    console.log("Las tareas incompletas son:")
    console.log(tareasIncompletas);
  });
```

Y esto imprimirá por pantalla los siguiente:

```json
Las tareas completadas son:
[
  { id: 1, tarea: 'Completar informe', completada: true },
  { id: 3, tarea: 'Enviar correos electrónicos', completada: true }
]
Las tareas incompletas son:
[ { id: 2, tarea: 'Reunión con equipo', completada: false } ]
```

<b>Otro ejemplo interesante:</b>

En la siguiente lección aprenderemos como utilizar el `fetch`, pero quiero crear un ejemplo para empezar a familiarizarnos con esta API. El `fetch` es una función que devuelve una promesa, la cuál toma como argumento un `url` y me permite obtener información del sitio web correspondiente a dicha url.

A continuación veremos un ejemplo de como utilizarla:

```javascript
function fetchJsonData(url) {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`El estado del fetch es ${response.status}`);

    return response.json();
  });
}

// Imprime un json obtenido desde la url.
fetchJsonData("https://rickandmortyapi.com/api/character/1")
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

  
// Imprime de una manera más linda la información de un json obtenido por la url.
fetchJsonData("https://rickandmortyapi.com/api/character/1")
  .then((characterInfo) => {
    console.log(`-----------------------------`);
    console.log(`| Name: ${characterInfo.name.padEnd(19)} |`);
    console.log(`| Status: ${characterInfo.status.padEnd(17)} |`);
    console.log(`| Specie: ${characterInfo.species.padEnd(17)} |`);
    console.log(`| Gender: ${characterInfo.gender.padEnd(17)} |`);
    console.log(`| Origin: ${characterInfo.origin.name.padEnd(17)} |`);
    console.log(`-----------------------------`);
  })
  .catch((error) => console.error(error));


// Imprime un error, ya que la url no existe y da un estado 404 de error.
fetchJsonData("https://rickandmortyapi.com/api/NO_EXISTO")
  .catch((error) => console.error(error));
```

El `primer uso de fetchJsonData()` va a imprimir un JSON de la siguiente manera:

```json
{
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1'
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
    'https://rickandmortyapi.com/api/episode/4',
    'https://rickandmortyapi.com/api/episode/5',
    'https://rickandmortyapi.com/api/episode/6',
    'https://rickandmortyapi.com/api/episode/7',
    'https://rickandmortyapi.com/api/episode/8',
    'https://rickandmortyapi.com/api/episode/9',
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/12',
    'https://rickandmortyapi.com/api/episode/13',
    'https://rickandmortyapi.com/api/episode/14',
    'https://rickandmortyapi.com/api/episode/15',
    'https://rickandmortyapi.com/api/episode/16',
    'https://rickandmortyapi.com/api/episode/17',
    'https://rickandmortyapi.com/api/episode/18',
    'https://rickandmortyapi.com/api/episode/19',
    'https://rickandmortyapi.com/api/episode/20',
    'https://rickandmortyapi.com/api/episode/21',
    'https://rickandmortyapi.com/api/episode/22',
    'https://rickandmortyapi.com/api/episode/23',
    'https://rickandmortyapi.com/api/episode/24',
    'https://rickandmortyapi.com/api/episode/25',
    'https://rickandmortyapi.com/api/episode/26',
    'https://rickandmortyapi.com/api/episode/27',
    'https://rickandmortyapi.com/api/episode/28',
    'https://rickandmortyapi.com/api/episode/29',
    'https://rickandmortyapi.com/api/episode/30',
    'https://rickandmortyapi.com/api/episode/31',
    'https://rickandmortyapi.com/api/episode/32',
    'https://rickandmortyapi.com/api/episode/33',
    'https://rickandmortyapi.com/api/episode/34',
    'https://rickandmortyapi.com/api/episode/35',
    'https://rickandmortyapi.com/api/episode/36',
    'https://rickandmortyapi.com/api/episode/37',
    'https://rickandmortyapi.com/api/episode/38',
    'https://rickandmortyapi.com/api/episode/39',
    'https://rickandmortyapi.com/api/episode/40',
    'https://rickandmortyapi.com/api/episode/41',
    'https://rickandmortyapi.com/api/episode/42',
    'https://rickandmortyapi.com/api/episode/43',
    'https://rickandmortyapi.com/api/episode/44',
    'https://rickandmortyapi.com/api/episode/45',
    'https://rickandmortyapi.com/api/episode/46',
    'https://rickandmortyapi.com/api/episode/47',
    'https://rickandmortyapi.com/api/episode/48',
    'https://rickandmortyapi.com/api/episode/49',
    'https://rickandmortyapi.com/api/episode/50',
    'https://rickandmortyapi.com/api/episode/51'
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
}
```

El `segundo uso de fetchJsonData()` va a imprimir la información del json de una manera más linda:

```
-----------------------------
| Name: Rick Sanchez        |
| Status: Alive             |
| Specie: Human             |
| Gender: Male              |
| Origin: Earth (C-137)     |
-----------------------------
```

Y el `tercer uso de fetchJsonData()` va a imprimir el siguiente error:

```
Error: El estado del fetch es 404
    at file:///C:/Users/Familia/Desktop/Heber%20Facultad/Lecciones/Lecciones%20de%20JavaScript/index.mjs:4:13
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

Lo que si, al ser `asíncronas`, no podemos saber cuál de los tres `fetchJsonData()` se va a imprimir primero.

### Dato importante para concluir:

el `executor` de una `Promise` se ejecutará de manera `síncrona`, pero los `then`, `catch` y `finally` se ejecutarán de manera `asíncrona`. 

Notese entonces que los dicha previamente me está indicando que el `executor` de una `Promise` generalmente deberá ser usado para comprobar ciertas precondiciones, pero NO debe realizar operaciones costosas por que trabajan de manera `síncrona`. Las operaciones interesantes y costosas deberán hacerse en el `then`, el `catch` o el `finally`, ya que esos si trabajan de manera `asíncrona`.

Además, cabe mencionar que cuando tenemos dos o más promesas, al ser `asíncronas`, nos es imposible deducir cuál terminará primero. Es más, puede que en una ejecución una termine antes que la otra y en la siguiente ejecución pase el revés.

## Async-await.

El `async/await` es una sintaxis especial en JavaScript que permite trabajar con promesas de una manera más cómoda y legible. Se asemeja sintácticamente a la escritura de código síncrono, lo que facilita la comprensión y el mantenimiento del código. Sin embargo, el código resultante sigue siendo `asíncrono`, ya que `async/await` trabaja internamente con promesas y `no bloquea el hilo de ejecución` mientras espera que una promesa se resuelva o se rechace.

El uso general de `async/await` implica marcar una función como `async` para indicar que `contiene código asincrónico` y luego usar la palabra clave `await` dentro de esa función para `esperar la resolución de una promesa`.

### Creando una función asíncrona usando el async.

Para especificar que el código que escribimos dentro de una función será `asíncrono`, debemos definirla usando la palabra `async` de la siguiente forma general:

```javascript
const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {

  // Cuerpo de la función asíncrona.

};
```

Notese que estamos utilizando la palabra clave `async` para `definir la función asíncrona`. De esa manera, ahora podremos utilizar la palabra clave `await` dentro del cuerpo de la función asíncrona, de la cuál hablaremos en breve.

`Consejo:` Se recomienda que el `nombre de las funciones asíncronas` termine con la palabra `Async` para especificar que es una función especial. Esto es más un consejo que una regla estricta.

### Usando await en una función asíncrona.

Dentro de una `función asíncrona` marcada como `async`, puedes usar la palabra clave `await`, la cuál se encargará de `pausar la ejecución de la función asíncrona y esperar que una promesa se resuelva o se rechace antes de continuar`. 

Podemos utilizar el `await` de las siguientes maneras:

1. Podemos utilizar el `await` para guardar en una variable/constante el valor resultante de que una promesa sea `resolved`. Eso lo hacemos de la siguiente forma general:

    ```javascript
    const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {

      /* Cuerpo de la función asíncrona. */

      const valorResolved = await funcionQueRetornaPromesa();

      /* Resto del cuerpo de la función asíncrona. */

    };
    ```

    De esa manera, cuando la promesa retornada por la función `funcionQueRetornaPromesa()` se `resuelva`, el valor con el que se resuelve se guardará en la constante llamada `valorResolved` y luego continuará la ejecución del resto de código.

2. Si la promesa en cuestión NO retorna un valor al `resolverse`, podemos utilizar el `await` de la siguiente forma general:

    ```javascript
    const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {

      /* Cuerpo de la función asíncrona. */

      await funcionQueRetornaPromesa();

      /* Resto del cuerpo de la función asíncrona. */

    };
    ```

    De esa manera, esperaremos a que la promesa retornada por la función `funcionQueRetornaPromesa()` se `resuelva` y luego continuará la ejecución del resto de código.

3. En caso de que la promesa en cuestión pueda ser `rejected` (rechazada), entonces podemos manejar esta situación con un `try/catch` de la siguiente forma general:

    ```javascript
    const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {

      /* Cuerpo de la función asíncrona. */

      try {
        const valorResolved = await funcionQueRetornaPromesa();

        // Resto del código si la promesa se resulve de manera exitosa.

      } catch (error) {

        // Código por si la promesa fue rechazada.

      }

      /* Resto del cuerpo de la función asíncrona. */

    };
    ```

    Esta manera de hacerlo será la más típica, ya que siempre es conveniente manejar la posible situación en que la promesa sea rechazada.

    También podríamos utilizar el `try/catch/finally` de la siguiente forma general:

    ```javascript
    const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {

      /* Cuerpo de la función asíncrona. */

      try {
        const valorResolved = await funcionQueRetornaPromesa();

        // Resto del código si la promesa se resulve de manera exitosa.

      } catch (error) {

        // Código por si la promesa fue rechazada.

      } finally {

        // Código que se ejecutará sin importar si le promesa fue rechazada o aceptada.

      }

      /* Resto del cuerpo de la función asíncrona. */

    };
    ```

<b>Ejemplo de uso del async/await:</b>

A continuación veremos un ejemplo de como se puede utilizar el `async/await`:

```javascript
// Definición de una función que retorna una promesa que resuelve o rechaza según un número aleatorio.
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      resolve("El randomNumber es menor a 0.5");
    } else {
      reject(new Error("El randomNumber es mayor o igual a 0.5"));
    }
  });
}

// Definición de una función asíncrona usando async/await
const exampleAsync = async () => {
  try {
    const messageResolved = await randomPromise();
    console.log(messageResolved);
  } catch (error) {
    console.error(error);
  }
};

console.log("Console.log antes del llamado a la función asíncrona.")

exampleAsync(); // Llamada a la función asíncrona

console.log("Console.log después del llamado a la función asíncrona.");
```

En este código, si la la promesa se `resuelve`, entonces imprimirá por pantalla lo siguiente:

```
Console.log antes del llamado a la función asíncrona.
Console.log después del llamado a la función asíncrona.
El randomNumber es menor a 0.5
```

En cambio, si la promesa se `rechaza`, entonces imprimirá algo como lo siguiente:

```
Console.log antes del llamado a la función asíncrona.
Console.log después del llamado a la función asíncrona.
Error: El randomNumber es mayor o igual a 0.5
    at file:///C:/Users/Familia/Desktop/Heber%20Facultad/Lecciones/Lecciones%20de%20JavaScript/index.mjs:9:14
    at new Promise (<anonymous>)
    at randomPromise (file:///C:/Users/Familia/Desktop/Heber%20Facultad/Lecciones/Lecciones%20de%20JavaScript/index.mjs:3:10)
    at exampleAsync (file:///C:/Users/Familia/Desktop/Heber%20Facultad/Lecciones/Lecciones%20de%20JavaScript/index.mjs:17:35)
    at file:///C:/Users/Familia/Desktop/Heber%20Facultad/Lecciones/Lecciones%20de%20JavaScript/index.mjs:26:1
    at ModuleJob.run (node:internal/modules/esm/module_job:217:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)
```

Y se puede apreciar que el código se está ejecutando de manera `asíncrona`.

<b>Dato importante:</b>

El `await` solo puede usarse dentro de una función marcada como `async`.

### Retorno de una función async

Una función `async` siempre `devuelve una promesa`. Esto significa que cuando llamas a una función marcada como `async`, obtienes una promesa en lugar de un valor directo. Esta promesa se resolverá con el valor `retornado` por la función `async`, o se rechazará con el error lanzado por la función `async`. Como ya hemos visto, para esperar que una función `async` se resuelva o se rechace.



<b>Otro dato súper importante:</b>

NO SÉ SI ESTO ES CORRECTO

En JavaScript, una función `async` sin un `await`, va a ejecutarse de manera `síncrona`. Es decir que para que una función `async` se ejecute de manera `asíncrona`, debe contener `al menos` un `await`. Es por eso que se llama `async/await`, ya que siempre debemos usar tanto la palabra `async` para definir a la función asíncrona, como el `await` para esperar a las promesas.

Es importante recordar que incluso si la función `async` no contiene ninguna expresión `await`, seguirá devolviendo una promesa.

## Top-level await.

