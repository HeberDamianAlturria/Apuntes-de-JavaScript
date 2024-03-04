# Programación orientada a objetos.

En esta lección veremos sobre la programación orientada a objetos en JavaScript. Para hacerlo, vamos a utilizar la sintáxis más moderna que ofrece JavaScript que es la utilización de `class` en lugar de utilizar cosas viejas como `function classes`.

## Creando clases.

Las clases son `una plantilla o modelo` para la creación de objetos. Una clase define un conjunto de `atributos` y `métodos` que los objetos pueden tener. Los `atributos` de una clase son los datos que los objetos de esa clase tienen. Los `métodos` son las acciones que los objetos pueden realizar, más precisamente, son funciones que pueden manipular los `atributos`.

En `JavaScript` para crear una clase se utiliza la palabra reservada `class` de la siguiente forma general:

```javascript
class NombreDeLaClase {
  // Cuerpo de la clase.
}
```

Generalmente el nombre de las `clases` deben escribirse usando `PascalCase`.

<b>Dato importante:</b> Es una buena práctica crear un archivo por clase, ya que al definir distintos métodos y atributos, el cuerpo de la clase puede crecer mucho.

### Constructor.

Una clase puede tener un método especial llamado `constructor`, que se llama automáticamente cuando se crea una nueva instancia de la clase. El constructor se utiliza generalmente para inicializar los `atributos` del objeto.

El `constructor` se utiliza de la siguiente forma general:

```javascript
class NombreDeLaClase {
  constructor(/* Puede tomar uno o más argumentos (opcional) */) {

    // Cuerpo del constructor.

  }

  /* Otros métodos de la clase */

}
```

Básicamente, el `constructor` es una función que puede recibir `cero o más argumentos`, dependiendo de las necesidades de inicialización de la clase, y `no retorna ningún valor explícito`. Como ya hemos mencionado, se utiliza generalmente para inicializar los `atributos` del objeto. El constructor será invocado de manera automática cuando creemos una nueva instancia de una clase mediante la palabra reservada `new` (que es lo que veremos a continuación).

### Creando instancias de clases.

Supongamos que tenemos definida de forma general la siguiente clase:

```javascript
class NombreDeLaClase {
  constructor(/* Puede tomar uno más argumentos (opcional) */) {

    // Cuerpo del constructor.

  }

  /* Otros métodos de la clase */

}
```

Entonces, para `crear una nueva instancia de una clase` debemos hacerlo de la siguiente forma general utilizando el operado `new`:

```javascript
const nuevaInstancia = new NombreDeLaClase(/* Se le puede pasar argumentos al constructos aquí */);
```

Esto lo que hará será, en base a la clase `NombreDeLaClase`, reservará memoria para la creación de un nuevo `objeto` y hará que `nuevaInstancia` sea un "puntero" que apunte a dicho objeto. Es evidente que la `asignación` de la nueva instancia se hace `por referencia`, por lo que dos instancias siempre serán distintas entre sí ya que apuntarán a distintos posiciones de la memoria.

Notese que al `crear una nueva instancia` mediante la palabra reservada `new`, lo que se hará es llamar al `constructor` de la clase que la define. Es por eso que podemos pasarle argumentos a la hora de crear dicha instancia.

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo para entender como funciona el constructor y como se crea una nueva instancia. Por ahora no crearemos `atributos` ni `métodos`, por lo que este ejemplo sería inútil en la práctica.

```javascript 
class ClaseDeEjemplo {
  constructor(name) {
    console.log(`Hola, ¿Cómo estás, ${name}?`);
  }
}

const instancia1 = new ClaseDeEjemplo("Heber"); // Imprime: Hola, ¿Cómo estás, Heber?

const instancia2 = new ClaseDeEjemplo("Naty"); // Imprime: Hola, ¿Cómo estás, Naty?
```

Como se puede observar en este ejemplo, al crear las instancias, el constructor será llamado de manera automática.

### El operador instanceof.

El operador `instanceof` es muy útil, ya que lo que hará será comprobar si un `objeto` es instancia de una `clase`. Básicamente, de forma general se utilizará de la siguiente manera:

```javascript
algunObjeto instanceof AlgunaClase
```

Y esto devolverá `true` si `algunObjeto` es una instancia de la clase llamada de forma general como `AlgunaClase`.

