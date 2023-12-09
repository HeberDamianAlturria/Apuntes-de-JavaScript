# Bucles e iteración en JavaScript.

En esta lección aprenderemos a crear bucles e iteraciones en JavaScript.

## Bucle while.

El bucle `while` se escribe de la siguiente forma general:

```javascript
while (condición) {
  /* Cuerpo del while */
}

/* Demás código */
```

Esto lo que significa es que mientras el valor booleano de la `condición` sea `true`, entonces se va a seguir ejecutando el `Cuerpo del while`. Y una vez que la `condición` sea `false`, vamos a continuar el flujo de ejecución con el `Demás código`. Básicamente, esto funciona de la siguiente manera:

1. Se calcula el valor de la `condición`. Si el valor es `true`, entonces se ejecutar el `Cuerpo del while` y se vuelve a realizar el `paso 1.` (es decir, este paso). En cambio, si el valor es `false`, se pasa al siguiente paso.

2. Se termina el ciclo y se sigue ejecutando el `Demás código`.

Notese que como la `condición` se calcula al principio, entonces si es `false` desde el principio, entonces el `Cuerpo del while` nunca se habrá ejecutado.

Hay que tener en cuenta una cosa importante y es que `debemos garantizar que en algún momento la condición se hará false para salir del bucle`, ya que si esto no sucede entonces se ejecutará el cuerpo del bucle sin parar. Para lograrlo, generalmente vamos a tener que modificar valores en el `Cuerpo del while` que se utilicen en la `condición` con el objetivo de que en alguna iteración al evaluarla se haga `false`.

A continuación veremos un pequeño ejemplo sencillo de como usar el `while`:

```javascript
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
```

Este código va a imprimir por pantalla los valores del 1 al 10. Cabe destacar que notemos que cada vez que se ejecuta el `Cuerpo del while`, vamos incrementando el valor de la variable `i` en uno para garantizar que en algún punto la condición `i <= 10` se haga `false`.

## Bucle do...while

El bucle `do...while` está estrechamente relacionado con el ciclo `while`. Notemos que de manera general se define de la siguiente forma:

```javascript
do {
  /* Cuerpo del do...while */
} while (condición);

/* Demás código */
```

Y de igual manera, mientras el valor booleano de la `condición` sea `true`, entonces se va a seguir ejecutando el `Cuerpo del do...while`. Y una vez que la `condición` sea `false`, vamos a continuar el flujo de ejecución con el `Demás código`. La diferencia con el ciclo `while` podremos notarle en los pasos de como funciona:

1. Se ejecuta el `Cuerpo del do...while`. Al finalizar la ejecución del `Cuerpo del do...while`, entonces se calcula la `condición`. Si el valor de la `condición` es `true`, se vuelve a ejecutar el `paso 1.` (es decir, este paso). En cambio, si el valor es `false` entonces se pasa al siguiente paso.

2. Se finaliza el ciclo y se continúa el flujo de ejecución del `Demás código`.

Es decir, notemos que el `Cuerpo del do...while` se va a ejecutar al menos una vez, ya que la `condición` se evalúa al final. Esta es la principal diferencia con el `while`.

A continuación veremos un ejemplo de este bucle:

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
```

Esto va a imprimir los valores desde el 1 al 10.

## Bucle for

El ciclo `for` en JavaScript consiste en tres partes y se define de la siguiente forma general:

```javascript
for (expresiónInicial; expresiónCondicional; expresiónDeActualización) {
  /* Cuerpo del for */
}

/* Demás código */
```

Básicamente, las tres partes que conforman el `for` son las siguientes:

1. `expresiónInicial`: Es una expresión que se ejecuta una única vez antes de la primera evaluación de la `expresiónCondicional`. Esta expresión se utiliza para definir variables que vamos a utilizar como contador. Las variables creadas tienen un scope limitado al cuerpo del bucle. Una vez que el bucle ha terminado su ejecución las variables son destruidas.

2. `expresiónCondicional`: esta expresión es evaluada antes de la ejecución de cada iteración. Si el valor de esta expresión es `true`, entonces se va a ejecutar el `Cuerpo del for`. En cambio, si el valor es `false`, entonces va a seguir el flujo con el `Demás código`.

3. `expresiónDeActualización`: Esta expresión se ejecuta luego de cada iteración. Usualmente es utilizada para actualizar el valor de las variables que hayamos definido.

Cualquiera de estas tres expresiones o la sentencia del cuerpo del bucle pueden ser omitidas.

Hay que tener en cuenta una cosa importante y es que `debemos garantizar que en algún momento la expresiónCondicional se hará false para salir del bucle`, ya que si esto no sucede entonces se ejecutará el cuerpo del bucle sin parar.

A continuación veremos un ejemplo sencillo de como utilizar el `for`:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Esto va a mostrar los números del 1 al 10.

### Otro ejemplo de como utilizar for anidado:

A continuación veremos como utilizar un `for` anidado:

```javascript
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Y esto va a imprimir por consola lo siguiente:

```powershell
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
i: 3, j: 0
i: 3, j: 1
i: 3, j: 2
i: 4, j: 0
i: 4, j: 1
i: 4, j: 2
```
## El break.

La sentencia `break` se utiliza para salir de un bucle en el que ha sido llamado antes que la expresión de `condición` devuelva `false`. Dicho de otra manera, el `break` se utiliza para salir de un bucle de manera abrupta y sin importar el valor de la `condición`.

A continuación veremos un ejemplo de como se usa:

```javascript
for (let i = 0; i < 100000; i++) {
  if (i === 3) break;
  console.log(i);
}
```

Esto va a imprimir los valores del 0 al 2, ya que cuando se cumpla que `i === 3` entonces se ejecuta el `break` y se sale abruptamente del ciclo.

## El continue.

La sentencia `continue` suele usarse en el `for` para indicar que directamente se va a saltear el código restante del `Cuerpo del for` y que pase a la `expresiónDeActualización`.

A continuación veremos un ejemplo:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // Saltea el código restante para i par.

  console.log(i); // Imprime solo los números impares: 1, 3, 5, 7, 9
}
```

Como se puede observar en este ejemplo, cuando `i` es par entonces se salte el resto del código del cuerpo del for, resultando en que solamente se van a imprimir los valores impares de `i`.

## Bucle for...of

Este iterador puede tener más sentido cuando aprendamos más sobre `objetos iterables` en futuras lecciones, pero quiero explicarlo para tener centralizado en este documento todo lo referido a iteraciones.

El bucle `for...of` se utiliza para iterar a travéz de `objetos iterables` como lo son el `Array`, el `Map`, el `Set`, etc. Se utiliza de la siguiente forma general:

```javascript
for (const variable of objetoIterable) {
  /* Cuerpo del for...of */
}
```

Básicamente, lo que hace el `for...of` es que para cada elemento perteneciente al `objetoIterable` se lo asigna a la `variable` y ejecuta el `Cuerpo del for...of`. Se termina de iterar cuando el `objetoIterable` no tiene más elementos para asignarle a la `variable`. Cabe mencionar que esto no afecta de ninguna manera al `objetoIterable`.

A continuación veremos un ejemplo sencillo de como esto funciona:

```javascript
const array = [1,2,3,4];

for (const num of array) {
  console.log(num);
}
```

Esto va a imprimir por consola todos lo número que pertenecen al `array`.

## Bucle for...in
