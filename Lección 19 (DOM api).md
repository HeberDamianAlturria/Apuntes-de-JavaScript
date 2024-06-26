# DOM api.

En esta lección vamos a aprender a manipular el DOM. Esta habilidad es útil para las siguientes tareas:

1. Crear sitios web: Se puede manipular el DOM para crear sitios webs dinámicos utilizando Vanilla JavaScript. Lo cierto es que en la actualidad utilizamos frameworks y/o librerías para realizar esta tarea, sin embargo es útil aprender a crear sitios web sin ninguna de estas herramientas.

2. Crear scripts para sitios web: También podemos manipular el DOM mediante scripts que ejecuten alguna tarea repetitiva dentro de un sitio web, como puede ser el completar varios formularios de manera automática.

3. Crear web scrapers: También es útil saber manipular el DOM para crear web scrapers que obtengan información de distintos sitios web de manera automática.

## ¿Qué es el DOM?

El `DOM` (que significa `Document Object Model`) es el nombre que se le da a la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina `árbol DOM` (o simplemente `DOM`).

A continuación veremos un ejemplo visual de como se ve un `árbol DOM`:

Si tenemos el siguiente código HTML:

```html
<html>
  <head>
    <title>Titulo de ejemplo.</title>
  </head>
  <body>
    <h1>Estructura de árbol del DOM</h1>
    <div>
      <p>Aprende sobre el DOM</p>
    </div>
  </body>
</html>
```

Entonces el `árbol DOM` se vería como:

```
            hmtl
          /      \
        head     body
        /        /   \
    title       h1   div
                        \
                         p
```

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

### ¿Cómo trabajar con el DOM?

A la hora de trabajar con el DOM en JavaScript tenemos que realizar generalmente los siguiente dos pasos:

1. `Selección`:  En el código de JavaScript, creamos una variable o constante que haga referencia a un elemento del DOM. Para poder seleccionar los elementos del DOM en JavaScript, utilizaremos un objeto llamado `document` que me da acceso al DOM.

2. `Manipulación`: Una vez que hemos seleccionado el elemento del DOM y tenemos la referencia almacenada en una variable o constante, podemos manipular dicho elemento a través de esta referencia. Los cambios realizados en la referencia se reflejarán directamente en el código HTML.

## Seleccionar elementos del DOM.

Existen múltiples maneras de selecionar elementos del DOM en JavaScript. A continuación vamos a explicar cada una de ellas:

### Método getElementById:

Si tenemos una etiqueta de HTML definida de la siguiente forma general:

```html
<NombreEtiqueta id="NOMBRE_ID"></NombreEtiqueta>
```

Entonces podemos seleccionar esta etiqueta en JavaScript de la siguiente forma general:

```javascript
const nombreRefEtiqueta = document.getElementById("NOMBRE_ID");
```

`IMPORTANTE:` En caso de que hayan dos o más etiqueta con un mismo valor de `id` en el documento HTML, entonces el método `document.getElementById()` devolverá la primera etiqueta que encuentre con dicho `id`. Se supone que el `id` de una etiqueta HTML es único, sin embargo no está de más la aclaración.

#### Ejemplo:

A continuación veremos un ejemplo de como se puede utilizar esto:

Supongamos que tenemos el siguiente documento HTML llamado `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1 id="super_text">DOM en JavaScript</h1>
    <p id="text">Este es un párrafo</p>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo de JavaScript llamado `index.js` definido como:

```javascript
const h1Ref = document.getElementById("super_text");

console.log(h1Ref.innerText);
```

Entonces este código va a imprimir por consola:

```
DOM en JavaScript
```

Que es el texto correspondiente a la etiqueta `h1`.

### Método getElementsByTagName:

Si tenemos un conjunto de etiqueta de HTML definida de la siguiente forma general:

```html
<NombreEtiqueta> VALOR_1 </NombreEtiqueta>
<NombreEtiqueta> VALOR_2 </NombreEtiqueta>
<!-- ... -->
<NombreEtiqueta> VALOR_N </NombreEtiqueta>
```

Es decir, tenemos un conjunto de etiquetas del mismo tipo.

Entonces, podemos seleccionar todas estas etiquetas en JavaScript de la siguiente forma general:

```javascript
const listOfSameTags = document.getElementsByTagName("NombreEtiqueta");
```

#### Ejemplo:

Supongamos que tenemos el siguiente documento HTML llamado `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1>Cool URLS:</h1>
    <h3>Webs:</h3>
    <ul id="webs">
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li><a href="https://www.youtube.com/">Youtube</a></li>
    </ul>
    <h3>Games:</h3>
    <ul id="games">
      <li><a href="https://www.miniclip.com/games/en/">Miniclip</a></li>
      <li><a href="https://www.pokemon.com/es/">Pokemon</a></li>
      <li><a href="https://www.minecraft.net/es-es">Minecraft</a></li>
    </ul>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo de JavaScript llamado `index.js` definido como:

```javascript
const listOfAnchors = document.getElementsByTagName("a");

for (const amchors of listOfAnchors) {
  console.log(amchors.href);
}
```

Entonces este código va a imprimir por consola:

```
https://google.com/
https://leetcode.com/problemset/
https://www.youtube.com/
https://www.miniclip.com/games/en/
https://www.pokemon.com/es/
https://www.minecraft.net/es-es
```

Ya que va a seleccioanar todas las etiquetas del tipo `a`.


### Método getElementsByClassName:

Si tenemos un conjunto de etiqueta de HTML definida de la siguiente forma general:

```html
<NombreEtiqueta1 class="NOMBRE_CLASS"></NombreEtiqueta1>
<NombreEtiqueta2 class="NOMBRE_CLASS"></NombreEtiqueta2>
<!-- ... -->
<NombreEtiquetaN class="NOMBRE_CLASS"></NombreEtiquetaN>
```

Es decir, tenemos un conjunto de etiquetas cuyo valor del atributo `class` es el mismo.

Entonces, podemos seleccionar todas estas etiquetas en JavaScript de la siguiente forma general:

```javascript
const listOfTagsWithSameClassName = document.getElementsByClassName("NOMBRE_CLASS");
```

En otras palabras, `document.getElementsByClassName("NOMBRE_CLASS")` devolverá una lista de referencias a todos los elementos HTML que tengan el valor `NOMBRE_CLASS` en su atributo `class`.

#### Seleccionar etiquetas en base a un class name en común:

Notemos que en HTML una etiqueta puede tener asignado múltiples valores para su atributo `class`. Imaginemos que tenemos definidas las siguiente etiquetas:

```html
<NombreEtiqueta1 class="NOMBRE_CLASS RANDOM_1_1 ..."></NombreEtiqueta1>
<NombreEtiqueta2 class="NOMBRE_CLASS RANDOM_2_1 ..."></NombreEtiqueta2>
<!-- ... -->
<NombreEtiquetaN class="NOMBRE_CLASS RANDOM_N_1 ..."></NombreEtiquetaN>
```