A continuación veremos un ejemplo sencillo de como esto funciona:

```javascript
class ClaseDeEjemplo {
  constructor(name) {
    console.log(`Hola, ¿Cómo estás, ${name}?`);
  }
}

const instanciaEjemplo = new ClaseDeEjemplo("Heber"); // Imprime: Hola, ¿Cómo estás, Heber?

const text = "Hola";

console.log(instanciaEjemplo instanceof ClaseDeEjemplo); // Imprime: true

console.log(text instanceof ClaseDeEjemplo); // Imprime: false
```

<b>Dato importante:</b> Hay ciertas particularidades que suceden cuando tenemos clases que heredan de otras, por lo que veremos más adelante que un objeto puede ser instancia de más de una clase.

## Atributos de clases.

Como ya hemos mencionado, los `atributos` de una clase son los datos que los objetos de esa clase tienen. Básicamente, un `atributo` no es más que una `variable` que le pertenece a una clase y que luego al crear una instancia de dicho clase, vamos a asignarle valores concretos y vamos a manipularlos mediante los métodos. 

### El operador this.

Para poder crear `atributos` debemos utilizar el operador `this` dentro del `constructor` de la siguiente forma general:

```javascript
class NombreDeLaClase {
  constructor(atributo1, atributo2, /* ...otros parámetros */) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    // Otros atributos.
  }

  /* Otros métodos de la clase */

}
```

Lo que está sucediendo es que el operador `this` dentro de una clase se refiere a la instancia actual de la clase, es decir, al objeto que se está utilizando en ese momento. Esto significa que cada instancia de la clase puede tener sus propias propiedades y valores, y `this` se usa para acceder a estos valores específicos de esa instancia en particular en un momento dado. 

Para simplificarlo, podemos pensar que el `this` al estar en el `constructor` va a crear las variables que serán nuestros `atributos`. Y cuando el `this` esté dentro de un `método`, estará referenciando a dichas variables. Y que cada instancia de la clase tendrá sus propios valores para los `atributos`.

Aquí en esta forma general también se puede apreciar como es que utilizamos el `constructor` para inicializar los `atributos`.

<b>Dato importante:</b> 

NO es necesario que el nombre del parámetro que recibe el `constructor` y el del atributo sean el mismo, pero si es lo más común. Por ejemplo, en esta forma general tenemos que `atributo1` es el parámetro que recibe el `constructor`, en cambio `this.atributo1` hace referencia al `atributo` de la clase, y como podemos notar se llaman de la misma manera.

<b>Ejemplo:</b>

A continuación veremos como crear un ejemplo sencillo:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Esto es un método.
  toString() {
    return `La altura es: ${this.height} y el ancho es: ${this.width}`;
  }
}

const rectangle1 = new Rectangle(2, 2);

const rectangle2 = new Rectangle(2, 2);

console.log(rectangle1.toString()); // Imprime: La altura es: 2 y el ancho es: 2

console.log(rectangle2.toString()); // Imprime: La altura es: 2 y el ancho es: 2

// Modifico el valor de height del rectangle1.
rectangle1.height = 1999;

console.log(rectangle1.toString()); // Imprime: La altura es: 1999 y el ancho es: 2

console.log(rectangle2.toString()); // Imprime: La altura es: 2 y el ancho es: 2
```

Como se puede observar en este ejemplo, `rectangle1` y `rectangle2` se crean en base a la clase `Rectangle`. Sin embargo, al ser instancias separadas, sus `atributos` son independientes entre sí, lo que significa que cambiar los valores de los atributos de `rectangle1` no afecta a `rectangle2` y viceversa.

### Atributos públicos.

Por defecto, al crear un `atributo` utilizando el `this` dentro del `constructor` de la siguiente forma general:

```javascript
class NombreDeLaClase {
  constructor(atributo1, atributo2, /* ...otros parámetros */) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    // Otros atributos.
  }

  /* Otros métodos de la clase */

}
```

Estos atributos serán `públicos`. Esto quiere decir que dichos `atributos` pueden ser `accedidos` y `modificados` desde cualquier parte del código que tenga una referencia a una instancia de la clase. De forma general, esto significa que:

```javascript
const nuevaInstancia = new NombreDeLaClase(valorAtributo1, valorAtributo2, /*...*/);

