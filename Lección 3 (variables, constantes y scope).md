# Variables y constantes en JavaScript.

En la mayoría de los lenguajes de programación, vamos a necesitar almacenar información en variables o constantes para poder utilizarlos a lo largo del código. En esta lección aprenderemos a crear variables y constantes.

## Creando variables.

En JavaScript existen dos maneras de crear variables en JavaScript. Se puede hacer mediante el uso del `let` o del `var`, pero lo cierto es que a día de hoy `No hay que utilizar var nunca`. Hablaremos de sus particularidades a continuación:

### La palabra let.

Para crear variables mediante el uso de `let`, debemos hacerlo de la siguiente forma general:

```javascript
let nombreDeLaVariable;
```

Como se puede observar, creamos una variable que inicialmente tendrá el valor por defecto de `undefined`, ya que no se le ha asignado ningún valor inicial. Este valor es especial en JavaScript, ya que nos indica que la variable no tiene ningún valor definido.

Podríamos asignarle un valor de la siguiente manera general:

```javascript
let nombreDeLaVariable;

/* ... */

nombreDeLaVariable = ALGUN_VALOR;
```

Al asignarle en JavaScript un valor a una variable, dicha variable ahora será del tipo del valor asignado. En esta forma general supongamos que `ALGUN_VALOR` es del tipo `ALGUN_TIPO`, entonces `nombreDeLaVariable` al asignarle el valor `ALGUN_VALOR`, pasaría a ser del tipo `ALGUN_TIPO`.

También se puede asignarle un valor a una variable al momento de definirla de la siguiente forma general:

```javascript
let nombreDeLaVariable = ALGUN_VALOR;
```

Y esto es lo mismo que antes, pero requiere menos líneas de código. `Recomiendo hacerlo de esta manera en la medida de lo posible`.

A continuación veremos un ejemplo sencillo:

```javascript
let nombre = "Heber Alturria";
let edad = 22;

console.log(nombre); // imprime por consola "Heber Alturria".
console.log(edad); // imprime por consola 22.
```

Lo importante de la variables (y que lo diferencia de las constantes) es que podemos cambiar su valor a lo largo del código. De forma general, podemos hacer:

```javascript
let nombreDeLaVariable = ALGUN_VALOR;

/* ... */

nombreDeLaVariable = ALGUN_OTRO_VALOR;
```

Y cabe mencionar que, JavaScript al ser débilmente tipado, puede suceder que `ALGUN_VALOR` y `ALGUN_OTRO_VALOR` sean de distintos tipos.

Un ejemplo de esto sería:

```javascript
let algo = 250;

algo = "Hola";

console.log(algo); // Imprime "Hola".
```

Y como podemos notar, el valor de algo pasó de ser un número a un string sin ningún problema.

### La palabra var.

También se pueden crear variables con `var`, esto se hace de la siguiente forma general:

```javascript
var nombreDeLaVariable = ALGUN_VALOR;
```

Es decir, se declara de una manera similar al `let`.

Por ejemplo:

```javascript
var nombre = "Heber Alturria";
var edad = 22;

console.log(nombre); // imprime por consola "Heber Alturria".
console.log(edad); // imprime por consola 22.
```

La pregunta es: `¿Por qué no debo utilizar var?` Para responder esa pregunta, debemos aprender un nuevo concepto llamado `scope`.

## El scope.

El scope representa el contexto en el que las variables, constantes y las expresiones son "visibles" o pueden ser referenciados. El scope se organiza de manera jerarquica en dónde un scope de un nivel más interno puede acceder a los datos del scope de un nivel más externo, pero `el scope más externo no puede acceder a los datos de un scope interno, ya que al finalizar el scope más interno todos las variables, costantes y expresiones se borran junto con dicho scope interno (por lo que dejan de ser accesibles)`. Hay que tener en cuenta que hay casos que violan esta última regla y que debemos evitar a toda costa.

De forma general, podemos explicar esta regla de la siguiente manera:

```javascript
/* Inicio del scope del archivo */

/* Cuerpo del scope del archivo */

{  /* Inicio del scope interno */

  /* Cuerpo del scope interno */

} /* Fin del scope interno */

/* Fin del scope del archivo */
```