Podemos apreciar que todas las etiquetas tienen en común el class name `NOMBRE_CLASS`, pero pueden diferir en el resto de class names. 

Si quisieramos en JavaScript seleccionar todas las etiquetas que tengan como class name el valor de `NOMBRE_CLASS`, entonces debemos hacer lo siguiente:

```javascript
const listOfTagsWithSameClassName = document.getElementsByClassName("NOMBRE_CLASS");
```

Y de esa manera lo hemos conseguido.

#### Seleccionar etiquetas que coincidan en dos o más class names sin importar el orden:

También podemos desear seleccionar un conjunto de etiquetas que tengan dos o más class names en común, sin importar el orden en que dichos class names se encuentren. Esto podemos hacerlo de la siguiente forma general:

Supongamos que tenemos definidas las siguientes etiquetas HTML:

```html
<NombreEtiqueta1 class="NOMBRE_CLASS_1 ... NOMBRE_CLASS_N"></NombreEtiqueta1>
<NombreEtiqueta2 class="NOMBRE_CLASS_1 ... NOMBRE_CLASS_N"></NombreEtiqueta2>
<!-- ... -->
<NombreEtiquetaN class="NOMBRE_CLASS_1 ... NOMBRE_CLASS_N"></NombreEtiquetaN>
```

Y queremos seleccionar las etiquetas cuyos class names sean `NOMBRE_CLASS_1 ... NOMBRE_CLASS_N`. Cabe mencionar que el orden de como estén escritos los class names NO es relevante.

Entonces, podemos seleccionarlos en JavaScript de la siguiente forma general:

```javascript
const listOfTagsWithSameClassName = document.getElementsByClassName("NOMBRE_CLASS_1 ... NOMBRE_CLASS_N");
```

Es decir que simplemente separamos los class names con espacios.

#### Ejemplo:

A continuación veremos un ejemplo de como se puede utilizar el método `getElementsByClassName`:

Supongamos que tenemos el siguiente documento HTML llamado `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1 class="Important Big Text">DOM en JavaScript</h1>
    <h2 class="Text Big">Esto es un buen h2</h1>
    <p class="Small Text">Este es un párrafo</p>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo de JavaScript llamado `index.js` definido como:

```javascript
const listOfBigText = document.getElementsByClassName("Big Text");

for (const element of listOfBigText) {
  console.log(element.innerText);
}
```

Entonces este código va a imprimir por consola:

```
DOM en JavaScript
Esto es un buen h2
```

Que es el texto correspondiente a la etiqueta `h1` y `h2`, los cuáles comparten los class names buscados.

### Método querySelectorAll:

Este método es mucho más sofisticado que los mencionados previamente, ya que nos permite utilizar cualquier tipo de `Selector CSS` para poder selecciones elementos de `DOM`. Esto significa que el método `document.querySelectorAll()` es muy flexible, pero por otro lado significa que hay que aprender como usar los `Selectores CSS` para poder utilizar de manera adecuada dicho método.

Se utilizará de la siguiente forma general:

```javascript
const listOfTags = document.querySelectorAll("SELECTOR_CSS");
```

Y notemos que dicho método devolverá una lista de referencias a las etiquetas HTML que fueron seleccionadas usando el `SELECTOR_CSS`.

#### Selectores CSS más comúnes:

A continuación explicaré como utilizar el método `querySelectorAll` con los `Selectores CSS` más comúnes:

1. `Seleccionar por etiqueta`: Si tenemos de forma general las siguientes etiquetas de HTML:

    ```html
    <NombreEtiqueta> VALOR_1 </NombreEtiqueta>
    <NombreEtiqueta> VALOR_2 </NombreEtiqueta>
    <!-- ... -->
    <NombreEtiqueta> VALOR_N </NombreEtiqueta>
    ```

    Entonces podemos seleccionar todas las etiquetas `<NombreEtiqueta>` en JavaScript de la siguiente forma general:

    ```javascript
    const listOfNombreEtiqueta = document.querySelectorAll("NombreEtiqueta");
    ```

2. `Seleccionar por Id`: Si tenemos de forma general las siguiente etiqueta de HTML:

    ```html
    <NombreEtiqueta id="NOMBRE_ID"></NombreEtiqueta>
    ```

    Entonces podemos seleccionar esta etiqueta en JavaScript de la siguiente forma general usando `querySelectorAll`:

    ```javascript
    const nombreRefEtiqueta = document.querySelectorAll("#NOMBRE_ID");
    ```

    Es decir que debemos poner adelante del `nombre del id` el símbolo `#`.

3. `Seleccionar por nombre de la clase`: Si tenemos de forma general las siguientes etiquetas de HTML:

    ```html
    <NombreEtiqueta1 class="NOMBRE_CLASS"></NombreEtiqueta1>
    <NombreEtiqueta2 class="NOMBRE_CLASS"></NombreEtiqueta2>
    <!-- ... -->
    <NombreEtiquetaN class="NOMBRE_CLASS"></NombreEtiquetaN>
    ```

    Es decir, tenemos un conjunto de etiquetas cuyo valor del atributo `class` es el mismo.

    Entonces, podemos seleccionar todas estas etiquetas en JavaScript de la siguiente forma general:

    ```javascript
    const listOfTagsWithSameClassName = document.querySelectorAll(".NOMBRE_CLASS");
    ```

    Es decir que debemos poner adelante del `nombre de la clase` el símbolo `.`.

4. `Seleccionar por atributos`: Si tenemos de forma general las siguientes etiquetas de HTML:

    ```html
    <NombreEtiqueta1 nombreAtributo="VALOR_1"></NombreEtiqueta1>
    <NombreEtiqueta2 nombreAtributo="VALOR_2"></NombreEtiqueta2>
    <!-- ... -->
    <NombreEtiquetaN nombreAtributo="VALOR_N"></NombreEtiquetaN>
    ```

    Entonces aquí también tenemos varias maneras distintas de seleccionar mediante atributos:

    1. `Por existencia de atributo:` En este caso podemos seleccionar todas las etiquetas que tengan un atributo llamado `nombreAtributo` en JavaScript, de la siguiente forma general:

        ```javascript
        const listOfTagsContainsSameAttribute = document.querySelectorAll("[nombreAtributo]");
        ```

    2. `Por atributo con valor específico:` En este caso podemos seleccionar todas las etiquetas que tengan en su atributo llamado `nombreAtributo` el valor exacto de `VALOR_ATTR` en JavaScript, de la siguiente forma general:

        ```javascript
        const listOfTagsWithExactSameValueAttribute = document.querySelectorAll("[nombreAtributo='VALOR_ATTR']");
        ```

    3. `Por atributo que empieza con un valor específico:` En este caso podemos seleccionar todas las etiquetas cuyo valor en su atributo llamado `nombreAtributo` empieza con `EMPIEZA_VALOR_ATTR` en JavaScript, de la siguiente forma general:

        ```javascript
        const listOfTagsWithExactSameValueAttribute = document.querySelectorAll("[nombreAtributo^='EMPIEZA_VALOR_ATTR']");
        ```

    4. `Por atributo que termina con un valor específico:` En este caso podemos seleccionar todas las etiquetas cuyo valor en su atributo llamado `nombreAtributo` termina con `TERMINA_VALOR_ATTR` en JavaScript, de la siguiente forma general:

        ```javascript
        const listOfTagsWithExactSameValueAttribute = document.querySelectorAll("[nombreAtributo$='TERMINA_VALOR_ATTR']");
        ```

    5. `Por atributo que contiene un valor específico:` En este caso podemos seleccionar todas las etiquetas cuyo valor en su atributo llamado `nombreAtributo` contiene el valor `CONTIENE_VALOR_ATTR` en JavaScript, de la siguiente forma general:

        ```javascript
        const listOfTagsWithExactSameValueAttribute = document.querySelectorAll("[nombreAtributo*='CONTIENE_VALOR_ATTR']");
        ```

