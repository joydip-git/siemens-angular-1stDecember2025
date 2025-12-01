
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
export const anilDev = new Developer(1, 'anil', 1000, 2000, 3000, 4000);
// export { anilDev };
anilDev.calculateSalary();
console.log(`${anilDev.name} got total salary: ${anilDev.totalPay}`);



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
    constructor(public id: number, public name: string, public salary: number) {
    }
}