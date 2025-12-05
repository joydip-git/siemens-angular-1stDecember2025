import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private store = new BehaviorSubject<string | null>(null)
  tokenStorage = this.store.asObservable()

  saveToken(token: string) {
    this.store.next(token)
  }
  getToken() {
    return this.store.getValue()
  }
  removeToken() {
    this.store.next(null)
  }
}
