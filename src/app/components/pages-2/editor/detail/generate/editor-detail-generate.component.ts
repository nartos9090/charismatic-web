import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ApiService} from '../../../../../services/api/api.service'

@Component({
  selector: 'app-editor-detail-generate',
  templateUrl: './editor-detail-generate.component.html',
  styleUrl: './editor-detail-generate.component.scss'
})
export class EditorDetailGenerateComponent {

  loading = 0
  projectId = 0
  prompt = ''
  imgSrc = ''

  onKeyPrompt(event: KeyboardEvent) {
    this.prompt = (event.target as HTMLInputElement).value
  }

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params['product_image_id'];
  }

  ngOnInit(): void {
    this.fetch()
  }

  async fetch() {
    this.loading = 1
    try {
      const { data } = await this.apiService.axios.get(`/v1/product-image/detail/${this.projectId}`)
      const { generated_images, ...item } = data.data
      this.imgSrc = generated_images[0].image_url
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = 0
    }
  }

  async onSubmit(){
    this.loading = 1
    try {
      const payload = {
        prompt: this.prompt,
      }
      const { data } = await this.apiService.axios.post(`/v1/product-image/detail/${this.projectId}/create-sync`, payload)

      console.log(data.data)
      this.imgSrc = data.data.image_url
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = 0
    }
  }
}
