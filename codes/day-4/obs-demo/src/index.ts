import { of } from "rxjs"

class HttpClient {
    async get(url:string) {
        try {
            const response: Response = await fetch(url)
            const data = await response.json()
            return of(data)
        } catch (error) {
            throw error
        }
    }
}

const client = new HttpClient();
const todosObservable = await client.get("https://jsonplaceholder.typicode.com/todos")

todosObservable?.subscribe({
    next: (data) => {
        for (const todo of data) {
            console.log(todo);
        }
    },
    error: err => console.log(err)
})