// Ya que sus atributos son públicos, podemos accederlos:
console.log(nuevaInstancia.atributo1); // Podriamos hacerlo con cualquier otro atributo público.

// Ya que sus atributos son públicos, podemos modificarlos:
nuevaInstancia.atributo1 = nuevoValorAtributo1; // Podriamos hacerlo con cualquier otro atributo público.
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo sencillo de esto:

```javascript
class Person {
  constructor(name, age, dni) {
    this.name = name;
    this.age = age;
    this.dni = dni;
  }

  // Esto es un método.
  toString() {
    return `Me llamo ${this.name}, tengo ${this.age} años y mi DNI es ${this.dni}`;
  }
}

const person1 = new Person("Heber", 22, "43.690.658");

console.log(person1.toString()); // Imprime: Me llamo Heber, tengo 22 años y mi DNI es 43.690.658

// Como son todos los atributos públicos, puedo accederlos:
console.log(person1.name); // Imprime: Heber

console.log(person1.age); // Imprime: 22

console.log(person1.dni); // Imprime: 43.690.658


// Como son todos los atributos públicos, puedo modificarlos:
person1.name = "Natasha";

person1.age = 23;

person1.dni = "43.142.142";

console.log(person1.toString()); // Imprime: Me llamo Natasha, tengo 23 años y mi DNI es 43.142.142
```

<b>El problema de utilizar atributos públicos:</b>

Una clave fundamental de la programación orientada a objeto es la `encapsulación`, la cuál consiste en ocultar los detalles internos de un objeto y exponer solo una interfaz pública. Esto se hace de esta manera para mejorar la consistencia del código, ya que si los `atributos` son públicos, cualquier otro programador puede modificar los valores y generar múltiples bugs.

Debido a que JavaScript es un lenguaje de programación débilmente tipado e interpretado, notemos que el hecho de utilizar `atributos` públicos puede generar si no se tiene especial cuidado a la hora de programar.

A continuación veremos un ejemplo del problema de tipos que podemos generar:

```javascript
class Person {
  constructor(name, age, dni) {
    this.name = name;
    this.age = age;
    this.dni = dni;
  }

  // Esto es un método.
  toString() {
    return `Me llamo ${this.name}, tengo ${this.age} años y mi DNI es ${this.dni}`;
  }
}

const person1 = new Person("Heber", 22, "43.690.658");

console.log(person1.toString()); // Imprime: Me llamo Heber, tengo 22 años y mi DNI es 43.690.658

person1.dni = 43142142; // Le cambio el tipo del atributo dni de un String a un entero.

console.log(person1.toString()); // Imprime: Me llamo Natasha, tengo 23 años y mi DNI es 43142142
```

Como se puede observar en este ejemplo, al atributo `dni` le cambiamos su tipo. Esto podría generar que sucedan situaciones inesperada en el código, pero dichas situaciones no se presentarán hasta el momento de ser interpretadas. Esto genera que podamos tener bugs que no sabemos que existían.

### Atributos privados.

Para lidiar con los problemas de los `atributos públicos`, podemos utilizar `atributos privados`. Dichos atributos privados, NO permiten su `acceso` ni `modificación` fuera de la clase. De esa manera, se respeta uno de los pilares de la programación orientada a objetos, la cuál es la `encapsulación`.

Podemos definir `atributos privados` de la siguiente forma general:

```javascript
class NombreDeLaClase {
  /* Definimos los atributos privados. */
  #atributoPriv1;
  #atributoPriv2;
  // Otros atributos privados.

  constructor(atributo1, atributo2, /* ...otros parámetros */) {
    this.#atributoPriv1 = atributo1;
    this.#atributoPriv2 = atributo2;
    // Otros atributos.
  }

  /* Otros métodos de la clase */

}
```

Notese que los `atributos privados` deben declararse mediante el símbolo `#` como prefijo del nombre que tendrá el atributo.

Entonces, como los atributos privados NO pueden ser `acedidos` ni `modificados` fuera de la clase, esto significa que de forma general lo siguiente sería incorrecto:

