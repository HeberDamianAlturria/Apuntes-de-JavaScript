# Promise API y Fetch data.

En esta lección aprenderemos algunos conceptos extras que están relacionados con el `asíncronismo`.

## Promise API.

Además de los visto en la lección sobre las `Promises`, también JavaScript proporciona una serie de funciones que nos permiten ejecutar múltiples promesas en `Paralelo`. A continuación veremos dichas funciones:

### Promise.all()

El `Promise.all` toma como argumento un `Array de Promises` y devuelve una `promesa`. Se utiliza de la siguiente forma general:

1. Usando el `Async/await`:

   ```javascript
   const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {
     // Cuerpo de la función asíncrona.

     try {
       const promise1 = funcionQueRetornaPromesa1();
       const promise2 = funcionQueRetornaPromesa2();
       /*...*/
       const promiseN = funcionQueRetornaPromesaN();

       const [valorRetornado1, valorRetornado2 /*...*/, , valorRetornadoN] = await Promise.all([promise1, promise2, /*...*/, promiseN]);

       /*
        Sin el desctructuring podríamos tener:

        const arrayDeValoresRetornados = await Promise.all([promise1, promise2, ... , promiseN]);
       */

       // Resto del caso existoso.
     } catch (error) {
       // Cuerpo del caso de error.
     }
   };
   ```

2. Usando el `Promise`:

   ```javascript
   const promise1 = funcionQueRetornaPromesa1();
   const promise2 = funcionQueRetornaPromesa2();
   /*...*/
   const promiseN = funcionQueRetornaPromesaN();

   Promise.all([promise1, promise2 /*...*/, , promiseN])
    .then(([valorRetornado1, valorRetornado2 /*...*/, , valorRetornadoN]) => {
      // Cuerpo del then.
    })
    .catch(error => {
      // Cuerpo del catch.
    });
   ```

Como ya hemos visto, el `Promise.all` toma como argumento un `Array de Promises` y devuelve una `promesa`. Lo interesante es que la `Promesa` devuelta por el `Promise.all` se resuelve correctamente solo cuando `todas` las `Promesas del array de promises` han sido resueltas de manera exitosa. Sin embargo, la `Promesa` devuelta por el `Promise.all` será `rechazada` cuando se encuentra con que una `Promesa del array de promises` ha sido `rechazada` y el `error` devuelto en este caso corresponderá al `error` devuelto por la `Promesa del array de promises` que fue `rechazada`.

El `Promise.all()` es bueno para los casos de `todo o nada`, cuando necesitamos que todos los resultados sean `exitosos para proceder`.

<b>¿Cuándo usar el Promise.all()?</b>

Como la `Promesas` del `Arreglo de Promesas` que toma como argumento el `Promise.all()` se ejecutarán de manera `Paralela`, entonces necesitaremos que estas `Promesas` sean todas `independientes entre sí`. Además, como el `Promise.all()` se `rechaza` por completo cuando una de esas `Promesas` del `Arreglo de Promesas` se `rechaza`, es bueno para los casos de `todo o nada`, es decir que es bueno cuando necesitamos que todos los resultados sean `exitosos para proceder`.

<b>Ventaja del uso del Promise.all():</b>

La ventaja del uso del `Promise.all()` es que al ejecutar las `Promesas` de manera `paralela`, entonces `el tiempo de espera se reduce`. Es más, el tiempo de espera del `Promise.all()` estará dado por el `tiempo que tarda la promesa que más tarda en resolverse o rechazarse`.

Es decir, si tenemos de forma general una `secuencia de promesas` de la siguiente forma general:

```javascript
const nombreFuncionAsyncSecuencia = async (/* Parámetros (opcional) */) => {
  // Cuerpo de la función asíncrona.

  try {
    const promise1 = await funcionQueRetornaPromesa1();
    const promise2 = await funcionQueRetornaPromesa2();
    /*...*/
    const promiseN = await funcionQueRetornaPromesaN();

    // Resto del caso existoso.
  } catch (error) {
    // Cuerpo del caso de error.
  }
};
```

Entonces, el `tiempo de espera del nombreFuncionAsyncSecuencia` estará dado por:

```
T_nombreFuncionAsyncSecuencia = T_funcionQueRetornaPromesa1 + T_funcionQueRetornaPromesa2 + ... + T_funcionQueRetornaPromesaN
```

En cambio, si utilizamos el `Promise.all()` de la siguiente forma general para ejecutar las promesas de manera `paralela`:

```javascript
const nombreFuncionAsyncParalelo = async (/* Parámetros (opcional) */) => {
  // Cuerpo de la función asíncrona.

  try {
    const promise1 = funcionQueRetornaPromesa1();
    const promise2 = funcionQueRetornaPromesa2();
    /*...*/
    const promiseN = funcionQueRetornaPromesaN();

    const [valorRetornado1, valorRetornado2 /*...*/, , valorRetornadoN] = await Promise.all([promise1, promise2 /*...*/, , promiseN]);

    // Resto del caso existoso.
  } catch (error) {
    // Cuerpo del caso de error.
  }
};
```

Entonces, el `tiempo de espera del nombreFuncionAsyncParalelo` estará dado por:

```
T_nombreFuncionAsyncParalelo = MAX(T_funcionQueRetornaPromesa1, T_funcionQueRetornaPromesa2, ..., T_funcionQueRetornaPromesaN)
```

Por lo que notemos que ejecutarlo en `Paralelo` será mucho más eficiente que ejecutarlo en `Secuencia`.

<b>Truco muy utilizado:</b>

Un truco muy utilizado es el crear un `arreglo de datos` y luego utilizar el `map` para mapear dicho arreglo de datos a un `arreglo de promesas` del mismo tipo.

Esto se vería de la siguiente forma general:

```javascript
const nombreFuncionAsyncParalelo = async (/* Parámetros (opcional) */) => {
  // Cuerpo de la función asíncrona.

  const arregloDeDatos = [dato1, dato2, /*...*/, datoN];

  try {
    const arregloDePromesas = arregloDeDatos.map(dato => funcionQueRetornaPromesa(dato));

    const [valorRetornado1, valorRetornado2 /*...*/, , valorRetornadoN] = await Promise.all(arregloDePromesas);

    // Resto del caso existoso.
  } catch (error) {
    // Cuerpo del caso de error.
  }
};
```

De esa manera, podemos crear un `arregloDePromesas` mediante una `funcionQueRetornaPromesa` y un `arregloDeDatos`.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar el `Promise.all()`:

```javascript
const urls = [
  "https://rickandmortyapi.com/api/character/9",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://api.github.com/users/HeberDamianAlturria",
];

try {
  const responses = await Promise.all(urls.map((url) => fetch(url)));

  for (const response of responses) {
    if (!response.ok) throw new Error(`Error al obtener ${response.url}`);
  }

  const jsons = await Promise.all(responses.map((response) => response.json()));

  for (const json of jsons) {
    console.log(json);
    console.log("----------------------------------------");
  }
} catch (error) {
  console.error(error);
}
```

