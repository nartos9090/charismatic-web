import { Component } from '@angular/core';
import {ApiService} from '../../../services/api/api.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-copywriter',
  templateUrl: './copywriter.component.html',
  styleUrl: './copywriter.component.scss'
})
export class CopywriterComponent {
  loading = false
  title = ''
  productImage: File = null
  brandName = ''
  marketTarget = ''
  superiority = ''

  onKeyTitle(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value
  }

  onKeyBrandName(event: KeyboardEvent) {
    this.brandName = (event.target as HTMLInputElement).value
  }

  onInputProductImage(event: Event) {
    this.productImage = (event.target as HTMLInputElement).files[0]
  }

  onKeyMarketTarget(event: KeyboardEvent) {
    this.marketTarget = (event.target as HTMLInputElement).value
  }

  onKeySuperiority(event: KeyboardEvent) {
    this.superiority = (event.target as HTMLInputElement).value
  }

  constructor(private apiService: ApiService, private router: Router) {
  }

  async onSubmit() {
    this.loading = true
    try {
      const payload = new FormData()
      payload.append('title', this.title)
      payload.append('product_image', this.productImage)
      payload.append('brand_name', this.brandName)
      payload.append('market_target', this.marketTarget)
      payload.append('superiority', this.superiority)

      const { data } = await this.apiService.axios.post('/v1/copywriting-project/create-sync', payload)

      this.router.navigate(['/copywriter/' + data.id])
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }

}
