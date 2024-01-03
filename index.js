const createCounter = (initialValue) => {
  let counter = initialValue;

  const getCounter = () => counter;

  const incrementCounter = () => {
    counter++;
  };

  const decrementCounter = () => {
    counter--;
  };

  return { getCounter, incrementCounter, decrementCounter };
};

const myCounter = createCounter(10);

console.log(myCounter.getCounter()); // Imprime: 10

myCounter.incrementCounter(); // Incremento en 1

console.log(myCounter.getCounter()); // Imprime: 11

myCounter.decrementCounter(); // Decremento en 1

console.log(myCounter.getCounter()); // Imprime: 10
