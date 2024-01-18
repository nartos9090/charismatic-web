import { Injectable } from '@angular/core';
import {User} from './user-store.type'

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  isLoggedIn: boolean = false;

  user: User

  constructor() {

  }

  ngInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  setUser(user: User) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }
}
