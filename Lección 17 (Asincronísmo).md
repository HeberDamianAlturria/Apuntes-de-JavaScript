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

3. En caso de que la promesa en cuestión pueda ser `resolved` o `rejected`. entonces podemos manejar esta situación con un `try/catch` de la siguiente forma general:

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

Cabe mencionar que la `funcionQueRetornaPromesa()` puede ser tanto una función simple cuyo `return` es algún `Promise` o puede ser una función marcada como `async` ya que dichas funciones devuelven promesas.

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

El `await` solo puede usarse dentro de una función marcada como `async` o también puede usarse `a nivel superior` en un módulo de JavaScript mediante el uso del `top-level await` (más adelante profundizaremos en esto último).

### Retorno de una función async

Una función `async` siempre `devuelve una promesa`. Esto significa que cuando llamos a una función marcada como `async`, obtenemos una promesa en lugar de un valor directo. Esta promesa se resolverá con el valor `retornado` por la función `async`, o se rechazará con el error lanzado por dicha función. Como ya hemos visto, para esperar que una función `async` se resuelva o se rechace debemos utilizar el `await`.

Dicho de otra manera, si tengo la siguiente forma general:

```javascript
const nombreFuncionAsync = async (/* Parametros (opcional) */) => {

  // Cuerpo de la función async.

  if (condicionDeError) {
    throw VALOR_ERROR;
  }

  return VALOR_RETORNADO;
};
```

Entonces el `nombreFuncionAsync` al ser `llamado` retornará una `promesa` que podrá `rechazarse` con el valor de `VALOR_ERROR` si la `condicionDeError` es `true`, o podrá `resolverse` con el valor de `VALOR_RETORNADO`.

<br />

<b>Forma general de llamar a una función async sin esperar a que se resulva o se rechace:</b>

Esto tendrá sentido hacerlo generalmente para la `funciones async` que no retornen ningún valor y que no salten ningún error. Lo que haremos será llamar a dicha función async sin esperar a que se resulvan o se rechacen, para que el código se ejecute en un `hilo secundario` y evitar bloquear el `hilo principal`. Esto podemos hacerlo de la siguiente forma general:

```javascript
const nombreFuncionAsync = async (/* Parametros (opcional) */) => {

  // Cuerpo de la función async que será llamada.

};

// Código del hilo principal.

nombreFuncionAsync(/* Argumentos (opcional) */);
```

De esa manera, podremos ejecutar el `nombreFuncionAsync` en un `hilo secundario` y eviatar bloquear el `hilo principal`.

A continuación veremos un ejemplo:

```javascript
const showJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  console.log(await response.json());
};

console.log("Antes de llamar a showJson");

showJson("https://jsonplaceholder.typicode.com/posts/1");

console.log("Después de llamar a showJson");
```

Y este código imprimirá lo siguiente:

```
Antes de llamar a showJson
Después de llamar a showJson
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
```

Así que podemos notar que el código se ejecuta de manera `asíncrona`.

<br />

<b>Forma general de obtener el resultado de una función async cuando se resuelve o se rechaza:</b>

Podemos esperar a que una `función async` se `resuelva` o se `rechace` dentro de otra `función async` de la siguiente forma general:

```javascript
const nombreFuncionAsyncLlamada = async (/* Parametros (opcional) */) => {
  // Cuerpo de la función async que será llamada.

  if (condicionDeError) {
    throw VALOR_ERROR;
  }

  return VALOR_RETORNADO;
};

const nombreFuncionAsync = async (/* Parametros (opcional) */) => {
  // Cuerpo de la función async.
  
  try {
    const valorRetornado = await nombreFuncionAsyncLlamada(/* Argumentos (opcional) */);
    
    // Resto del código si la promesa se resulve de manera exitosa.

  } catch (error) {

    // Código por si la promesa fue rechazada.

  } 

  // Resto del cuerpo de la función async.
};
```

Esta será la manera más típica de trabajar con las funciones `async/await`. También podremos agregarle el `finally` para usar el `try/catch/finally`.

A continuación veremos un ejemplo de como usarlo:

