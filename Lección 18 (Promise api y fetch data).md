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