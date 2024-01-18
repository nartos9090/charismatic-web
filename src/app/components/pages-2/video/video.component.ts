import { Component } from '@angular/core';
import {ApiService} from '../../../services/api/api.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  loading = false
  title = '';
  brandName = '';
  productType = '';
  marketTarget = '';
  superiority = '';
  duration = 0;

  onKeyTitle(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value;
  }

  onKeyBrandName(event: KeyboardEvent) {
    this.brandName = (event.target as HTMLInputElement).value;
  }

  onKeyProductType(event: KeyboardEvent) {
    this.productType = (event.target as HTMLInputElement).value;
  }

  onKeyMarketTarget(event: KeyboardEvent) {
    this.marketTarget = (event.target as HTMLInputElement).value;
  }

  onKeySuperiority(event: KeyboardEvent) {
    this.superiority = (event.target as HTMLInputElement).value;
  }

  onKeyDuration(event: KeyboardEvent) {
    this.duration = Number((event.target as HTMLInputElement).value);
  }

  constructor(private apiService: ApiService, private router: Router) {
  }

  async onSubmit() {
    this.loading = true
    try {
      const payload = {
        product_title: this.title,
        brand_name: this.brandName,
        product_type: this.productType,
        market_target: this.marketTarget,
        superiority: this.superiority,
        duration: this.duration
      }
      const {data, status} = await this.apiService.axios.post('/v1/video-project/generate-sync',  payload)

      this.router.navigate(['/video/' + data.id])
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }
}
