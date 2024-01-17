import { Component } from '@angular/core';

@Component({
  selector: 'app-copywriter',
  templateUrl: './copywriter.component.html',
  styleUrl: './copywriter.component.scss'
})
export class CopywriterComponent {

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

  constructor() {
  }

  onSubmit() {
    alert('Thanks!');
  }
}
