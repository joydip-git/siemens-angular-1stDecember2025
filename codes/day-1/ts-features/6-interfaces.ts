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