```javascript
const getResponse = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response;
};

const showJson = async (url) => {
  try {
    const response = await getResponse(url);
    console.log(await response.json());
  } catch (error) {
    console.error(error);
  }
};

const showHtml = async (url) => {
  try {
    const response = await getResponse(url);
    console.log(await response.text());
  } catch (error) {
    console.error(error);
  }
};

showJson("https://jsonplaceholder.typicode.com/posts/1");
/*
  Esto imprimirá lo siguiente cuando se resulva:

  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
*/

showHtml("https://google.com.ar");
/*
  Esto imprimirá lo siguiente cuando se resulva:

  <!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="es-419"><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){var _g={kEI:'_jILZtXaEYf14-EP2Y2CoAs',kEXPI:'0,1365467,207,4804,2329830,632,370,424527,53691,4998,52808,5583,2891,3926,4422,67316,3784,9937,20583,4,86649,6642,7596,1,11942,30212,2,39761,6700,31122,4568,6255,24673,33064,2,2,1,24626,2006,8155,23351,22435,9779,42459,20199,73178,2265,765,15816,1804,16068,18925,275,11814,342,134,1156,43463,7594,5214733,711,2,296,1094,253,568,19,5992735,2839139,176,2,27982818,16672,43887,3,318,4,1281,3,2121778,2585,16815,2,2,23012532,12799,8408,10756,5909,17451,10576,1670,29313,5887,1922,7288,1301,2370,6407,13846,5520,7432,2212,149,7832,201,390,7526,5327,2778,1718,5,131,5087,5739,2938,156,13495,22,83,806,1435,1574,219,1144,806,1265,1909,1218,2530,1213,661,4433,915,4982,374,162,61,1261,3,611,419,2503,650,539,411,354,123,32,1687,72,5,720,1708,2070,1,621,588,50,3909,2067,1416,260,814,203,2207,2105,691,946,11,1573,7,5183,1409,1426,57,1053,229,524,218,539,800,2,1365,926,206,122,430,116,22,867,4,1,6,762,1000,2,4,195,5,20,107,83,300,5,3,303,211,5,1129,1,6,563,4,71,350,4,18,2319,218,40,402,464,463,1,802,38,1174,683,170,2,4,228,19,187,5,429,107,365,79,206,733,2,1031,162,7,5,207,19,616,181,61,634,284,416,149,872,1049,132,1579,404,995,627,265,99,251,19,383,123,299,219,1,246,2,160,45,1091,36,35,219,1235,122,12,3,437,1469,168,338,724,269,2106,104,21655884,3,3770,3406,1819,842,4,478,453,64,795,3297876',kBL:'4vPh',kOPI:89978449};(function(){var a;(null==(a=window.google)?0:a.stvsc)?google.kEI=_g.kEI:window.google=_g;}).call(this);})();(function(){google.sn='webhp';google.kHL='es-419';})();(function(){
var h=this||self;function l(){return void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null};var m,n=[];function p(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||m}function q(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b}function r(a){/^http:/i.test(a)&&"https:"===window.location.protocol&&(google.ml&&google.ml(Error("a"),!1,{src:a,glmm:1}),a="");return a}
function t(a,b,c,d,k){var e="";-1===b.search("&ei=")&&(e="&ei="+p(d),-1===b.search("&lei=")&&(d=q(d))&&(e+="&lei="+d));d="";var g=-1===b.search("&cshid=")&&"slh"!==a,f=[];f.push(["zx",Date.now().toString()]);h._cshid&&g&&f.push(["cshid",h._cshid]);c=c();null!=c&&f.push(["opi",c.toString()]);for(c=0;c<f.length;c++){if(0===c||0<c)d+="&";d+=f[c][0]+"="+f[c][1]}return"/"+(k||"gen_204")+"?atyp=i&ct="+String(a)+"&cad="+(b+e+d)};m=google.kEI;google.getEI=p;google.getLEI=q;google.ml=function(){return null};google.log=function(a,b,c,d,k,e){e=void 0===e?l:e;c||(c=t(a,b,e,d,k));if(c=r(c)){a=new Image;var g=n.length;n[g]=a;a.onerror=a.onload=a.onabort=function(){delete n[g]};a.src=c}};google.logUrl=function(a,b){b=void 0===b?l:b;return t("",a,b)};}).call(this);(function(){google.y={};google.sy=[];google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c])}google.y[c]=[a,b];return!1};google.sx=function(a){google.sy.push(a)};google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};google.bx=!1;google.lx=function(){};var d=[];google.fce=function(a,b,c,e){d.push([a,b,c,e])};google.qce=d;}).call(this);google.f={};(function(){
document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"===c||"q"===c&&!a.elements.q.value?!0:!1}else a=!1;a&&(b.preventDefault(),b.stopPropagation())},!0);document.documentElement.addEventListener("click",function(b){var a;a:{for(a=b.target;a&&a!==document.documentElement;a=a.parentElement)if("A"===a.tagName){a="1"===a.getAttribute("data-nohref");break a}a=!1}a&&b.preventDefault()},!0);}).call(this);</script><style>#gbar,#guser{font-size:13px;padding-top:1px !important;}#gbar{height:22px}#guser{padding-bottom:7px !important;text-align:right}.gbh,.gbd{border-top:1px solid #c9d7f1;font-size:1px}.gbh{height:0;position:absolute;top:24px;width:100%}@media all{.gb1{height:22px;margin-right:.5em;vertical-align:top}#gbar{float:left}}a.gb1,a.gb4{text-decoration:underline !important}a.gb1,a.gb4{color:#00c !important}.gbi .gb4{color:#dd8e27 !important}.gbf .gb4{color:#900 !important}
</style><style>body,td,a,p,.h{font-family:arial,sans-serif}body{margin:0;overflow-y:scroll}#gog{padding:3px 8px 0}td{line-height:.8em}.gac_m td{line-height:17px}form{margin-bottom:20px}.h{color:#1967d2}em{font-weight:bold;font-style:normal}.lst{height:25px;width:496px}.gsfi,.lst{font:18px arial,sans-serif}.gsfs{font:17px arial,sans-serif}.ds{display:inline-box;display:inline-block;margin:3px 0 4px;margin-left:4px}input{font-family:inherit}body{background:#fff;color:#000}a{color:#681da8;text-decoration:none}a:hover,a:active{text-decoration:underline}.fl a{color:#1967d2}a:visited{color:#681da8}.sblc{padding-top:5px}.sblc a{display:block;margin:2px 0;margin-left:13px;font-size:11px}.lsbb{background:#f8f9fa;border:solid 1px;border-color:#dadce0 #70757a #70757a #dadce0;height:30px}.lsbb{display:block}#WqQANb a{display:inline-block;margin:0 12px}.lsb{background:url(/images/nav_logo229.png) 0 -261px repeat-x;color:#000;border:none;cursor:pointer;height:30px;margin:0;outline:0;font:15px arial,sans-serif;vertical-align:top}.lsb:active{background:#dadce0}.lst:focus{outline:none}</style><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){window.google.erd={jsr:1,bv:1981,de:true};
var h=this||self;var k,l=null!=(k=h.mei)?k:1,n,p=null!=(n=h.sdo)?n:!0,q=0,r,t=google.erd,v=t.jsr;google.ml=function(a,b,d,m,e){e=void 0===e?2:e;b&&(r=a&&a.message);void 0===d&&(d={});d.cad="ple_"+google.ple+".aple_"+google.aple;if(google.dl)return google.dl(a,e,d),null;b=d;if(0>v){window.console&&console.error(a,b);if(-2===v)throw a;b=!1}else b=!a||!a.message||"Error loading script"===a.message||q>=l&&!m?!1:!0;if(!b)return null;q++;d=d||{};b=encodeURIComponent;var c="/gen_204?atyp=i&ei="+b(google.kEI);google.kEXPI&&(c+="&jexpid="+b(google.kEXPI));c+="&srcpg="+b(google.sn)+"&jsr="+b(t.jsr)+"&bver="+       
b(t.bv);var f=a.lineNumber;void 0!==f&&(c+="&line="+f);var g=a.fileName;g&&(0<g.indexOf("-extension:/")&&(e=3),c+="&script="+b(g),f&&g===window.location.href&&(f=document.documentElement.outerHTML.split("\n")[f],c+="&cad="+b(f?f.substring(0,300):"No script found.")));google.ple&&1===google.ple&&(e=2);c+="&jsel="+e;for(var u in d)c+="&",c+=b(u),c+="=",c+=b(d[u]);c=c+"&emsg="+b(a.name+": "+a.message);c=c+"&jsst="+b(a.stack||"N/A");12288<=c.length&&(c=c.substr(0,12288));a=c;m||google.log(0,"",a);return a};window.onerror=function(a,b,d,m,e){r!==a&&(a=e instanceof Error?e:Error(a),void 0===d||"lineNumber"in a||(a.lineNumber=d),void 0===b||"fileName"in a||(a.fileName=b),google.ml(a,!1,void 0,!1,"SyntaxError"===a.name||"SyntaxError"===a.message.substring(0,11)||-1!==a.message.indexOf("Script error")?3:0));r=null;p&&q>=l&&(window.onerror=null)};})();</script></head><body bgcolor="#fff"><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){var src='/images/nav_logo229.png';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;}
if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();}
}
})();</script><div id="mngb"><div id=gbar><nobr><b class=gb1>B�squeda</b> <a class=gb1 href="https://www.google.com.ar/imghp?hl=es-419&tab=wi">Im�genes</a> <a class=gb1 href="https://maps.google.com.ar/maps?hl=es-419&tab=wl">Maps</a> <a class=gb1 href="https://play.google.com/?hl=es-419&tab=w8">Play</a> <a class=gb1 href="https://www.youtube.com/?tab=w1">YouTube</a> <a class=gb1 href="https://news.google.com/?tab=wn">Noticias</a> <a class=gb1 href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1 href="https://drive.google.com/?tab=wo">Drive</a> <a class=gb1 style="text-decoration:none" href="https://www.google.com.ar/intl/es-419/about/products?tab=wh"><u>M�s</u> &raquo;</a></nobr></div><div id=guser width=100%><nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a href="http://www.google.com.ar/history/optout?hl=es-419" class=gb4>Historial web</a> | <a  href="/preferences?hl=es-419" class=gb4>Preferencias</a> | <a target=_top id=gb_70 href="https://accounts.google.com/ServiceLogin?hl=es-419&passive=true&continue=https://www.google.com.ar/&ec=GAZAAQ" class=gb4>Acceder</a></nobr></div><div class=gbh style=left:0></div><div class=gbh style=right:0></div></div><center><br clear="all" id="lgpd"><div id="lga"><img alt="Google" height="92" src="/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png" style="padding:28px 0 14px" width="272" id="hplogo"><br><br></div><form action="/search" name="f"><table cellpadding="0" cellspacing="0"><tr valign="top"><td width="25%">&nbsp;</td><td align="center" nowrap=""><input name="ie" value="ISO-8859-1" type="hidden"><input value="es-419" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden"><div class="ds" style="height:32px;margin:4px 0"><input class="lst" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000" autocomplete="off" value="" title="Buscar con Google" maxlength="2048" name="q" size="57"></div><br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="Buscar con Google" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid_1" value="Voy a tener suerte" name="btnI" type="submit"><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){var id='tsuid_1';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked = 1;if (this.form.iflsig)this.form.iflsig.disabled = false;}
else top.location='/doodles/';};})();</script><input value="ANes7DEAAAAAZgtBDseefO3mln4Xo6GfZUZmH-eDF3E2" name="iflsig" type="hidden"></span></span></td><td class="fl sblc" align="left" nowrap="" width="25%"><a href="/advanced_search?hl=es-419&amp;authuser=0">B�squeda avanzada</a></td></tr></table><input 
id="gbv" name="gbv" type="hidden" value="1"><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(c=0;d=e[c++];)try{new ActiveXObject(d),b="2"}catch(h){}}a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f},0)};}).call(this);</script></form><div id="gac_scont"></div><div style="font-size:83%;min-height:3.5em"><br></div><span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="WqQANb"><a href="/intl/es-419/ads/">Publicidad</a><a href="/services/">Soluciones Empresariales</a><a href="/intl/es-419/about.html">Todo acerca de Google</a><a href="https://www.google.com.ar/setprefdomain?prefdom=US&amp;sig=K_zMId_7ym-eU4GVnvr34uPwgyP4w%3D" id="fehl">Google.com</a></div></div><p style="font-size:8pt;color:#70757a">&copy; 2024 - <a href="/intl/es-419/policies/privacy/">Privacidad</a> - <a href="/intl/es-419/policies/terms/">Condiciones</a></p></span></center><script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){window.google.cdo={height:757,width:1440};(function(){var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight}
if(a&&b&&(a!=google.cdo.width||b!=google.cdo.height)){var e=google,f=e.log,g="/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI,h="",k=[],l=void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null;null!=l&&k.push(["opi",l.toString()]);for(var m=0;m<k.length;m++){if(0===m||0<m)h+="&";h+=k[m][0]+"="+k[m][1]}f.call(e,"","",g+h)};}).call(this);})();</script>  <script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){google.xjs={basecomb:'',basecss:'',basejs:'',ck:'xjs.hp.pws-dmAOKDQ.L.X.O',combam:'AQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAABAABAIAAOAAEAAAAEgAABACgIPoCAAG4AgAALw',cs:'ACT90oGDoEeg2lwCFB-FOqW27mkVl4IYIA',cssam:'AQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABAIAAAAAEAAAAEgAABAC',csss:'ACT90oHKjKNODrP7tw8uk0M79UIaMimNZw',excm:[],jsam:'AAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAAAAAAAAAAOAAAAAAAAAAAAAAgIPoCAAG4AgAALw',jss:'ACT90oEDfzNm26MZOreeshydWDRMTFW_Ig'};})();</script> <link href="/xjs/_/ss/k=xjs.hp.pws-dmAOKDQ.L.X.O/am=AQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABAIAAAAAEAAAAEgAABAC/d=1/ed=1/rs=ACT90oHKjKNODrP7tw8uk0M79UIaMimNZw/m=sb_he,d" rel="stylesheet" nonce="iaAGuV5DjqLasF-va9_HjA">    <script nonce="iaAGuV5DjqLasF-va9_HjA">(function(){var u='/xjs/_/js/k\x3dxjs.hp.en.5_ryGvX7lwg.O/am\x3dAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAAAAAAAAAAOAAAAAAAAAAAAAAgIPoCAAG4AgAALw/d\x3d1/ed\x3d1/rs\x3dACT90oEDfzNm26MZOreeshydWDRMTFW_Ig/m\x3dsb_he,d';var st=0;var amd=0;
var e=this||self,f=function(a){return a};var g;var h=function(a){this.g=a};h.prototype.toString=function(){return this.g+""};var k={};
function m(a,b){a.src=b instanceof h&&b.constructor===h?b.g:"type_error:TrustedResourceUrl";var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var n=function(){var a=document;var b="SCRIPT";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};function p(a){a=null===a?"null":void 0===a?"undefined":a;if(void 0===g){var b=null;var c=e.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console&&e.console.error(d.message)}g=b}else g=b}a=(b=g)?b.createScriptURL(a):a;return new h(a,k)};void 0===google.ps&&(google.ps=[]);function q(){var a=u,b=function(){};google.lx=google.stvsc?b:function(){r(a);google.lx=b};google.bx||google.lx()}function t(a,b){b&&m(a,p(b));var c=a.onload;a.onload=function(d){c&&c(d);google.ps=google.ps.filter(function(l){return a!==l})};google.ps.push(a);document.body.appendChild(a)}google.as=t;function r(a){google.timers&&google.timers.load&&google.tick&&google.tick("load","xjsls");var b=n();b.onerror=function(){google.ple=1};b.onload=function(){google.ple=0};google.xjsus=void 0;t(b,a);google.aple=-1;google.psa=!0};google.xjsu=u;e._F_jsUrl=u;var v=!1;function w(){v||(q(),v=!0)}setTimeout(function(){var a;if(a=1===st&&google.caft){a:{a=document.getElementsByTagName("img");for(var b=0,c=a.length;b<c;b++){var d=a[b],l=Number(d.getAttribute("data-atf"))&1;d=d.hasAttribute("data-lzy_");if(l&&d){a=!0;break a}}a=!1}a=!a}a?(window.setTimeout(w,amd),google.caft(w)):2===st&&google.rairicb?(window.setTimeout(w,amd),google.rairicb(w)):q()},0);})();window._ = window._ || {};window._DumpException = _._DumpException = function(e){throw e;};window._s = window._s || {};_s._DumpException = _._DumpException;window._qs = window._qs || {};_qs._DumpException = _._DumpException;(function(){var t=[1,4,0,0,0,10240,0,21000576,67112960,8,65550,1179648,143360,2335246,9314400,3080192];window._F_toggles = window._xjs_toggles = t;})();function _F_installCss(c){}
(function(){google.jl={bfl:0,dw:false,ine:false,ubm:false,uwp:true,vs:false};})();(function(){var pmc='{\x22d\x22:{},\x22sb_he\x22:{\x22agen\x22:false,\x22cgen\x22:false,\x22client\x22:\x22heirloom-hp\x22,\x22dh\x22:true,\x22ds\x22:\x22\x22,\x22fl\x22:true,\x22host\x22:\x22google.com.ar\x22,\x22jsonp\x22:true,\x22msgs\x22:{\x22cibl\x22:\x22Borrar b\\u00fasqueda\x22,\x22dym\x22:\x22Quiz\\u00e1s quisiste decir:\x22,\x22lcky\x22:\x22Voy a tener suerte\x22,\x22lml\x22:\x22M\\u00e1s informaci\\u00f3n\x22,\x22psrc\x22:\x22Se ha eliminado esta b\\u00fasqueda de tu \\u003Ca href\x3d\\\x22/history\\\x22\\u003EHistorial web\\u003C/a\\u003E\x22,\x22psrl\x22:\x22Eliminar\x22,\x22sbit\x22:\x22Buscar por im\\u00e1genes\x22,\x22srch\x22:\x22Buscar con Google\x22},\x22ovr\x22:{},\x22pq\x22:\x22\x22,\x22rfs\x22:[],\x22sbas\x22:\x220 3px 8px 0 rgba(0,0,0,0.2),0 0 0 1px rgba(0,0,0,0.08)\x22,\x22stok\x22:\x22glhC1r1FspUvT77tjR07op15ST8\x22}}';google.pmc=JSON.parse(pmc);})();(function(){var b=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};
var e=this||self;var g,h;a:{for(var k=["CLOSURE_FLAGS"],l=e,n=0;n<k.length;n++)if(l=l[k[n]],null==l){h=null;break a}h=l}var p=h&&h[610401301];g=null!=p?p:!1;var q,r=e.navigator;q=r?r.userAgentData||null:null;function t(a){return g?q?q.brands.some(function(c){return(c=c.brand)&&-1!=c.indexOf(a)}):!1:!1}function u(a){var c;a:{if(c=e.navigator)if(c=c.userAgent)break a;c=""}return-1!=c.indexOf(a)};function v(){return g?!!q&&0<q.brands.length:!1}function w(){return u("Safari")&&!(x()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?t("Microsoft Edge"):u("Edg/"))||(v()?t("Opera"):u("OPR"))||u("Firefox")||u("FxiOS")||u("Silk")||u("Android"))}function x(){return v()?t("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")}function y(){return u("Android")&&!(x()||u("Firefox")||u("FxiOS")||(v()?0:u("Opera"))||u("Silk"))};var z=v()?!1:u("Trident")||u("MSIE");y();x();w();Object.freeze(new function(){});Object.freeze(new function(){});var A=!z&&!w(),D=function(a){if(/-[a-z]/.test("ved"))return null;if(A&&a.dataset){if(y()&&!("ved"in a.dataset))return null;a=a.dataset.ved;return void 0===a?null:a}return a.getAttribute("data-"+"ved".replace(/([A-Z])/g,"-$1").toLowerCase())};var E=[],F=null;function G(a){a=a.target;var c=performance.now(),f=[],H=f.concat,d=E;if(!(d instanceof Array)){var m="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];if(m)d=m.call(d);else if("number"==typeof d.length)d={next:b(d)};else throw Error("a`"+String(d));for(var B=[];!(m=d.next()).done;)B.push(m.value);d=B}E=H.call(f,d,[c]);if(a&&a instanceof HTMLElement)if(a===F){if(c=4<=E.length)c=5>(E[E.length-1]-E[E.length-4])/1E3;if(c){c=google.getEI(a);a.hasAttribute("data-ved")?f=a?D(a)||"":"":f=(f=
a.closest("[data-ved]"))?D(f)||"":"";f=f||"";if(a.hasAttribute("jsname"))a=a.getAttribute("jsname");else{var C;a=null==(C=a.closest("[jsname]"))?void 0:C.getAttribute("jsname")}google.log("rcm","&ei="+c+"&ved="+f+"&jsname="+(a||""))}}else F=a,E=[c]}window.document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",G)});}).call(this);</script></body></html>
*/
```

<br />

<b>Utilizando el then/catch/finally es una llamada de función async:</b>

Generalmente, no vamos a utilizar el `then/catch/finally` en la promesa retornada al llamar una `función async`, ya que para evitar esta sintáxis es que existe el `async/await`. Sin embargo, es interesante saber que podemos usar el `then/catch/finally` en la promesa retornada al llamar una `función async` de la siguiente forma general:

```javascript
const nombreFuncionAsyncLlamada = async (/* Parametros (opcional) */) => {
  // Cuerpo de la función async que será llamada.

  if (condicionDeError) {
    throw VALOR_ERROR;
  }

  return VALOR_RETORNADO;
};

