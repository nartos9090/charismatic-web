import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  title = ''
  productImage: File = null

  onKeyTitle(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value
  }

  onInputProductImage(event: Event) {
    this.productImage = (event.target as HTMLInputElement).files[0]
  }

  onSubmit() {
    alert('Thanks!');
  }
}
