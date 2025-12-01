import { anilDev } from './3-ts-classes'
//spread operator (...)
const copyOfAnil = { ...anilDev }
console.log(`${copyOfAnil.name} got total salary: ${copyOfAnil.totalPay}`);

console.log(anilDev);
console.log(copyOfAnil);

export const numbers = [10, 20, 30, 40]
//export { numbers }

//const numbers = new Array(10, 20, 30, 40);
const copyOfNumbers = [...numbers]

console.log(copyOfAnil);