nombreFuncionAsyncLlamada(/* Argumentos (opcional) */)
  .then(valorResuelto => {
    // Cuerpo del then.
  })
  .catch(error => {
    // Cuerpo del catch.
  });
```

De esa manera, podremos ejecutar el `nombreFuncionAsyncLlamada` en un `hilo secundario` sin bloquear el `hilo principal`. Aunque esta sintáxis no la utilicemos casi nunca, es interesante saber que existe, ya que demuestra que siempre las `funciones async` retornan una `promesa`.

A continuación veremos un ejemplo sencillo de esto:

```javascript
const getResponse = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response;
};

getResponse("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
/*
  Al resolverse, imprimirá:

  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
*/
```

<br />

<b>Dato súper importante:</b> 

Es importante recordar que incluso si la función `async` no contiene ninguna expresión `await a una promesa`, seguirá devolviendo una promesa. Esto significa que podremos utilizar el `then/catch/finally` en la promesa devuelta por la `función async` una vez que la llamemos, lo cuál si se ejecutaría de manera `asíncrona`. También podemos en el cuerpo de una `función async` usar el `then/catch/finally` para manejar una `promesa`, sin necesidad del `await` y hacerlo que se ejecute de manera `asíncrona`. Pero si no se usa ninguno de estos "Trucos", entonces una función `async` sin un `await a una promesa`, va a ejecutarse de manera `síncrona`; es decir que, en este caso, para que una función `async` se ejecute de manera `asíncrona`, debe contener `al menos` un `await a una promesa`. Es por eso que se llama `async/await`, ya que siempre debemos usar tanto la palabra `async` para definir a la función asíncrona, como el `await` para esperar a las promesas.

A continuación veremos un ejemplo para mostrar que lo dicho previamente es cierto:

```javascript
const funcionAsyncSinAwait = async (num1, num2) => {
  console.log("Cuerpo del funcionAsyncSinAwait");

  console.log(num1 + num2);
};

console.log("Antes de llamar a funcionAsyncSinAwait");

funcionAsyncSinAwait(1, 1);

console.log("Después de llamar a funcionAsyncSinAwait");
```

Y esto imprimirá lo siguiente:

```
Antes de llamar a funcionAsyncSinAwait
Cuerpo del funcionAsyncSinAwait
2
Después de llamar a funcionAsyncSinAwait
```

Es decir que la información se imprime de manera `síncrona` debido a que `funcionAsyncSinAwait` NO contiene ningún `await` a una `promesa` en su cuerpo.

### El `for await...of`.

Si tengo un `iterador de promesas` (como puede ser un `arreglo de promesas` o `una función generadora asíncrona`), puedo ir iterando dicho iterador e ir esperando a que las promesas que contiene se vayan resolviendo. Esto podemos hacerlo de la siguiente forma general:

```javascript
for await (const valueResolved of ITERADOR_DE_PROMESAS) {
  
  /* Cuerpo del for await...of */

}
```

Y esta sintáxis lo que hará será ir iterando el `ITERADOR_DE_PROMESAS` y, por cada promesa que se encuentre, va a hacerle un `await` para obtener su valor y luego ejecutará el `Cuerpo del for await...of` para dicho valor obtenido. Notese entonces que esta iteración se hace de manera `secuencial` (es decir, una tras otra y NO en paralelo), por lo que puede ser útil cuando tengamos que resolver promesas de manera secuencial, o cuando estemos trabajando con una `función generadora asíncrona`.

Cabe mencionar que como estamos usando un `await`, entonces esta sintáxis debe ser hecha dentro de una `función async` o mediante el `Top-level await`.

La particularidad que tiene el `for await...of` es que cuando se obtenga una promesa que sea `rejected`, entonces saltará una excepción que impedirá seguir iterando. Por lo tanto, hay que utilizar el `try/catch` para poder manejar esta situción de la siguiente forma general:

```javascript
try {

  for await (const valueResolved of ITERADOR_DE_PROMESAS) {
  
    /* Cuerpo del for await...of */

  }

} catch (error) {

  /* Cuerpo del catch para manejar el error. */

}
```

También es posible utilizar el `try/catch/finally` si nos fuese necesario.

Otra aclaración importante

#### Ejemplo de uso del `for await...of`.

A continuación veremos un ejemplo sencillo de como utilizar el `for await...of`:

```javascript
const fetchCharacterByIdAsync = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (!response.ok) throw new Error("Error to make fetch");

  const data = await response.json();

  return { name: data.name, status: data.status };
};

