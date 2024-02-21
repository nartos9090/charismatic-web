import { Component } from '@angular/core';
import {ApiService} from '../../../../services/api/api.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-copywriter-detail',
  templateUrl: './copywriter-detail.component.html',
  styleUrl: './copywriter-detail.component.scss'
})
export class CopywriterDetailComponent {
  loading = false
  projectId = 0
  result = ''
  brand_name: string
  market_target: string
  product_image: string
  title: string

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['project_id'];
    this.fetch()
  }

  async fetch() {
    this.loading = true
    try {
      const { data } = await this.apiService.axios.get(`/v1/copywriting-project/detail/${this.projectId}`)

      this.result = data.data.result.replaceAll('**', '<br>').replaceAll('*', '<br>')
      this.brand_name = data.data.brand_name
      this.market_target = data.data.market_target
      this.product_image = data.data.product_image
      this.title = data.data.title
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }

  saveComment() {
    // this.result = 'Comment saved'
  }
}
