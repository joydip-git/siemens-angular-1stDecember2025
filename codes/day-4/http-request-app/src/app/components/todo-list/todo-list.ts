import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {

  private todosSubscription?: Subscription;

  todos = signal<Todo[] | undefined>(undefined);
  isFetchComplete = signal(false)
  errorInfo = signal('')

  constructor(private readonly _postSvc: PostService) {

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