5. `Selección por hijo directo:` Si tenemos de forma general las siguientes etiquetas de HTML:

    ```html
    <EtiquetaContenedora>
      <NombreEtiqueta1> VALOR_1 </NombreEtiqueta1>
      <NombreEtiqueta2> VALOR_2 </NombreEtiqueta2>
      <!-- ... -->
      <NombreEtiquetaN> VALOR_N </NombreEtiquetaN>
    </EtiquetaContenedora>
    ```

    Entonces vamos a poder seleccionar todas las `etiquetas hijas directas` que son contenidas por la `<EtiquetaContenedora>` de la siguiente forma general en JavaScript:

    ```javascript
    const listOfChildElements = document.querySelectorAll("EtiquetaContenedora > *");
    ```

    Y, si quisieramos todas las `etiquetas hijas directas que sean del tipo NombreEtiquetaI` que son contenidas por la `<EtiquetaContenedora>`, podríamos lograrlo de la siguiente forma general en JavaScript:

    ```javascript
    const listOfChildElementsSpecificType = document.querySelectorAll("EtiquetaContenedora > NombreEtiquetaI");
    ```

`IMPORTANTE:` También es importante mencionar que los `Selectores CSS` pueden combinarse para hacerlos muchos más específicos y, por ende, precisos a la hora de seleccionar la etiqueta HTML deseada. Es decir que NO hay una fórmula general de como utilizarlos, ya que existen múltiples combinaciones posibles dependiendo de lo que debamos seleccionar. Aunque es cierto que la mayoría de las veces usaremos selectores sencillos y, además, entendiendo los selectores básicos previamente mencionados, vamos a poder crear nuestras propias combinaciones.

#### Ejemplo:

Supongamos que tenemos un archivo HTML llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1>Cool URLS:</h1>
    <h3>Webs:</h3>
    <ul id="webs">
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li><a href="https://www.youtube.com/">Youtube</a></li>
    </ul>
    <h3>Games:</h3>
    <ul id="games">
      <li><a href="https://www.miniclip.com/games/en/">Miniclip</a></li>
      <li><a href="https://www.pokemon.com/es/">Pokemon</a></li>
      <li><a href="https://www.minecraft.net/es-es">Minecraft</a></li>
    </ul>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo llamado `index.js` definido de la siguiente forma:

```javascript
const listOfWebAnchors = document.querySelectorAll("ul#webs > li > a");

for (const webAnchor of listOfWebAnchors) {
  console.log(webAnchor.href);
}
```

Este código lo que hará será seleccionar de la etiqueta contenedora `ul` cuyo `id es webs`, las etiquetas `li` que son hijas directas. Y, a su vez, de las etiquetas `li` selecciono las etiquetas `a` que son sus hijas directas. Y de esa lista de etiquetas `a` voy a imprimir sus `href`.

Y esto va a imprimir por consola:

```
https://google.com/
https://leetcode.com/problemset/
https://www.youtube.com/
```

### Método querySelector:

Funciona de la misma manera que el método `querySelectorAll`, pero con la diferencia de que en lugar de obtener una lista de referencias a etiquetas que cumplan la propiedad del Selector CSS, vamos a quedarnos solamente con `la referencia de la primera etiqueta que cumpla la propiedad del Selector CSS`.

#### Ejemplo:

Supongamos que tenemos un archivo HTML llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1>Domains:</h1>
    <ul>
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li><a href="https://www.youtube.com/">Youtube</a></li>
    </ul>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo llamado `index.js` definido de la siguiente forma:

```javascript
const googleAnchor = document.querySelector("a[href*='google.com']");

console.log(googleAnchor.innerText);
```

Y esto va a imprimir por consola:

```
Google
```

## Búsquedas acotadas.

### Conocimientos necesarios:

Si tenemos de forma general las siguientes etiquetas de HTML:

```html
<EtiquetaContenedora>
  <NombreEtiqueta1> VALOR_1 </NombreEtiqueta1>
  <NombreEtiqueta2> VALOR_2 </NombreEtiqueta2>
  <!-- ... -->
  <NombreEtiquetaN> VALOR_N </NombreEtiquetaN>
</EtiquetaContenedora>
```

Nosotros al seleccionar en JavaScript la etiqueta llamada `EtiquetaContenedora` y guardar su referencia en una constante/variable de la siguiente forma general:

```javascript
/*
  Para esta forma general voy a usar el método querySelector, 
  pero podría utilizar cualquier otro método de selección que hayamos visto
  según sea necesario.
*/

const etiquetaContenedoraRef = document.querySelector("EtiquetaContenedora"); 
```

Entonces, la constante `etiquetaContenedoraRef` será en realidad una estructura de datos que definirá un `subárbol del DOM`. Para este caso, dicho `subárbol del DOM` se vería de la siguiente forma general:

```
                    EtiquetaContenedora
               /          |       ...      \
NombreEtiqueta1   NombreEtiqueta2  ...  NombreEtiquetaN
```

### Definición formal de búsqueda acotada.

Ya sabiendo esto, la técnica de `búsqueda acotada` consiste en guardar una referencia a una `etiqueta HTML contenedora` en una variable o constante en JavaScript. Dado que esto nos proporciona un `subárbol del DOM`, podemos aplicar cualquiera de los métodos de selección previamente mencionados (como `querySelector`, `getElementById`, `querySelectorAll`, etc.) sobre dicha variable o constante `contenedora`, con el objetivo de realizar la búsqueda exclusivamente dentro de ese `subárbol del DOM`. Y, notemos que esto podemos hacerlo múltiples veces de manera iterativa, hasta que lleguemos a una etiqueta que `NO tenga hijos` (es decir, una etiqueta que represente una `hoja` en nuestro `subárbol`).

Esto es de mucha utilidad cuando tenemos que buscar alguna etiqueta que está contenida dentro de múltiples etiquetas anidadas, ya que nos permite simplificar mucho la búsqueda.

