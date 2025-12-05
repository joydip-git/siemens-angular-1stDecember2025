import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from '../../models/todo';
import { UpperCasePipe } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';

@Component({
  selector: 'app-todo-list',
  imports: [UpperCasePipe, StatusPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {

  private todosSubscription?: Subscription;

  todos = signal<Todo[] | undefined>(undefined);
  isFetchComplete = signal(false)
  errorInfo = signal('')

  constructor(private readonly _postSvc: TodoService) {

  }

  ngOnDestroy(): void {
    this.todosSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.todosSubscription =
      this
        ._postSvc
        .getTodos()
        .subscribe({
          next: (records: Todo[]) => {
            this.todos.set(records.splice(0, 10))
            this.isFetchComplete.set(true)
            this.errorInfo.set('')
          },
          error: (err) => {
            this.todos.set(undefined)
            this.isFetchComplete.set(true)
            this.errorInfo.set(err.message)
          }
        })
  }
}
