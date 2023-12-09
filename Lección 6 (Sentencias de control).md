# Sentencias de control.

En esta lección aprenderemos a como crear condicionales en JavaScript.

## Expresión if

Podemos utilizar la expresión `if` para modificar el flujo de ejecución del código bajo cierta condición. La forma general de hacerlo es:

```javascript
if (/* Condición */) {

  /* Cuerpo del if */

}

/* Demás código */
```

Donde notemos que la `Condición` será un valor booleano (dado generalmente por comparaciones y operadores lógicos). Si el valor de `Condición` es `true`, entonces se va a ejecutar el `Cuerpo del if` y al finalizar seguirá el flujo de ejecución por el `Demás código`, pero si es `false` entonces se va a ignorar dicho código (es decir, seguirá el flujo de ejecución por el `Demás código`). El `Cuerpo del if` puede estar compuesto por una o más instrucciones y como está definidio por entre `{}` entonces es fácil deducir que será un nuevo scope.

A continuación veremos un ejemplo sencillo:

```javascript
const age = 22;

console.log("Hola");

if (age >= 18) {
  console.log("Sos mayor de edad");
}

console.log("Chau");
```

En este ejemplo, se mostrarían por pantalla los siguientes mensajes: "Hola", "Sos mayor de edad" y "Chau", ya que como el valor de `age` es mayor a 18, entonces entra adentro del cuerpo del if.

Sin embargo, ahora observemos este ejemplo:

```javascript
const age = 10;

console.log("Hola");

if (age >= 18) {
  console.log("Sos mayor de edad");
}

console.log("Chau");
```

En este ejemplo, se mostrarían por pantalla los siguientes mensajes: "Hola" y "Chau", ya que como el valor de `age` es menor a 18, no entra dentro del cuerpo del if.

## Expresión if .. else

También podemos agregar una expresión opcional llamada `else` de la siguiente manera general:

```javascript
if (/* Condición */) {

  /* Cuerpo del if */

} else {

  /* Cuerpo del else */

}

/* Demás código */
```

Esto va a funcionar de la siguiente manera. Si la `Condición` es `true` entonces ejecuta el `Cuerpo del if` y al finalizar seguirá el flujo de ejecución por el `Demás código`, en caso contrario se ejecuta el `Cuerpo del else` y al finalizar seguirá el flujo de ejecución por el `Demás código`.

A continuación veremos un ejemplo:

```javascript
const age = 12;

console.log("Hola");

if (age >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

console.log("Chau");
```

En este ejemplo, se mostarían los siguientes mensajes: "Hola", "Sos menor de edad" y "Chau", ya que como `age >= 18` es `false` entonces se ejecuta el cuerpo del else.

## Expresión if .. else if .. else

También podemos ir encadenando múltiples sentencias `if` de la siguiente forma general:

```javascript
if (/* Condición 1 */) {

  /* Cuerpo del if 1 */

} else if (/* Condición 2 */) {

  /* Cuerpo del if 2 */

} else if (/* Condición n */) {

  /* Cuerpo del if n */

} else {

  /* Cuerpo del else */

}

/* Demás código */
```

Notemos que podemos agregar toda la cantidad de `else if` que sean necesarios. Esto funciona de la siguiente manera:

1. Se evalúa la `Condición 1`. Si el valor es `true`, entonces se entra al `Cuerpo del if 1` y al finalizar se seguirá el flujo de ejecución por el `Demás código`. En caso de que sea `false`, entonces se pasa al siguiente paso.

2. Se evalúa la `Condición 2`. Si el valor es `true`, entonces se entra al `Cuerpo del if 2` y al finalizar se seguirá el flujo de ejecución por el `Demás código`. En caso de que sea `false`, entonces se pasa al siguiente paso.

3. Se evalúa la `Condición n`. Si el valor es `true`, entonces se entra al `Cuerpo del if n` y al finalizar se seguirá el flujo de ejecución por el `Demás código`. En caso de que sea `false`, entonces se pasa al siguiente paso.

4. Si llegamos hasta este punto, entonces significa que todas las guardas fueron `false`, por consiguiente se entra al `Cuerpo del else` y al finalizar se seguirá el flujo de ejecución por el `Demás código`.

Notemos que esto nos indica que a lo sumo se entrará en el cuerpo de `una` de las sentencias de control (ya sea del if, el else if o del else). Y es muy importante notar que `se entrará en el cuerpo de la primera sentencia cuya condición sea true`; por lo que si tenemos distintas sentencias cuya condición es `true`, entonces sabemos que entrará en la primera que encuentra, la cuál será la que está definida en las líneas de código más arriba que el resto.