Cabe mencionar que, en algunos casos, utilizando un buen `Selector de CSS` junto con algún método como `querySelector` o `querySelectorAll`, podríamos seleccionar de una manera factible una etiqueta que está contenida dentro de múltiples etiquetas anidadas. Sin embargo, para simplificar la lectura del código, hay veces que es conveniente utilizar directamente la técnica de `búsqueda acotada`.

### Forma general de cómo se vería.

Continuándo con la forma general previmantente dada. Recordemos que tenemos de forma general las siguientes etiquetas de HTML:

```html
<EtiquetaContenedora>
  <NombreEtiqueta1> VALOR_1 </NombreEtiqueta1>
  <NombreEtiqueta2> VALOR_2 </NombreEtiqueta2>
  <!-- ... -->
  <NombreEtiquetaN> VALOR_N </NombreEtiquetaN>
</EtiquetaContenedora>
```

Y supongamos que ahora queremos hallar la etiqueta llamada `NombreEtiquetaI` que sabemos que está contenida por la etiqueta llamada `EtiquetaContenedora`, y queremos hacerlo utilizando la técnica de `búsqueda acotada`. Entonces, podemos hacerlo en JavaScript de la siguiente manera general:

```javascript
/*
  Para esta forma general voy a usar el método querySelector, 
  pero podría utilizar cualquier otro método de selección que hayamos visto
  según sea necesario.
*/

// Obtengo la estructura del subárbol del DOM.
const etiquetaContenedoraRef = document.querySelector("EtiquetaContenedora");

// Busco en base al subárbol del DOM.
const etiquetaI = etiquetaContenedoraRef.querySelector("NombreEtiquetaI");
```

### Ejemplo.

Supongamos que tenemos un archivo HTML llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  </head>
  <body>
    <h1>Cool URLS:</h1>
    <h3>Webs:</h3>
    <ul id="webs">
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li><a href="https://www.youtube.com/">Youtube</a></li>
    </ul>
    <h3>Games:</h3>
    <ul id="games">
      <li><a href="https://www.miniclip.com/games/en/">Miniclip</a></li>
      <li><a href="https://www.pokemon.com/es/">Pokemon</a></li>
      <li><a href="https://www.minecraft.net/es-es">Minecraft</a></li>
    </ul>
    <script src="index.js"></script>
</body>
</html>
```

Y tenemos un archivo llamado `index.js` definido de la siguiente forma:

```javascript
const gamesUl = document.querySelector("#games");

const gameAnchors = gamesUl.querySelectorAll("a");

for (const gameAnchor of gameAnchors) {
  console.log(gameAnchor.href);
}
```

Y esto va a imprimir por consola:

```
https://www.miniclip.com/games/en/
https://www.pokemon.com/es/
https://www.minecraft.net/es-es
```

## Gestionar atributos del DOM.

Una vez que tengamos seleccionada una etiqueta HTML y guardada su referencia en una constante/variable de JavaScript, podemos ver que atributos tiene y también podemos manipular los valores de dichos atributos.

### Acceder a los atributos:

Si tenemos la variable/constante de JavaScript llamada `element` que hace referencia a una etiqueta HTML. Podemos utilizar los siguientes métodos para poder acceder a los atributos de dicha etiqueta:

| Métodos                                   | Descripción                                                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `element.hasAttributes()`                 | Devuelve `true` en caso de que el elemento HTML tenga atributos. En caso contrario devuelve `false`.                             |
| `element.hasAttribute("NOMBRE_ATRIBUTO")` | Devuelve `true` en caso de que el elemento HTML tenga el atributo llamado `NOMBRE_ATRIBUTO`. En caso contrario devuelve `false`. |
| `element.getAttributeNames()`             | Devuelve un `array` con los nombres de los atributos del elemento HTML.                                                          |
| `element.getAttribute("NOMBRE_ATRIBUTO")` | Devuelve el `valor` del `atributo` llamado `NOMBRE_ATRIBUTO` del elemento HTML o `null` si no existe.                            |

#### Caso especial.

Notemos que si usamos de la forma general: `element.getAttribute("class")`, esto va a devolvernos un `string` que representa los valores del atributo `class`. Sin embargo, hay veces que queremos una lista de los distintos valores de `class`. Para resolver este problema, tenemos también una propiedad especial llamada `element.classList` que se comporta de una manera similar a un `Array`, pero que realmente es un tipo especial llamado `DOMTokenList`. A continuación explicaré como trabajar con esta propiedad:


| Método                                       | Descripción                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `element.classList`                          | Devuelve la lista de clases del elemento HTML. Cabe mencionar que el tipo de la lista es `DOMTokenList`.    |
| `element.classList.length`                   | Devuelve el número de clases del elemento HTML.                                                             |
| `element.classList.item(n)`                  | Devuelve la clase número `n` del elemento HTML, o `null` si no existe.                                      |
| `element.classList.contains("NOMBRE_CLASE")` | Devuelve `true` si la clase llamada `NOMBRE_CLASE` existe en el elemento HTML, o `false` en caso contrario. |

Y también podemos recorrer el `element.classList` de la siguente forma general:

```javascript
for (const classValue of element.classList) {
  // Cuerpo del for.
}
```

#### Ejemplo.

Supongamos que tenemos un archivo llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1 id="title" class="cool big title" style="background-color: red">
      Cool Title.
    </h1>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el siguiente código en un archivo llamado `index.js`:

```javascript
const h1Ref = document.querySelector('#title');

const listOfAttributes = h1Ref.getAttributeNames();

for (const attributeName of listOfAttributes) {
  console.log(`${attributeName}: ${h1Ref.getAttribute(attributeName)}`);
}

console.log("Valores de la clase:");

for (const classValue of h1Ref.classList) {
  console.log(classValue);
}
```

Y esto va a imprimir por consola lo siguiente:

```
id: title
class: cool big title
style: background-color: red
Valores de la clase:
cool
big
title
```

Que son los atributos y sus correspondientes valores de la etiqueta `h1`.

### Modificar o eliminar atributos:

Si tenemos la variable/constante de JavaScript llamada `element` que hace referencia a una etiqueta HTML. Podemos utilizar los siguientes métodos para poder modificar o eliminar los atributos de dicha etiqueta:

| Métodos                                            | Descripción                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| `element.setAttribute("NOMBRE_ATRIBUTO", "VALOR")` | Añade o cambia el atributo `NOMBRE_ATRIBUTO` al valor `VALOR` del elemento HTML. |
| `element.removeAttribute("NOMBRE_ATRIBUTO")`       | Elimina el atributo `NOMBRE_ATRIBUTO` del elemento HTML.                         |

#### Caso especial: atributos booleanos.

En caso de tener `atributos booleanos`, el siguiente código es erróneo:

```javascript
// El siguiente código es ERRÓNEO:

element.setAttribute("NOMBRE_ATRIBUTO_BOOLEANO", true);