async function* searchCharactersGenerator(initialId, toEndId) {
  if (initialId > toEndId) throw new Error("initialId is bigger than toEndId");

  let id = initialId;

  while (id <= toEndId) {
    yield await fetchCharacterByIdAsync(id);
    id++;
  }
}

const fetchRangeOfCharacters = async (initialId, toEndId) => {
  try {
    for await (const characterInfo of searchCharactersGenerator(initialId, toEndId)) {
      console.log(characterInfo);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchRangeOfCharacters(1, 2);
```

Y, si todo sale bien, esto imprimiría por consola lo siguiente:

```
{ name: 'Rick Sanchez', status: 'Alive' }
{ name: 'Morty Smith', status: 'Alive' }
```

#### Diferencias entre `for await...of` y `Promise.all`.

La principal diferencia entre ambos es que el `Promise.all` se utiliza para esperar a que todas las promesas se resuelva `en paralelo`, en cambio `for await...of` se utiliza para poder esperar a que las promesas se resuelvan de una en una en `secuencia`.

## Top-level await.

En versiones antiguas de `JavaScript`, el `await` podía usarse solamente dentro de `funciones async`. El problema era que en muchas circunstancias era necesario ejecutar de manera automática código asíncrono, por lo que debíamos utilizar un `IFFE` de la siguiente forma general:

```javascript
(async () => {

  // Cuerpo de la función asíncrona que se ejecuta automáticamente.

  const valor = await funcionQueRetornaPromesa(/* Argumentos (opcional) */);

  /*...*/

})();
```

Sin embargo, en versiones más modernas de `JavaScript` se inventó un concepto conocido como el `Top-level await`. El `Top-level await` es una característica que permite usar la palabra clave `await` directamente en `el nivel superior de un módulo o script`. Donde entiendase al `nivel superior de un módulo o script` como todo código que se encuentra fuera de cualquier función o bloque, el cuál se ejecutará de manera automática. De esa manera, podemos utilizar el `await` fuera de una `función async` en `el nivel superior de un módulo o script` de la siguiente forma general:

```javascript
const valor = await funcionQueRetornaPromesa(/* Argumentos (opcional) */);

/*...*/
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo del `Top-level await`:

```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

if (!response.ok) {
  console.error('Failed to fetch data:', response.statusText);
}

const data = await response.json();

console.log(data);
```

Como se puede mostar en este ejemplo, el `await` se utiliza en el `nivel superior de un módulo o script` en lugar de usarlo adentro de una `función async`.