### Aclaración sobre el else.

También cabe mencionar que el `else` es opcional, por lo que podemos quitarlo de la siguiente forma general:

```javascript
if (/* Condición 1 */) {

  /* Cuerpo del if 1 */

} else if (/* Condición 2 */) {

  /* Cuerpo del if 2 */

} else if (/* Condición n */) {

  /* Cuerpo del if n */

}

/* Demás código */
```

Y aquí lo que estará sucediendo es que si todas las condiciones son `false`, entonces continuará el flujo del código por el `Demás código`.

### Pequeño ejemplo:

Ahora vamos a analizar el siguiente código:

```javascript
const age = 22;

if (age <= 12) {
  console.log("Viste Clarence");
} else if (age <= 25) {
  console.log("Viste Coraje el Perro Cobarde");
} else {
  console.log("Viste Heidi");
}
```

Entonces, lo que va a pasar es que primero se va a fijar si `age <= 12`, pero como es `false` entonces pasa a la condición de abajo. Va a verificar si `age <= 25` y como es `true`, entonces imprime "Viste Coraje el Perro Cobarde".

## Valores Falsy.

Los siguientes valores se evalúan como `false` si son usados como una condición:

- false
- undefined
- null
- 0
- NaN
- la cadena vacía ("")

Todos los demás valores, incluidos todos los objetos, se evalúan como `true` cuando se utilizan en una condición.

## Operador ternario.

El operador ternario es un operador utilizado para abreviar la sintáxis del `if ... else` en situaciones en donde tenemos que asignar un valor a una variable o constante bajo cierta condición. Se utiliza de la siguiente forma general:

```javascript
condición ? VALOR_CASO_TRUE : VALOR_CASO_FALSE;
```

Esto significa que si la `condición` es `true`, entonces va a devolver el valor de `VALOR_CASO_TRUE`, pero si la `condición` es `false` entonces va a devolver el valor de `VALOR_CASO_FALSE`.

Como he dicho previamente, se utilizar para asignar valores a variables o constantes bajo el valor de `condición`. A continuación veremos un ejemplo de eso:

```javascript
const nota = 6;
let estadoExamen = nota >= 4 ? "Aprobado" : "Desaprobado";

console.log(estadoExamen); // Imprime "Aprobado".
```

Y esto sería equivalente a hacer lo siguiente:

```javascript
const nota = 6;
let estadoExamen;

if (nota >= 4) {
  estadoExamen = "Aprobado";
} else {
  estadoExamen = "Desaprobado";
}

console.log(estadoExamen); // Imprime "Aprobado".
```

Pero la diferencia es que el `operador ternario` es mucho más resumido.

### Operadores ternarios anidados.

Generalmente, el operador ternario es muy útil cuando no se necesitan más de dos condiciones, ya que sino podemos tener `operadores ternarios anidados` que pueden generar que el código sea más difícil de leer. Por ejemplo:

```javascript
const nota = 9;
let estadoExamen =
  nota >= 7 ? "Promocionado" : nota >= 4 ? "Regularizado" : "Desaprobado";

console.log(estadoExamen); // Imprime "Promocionado".
```

Y esto sería equivalente a escribir:

```javascript
const nota = 9;
let estadoExamen;

if (nota >= 7) {
  estadoExamen = "Promocionado";
} else if (nota >= 4) {
  estadoExamen = "Regularizado";
} else {
  estadoExamen = "Desaprobado";
}

console.log(estadoExamen); // Imprime "Promocionado".
```

Y notemos que usando el `if .. else` es mucho más largo, pero es más fácil de leer que utilizando `operadores ternarios anidados`.

## Condicional Switch.

Una sentencia switch es una instrucción de flujo de control que prueba el valor de una expresión a la que le llamo `expression` contra varios casos. Esto de forma general se ve de la siguiente forma:

```javascript
switch (expression) {
  case VALOR_1:
    /* Cuerpo del caso 1 */
    break;
  case VALOR_2:
    /* Cuerpo del caso 2 */
    break;
  case VALOR_N:
    /* Cuerpo del caso N */
    break;
  default:
    /* Cuerpo del caso default */
    break;
}

/* Demás código */
```

Básicamente, si el valor de `expression` coincide con el valor de algún case que le llamaré de forma general `VALOR_I`, entonces va a ejecutar el `Cuerpo del caso I` y al finalizar va a continuar con el flujo del `Demás código`. En caso de que no coincida con ningún valor de los casos, entonces entra en el caso `default` y ejecuta el `Cuerpo del caso default` y al finalizar va a continuar con el flujo del `Demás código`.