element.setAttribute("NOMBRE_ATRIBUTO_BOOLEANO", false);
```

Sino que la manera adecuada de hacerlo sería utilizar el método `element.toggleAttribute()` de la siguiente forma general:

```javascript
element.toggleAttribute("NOMBRE_ATRIBUTO_BOOLEANO", true); // Agrega el atributo NOMBRE_ATRIBUTO_BOOLEANO en caso de que no esté.

element.toggleAttribute("NOMBRE_ATRIBUTO_BOOLEANO", false); // Quita el atributo NOMBRE_ATRIBUTO_BOOLEANO en caso de que esté.
```

Y de esa manera podemos lograr simular que le asignamos valores a booleanos a los atributos booleanos.

#### Caso especial: lista de clases.

También recordemos que con `element.classList` podemos acceder a la lista de clases de la etiqueta HTML. Y `element.classList` también posee métodos para agregar y eliminar clases de la siguiente forma general:

| Método                                                           | Descripción                                                                                                                                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element.classList.add("CLASS_1", "CLASS_2", ..., "CLASS_N")`    | Añade las clases `CLASS_1`, `CLASS_2`, hasta `CLASS_N` al elemento HTML.                                                                                       |
| `element.classList.remove("CLASS_1", "CLASS_2", ..., "CLASS_N")` | Elimina las clases `CLASS_1`, `CLASS_2`, hasta `CLASS_N` del elemento HTML.                                                                                    |
| `element.classList.replace("CLASS_A_REEMPLAZAR", "NUEVA_CLASS")` | Reemplaza la clase `CLASS_A_REEMPLAZAR` por la clase `NUEVA_CLASS`. Va a retornar `true` en caso de que haya logrado reemplazarlo o `false` en caso contrario. |

#### Ejemplo:

Supongamos que tenemos un archivo llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1 id="title" class="big title" style="background-color: red">
      Cool Title.
    </h1>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el siguiente código en un archivo llamado `index.js`:

```javascript
const showAttributes = (listOfAttributes) => {
  for (const attributeName of listOfAttributes) {
    console.log(`${attributeName}: ${h1Ref.getAttribute(attributeName)}`);
  }
};

const h1Ref = document.querySelector("#title");

console.log("Valores de los atributos viejos:");

const listOfOldAttributes = h1Ref.getAttributeNames();

showAttributes(listOfOldAttributes); // muestra los atributos viejos.

console.log("Valores de los atributos actualizados:");

h1Ref.setAttribute("lang", "es"); // agrega el atributo lang con el valor "es".

h1Ref.classList.add("red", "text"); // agrega las clases red y text.

h1Ref.classList.remove("title"); // remueve la clase title.

const listOfNewAttributes = h1Ref.getAttributeNames();

showAttributes(listOfNewAttributes); // muestra los atributos actualizados.
```

Y esto va a imprimir por consola lo siguiente:

```
Valores de los atributos viejos:
id: title
class: big title
style: background-color: red

Valores de los atributos actualizados:
id: title
class: big red text
style: background-color: red
lang: es
```

## Gestionar etiquetas en el DOM.

Al igual que con los atributos, podemos también `leer el contenido de una etiqueta HTML`, `crear nuevas etiquetas HTML en JavaScript` e `insertar dichas etiquetas HTML en el DOM`. Para ello veremos una serie de métodos que nos permitirán realizar estas tareas de una manera sencilla:

### Leer el contenido de una etiqueta HTML:

Si tenemos la variable/constante de JavaScript llamada `element` que hace referencia a una etiqueta HTML. Podemos leer su contenido utilizando las siguientes propiedades especiales:

| Propiedades           | Descripción                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `element.nodeName`    | Devuelve un `string` que representa el nombre del nodo (etiqueta si es un elemento HTML). Solo lectura.   |
| `element.textContent` | Devuelve un `string` que representa el contenido de texto del elemento. Se puede asignar para modificar.  |
| `element.innerHTML`   | Devuelve un `string` que representa el contenido HTML del elemento. Se puede usar asignar para modificar. |
| `element.outerHTML`   | Idem a `.innerHTML` pero incluyendo el HTML del propio elemento HTML.                                     |

#### Ejemplo:

Supongamos que tenemos un archivo llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <p id="parraf">Esto es un texto normal y <strong>este texto está en negro</strong></p>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el siguiente código en un archivo llamado `index.js`:

```javascript
const pRef = document.querySelector("#parraf");

console.log(pRef.nodeName); // Imprime: "P"

console.log(pRef.textContent); // Imprime: "Esto es un texto normal y este texto está en negro"

console.log(pRef.innerHTML); // Imprime: "Esto es un texto normal y <strong>este texto está en negro</strong>"

console.log(pRef.outerHTML); // Imprime: "<p id="parraf">Esto es un texto normal y <strong>este texto está en negro</strong></p>"
```

### Modificar el texto de una etiqueta HTML:

Podemos modificar el texto de una etiqueta de la siguiente forma general:

```javascript
element.textContent = "NUEVO_VALOR";
```

De esa manera podemos modificar el texto de una etiqueta en JavaScript. 

#### Aclaración importante:

Cabe mencionar que es recomendable modifica el texto de una etiqueta de HTML que `solamente si ésta NO contiene ninguna otra etiqueta como hija`. Ya que si tenemos por ejemplo tenemos las etiquetas:

```html
<EtiquetaContenedor>
  <Etiqueta1> VALOR_1 </Etiqueta1>
  <Etiqueta2> VALOR_2 </Etiqueta2>
  <!-- ... -->
  <EtiquetaN> VALOR_N </EtiquetaN>
</EtiquetaContenedor>
```

Entonces, al hacer en JavaScript:

```javascript
const etiquetaContenedoraRef = document.querySelector("EtiquetaContenedor");

etiquetaContenedoraRef.textContent = "NUEVO_VALOR";
```

Entonces, el DOM va a cambiar a:

```html
<EtiquetaContenedor>
  NUEVO_VALOR
</EtiquetaContenedor>
```

Eliminando todas las etiqueta hijas que había previamente en el elemento.

#### Ejemplo:

Supongamos que tenemos un archivo llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <p id="parraf">Soy un texto.</p>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el siguiente código en un archivo llamado `index.js`:

```javascript
const pRef = document.querySelector("#parraf");

pRef.textContent = "Hola Mundo.";
```

Entonces, el DOM se renderiza con los siguientes valores:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <p id="parraf">Hola Mundo.</p>
    <script src="index.js"></script>
  </body>
</html>
```

Es decir, que modificamos el texto que muestra el párrafo al usuario.

### Crear nuestras propias etiquetas HTML.

En JavaScript podemos crear nuestras propias etiquetas HTML. Eso lo vamos a hacer de la siguiente forma general:

```javascript
const nombreEtiquetaQueCreo = document.createElement("TIPO_DE_ETIQUETA");

/* Le asigno un valor en su textContent (OPCIONAL): */

nombreEtiquetaQueCreo.textContent = "ALGUN_VALOR";

/* Le asigno valores a los atributos (OPCIONAL): */