```javascript
/* Este código es incorrecto, solo se muestra como ejemplo de error. */

const nuevaInstancia = new NombreDeLaClase(valorAtributo1, valorAtributo2, /*...*/);

// Ya que sus atributos son privados, NO podemos accederlos:
console.log(nuevaInstancia.#atributoPriv1);
/*
  Este línea daría un error similar al siguiente:

  SyntaxError: Private field '#atributoPriv1' must be declared in an enclosing class

  Y no se ejecutaría.
*/

// Ya que sus atributos son privados, NO podemos modificarlos:
nuevaInstancia.#atributoPriv1 = nuevoValorAtributo1;
/*
  Este línea daría un error similar al siguiente:

  SyntaxError: Private field '#atributoPriv1' must be declared in an enclosing class

  Y no se ejecutaría.
*/
```


<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear atributos privados:

```javascript
class Person {
  #name;
  #age;
  #dni;

  constructor(name, age, dni) {
    this.#name = name;
    this.#age = age;
    this.#dni = dni;
  }

  // Esto es un método.
  toString() {
    return `Me llamo ${this.#name}, tengo ${this.#age} años y mi DNI es ${this.#dni}`;
  }
}

const person1 = new Person("Heber", 22, "43.690.658");

console.log(person1.toString()); // Imprime: Me llamo Heber, tengo 22 años y mi DNI es 43.690.658
```

<b>La importancia de utilizar getters y setters para atributos privados:</b>

Hay situaciones en las que querremos que un `atributo privado` pueda ser `modificado` o `accedido` desde fuera de la clase, sin embargo hemos visto que esto NO es posible. La única manera de lograrlo es creando unos `métodos` especiales los cuáles se llaman `getter` y `setter`, los cuáles proporcionan una interfaz controlada para que los `atributos privados` puedan ser accedidos o modificados. Veremos como se utilizan más adelante.

<b>El problema de los atributos privados:</b>

Este tema es un poco más avanzado y lo veremos a profundidad cuando trabajemos con `herencia`, pero vamos a intentar introducirlo aquí por una cuestión de completitud. 

El problema que tienen los `atributos privados` es que son demasiado restrictivos, por lo que si una `clase padre` tiene atributos privados, entonces las `clases hija` NO podrán acceder de manera directa a dichos atributos, sino que solamente a sus `getters` y `setters` (en caso de estar implementados). Esto es un problema, ya que estamos dificultad el hecho de `heredar` atributos.

Para solventar este problema existen los `atributos protegidos`, de los cuáles hablaremos a continuación.

Para finalizar, recomiendo utilizar los `atributos privados` cuando sepamos que NO vamos a `heredar` de una clase. 

### Atributos protegidos.

De manera nativa JavaScript NO tiene soporte para `atributos protegidos`, por lo que en realidad son una convención entre programadores.

Los `atributos protegidos` buscan ser una alternativa menos restrictiva de los `atributos privados`. Básicamente, los `atributos protegidos` buscan impedir que se puedan utilizar de manera directa fuera de la clase (es decir que solamente se puedan utilizar dichos atributos mediante sus `getters` y `setters`), pero que para las `clases hijas` que la `hereden` puedan utilizar los atributos de manera directa sin necesidad de recurrir a los `getters` y `setters`.

Los `atributos protegidos` se crean de la siguiente forma general:

```javascript
class NombreDeLaClase {
  constructor(atributo1, atributo2, /* ...otros parámetros */) {
    this._atributoProtegido1 = atributo1;
    this._atributoProtegido2 = atributo2;
    // Otros atributos.
  }

  /* Otros métodos de la clase */

}
```

Notemos que todos los nombres de los `atributos protegidos` tienen como prefijo el símbolo `_` (guión bajo). Como ya he mencionado, los `atributos protegidos` NO son una característica propia de JavaScript, sino que son más bien una convención de código, lo que significa que el `_` (guón bajo) en realidad no hace nada, solamente especifica que los atributos son protegidos.


<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear atributos privados:

```javascript
/* Este código es incorrecto, lo muestro para ejemplificar. */

class Person {
  constructor(name, age, dni) {
    this._name = name;
    this._age = age;
    this._dni = dni;
  }

  toString() {
    return `Me llamo ${this._name}, tengo ${this._age} años y mi DNI es ${this._dni}`;
  }
}

const person1 = new Person("Heber", 22, "43.690.658");

