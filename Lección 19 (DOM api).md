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

