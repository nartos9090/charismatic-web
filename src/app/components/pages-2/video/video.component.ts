import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
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

  onSubmit() {
    alert('Thanks!');
  }
}
