//local variable declaration with following keywords
//var, let, const

for (let index = 0; index < 2; index++) {
    console.log(index);
}
//console.log(index);
const x = 100
//x = 200

//declartion
function add(a: number, b: number): number {
    return a + b
}
//expression
const subtract = function (a: number, b: number): number {
    return a - b
}
//expression using arrow function (new feature introduced in 2015)
const multiply = (a: number, b: number): number => a * b;

//classes
class Employee {
    //members are by defailt public
    id: number;
    name: string;
    basicPay: number;
    daPay: number;
    hraPay: number;
    totalPay = 0;

    constructor(id: number, name: string, basic: number, da: number, hra: number) {
        this.id = id;
        this.name = name;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
    }
    calculateSalary(): void {
        this.totalPay = this.basicPay + this.daPay + this.hraPay;
    }
}

class Developer extends Employee {
    incentivePay: number;
    constructor(id: number, name: string, basic: number, da: number, hra: number, incentive: number) {
        super(id, name, basic, da, hra);
        this.incentivePay = incentive;
    }
    calculateSalary(): void {
        super.calculateSalary();
        this.totalPay += this.incentivePay;
    }
}

const anilDev = new Developer(1, 'anil', 1000, 2000, 3000, 4000);
anilDev.calculateSalary();
console.log(`${anilDev.name} got total salary: ${anilDev.totalPay}`);

//spread operator (...)
const copyOfAnil = { ...anilDev }
console.log(`${copyOfAnil.name} got total salary: ${copyOfAnil.totalPay}`);

console.log(anilDev);
console.log(copyOfAnil);

const numbers = [10, 20, 30, 40]
//const numbers = new Array(10, 20, 30, 40);
const copyOfNumbers = [...numbers]

// const idValue = anilDev.id;
// const nameValue = anilDev.name;

//object destructuring
// const { id: idValue, name: nameValue } = anilDev
// console.log(idValue, nameValue);

// const id = anilDev.id;
// const totalPay = anilDev.totalPay;
// const { id: id, totalPay: totalPay } = anilDev
//since the name of the properties and local variables are same, no need to declare the local variables separately
const { id, totalPay } = anilDev
console.log(id, totalPay);

// const first = numbers[0]
// const third = numbers[2]

//array destructuring
const [first, , third] = numbers
console.log(first, third);

//additional feature in TS (not possible in JS)
interface IOpeartions {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
class Operations implements IOpeartions {
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
}

//interface can be used like a model type
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}
const laptop: Product = {
    id: 1,
    name: 'dell laptop',
    price: 10000,
    description: 'laptop'
}

const products: Product[] = [
    {
        id: 1,
        name: 'dell laptop',
        price: 10000,
    },
    {
        id: 2,
        name: 'hp laptop',
        price: 20000,
    }
]

//generic feature (not available with JS)
interface IRepository<T> {
    add(data: T): boolean;
    getAll(): T[];
}
class Repository implements IRepository<Product> {
    add(data: Product): boolean {
        return true;
    }
    getAll(): Product[] {
        return []
    }
}

function doSomething<T>(arg: T): void {
    console.log(arg);
}

//quick data member and corresponding constructor declaration (only in TS not in JS)
class Person {
    // public id: number;
    // public name: string;
    // public salary: number;

    // constructor(id: number, name: string, salary: number) {
    //     this.id = id
    //     this.name = name
    //     this.salary = salary
    //}
    // constructor(public id: number, public name: string, public salary: number) {

    // }

    // private id: number;
    // private name: string;
    // private salary: number;
    constructor(private id: number, private name: string, private salary: number) {
        //     this.id = id
        //     this.name = name
        //     this.salary = salary
    }
}