Y esto imprimirá lo siguiente por pantalla:

```json
{
  id: 9,
  name: 'Agency Director',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
  episode: [ 'https://rickandmortyapi.com/api/episode/24' ],
  url: 'https://rickandmortyapi.com/api/character/9',
  created: '2017-11-04T20:06:54.976Z'
}
----------------------------------------
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
----------------------------------------
{
  login: 'HeberDamianAlturria',
  id: 110596115,
  node_id: 'U_kgDOBpeQEw',
  avatar_url: 'https://avatars.githubusercontent.com/u/110596115?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/HeberDamianAlturria',
  html_url: 'https://github.com/HeberDamianAlturria',
  followers_url: 'https://api.github.com/users/HeberDamianAlturria/followers',
  following_url: 'https://api.github.com/users/HeberDamianAlturria/following{/other_user}',
  gists_url: 'https://api.github.com/users/HeberDamianAlturria/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/HeberDamianAlturria/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/HeberDamianAlturria/subscriptions',
  organizations_url: 'https://api.github.com/users/HeberDamianAlturria/orgs',
  repos_url: 'https://api.github.com/users/HeberDamianAlturria/repos',
  events_url: 'https://api.github.com/users/HeberDamianAlturria/events{/privacy}',
  received_events_url: 'https://api.github.com/users/HeberDamianAlturria/received_events',
  type: 'User',
  site_admin: false,
  name: 'Heber Alturria',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 4,
  following: 33,
  created_at: '2022-08-04T08:17:20Z',
  updated_at: '2024-03-24T07:57:47Z'
}
----------------------------------------
```

Y como se puede apreciar en este ejemplo, estamos utilizando el `Promise.all()` para obtener `tres JSONs en paralelo`.

### Promise.allSettled()

A diferencia del `Promise.all()`, el `Promise.allSettled()` se resolverá sin importar si una o más `Promesas del arreglo de promesas` son `rechazadas`. La forma general de utilizarlo será la siguiente:

1. Usando el `Async/await`:

   ```javascript
   const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {
     // Cuerpo de la función asíncrona.

     try {
       const promise1 = funcionQueRetornaPromesa1();
       const promise2 = funcionQueRetornaPromesa2();
       /*...*/
       const promiseN = funcionQueRetornaPromesaN();

       const arregloDeResultados = await Promise.allSettled([
         promise1,
         promise2, 
         /*...*/,
         promiseN,
       ]);

       for (const resultado of arregloDeResultados) {
         if (resultado.status === "fulfilled") {
           // Caso en que el resultado de la promesa haya sido resuelto con éxito.

           const valorPromesaResulta = resultado.value; // Accedemos al valor de la respuesta de la promesa con resultado.value

           // Resto del cuerpo de este caso.
         } else if (resultado.status === "rejected") {
           // Caso en que el resultado de la promesa haya sido rechazado.

           const razonDelRechazo = resultado.reason; // Accedemos a la razón del rechazo con resultado.reason

           // Resto del cuerpo de este caso.
         }
       }

       // Resto del caso existoso.
     } catch (error) {
       // Cuerpo del caso de error.
     }
   };
   ```

2. Usando el `Promise`:

   ```javascript
   const promise1 = funcionQueRetornaPromesa1();
   const promise2 = funcionQueRetornaPromesa2();
   /*...*/
   const promiseN = funcionQueRetornaPromesaN();

   Promise.allSettled([promise1, promise2 /*...*/, , promiseN])
     .then((arregloDeResultados) => {
       for (const resultado of arregloDeResultados) {
         if (resultado.status === "fulfilled") {
           // Caso en que el resultado de la promesa haya sido resuelto con éxito.

           const valorPromesaResulta = resultado.value; // Accedemos al valor de la respuesta de la promesa con resultado.value

           // Resto del cuerpo de este caso.
         } else if (resultado.status === "rejected") {
           // Caso en que el resultado de la promesa haya sido rechazado.

           const razonDelRechazo = resultado.reason; // Accedemos a la razón del rechazo con resultado.reason

           // Resto del cuerpo de este caso.
         }
       }

       /*...*/
     })
     .catch((error) => {
       // Cuerpo del catch.
     });
   ```

Como se puede observar, lo que hará el `Promise.allSettled()` será tomar como argumento un `Arreglo de promesas` y retornará una nueva `promesa`. La `promesa` retornada por el `Promise.allSettled()` tendrá la particularidad que siempre se va a resolver, sin importar si una o más `promesas` del `arreglo de promesas` son `rechazadas` o `aceptadas`. En valor con el que la `promesa` retornada por el `Promise.allSettled()` se resolverá será un `arreglo de objetos`, donde `cada objeto` corresponderá con `una promesa` y será de la siguiente forma general:

1. Si la promesa se `resuelve`, su `objeto correspondiente` será de la forma general:

    ```json
    {status: 'fulfilled', value: VALOR_RESULTANTE_DE_LA_PROMESA_AL_SER_ACEPTADA}
    ```

2. Si la promesa es `rechazada`, su `objeto correspondiente` será de la forma general:

    ```json
    {status: 'rejected', reason: VALOR_RESULTANTE_DE_LA_PROMESA_AL_SER_RECHAZADA}
    ```


Así que notemos que, como `alguna promesas pueden resolverse y otras no`, entonces nos toca decidir como manejar cada caso. Esto lo haremos con un `for...of` que recorrerá el `arreglo de objetos` y en base al `status` de cada `objeto`, decidiremos como proceder.

<b>¿Cuándo usar el Promise.allSettled()?</b>

Como la `Promesas` del `Arreglo de Promesas` que toma como argumento el `Promise.allSettled()` se ejecutarán de manera `Paralela`, entonces necesitaremos que estas `Promesas` sean todas `independientes entre sí`. Pero, será de especial utilidad cuando `no nos importe que algunas promesas se rechacen`, sino que nos querremos enfocar en las promesas que han sido `resueltas`.

<b>Ventaja del uso del Promise.allSettled():</b>

La ventaja del uso del `Promise.allSettled()` es que al ejecutar las `Promesas` de manera `paralela`, entonces `el tiempo de espera se reduce`. Es más, el tiempo de espera del `Promise.allSettled()` estará dado por el `tiempo que tarda la promesa que más tarda en resolverse o rechazarse` Por lo que notemos que ejecutarlo en `Paralelo` será mucho más eficiente que ejecutarlo en `Secuencia`.

<b>Truco muy utilizado:</b>

Un truco muy utilizado es el crear un `arreglo de datos` y luego utilizar el `map` para mapear dicho arreglo de datos a un `arreglo de promesas` del mismo tipo.

Esto se vería de la siguiente forma general:

