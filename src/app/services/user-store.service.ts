import { Injectable } from '@angular/core';
import {User} from './user-store.type'

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  isLoggedIn: boolean = false;

  user: User

  constructor() { }
}