En esta forma general, el `scope interno` puede acceder a las variables, constantes y demás datos definidas en el `scope del archivo`. Sin embargo el `scope del archivo` nunca podrá acceder a los datos del `scope interno`. Esto se debe a que una vez que el `scope interno` finalice (salga del `{}`), todos sus datos serán borrados.

Como pudimos notar, en JavaScript se puede crear un scope usando las llaves `{}`, de esa manera todo lo que definamos entre `{}` pertenecerá a un scope más interno. Dichas llaves son utilizadas para crear `funciones`, `objetos`, `sentencias lógica`, `sentencias de iteración`, etc. por lo que tendremos que tener en cuenta que dentro de `{}` hay otro scope más interno.

A continuación veremos un ejemplo de como esto funciona:

```javascript
let x = 10;

{
  let z = 20;
  console.log(x); // imprime 10. 
  console.log(z); // imprime 20. 
}

console.log(z); // Acá el código se rompe, ya que no tiene acceso a la variable z porque está definida en un scope más interno.
```

### Explicación de como funciona internamente el scope.

Entender como funciona internamente el scope nos permitirá entender como trabaja las constantes y variables en JavaScript. No profundizaré en los detalles internos de como funciona, sino en la idea de como se manejan.

Básicamente, los scopes se definen mediante `activation records`, que es un stack en donde se van apilando los scopes (que están definidos por sus constantes, variables y demás datos). Los últimos elementos del stack (es decir, los últimos en apilarse), corresponden a scopes más internos, mientra que los primero elementos del stack (es decir, los primeros en haberse apilado) corresponden a los stacks más externos. Una vez que el código sale del `scope` (es decir, de los `{}` que definen el cuerpo de dicho scope), entonces se desapila del stack y por ende todos sus datos son borrados.

Al buscar una variables o constante o cualquier dato en el scope, se la busca en el primer elemento del `activation record` (que representa a el scope más interno); si no lo encuentra allí, seguirá buscando hacia los elementos más abajo del `activation record` (que representan a los scopes más externos); finalmente, si lo encuenta puede utilizarlo, si no lo encuentra entonces dará un error de que estamos buscando un valor inexistente.

#### <i>Ejemplo:</i>

A continuación, voy a hacer un ejemplo para explicar como es que funciona. Supongamos que tenemos el siguiente código:

```javascript
/* Scope archivo */
let x = 10;

{
  /* Scope interno */
  let z = 20;
  console.log(x); // imprime 10. 
}
```

entonces, al empezar a leer el scope del archivo tendríamos una representación de la siguiente manera:

```
-----------------
| Scope archivo |
|----------------
|   x   |   10  |
-----------------
```

Y una vez que entre adentro del scope interno, tendríamos lo siguiente:

```
-----------------
| Scope interno |
|----------------
|   z   |   20  |
-----------------
        |
        ↓       
-----------------
| Scope archivo |
|----------------
|   x   |   10  |
-----------------
```

Y al ejecutar el `console.log(x)`, entonces vamos a buscar primero si existe la variable x en el `Scope interno` y, como no lo encuentra, lo busca en el `Scope archivo` y allí lo encuentra con el valor de 10, entonces imprime 10 por pantalla.

#### <i>Otro ejemplo:</i>

Ahora, tenemos el siguiente código:

```javascript
/* Scope archivo */
let x = 10;

{
  /* Scope interno */
  let x = 200;
  console.log(x); // imprime 200. 
}

console.log(x); // imprime 10. 

```

Este ejemplo es muy particula, ya que tenemos dos variables que se llaman de la misma manera. Entonces, la pregunta es: ¿Cómo sabemos que valor se imprimirá? Y eso se resuelve siguiendo la lógica de los `activation records`.

Al empezar a leer el scope del archivo tendríamos una representación de la siguiente manera:

```
-----------------
| Scope archivo |
|----------------
|   x   |   10  |
-----------------
```

Y una vez que entre adentro del scope interno, tendríamos lo siguiente:

```
-----------------
| Scope interno |
|----------------
|   x   |  200  |
-----------------
        |
        ↓       
-----------------
| Scope archivo |
|----------------
|   x   |   10  |
-----------------
```

Y al ejecutar el primer `console.log(x)` en el `Scope interno`, entonces vamos a buscar primero si existe la variable x en el `Scope interno` y, como lo encontramos con el valor de 200, entonces vamos a imprimir 200 por consola.