nombreEtiquetaQueCreo.setAttribute("NOMBRE_ATRIBUTO_1", "VALOR_1");

nombreEtiquetaQueCreo.setAttribute("NOMBRE_ATRIBUTO_2", "VALOR_2");

// ...

nombreEtiquetaQueCreo.setAttribute("NOMBRE_ATRIBUTO_N", "VALOR_N");
```

Donde notemos que `TIPO_DE_ETIQUETA` será el tipo de etiqueta que queremos crear. De esa manera `nombreEtiquetaQueCreo` será una referencia a un objeto que representa la etiqueta HTML que estamos creando.

Notemos que en esta forma general también mostamos como le agregamos valor a `.textContent` y como le asignamos valores a sus `atributos`. Sin embargo, esos son pasos opcionales.

#### Dato muy importante:

Es impotante notar que estas etiquetas que creamos en JavaScript, están creadas solamente en memoria, lo que significa que NO están incluidas en el DOM y, por ende, NO son visibles en el documento HTML. Si quisieramos que estas etiquetas sean visibles en el documento HTML, debemos incluirlas en el DOM de manera manual (lo cuál explicaré a continuación como hacer).

Es más, existe una propiedad booleana llamada `.isConnected`, la cuál es `true` si la etiqueta que creamos está agregada al DOM y es `false` en caso contrario.

### Manipular el DOM.

#### Agregar etiquetas al DOM:

Si tenemos la variable/constante de JavaScript llamada `elementInDOM` que hace referencia a una etiqueta HTML que `está incluida en el DOM`, y hemos creado de la manera previamente explicada una etiqueta HTML cuya variable/constante de referencia es `customElement`, la cuál `aún no está incluida en el DOM`. Entonces, podemos utilizar los siguiente métodos para lograr incluir dicha etiqueta en el DOM:

| Métodos                                       | Descripción                                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `elementInDOM.appendChild(customElement)`     | Añade a la etiqueta `elementInDOM` la nueva etiqueta `customElement` como hijo.                                |
| `elementInDOM.before(customElement)`          | Añade la nueva etiqueta `customElement` justo antes de la etiqueta `elementInDOM`.                             |
| `elementInDOM.after(customElement)`           | Añade la nueva etiqueta `customElement` justo después de la etiqueta `elementInDOM`.                           |
| `elementInDOM.prepend(customElement)`         | Se añade la nueva etiqueta `customElement` antes del `primer hijo` de la etiqueta `elementInDOM`.              |
| `elementInDOM.append(customElement)`          | Se añade la nueva etiqueta `customElement` después del `último hijo` de la etiqueta `elementInDOM`.            |
| `elementInDOM.replaceChildren(customElement)` | Elimina `todos los hijos` de la etiqueta `elementInDOM` y los sustituye por la nueva etiqueta `customElement`. |
| `elementInDOM.replaceWith(customElement)`     | Se sustituye la etiqueta `elementInDOM` por la nueva etiqueta `customElement`.                                 |

Utilizando cualquiera de estos métodos, podemos lograr que `customElement` sea agregado al DOM y, por ende, sea visible en el documento HTML.

#### Eliminar etiquetas del DOM:

Si tenemos la variable/constante de JavaScript llamada `elementInDOM` que hace referencia a una etiqueta HTML que `está incluida en el DOM`. Es posible eliminar esta etiqueta de la siguiente forma general:

```javascript
elementInDOM.remove();
```

De esa manera logramos eliminar esta etiqueta del `DOM`.

#### Ejemplo:

Supongamos que tenemos un archivo llamado `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <ul id="webs">
      <li id="googleLI"><a href="https://www.google.com/">Google</a></li>
      <li id="leetcodeLI"><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li id="wikipediaLI"><a href="https://es.wikipedia.org/">Wikipedia</a></li>
    </ul>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el siguiente código en un archivo llamado `index.js`:

```javascript
const websUL = document.querySelector("#webs");

/* Agrega un título. */

const newTitle = document.createElement("h1");

newTitle.textContent = "Lista de sitios web:";

websUL.before(newTitle); // Agrego newTitle antes de websUL en el DOM

/* Agrega un nuevo link a la lista. */

const newLI = document.createElement("li");

newLI.setAttribute("id", "githubLI");

const newAnchorGithub = document.createElement("a");

newAnchorGithub.setAttribute("href", "https://github.com/");

newAnchorGithub.textContent = "Github";

websUL.appendChild(newLI); // Agrego newLI como hijo de websUL en el DOM.

newLI.appendChild(newAnchorGithub); // Agrego newAnchorGithub como hijo de newLI en el DOM.

/* Elimino el elemento de la lista que redirige hacia Google */

const googleLI = websUL.querySelector("#googleLI");

googleLI.remove(); // Elimino googleLI del DOM.
```

Entonces, el DOM se renderiza con los siguientes valores:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Lista de sitios web:</h1>
    <ul id="webs">
      <li id="leetcodeLI"><a href="https://leetcode.com/problemset/">LeetCode</a></li>
      <li id="wikipediaLI"><a href="https://es.wikipedia.org/">Wikipedia</a></li>
      <li id="githubLI"><a href="https://github.com/">Github</a></li>
    </ul>
    <script src="index.js"></script>
  </body>
</html>
```

Es decir que se agrega un `<h1>` con el títlo, y se agrega en el `<ul>` un nuevo `<li>` que contiene un `<a>` que redirige hacia Github. Además, en `<ul>` se eliminó el `<li>` que redirigía a Google.

## Manejar eventos.

### ¿Qué son los eventos?

En JavaScript, los `eventos` son notificaciones que indican que una acción específica ha ocurrido en la interfaz de usuario. Cada elemento HTML tiene sus propios eventos asociados, lo que permite manejar los eventos de cada etiqueta de manera independiente. Esto quiere decir que para cada etiqueta HTML puedo asociar a un determinado `evento` una `función` que `se ejecutará de manera automática` cuando el evento se `dispare`. Por ejemplo: si tengo un botón, entonces al evento que se encarga de registrar cuando un usuario hizo click sobre el botón puedo asociarle una función que se encargue de mostrar una foto de un gatito; de esa manera cada vez que el usuario clickeé el botón entonces automáticamente se mostrará la foto de un gatito.

Notemos entonces que el uso de los `eventos` es fundamental para lograr crear un `sitio web dinámico` que responda ante las acciones del usuario.

### Agregando eventos.

Si tenemos la variable/constante de JavaScript llamada `element` que hace referencia a una etiqueta HTML, entonces podemos agregarle a dicha etiqueta un `evento` de la siguiente forma general:

```javascript
element.addEventListener("NOMBRE_DEL_EVENTO", () => {
  /* Cuerpo de la función callback asociada al evento. */
});
```

De esa manera cuando el usuario realice en la etiqueta HTML llamada `element` la acción asociada al evento `NOMBRE_DEL_EVENTO`, entonces se ejecutará la `función callback` de manera automática.

También es posible asignarle una `función asíncrona` al `evento` de la siguiete forma general:

```javascript
element.addEventListener("NOMBRE_DEL_EVENTO", async () => {
  /* Cuerpo de la función callback asíncrona asociada al evento. */
});
```

Y, por último, también la `función callback` puede tomar como argumento un `objeto` el cuál es útil para manejar de manera correcta ciertos `eventos`. Eso lo escribiremos de la siguiente forma general:

```javascript
// Si la función callback debe ser síncrona.
element.addEventListener("NOMBRE_DEL_EVENTO", (event) => {
  /* Cuerpo de la función callback asociada al evento. */
});


