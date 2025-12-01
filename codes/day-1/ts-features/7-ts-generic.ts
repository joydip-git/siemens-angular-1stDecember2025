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

