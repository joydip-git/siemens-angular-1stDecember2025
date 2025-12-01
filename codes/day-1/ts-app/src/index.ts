var value = 100 //type inference
//value = 'joydip'
value = 20
console.log(value);

var nameValue: string = 'joydip'
console.log(nameValue);
//function declaration
function subtract(a: number, b: number): number {
    return a - b
}
//function expression in arrow function style
const divide = (a: number, b: number): number => a / b;

console.log(typeof (20));
console.log(typeof ('joydip'));
console.log(typeof (true));

/*
//constructor function
function person(idValue: number, nameVal: string, salaryVal: number) {
    //local variables of the function
    var x = 100
    let y = 200
    const z = 300

    //object data of the function (declared with this keyword)
    //value properties
    this.id = idValue;
    this.name = nameVal;
    this.salary = salaryVal;

    //functional property
    this.print = function () {
        return `Id=${this.id}, Name=${this.name}, salary=${this.salary}`;
    }
}

const p = new person(100, 'joydip', 10000)
console.log(p.name);
*/

class Person {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    set Id(id: number) {
        this.id = id
    }
    get Id(): number {
        return this.id
    }
    set Name(name: string) {
        this.name = name
    }
    get Name(): string {
        return this.name
    }
    set Salary(salary: number) {
        this.salary = salary
    }
    get Salary(): number {
        return this.salary
    }
    print() {
        return `Id=${this.id}, Name=${this.name}, salary=${this.salary}`;
    }
}

class Trainer extends Person {
    private subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject
    }
    set Subject(subject: string) {
        this.subject = subject
    }
    get Subject(): string {
        return this.subject
    }

    print(): string {
        return `${super.print()}, Subject=${this.subject}`
    }
}
//const p = new Person(100, 'joydip', 10000)
//console.log(p.print());
const joydipTrainer = new Trainer(100, 'Joydip', 1000, 'Angular')
console.log(joydipTrainer.print());