console.log(person1.toString()); // Imprime: Me llamo Heber, tengo 22 años y mi DNI es 43.690.658
```

<b>El problema que tienen los atributos protegidos:</b>

Al ser una convención y NO una característica propia de JavaScript, entonces los `atributos protegidos` en realidad si pueden ser accedidos desde fuera de la clase, ya que en la práctica son `atributos públicos` cuyo nombre tiene el prefijo `_`. Así que como es posible accederlos y modificarlos fuera de la clase, esto significa que el interprete NO nos informará de que esta situación sucede. Sin embargo, la convención dicta que solamente debemos acceder y modificar a los atributos protegidos `dentro de la clase` o `dentro de una clase hija` al hacer `herencia`; esto significa que por más que podamos modificar o acceder a un `atributo protegido` fuera de la clase, NUNCA debemos hacerlo.

A continuación veremos un ejemplo de uso incorrecto de los `atributos protegidos`:

```javascript
/* Este código es incorrecto, lo muestro para ejemplificar. */

class Person {
  constructor(name, age, dni) {
    this._name = name;
    this._age = age;
    this._dni = dni;
  }

  // Esto es un método.
  // Notese que aquí utilizamos los atributos protegidos.
  toString() {
    return `Me llamo ${this._name}, tengo ${this._age} años y mi DNI es ${this._dni}`;
  }
}

const person1 = new Person("Heber", 22, "43.690.658");

console.log(person1.toString()); // Imprime: Me llamo Heber, tengo 22 años y mi DNI es 43.690.658

// Acceder al atributo protegido ROMPE la convención, sin embargo es posible hacerlo.
console.log(person1._name);

// Modificar al atributo protegido ROMPE la convención, sin embargo es posible hacerlo.
person1._name = "Naty";
```

El código anterior funcionaría sin NINGÚN problema, por más que rompa nuestra convención. Esto nos demuestra lo que hemos mencionado antes de que JavaScript no tendrá un trato especial con este tipo de atributos.

<b>La importancia de utilizar getters y setters para atributos protegidos:</b>

Hay situaciones en las que querremos que un `atributo protegido` pueda ser `modificado` o `accedido` desde fuera de la clase, sin embargo hemos visto que esto NO es posible ya que rompe la convención. La única manera de lograrlo es creando unos `métodos` especiales los cuáles se llaman `getter` y `setter`, los cuáles proporcionan una interfaz controlada para que los `atributos protegidos` puedan ser accedidos o modificados. Veremos como se utilizan más adelante.


### Constantes públicas y privadas.

## Métodos de clases.

Los métodos son `funciones` que generalmente `acceden o modifican los atributos` de alguna manera. Se definen de la siguiente forma general:

```javascript
class NombreDeLaClase {
  /* Constructor y/o atributos. */

  nombreDelMetodo(/* Parámetros que toma (opcional) */) {

    /* Cuerpo del método */

  }

  /* Otros métodos de la clase. */

}
```

Al igual que como sucede con la funciones convencionales, los `métodos` pueden tener o NO parámetros y también pueden retornar o NO algún valor.

Y notemos que luego podríamos utilizar el método de la siguiente forma general:

```javascript
const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

// En caso de que el método NO retorne ningún valor.
instanciaDeClase.nombreDelMetodo(/* Valores */);

// En caso de que el método SI retorne un valor.
const valorRetornado = instanciaDeClase.nombreDelMetodo(/* Valores */);
```

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear algunos métodos y como usarlos:

```javascript
class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  area() {
    return this._height * this._width;
  }

  toString() {
    return `Height: ${this._height}, Width: ${this._width}`;
  }

  changeHeight(height) {
    this._height = height;
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.area()); // Imprime: 200

console.log(rectangle.toString()); // Imprime: Height: 10, Width: 20

rectangle.changeHeight(30); // Cambia el valor de height a 30.

