import { Component, OnInit } from '@angular/core';
import {UserStoreService} from '../../../services/user-store.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userStore: UserStoreService) { }

  ngOnInit(): void {
  }

}
