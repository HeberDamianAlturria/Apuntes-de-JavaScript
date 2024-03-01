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

person1.dni = 43142142; // Le cambio el tipo del atributo dni de un String a un entero.

console.log(person1.toString()); // Imprime: Me llamo Natasha, tengo 23 años y mi DNI es 43142142