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

## Atributos de clases.

### El operador this.

### Atributos públicos.

### Atributos privados.

### Getters.

### Setters.

## Métodos de clases.

### Sobrecarga de métodos.

## Sobrecarga de constructores.

## Herencia de clases.

### El operador super.

## Static methods.

## Static class.