// Si la función callback debe ser asíncrona.
element.addEventListener("NOMBRE_DEL_EVENTO", async (event) => {
  /* Cuerpo de la función callback asíncrona asociada al evento. */
});
```

### Los eventos más típicos.

Ahora vamos a aprender a utilizar los eventos más típicos, ya que hay algunos que tienen una manera concreta de ser usados o son mejores para ciertas etiquetas HTML. Además, aprenderemos bajo qué acciones del usuario se dispara cada evento.

Hay que tener en cuenta que no hablaré de todos los eventos existentes, sino solamente de los más usados.

#### El evento click.

Este evento se disparará cuando el usuario dé un `click` en la etiqueta HTML en que fue definido. Generalmente, lo vamos a utilizar en etiquetas HTML del tipo `<button>` o `<input>`. A continuación haré un ejemplo de como utilizar este evento:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button id="btn">Click me</button>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("Has presionado el botón"));
```

Entonces, cuando el usuario dé un `click` en el botón que dice `Click me`, saldrá una alerta que dirá: `Has presionado el botón`.

#### El evento dblclick.

Este evento se disparará cuando el usuario dé un `doble click` en la etiqueta HTML en que fue definido. Generalmente, lo vamos a utilizar en etiquetas HTML del tipo `<button>` o `<input>`. A continuación haré un ejemplo de como utilizar este evento:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button id="btn">Click me</button>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("dblclick", () => alert("Has presionado el botón dos veces"));
```

Entonces, cuando el usuario dé un `doble click` en el botón que dice `Click me`, saldrá una alerta que dirá: `Has presionado el botón dos veces`.

#### El evento focus.

Este evento es utilizado principalmente por las etiquetas `<select>`, `<textarea>` e `<input>` y lo que hará será disparar el evento en caso de que el usuario le dé el foco (es decir, empiece a interactuar) con alguna de las etiquetas HTML mencionadas. A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("focus", () => console.log("Le hiciste foco al input"));
```

En este ejemplo, cuando apretemos la etiqueta `<input>` para escribir texto, se mostraría en la consola un mensaje diciendo `Le hiciste foco al input`. Podemos notar que le hemos hecho foco, debido a que se nos aparecerá titilando el cursor para insertar texto. Y es importante notar que una vez que le hicimos foco a la etiqueta, no se volverá a ejecutar la función de nuevo hasta que dejemos de hacerle foco (apretando en cualquier lado de la pantalla fuera de la entrada de texto, lo cuál generará que el cursor de texto desaparezca) y volviendo a apretar a la etiqueta otra vez para darle foco.

#### El evento blur.

Este evento es utilizado principalmente por las etiquetas `<select>`, `<textarea>` e `<input>` y lo que hará será disparar el evento en caso de que el usuario le deje de hacer foco (es decir, empiece deje de interactuar) a alguna de las etiquetas HTML mencionadas. A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("blur", () => console.log("Le dejaste de hacer foco al input"));
```

En este ejemplo, cuando apretemos la etiqueta `<input>` para escribir texto para darle foco y luego dejamos de darle foco apretando en cualquier otro lado de la pantalla, se mostraría en la consola un mensaje diciendo `Le dejaste de hacer foco al input`. Podemos notar que le hemos dejado de hacer foco, debido a que dejará de aparecer el cursor que titila.

#### El evento copy.

Este evento es utilizado principalmente por las etiquetas `<textarea>` e `<input>`, y lo que hará será disparar el evento en caso de que el usuario intente copiar el texto que se encuentre en las ya mencionadas etiquetas HTML.

Generalmente usaremos el `evento copy` de la siguiente forma general:

```javascript
element.addEventListener("copy", (event) => {
  /* Cuerpo de la función callback asociada al evento copy. */
});
```

Y lo haremos de esta manera, ya que el `objeto llamado event` que toma como argumento la función de callback asociada al evento, tiene información que nos será de utilidad:

1. En `event.target.value` tendremos el texto que el usuario ha intentado copiar.

2. Si ejecutamos el siguiente método: `event.preventDefault()`, entonces evitaremos que el usuario pueda copiar el texto en cuestión.

<b><i>Ejemplo:</i></b>

A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("copy", (event) => {
  event.preventDefault(); // Evita que el texto sea copiado.

  console.log(`Texto copiado: ${event.target.value}`); // Muestra el texto que se intentó copiar.
});
```

En este ejemplo, cuando escribamos algo en la etiqueta `<input>` y luego lo intentemos copiar, entonces NO se va a copiar y se va a mostrar por consola lo que intentamos copiar.

#### El evento cut.

Este evento es utilizado principalmente por las etiquetas `<textarea>` e `<input>`, y lo que hará será disparar el evento en caso de que el usuario intente cortar el texto que se encuentre en las ya mencionadas etiquetas HTML.

Generalmente usaremos el `evento cut` de la siguiente forma general:

```javascript
element.addEventListener("cut", (event) => {
  /* Cuerpo de la función callback asociada al evento cut. */
});
```

Y lo haremos de esta manera, ya que el `objeto llamado event` que toma como argumento la función de callback asociada al evento, tiene información que nos será de utilidad:

1. En `event.target.value` tendremos el texto que el usuario ha intentado cortar.

2. Si ejecutamos el siguiente método: `event.preventDefault()`, entonces evitaremos que el usuario pueda cortar el texto en cuestión.

<b><i>Ejemplo:</i></b>

A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("cut", (event) => {
  event.preventDefault(); // Evita que el texto sea cortado.

  console.log(`Texto cortado: ${event.target.value}`); // Muestra el texto que se intentó cortar.
});
```

En este ejemplo, cuando escribamos algo en la etiqueta `<input>` y luego lo intentemos cortar, entonces NO se va a cortar y se va a mostrar por consola lo que intentamos cortar.

#### El evento paste.

Este evento es utilizado principalmente por las etiquetas `<textarea>` e `<input>`, y lo que hará será disparar el evento en caso de que el usuario intente pegar texto que se encuentre en las ya mencionadas etiquetas HTML.

Generalmente usaremos el `evento paste` de la siguiente forma general:

```javascript
element.addEventListener("paste", (event) => {
  /* Cuerpo de la función callback asociada al evento paste. */
});
```

Y lo haremos de esta manera, ya que el `objeto llamado event` que toma como argumento la función de callback asociada al evento, tiene información que nos será de utilidad:

1. En `event.clipboardData.getData("text")` tendremos el texto que el usuario ha intentado pegar.

2. Si ejecutamos el siguiente método: `event.preventDefault()`, entonces evitaremos que el usuario pueda pegar el texto en cuestión.

<b><i>Ejemplo:</i></b>

A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("paste", (event) => {
  event.preventDefault(); // Evita que el texto sea pegado.

  console.log(`Texto pegado: ${event.clipboardData.getData("text")}`); // Muestra el texto que se intentó pegar.
});
```

