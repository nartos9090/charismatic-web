import { Component } from '@angular/core';
import {ApiService} from '../../../services/api/api.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  loading = false
  title = ''
  productImage: File = null
  prompt = ''

  onKeyTitle(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value
  }

  onInputProductImage(event: Event) {
    this.productImage = (event.target as HTMLInputElement).files[0]
  }

  onKeyPrompt(event: KeyboardEvent) {
    this.prompt = (event.target as HTMLInputElement).value
  }

  constructor(private apiService: ApiService, private router: Router) {
  }

  async onSubmit() {
    this.loading = true
    try {
      const payload = new FormData()
      payload.append('title', this.title)
      payload.append('image', this.productImage)
      // payload.append('mask', this.productImage)
      payload.append('prompt', this.prompt)

      const { data } = await this.apiService.axios.post('/v1/product-image/create-sync', payload)

      this.router.navigate(['/editor/' + data.data.product_image_id])
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }
}
