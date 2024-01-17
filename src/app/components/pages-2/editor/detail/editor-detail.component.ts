import { Component } from '@angular/core';
import {GeneratedImageItem} from './editor-detail.component.type'

@Component({
  selector: 'app-editor-detail',
  templateUrl: './editor-detail.component.html',
  styleUrl: './editor-detail.component.scss'
})
export class EditorDetailComponent {
  productImageId = 0
  productImage = ''
  maskImage = ''

  generatedImages: GeneratedImageItem[] = [
    {
      "id": 4,
      "product_image_id": 31,
      "image_url": "public\\images\\1705350733.png",
      "prompt": "mountain view with sun"
    },
    {
      "id": 5,
      "product_image_id": 31,
      "image_url": "public\\images\\1705350865.png",
      "prompt": "river view with sun"
    }
  ]
}