console.log(rectangle.area()); // Imprime: 600
```

### Getters.

El método `get` es un método especial utilizado para crear una interfaz controlada con la cuál se pueda `acceder` al valor de un atributo `protegido` o `privado`. Se define y utiliza de la siguiente forma general:

1. Para los `atributos protegidos` la forma general de definir el método `get` es:

   ```javascript
   class NombreDeLaClase {
     constructor(atributo1 /* ...otros parámetros */) {
       this._nombreAtributo1 = atributo1;
       // Otros atributos.
     }

     get nombreAtributo1() {
       /* Cuerpo del método (opcional) */

       return this._nombreAtributo1;
     }

     /* Otros métodos de la clase */
   }
   ```

   Notese que los `métodos get` NO toman ningún parámetro y retornan un valor.

   Y luego podríamos utilizarlo fuera de la clase de la siguiente forma general:

   ```javascript
   const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

   console.log(instanciaDeClase.nombreAtributo1);
   ```

   Notemos que al definir un método `get`, luego podemos accederlo como si estuvieramos accediendo un `atributo` convencional, pero lo que está haciendo es ejecutar el cuerpo del `método get`.

2. Para los `atributos privados` la forma general de definir el método `get` es muy similar a la vista previamente solamente que teniendo en cuenta que estamos trabajando con atributos privados:

   ```javascript
   class NombreDeLaClase {
     #nombreAtribPrivado1;

     constructor(atributo1 /* ...otros parámetros */) {
       this.#nombreAtribPrivado1 = atributo1;
       // Otros atributos.
     }

     get nombreAtribPrivado1() {
       /* Cuerpo del método (opcional) */

       return this.#nombreAtribPrivado1;
     }

     /* Otros métodos de la clase */
   }
   ```

   Notese que los `métodos get` NO toman ningún parámetro y retornan un valor.

   Y luego podríamos utilizarlo fuera de la clase de la siguiente forma general:

   ```javascript
   const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

   console.log(instanciaDeClase.nombreAtribPrivado1);
   ```

   Notemos que al definir un método `get`, luego podemos accederlo como si estuvieramos accediendo un `atributo` convencional, pero lo que está haciendo es ejecutar el cuerpo del `método get`.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear y utilizar un método `get`:

```javascript
class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  get height() {
    console.log("Ejecuto método get height.");

    return this.#height;
  }

  get width() {
    console.log("Ejecuto método get width.");

    return this.#width;
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.height);
/*
  Esta línea imprime lo siguiente:

  Ejecuto método get height.
  10
*/

console.log(rectangle.width);
/*
  Esta línea imprime lo siguiente:

  Ejecuto método get width.
  20
*/
```

En este ejemplo se puede observar claramente que se ejecuta el cuerpo de los `métodos get`.

<b>Uso especial de los métodos get:</b>

También podemos utilizar los `métodos get` para realizar operaciones personalizadas pero que fuera de la clase parezcan que se acceden a simples `atributos`. En otras palabras, podemos utilizar también los `métodos get` para retornar valores `derivados` de los `atributos`. Esto se hace de la siguiente forma general:

```javascript
class NombreDeLaClase {
  /* Constructor y/o atributos. */

  get nombrePropiedad() {

    /* Cuerpo del método */

    return valor; // El valor será derivado de los atributos.
  }

  /* Otros métodos de la clase. */

}
```

Y se podrá utilizar de la siguiente forma general:

```javascript
const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

console.log(instanciaDeClase.nombrePropiedad);
```

Este uso especial de los `métodos get` generalmente se utiliza para hace cierto calculos útiles que se podrán acceder fuera de la clase. También es utilizado para representar cierta información que contengan los atributos de manera organizada.

A continuación veremos un ejemplo de como utilizarlo de esta manera:

```javascript
class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width;
  }

  get area() {
    return this.#height * this.#width; // se calcula en base a los atributos privados
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.height); // 10

console.log(rectangle.width); // 20

