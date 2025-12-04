import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly _http: HttpClient) {

  }
  getTodos() {
    const todosObs: Observable<Todo[]> = this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    return todosObs
  }
}
