import { Mammal } from "./Mammal";

export class Human extends Mammal {
    constructor() {
        super();
        this.hands = 2;
        this.legs = 2;
    }

    walk() {
        super.walk();
        console.log('I walk in two legs');
    }

    sing() {
        console.log('Whoo lalala! I am singing');
    }
}