console.log(rectangle.area); // 200
```

Como se puede observar en este ejemplo, el método `area` se crea como un `método get`. De esa manera, podemos accederlo fácilmente fuera de la clase. Notese que el resultado de `area` se deriva en base a los dos atributos privados.

### Setters.

El método `set` es un método especial utilizado para crear una interfaz controlada con la cuál se pueda `modificar` al valor de un atributo `protegido` o `privado`. Se define y utiliza de la siguiente forma general:

1. Para los `atributos protegidos` la forma general de definir el método `set` es:

   ```javascript
   class NombreDeLaClase {
     constructor(atributo1 /* ...otros parámetros */) {
       this._nombreAtributo1 = atributo1;
       // Otros atributos.
     }

     set nombreAtributo1(nuevoValorAtributo1) {
       /* Cuerpo del método (opcional) */

       this._nombreAtributo1 = nuevoValorAtributo1;
     }

     /* Otros métodos de la clase */
   }
   ```

   Notese que los `métodos set` tienen un único parámetro que será `el nuevo valor para el atributo protegido` y NO retornan nada.

   Y luego podríamos utilizarlo fuera de la clase de la siguiente forma general:

   ```javascript
   const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

   instanciaDeClase.nombreAtributo1 = nuevoValor;
   ```

   Notemos que al definir un método `set`, luego podemos modificar el atributo como si estuvieramos modificando un `atributo` convencional, pero lo que está haciendo es ejecutar el cuerpo del `método set`. Notese que el valor de `nuevoValor` se le pasará como argumento al método set.

2. Para los `atributos privados` la forma general de definir el método `set` es muy similar a la vista previamente pero teniendo en cuenta que estamos usando atributos privados:

   ```javascript
   class NombreDeLaClase {
     #nombreAtribPrivado1;

     constructor(atributo1 /* ...otros parámetros */) {
       this.#nombreAtribPrivado1 = atributo1;
       // Otros atributos.
     }

     get nombreAtribPrivado1() {
       /* Cuerpo del método (opcional) */

       return this.#nombreAtribPrivado1;
     }

     /* Otros métodos de la clase */
   }
   ```

   Notese que los `métodos set` tienen un único parámetro que será `el nuevo valor para el atributo privados` y NO retornan nada.

   Y luego podríamos utilizarlo fuera de la clase de la siguiente forma general:

   ```javascript
   const instanciaDeClase = new NombreDeLaClase(/* Valores constructor */);

   instanciaDeClase.nombreAtribPrivado1 = nuevoValor;
   ```

   Notemos que al definir un método `set`, luego podemos modificar el atributo como si estuvieramos modificando un `atributo` convencional, pero lo que está haciendo es ejecutar el cuerpo del `método set`. Notese que el valor de `nuevoValor` se le pasará como argumento al método set.

<b>Ejemplo:</b>

A continuación veremos un ejemplo de como crear y utilizar un método `set`:

```javascript
class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  get height() {
    return this.#height;
  }

  set height(newHeight) {
    console.log("Cuerpo del método set height");

    this.#height = newHeight;
  }

  get width() {
    return this.#width;
  }

  set width(newWidth) {
    console.log("Cuerpo del método set width");

    this.#width = newWidth;
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.height); // 10

console.log(rectangle.width); // 20

rectangle.height = 30000; // Imprime: Cuerpo del método set height

rectangle.width = 909090; // Imprime: Cuerpo del método set width

console.log(rectangle.height); // 30000

console.log(rectangle.width); // 909090
```

En este ejemplo se puede observar claramente que se ejecuta el cuerpo de los `métodos set` cuando queremos `modificar` el valor de un atributo.

<b>La importancia de utilizar métodos set</b>

El cuerpo del `método set` nos permite realizar comprobaciones sobre el `nuevo valor` que se le asignará al `atributo`. Esto resulta especialmente útil cuando necesitamos aplicar ciertas `especificaciones o reglas de validación`. En caso de que el nuevo valor no cumpla con estas especificaciones, podemos lanzar `excepciones` para manejar adecuadamente tales situaciones. Esta capacidad es especialmente valiosa en lenguajes de programación interpretados, como JavaScript, donde el control sobre los datos puede ser crucial para mantener la integridad y la consistencia en nuestras aplicaciones.

A continuación veremos un ejemplo de esto:

```javascript
class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  get height() {
    return this.#height;
  }

  set height(newHeight) {
    // Chequeamos que el nuevo valor NO sea negativo.
    if (newHeight < 0) {
      throw new Error("La altura no puede ser negativa");
    }

    this.#height = newHeight;
  }

  get width() {
    return this.#width;
  }

  set width(newWidth) {
    // Chequeamos que el nuevo valor NO sea negativo.
    if (newWidth < 0) {
      throw new Error("El ancho no puede ser negativo");
    }

    this.#width = newWidth;
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.height); // 10

console.log(rectangle.width); // 20


/* Ejemplos que si cumplen la propiedad */

rectangle.height = 30000; // Imprime: Cuerpo del método set height

rectangle.width = 909090; // Imprime: Cuerpo del método set width

console.log(rectangle.height); // 30000

console.log(rectangle.width); // 909090


/* Ejemplos que NO cumplen la propiedad */

rectangle.height = -100; // Imprime: Error: La altura no puede ser negativa
```

### Sobrecarga de métodos.

## Sobrecarga de constructores.

## Herencia de clases.

### El operador super.

### El problema de utilizar atributos privados.

## Static methods.

## Static class.