```javascript
const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {
  // Cuerpo de la función asíncrona.

  const arregloDeDatos = [dato1, dato2, /*...*/, datoN];


  try {
    const arregloDePromesas = arregloDeDatos.map(dato => funcionQueRetornaPromesa(dato));


    const arregloDeResultados = await Promise.allSettled(arregloDePromesas);

    for (const resultado of arregloDeResultados) {
      if (resultado.status === "fulfilled") {
        // Caso en que el resultado de la promesa haya sido resuelto con éxito.

        const valorPromesaResulta = resultado.value; // Accedemos al valor de la respuesta de la promesa con resultado.value

        // Resto del cuerpo de este caso.
      } else if (resultado.status === "rejected") {
        // Caso en que el resultado de la promesa haya sido rechazado.

        const razonDelRechazo = resultado.reason; // Accedemos a la razón del rechazo con resultado.reason

        // Resto del cuerpo de este caso.
      }
    }

    // Resto del caso existoso.
  } catch (error) {
    // Cuerpo del caso de error.
  }
};
```

De esa manera, podemos crear un `arregloDePromesas` mediante una `funcionQueRetornaPromesa` y un `arregloDeDatos`.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar el `Promise.allSettled()`:

```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://api.github.com/users/HeberDamianAlturria",
  "https://NoExiste.com", // This URL does not exist
  "https://google.com", // This URL does not return JSON
];

const arrayOfResponses = await Promise.allSettled(
  urls.map((url) => fetch(url))
);

const okayResponses = arrayOfResponses.filter(
  (response) => response.status === "fulfilled" && response.value.ok
);

const arrayOfJsons = await Promise.allSettled(
  okayResponses.map((response) => response.value.json())
);

for (const json of arrayOfJsons) {
  if (json.status === "rejected") continue;

  console.log(json.value);
  console.log("---------------------------");
}
```

Y este código imprimirá lo siguiente por pantalla:

```json
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
---------------------------
{
  login: 'HeberDamianAlturria',
  id: 110596115,
  node_id: 'U_kgDOBpeQEw',
  avatar_url: 'https://avatars.githubusercontent.com/u/110596115?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/HeberDamianAlturria',
  html_url: 'https://github.com/HeberDamianAlturria',
  followers_url: 'https://api.github.com/users/HeberDamianAlturria/followers',
  following_url: 'https://api.github.com/users/HeberDamianAlturria/following{/other_user}',
  gists_url: 'https://api.github.com/users/HeberDamianAlturria/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/HeberDamianAlturria/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/HeberDamianAlturria/subscriptions',
  organizations_url: 'https://api.github.com/users/HeberDamianAlturria/orgs',
  repos_url: 'https://api.github.com/users/HeberDamianAlturria/repos',
  events_url: 'https://api.github.com/users/HeberDamianAlturria/events{/privacy}',
  received_events_url: 'https://api.github.com/users/HeberDamianAlturria/received_events',
  type: 'User',
  site_admin: false,
  name: 'Heber Alturria',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 4,
  following: 33,
  created_at: '2022-08-04T08:17:20Z',
  updated_at: '2024-03-24T07:57:47Z'
}
---------------------------
```

### Promise.race()

El `Promise.race()` se utiliza de la siguiente forma general:

1. Usando el `Async/await`:

   ```javascript
   const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {
     // Cuerpo de la función asíncrona.

     try {
       const promise1 = funcionQueRetornaPromesa1();
       const promise2 = funcionQueRetornaPromesa2();
       /*...*/
       const promiseN = funcionQueRetornaPromesaN();

       const valorDelMasRapidoEnResolverse = await Promise.race([promise1, promise2, /*...*/, promiseN]);

       // Resto del caso existoso.
     } catch (errorDelMasRapidoEnRechazarse) {
       // Cuerpo del caso de error.
     }
   };
   ```

2. Usando el `Promise`:

   ```javascript
   const promise1 = funcionQueRetornaPromesa1();
   const promise2 = funcionQueRetornaPromesa2();
   /*...*/
   const promiseN = funcionQueRetornaPromesaN();

   Promise.all([promise1, promise2 /*...*/, , promiseN])
    .then(valorDelMasRapidoEnResolverse => {
      // Cuerpo del then.
    })
    .catch(errorDelMasRapidoEnRechazarse => {
      // Cuerpo del catch.
    });
   ```

Como se puede observar, `Promise.race()` es una función que compara varias promesas y devuelve una nueva promesa. Esta nueva promesa se resuelve o se rechaza tan pronto como una de las promesas en el arreglo de promesas proporcionado se resuelve o se rechaza, lo que ocurra primero. En otras palabras, `Promise.race()` ejecutará en `paralelo` todas las `promises` del `arreglo de promesas` que toma como argumentos, y nos permite obtener el resultado de `resolve` o de `reject` de la primera promesa que se complete, ya sea de forma exitosa (`resolve`) o fallida (`reject`).

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar el `Promise.race()`:

```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://api.github.com/users/HeberDamianAlturria",
];

try {
  const response = await Promise.race(urls.map((url) => fetch(url)));

  console.log(await response.json());
} catch (error) {
  console.error(error);
}
```

En este ejemplo, el código ejecuta múltiples solicitudes de forma paralela y espera a que se complete la primera solicitud, ya sea con éxito o con error. Luego, imprime los datos obtenidos de la primera solicitud en formato JSON, o maneja cualquier error que pueda ocurrir durante el proceso.

### Promise.any()

A diferencia del `Promise.race()`, el `Promise.any()` ejecuta múltiples `promesas` de forma `paralela` y se quedará con el resultado de la primera `promesa` que haya sido `resuelta` e `ignorará` las `promesas` que hayan sido `rechazadas`. En caso de que `TODAS las promesas del arreglo de promesas que toma como argumento el Promise.any() se rechazan, entonces devolverá un error`.

El `Promise.any()` se utiliza de la siguiente forma general:

1. Usando el `Async/await`:

   ```javascript
   const nombreFuncionAsync = async (/* Parámetros (opcional) */) => {
     // Cuerpo de la función asíncrona.

     try {
       const promise1 = funcionQueRetornaPromesa1();
       const promise2 = funcionQueRetornaPromesa2();
       /*...*/
       const promiseN = funcionQueRetornaPromesaN();

       const valorDelMasRapidoEnResolverse = await Promise.any([promise1, promise2, /*...*/, promiseN]);

       // Resto del caso existoso.
     } catch (errorCuandoTodosFueronRechazados) {
       // Cuerpo del caso de error.
     }
   };
   ```

2. Usando el `Promise`:

   ```javascript
   const promise1 = funcionQueRetornaPromesa1();
   const promise2 = funcionQueRetornaPromesa2();
   /*...*/
   const promiseN = funcionQueRetornaPromesaN();

   Promise.all([promise1, promise2 /*...*/, , promiseN])
    .then(valorDelMasRapidoEnResolverse => {
      // Cuerpo del then.
    })
    .catch(errorCuandoTodosFueronRechazados => {
      // Cuerpo del catch.
    });
   ```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar el `Promise.any()`:

```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://api.github.com/users/HeberDamianAlturria",
];

try {
  const response = await Promise.any(urls.map((url) => fetch(url)));

  console.log(await response.json());
} catch (error) {
  console.error("All requests failed: ", error);
}
```

