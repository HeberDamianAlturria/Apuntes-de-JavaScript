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