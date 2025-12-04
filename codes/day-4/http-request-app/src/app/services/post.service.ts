import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { PRODUCT_API_URL } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly _http: HttpClient) {

  }
  getTodos() {
    const todosObs: Observable<Todo[]> = this._http.get<Todo[]>(PRODUCT_API_URL)
    return todosObs
  }
}