En este ejemplo, el código ejecuta múltiples solicitudes de forma `paralela` y espera a que se `resuelva` la primera solicitud, e ignorará aquellas que sean `rechazadas`. Luego, imprime los datos obtenidos de la primera solicitud en formato JSON, o maneja cualquier error que pueda ocurrir si `todas` las `promesas` han sido `rechazadas`.

## Fetch API.

El `fetch` es una API de JavaScript que nos permite hacer solicitudes `HTTP` de manera `asíncrona` mediante `promesas`. Podremos utilizar el `fetch` para poder hacer peticiones `GET`, `PUT`, `DELETE`, `PATCH`, `POST`, etc. a un `servidor web`.

El `fetch` es súper útil para crear aplicaciones del lado del cliente, ya que es fundamental hacer peticiones `HTTP` a una `API de un servidor`.

De forma general, el `fetch` se puede utilizar de la siguiente forma general:

```javascript
try {
  const response = await fetch(URL, OPTIONS);

  // Resto del cuerpo del try
} catch (error) {
  // Cuerpo del catch
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. 

El segundo argumento, `OPTIONS`, es opcional y es un `objeto` que nos permite configurar la solicitud. Por defecto, `OPTIONS` será `{}`. Aquí hay una tabla de las opciones comúnes que generalmente utilizaremos:


| Opción        | Descripción                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `method`      | Define el método HTTP a utilizar en la solicitud. Por defecto, GET. Otras opciones: HEAD, POST, etc...                     |
| `headers`     | Permite especificar los encabezados de la solicitud. Por defecto, `{}`                                                     |
| `body`        | Contiene los datos que se enviarán en el cuerpo de la solicitud. Puede ser de varios tipos: String, FormData, Blob, etc... |
| `credentials` | Indica si las credenciales del usuario deben incluirse en la solicitud.                                                    |
| `redirect`    | Controla cómo manejar las redirecciones.                                                                                   |

A lo largo de esta lección veremos algunas de estas configuraciones. Existen más, pero se utilizan en contextos muy específicos, por lo que decidí omitirlos.

Finalmente, `response` será un `objeto` que contendrá información sobre la respuesta que nos ha dado el servidor. El `response` será un objeto muy extenso, pero de dicho objeto generalmente trabajaremos con ciertos `atributos y métodos` que nos permitirán trabajar y procesar la respuesta dada por el servidor. Más adelante profundizaré en esto.

### Haciendo peticiones GET.

La petición más frecuente y fácil de crear es la petición `GET`. Una solicitud `GET` se utiliza para recuperar datos de un servidor web sin realizar cambios en los datos del servidor. Al hacer una petición `GET`, ésta devolverá un `response`.

Podemos hacer una petición `GET` de la siguiente forma general:

```javascript
try {
  const response = await fetch(URL);

  // Resto del código del try.
} catch (error) {
  // Cuerpo del catch.
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. Y notese que no debemos agregar ninguna opción, ya que el `fetch` por defecto hace una petición `GET`.

### Haciendo peticiones POST.

Una solicitud `POST` se utiliza para enviar datos desde el cliente al servidor, con el objetivo de que el servidor los procese. Los `datos a enviar` deberán guardarse en el `body` de la solicitud. Luego de que los datos son procesador por el servidor, éste nos dará un `response`.

En la mayoría de los casos, al trabajar con una `Método POST`, lo que haremos será mandar como `datos` al `servidor` valores `JSON`. Esto podemos hacerlo de la siguiente forma general:

```javascript
const datoAEnviar = {
  clave1: valor1,
  clave2: valor2,
  /*...*/,
  claveN: valorN,
};

try {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datoAEnviar),
  });

  // Resto del cuerpo del try.
} catch (error) {
  // Cuerpo del catch.
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. Y notese que ahora tenemos las siguientes opciones:

* `method`: En este caso el valor de method será `POST`, ya que el método a realizar.

* `headers`: En este caso el valor de headers será `{"Content-Type": "application/json"}`, ya que indica que el `body` a enviar será un `JSON`.

* `body`: Siempre debemos mandar en el `body` un valor de tipo `string`, por lo que debemos `parsear` el `objeto` a un `string` mediante el `JSON.stringify()`.

### Haciendo peticiones PUT.

Una solicitud `PUT` se utiliza para enviar datos desde el cliente al servidor con el propósito de `actualizar un recurso existente por completo` o crear uno nuevo si no existe. Los `datos a enviar` deberán guardarse en el `body` de la solicitud. Luego de que los datos son procesador por el servidor, éste nos dará un `response`.

En la mayoría de los casos, al trabajar con una `Método PUT`, lo que haremos será mandar como `datos` al `servidor` valores `JSON`. Esto podemos hacerlo de la siguiente forma general:

```javascript
const datoAEnviar = {
  clave1: valor1,
  clave2: valor2,
  /*...*/,
  claveN: valorN,
};

try {
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datoAEnviar),
  });

  // Resto del cuerpo del try.
} catch (error) {
  // Cuerpo del catch.
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. Y notese que ahora tenemos las siguientes opciones:

* `method`: En este caso el valor de method será `PUT`, ya que el método a realizar.

* `headers`: En este caso el valor de headers será `{"Content-Type": "application/json"}`, ya que indica que el `body` a enviar será un `JSON`.

* `body`: Siempre debemos mandar en el `body` un valor de tipo `string`, por lo que debemos `parsear` el `objeto` a un `string` mediante el `JSON.stringify()`.

### Haciendo peticiones PATCH.

A diferencia del método `PUT` que busca `actualizar por completo un recurso existente en el servidor`, el método `PATCH` se utiliza para enviar datos al servidor con el propósito de `actualizar parcialmente un recurso existente`. Los `datos a enviar` deberán guardarse en el `body` de la solicitud. Luego de que los datos son procesador por el servidor, éste nos dará un `response`.

En la mayoría de los casos, al trabajar con una `Método PATCH`, lo que haremos será mandar como `datos` al `servidor` valores `JSON`. Esto podemos hacerlo de la siguiente forma general:

```javascript
const datoAEnviar = {
  clave1: valor1,
  clave2: valor2,
  /*...*/,
  claveN: valorN,
};

try {
  const response = await fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datoAEnviar),
  });

  // Resto del cuerpo del try.
} catch (error) {
  // Cuerpo del catch.
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. Y notese que ahora tenemos las siguientes opciones:

* `method`: En este caso el valor de method será `PATCH`, ya que el método a realizar.

* `headers`: En este caso el valor de headers será `{"Content-Type": "application/json"}`, ya que indica que el `body` a enviar será un `JSON`.

* `body`: Siempre debemos mandar en el `body` un valor de tipo `string`, por lo que debemos `parsear` el `objeto` a un `string` mediante el `JSON.stringify()`.

### Haciendo peticiones DELETE.

Una solicitud `DELETE` se utiliza para solicitar la `eliminación de un recurso específico en un servidor web`. Podemos hacerlo de la siguiente forma general:

```javascript
try {
  const response = await fetch(URL, {
    method: "DELETE",
  });

  // Resto del cuerpo del try.
} catch (error) {
  // Cuerpo del catch.
}
```

Siendo `URL` un `string` que representa la dirección del sitio al que queremos hacer la solicitud. Y notese que ahora tenemos como opción el `method` establecido en el valor `DELETE`.

### Trabajando con los atributos del response.

Notese que hemos visto que la forma general de utilizar el `fetch` es:

```javascript
try {
  const response = await fetch(URL, OPTIONS);

  // Resto del cuerpo del try
} catch (error) {
  // Cuerpo del catch
}
```

Notese que utilicé la forma general `const response = await fetch(URL, OPTIONS);` para dar a entender que esto lo haremos para cualquier tipo de consulta HTTP, ya sea `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.

Como ya se ha mencionado, el `response` será un `objeto` muy grande. A continuación veremos una tabla que muestra cuáles son los `atributos` más útiles del `response`:


| Atributo    | Descripción                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| .status     | El código de estado HTTP de la respuesta (por ejemplo, 200 para "OK", 404 para "No encontrado", etc.).                                          |
| .statusText | La descripción textual asociada con el código de estado HTTP (por ejemplo, "OK", "Not Found", etc.).                                            |
| .ok         | Un booleano que indica si la respuesta tuvo éxito o no. Es `true` si el código de estado está en el rango 200-299, y `false` en caso contrario. |
| .headers    | Un objeto `Headers` que representa los encabezados de la respuesta.                                                                             |
| .url        | La URL finalmente obtenida después de cualquier redireccionamiento.                                                                             |
| .redirected | Un booleano que indica si la respuesta ha sido redirigida.                                                                                      |

Estos son los atributos más comunes que puedes encontrar en el objeto `response`. Cada uno de estos atributos proporciona información útil sobre la respuesta recibida del servidor.

<b>Dato importante:</b>

Generalmente usaremos el `response.ok` para determinar si una solicitud ha sido existosa o no. Y, en caso de que `no haya sido exitosa`, muchas veces haremos saltar un error. 

Es decir, de forma general, es común que hagamos lo siguiente:

```javascript
try {
  const response = await fetch(URL, OPTIONS);

  if (!response.ok) throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);

  // Resto del código en caso de que response.ok sea true.
} catch (error) {
  // Cuerpo del catch.
}
```

Notese que utilicé la forma general `const response = await fetch(URL, OPTIONS);` para dar a entender que esto lo haremos para cualquier tipo de consulta HTTP, ya sea `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como utilizar los `atributos` del `response`:

```javascript
const data = {
  userId: 1,
  id: 1,
  title: "Aguante el anime",
  body: "Soy un otaku",
};

try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  console.log(`status: ${response.status}`);
  console.log(`statusText: ${response.statusText}`);
  console.log(`ok: ${response.ok}`);
  console.log(`url: ${response.url}`);
  console.log(`headers: ${response.headers.get("content-type")}`);
  console.log(`redirected: ${response.redirected}`);
} catch (error) {
  console.error(error);
}
```

Y este código imprimirá por pantalla la siguiente información:

```
status: 201
statusText: Created
ok: true
url: https://jsonplaceholder.typicode.com/posts
headers: application/json; charset=utf-8
redirected: false
```

### Trabajando con los métodos del response para procesar la respuesta.

otese que hemos visto que la forma general de utilizar el `fetch` es:

```javascript
try {
  const response = await fetch(URL, OPTIONS);

  // Resto del cuerpo del try
} catch (error) {
  // Cuerpo del catch
}
```

Notese que utilicé la forma general `const response = await fetch(URL, OPTIONS);` para dar a entender que esto lo haremos para cualquier tipo de consulta HTTP, ya sea `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.

