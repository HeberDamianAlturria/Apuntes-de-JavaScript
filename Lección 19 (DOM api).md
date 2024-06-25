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