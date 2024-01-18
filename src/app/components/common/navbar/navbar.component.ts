import {Component, OnInit} from '@angular/core'
import {UserStoreService} from '../../../services/user-store/user-store.service'
import {GoogleLoginProvider, SocialAuthService} from '@abacritt/angularx-social-login'
import {ApiService} from '../../../services/api/api.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    public userStore: UserStoreService,
    private authService: SocialAuthService,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.apiService.axios.post('/v1/auth/login/google/id-token', {
        id_token: user.idToken
      }).then((response) => {
        this.userStore.isLoggedIn = true

        const { token, ...user} = response.data.data
        this.userStore.user = response.data.data
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('accessToken', token)
      })
    })
  }

}
