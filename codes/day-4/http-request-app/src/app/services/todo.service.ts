import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { TODO_API_URL } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly _http: HttpClient) {

  }
  getTodos() {
    const todosObs: Observable<Todo[]> = this._http.get<Todo[]>(TODO_API_URL)
    return todosObs
  }
}