Pero una vez que salimos del `Scope interno` (es decir, de las `{}` que definen al `Scope interno`), entonces se desapila del stack, quedando algo como:

```
-----------------
| Scope archivo |
|----------------
|   x   |   10  |
-----------------
```

Y al ejecutar el segundo `console.log(x)` en el `Scope archivo`, entonces vamos a buscar la variable x en el `activation record` y vemos que tiene el valor de 10, por lo que se imprime 10 por consola.

## let vs var.

Ahora que entendimos como funciona el `scope`, estamos en condiciones de entender la diferencia entre `let` y `var`.

La principal diferencia es que `let` tiene un `scope local`, lo que significa que respeta las definiciones del `scope` dada previamente. En cambio `var` tiene un `scope global`, lo que significa que una vez definida la variable, puede ser accedida en cualquier lugar del código, lo cuál es muy peligroso.

### <i>Ejemplo de la diferencia entre let y var</i>

Supongamos que tenemos el siguiente código definido con `let`:

```javascript
{
  /* Scope interno */
  let x = 20;
}

console.log(x); // Se rompe el código, ya que no existe x.
```

Según la lógica del `scope` que dimos previamente, el siguiente código se rompería debido a que al definir la variable x usando `let`, entonces una vez que se sale de los `{}` del `Scope interno`, entonces la variable no existiría. Por ende, al no encontrar a la variable x, el código daría error.

En su lugar, si definimos a la variable x usando `var` de la siguiente manera: 

```javascript
{
  /* Scope interno */
  let x = 20;
}

console.log(x); // imprime 20.
```

Esto imprime 20, debido a que ahora se define como parte del scope global y arruina la lógica que tienen los `scopes`.

### ¿Y por qué es peligroso usar var?

Esto se debe a que culpa de que viola la lógica de los `scopes`, entonces no hay manera de garantizar que una variable tendrá el valor que esperamos a lo largo del código.

Veamos el siguiente ejemplo:

```javascript
var x = 100;

/* Mucho más código */

{
  var x = 200000;
}

console.log(x); // imprime 200000. 
```

Como podemos observar, definimos originalmente la variable x con el valor de 100, pero en algún momento entramos a un scope interno y fue definido como 200000. Entonces, al ser un valor global, al salir del scope interno, permaneció la variable x valiendo 200000.

Entonces, si tenemos un código muy largo, puede ser que se repitan en algún scope interno los nombres de las variables y por ende se van a pisar, generando bugs difíciles de encontar.

### Conclusión.

Siempre hay que utilizar `let` para definir variables, ya que va a evitar errores innesperados con los scopes.

## Creando constantes.

La constantes se crean mediante la palabra `const` y, al igual que el `let`, tiene un `scope local`, por lo que respetan las reglas que dimos para los `scopes`. La forma general de definir una constante es de la siguiente forma general:

```javascript
const nombreDeLaConstante = ALGUN_VALOR;
```

Y la particularidad de las constantes es que nunca podremos asignarle otro valor. Cabe menciona que, debido a esto, las constantes no pueden definirse de la siguiente manera:

```javascript
/* Incorrecto */
const nombreDeLaConstante;
nombreDeLaConstante = ALGUN_VALOR;
```

Por lo que debemos si o sí crearlas y asignarles un valor por defecto.

## Creación múltiple de constantes y variables.

Podemos crear múltiples variables o constantes en una única línea de la siguiente forma general:

```javascript
/* Para variables */
let variable1 = ALGUN_VALOR_1, variable2 = ALGUN_VALOR_2, /*...*/, variableN = ALGUN_VALOR_N; 

/* Para constantes */
const constante1 = ALGUN_VALOR_1, constante2 = ALGUN_VALOR_2, /*...*/, constanteN = ALGUN_VALOR_N; 
```

Esto es muy útil para ahorrarnos líneas de código. Cabe mencionar que los valores pueden ser de distintos tipos, ya que eso no afecta en nada.

### Ejemplo:

```javascript
const nombre = "Heber", apellido = "Alturria", edad = 22;

console.log(nombre); // Imprime "Heber".
console.log(apellido); // Imprime "Alturria".
console.log(edad); // Imprime 22.
```