Notemos que el switch es equivalente a hacer lo siguiene:

```javascript
if (expression === VALOR_1) {
  /* Cuerpo del caso 1 */
} else if (expression === VALOR_2) {
  /* Cuerpo del caso 2 */
} else if (expression === VALOR_N) {
  /* Cuerpo del caso N */
} else {
  /* Cuerpo del caso default */
}

/* Demás código */
```

Es importante notar que en el `switch` la comparación con cada valor se hace de manera estricta, por lo que debe coincidir el valor y el tipo para que entre al cuerpo de un determinado case.

### Pequeño ejemplo:

Veamos el siguiente código:

```javascript
const mascota = "perro";

switch (mascota) {
  case "lagarto":
    console.log("Tengo un lagarto");
    break;
  case "perro":
    console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "serpiente":
    console.log("Tengo una serpiente");
    break;
  case "loro":
    console.log("Tengo un loro");
    break;
  default:
    console.log("No tengo mascota");
    break;
}
```

En este ejemplo, se va a imprimir por consola "Tengo un perro", ya que el valor de `mascota` coincide con el `case "Perro"`.

## La importancia del break.

Es muy importante el uso del `break`, ya que es lo que le indica al `switch` donde finaliza el cuerpo de un case en particular. Sin el `break`, el código se seguiría ejecutando una vez que matcheara con un case hasta que el switch finalice o se encuentre con un `break` en el cuerpo de algún otro case.

Veamos un ejemplo de esto:

```javascript
switch (2) {
  case 1:
    console.log("El numero 1 fue elegido");
  case 2:
    console.log("El numero 2 fue elegido");
  case 3:
    console.log("El numero 3 fue elegido");
  default:
    console.log("No se eligió ningún número");
}
```

Y esto va a mostrar por consola los siguientes mensajes: "El numero 2 fue elegido", "El numero 3 fue elegido" y "No se eligió ningún número". Lo cuál es un comportamiento indeseado.

Para solucionarlo, debemos agregarle `break` al cuerpo de cada case de la siguiente manera:

```javascript
switch (2) {
  case 1:
    console.log("El numero 1 fue elegido");
    break;
  case 2:
    console.log("El numero 2 fue elegido");
    break;
  case 3:
    console.log("El numero 3 fue elegido");
    break;
  default:
    console.log("No se eligió ningún número");
    break;
}
```

De esa manera, ahora solamente imprimiría por consola: "El numero 2 fue elegido".

`Conclusión`: `Siempre hay que agregar los break para evitar errores`.

## Múltiples casos para un mismo cuerpo.

También se puede hacer que dos o más cases tengan un mismo cuerpo que ejecutar. Eso vamos a ver como se hace con el siguiente ejemplo:

```javascript
const comida = "Pizza";

switch (comida) {
  case "Pizza":
  case "Ñoquis":
  case "Fideos":
    console.log("Quiero comida salada");
    break;
  case "Helado":
  case "Torta":
    console.log("Quiero comida dulce");
    break;
  default:
    console.log("Quiero comer");
    break;
}
```

En este caso, si la variable `comida` tiene el valor `"Pizza"` o `"Ñoquis"` o `"Fideos"`, va a imprimir por consola "Quiero comida salada".

## Declarando variables y constantes en un switch.

En un `switch` el cuerpo de todos los cases pertenece a un mismo scope, por lo tanto para crear variables o constantes y evitar errores, debemos hacerlo de la siguiente forma general creand un bloque:

```javascript
switch (expression) {
  case VALOR_1: {
    /* Cuerpo del caso 1 en bloque */
    break;
  }
  case VALOR_2: {
    /* Cuerpo del caso 2 en bloque */
    break;
  }
  case VALOR_N: {
    /* Cuerpo del caso N en bloque */
    break;
  }
  default: {
    /* Cuerpo del caso default en bloque */
    break;
  }
}

/* Demás código */
```

De esa manera, ahora podemos definir variables o constantes en distintos scopes y evitar cualquier tipo de error.

Veamos un ejemplo:

```javascript
const mandado = "Ir de Compras";

switch (mandado) {
  case "Ir al Dentista": {
    const mensaje = "Odio ir al dentista";
    console.log(mensaje);
    break;
  }
  case "Ir de Compras": {
    const mensaje = "Amo ir de compras";
    console.log(mensaje);
    break;
  }
  default: {
    console.log("Sin mandados");
    break;
  }
}
```
