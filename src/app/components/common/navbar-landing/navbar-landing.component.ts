import { Component, OnInit } from '@angular/core';
import {UserStoreService} from '../../../services/user-store.service'

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss']
})
export class NavbarLandingComponent implements OnInit {

  constructor(public userStore: UserStoreService) { }

  ngOnInit(): void {
  }

}
