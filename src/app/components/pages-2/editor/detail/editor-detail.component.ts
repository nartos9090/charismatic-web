import { Component } from '@angular/core';
import {GeneratedImageItem} from './editor-detail.component.type'
import {ApiService} from '../../../../services/api/api.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-editor-detail',
  templateUrl: './editor-detail.component.html',
  styleUrl: './editor-detail.component.scss'
})
export class EditorDetailComponent {
  loading = 0
  productImageId = 0
  productImage = ''
  maskImage = ''

  generatedImages: GeneratedImageItem[] = []

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.productImageId = this.route.snapshot.params['product_image_id']
    this.fetch()
  }

  regenerate() {
    this.router.navigate(['/editor/' + this.productImageId + '/generate'])
  }

  async fetch() {
    this.loading = 1
    try {
      const { data } = await this.apiService.axios.get(`/v1/product-image/detail/${this.productImageId}`)
      const { generated_images, ...item } = data.data
      this.productImage = item.image_url
      this.maskImage = item.mask_url
      this.generatedImages = generated_images
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = 0
    }
  }
}
