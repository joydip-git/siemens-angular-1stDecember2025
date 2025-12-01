import { anilDev } from "./3-ts-classes";
import { numbers } from "./4-spreadoperator";
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
// console.log('here ' + this.totalPay);

// const first = numbers[0]
// const third = numbers[2]

//array destructuring
const [first, , third] = numbers
console.log(first, third);
