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

Estos atributos serán `públicos`. Esto quiere decir que dichos `atributos` pueden ser accedidos y modificados desde cualquier parte del código que tenga una referencia a una instancia de la clase. De forma general, esto significa que:

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

Debido a que JavaScript es un lenguaje de programación débilmente tipado, notemos que el hecho de utilizar `atributos` públicos puede generar muchos problemas de tipos. Por ejemplo:

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

Como se puede observar en este ejemplo, al atributo `dni` le cambiamos su tipo. Esto podría generar que sucedan situaciones inesperada  en el código.

### Atributos privados.

### Getters.

### Setters.

### Constantes públicas y privadas.

## Métodos de clases.

### Sobrecarga de métodos.

## Sobrecarga de constructores.

## Herencia de clases.

### El operador super.

## Static methods.

## Static class.