Como ya se ha mencionado, el `response` será un `objeto` muy grande. Cabe mencionar que en el `response`, el `body` de la `respuesta` dada por el servidor NO suele guardarse como un `atributo`, sino que debe ser accedida mediante `métodos asíncronos` que el `response` provee. A continuación veremos una tabla que muestra cuáles son los `métodos asíncronos` más útiles del `response` para poder `procesar` la respuesta:

Aquí tienes una tabla con algunos de los métodos más útiles del objeto `Response` en JavaScript, junto con una breve descripción de cada uno:

| Método           | Descripción                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.json()`        | Devuelve una promesa que `resuelve` con los datos de la respuesta parseados como `JSON`. Será el que más utilicemos. Equivale a un `JSON.parse()`.                |
| `.text()`        | Devuelve una promesa que `resuelve` con los datos de la respuesta como una cadena de texto. Será útil para elementos como HTML.                                   |
| `.blob()`        | Devuelve una promesa que `resuelve` con los datos de la respuesta como un objeto `Blob` (binary large object). Esto será útil para imágenes, videos, audios, etc. |
| `.arrayBuffer()` | Devuelve una promesa que `resuelve` con los datos de la respuesta como un `ArrayBuffer`. Esto será útil para imágenes, videos, audios, etc.                       |

Estos métodos son utilizados para acceder y manipular el `body de la respuesta` en diferentes formatos, según sea necesario en una aplicación web. Dependiendo del tipo de datos que se espera recibir en la `respuesta`, puedes elegir el método apropiado para parsear y trabajar con los datos de la respuesta de manera eficiente. Además, notemos que todos estos métodos `retornan promesas`, por lo que tendremos que hacerles un `await`.

<b>Ejemplo para parsear un arrayBuffer:</b>

En este ejemplo utilizaremos el método `.arrayBuffer()` para parsear una imágen de internet y guardarla en nuestra computadora:

```javascript
import { writeFile } from "fs/promises";

const downloadImageAsync = async (url, filename) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al descargar la imagen");
    }

    const buffer = await response.arrayBuffer();

    await writeFile(filename, Buffer.from(buffer));

    console.log("Imagen guardada correctamente");
  } catch (error) {
    console.error("Error:", error);
  }
};

downloadImageAsync(
  "https://definicion.de/wp-content/uploads/2015/10/anime.png",
  "kakashi.png"
);
```

Notese que en este código estamos parseando el `response` a un `arrayBuffer`, ya que querremos usar esos datos binarios para guardar la imágen que hemos obtenido mediante el `fetch`. Cabe mencionar que este código está muy orientado a `NodeJS`, ya que usamos un módulo llamado `fs/promises` para poder guardar la imágen en nuestra computadora.

<b>Ejemplo para parsear un Json:</b>

En este ejemplo utilizaremos el método `.json()` para parsear una respuesta como un json:

```javascript
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();

  console.log(json);
} catch (error) {
  console.error(error);
}
```

Y esto imprimirá en pantalla algo como lo siguiente: 

```json
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

<b>Ejemplo para parsear un Text:</b>

En este ejemplo utilizaremos el método `.text()` para parsear una respuesta como un text:

```javascript
try {
  const response = await fetch("https://google.com");

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  const text = await response.text();

  console.log(text);
} catch (error) {
  console.error(error);
}
```

Y esto imprimirá por pantalla el código `HTML` de `google.com` como si fuera un formato texto de la siguiente manera:

