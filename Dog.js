import { Mammal } from "./Mammal";

export class Dog extends Mammal {
    constructor() {
        super();
        this.hands = 0;
        this.legs = 4;
    }

    walk() {
        super.walk();
        console.log('I walk in four legs');
    }

    bark() {
        console.log('Whoof Woof! I am barking');
    }
}