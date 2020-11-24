const { Dog } = require("./Dog");
const { Human } = require("./Human");

console.log(Human);
console.log(Dog);

const human = new Human();
const dog = new Dog();

human.walk();
dog.walk();

human.sing();
dog.bark();