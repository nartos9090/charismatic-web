import { Component } from '@angular/core';
import {ApiService} from '../../../services/api/api.service'
import {Router} from '@angular/router'
const imglyRemoveBackground = import('@imgly/background-removal')

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  loading = false
  title = ''
  productImage: Blob = null
  prompt = ''

  onKeyTitle(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value
  }

  onInputProductImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    const reader = new FileReader();

    reader.onload =  (e) => {
      const imageData = e.target.result;

      // Convert the image data to a Blob
      const [blob, mime] = this.dataURItoBlob(imageData);

      (await imglyRemoveBackground)(blob).then((result) => {
        this.productImage = new File([result], file.name, { type: mime })
        console.log(this.productImage)
      })
    };

    reader.readAsDataURL(file);
  }

  onKeyPrompt(event: KeyboardEvent) {
    this.prompt = (event.target as HTMLInputElement).value
  }

  constructor(private apiService: ApiService, private router: Router) {
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return [new Blob([ab], { type: mimeString }), mimeString];
  }

  async onSubmit() {
    this.loading = true
    try {
      const payload = new FormData()
      payload.append('title', this.title)
      payload.append('image', this.productImage)
      payload.append('mask', this.productImage)
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