```
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="es-419"><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){var _g={kEI:'DK8LZsbGDZv75OUPwIKEqAU',kEXPI:'0,793110,572358,206,4804,2329809,1015,8,415241,9286,53691,4998,52810,2709,2872,2891,3926,4423,34679,30022,2614,13721,20583,4,17215,25550,43902,6624,7596,1,42154,2,39761,6700,28949,2173,4567,6256,24673,33064,2,2,1,26632,8155,23350,7451,14985,9779,8213,4202,30044,3142,17057,73178,2265,765,15816,1804,35269,11813,1635,5259556,12,6930,2,297,1094,253,567,19,5992735,2837961,1178,20718869,7264127,1008,15664,43887,3,318,4,1281,3,2121778,2585,16815,2,2,23012532,12799,8408,3323,13342,5473,11977,2950,6,7621,2063,28920,5887,1923,8588,2370,4832,1575,2964,7527,3354,2624,2897,4531,2901,2212,153,5122,2693,213,391,959,6567,5327,673,956,1149,1718,5,5218,8832,7942,2765,3858,1276,1794,1139,2075,3144,3727,661,3236,126,6967,377,161,55,54,1212,3,611,219,200,2503,1182,58,360,354,123,32,1690,794,1415,293,2070,1,621,637,2514,726,670,3387,114,242,813,430,1981,3742,11,1572,8,121,609,2,4451,110,1213,86,275,193,958,60,1054,226,467,4,53,218,539,522,277,2,1365,926,206,122,414,147,213,644,4,1,6,1786,2,4,126,85,26,3,2,78,383,5,3,303,219,5,131,1635,378,2313,660,261,649,2,1,14,1,303,5,11,483,38,1173,854,2,4,228,20,720,372,80,205,180,553,2,708,323,162,7,5,207,39,596,245,234,397,700,148,857,20,1173,471,996,519,996,459,429,8,88,45,240,347,28,123,299,79,140,1,246,1,161,507,629,71,142,1022,1,6,240,614,1237,235,168,120,87,135,426,2566,102,44,15,45,2959,21287289,365637,3,3084,684,3089,319,1808,251,607,4,1785,162,3297713',kBL:'xqA_',kOPI:89978449};(function(){var a;(null==(a=window.google)?0:a.stvsc)?google.kEI=_g.kEI:window.google=_g;}).call(this);})();(function(){google.sn='webhp';google.kHL='es-419';})();(function(){
var h=this||self;function l(){return void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null};var m,n=[];function p(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||m}function q(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b}function r(a){/^http:/i.test(a)&&"https:"===window.location.protocol&&(google.ml&&google.ml(Error("a"),!1,{src:a,glmm:1}),a="");return a}
function t(a,b,c,d,k){var e="";-1===b.search("&ei=")&&(e="&ei="+p(d),-1===b.search("&lei=")&&(d=q(d))&&(e+="&lei="+d));d="";var g=-1===b.search("&cshid=")&&"slh"!==a,f=[];f.push(["zx",Date.now().toString()]);h._cshid&&g&&f.push(["cshid",h._cshid]);c=c();null!=c&&f.push(["opi",c.toString()]);for(c=0;c<f.length;c++){if(0===c||0<c)d+="&";d+=f[c][0]+"="+f[c][1]}return"/"+(k||"gen_204")+"?atyp=i&ct="+String(a)+"&cad="+(b+e+d)};m=google.kEI;google.getEI=p;google.getLEI=q;google.ml=function(){return null};google.log=function(a,b,c,d,k,e){e=void 0===e?l:e;c||(c=t(a,b,e,d,k));if(c=r(c)){a=new Image;var g=n.length;n[g]=a;a.onerror=a.onload=a.onabort=function(){delete n[g]};a.src=c}};google.logUrl=function(a,b){b=void 0===b?l:b;return t("",a,b)};}).call(this);(function(){google.y={};google.sy=[];google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c])}google.y[c]=[a,b];return!1};google.sx=function(a){google.sy.push(a)};google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};google.bx=!1;google.lx=function(){};var d=[];google.fce=function(a,b,c,e){d.push([a,b,c,e])};google.qce=d;}).call(this);google.f={};(function(){
document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"===c||"q"===c&&!a.elements.q.value?!0:!1}else a=!1;a&&(b.preventDefault(),b.stopPropagation())},!0);document.documentElement.addEventListener("click",function(b){var a;a:{for(a=b.target;a&&a!==document.documentElement;a=a.parentElement)if("A"===a.tagName){a="1"===a.getAttribute("data-nohref");break a}a=!1}a&&b.preventDefault()},!0);}).call(this);</script><style>#gbar,#guser{font-size:13px;padding-top:1px !important;}#gbar{height:22px}#guser{padding-bottom:7px !important;text-align:right}.gbh,.gbd{border-top:1px solid #c9d7f1;font-size:1px}.gbh{height:0;position:absolute;top:24px;width:100%}@media all{.gb1{height:22px;margin-right:.5em;vertical-align:top}#gbar{float:left}}a.gb1,a.gb4{text-decoration:underline !important}a.gb1,a.gb4{color:#00c !important}.gbi .gb4{color:#dd8e27 !important}.gbf .gb4{color:#900 !important}
</style><style>body,td,a,p,.h{font-family:arial,sans-serif}body{margin:0;overflow-y:scroll}#gog{padding:3px 8px 0}td{line-height:.8em}.gac_m td{line-height:17px}form{margin-bottom:20px}.h{color:#1967d2}em{font-weight:bold;font-style:normal}.lst{height:25px;width:496px}.gsfi,.lst{font:18px arial,sans-serif}.gsfs{font:17px arial,sans-serif}.ds{display:inline-box;display:inline-block;margin:3px 0 4px;margin-left:4px}input{font-family:inherit}body{background:#fff;color:#000}a{color:#681da8;text-decoration:none}a:hover,a:active{text-decoration:underline}.fl a{color:#1967d2}a:visited{color:#681da8}.sblc{padding-top:5px}.sblc a{display:block;margin:2px 0;margin-left:13px;font-size:11px}.lsbb{background:#f8f9fa;border:solid 1px;border-color:#dadce0 #70757a #70757a #dadce0;height:30px}.lsbb{display:block}#WqQANb a{display:inline-block;margin:0 12px}.lsb{background:url(/images/nav_logo229.png) 0 -261px repeat-x;color:#000;border:none;cursor:pointer;height:30px;margin:0;outline:0;font:15px arial,sans-serif;vertical-align:top}.lsb:active{background:#dadce0}.lst:focus{outline:none}</style><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){window.google.erd={jsr:1,bv:1981,de:true};
var h=this||self;var k,l=null!=(k=h.mei)?k:1,n,p=null!=(n=h.sdo)?n:!0,q=0,r,t=google.erd,v=t.jsr;google.ml=function(a,b,d,m,e){e=void 0===e?2:e;b&&(r=a&&a.message);void 0===d&&(d={});d.cad="ple_"+google.ple+".aple_"+google.aple;if(google.dl)return google.dl(a,e,d),null;b=d;if(0>v){window.console&&console.error(a,b);if(-2===v)throw a;b=!1}else b=!a||!a.message||"Error loading script"===a.message||q>=l&&!m?!1:!0;if(!b)return null;q++;d=d||{};b=encodeURIComponent;var c="/gen_204?atyp=i&ei="+b(google.kEI);google.kEXPI&&(c+="&jexpid="+b(google.kEXPI));c+="&srcpg="+b(google.sn)+"&jsr="+b(t.jsr)+"&bver="+       
b(t.bv);var f=a.lineNumber;void 0!==f&&(c+="&line="+f);var g=a.fileName;g&&(0<g.indexOf("-extension:/")&&(e=3),c+="&script="+b(g),f&&g===window.location.href&&(f=document.documentElement.outerHTML.split("\n")[f],c+="&cad="+b(f?f.substring(0,300):"No script found.")));google.ple&&1===google.ple&&(e=2);c+="&jsel="+e;for(var u in d)c+="&",c+=b(u),c+="=",c+=b(d[u]);c=c+"&emsg="+b(a.name+": "+a.message);c=c+"&jsst="+b(a.stack||"N/A");12288<=c.length&&(c=c.substr(0,12288));a=c;m||google.log(0,"",a);return a};window.onerror=function(a,b,d,m,e){r!==a&&(a=e instanceof Error?e:Error(a),void 0===d||"lineNumber"in a||(a.lineNumber=d),void 0===b||"fileName"in a||(a.fileName=b),google.ml(a,!1,void 0,!1,"SyntaxError"===a.name||"SyntaxError"===a.message.substring(0,11)||-1!==a.message.indexOf("Script error")?3:0));r=null;p&&q>=l&&(window.onerror=null)};})();</script></head><body bgcolor="#fff"><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){var src='/images/nav_logo229.png';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;}
if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();}
}
})();</script><div id="mngb"><div id=gbar><nobr><b class=gb1>B�squeda</b> <a class=gb1 href="https://www.google.com/imghp?hl=es-419&tab=wi">Im�genes</a> 
<a class=gb1 href="https://maps.google.com.ar/maps?hl=es-419&tab=wl">Maps</a> <a class=gb1 href="https://play.google.com/?hl=es-419&tab=w8">Play</a> <a class=gb1 href="https://www.youtube.com/?tab=w1">YouTube</a> <a class=gb1 href="https://news.google.com/?tab=wn">Noticias</a> <a class=gb1 href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1 href="https://drive.google.com/?tab=wo">Drive</a> <a class=gb1 style="text-decoration:none" href="https://www.google.com.ar/intl/es-419/about/products?tab=wh"><u>M�s</u> &raquo;</a></nobr></div><div id=guser width=100%><nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a href="http://www.google.com.ar/history/optout?hl=es-419" class=gb4>Historial web</a> | <a  href="/preferences?hl=es-419" class=gb4>Preferencias</a> | <a target=_top id=gb_70 href="https://accounts.google.com/ServiceLogin?hl=es-419&passive=true&continue=https://www.google.com/&ec=GAZAAQ" class=gb4>Acceder</a></nobr></div><div class=gbh style=left:0></div><div class=gbh style=right:0></div></div><center><br clear="all" id="lgpd"><div id="lga"><img alt="Google" height="92" src="/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png" style="padding:28px 0 14px" width="272" id="hplogo"><br><br></div><form action="/search" name="f"><table cellpadding="0" cellspacing="0"><tr valign="top"><td width="25%">&nbsp;</td><td align="center" nowrap=""><input name="ie" value="ISO-8859-1" type="hidden"><input value="es-419" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden"><div class="ds" style="height:32px;margin:4px 0"><input class="lst" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000" autocomplete="off" value="" title="Buscar con Google" maxlength="2048" name="q" size="57"></div><br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="Buscar con Google" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid_1" value="Voy a tener suerte" name="btnI" type="submit"><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){var id='tsuid_1';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked 
= 1;if (this.form.iflsig)this.form.iflsig.disabled = false;}
else top.location='/doodles/';};})();</script><input value="ANes7DEAAAAAZgu9HBxEZTmV5BYhzBHLWU_VuW1umnpX" name="iflsig" type="hidden"></span></span></td><td class="fl sblc" align="left" nowrap="" width="25%"><a href="/advanced_search?hl=es-419&amp;authuser=0">B�squeda avanzada</a></td></tr></table><input 
id="gbv" name="gbv" type="hidden" value="1"><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(c=0;d=e[c++];)try{new ActiveXObject(d),b="2"}catch(h){}}a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f},0)};}).call(this);</script></form><div id="gac_scont"></div><div style="font-size:83%;min-height:3.5em"><br></div><span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="WqQANb"><a href="/intl/es-419/ads/">Publicidad</a><a href="/services/">Soluciones Empresariales</a><a href="/intl/es-419/about.html">Todo acerca de Google</a><a href="https://www.google.com/setprefdomain?prefdom=AR&amp;prev=https://www.google.com.ar/&amp;sig=K_D_k-ZP0L0fGZokRJeEbCMOQgYDU%3D">Google.com.ar</a></div></div><p style="font-size:8pt;color:#70757a">&copy; 2024 - <a href="/intl/es-419/policies/privacy/">Privacidad</a> - <a href="/intl/es-419/policies/terms/">Condiciones</a></p></span></center><script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){window.google.cdo={height:757,width:1440};(function(){var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight}
if(a&&b&&(a!=google.cdo.width||b!=google.cdo.height)){var e=google,f=e.log,g="/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI,h="",k=[],l=void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null;null!=l&&k.push(["opi",l.toString()]);for(var m=0;m<k.length;m++){if(0===m||0<m)h+="&";h+=k[m][0]+"="+k[m][1]}f.call(e,"","",g+h)};}).call(this);})();</script>  <script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){google.xjs={basecomb:'',basecss:'',basejs:'',ck:'xjs.hp.pws-dmAOKDQ.L.X.O',combam:'AQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAABAABAIAAOAAEAAAAEgAABACgIPoCAAG4AgAALw',cs:'ACT90oGDoEeg2lwCFB-FOqW27mkVl4IYIA',cssam:'AQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABAIAAAAAEAAAAEgAABAC',csss:'ACT90oHKjKNODrP7tw8uk0M79UIaMimNZw',excm:[],jsam:'AAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAAAAAAAAAAOAAAAAAAAAAAAAAgIPoCAAG4AgAALw',jss:'ACT90oEDfzNm26MZOreeshydWDRMTFW_Ig'};})();</script> <link href="/xjs/_/ss/k=xjs.hp.pws-dmAOKDQ.L.X.O/am=AQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAABAIAAAAAEAAAAEgAABAC/d=1/ed=1/rs=ACT90oHKjKNODrP7tw8uk0M79UIaMimNZw/m=sb_he,d" rel="stylesheet" nonce="qEY75CJ_oCN-UzPGkuvPwA">    <script nonce="qEY75CJ_oCN-UzPGkuvPwA">(function(){var u='/xjs/_/js/k\x3dxjs.hp.en.5_ryGvX7lwg.O/am\x3dAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAxgEAAAAAAAAAAOAAAAAAAAAAAAAAgIPoCAAG4AgAALw/d\x3d1/ed\x3d1/rs\x3dACT90oEDfzNm26MZOreeshydWDRMTFW_Ig/m\x3dsb_he,d';var st=0;var amd=0;
var e=this||self,f=function(a){return a};var g;var h=function(a){this.g=a};h.prototype.toString=function(){return this.g+""};var k={};
function m(a,b){a.src=b instanceof h&&b.constructor===h?b.g:"type_error:TrustedResourceUrl";var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var n=function(){var a=document;var b="SCRIPT";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};function p(a){a=null===a?"null":void 0===a?"undefined":a;if(void 0===g){var b=null;var c=e.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console&&e.console.error(d.message)}g=b}else g=b}a=(b=g)?b.createScriptURL(a):a;return new h(a,k)};void 0===google.ps&&(google.ps=[]);function q(){var a=u,b=function(){};google.lx=google.stvsc?b:function(){r(a);google.lx=b};google.bx||google.lx()}function t(a,b){b&&m(a,p(b));var c=a.onload;a.onload=function(d){c&&c(d);google.ps=google.ps.filter(function(l){return a!==l})};google.ps.push(a);document.body.appendChild(a)}google.as=t;function r(a){google.timers&&google.timers.load&&google.tick&&google.tick("load","xjsls");var b=n();b.onerror=function(){google.ple=1};b.onload=function(){google.ple=0};google.xjsus=void 0;t(b,a);google.aple=-1;google.psa=!0};google.xjsu=u;e._F_jsUrl=u;var v=!1;function w(){v||(q(),v=!0)}setTimeout(function(){var a;if(a=1===st&&google.caft){a:{a=document.getElementsByTagName("img");for(var b=0,c=a.length;b<c;b++){var d=a[b],l=Number(d.getAttribute("data-atf"))&1;d=d.hasAttribute("data-lzy_");if(l&&d){a=!0;break a}}a=!1}a=!a}a?(window.setTimeout(w,amd),google.caft(w)):2===st&&google.rairicb?(window.setTimeout(w,amd),google.rairicb(w)):q()},0);})();window._ = window._ || {};window._DumpException = _._DumpException = function(e){throw e;};window._s = window._s || {};_s._DumpException = _._DumpException;window._qs = window._qs || {};_qs._DumpException = _._DumpException;(function(){var t=[1,4,0,0,0,10240,0,21000576,67112960,8,65550,1179648,143360,2335246,9314400,3080192];window._F_toggles = window._xjs_toggles = t;})();function _F_installCss(c){}
(function(){google.jl={bfl:0,dw:false,ine:false,ubm:false,uwp:true,vs:false};})();(function(){var pmc='{\x22d\x22:{},\x22sb_he\x22:{\x22agen\x22:false,\x22cgen\x22:false,\x22client\x22:\x22heirloom-hp\x22,\x22dh\x22:true,\x22ds\x22:\x22\x22,\x22fl\x22:true,\x22host\x22:\x22google.com\x22,\x22jsonp\x22:true,\x22msgs\x22:{\x22cibl\x22:\x22Borrar b\\u00fasqueda\x22,\x22dym\x22:\x22Quiz\\u00e1s quisiste decir:\x22,\x22lcky\x22:\x22Voy a tener suerte\x22,\x22lml\x22:\x22M\\u00e1s informaci\\u00f3n\x22,\x22psrc\x22:\x22Se ha eliminado esta b\\u00fasqueda de tu \\u003Ca href\x3d\\\x22/history\\\x22\\u003EHistorial web\\u003C/a\\u003E\x22,\x22psrl\x22:\x22Eliminar\x22,\x22sbit\x22:\x22Buscar por im\\u00e1genes\x22,\x22srch\x22:\x22Buscar con Google\x22},\x22ovr\x22:{},\x22pq\x22:\x22\x22,\x22rfs\x22:[],\x22sbas\x22:\x220 3px 8px 0 rgba(0,0,0,0.2),0 0 0 1px rgba(0,0,0,0.08)\x22,\x22stok\x22:\x220UfTyJ9vaELqJeIhccWzo8tqluo\x22}}';google.pmc=JSON.parse(pmc);})();(function(){var b=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};
var e=this||self;var g,h;a:{for(var k=["CLOSURE_FLAGS"],l=e,n=0;n<k.length;n++)if(l=l[k[n]],null==l){h=null;break a}h=l}var p=h&&h[610401301];g=null!=p?p:!1;var q,r=e.navigator;q=r?r.userAgentData||null:null;function t(a){return g?q?q.brands.some(function(c){return(c=c.brand)&&-1!=c.indexOf(a)}):!1:!1}function u(a){var c;a:{if(c=e.navigator)if(c=c.userAgent)break a;c=""}return-1!=c.indexOf(a)};function v(){return g?!!q&&0<q.brands.length:!1}function w(){return u("Safari")&&!(x()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?t("Microsoft Edge"):u("Edg/"))||(v()?t("Opera"):u("OPR"))||u("Firefox")||u("FxiOS")||u("Silk")||u("Android"))}function x(){return v()?t("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")}function y(){return u("Android")&&!(x()||u("Firefox")||u("FxiOS")||(v()?0:u("Opera"))||u("Silk"))};var z=v()?!1:u("Trident")||u("MSIE");y();x();w();Object.freeze(new function(){});Object.freeze(new function(){});var A=!z&&!w(),D=function(a){if(/-[a-z]/.test("ved"))return null;if(A&&a.dataset){if(y()&&!("ved"in a.dataset))return null;a=a.dataset.ved;return void 0===a?null:a}return a.getAttribute("data-"+"ved".replace(/([A-Z])/g,"-$1").toLowerCase())};var E=[],F=null;function G(a){a=a.target;var c=performance.now(),f=[],H=f.concat,d=E;if(!(d instanceof Array)){var m="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];if(m)d=m.call(d);else if("number"==typeof d.length)d={next:b(d)};else throw Error("a`"+String(d));for(var B=[];!(m=d.next()).done;)B.push(m.value);d=B}E=H.call(f,d,[c]);if(a&&a instanceof HTMLElement)if(a===F){if(c=4<=E.length)c=5>(E[E.length-1]-E[E.length-4])/1E3;if(c){c=google.getEI(a);a.hasAttribute("data-ved")?f=a?D(a)||"":"":f=(f=
a.closest("[data-ved]"))?D(f)||"":"";f=f||"";if(a.hasAttribute("jsname"))a=a.getAttribute("jsname");else{var C;a=null==(C=a.closest("[jsname]"))?void 0:C.getAttribute("jsname")}google.log("rcm","&ei="+c+"&ved="+f+"&jsname="+(a||""))}}else F=a,E=[c]}window.document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",G)});}).call(this);</script></body></html>
```