En este ejemplo, cuando intentemos pegar algo en la etiqueta `<input>`, entonces NO se va a pegar y se va a mostrar por consola lo que intentamos pegar.

#### El evento input.

Este evento es utilizado por las etiquetas `<input>` y `<textarea>`, y lo que hará será disparar el evento a medida que el usuario vaya modificado el texto dentro de las etiquetas HTML en cuestión. 

Generalmente usaremos el `evento input` de la siguiente forma general:

```javascript
element.addEventListener("input", (event) => {
  /* Cuerpo de la función callback asociada al evento input. */
});
```

Y lo haremos de esta manera, ya que el `objeto llamado event` que toma como argumento la función de callback asociada al evento, nos permite acceder al `texto actualizado` mediante la propiedad `event.target.value`.

<b><i>Ejemplo:</i></b>

A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <p id="displayText">No hay texto</p>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

const displayTextParraf = document.getElementById("displayText");

textInput.addEventListener("input", (event) => {
  const text = event.target.value;

  if (!text) {
    displayTextParraf.textContent = "No hay texto";
  } else {
    displayTextParraf.textContent = text;
  }
});
```

En este ejemplo, a medida que el usuario vaya escribiendo dentro de la etiqueta `<input>`, se irá mostrando en la etiqueta `<p>` el valor de lo que el usuario escribe.

#### El evento keyup.

Este evento se utiliza generalmente con las etiquetas `<input>` y `<textarea>`, y lo que hace es disparar el evento cuando el usuario halla `soltado` una tecla que tenía pulsada. La importancia de este evento es que se ejecutará la función únicamente cuando la tecla sea `soltada`, por lo que mientras esté presionada por el usuario, no va a hacer nada.

Generalmente usaremos el `evento keyup` de la siguiente forma general:

```javascript
element.addEventListener("keyup", (event) => {
  /* Cuerpo de la función callback asociada al evento keyup. */
});
```

Y lo haremos de esta manera, ya que el `objeto llamado event` que toma como argumento la función de callback asociada al evento, tiene información que nos será de utilidad:

1. En `event.target.value` tendremos `todo el texto` que el usuario tiene escrito dentro de la etiqueta HTML. Cabe mencionar que también podemos resetear el valor del texto escrito dentro de la etiqueta HTML haciendo: `event.target.value = "";`.

2. En `event.key` tendremos la `última tecla` que acaba de soltar mientras escribía dentro de la etiqeuta HTML.

<b><i>Caso de uso más común:</i></b>

En la mayoría de las ocasiones vamos a utilizar el `evento keyup` para poder realizar cierta acción en caso de que el usuario haya presionado la tecla `Enter` mientras escribía en nuestra etiqueta HTML, pero en caso contrario NO haremos nada. Esto lo podremos hacer de la siguiente forma general:

```javascript
element.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // Cuerpo de este caso.
    // Aquí generalmente usaremos el texto completo de event.target.value
  }
});
```

Esto es especialmente útil para implementar buscadores, ya al presionar `Enter` podemos buscar el texto que veniamos escribiendo en la etiqueta HTML.

<b><i>Ejemplo:</i></b>

A continuación haré un ejemplo para comprender mejor la idea:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <input
      id="txt"
      type="text"
      name="Texto Random"
      placeholder="Escribe algo..."
    />
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const textInput = document.getElementById("txt");

textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    alert(`Escribiste: ${event.target.value}`); // Muestro el valor del input.

    event.target.value = ""; // Reseteo el valor del input.
  }
});
```

En este ejemplo, el usuario va a escribir dentro de la etiqueta `<input>`, y cuando presione la tecla `Enter` entonces se mostrará una alerta con el texto que ha escrito y luego se resetea el valor del input.

#### El evento mouseover.

Este evento se disparará cuando el usuario pase el mouse de manera que `entre dentro` de la etiqueta en la que el evento fue definido. A continuación haré un ejemplo simple:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button id="btn">Apretame</button>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => console.log("Entraste al botón"));
```

En este ejemplo, cuando el usuario pase el mouse de manera que entre al botón que dice "Apretame" se mostrará en consola el siguiente mensaje: `Entraste al botón`.

#### El evento mouseout.

Este evento se disparará cuando el usuario pase el mouse de manera que `salga` de la etiqueta en la que el evento fue definido (por lo que, primero es necesario que el mouse halla entrado para que se detecte que ha salido). A continuación haré un ejemplo simple:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button id="btn">Apretame</button>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("mouseout", () => console.log("Saliste al botón"));
```

En este ejemplo, cuando el usuario pase el mouse de manera que salga del botón que dice "Apretame" se mostrará en consola el siguiente mensaje: `Saliste al botón`.

### Ejemplo interesante.

A continuación se verá un ejemplo interesante de como utilizar lo visto hasta el momento:

Si tenemos el archivo `index.html` definido como:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Generador de imágenes random de perros:</h1>
    <button id="btn">Generar imagen</button>
    <div id="img-list"></div>
    <script src="index.js"></script>
  </body>
</html>
```

Y tenemos el archivo de `index.js` con el siguiente código de JavaScript:

```javascript
const btn = document.getElementById("btn");

const divListImages = document.getElementById("img-list");

const fetchImageUrl = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!response.ok) {
    throw new Error("Failed to fetch image :(");
  }

  const data = await response.json();

  return data.message;
};

btn.addEventListener("click", async () => {
  const statusParagraph = document.createElement("p");

  statusParagraph.textContent = "Loading...";

  divListImages.prepend(statusParagraph);

  try {
    const imageUrl = await fetchImageUrl();

    const imageElement = document.createElement("img");

    imageElement.setAttribute("src", imageUrl);

    statusParagraph.replaceWith(imageElement);
  } catch (error) {
    statusParagraph.textContent = error.message;
    
    console.error(error);
  }
});
```

En este ejemplo, cada vez que el usuario clickeé el botón que dice `Generar imagen`, entonces va a generarse una etiqueta `<p>` con el texto `Loading...` y se la agregará en el DOM como el primer hijo de la etiqueta `<div>`. Luego puede darse uno y solamente uno de los siguientes escenarios:

* Que el `fetch` se haga de manera existosa. En cuyo caso, la etiqueta `<p>` será reemplazada por una etiqueta `<img>` que mostará la foto del perro.

* Que el `fetch` genere un error. En cuyo caso, la etiqueta `<p>` se actualizará para mostar el mensaje de error.

## Manipular formularios.