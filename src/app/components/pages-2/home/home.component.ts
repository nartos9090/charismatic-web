import { Component } from '@angular/core';
import {HistoryItem} from './home.component.type'
import {ApiService} from '../../../services/api/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  loading = false
  items: HistoryItem[] = []

  constructor(private apiService: ApiService) {
    this.fetch()
  }

  async fetch() {
    this.loading = true
    try {
      const { data } = await this.apiService.axios.get('/v1/history')
      this.items = data.data
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }
}
